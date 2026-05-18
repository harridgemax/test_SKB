/**
 * header.js — Shared navigation bar for all SkillBet pages.
 * Drop  <script src="header.js"></script>  where the <nav> should appear.
 */
(function () {

  /* ── CSS ──────────────────────────────────────────────────────── */
  var css = [
    'nav{',
    '  display:flex;align-items:center;justify-content:space-between;',
    '  padding:0 36px;height:64px;',
    '  background:rgba(5,8,22,0.80);',
    '  backdrop-filter:blur(14px);',
    '  border-bottom:1px solid rgba(255,255,255,0.05);',
    '  flex-shrink:0;',
    '}',
    '.nav-logo{flex:1;text-decoration:none;}',
    '.nav-logo img{height:30px;mix-blend-mode:screen;display:block;}',
    '.nav-center{',
    '  display:flex;align-items:center;gap:36px;',
    '  flex:1;justify-content:center;',
    '}',
    '.nav-live{cursor:default;}',
    '.nav-live img{height:40px;display:block;}',
    '.nav-item{',
    '  display:flex;flex-direction:column;align-items:center;gap:3px;',
    '  font-size:10px;font-weight:700;letter-spacing:1.5px;',
    '  color:rgba(255,255,255,0.85);cursor:pointer;',
    '  text-transform:uppercase;text-decoration:none;',
    '}',
    '.nav-item img{height:28px;}',
    '.nav-right{',
    '  display:flex;align-items:center;flex:1;justify-content:flex-end;',
    '}',
    '.btn-nav{',
    '  position:relative;display:flex;align-items:center;justify-content:center;',
    '  padding:0 28px;height:38px;cursor:pointer;',
    '  transform:skewX(-14deg);',
    '  transition:background 0.18s,border-color 0.18s;white-space:nowrap;',
    '}',
    '.btn-nav span{',
    '  display:inline-block;transform:skewX(14deg);',
    "  font-family:'Exo 2',sans-serif;font-size:11px;font-weight:700;",
    '  letter-spacing:2px;text-transform:uppercase;color:#fff;white-space:nowrap;',
    '}',
    '.btn-register{',
    '  background:rgba(255,255,255,0.07);',
    '  border:1px solid rgba(255,255,255,0.2);border-radius:6px;',
    '}',
    '.btn-register:hover{background:rgba(255,255,255,0.13);border-color:rgba(255,255,255,0.4);}',
    '.btn-login{',
    '  background:rgba(255,255,255,0.15);',
    '  border:1px solid rgba(255,255,255,0.35);border-radius:6px;margin-left:8px;',
    '}',
    '.btn-login:hover{background:rgba(255,255,255,0.25);border-color:rgba(255,255,255,0.6);}'
  ].join('\n');

  var styleEl = document.createElement('style');
  styleEl.id = 'skb-header-css';
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  /* ── HTML ─────────────────────────────────────────────────────── */
  var nav = document.createElement('nav');
  nav.innerHTML = [
    '<a class="nav-logo" href="index.html">',
    '  <img src="img_M/SKB LOGO.png" alt="SkillBet" />',
    '</a>',

    '<div class="nav-center">',
    '  <div class="nav-live">',
    '    <img src="img_M/live 4.png" alt="Live" />',
    '  </div>',
    '  <a class="nav-item" href="my-bets.html">',
    '    <img src="img_M/bets.png" alt="My Bets" />',
    '    MY BETS',
    '  </a>',
    '  <div class="nav-item">',
    '    <img src="img_M/teams.png" alt="Teams" />',
    '    TEAMS',
    '  </div>',
    '</div>',

    '<div class="nav-right">',
    '  <div class="btn-nav btn-register"><span>REGISTER</span></div>',
    '  <div class="btn-nav btn-login"><span>LOGIN</span></div>',
    '</div>'
  ].join('\n');

  /* Insert right where the <script> tag sits */
  var s = document.currentScript;
  s.parentNode.insertBefore(nav, s);

})();
