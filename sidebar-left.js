/**
 * sidebar-left.js — Shared left sidebar (tournament accordion).
 * Drop  <script src="sidebar-left.js"></script>  as first child of .content-layout.
 */
(function () {

  /* ── CSS ── */
  if (!document.getElementById('skb-sidebar-left-css')) {
    var css = [
      /* Shared layout */
      '.content-layout{display:flex;flex:1;min-height:0;align-items:flex-start;overflow:hidden;}',
      '.main-content{flex:1;min-width:0;height:100%;overflow-y:auto;scrollbar-width:thin;scrollbar-color:rgba(168,85,247,0.2) transparent;}',
      '.main-content::-webkit-scrollbar{width:4px;}',
      '.main-content::-webkit-scrollbar-thumb{background:rgba(168,85,247,0.3);border-radius:4px;}',

      /* Sidebar */
      '.sidebar-left{width:230px;flex-shrink:0;height:calc(100vh - 64px);overflow-y:auto;',
      '  background:rgba(5,8,22,0.65);border-right:1px solid rgba(255,255,255,0.06);',
      '  padding:20px 0 40px;scrollbar-width:thin;scrollbar-color:rgba(168,85,247,0.3) transparent;',
      '  position:sticky;top:0;}',
      '.sidebar-left::-webkit-scrollbar{width:4px;}',
      '.sidebar-left::-webkit-scrollbar-thumb{background:rgba(168,85,247,0.3);border-radius:4px;}',

      /* Title */
      ".sidebar-title{font-family:'Rajdhani',sans-serif;font-size:11px;font-weight:700;",
      '  letter-spacing:3px;text-transform:uppercase;color:rgba(255,255,255,0.35);',
      '  padding:0 18px 12px;}',

      /* Game accordion */
      '.game-item{border-bottom:1px solid rgba(255,255,255,0.04);}',
      '.game-header{display:flex;align-items:center;gap:10px;padding:11px 18px;cursor:pointer;',
      '  transition:background 0.2s;user-select:none;}',
      '.game-header:hover{background:rgba(255,255,255,0.04);}',
      '.game-icon{width:28px;height:28px;border-radius:7px;display:flex;align-items:center;',
      '  justify-content:center;flex-shrink:0;overflow:hidden;}',
      '.game-icon img{width:28px;height:28px;object-fit:contain;display:block;}',
      '.game-name{flex:1;font-size:12px;font-weight:600;letter-spacing:1px;',
      '  text-transform:uppercase;color:rgba(255,255,255,0.8);}',
      '.game-chevron{font-size:10px;color:rgba(255,255,255,0.3);transition:transform 0.25s;}',
      '.game-item.open .game-chevron{transform:rotate(90deg);}',

      /* Tournament list */
      '.tournament-list{display:none;padding:2px 0 8px;}',
      '.game-item.open .tournament-list{display:block;}',
      '.tournament-item{display:flex;align-items:center;justify-content:space-between;',
      '  padding:7px 18px 7px 44px;cursor:pointer;transition:background 0.2s;',
      '  text-decoration:none;color:inherit;}',
      '.tournament-item:hover{background:rgba(255,255,255,0.03);}',
      '.tournament-name{font-size:11px;color:rgba(255,255,255,0.55);letter-spacing:0.5px;}',
      '.t-live-dot{width:6px;height:6px;border-radius:50%;background:#ef4444;',
      '  box-shadow:0 0 5px #ef4444;animation:skb-pulse-dot 1.2s ease-in-out infinite;}',
      '@keyframes skb-pulse-dot{0%,100%{opacity:1}50%{opacity:0.35}}',
      '.t-count{font-size:10px;color:rgba(255,255,255,0.3);}',
    ].join('\n');

    var el = document.createElement('style');
    el.id = 'skb-sidebar-left-css';
    el.textContent = css;
    document.head.appendChild(el);
  }

  /* ── HTML ── */
  var aside = document.createElement('aside');
  aside.className = 'sidebar-left';
  aside.innerHTML = [
    '<div class="sidebar-title">Tournaments</div>',

    /* CS2 */
    '<div class="game-item open">',
    '  <div class="game-header" onclick="toggleGame(this)">',
    '    <div class="game-icon"><img src="img_M/logocs2.png" alt="CS2"/></div>',
    '    <span class="game-name">CS2</span>',
    '    <span class="game-chevron">▶</span>',
    '  </div>',
    '  <div class="tournament-list">',
    '    <a class="tournament-item" href="bracket.html"><span class="tournament-name">ESL Pro League S21</span><span class="t-live-dot"></span></a>',
    '    <a class="tournament-item" href="bracket.html"><span class="tournament-name">BLAST Premier Spring</span><span class="t-live-dot"></span></a>',
    '    <a class="tournament-item" href="bracket.html"><span class="tournament-name">IEM Cologne 2025</span><span class="t-count">3</span></a>',
    '  </div>',
    '</div>',

    /* League of Legends */
    '<div class="game-item">',
    '  <div class="game-header" onclick="toggleGame(this)">',
    '    <div class="game-icon"><img src="img_M/logo lol.png" alt="LoL"/></div>',
    '    <span class="game-name">League of Legends</span>',
    '    <span class="game-chevron">▶</span>',
    '  </div>',
    '  <div class="tournament-list">',
    '    <a class="tournament-item" href="bracket.html"><span class="tournament-name">LEC Spring Split</span><span class="t-live-dot"></span></a>',
    '    <a class="tournament-item" href="bracket.html"><span class="tournament-name">Worlds 2025</span><span class="t-count">8</span></a>',
    '    <a class="tournament-item" href="bracket.html"><span class="tournament-name">LCS Summer</span><span class="t-count">4</span></a>',
    '  </div>',
    '</div>',

    /* Valorant */
    '<div class="game-item">',
    '  <div class="game-header" onclick="toggleGame(this)">',
    '    <div class="game-icon"><img src="img_M/logo valo.png" alt="Valorant"/></div>',
    '    <span class="game-name">Valorant</span>',
    '    <span class="game-chevron">▶</span>',
    '  </div>',
    '  <div class="tournament-list">',
    '    <a class="tournament-item" href="bracket.html"><span class="tournament-name">VCT Americas</span><span class="t-live-dot"></span></a>',
    '    <a class="tournament-item" href="bracket.html"><span class="tournament-name">VCT EMEA</span><span class="t-count">5</span></a>',
    '    <a class="tournament-item" href="bracket.html"><span class="tournament-name">Champions 2025</span><span class="t-count">2</span></a>',
    '  </div>',
    '</div>',

    /* Dota 2 */
    '<div class="game-item">',
    '  <div class="game-header" onclick="toggleGame(this)">',
    '    <div class="game-icon"><img src="img_M/logo dota2.png" alt="Dota 2"/></div>',
    '    <span class="game-name">Dota 2</span>',
    '    <span class="game-chevron">▶</span>',
    '  </div>',
    '  <div class="tournament-list">',
    '    <a class="tournament-item" href="bracket.html"><span class="tournament-name">The International 2025</span><span class="t-live-dot"></span></a>',
    '    <a class="tournament-item" href="bracket.html"><span class="tournament-name">ESL One Berlin</span><span class="t-count">6</span></a>',
    '    <a class="tournament-item" href="bracket.html"><span class="tournament-name">DreamLeague S25</span><span class="t-count">3</span></a>',
    '  </div>',
    '</div>',

    /* Rocket League */
    '<div class="game-item">',
    '  <div class="game-header" onclick="toggleGame(this)">',
    '    <div class="game-icon"><img src="img_M/logo rocket league.png" alt="Rocket League"/></div>',
    '    <span class="game-name">Rocket League</span>',
    '    <span class="game-chevron">▶</span>',
    '  </div>',
    '  <div class="tournament-list">',
    '    <a class="tournament-item" href="bracket.html"><span class="tournament-name">RLCS 2025 Majors</span><span class="t-count">4</span></a>',
    '    <a class="tournament-item" href="bracket.html"><span class="tournament-name">EU Regional</span><span class="t-live-dot"></span></a>',
    '    <a class="tournament-item" href="bracket.html"><span class="tournament-name">World Championship</span><span class="t-count">1</span></a>',
    '  </div>',
    '</div>',

    /* Overwatch 2 */
    '<div class="game-item">',
    '  <div class="game-header" onclick="toggleGame(this)">',
    '    <div class="game-icon"><img src="img_M/logo overwatch2.png" alt="Overwatch 2"/></div>',
    '    <span class="game-name">Overwatch 2</span>',
    '    <span class="game-chevron">▶</span>',
    '  </div>',
    '  <div class="tournament-list">',
    '    <a class="tournament-item" href="bracket.html"><span class="tournament-name">OWL Grand Finals</span><span class="t-count">2</span></a>',
    '    <a class="tournament-item" href="bracket.html"><span class="tournament-name">Contenders EU</span><span class="t-count">5</span></a>',
    '  </div>',
    '</div>',
  ].join('\n');

  var s = document.currentScript;
  s.parentNode.insertBefore(aside, s);

})();

/* Global accordion toggle — shared by all pages */
if (typeof window.toggleGame !== 'function') {
  window.toggleGame = function (header) {
    var item   = header.parentElement;
    var isOpen = item.classList.contains('open');
    item.closest('.sidebar-left').querySelectorAll('.game-item').forEach(function (el) {
      el.classList.remove('open');
    });
    if (!isOpen) item.classList.add('open');
  };
}