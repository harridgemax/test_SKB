/**
 * sidebar-right.js — Shared right sidebar (Bet Slip / Bet Builder).
 * Drop  <script src="sidebar-right.js"></script>  as last child of .content-layout.
 * Automatically loads betslip.js once.
 */
(function () {

  /* ── CSS ── */
  if (!document.getElementById('skb-sidebar-right-css')) {
    var css = [
      '.sidebar-right{width:290px;flex-shrink:0;height:calc(100vh - 64px);overflow-y:auto;',
      '  background:rgba(5,8,22,0.65);border-left:1px solid rgba(255,255,255,0.06);',
      '  padding:20px 16px 40px;scrollbar-width:thin;scrollbar-color:rgba(168,85,247,0.3) transparent;',
      '  position:sticky;top:0;display:flex;flex-direction:column;gap:14px;',
      '  transition:width 0.25s ease,min-width 0.25s ease,padding 0.25s ease;}',
      '.sidebar-right::-webkit-scrollbar{width:4px;}',
      '.sidebar-right::-webkit-scrollbar-thumb{background:rgba(168,85,247,0.3);border-radius:4px;}',
      '.sidebar-right.collapsed{width:38px;min-width:38px;padding:14px 6px;overflow:hidden;}',
      '.sidebar-right.collapsed>*:not(.bb-header){display:none;}',
      '.sidebar-right.collapsed .bb-title,.sidebar-right.collapsed .bb-count{display:none;}',

      '.bb-toggle{margin-left:auto;background:none;border:none;cursor:pointer;',
      '  color:rgba(168,85,247,0.8);font-size:18px;line-height:1;padding:2px 4px;',
      '  transition:transform 0.3s,color 0.2s;flex-shrink:0;}',
      '.bb-toggle:hover{color:#a855f7;}',
      '.sidebar-right.collapsed .bb-toggle{transform:scaleX(-1);}',

      ".bb-header{display:flex;align-items:center;gap:10px;}",
      ".bb-title{font-family:'Rajdhani',sans-serif;font-size:15px;font-weight:700;letter-spacing:3px;text-transform:uppercase;flex:1;}",
      '.bb-count{background:#7c3aed;color:#fff;font-size:10px;font-weight:700;width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;}',

      '.bb-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;',
      '  padding:32px 16px;background:rgba(255,255,255,0.03);border:1px dashed rgba(255,255,255,0.1);',
      '  border-radius:14px;text-align:center;}',
      '.bb-empty-icon{font-size:28px;opacity:0.4;}',
      '.bb-empty-text{font-size:11px;color:rgba(255,255,255,0.35);letter-spacing:0.5px;line-height:1.5;}',

      '.bb-bet{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:12px 14px;position:relative;}',
      '.bb-bet-game{font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#a855f7;margin-bottom:4px;}',
      '.bb-bet-match{font-size:11px;color:rgba(255,255,255,0.5);margin-bottom:6px;}',
      ".bb-bet-pick{font-family:'Rajdhani',sans-serif;font-size:14px;font-weight:700;letter-spacing:1px;color:#fff;}",
      ".bb-bet-odds{position:absolute;top:12px;right:14px;font-family:'Rajdhani',sans-serif;font-size:15px;font-weight:800;color:#fff;background:#070b1f;border:1px solid rgba(255,255,255,0.1);border-radius:7px;padding:3px 10px;}",
      '.bb-bet-remove{position:absolute;bottom:10px;right:14px;font-size:10px;color:rgba(255,255,255,0.75);cursor:pointer;letter-spacing:1px;}',
      '.bb-bet-remove:hover{color:#fff;}',

      '.bb-divider{height:1px;background:rgba(255,255,255,0.06);}',

      '.bb-combined{display:flex;justify-content:space-between;align-items:center;padding:4px 0;}',
      '.bb-combined-label{font-size:11px;color:#fff;letter-spacing:1px;text-transform:uppercase;font-weight:700;}',
      ".bb-combined-val{font-family:'Rajdhani',sans-serif;font-size:20px;font-weight:700;color:#fff;background:#070b1f;border:1px solid rgba(255,255,255,0.1);border-radius:7px;padding:3px 10px;}",

      '.bb-stake-row{display:flex;flex-direction:column;gap:6px;}',
      '.bb-stake-label{font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.4);}',
      ".bb-stake-input{background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:10px;padding:10px 14px;color:#fff;font-family:'Exo 2',sans-serif;font-size:14px;font-weight:600;outline:none;width:100%;transition:border-color 0.2s;}",
      '.bb-stake-input:focus{border-color:#a855f7;}',

      '.bb-quick-amounts{display:flex;gap:6px;}',
      '.bb-qa{flex:1;padding:6px 0;text-align:center;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);border-radius:8px;font-size:11px;font-weight:700;color:rgba(255,255,255,0.6);cursor:pointer;transition:background 0.2s,color 0.2s;}',
      '.bb-qa:hover{background:rgba(168,85,247,0.2);color:#fff;border-color:#a855f7;}',

      '.bb-gains{display:flex;justify-content:space-between;align-items:center;background:rgba(168,85,247,0.08);border:1px solid rgba(168,85,247,0.2);border-radius:10px;padding:10px 14px;}',
      '.bb-gains-label{font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#fff;}',
      ".bb-gains-val{font-family:'Rajdhani',sans-serif;font-size:22px;font-weight:700;color:#fff;}",

      ".bb-submit{width:100%;padding:12px;border:1px solid rgba(255,255,255,0.35);border-radius:12px;cursor:pointer;font-family:'Rajdhani',sans-serif;font-size:16px;font-weight:700;letter-spacing:1px;background:rgba(255,255,255,0.18);color:#fff;transition:background 0.2s,border-color 0.2s;position:relative;overflow:visible;}",
      '.bb-submit:hover{background:rgba(255,255,255,0.24);border-color:rgba(255,255,255,0.55);}',
      '.bb-terms{font-size:9px;color:rgba(255,255,255,0.2);text-align:center;letter-spacing:0.5px;line-height:1.5;}',
    ].join('\n');

    var el = document.createElement('style');
    el.id = 'skb-sidebar-right-css';
    el.textContent = css;
    document.head.appendChild(el);
  }

  /* ── HTML ── */
  var aside = document.createElement('aside');
  aside.className = 'sidebar-right';
  aside.innerHTML = [
    '<div class="bb-header">',
    '  <span class="bb-title">Bet Slip</span>',
    '  <span class="bb-count" id="bb-count">0</span>',
    '  <button class="bb-toggle" id="bbToggle" title="Collapse / Expand">&#10095;</button>',
    '</div>',
    '<div id="bb-bets-list"></div>',
    '<div class="bb-divider"></div>',
    '<div class="bb-combined">',
    '  <span class="bb-combined-label">Combined odds</span>',
    '  <span class="bb-combined-val" id="bb-combined-val">1.00</span>',
    '</div>',
    '<div class="bb-divider"></div>',
    '<div class="bb-stake-row">',
    '  <span class="bb-stake-label">Stake (£)</span>',
    '  <input class="bb-stake-input" type="number" placeholder="0.00" value="10"/>',
    '</div>',
    '<div class="bb-quick-amounts">',
    '  <div class="bb-qa">+5</div>',
    '  <div class="bb-qa">+10</div>',
    '  <div class="bb-qa">+25</div>',
    '  <div class="bb-qa">+50</div>',
    '</div>',
    '<div class="bb-gains">',
    '  <span class="bb-gains-label">Potential winnings</span>',
    '  <span class="bb-gains-val" id="bbGains">£10.00</span>',
    '</div>',
    '<button class="bb-submit">Place Bet</button>',
    '<div class="bb-terms">Responsible gambling · 18+ · T&amp;Cs apply</div>',
  ].join('\n');

  var s = document.currentScript;
  s.parentNode.insertBefore(aside, s);

  /* ── Toggle collapse ── */
  aside.querySelector('#bbToggle').addEventListener('click', function () {
    aside.classList.toggle('collapsed');
  });

  /* ── Load betslip.js once ── */
  if (!document.getElementById('skb-betslip-script')) {
    var bs = document.createElement('script');
    bs.id  = 'skb-betslip-script';
    /* resolve relative to this script's URL */
    var base = (document.currentScript || {src:''}).src.replace(/sidebar-right\.js.*$/, '');
    bs.src = base + 'betslip.js';
    document.head.appendChild(bs);
  }

})();