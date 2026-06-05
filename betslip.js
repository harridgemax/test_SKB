/* ========================================================
   betslip.js — Bet Builder partagé entre toutes les pages
   Utilise localStorage pour persister les paris
   ======================================================== */
(function () {
  'use strict';

  var STORE_KEY = 'sb_bets';

  /* ── Helpers localStorage ── */
  function getBets() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || []; } catch (e) { return []; }
  }
  function saveBets(bets) {
    localStorage.setItem(STORE_KEY, JSON.stringify(bets));
  }

  /* ── Échappement HTML ── */
  function esc(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  /* ── Getter stake input (gère les deux pages) ── */
  function getStake() {
    return document.querySelector('.bb-stake-input') || document.getElementById('bbStake');
  }

  /* ── Cote combinée ── */
  function calcCombined(bets) {
    if (!bets.length) return 0;
    return bets.reduce(function (acc, b) { return acc * b.odds; }, 1);
  }

  /* ── Active / désactive le bouton submit ── */
  function setSubmitState(enabled) {
    var btn = document.querySelector('.bb-submit');
    if (!btn) return;
    btn.disabled = !enabled;
    btn.style.opacity = enabled ? '' : '0.35';
    btn.style.cursor  = enabled ? '' : 'not-allowed';
    /* On garde pointer-events actif pour que le hover reste visible */
  }

  /* ── Rendu du panier ── */
  function renderBets() {
    var list = document.getElementById('bb-bets-list');
    if (!list) return;

    var bets      = getBets();
    var countEl   = document.getElementById('bb-count');
    var combEl    = document.getElementById('bb-combined-val');
    var gainsEl   = document.getElementById('bbGains');
    var stakeEl   = getStake();
    var combined  = calcCombined(bets);
    var stakeVal  = parseFloat(stakeEl ? stakeEl.value : '0') || 0;
    var isEmpty   = bets.length === 0;

    /* Vider et reconstruire les cartes de paris */
    list.innerHTML = '';
    if (isEmpty) {
      list.innerHTML = '<div class="bb-empty">Nothing here yet...</div>';
    } else {
      bets.forEach(function (bet, i) {
        var div = document.createElement('div');
        div.className = 'bb-bet';
        div.innerHTML =
          '<div class="bb-bet-game">'   + esc(bet.game)  + '</div>' +
          '<div class="bb-bet-match">'  + esc(bet.match) + '</div>' +
          '<div class="bb-bet-pick">'   + esc(bet.pick)  + '</div>' +
          '<div class="bb-bet-odds">'   + bet.odds.toFixed(2) + '</div>' +
          '<div class="bb-bet-remove" data-idx="' + i + '">✕ remove</div>';
        list.appendChild(div);
      });
      list.querySelectorAll('.bb-bet-remove').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var idx = parseInt(btn.getAttribute('data-idx'));
          var b = getBets();
          b.splice(idx, 1);
          saveBets(b);
          renderBets();
        });
      });
    }

    /* Compteur */
    if (countEl) countEl.textContent = bets.length;

    /* Cote combinée — masquée si vide */
    var combRow = document.querySelector('.bb-combined');
    if (combRow) combRow.style.display = isEmpty ? 'none' : '';
    var dividers = document.querySelectorAll('.bb-divider');
    dividers.forEach(function (d) { d.style.display = isEmpty ? 'none' : ''; });
    var stakeSection = document.querySelector('.bb-stake-row');
    if (stakeSection) stakeSection.style.display = isEmpty ? 'none' : '';
    var qaRow = document.querySelector('.bb-quick-amounts');
    if (qaRow) qaRow.style.display = isEmpty ? 'none' : '';
    if (combEl) combEl.textContent = combined.toFixed(2);

    /* Gains potentiels */
    if (gainsEl) gainsEl.textContent = isEmpty ? '£0.00' : '£' + (stakeVal * combined).toFixed(2);

    /* Submit grisé si vide */
    setSubmitState(!isEmpty);
  }

  /* ── Mise à jour des gains seulement ── */
  function updateGains() {
    var bets     = getBets();
    var combined = calcCombined(bets);
    var stakeEl  = getStake();
    var stakeVal = parseFloat(stakeEl ? stakeEl.value : '0') || 0;
    var gainsEl  = document.getElementById('bbGains');
    var combEl   = document.getElementById('bb-combined-val');
    if (gainsEl) gainsEl.textContent = bets.length ? '£' + (stakeVal * combined).toFixed(2) : '£0.00';
    if (combEl)  combEl.textContent  = combined.toFixed(2);
  }

  /* ── API publique : ajouter un pari depuis n'importe quelle page ── */
  window.addBet = function (game, match, pick, odds) {
    var bets = getBets();
    /* Pas de doublon sur même match + choix */
    var dup = bets.some(function (b) { return b.match === match && b.pick === pick; });
    if (dup) return;
    bets.push({ game: String(game), match: String(match), pick: String(pick), odds: parseFloat(odds) });
    saveBets(bets);
    renderBets();
    /* Flash visuel sur le sidebar */
    var aside = document.querySelector('.sidebar-right');
    if (aside) {
      aside.classList.remove('bb-flash');
      void aside.offsetWidth; /* reflow */
      aside.classList.add('bb-flash');
      setTimeout(function () { aside.classList.remove('bb-flash'); }, 400);
    }
  };

  /* ── Init au chargement de la page ── */
  document.addEventListener('DOMContentLoaded', function () {

    /* Injecter le CSS utilitaire */
    var style = document.createElement('style');
    style.textContent =
      '#bb-bets-list .bb-empty{font-size:12px;color:rgba(255,255,255,0.28);text-align:center;padding:18px 0;font-style:italic;letter-spacing:0.3px;}' +
      '#bb-bets-list .bb-bet-odds{align-self:flex-start;}' +
      '.hm-odd.bb-selected{background:#070b1f!important;border-color:rgba(255,255,255,0.35)!important;color:#fff!important;}' +
      '.event-card.bb-selected .event-odd-btn{background:#070b1f!important;border-color:rgba(255,255,255,0.35)!important;}' +
      '.dbl-option.bb-selected{background:rgba(255,255,255,0.1)!important;}' +
      '@keyframes bb-flash-anim{0%{box-shadow:0 0 0 2px rgba(255,255,255,0.5)}100%{box-shadow:none}}' +
      '.bb-flash{animation:bb-flash-anim 0.4s ease-out;}' +

    document.head.appendChild(style);

    /* Rendu initial */
    renderBets();

    /* Stake input */
    var stakeEl = getStake();
    if (stakeEl) stakeEl.addEventListener('input', updateGains);

    /* Boutons montants rapides */
    document.querySelectorAll('.bb-qa').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var add = parseFloat(btn.textContent.replace('+', '')) || 0;
        if (stakeEl) stakeEl.value = (parseFloat(stakeEl.value) || 0) + add;
        updateGains();
      });
    });

    /* Soumettre le pari */
    var submit = document.querySelector('.bb-submit');
    if (submit) submit.addEventListener('click', function () {
      var stake = parseFloat(stakeEl ? stakeEl.value : '0') || 0;
      if (stake <= 0) { alert('Please enter a valid stake.'); return; }
      var gainsEl = document.getElementById('bbGains');
      alert('Bet placed: £' + stake.toFixed(2) + ' — Potential winnings: ' + (gainsEl ? gainsEl.textContent : ''));
      saveBets([]);
      if (stakeEl) stakeEl.value = '10';
      renderBets();
    });

    /* ── Particules blanches sur le bouton Placer le pari (toutes les pages) ── */
    (function () {
      var btn = document.querySelector('.bb-submit');
      if (!btn) return;
      function spawnWhiteParticle() {
        var p = document.createElement('span');
        var size = Math.random() * 5 + 2;
        var x = Math.random() * btn.offsetWidth;
        var y = Math.random() * btn.offsetHeight;
        var angle = Math.random() * 360;
        var dist  = Math.random() * 50 + 15;
        var dx = Math.cos(angle * Math.PI / 180) * dist;
        var dy = Math.sin(angle * Math.PI / 180) * dist;
        var dur = Math.random() * 500 + 300;
        p.style.cssText =
          'position:absolute;left:'+x+'px;top:'+y+'px;width:'+size+'px;height:'+size+'px;' +
          'border-radius:50%;pointer-events:none;z-index:100;' +
          'background:rgba(255,255,255,'+(Math.random()*0.5+0.4)+');' +
          'box-shadow:0 0 '+(size*2.5)+'px rgba(255,255,255,0.8);';
        btn.appendChild(p);
        p.animate(
          [{transform:'translate(0,0) scale(1)',opacity:1},
           {transform:'translate('+dx+'px,'+dy+'px) scale(0)',opacity:0}],
          {duration:dur, easing:'ease-out', fill:'forwards'}
        ).onfinish = function () { p.remove(); };
      }
      var iv;
      btn.addEventListener('mouseenter', function () { iv = setInterval(spawnWhiteParticle, 65); });
      btn.addEventListener('mouseleave', function () { clearInterval(iv); });
    })();

    /* ── Hot Matches (index.html) ── */
    document.querySelectorAll('.hm-odd').forEach(function (odd) {
      odd.addEventListener('click', function (e) {
        e.stopPropagation(); /* Empêche la navigation vers match.html */
        var row    = odd.closest('.hm-row');
        var gameEl = row && row.querySelector('.hm-game img');
        var game   = gameEl ? gameEl.getAttribute('alt') : 'Esport';
        var teams  = row ? row.querySelectorAll('.hm-team') : [];
        var teamA  = teams[0] ? teams[0].textContent.trim() : '?';
        var teamB  = teams[1] ? teams[1].textContent.trim() : '?';
        var matchStr = teamA + ' vs ' + teamB;
        var allOdds  = row ? Array.from(row.querySelectorAll('.hm-odd')) : [];
        var oddIndex = allOdds.indexOf(odd);
        var pick     = (oddIndex === 0 ? teamA : teamB) + ' to win';
        var oddsVal  = parseFloat(odd.textContent) || 1;
        /* Toggle visuel */
        allOdds.forEach(function (o) { if (o !== odd) o.classList.remove('bb-selected'); });
        odd.classList.toggle('bb-selected');
        if (odd.classList.contains('bb-selected')) {
          addBet(game, matchStr, pick, oddsVal);
        } else {
          /* Retirer si décoché */
          var b = getBets();
          var newB = b.filter(function (x) { return !(x.match === matchStr && x.pick === pick); });
          saveBets(newB);
          renderBets();
        }
      });
    });

    /* ── Event cards (match.html) ── */
    document.querySelectorAll('.event-odd-btn').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var card   = btn.closest('.event-card');
        var title  = card && card.querySelector('.event-head-title');
        var row    = btn.closest('.event-option-row');
        var label  = row && row.querySelector('.event-option-label');
        var pick   = (label ? label.textContent.trim() : '') +
                     (title ? ' — ' + title.textContent.trim() : '');
        var game   = 'CS2';
        var match  = 'NaVi vs Spirit';
        var oddsVal = parseFloat(btn.textContent) || 1;
        if (card) card.classList.add('bb-selected');
        addBet(game, match, pick, oddsVal);
      });
    });

    /* ── Double-bet options (match.html) ── */
    document.querySelectorAll('.dbl-option').forEach(function (opt) {
      opt.addEventListener('click', function () {
        var row   = opt.closest('.double-bet-row');
        var title = row && row.querySelector('.dbl-title');
        var team  = opt.querySelector('.dbl-team');
        var oddEl = opt.querySelector('.dbl-odd');
        var pick  = (team ? team.textContent.trim() : '') +
                    (title ? ' — ' + title.textContent.trim() : '');
        var game   = 'CS2';
        var match  = 'NaVi vs Spirit';
        var oddsVal = parseFloat(oddEl ? oddEl.textContent : '0') || 1;
        opt.classList.add('bb-selected');
        addBet(game, match, pick, oddsVal);
      });
    });

  });

})();
