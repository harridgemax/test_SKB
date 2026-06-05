/**
 * sidebar-left.js — Shared left sidebar (live block + flat game nav).
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

      /* Sidebar container */
      '.sidebar-left{',
      '  width:230px;flex-shrink:0;',
      '  height:calc(100vh - 64px);',
      '  background:rgba(5,8,22,0.65);',
      '  border-right:1px solid rgba(255,255,255,0.06);',
      '  padding:14px 0 40px;',
      '  position:sticky;top:0;',
      '  display:flex;flex-direction:column;',
      '  overflow:hidden;',
      '  transition:width 0.25s ease,min-width 0.25s ease;',
      '}',

      /* Collapsed state */
      '.sidebar-left.sl-collapsed{width:44px;min-width:44px;}',
      '.sidebar-left.sl-collapsed .sl-game-item{padding:10px 0;justify-content:center;border-left-color:transparent;position:relative;}',
      '.sidebar-left.sl-collapsed .sl-game-item.active{border-left-color:transparent;background:rgba(168,85,247,0.12);}',
      '.sidebar-left.sl-collapsed .sl-live-block{margin:0 0 6px;padding:11px 0;justify-content:center;',
      '  border-left:none;border-right:none;border-radius:0;border-top:none;border-bottom:1px solid rgba(255,255,255,0.06);}',
      '.sidebar-left.sl-collapsed .sl-toggle-wrap{justify-content:center;padding:0 0 10px;}',
      '.sidebar-left.sl-collapsed .sl-toggle{transform:scaleX(-1);}',
      /* Text elements fade+shrink instead of display:none to avoid icon jumps */
      '.sidebar-left.sl-collapsed .sl-game-name{opacity:0;max-width:0;margin:0;}',
      '.sidebar-left.sl-collapsed .sl-section-title{opacity:0;max-height:0;padding:0;margin:0;overflow:hidden;}',
      '.sidebar-left.sl-collapsed .sl-live-text{opacity:0;max-width:0;margin:0;}',
      /* Hover effect when collapsed: icon glow + tooltip label */
      '.sidebar-left.sl-collapsed .sl-game-item:hover{background:rgba(168,85,247,0.12);}',
      '.sidebar-left.sl-collapsed .sl-game-item:hover .sl-game-icon img{transform:scale(1.18);filter:drop-shadow(0 0 7px rgba(168,85,247,0.7));}',
      '.sidebar-left.sl-collapsed .sl-game-item::after{',
      '  content:attr(title);position:absolute;',
      '  left:calc(100% + 10px);top:50%;',
      '  transform:translateY(-50%) translateX(-6px);',
      '  opacity:0;pointer-events:none;',
      "  background:rgba(10,13,30,0.96);border:1px solid rgba(168,85,247,0.3);",
      '  border-radius:8px;padding:6px 12px;',
      "  font-family:'Exo 2',sans-serif;font-size:11px;font-weight:700;",
      '  letter-spacing:1px;text-transform:uppercase;color:rgba(255,255,255,0.85);',
      '  white-space:nowrap;z-index:9999;',
      '  transition:opacity 0.15s ease,transform 0.15s ease;',
      '}',
      '.sidebar-left.sl-collapsed .sl-game-item:hover::after{opacity:1;transform:translateY(-50%) translateX(0);}',

      /* Toggle */
      '.sl-toggle-wrap{display:flex;justify-content:flex-end;padding:0 10px 10px;flex-shrink:0;}',
      '.sl-toggle{background:none;border:none;cursor:pointer;',
      '  color:rgba(168,85,247,0.7);font-size:17px;line-height:1;padding:2px 4px;',
      '  transition:transform 0.3s,color 0.2s;}',
      '.sl-toggle:hover{color:#a855f7;}',

      /* Live block */
      '.sl-live-block{',
      '  display:flex;align-items:center;gap:10px;',
      '  margin:0 10px 6px;',
      '  padding:10px 12px;',
      '  background:rgba(239,68,68,0.07);',
      '  border:1px solid rgba(239,68,68,0.18);',
      '  border-radius:10px;',
      '  cursor:pointer;text-decoration:none;color:inherit;',
      '  flex-shrink:0;',
      '  transition:background 0.18s,border-color 0.18s;',
      '}',
      '.sl-live-block:hover{background:rgba(239,68,68,0.14);border-color:rgba(239,68,68,0.38);}',
      '.sl-live-dot{width:8px;height:8px;border-radius:50%;background:#ef4444;flex-shrink:0;',
      '  box-shadow:0 0 6px #ef4444;animation:sl-pulse 1.2s ease-in-out infinite;}',
      '@keyframes sl-pulse{0%,100%{opacity:1}50%{opacity:0.25}}',
      '.sl-live-text{display:flex;flex-direction:column;gap:1px;flex:1;min-width:0;overflow:hidden;',
      '  transition:opacity 0.2s ease,max-width 0.25s ease;max-width:200px;}',
      '.sl-live-label{font-size:11px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:#ef4444;white-space:nowrap;}',
      ".sl-live-count{font-family:'Rajdhani',sans-serif;font-size:12px;color:rgba(255,255,255,0.4);white-space:nowrap;}",

      /* Section title */
      ".sl-section-title{font-family:'Rajdhani',sans-serif;font-size:10px;font-weight:700;",
      '  letter-spacing:3px;text-transform:uppercase;color:rgba(255,255,255,0.25);',
      '  padding:10px 18px 6px;flex-shrink:0;overflow:hidden;max-height:40px;',
      '  transition:opacity 0.2s ease,max-height 0.25s ease,padding 0.25s ease;}',

      /* Game items */
      '.sl-game-item{',
      '  display:flex;align-items:center;gap:10px;',
      '  padding:10px 18px;',
      '  cursor:pointer;text-decoration:none;color:inherit;',
      '  border-left:2px solid transparent;',
      '  flex-shrink:0;',
      '  transition:background 0.18s,border-left-color 0.18s;',
      '  white-space:nowrap;',
      '}',
      '.sl-game-item:hover{background:rgba(255,255,255,0.04);border-left-color:rgba(168,85,247,0.35);}',
      '.sl-game-item.active{background:rgba(168,85,247,0.08);border-left-color:#a855f7;}',
      '.sl-game-item.active .sl-game-name{color:#fff;}',
      '.sl-game-icon{width:28px;height:28px;border-radius:7px;display:flex;align-items:center;',
      '  justify-content:center;flex-shrink:0;overflow:hidden;}',
      '.sl-game-icon img{width:26px;height:26px;object-fit:contain;display:block;',
      '  transition:transform 0.2s ease,filter 0.2s ease;}',
      '.sl-game-name{font-size:12px;font-weight:600;letter-spacing:0.8px;',
      '  text-transform:uppercase;color:rgba(255,255,255,0.7);white-space:nowrap;overflow:hidden;',
      '  max-width:200px;transition:opacity 0.2s ease,max-width 0.25s ease,margin 0.25s ease;}',
    ].join('\n');

    var el = document.createElement('style');
    el.id = 'skb-sidebar-left-css';
    el.textContent = css;
    document.head.appendChild(el);
  }

  /* ── Game data ── */
  var GAMES = [
    { name: 'CS2',             icon: 'img_M/logocs2.png',             href: 'game-cs.html' },
    { name: 'League of Legends', icon: 'img_M/logo lol.png',          href: '#' },
    { name: 'Valorant',        icon: 'img_M/logo valo.png',            href: '#' },
    { name: 'Dota 2',          icon: 'img_M/logo dota2.png',           href: '#' },
    { name: 'Rocket League',   icon: 'img_M/logo rocket league.png',   href: '#' },
    { name: 'Overwatch 2',     icon: 'img_M/logo overwatch2.png',      href: '#' },
    { name: 'Fortnite',        icon: 'img_M/logo fortnite.png',        href: '#' },
    { name: 'EA FC',           icon: 'img_M/logo ea fc.png',           href: '#' },
  ];

  var cur = window.location.pathname.split('/').pop();

  var gameRows = GAMES.map(function (g) {
    var active = (cur === g.href) ? ' active' : '';
    return [
      '<a class="sl-game-item' + active + '" href="' + g.href + '" title="' + g.name + '">',
      '  <div class="sl-game-icon"><img src="' + g.icon + '" alt="' + g.name + '"/></div>',
      '  <span class="sl-game-name">' + g.name + '</span>',
      '</a>',
    ].join('');
  }).join('');

  /* ── HTML ── */
  var aside = document.createElement('aside');
  aside.className = 'sidebar-left';
  aside.id = 'skbSidebarLeft';
  aside.innerHTML = [
    '<div class="sl-toggle-wrap">',
    '  <button class="sl-toggle" id="slToggle" title="Réduire / Agrandir">&#10094;</button>',
    '</div>',

    '<a class="sl-live-block" href="#" title="Live">',
    '  <div class="sl-live-dot"></div>',
    '  <div class="sl-live-text">',
    '    <span class="sl-live-label">Live</span>',
    '    <span class="sl-live-count">7 matchs en cours</span>',
    '  </div>',
    '</a>',

    gameRows,
  ].join('\n');

  var s = document.currentScript;
  s.parentNode.insertBefore(aside, s);

  /* ── Apply saved state immediately (before first paint) to avoid load animation ── */
  if (localStorage.getItem('skb_sl_collapsed') === '1') {
    aside.classList.add('sl-collapsed');
    aside.style.transition = 'none';
    aside.style.overflow = 'visible';
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        aside.style.transition = '';
      });
    });
  }

  /* ── Wire toggle button ── */
  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('slToggle');
    if (!btn) return;

    btn.addEventListener('click', function () {
      var collapsing = !aside.classList.contains('sl-collapsed');
      aside.style.transition = '';
      aside.style.overflow = 'hidden';
      aside.classList.toggle('sl-collapsed');
      localStorage.setItem('skb_sl_collapsed', collapsing ? '1' : '0');

      if (collapsing) {
        aside.addEventListener('transitionend', function unlock() {
          aside.style.overflow = 'visible';
          aside.removeEventListener('transitionend', unlock);
        });
      }
    });
  });

})();