/**
 * header.js — Shared navigation bar for all SkillBet pages.
 * Drop  <script src="header.js"></script>  where the <nav> should appear.
 */
(function () {

  /* ════════════════════════════════════════════
     CSS — nav + phone preview overlay
  ════════════════════════════════════════════ */
  var css = [

    /* ── Navbar ── */
    'nav{',
    '  display:flex;align-items:center;justify-content:space-between;',
    '  padding:0 36px;height:64px;',
    '  background:rgba(5,8,22,0.80);',
    '  backdrop-filter:blur(14px);',
    '  border-bottom:1px solid rgba(255,255,255,0.05);',
    '  flex-shrink:0;',
    '}',
    '.nav-logo{flex:1;text-decoration:none;}',
    '.nav-logo img{height:20px;mix-blend-mode:screen;display:block;}',
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
    '.nav-right{display:flex;align-items:center;gap:12px;flex:1;justify-content:flex-end;}',

    /* Balance pill */
    '.nav-balance{',
    '  display:flex;align-items:center;gap:10px;',
    '  background:rgba(255,255,255,0.05);',
    '  border:1px solid rgba(255,255,255,0.08);',
    '  border-radius:9px;padding:6px 14px 6px 12px;',
    '}',
    '.nav-balance-inner{display:flex;flex-direction:column;line-height:1;}',
    '.nav-balance-label{',
    '  font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;',
    '  color:rgba(196,200,226,0.4);',
    '}',
    '.nav-balance-amount{',
    "  font-family:'Rajdhani',sans-serif;font-size:16px;font-weight:700;",
    '  color:#e8eaf6;line-height:1.1;',
    '}',
    '.nav-deposit-btn{',
    '  background:#7c3aed;border:none;border-radius:7px;',
    '  padding:6px 14px;cursor:pointer;',
    "  font-family:'Exo 2',sans-serif;font-size:10px;font-weight:800;",
    '  letter-spacing:1.2px;text-transform:uppercase;color:#fff;',
    '  transition:background 0.15s;white-space:nowrap;',
    '}',
    '.nav-deposit-btn:hover{background:#a855f7;}',

    /* Avatar + dropdown */
    '.nav-avatar-wrap{position:relative;}',
    '.nav-avatar{',
    '  width:36px;height:36px;border-radius:50%;cursor:pointer;',
    '  background:#7c3aed;border:2px solid rgba(168,85,247,0.5);',
    '  display:flex;align-items:center;justify-content:center;',
    "  font-family:'Rajdhani',sans-serif;font-size:14px;font-weight:700;",
    '  color:#fff;user-select:none;transition:border-color 0.2s;',
    '}',
    '.nav-avatar:hover{border-color:rgba(168,85,247,0.9);}',
    '.nav-online{',
    '  position:absolute;bottom:0;right:0;',
    '  width:9px;height:9px;border-radius:50%;',
    '  background:#4ade80;border:2px solid rgba(5,8,22,0.9);',
    '}',
    '.nav-dropdown{',
    '  position:fixed;',
    '  width:210px;background:#12152a;',
    '  border:1px solid rgba(139,92,246,0.22);',
    '  border-radius:12px;padding:6px;',
    '  display:none;z-index:99999;',
    '  box-shadow:0 12px 40px rgba(0,0,0,0.5);',
    '}',
    '.nav-dropdown.open{display:block;}',
    '.nav-dd-item{',
    '  display:flex;align-items:center;gap:10px;',
    '  padding:9px 12px;border-radius:8px;',
    '  font-size:13px;font-weight:600;',
    '  color:rgba(196,200,226,0.8);',
    '  text-decoration:none;cursor:pointer;',
    '  transition:background 0.12s,color 0.12s;',
    '}',
    '.nav-dd-item:hover{background:rgba(255,255,255,0.06);color:#e8eaf6;}',
    '.nav-dd-icon{',
    '  width:28px;height:28px;border-radius:7px;flex-shrink:0;',
    '  background:rgba(139,92,246,0.12);border:1px solid rgba(139,92,246,0.2);',
    '  display:flex;align-items:center;justify-content:center;',
    '}',
    '.nav-dd-icon svg{width:14px;height:14px;}',
    '.nav-dd-sep{height:1px;background:rgba(139,92,246,0.15);margin:4px 0;}',
    '.nav-dd-deposit .nav-dd-icon{background:rgba(124,58,237,0.18);border-color:rgba(124,58,237,0.35);}',
    '.nav-dd-deposit{color:#a855f7;}',
    '.nav-dd-deposit:hover{background:rgba(124,58,237,0.12);color:#c084fc;}',
    '.nav-dd-logout .nav-dd-icon{background:rgba(239,68,68,0.1);border-color:rgba(239,68,68,0.2);}',
    '.nav-dd-logout{color:rgba(239,68,68,0.65);}',
    '.nav-dd-logout:hover{background:rgba(239,68,68,0.08);color:#ef4444;}',

    /* ── Phone preview button ── */
    '.skb-phone-btn{',
    '  display:flex;align-items:center;justify-content:center;',
    '  width:36px;height:36px;border-radius:8px;border:none;',
    '  background:rgba(255,255,255,0.08);cursor:pointer;',
    '  color:rgba(255,255,255,0.75);',
    '  transition:background 0.18s,color 0.18s;',
    '  flex-shrink:0;',
    '}',
    '.skb-phone-btn:hover{background:rgba(255,255,255,0.18);color:#fff;}',

    /* ── Overlay backdrop ── */
    '#skb-phone-overlay{',
    '  display:none;position:fixed;inset:0;z-index:9999;',
    '  background:rgba(0,0,0,0.82);backdrop-filter:blur(8px);',
    '  align-items:center;justify-content:center;',
    '}',
    '#skb-phone-overlay.open{display:flex;}',

    /* ── Phone shell ── */
    '.skb-phone-shell{',
    '  position:relative;',
    '  width:390px;',
    '  background:#111318;',
    '  border-radius:54px;',
    '  padding:18px 12px 28px;',
    '  box-shadow:',
    '    0 0 0 2px #2a2d35,',
    '    0 0 0 4px #0a0b0f,',
    '    0 40px 80px rgba(0,0,0,0.9);',
    '}',

    /* side buttons */
    '.skb-phone-shell::before{',
    '  content:"";position:absolute;',
    '  left:-4px;top:120px;',
    '  width:4px;height:36px;background:#2a2d35;border-radius:2px 0 0 2px;',
    '  box-shadow:0 52px 0 #2a2d35,0 104px 0 #2a2d35;',
    '}',
    '.skb-phone-shell::after{',
    '  content:"";position:absolute;',
    '  right:-4px;top:160px;',
    '  width:4px;height:68px;background:#2a2d35;border-radius:0 2px 2px 0;',
    '}',

    /* dynamic island */
    '.skb-phone-island{',
    '  width:126px;height:36px;background:#000;border-radius:20px;',
    '  margin:0 auto 14px;',
    '}',

    /* screen area */
    '.skb-phone-screen{',
    '  width:100%;height:720px;',
    '  border-radius:42px;overflow:hidden;',
    '  background:#070b1f;',
    '  position:relative;',
    '  display:flex;flex-direction:column;',
    '}',

    /* scrollable content inside screen */
    '.skb-mob-content{',
    '  flex:1;overflow-y:auto;overflow-x:clip;',
    '  scrollbar-width:none;',
    '}',
    '.skb-mob-content::-webkit-scrollbar{display:none;}',

    /* ── Floating bet slip FAB ── */
    '.skb-mob-bs-fab{position:absolute;bottom:72px;right:12px;width:54px;height:54px;border-radius:50%;background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.25);backdrop-filter:blur(8px);box-shadow:0 4px 16px rgba(0,0,0,0.3);display:none;align-items:center;justify-content:center;cursor:pointer;z-index:20;transition:transform 0.15s,opacity 0.2s;}',
    '.skb-mob-bs-fab:hover{transform:scale(1.1);}',
    '.skb-mob-bs-fab img{width:30px;height:30px;object-fit:contain;filter:brightness(0) invert(1);}',
    '.skb-mob-bs-fab-badge{position:absolute;top:-4px;right:-4px;min-width:18px;height:18px;border-radius:9px;background:#ef4444;color:#fff;font-size:10px;font-weight:800;display:flex;align-items:center;justify-content:center;padding:0 4px;border:2px solid #070b1f;}',

    /* ── Bet slip panel (slide-up) ── */
    '.skb-mob-bs-panel{position:absolute;bottom:0;left:0;right:0;z-index:30;background:#0d1025;border-radius:20px 20px 0 0;border-top:1px solid rgba(255,255,255,0.1);transform:translateY(100%);transition:transform 0.35s cubic-bezier(0.4,0,0.2,1);display:flex;flex-direction:column;max-height:88%;}',
    '.skb-mob-bs-panel.open{transform:translateY(0);}',
    '.skb-mob-bs-panel-handle{width:36px;height:4px;border-radius:2px;background:rgba(255,255,255,0.2);margin:10px auto 0;}',
    '.skb-mob-bs-panel-hdr{display:flex;align-items:center;padding:12px 16px 8px;gap:8px;}',
    '.skb-mob-bs-panel-title{font-family:\'Rajdhani\',sans-serif;font-size:16px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff;flex:1;}',
    '.skb-mob-bs-panel-count{background:#7c3aed;color:#fff;font-size:10px;font-weight:700;width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;}',
    '.skb-mob-bs-panel-close{background:none;border:none;color:rgba(255,255,255,0.5);font-size:20px;cursor:pointer;padding:0 2px;line-height:1;}',
    '.skb-mob-bs-panel-body{flex:1;overflow-y:auto;padding:0 14px;scrollbar-width:none;}',
    '.skb-mob-bs-panel-body::-webkit-scrollbar{display:none;}',
    '.skb-mob-bs-empty{text-align:center;padding:28px 0;color:rgba(255,255,255,0.3);font-size:12px;line-height:1.6;}',
    '.skb-mob-bs-bet{background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:10px 12px;margin-bottom:8px;position:relative;}',
    '.skb-mob-bs-bet-game{font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#a855f7;margin-bottom:3px;}',
    '.skb-mob-bs-bet-match{font-size:10px;color:rgba(255,255,255,0.45);margin-bottom:4px;}',
    '.skb-mob-bs-bet-pick{font-family:\'Rajdhani\',sans-serif;font-size:13px;font-weight:700;color:#fff;}',
    '.skb-mob-bs-bet-odds{position:absolute;top:10px;right:10px;font-family:\'Rajdhani\',sans-serif;font-size:14px;font-weight:800;color:#fff;background:#070b1f;border:1px solid rgba(255,255,255,0.12);border-radius:6px;padding:2px 8px;}',
    '.skb-mob-bs-bet-remove{position:absolute;bottom:8px;right:10px;font-size:9px;color:rgba(255,255,255,0.4);cursor:pointer;letter-spacing:0.5px;}',
    '.skb-mob-bs-bet-remove:hover{color:#fff;}',
    '.skb-mob-bs-divider{height:1px;background:rgba(255,255,255,0.07);margin:8px 0;}',
    '.skb-mob-bs-combined{display:flex;justify-content:space-between;align-items:center;padding:4px 0;}',
    '.skb-mob-bs-combined-lbl{font-size:11px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase;color:#fff;}',
    '.skb-mob-bs-combined-val{font-family:\'Rajdhani\',sans-serif;font-size:18px;font-weight:700;color:#fff;background:#070b1f;border:1px solid rgba(255,255,255,0.1);border-radius:6px;padding:2px 8px;}',
    '.skb-mob-bs-stake-lbl{font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:rgba(255,255,255,0.4);margin-bottom:5px;}',
    '.skb-mob-bs-stake-input{width:100%;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:8px 12px;color:#fff;font-family:\'Exo 2\',sans-serif;font-size:13px;outline:none;margin-bottom:8px;}',
    '.skb-mob-bs-qa{display:flex;gap:6px;margin-bottom:8px;}',
    '.skb-mob-bs-qa-btn{flex:1;padding:5px 0;text-align:center;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);border-radius:6px;font-size:11px;font-weight:700;color:rgba(255,255,255,0.6);cursor:pointer;}',
    '.skb-mob-bs-gains{display:flex;justify-content:space-between;align-items:center;background:rgba(168,85,247,0.08);border:1px solid rgba(168,85,247,0.2);border-radius:8px;padding:8px 12px;margin-bottom:12px;}',
    '.skb-mob-bs-gains-lbl{font-size:11px;font-weight:700;text-transform:uppercase;color:#fff;}',
    '.skb-mob-bs-gains-val{font-family:\'Rajdhani\',sans-serif;font-size:18px;font-weight:700;color:#fff;}',
    '.skb-mob-bs-submit{width:100%;padding:12px;border:1px solid rgba(255,255,255,0.3);border-radius:10px;background:rgba(255,255,255,0.15);color:#fff;font-family:\'Rajdhani\',sans-serif;font-size:15px;font-weight:700;letter-spacing:1px;cursor:pointer;margin-bottom:16px;}',

    /* bottom nav bar */
    '.skb-mob-nav{',
    '  flex-shrink:0;',
    '  display:flex;align-items:center;justify-content:space-around;',
    '  height:62px;padding-bottom:4px;',
    '  background:rgba(5,8,22,0.80);',
    '  backdrop-filter:blur(14px);',
    '  border-top:1px solid rgba(255,255,255,0.05);',
    '  border-radius:24px 24px 42px 42px;',
    '}',
    '.skb-mob-nav-item{',
    '  display:flex;flex-direction:column;align-items:center;gap:4px;',
    '  color:rgba(255,255,255,0.35);cursor:pointer;flex:1;',
    "  font-family:'Exo 2',sans-serif;font-size:8px;font-weight:700;",
    '  letter-spacing:0.8px;text-transform:uppercase;',
    '  transition:color 0.15s;',
    '}',
    '.skb-mob-nav-item svg{opacity:0.4;transition:opacity 0.15s;}',
    '.skb-mob-nav-item:hover{color:rgba(255,255,255,0.7);}',
    '.skb-mob-nav-item:hover svg{opacity:0.7;}',

    /* center Bet button — same style as others but active */
    '.skb-mob-nav-center{',
    '  display:flex;flex-direction:column;align-items:center;gap:4px;',
    '  cursor:pointer;flex:1;',
    "  font-family:'Exo 2',sans-serif;font-size:8px;font-weight:700;",
    '  letter-spacing:0.8px;text-transform:uppercase;color:#fff;',
    '}',
    '.skb-mob-nav-center svg{opacity:1;}',

    /* blobs container inside phone */
    '.skb-mob-blobs{',
    '  position:absolute;inset:0;pointer-events:none;z-index:0;',
    '  filter:blur(40px);opacity:.85;overflow:hidden;border-radius:42px;',
    '}',
    '.skb-mob-blob{',
    '  position:absolute;',
    '  width:200px;height:200px;border-radius:999px;',
    '  background:',
    '    radial-gradient(circle at 35% 35%,rgba(124,58,237,.95),transparent 60%),',
    '    radial-gradient(circle at 65% 65%,rgba(236,72,153,.90),transparent 62%);',
    '  animation:skbFloaty 5s ease-in-out infinite;',
    '}',
    '.skb-mob-blob.mb1{top:-60px;left:-60px;}',
    '.skb-mob-blob.mb2{top:10%;right:-80px;animation-delay:-1s;}',
    '.skb-mob-blob.mb3{bottom:-80px;left:25%;animation-delay:-2s;}',
    '@keyframes skbFloaty{',
    '  0%,100%{transform:translate3d(0,0,0) scale(1);}',
    '  50%{transform:translate3d(18px,-14px,0) scale(1.08);}',
    '}',

    /* mobile header inside phone */
    '.skb-mob-header{',
    '  position:relative;z-index:2;',
    '  display:flex;align-items:center;justify-content:space-between;',
    '  padding:18px 20px 14px;',
    '  background:rgba(5,8,22,0.80);',
    '  backdrop-filter:blur(14px);',
    '  border-bottom:1px solid rgba(255,255,255,0.05);',
    '}',
    '.skb-mob-logo{height:16px;mix-blend-mode:screen;}',
    '.skb-mob-avatar{height:38px;object-fit:contain;cursor:pointer;}',
    '.skb-mob-header-right{display:flex;align-items:center;gap:6px;}',
    '.skb-mob-wallet{display:flex;align-items:center;gap:7px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.14);border-radius:10px;padding:5px 8px 5px 12px;cursor:pointer;}',
    '.skb-mob-wallet-amount{font-family:\'Rajdhani\',sans-serif;font-size:14px;font-weight:800;color:#fff;letter-spacing:0.3px;white-space:nowrap;}',
    '.skb-mob-wallet-add{width:20px;height:20px;border-radius:6px;background:linear-gradient(135deg,#7c3aed,#a855f7);color:#fff;font-size:14px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;line-height:1;}',

    /* ── Match card ── */
    '.skb-mob-card{',
    '  position:relative;z-index:2;margin:14px 14px 0;',
    '  border-radius:16px;overflow:hidden;',
    '  border:1px solid rgba(255,255,255,0.10);',
    '}',
    '.skb-mob-card-bg{',
    '  position:absolute;inset:0;',
    '}',
    '.skb-mob-card-bg img{',
    '  width:100%;height:100%;object-fit:cover;',
    '  filter:brightness(0.45);display:block;',
    '}',
    '.skb-mob-card-content{',
    '  position:relative;z-index:2;padding:14px 14px 10px;',
    '  background:linear-gradient(to bottom,rgba(5,8,22,0.3) 0%,rgba(5,8,22,0.75) 100%);',
    '}',
    '.skb-mob-event-label{',
    "  font-family:'Exo 2',sans-serif;font-size:9px;font-weight:700;",
    '  letter-spacing:1.5px;text-transform:uppercase;',
    '  color:rgba(255,255,255,0.6);margin-bottom:2px;',
    '}',
    '.skb-mob-event-sub{',
    "  font-family:'Exo 2',sans-serif;font-size:8px;",
    '  color:rgba(255,255,255,0.4);margin-bottom:10px;',
    '}',
    '.skb-mob-teams{',
    '  display:flex;justify-content:space-around;align-items:center;',
    '  margin-bottom:10px;',
    '}',
    '.skb-mob-team{',
    '  display:flex;flex-direction:column;align-items:center;gap:8px;',
    '}',
    '.skb-mob-team img{width:52px;height:52px;object-fit:contain;}',
    '.skb-mob-vs{',
    "  font-family:'Exo 2',sans-serif;font-size:16px;font-weight:900;",
    '  color:rgba(255,255,255,0.25);letter-spacing:2px;',
    '}',
    '.skb-mob-odd{',
    '  padding:5px 18px;border-radius:9px;',
    '  background:#070b1f;',
    '  border:1px solid rgba(255,255,255,0.1);',
    "  font-family:'Rajdhani',sans-serif;font-size:26px;font-weight:800;",
    '  color:#fff;cursor:pointer;',
    '  transition:background 0.15s,border-color 0.15s;',
    '}',
    '.skb-mob-odd:hover{border-color:rgba(255,255,255,0.35);}',
    '.skb-mob-graph{width:100%;}',

    /* ── Hot Matches section ── */
    '.skb-mob-hot{position:relative;z-index:2;margin:16px 0 20px;}',
    '.skb-mob-hot-title{',
    "  font-family:'Exo 2',sans-serif;font-size:10px;font-weight:700;",
    '  letter-spacing:2px;text-transform:uppercase;',
    '  color:rgba(255,255,255,0.45);',
    '  padding:0 14px;margin-bottom:10px;',
    '}',
    '.skb-mob-hot-track{',
    '  display:flex;gap:10px;',
    '  overflow-x:scroll;scroll-snap-type:x mandatory;',
    '  padding:0 14px 4px;',
    '  scrollbar-width:none;',
    '  touch-action:pan-x;cursor:grab;',
    '  -webkit-overflow-scrolling:touch;',
    '}',
    '.skb-mob-hot-track:active{cursor:grabbing;}',
    '.skb-mob-hot-track::-webkit-scrollbar{display:none;}',

    /* individual hot card */
    '.skb-mob-hcard{',
    '  flex:0 0 calc(100% - 28px);scroll-snap-align:start;',
    '  position:relative;border-radius:14px;overflow:hidden;',
    '  border:1px solid rgba(255,255,255,0.10);',
    '}',
    '.skb-mob-hcard-bg{position:absolute;inset:0;}',
    '.skb-mob-hcard-bg img{',
    '  width:100%;height:100%;object-fit:cover;display:block;',
    '  filter:brightness(0.4);',
    '}',
    '.skb-mob-hcard-bg.contain{',
    '  background:#060a18;display:flex;align-items:center;justify-content:center;',
    '}',
    '.skb-mob-hcard-bg.contain img{',
    '  width:auto;height:60%;object-fit:contain;opacity:0.2;filter:none;',
    '}',
    '.skb-mob-hcard-content{',
    '  position:relative;z-index:2;',
    '  background:linear-gradient(to bottom,rgba(5,8,22,0.25) 0%,rgba(5,8,22,0.80) 100%);',
    '  padding:12px 14px 10px;',
    '}',
    '.skb-mob-hcard-label{',
    "  font-family:'Exo 2',sans-serif;font-size:9px;font-weight:700;",
    '  letter-spacing:1.2px;text-transform:uppercase;',
    '  color:rgba(255,255,255,0.55);margin-bottom:10px;',
    '}',
    '.skb-mob-hcard-teams{',
    '  display:flex;justify-content:space-around;align-items:center;',
    '  margin-bottom:10px;',
    '}',
    '.skb-mob-hcard-team{display:flex;flex-direction:column;align-items:center;gap:7px;}',
    '.skb-mob-hcard-team img{width:46px;height:46px;object-fit:contain;}',
    '.skb-mob-hcard-vs{',
    "  font-family:'Exo 2',sans-serif;font-size:14px;font-weight:900;",
    '  color:rgba(255,255,255,0.2);letter-spacing:2px;',
    '}',
    '.skb-mob-hcard-odd{',
    '  padding:4px 14px;border-radius:8px;',
    '  background:#070b1f;',
    '  border:1px solid rgba(255,255,255,0.1);',
    "  font-family:'Rajdhani',sans-serif;font-size:22px;font-weight:800;",
    '  color:#fff;cursor:pointer;',
    '  transition:border-color 0.15s;',
    '}',
    '.skb-mob-hcard-odd:hover{border-color:rgba(255,255,255,0.35);}',

    /* mini graph inside hot card */
    '.skb-mob-hcard-graph{width:100%;display:block;}',

    /* ── Top Players section ── */
    '.skb-mob-players{position:relative;z-index:2;margin:0 0 24px;}',
    '.skb-mob-players-title{',
    "  font-family:'Exo 2',sans-serif;font-size:10px;font-weight:700;",
    '  letter-spacing:2px;text-transform:uppercase;',
    '  color:rgba(255,255,255,0.45);',
    '  padding:0 14px;margin-bottom:10px;',
    '}',
    '.skb-mob-players-track{',
    '  display:flex;gap:12px;',
    '  overflow-x:scroll;',
    '  padding:0 14px 8px;',
    '  scrollbar-width:none;',
    '  touch-action:pan-x;cursor:grab;',
    '  -webkit-overflow-scrolling:touch;',
    '}',
    '.skb-mob-players-track:active{cursor:grabbing;}',
    '.skb-mob-players-track::-webkit-scrollbar{display:none;}',

    /* reuse same tp-pc card style as index.html */
    '.skb-mob-players-track .tp-pc{',
    '  min-width:140px;max-width:140px;',
    '  border-radius:16px;overflow:hidden;display:flex;flex-direction:column;',
    '  position:relative;cursor:pointer;',
    '  transition:transform 0.2s,box-shadow 0.2s;flex-shrink:0;',
    '}',
    '.skb-mob-players-track .tp-pc:hover{transform:translateY(-6px);box-shadow:0 14px 32px rgba(0,0,0,0.55);}',
    '.skb-mob-players-track .tp-pc-bg{position:absolute;inset:0;z-index:0;}',
    '.skb-mob-players-track .tp-pc-team-badge{',
    '  position:absolute;top:9px;right:9px;z-index:2;',
    "  font-size:9px;font-weight:900;font-family:'Rajdhani',sans-serif;",
    '  padding:2px 8px;border-radius:20px;letter-spacing:0.5px;',
    '}',
    '.skb-mob-players-track .tp-pc-body{',
    '  position:relative;z-index:1;display:flex;flex-direction:column;',
    '  align-items:center;padding:14px 10px 8px;flex:1;',
    '}',
    '.skb-mob-players-track .tp-pc-name{',
    "  font-family:'Rajdhani',sans-serif;font-weight:800;font-size:16px;",
    '  color:#fff;text-align:center;text-transform:uppercase;',
    '  line-height:1.1;letter-spacing:0.5px;margin-bottom:8px;',
    '}',
    '.skb-mob-players-track .tp-pc-avatar{width:62px;height:70px;margin-bottom:8px;}',
    '.skb-mob-players-track .tp-pc-role{',
    '  font-size:9px;font-weight:700;color:rgba(255,255,255,0.45);',
    '  text-transform:uppercase;letter-spacing:0.7px;',
    '}',
    '.skb-mob-players-track .tp-pc-footer{',
    '  text-align:center;padding:7px 10px 9px;',
    '  position:relative;z-index:1;',
    '  display:flex;flex-direction:column;align-items:center;gap:4px;',
    '}',
    '.skb-mob-players-track .tp-pc-footer-label{',
    '  font-size:9px;font-weight:700;letter-spacing:0.4px;',
    '  opacity:0.75;text-transform:uppercase;',
    '}',
    '.skb-mob-players-track .tp-pc-odd{',
    "  font-family:'Rajdhani',sans-serif;font-size:20px;font-weight:900;",
    '  padding:5px 20px;border-radius:8px;',
    '  background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);',
    '  transition:background 0.15s,border-color 0.15s,transform 0.15s;',
    '}',

    /* ── Top Combinés section ── */
    '.skb-mob-tc{position:relative;z-index:2;margin:0 0 24px;}',
    '.skb-mob-tc-title{',
    "  font-family:'Exo 2',sans-serif;font-size:10px;font-weight:700;",
    '  letter-spacing:2px;text-transform:uppercase;',
    '  color:rgba(255,255,255,0.45);',
    '  padding:0 14px;margin-bottom:10px;',
    '}',
    '.skb-mob-tc-track{',
    '  display:flex;gap:10px;',
    '  overflow-x:scroll;scroll-snap-type:x mandatory;',
    '  padding:0 14px 4px;',
    '  scrollbar-width:none;',
    '  touch-action:pan-x;cursor:grab;',
    '  -webkit-overflow-scrolling:touch;',
    '}',
    '.skb-mob-tc-track:active{cursor:grabbing;}',
    '.skb-mob-tc-track::-webkit-scrollbar{display:none;}',
    '.skb-mob-tc-track .tc-card{',
    '  flex:0 0 100%;scroll-snap-align:start;',
    '  min-width:unset;max-width:unset;min-height:unset;',
    '  background:rgba(255,255,255,0.045);',
    '  border:1px solid rgba(255,255,255,0.09);',
    '  border-radius:16px;padding:18px 16px 0;',
    '  display:flex;flex-direction:column;position:relative;',
    '}',
    '.skb-mob-tc-track .tc-rank{',
    '  position:absolute;top:-1px;right:12px;',
    '  display:flex;align-items:center;gap:4px;',
    '  padding:4px 8px;',
    '  background:rgba(7,11,31,0.92);',
    '  border:1px solid rgba(255,255,255,0.1);',
    '  border-top:none;border-radius:0 0 8px 8px;',
    '}',
    '.skb-mob-tc-track .tc-rank img{width:22px;height:22px;object-fit:contain;display:block;}',
    '.skb-mob-tc-track .tc-bets{',
    '  display:flex;flex-direction:column;gap:8px;',
    '  margin-top:14px;margin-bottom:12px;',
    '}',
    '.skb-mob-tc-track .tc-bet{',
    '  background:rgba(255,255,255,0.04);',
    '  border:1px solid rgba(255,255,255,0.07);',
    '  border-radius:8px;padding:7px 10px;',
    '}',
    '.skb-mob-tc-track .tc-game{',
    '  font-size:12px;color:rgba(255,255,255,0.55);font-weight:700;',
    '  display:block;margin-bottom:2px;',
    '}',
    '.skb-mob-tc-track .tc-time{',
    '  font-size:11px;color:rgba(255,255,255,0.35);',
    '  float:right;margin-top:-16px;',
    '}',
    '.skb-mob-tc-track .tc-pick{',
    '  font-size:14px;font-weight:700;color:rgba(255,255,255,0.95);',
    '  display:flex;justify-content:space-between;align-items:center;margin-top:3px;',
    '}',
    '.skb-mob-tc-track .tc-odd{',
    "  font-family:'Rajdhani',sans-serif;font-size:18px;font-weight:900;color:#fff;",
    '}',
    '.skb-mob-tc-track .tc-footer{',
    '  display:flex;align-items:center;justify-content:space-between;',
    '  padding:10px 0 12px;border-top:1px solid rgba(255,255,255,0.07);margin-top:auto;',
    '}',
    '.skb-mob-tc-track .tc-count{font-size:10px;color:rgba(255,255,255,0.4);}',
    '.skb-mob-tc-track .tc-combined{',
    "  font-family:'Rajdhani',sans-serif;font-size:22px;font-weight:900;",
    '  background:#070b1f;color:#fff;',
    '  border:1px solid rgba(255,255,255,0.18);',
    '  padding:4px 14px;border-radius:8px;line-height:1;',
    '}',

    /* ── Game selector + match list ── */
    '.skb-mob-games{position:relative;z-index:2;margin:0 14px 24px;}',
    '.skb-mob-filter{display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap;}',
    '.skb-mob-filter-btn{',
    '  padding:6px 16px;border-radius:20px;cursor:pointer;',
    '  border:1px solid rgba(255,255,255,0.15);',
    '  background:transparent;color:rgba(255,255,255,0.45);',
    "  font-family:'Exo 2',sans-serif;font-size:10px;font-weight:700;",
    '  letter-spacing:1px;text-transform:uppercase;',
    '  transition:all 0.15s;',
    '}',
    '.skb-mob-filter-btn.active{background:#e91e8c;border-color:#e91e8c;color:#fff;}',
    '.skb-mob-match-card{',
    '  position:relative;border-radius:12px;overflow:hidden;',
    '  margin-bottom:10px;height:110px;',
    '  border:1px solid rgba(255,255,255,0.08);',
    '  flex-shrink:0;',
    '}',
    '.skb-mob-match-card-bg{position:absolute;inset:0;}',
    '.skb-mob-match-card-bg img{width:100%;height:100%;object-fit:cover;filter:brightness(0.35);display:block;}',
    '.skb-mob-match-card-bg.contain-bg{background:#060a18;display:flex;align-items:center;justify-content:center;}',
    '.skb-mob-match-card-bg.contain-bg img{width:auto;height:60%;object-fit:contain;opacity:0.15;filter:none;}',
    '.skb-mob-match-card-body{',
    '  position:relative;z-index:2;height:100%;',
    '  background:linear-gradient(to right,rgba(5,8,22,0.75) 0%,rgba(5,8,22,0.3) 100%);',
    '  display:flex;flex-direction:column;justify-content:center;padding:0 14px;',
    '}',
    '.skb-mob-match-card-label{',
    '  font-size:9px;color:rgba(255,255,255,0.5);font-weight:700;',
    '  letter-spacing:1px;text-transform:uppercase;margin-bottom:8px;',
    '}',
    '.skb-mob-match-card-row{',
    '  display:flex;align-items:center;justify-content:space-between;',
    '}',
    '.skb-mob-match-card-team{display:flex;align-items:center;gap:8px;}',
    '.skb-mob-match-card-team img{width:30px;height:30px;object-fit:contain;}',
    '.skb-mob-match-card-name{',
    "  font-family:'Exo 2',sans-serif;font-size:12px;font-weight:800;color:#fff;",
    '}',
    '.skb-mob-match-card-odd{',
    '  padding:3px 10px;border-radius:6px;',
    '  background:#070b1f;border:1px solid rgba(255,255,255,0.1);',
    "  font-family:'Rajdhani',sans-serif;font-size:18px;font-weight:900;color:#fff;",
    '}',
    '.skb-mob-match-card-vs{',
    "  font-family:'Exo 2',sans-serif;font-size:10px;font-weight:900;",
    '  color:rgba(255,255,255,0.2);',
    '}',

    /* ── Esport view ── */
    '.skb-mob-esport-view{',
    '  display:none;flex:1;overflow-y:auto;overflow-x:hidden;scrollbar-width:none;',
    '}',
    '.skb-mob-esport-view::-webkit-scrollbar{display:none;}',
    '.skb-mob-gc-title{',
    "  font-family:'Exo 2',sans-serif;font-size:10px;font-weight:700;",
    '  letter-spacing:2px;text-transform:uppercase;',
    '  color:rgba(255,255,255,0.45);padding:16px 14px 10px;',
    '}',
    '.skb-mob-gc-grid{',
    '  display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:0 14px 20px;',
    '}',
    '.skb-mob-gc-item{',
    '  border-radius:12px;overflow:hidden;cursor:pointer;',
    '  border:1px solid rgba(255,255,255,0.1);',
    '  transition:transform 0.2s,border-color 0.2s;',
    '}',
    '.skb-mob-gc-item:hover{transform:translateY(-3px);border-color:rgba(168,85,247,0.5);}',
    '.skb-mob-gc-item img{width:100%;display:block;object-fit:cover;}',

    /* ── Current Tournaments block ── */
    '.skb-mob-tourn{padding:0 14px 18px;}',
    '.skb-mob-tourn-title{',
    "  font-family:'Exo 2',sans-serif;font-size:10px;font-weight:700;",
    '  letter-spacing:2px;text-transform:uppercase;',
    '  color:rgba(255,255,255,0.45);margin-bottom:10px;',
    '}',
    '.skb-mob-tourn-list{display:flex;flex-direction:column;gap:8px;}',
    '.skb-mob-tourn-item{',
    '  display:flex;align-items:center;gap:10px;',
    '  background:rgba(255,255,255,0.045);',
    '  border:1px solid rgba(255,255,255,0.08);',
    '  border-radius:10px;padding:10px 12px;',
    '  cursor:pointer;transition:background 0.15s,border-color 0.15s;',
    '}',
    '.skb-mob-tourn-item:hover{background:rgba(168,85,247,0.12);border-color:rgba(168,85,247,0.35);}',
    '.skb-mob-tourn-badge{',
    '  flex-shrink:0;width:32px;height:32px;border-radius:8px;',
    '  display:flex;align-items:center;justify-content:center;',
    '}',
    '.skb-mob-tourn-badge img{width:22px;height:22px;object-fit:contain;}',
    '.skb-mob-tourn-info{flex:1;min-width:0;}',
    '.skb-mob-tourn-name{',
    "  font-family:'Exo 2',sans-serif;font-size:11px;font-weight:800;",
    '  color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;',
    '}',
    '.skb-mob-tourn-sub{',
    '  font-size:9px;color:rgba(255,255,255,0.4);margin-top:2px;',
    '}',
    '.skb-mob-tourn-live{',
    '  flex-shrink:0;',
    '  font-size:8px;font-weight:700;letter-spacing:1px;text-transform:uppercase;',
    '  padding:3px 7px;border-radius:4px;',
    '}',
    '.skb-mob-tourn-live.is-live{background:rgba(233,30,140,0.2);color:#e91e8c;border:1px solid rgba(233,30,140,0.35);}',
    '.skb-mob-tourn-live.upcoming{background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.4);border:1px solid rgba(255,255,255,0.1);}',

    /* ── Live view ── */
    '.skb-mob-live-view{display:none;flex:1;overflow-y:auto;overflow-x:hidden;scrollbar-width:none;}',
    '.skb-mob-live-view::-webkit-scrollbar{display:none;}',
    '.skb-mob-live-cards{padding:14px 14px 20px;display:flex;flex-direction:column;gap:16px;}',
    '.skb-mob-live-card{',
    '  border-radius:16px;border:1px solid rgba(255,255,255,0.13);',
    '  background:rgba(255,255,255,0.04);overflow:hidden;',
    '}',
    '.skb-mob-live-card-top{',
    '  position:relative;height:120px;overflow:hidden;background:#000;',
    '  border-bottom:1px solid rgba(255,255,255,0.07);',
    '  display:flex;align-items:center;justify-content:center;',
    '}',
    '.skb-mob-live-card-top-img{',
    '  position:absolute;inset:0;width:100%;height:100%;',
    '  object-fit:cover;filter:brightness(0.12);display:block;',
    '}',
    '.skb-mob-live-filter{display:flex;gap:8px;padding:12px 14px 4px;flex-wrap:wrap;}',
    '.skb-mob-live-filter-btn{',
    '  padding:6px 14px;border-radius:20px;cursor:pointer;',
    '  border:1px solid rgba(255,255,255,0.15);background:transparent;',
    '  color:rgba(255,255,255,0.45);',
    "  font-family:'Exo 2',sans-serif;font-size:10px;font-weight:700;",
    '  letter-spacing:1px;text-transform:uppercase;transition:all 0.15s;',
    '  display:flex;align-items:center;justify-content:center;',
    '}',
    '.skb-mob-live-filter-btn.icon{padding:6px 10px;}',
    '.skb-mob-live-filter-btn img{width:22px;height:22px;object-fit:contain;display:block;opacity:0.5;transition:opacity 0.15s;}',
    '.skb-mob-live-filter-btn.active img{opacity:1;}',
    '.skb-mob-live-filter-btn.active{background:#e91e8c;border-color:#e91e8c;color:#fff;}',
    '.skb-mob-live-filter-btn.icon.active{background:#fff;border-color:#fff;}',

    '.skb-mob-live-badge{',
    '  position:absolute;top:10px;right:12px;',
    '  font-size:9px;font-weight:900;letter-spacing:1.5px;',
    "  font-family:'Exo 2',sans-serif;",
    '  color:#ef4444;',
    '  display:flex;align-items:center;gap:4px;',
    '}',
    '.skb-mob-live-badge::before{',
    '  content:"";width:6px;height:6px;border-radius:50%;',
    '  background:#ef4444;animation:skbLivePulse 1.2s ease-in-out infinite;',
    '}',
    '@keyframes skbLivePulse{0%,100%{opacity:1;}50%{opacity:0.3;}}',
    '.skb-mob-live-name{',
    "  font-family:'Exo 2',sans-serif;font-size:13px;font-weight:900;",
    '  color:#fff;letter-spacing:1px;text-transform:uppercase;text-align:center;',
    '  padding:0 14px;',
    '}',
    '.skb-mob-live-game-label{',
    '  position:absolute;bottom:8px;left:12px;',
    '  font-size:8px;color:rgba(255,255,255,0.35);',
    "  font-family:'Exo 2',sans-serif;letter-spacing:0.8px;text-transform:uppercase;",
    '}',
    '.skb-mob-live-odds{padding:12px 14px 14px;display:flex;flex-direction:column;gap:10px;}',
    '.skb-mob-live-row{display:flex;align-items:center;gap:10px;}',
    '.skb-mob-live-team-name{',
    "  font-family:'Exo 2',sans-serif;font-size:10px;font-weight:800;",
    '  color:rgba(255,255,255,0.75);text-transform:uppercase;letter-spacing:0.5px;',
    '  width:72px;flex-shrink:0;',
    '}',
    '.skb-mob-live-bar-track{',
    '  flex:1;height:4px;background:rgba(255,255,255,0.1);border-radius:2px;overflow:hidden;',
    '}',
    '.skb-mob-live-bar-fill{height:100%;border-radius:2px;transition:width 0.6s ease;}',
    '.skb-mob-live-odd-btn{',
    '  flex-shrink:0;width:46px;text-align:center;',
    '  padding:5px 0;border-radius:8px;',
    '  background:#070b1f;border:1px solid rgba(255,255,255,0.15);',
    "  font-family:'Rajdhani',sans-serif;font-size:17px;font-weight:900;color:#fff;",
    '  cursor:pointer;transition:border-color 0.15s;',
    '}',
    '.skb-mob-live-odd-btn:hover{border-color:rgba(255,255,255,0.4);}',

    /* ── Match view ── */
    '.skb-mob-match-view{display:none;flex:1;overflow-y:auto;overflow-x:hidden;scrollbar-width:none;flex-direction:column;}',
    '.skb-mob-match-view::-webkit-scrollbar{display:none;}',
    '.skb-mob-mv-topbar{display:flex;align-items:center;gap:10px;padding:12px 14px 8px;flex-shrink:0;}',
    '.skb-mob-mv-back{background:none;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;padding:0;}',
    '.skb-mob-mv-back img{width:22px;height:22px;object-fit:contain;transform:scaleX(-1);}',
    '.skb-mob-mv-title{font-family:\'Rajdhani\',sans-serif;font-size:14px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.7);flex:1;}',
    '.skb-mob-mv-live{display:flex;align-items:center;gap:4px;background:rgba(239,68,68,0.15);border:1px solid rgba(239,68,68,0.35);border-radius:6px;padding:3px 8px;font-size:9px;font-weight:700;color:#f87171;letter-spacing:1px;}',
    '.skb-mob-mv-live-dot{width:5px;height:5px;border-radius:50%;background:#ef4444;animation:skb-pulse 1.2s infinite;}',
    '@keyframes skb-pulse{0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.5;transform:scale(1.4);}}',
    /* header card */
    '.skb-mob-mv-header{margin:0 14px 12px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);border-radius:16px;padding:16px 14px 12px;}',
    '.skb-mob-mv-teams{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;}',
    '.skb-mob-mv-team{display:flex;flex-direction:column;align-items:center;gap:6px;flex:1;}',
    '.skb-mob-mv-team img{width:52px;height:52px;object-fit:contain;}',
    '.skb-mob-mv-team-name{font-family:\'Rajdhani\',sans-serif;font-size:13px;font-weight:700;color:#fff;text-align:center;}',
    '.skb-mob-mv-team-odd{font-family:\'Rajdhani\',sans-serif;font-size:26px;font-weight:900;padding:5px 18px;border-radius:8px;background:#070b1f;border:1px solid rgba(255,255,255,0.15);cursor:pointer;transition:border-color 0.15s;}',
    '.skb-mob-mv-team-odd:hover{border-color:rgba(255,255,255,0.4);}',
    '.skb-mob-mv-center{display:flex;flex-direction:column;align-items:center;gap:4px;flex-shrink:0;padding:0 8px;}',
    '.skb-mob-mv-score{font-family:\'Rajdhani\',sans-serif;font-size:30px;font-weight:900;color:#fff;letter-spacing:2px;}',
    '.skb-mob-mv-round{font-size:9px;font-weight:700;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase;}',
    '.skb-mob-mv-graph{width:100%;display:block;overflow:visible;}',
    /* tabs */
    '.skb-mob-mv-tabs{display:flex;gap:0;margin:0 14px 12px;background:rgba(255,255,255,0.04);border-radius:10px;padding:3px;flex-shrink:0;}',
    '.skb-mob-mv-tab{flex:1;text-align:center;padding:6px 0;font-size:10px;font-weight:700;letter-spacing:0.5px;color:rgba(255,255,255,0.4);cursor:pointer;border-radius:8px;transition:background 0.15s,color 0.15s;}',
    '.skb-mob-mv-tab.active{background:rgba(168,85,247,0.25);color:#fff;}',
    /* tab panels */
    '.skb-mob-mv-panel{display:none;padding:0 14px 80px;flex-direction:column;gap:10px;}',
    '.skb-mob-mv-panel.active{display:flex;}',
    /* event cards */
    '.skb-mob-mv-section-ttl{font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.35);margin-bottom:4px;}',
    '.skb-mob-mv-card{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;overflow:hidden;}',
    '.skb-mob-mv-card-hdr{padding:10px 12px 8px;font-size:11px;font-weight:700;color:rgba(255,255,255,0.7);border-bottom:1px solid rgba(255,255,255,0.06);}',
    '.skb-mob-mv-card-row{display:flex;align-items:center;justify-content:space-between;padding:9px 12px;border-bottom:1px solid rgba(255,255,255,0.05);}',
    '.skb-mob-mv-card-row:last-child{border-bottom:none;}',
    '.skb-mob-mv-card-lbl{font-size:12px;color:rgba(255,255,255,0.7);}',
    '.skb-mob-mv-card-odd{font-family:\'Rajdhani\',sans-serif;font-size:15px;font-weight:800;padding:3px 12px;border-radius:7px;background:#070b1f;border:1px solid rgba(255,255,255,0.12);cursor:pointer;color:#fff;transition:border-color 0.15s;}',
    '.skb-mob-mv-card-odd:hover{border-color:rgba(255,255,255,0.35);}',
    '.skb-mob-mv-card-odd.bb-selected{background:#0f1530!important;border-color:rgba(255,255,255,0.5)!important;}',
    /* double bet */
    '.skb-mob-mv-dbl{display:flex;gap:8px;}',
    '.skb-mob-mv-dbl-opt{flex:1;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);border-radius:10px;padding:10px;display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer;transition:border-color 0.15s;}',
    '.skb-mob-mv-dbl-opt:hover{border-color:rgba(168,85,247,0.4);}',
    '.skb-mob-mv-dbl-team{font-family:\'Rajdhani\',sans-serif;font-size:12px;font-weight:700;color:#fff;}',
    '.skb-mob-mv-dbl-opt-val{font-family:\'Rajdhani\',sans-serif;font-size:20px;font-weight:900;color:#fff;}',

    /* ── Game view ── */
    '.skb-mob-game-view{display:none;flex:1;overflow-y:auto;overflow-x:hidden;scrollbar-width:none;flex-direction:column;}',
    '.skb-mob-game-view::-webkit-scrollbar{display:none;}',
    '.skb-mob-gv-topbar{display:flex;align-items:center;gap:10px;padding:12px 14px 8px;flex-shrink:0;}',
    '.skb-mob-gv-back{background:none;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;padding:0;}',
    '.skb-mob-gv-back img{width:22px;height:22px;object-fit:contain;transform:scaleX(-1);}',
    '.skb-mob-gv-title{font-family:\'Rajdhani\',sans-serif;font-size:16px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff;flex:1;}',
    '.skb-mob-gv-banner{position:relative;margin:0 14px 16px;border-radius:16px;overflow:hidden;min-height:130px;display:flex;flex-direction:column;justify-content:flex-end;border:1px solid rgba(255,255,255,0.09);}',
    '.skb-mob-gv-banner-bg-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:brightness(0.25);}',
    '.skb-mob-gv-banner-overlay{position:absolute;inset:0;background:linear-gradient(135deg,rgba(250,204,21,0.15) 0%,rgba(7,11,31,0.85) 60%);}',
    '.skb-mob-gv-banner-icon{position:absolute;right:14px;top:50%;transform:translateY(-50%);opacity:0.2;width:70px;height:70px;object-fit:contain;}',
    '.skb-mob-gv-banner-content{position:relative;z-index:2;padding:14px 16px 12px;}',
    '.skb-mob-gv-game-name{font-family:\'Exo 2\',sans-serif;font-size:20px;font-weight:900;color:#fff;letter-spacing:1px;text-transform:uppercase;text-shadow:0 2px 12px rgba(0,0,0,0.5);}',
    '.skb-mob-gv-followers{margin-top:7px;font-size:11px;font-weight:600;color:rgba(255,255,255,0.5);letter-spacing:0.2px;}',
    '.skb-mob-gv-bets-placed{margin-top:8px;font-size:9px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase;color:#fff;text-align:right;}',
    '.skb-mob-gv-section-ttl{font-family:\'Exo 2\',sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff;padding:0 14px;margin:20px 0 10px;}',
    '.skb-mob-gv-section-ttl:first-of-type{margin-top:0;}',
    '.skb-mob-gv-matches{padding:0 14px;display:flex;flex-direction:column;gap:10px;margin-bottom:4px;}',
    '.skb-mob-gv-tourn-track{display:flex;gap:10px;overflow-x:auto;padding:0 14px 4px;scrollbar-width:none;touch-action:pan-x;cursor:grab;margin-bottom:4px;}',
    '.skb-mob-gv-tourn-track:active{cursor:grabbing;}',
    '.skb-mob-gv-tourn-track::-webkit-scrollbar{display:none;}',
    '.skb-mob-gv-tc{flex:0 0 130px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);border-radius:14px;padding:12px 10px;display:flex;flex-direction:column;align-items:center;gap:7px;cursor:pointer;transition:border-color 0.15s,background 0.15s;}',
    '.skb-mob-gv-tc:hover{background:rgba(168,85,247,0.1);border-color:rgba(168,85,247,0.35);}',
    '.skb-mob-gv-tc-badge{width:44px;height:44px;border-radius:10px;border:1px solid;display:flex;align-items:center;justify-content:center;flex-shrink:0;}',
    '.skb-mob-gv-tc-badge img{width:28px;height:28px;object-fit:contain;}',
    '.skb-mob-gv-tc-name{font-family:\'Exo 2\',sans-serif;font-size:10px;font-weight:800;color:#fff;text-align:center;line-height:1.3;}',
    '.skb-mob-gv-tc-sub{font-size:8px;color:rgba(255,255,255,0.4);text-align:center;line-height:1.3;}',
    '.skb-mob-gv-tc-status{font-size:8px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;padding:2px 8px;border-radius:4px;}',
    '.skb-mob-gv-tc-status.is-live{background:rgba(233,30,140,0.2);color:#e91e8c;border:1px solid rgba(233,30,140,0.35);}',
    '.skb-mob-gv-tc-status.upcoming{background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.4);border:1px solid rgba(255,255,255,0.1);}',
    '.skb-mob-gv-players{padding-bottom:80px;}',
    '.skb-mob-gv-tlist{display:flex;flex-direction:row;gap:8px;padding:0 14px 4px;overflow-x:auto;scrollbar-width:none;touch-action:pan-x;cursor:grab;margin-bottom:12px;height:140px;align-items:flex-start;}',
    '.skb-mob-gv-tlist:active{cursor:grabbing;}',
    '.skb-mob-gv-tlist::-webkit-scrollbar{display:none;}',
    '.skb-mob-gv-ti{flex:0 0 120px;display:flex;flex-direction:column;align-items:center;gap:7px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:10px 8px;cursor:pointer;transition:background 0.15s,border-color 0.15s;}',
    '.skb-mob-gv-ti:hover{background:rgba(168,85,247,0.08);border-color:rgba(168,85,247,0.3);}',
    '.skb-mob-gv-ti-logo{width:38px;height:38px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}',
    '.skb-mob-gv-ti-logo img{width:24px;height:24px;object-fit:contain;}',
    '.skb-mob-gv-ti-info{width:100%;}',
    '.skb-mob-gv-ti-name{font-family:\'Exo 2\',sans-serif;font-size:10px;font-weight:700;color:#fff;text-align:center;line-height:1.3;}',
    '.skb-mob-gv-ti-sub{font-size:8px;color:rgba(255,255,255,0.4);margin-top:2px;text-align:center;line-height:1.3;}',
    '.skb-mob-tourn-live{font-size:8px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;padding:2px 7px;border-radius:4px;flex-shrink:0;}',
    '.skb-mob-tourn-live.is-live{background:rgba(233,30,140,0.2);color:#e91e8c;border:1px solid rgba(233,30,140,0.35);}',
    '.skb-mob-tourn-live.upcoming{background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.4);border:1px solid rgba(255,255,255,0.1);}',
    '.skb-mob-gv-other-matches{padding:0 14px 90px;display:flex;flex-direction:column;gap:8px;}',
    '.skb-mob-gv-om-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:10px 12px;display:flex;flex-direction:column;gap:8px;}',
    '.skb-mob-gv-om-label{font-size:9px;color:rgba(255,255,255,0.4);font-weight:700;letter-spacing:1px;text-transform:uppercase;}',
    '.skb-mob-gv-om-row{display:flex;align-items:center;justify-content:space-between;gap:6px;}',
    '.skb-mob-gv-om-team{display:flex;align-items:center;gap:7px;flex:1;min-width:0;}',
    '.skb-mob-gv-om-team img{width:24px;height:24px;object-fit:contain;flex-shrink:0;}',
    '.skb-mob-gv-om-name{font-family:\'Exo 2\',sans-serif;font-size:11px;font-weight:800;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}',
    '.skb-mob-gv-om-team.right{flex-direction:row-reverse;text-align:right;}',
    '.skb-mob-gv-om-vs{font-size:9px;font-weight:900;color:rgba(255,255,255,0.2);flex-shrink:0;}',
    '.skb-mob-gv-om-odds{display:flex;gap:6px;}',
    '.skb-mob-gv-om-odd{flex:1;text-align:center;padding:4px 0;border-radius:6px;background:#070b1f;border:1px solid rgba(255,255,255,0.1);font-family:\'Rajdhani\',sans-serif;font-size:14px;font-weight:900;color:#fff;cursor:pointer;}',
    '.skb-mob-gv-om-odd:hover{border-color:rgba(255,255,255,0.3);background:rgba(255,255,255,0.08);}',

    /* ── Store view ── */
    '.skb-mob-store-view{display:none;flex:1;overflow-y:auto;overflow-x:hidden;scrollbar-width:none;flex-direction:column;}',
    '.skb-mob-store-view::-webkit-scrollbar{display:none;}',
    '.skb-mob-store-topbar{display:flex;align-items:center;gap:10px;padding:14px 14px 8px;flex-shrink:0;}',
    '.skb-mob-store-back{background:none;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;padding:0;}',
    '.skb-mob-store-title{font-family:\'Rajdhani\',sans-serif;font-size:16px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff;flex:1;}',
    '.skb-mob-store-coins{display:flex;align-items:center;gap:5px;background:rgba(250,204,21,0.1);border:1px solid rgba(250,204,21,0.3);border-radius:8px;padding:4px 10px;}',
    '.skb-mob-store-coins-val{font-family:\'Rajdhani\',sans-serif;font-size:14px;font-weight:800;color:#facc15;}',
    '.skb-mob-store-section{padding:14px 14px 4px;}',
    '.skb-mob-store-section-ttl{font-size:15px;font-weight:800;letter-spacing:1px;text-transform:uppercase;color:#fff;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid rgba(255,255,255,0.07);}',
    '.skb-mob-store-grid{display:flex;gap:8px;}',
    '.skb-mob-store-item{flex:1;border-radius:12px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.09);overflow:hidden;cursor:pointer;transition:border-color 0.2s,transform 0.2s;display:flex;flex-direction:column;}',
    '.skb-mob-store-item:hover{border-color:rgba(168,85,247,0.4);transform:translateY(-3px);}',
    '.skb-mob-store-item.equipped{border-color:rgba(168,85,247,0.6);background:rgba(168,85,247,0.08);}',
    '.skb-mob-store-img{width:100%;aspect-ratio:1;display:flex;align-items:center;justify-content:center;padding:4px;background:rgba(255,255,255,0.02);}',
    '.skb-mob-store-img img{width:100%;height:100%;object-fit:contain;}',
    '.skb-mob-store-info{padding:8px;}',
    '.skb-mob-store-name{font-family:\'Rajdhani\',sans-serif;font-size:14px;font-weight:800;letter-spacing:0.5px;text-transform:uppercase;color:#fff;margin-bottom:6px;text-align:center;}',
    '.skb-mob-store-price{font-size:10px;font-weight:600;color:rgba(255,255,255,0.45);text-align:center;margin-top:2px;}',

    /* ── Profil view ── */
    '.skb-mob-profil-view{display:none;flex:1;overflow-y:auto;overflow-x:hidden;scrollbar-width:none;}',
    '.skb-mob-profil-view::-webkit-scrollbar{display:none;}',

    '.skb-mob-profil-header{',
    '  display:flex;gap:0;align-items:flex-start;',
    '  padding:16px 14px 0;position:relative;',
    '}',

    /* skin column */
    '.skb-mob-profil-skin{',
    '  display:flex;flex-direction:column;align-items:center;',
    '  flex-shrink:0;width:130px;',
    '}',
    '.skb-mob-profil-skin img{',
    '  width:150px;display:block;object-fit:contain;',
    '  filter:drop-shadow(0 4px 18px rgba(124,58,237,0.35));',
    '}',
    '.skb-mob-profil-username{',
    "  font-family:'Exo 2',sans-serif;font-size:12px;font-weight:800;",
    '  color:rgba(255,255,255,0.65);margin-top:6px;letter-spacing:0.5px;',
    '}',

    /* stats column */
    '.skb-mob-profil-stats{display:flex;gap:36px;}',
    '.skb-mob-profil-stat{display:flex;flex-direction:column;align-items:center;gap:2px;}',
    '.skb-mob-profil-stat-val{',
    "  font-family:'Rajdhani',sans-serif;font-size:24px;font-weight:900;color:#fff;line-height:1;",
    '}',
    '.skb-mob-profil-stat-label{',
    "  font-family:'Exo 2',sans-serif;font-size:8px;font-weight:700;",
    '  color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:0.8px;',
    '}',
    '.skb-mob-profil-right{flex:1;display:flex;flex-direction:column;gap:18px;padding-top:6px;padding-left:28px;}',
    '.skb-mob-profil-balance-block{',
    '  margin-top:8px;',
    '  background:rgba(255,255,255,0.08);',
    '  border:1px solid rgba(255,255,255,0.15);',
    '  border-radius:12px;padding:10px 14px;',
    '}',
    '.skb-mob-profil-balance-label{',
    "  font-family:'Exo 2',sans-serif;font-size:8px;font-weight:700;",
    '  color:rgba(255,255,255,0.45);text-transform:uppercase;letter-spacing:0.8px;margin-bottom:4px;',
    '}',
    '.skb-mob-profil-balance-amount{',
    "  font-family:'Rajdhani',sans-serif;font-size:34px;font-weight:900;color:#fff;line-height:1;",
    '}',
    '.skb-mob-profil-action-btns{display:flex;gap:8px;}',
    '.skb-mob-profil-btn{',
    '  flex:1;padding:14px 0;border-radius:10px;cursor:pointer;',
    "  font-family:'Exo 2',sans-serif;font-size:13px;font-weight:800;",
    '  letter-spacing:1.2px;text-transform:uppercase;',
    '  border:none;transition:all 0.15s;text-align:center;',
    '}',
    '.skb-mob-profil-btn.withdraw{background:#fff;color:#070b1f;}',
    '.skb-mob-profil-btn.withdraw:hover{background:rgba(255,255,255,0.85);}',
    '.skb-mob-profil-btn.deposit{background:#070b1f;color:#fff;border:1px solid rgba(255,255,255,0.15);}',
    '.skb-mob-profil-btn.deposit:hover{background:#0e1535;}',
    '.skb-mob-profil-menu{margin:24px 14px 0;display:flex;flex-direction:column;}',
    '.skb-mob-profil-menu-btn{',
    '  display:flex;align-items:center;justify-content:space-between;',
    '  padding:16px 18px;cursor:pointer;',
    '  background:rgba(255,255,255,0.045);',
    '  border:1px solid rgba(255,255,255,0.08);',
    '  border-bottom:none;transition:background 0.15s;',
    '}',
    '.skb-mob-profil-menu-btn:first-child{border-radius:14px 14px 0 0;}',
    '.skb-mob-profil-menu-btn:last-child{border-radius:0 0 14px 14px;border-bottom:1px solid rgba(255,255,255,0.08);}',
    '.skb-mob-profil-menu-btn:hover{background:rgba(255,255,255,0.09);}',
    '.skb-mob-profil-store-btn{position:relative;overflow:hidden;}',

    /* ── Betting History ── */
    '.skb-mob-bh{margin:20px 14px 24px;}',
    '.skb-mob-bh-head{',
    '  display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;',
    '}',
    '.skb-mob-bh-title{',
    "  font-family:'Exo 2',sans-serif;font-size:13px;font-weight:700;",
    '  letter-spacing:2px;text-transform:uppercase;color:#fff;',
    '}',
    '.skb-mob-bh-tabs{display:flex;gap:6px;}',
    '.skb-mob-bh-tab{',
    '  padding:5px 12px;border-radius:8px;cursor:pointer;',
    '  border:1px solid rgba(255,255,255,0.15);background:transparent;',
    '  color:rgba(255,255,255,0.4);',
    "  font-family:'Exo 2',sans-serif;font-size:9px;font-weight:700;",
    '  letter-spacing:0.8px;text-transform:uppercase;transition:all 0.15s;',
    '}',
    '.skb-mob-bh-tab.active{background:#fff;border-color:#fff;color:#070b1f;}',
    '.skb-mob-bh-list{',
    '  max-height:292px;overflow-y:auto;scrollbar-width:none;',
    '  border-radius:14px;',
    '  border:1px solid rgba(255,255,255,0.08);',
    '}',
    '.skb-mob-bh-list::-webkit-scrollbar{display:none;}',
    '.skb-mob-bh-item{',
    '  padding:12px 14px;',
    '  border-bottom:1px solid rgba(255,255,255,0.06);',
    '  background:rgba(255,255,255,0.03);',
    '  display:flex;flex-direction:column;gap:5px;',
    '}',
    '.skb-mob-bh-item:last-child{border-bottom:none;}',
    '.skb-mob-bh-row1{display:flex;align-items:center;justify-content:space-between;}',
    '.skb-mob-bh-event{',
    "  font-family:'Exo 2',sans-serif;font-size:11px;font-weight:800;color:#fff;",
    '}',
    '.skb-mob-bh-date{font-size:9px;color:rgba(255,255,255,0.35);}',
    '.skb-mob-bh-row2{display:flex;align-items:center;justify-content:space-between;}',
    '.skb-mob-bh-details{font-size:10px;color:rgba(255,255,255,0.5);display:flex;gap:8px;align-items:center;}',
    '.skb-mob-bh-sep{color:rgba(255,255,255,0.2);}',
    '.skb-mob-bh-gain{',
    "  font-family:'Rajdhani',sans-serif;font-size:15px;font-weight:900;color:#38bdf8;",
    '}',
    '.skb-mob-bh-badge{',
    '  font-size:8px;font-weight:800;letter-spacing:1px;text-transform:uppercase;',
    '  padding:2px 7px;border-radius:4px;',
    '}',
    '.skb-mob-bh-badge.won{background:rgba(56,189,248,0.15);color:#38bdf8;border:1px solid rgba(56,189,248,0.3);}',
    '.skb-mob-bh-badge.lost{background:rgba(239,68,68,0.15);color:#ef4444;border:1px solid rgba(239,68,68,0.3);}',

    /* ── Not Yet Available view ── */
    '.skb-mob-nya-view{display:none;flex:1;flex-direction:column;align-items:center;justify-content:center;background:#000;gap:14px;}',
    '.skb-mob-nya-title{font-family:\'Exo 2\',sans-serif;font-size:20px;font-weight:900;color:#fff;letter-spacing:2px;text-transform:uppercase;text-align:center;}',
    '.skb-mob-nya-sub{font-size:11px;color:rgba(255,255,255,0.3);letter-spacing:1px;text-align:center;}',

    /* ── Bracket view ── */
    '.skb-mob-bracket-view{display:none;flex:1;overflow-y:auto;overflow-x:hidden;scrollbar-width:none;flex-direction:column;}',
    '.skb-mob-bracket-view::-webkit-scrollbar{display:none;}',
    '.skb-mob-bk-topbar{display:flex;align-items:center;gap:10px;padding:14px 14px 8px;flex-shrink:0;}',
    '.skb-mob-bk-back{width:32px;height:32px;border-radius:50%;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.07);color:#fff;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;}',
    '.skb-mob-bk-title{font-family:\'Exo 2\',sans-serif;font-size:12px;font-weight:700;color:#fff;letter-spacing:0.3px;flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}',

    /* format switcher */
    '.skb-mob-bk-fmtbar{display:flex;gap:5px;padding:0 14px 12px;flex-shrink:0;}',
    '.skb-mob-bk-fmt{flex:1;padding:6px 0;border-radius:20px;border:1px solid rgba(255,255,255,0.12);background:transparent;color:rgba(255,255,255,0.38);font-family:\'Exo 2\',sans-serif;font-size:8.5px;font-weight:700;cursor:pointer;letter-spacing:0.3px;transition:all 0.15s;white-space:nowrap;}',
    '.skb-mob-bk-fmt.active{background:rgba(168,85,247,0.22);color:#c084fc;border-color:rgba(168,85,247,0.5);}',

    /* bracket tree */
    '.skb-mob-bk-tree-wrap{flex-shrink:0;overflow-x:auto;overflow-y:visible;scrollbar-width:none;-ms-overflow-style:none;padding:0 8px 0 8px;}',
    '.skb-mob-bk-tree-wrap::-webkit-scrollbar{display:none;}',
    '.skb-mob-bk-tree{position:relative;height:310px;display:flex;}',
    '.skb-mob-bk-col{display:flex;flex-direction:column;width:110px;flex-shrink:0;}',
    '.skb-mob-bk-col-label{height:20px;font-family:\'Exo 2\',sans-serif;font-size:6.5px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.22);display:flex;align-items:center;justify-content:center;text-align:center;}',
    '.skb-mob-bk-col-matches{flex:1;display:flex;flex-direction:column;}',
    '.skb-mob-bk-slot{flex:1;display:flex;align-items:center;justify-content:center;}',
    '.skb-mob-bk-gap{width:24px;flex-shrink:0;}',

    /* mini match card */
    '.skb-mob-bk-mini{width:100%;border-radius:7px;overflow:hidden;border:1px solid rgba(124,92,252,0.2);background:#13151f;}',
    '.skb-mob-bk-mini.mlive{border-left:2px solid #ff3d57;background:rgba(255,61,87,0.06);}',
    '.skb-mob-bk-mini.mup{border-color:rgba(255,255,255,0.1);background:#0d0e16;}',
    '.skb-mob-bk-mini.mgf{border-color:rgba(212,175,55,0.3);box-shadow:0 0 10px rgba(212,175,55,0.15);}',
    '.skb-mob-bk-mini-h{padding:3px 6px;border-bottom:1px solid rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:space-between;gap:4px;}',
    '.skb-mob-bk-mini-st{font-size:6px;font-weight:800;letter-spacing:0.8px;text-transform:uppercase;padding:1px 4px;border-radius:3px;}',
    '.skb-mob-bk-mini-st.fin{background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.28);}',
    '.skb-mob-bk-mini-st.lv{background:rgba(255,61,87,0.15);color:#ff6b7a;display:flex;align-items:center;gap:2px;}',
    '.skb-mob-bk-mini-st.up{background:rgba(168,85,247,0.12);color:#c084fc;}',
    '.skb-mob-bk-mini-ld{width:3px;height:3px;border-radius:50%;background:#ff3d57;animation:skbLivePulse 1.2s ease-in-out infinite;flex-shrink:0;}',
    '.skb-mob-bk-mini-bo{font-size:6px;color:rgba(255,255,255,0.22);font-weight:700;flex-shrink:0;}',
    '.skb-mob-bk-mini-t{display:flex;align-items:center;gap:4px;padding:3px 5px;height:19px;}',
    '.skb-mob-bk-mini-t+.skb-mob-bk-mini-t{border-top:1px solid rgba(255,255,255,0.04);}',
    '.skb-mob-bk-mini-t.win{background:rgba(168,85,247,0.07);}',
    '.skb-mob-bk-mini-t.los{opacity:0.38;}',
    '.skb-mob-bk-mini-tl{width:13px;height:13px;object-fit:contain;flex-shrink:0;}',
    '.skb-mob-bk-mini-tn{flex:1;font-family:\'Exo 2\',sans-serif;font-size:9px;font-weight:700;color:rgba(255,255,255,0.85);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}',
    '.skb-mob-bk-mini-sc{font-family:\'Exo 2\',sans-serif;font-size:10px;font-weight:800;color:rgba(255,255,255,0.28);min-width:10px;text-align:right;flex-shrink:0;}',
    '.skb-mob-bk-mini-sc.w{color:#fff;}',

    /* playoff header */
    '.skb-mob-bk-phdr{display:flex;align-items:center;gap:8px;padding:2px 14px 8px;flex-shrink:0;}',
    '.skb-mob-bk-ptag{font-family:\'Exo 2\',sans-serif;font-size:7.5px;font-weight:800;letter-spacing:2px;text-transform:uppercase;background:rgba(168,85,247,0.14);border:1px solid rgba(168,85,247,0.3);color:#c084fc;padding:2px 7px;border-radius:5px;}',
    '.skb-mob-bk-psub{font-size:8px;color:rgba(255,255,255,0.22);font-weight:600;}',

    /* prize pool */
    '.skb-mob-bk-pp{padding:14px;border-top:1px solid rgba(255,255,255,0.06);flex-shrink:0;}',
    '.skb-mob-bk-pp-hdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;}',
    '.skb-mob-bk-pp-ttl{font-family:\'Exo 2\',sans-serif;font-size:8.5px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.28);}',
    '.skb-mob-bk-pp-total{font-family:\'Exo 2\',sans-serif;font-size:13px;font-weight:800;color:#c084fc;}',
    '.skb-mob-bk-podium{display:flex;gap:5px;align-items:flex-end;margin-bottom:7px;}',
    '.skb-mob-bk-pod{flex:1;border-radius:8px;display:flex;flex-direction:column;align-items:center;padding:10px 4px 8px;gap:3px;}',
    '.skb-mob-bk-pod.p1{border:1px solid rgba(212,175,55,0.35);background:linear-gradient(180deg,rgba(212,175,55,0.07),transparent);min-height:88px;}',
    '.skb-mob-bk-pod.p2{border:1px solid rgba(192,192,192,0.22);background:linear-gradient(180deg,rgba(192,192,192,0.04),transparent);min-height:70px;}',
    '.skb-mob-bk-pod.p3{border:1px solid rgba(205,127,50,0.22);background:linear-gradient(180deg,rgba(205,127,50,0.04),transparent);min-height:60px;}',
    '.skb-mob-bk-pod-med{font-size:15px;line-height:1;}',
    '.skb-mob-bk-pod-pl{font-size:6.5px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:rgba(255,255,255,0.25);}',
    '.skb-mob-bk-pod-amt{font-family:\'Exo 2\',sans-serif;font-weight:800;line-height:1;}',
    '.skb-mob-bk-pod.p1 .skb-mob-bk-pod-amt{font-size:16px;color:#d4af37;}',
    '.skb-mob-bk-pod.p2 .skb-mob-bk-pod-amt{font-size:13px;color:#c0c0c0;}',
    '.skb-mob-bk-pod.p3 .skb-mob-bk-pod-amt{font-size:11px;color:#cd7f32;}',
    '.skb-mob-bk-pod-tm{font-size:7.5px;color:rgba(255,255,255,0.28);text-align:center;}',
    '.skb-mob-bk-pp-rows{display:flex;flex-direction:column;gap:3px;}',
    '.skb-mob-bk-pp-row{display:flex;align-items:center;gap:8px;padding:4px 8px;background:rgba(255,255,255,0.03);border-radius:6px;}',
    '.skb-mob-bk-pp-place{font-size:9px;color:rgba(255,255,255,0.28);font-weight:700;min-width:28px;font-family:\'Exo 2\',sans-serif;}',
    '.skb-mob-bk-pp-team{flex:1;font-size:10px;color:rgba(255,255,255,0.6);font-weight:600;}',
    '.skb-mob-bk-pp-amt{font-family:\'Exo 2\',sans-serif;font-size:10px;font-weight:700;color:#c084fc;}',

    /* teams section */
    '.skb-mob-bk-tm-hdr{font-family:\'Exo 2\',sans-serif;font-size:8.5px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.28);padding:2px 14px 8px;display:flex;align-items:center;gap:10px;}',
    '.skb-mob-bk-tm-hdr::after{content:"";flex:1;height:1px;background:rgba(255,255,255,0.06);}',
    '.skb-mob-bk-tgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;padding:0 14px 24px;}',
    '.skb-mob-bk-tc{background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:9px;padding:7px 4px;display:flex;flex-direction:column;align-items:center;gap:3px;}',
    '.skb-mob-bk-tc-seed{font-size:7px;font-weight:800;color:rgba(251,191,36,0.75);font-family:\'Exo 2\',sans-serif;align-self:flex-start;padding:0 2px;}',
    '.skb-mob-bk-tc-img{width:28px;height:28px;object-fit:contain;margin:1px auto;}',
    '.skb-mob-bk-tc-name{font-family:\'Exo 2\',sans-serif;font-size:8px;font-weight:700;color:#fff;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%;}',
    '.skb-mob-bk-tc-rank{font-size:7px;color:rgba(255,255,255,0.28);text-align:center;}',

    /* mini-card odds row (for UPCOMING matches with bets) */
    '.skb-mob-bk-mini-odds{display:flex;gap:4px;padding:3px 5px;border-top:1px solid rgba(255,255,255,0.06);}',
    '.skb-mob-bk-mini-odd{flex:1;background:rgba(124,58,237,0.2);border:1px solid rgba(168,85,247,0.3);border-radius:5px;padding:3px 4px;text-align:center;}',
    '.skb-mob-bk-mini-odd-lbl{display:block;font-size:5.5px;font-weight:700;color:rgba(255,255,255,0.35);letter-spacing:0.3px;text-transform:uppercase;}',
    '.skb-mob-bk-mini-odd-val{display:block;font-family:\'Exo 2\',sans-serif;font-size:10px;font-weight:800;color:#c084fc;}',

    /* DE section labels */
    '.skb-mob-bk-de-sec{padding:0 8px 6px;flex-shrink:0;}',
    '.skb-mob-bk-de-lbl-ub{font-family:\'Exo 2\',sans-serif;font-size:8.5px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:rgba(168,85,247,0.8);padding:0 0 6px;border-bottom:1px solid rgba(168,85,247,0.18);}',
    '.skb-mob-bk-de-lbl-lb{font-family:\'Exo 2\',sans-serif;font-size:8.5px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:rgba(239,68,68,0.75);padding:6px 0;border-top:1px solid rgba(239,68,68,0.18);margin-top:8px;}',
    '.skb-mob-bk-de-gf{padding:8px;margin:6px 8px;background:rgba(251,191,36,0.05);border:1px solid rgba(251,191,36,0.25);border-radius:10px;flex-shrink:0;}',
    '.skb-mob-bk-de-gf-title{font-family:\'Exo 2\',sans-serif;font-size:8px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:#fbbf24;margin-bottom:6px;display:flex;align-items:center;gap:5px;}',
    '.skb-mob-bk-de-gf-row{display:flex;align-items:center;gap:6px;padding:5px 0;}',
    '.skb-mob-bk-de-gf-row+.skb-mob-bk-de-gf-row{border-top:1px solid rgba(255,255,255,0.06);}',
    '.skb-mob-bk-de-gf-slot{font-size:7px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase;color:rgba(255,255,255,0.25);min-width:60px;}',
    '.skb-mob-bk-de-gf-team{display:flex;align-items:center;gap:5px;}',
    '.skb-mob-bk-de-gf-logo{width:16px;height:16px;object-fit:contain;flex-shrink:0;border-radius:50%;}',
    '.skb-mob-bk-de-gf-name{font-family:\'Exo 2\',sans-serif;font-size:10px;font-weight:700;color:rgba(255,255,255,0.5);font-style:italic;}',
    '.skb-mob-bk-de-adv{font-size:7px;font-weight:700;color:rgba(251,191,36,0.8);background:rgba(251,191,36,0.1);border:1px solid rgba(251,191,36,0.25);border-radius:4px;padding:1px 5px;margin-left:auto;flex-shrink:0;}',

    /* Swiss */
    '.skb-mob-bk-sw{padding:0 14px 24px;display:flex;flex-direction:column;gap:10px;}',
    '.skb-mob-bk-sw-round{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:10px;overflow:hidden;}',
    '.skb-mob-bk-sw-round-hdr{display:flex;align-items:center;justify-content:space-between;padding:7px 10px;border-bottom:1px solid rgba(255,255,255,0.07);background:rgba(255,255,255,0.02);}',
    '.skb-mob-bk-sw-round-lbl{font-family:\'Exo 2\',sans-serif;font-size:8px;font-weight:800;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,0.45);}',
    '.skb-mob-bk-sw-round-count{font-size:8px;color:rgba(255,255,255,0.22);}',
    '.skb-mob-bk-sw-body{padding:8px;}',
    '.skb-mob-bk-sw-grp-lbl{font-family:\'Exo 2\',sans-serif;font-size:8px;font-weight:800;color:rgba(255,255,255,0.35);letter-spacing:1px;margin:6px 2px 4px;}',
    '.skb-mob-bk-sw-grp-lbl:first-child{margin-top:0;}',
    '.skb-mob-bk-sw-grp-lbl.q{color:rgba(34,197,94,0.8);}',
    '.skb-mob-bk-sw-grp-lbl.e{color:rgba(239,68,68,0.7);}',
    '.skb-mob-bk-sw-row{display:flex;align-items:center;gap:5px;padding:4px 5px;background:rgba(255,255,255,0.025);border:1px solid rgba(255,255,255,0.06);border-radius:7px;margin-bottom:3px;}',
    '.skb-mob-bk-sw-row.qual{background:rgba(34,197,94,0.07);border-color:rgba(34,197,94,0.2);}',
    '.skb-mob-bk-sw-row.elim{background:rgba(239,68,68,0.07);border-color:rgba(239,68,68,0.18);}',
    '.skb-mob-bk-sw-logo{width:22px;height:22px;border-radius:50%;overflow:hidden;flex-shrink:0;background:rgba(255,255,255,0.06);display:flex;align-items:center;justify-content:center;}',
    '.skb-mob-bk-sw-logo img{width:100%;height:100%;object-fit:contain;}',
    '.skb-mob-bk-sw-logo.win{box-shadow:0 0 5px rgba(34,197,94,0.3);border:1px solid rgba(34,197,94,0.25);}',
    '.skb-mob-bk-sw-logo.los{opacity:0.32;filter:grayscale(55%);}',
    '.skb-mob-bk-sw-name{flex:1;font-family:\'Exo 2\',sans-serif;font-size:8.5px;font-weight:700;color:rgba(255,255,255,0.75);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}',
    '.skb-mob-bk-sw-name.los{color:rgba(255,255,255,0.3);}',
    '.skb-mob-bk-sw-sc{font-family:\'Exo 2\',sans-serif;font-size:9px;font-weight:800;color:rgba(255,255,255,0.3);min-width:16px;text-align:center;flex-shrink:0;}',
    '.skb-mob-bk-sw-sc.live{color:#ff3d57;}',
    '.skb-mob-bk-sw-tbd-row{display:flex;justify-content:center;gap:10px;padding:6px;}',
    '.skb-mob-bk-sw-tbd{width:24px;height:24px;border-radius:50%;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;justify-content:center;font-size:6.5px;color:rgba(255,255,255,0.2);font-weight:700;}',

    '.skb-mob-profil-menu-label{',
    "  font-family:'Exo 2',sans-serif;font-size:12px;font-weight:700;",
    '  color:#fff;letter-spacing:0.5px;',
    '}',
    '.skb-mob-profil-menu-arrow{width:16px;height:16px;object-fit:contain;filter:brightness(0) saturate(0) invert(1) brightness(2);opacity:1;}',

    /* home bar */
    '.skb-phone-bar{',
    '  width:134px;height:5px;background:rgba(255,255,255,0.25);',
    '  border-radius:3px;margin:14px auto 0;',
    '}',

    /* close button */
    '.skb-phone-close{',
    '  position:absolute;top:24px;right:24px;',
    '  width:38px;height:38px;border-radius:50%;border:none;',
    '  background:rgba(255,255,255,0.12);color:#fff;',
    '  font-size:18px;line-height:1;cursor:pointer;',
    '  display:flex;align-items:center;justify-content:center;',
    '  transition:background 0.18s;',
    '}',
    '.skb-phone-close:hover{background:rgba(255,255,255,0.25);}',

    '.skb-phone-pill{display:none;}'

  ].join('\n');

  var styleEl = document.createElement('style');
  styleEl.id = 'skb-header-css';
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  /* ── SVG icons ── */
  function icon(path) {
    return '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' + path + '</svg>';
  }
  var icons = {
    profile:  icon('<circle cx="8" cy="5.5" r="2.5"/><path d="M2.5 14c0-3 2.5-5 5.5-5s5.5 2 5.5 5"/>'),
    locker:   icon('<rect x="3" y="7" width="10" height="8" rx="2"/><path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2"/>'),
    settings: icon('<circle cx="8" cy="8" r="2.5"/><path d="M8 2v1.5M8 12.5V14M2 8h1.5M12.5 8H14M3.9 3.9l1 1M11.1 11.1l1 1M3.9 12.1l1-1M11.1 4.9l1-1"/>'),
    deposit:  icon('<rect x="2" y="4" width="12" height="9" rx="2"/><path d="M2 8h12"/><circle cx="11" cy="11" r="1" fill="currentColor" stroke="none"/>'),
    logout:   icon('<path d="M10 3h3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-3"/><path d="M7 10l-3-2 3-2"/><path d="M4 8h8"/>'),
  };

  /* ════════════════════════════════════════════
     NAV HTML
  ════════════════════════════════════════════ */
  var nav = document.createElement('nav');
  nav.innerHTML = [
    '<a class="nav-logo" href="index.html">',
    '  <img src="img_M/SKB LOGO.png" alt="SkillBet"/>',
    '</a>',

    '<div class="nav-center">',
    '  <div class="nav-live"><img src="img_M/live 4.png" alt="Live"/></div>',
    '  <a class="nav-item" href="my-bets.html">',
    '    <img src="img_M/bets.png" alt="My Bets"/>MY BETS',
    '  </a>',
    '  <a class="nav-item" href="teams.html">',
    '    <img src="img_M/teams.png" alt="Teams"/>TEAMS',
    '  </a>',
    '</div>',

    '<div class="nav-right">',

    /* Phone preview button */
    '  <button class="skb-phone-btn" id="skb-phone-btn" title="Mobile preview">',
    '    <svg width="17" height="17" viewBox="0 0 24 24" fill="none"',
    '         stroke="currentColor" stroke-width="2.2"',
    '         stroke-linecap="round" stroke-linejoin="round">',
    '      <rect x="5" y="2" width="14" height="20" rx="2"/>',
    '      <circle cx="12" cy="18" r="1" fill="currentColor" stroke="none"/>',
    '    </svg>',
    '  </button>',

    /* Balance pill */
    '  <div class="nav-balance">',
    '    <div class="nav-balance-inner">',
    '      <span class="nav-balance-label">Balance</span>',
    '      <span class="nav-balance-amount">£1,247.50</span>',
    '    </div>',
    '    <button class="nav-deposit-btn" onclick="openWallet(\'deposit\')">+ Deposit</button>',
    '  </div>',

    /* Avatar + dropdown */
    '  <div class="nav-avatar-wrap">',
    '    <div id="skbNavAvatar" style="cursor:pointer;display:flex;align-items:center;">',
    '      <img src="img_M/head skin .png" alt="avatar" style="height:42px;object-fit:contain;display:block;"/>',
    '    </div>',
    '    <div class="nav-dropdown" id="skbNavDropdown">',
    '      <a class="nav-dd-item" href="profile.html">',
    '        <span class="nav-dd-icon">' + icons.profile + '</span>My Profile',
    '      </a>',
    '      <a class="nav-dd-item" href="#">',
    '        <span class="nav-dd-icon">' + icons.locker + '</span>Locker',
    '      </a>',
    '      <a class="nav-dd-item" href="settings.html">',
    '        <span class="nav-dd-icon">' + icons.settings + '</span>Settings',
    '      </a>',
    '      <div class="nav-dd-sep"></div>',
    '      <a class="nav-dd-item nav-dd-deposit" href="#" onclick="event.preventDefault();closeWallet&&closeWallet();openWallet(\'deposit\')">',
    '        <span class="nav-dd-icon">' + icons.deposit + '</span>Deposit',
    '      </a>',
    '      <div class="nav-dd-sep"></div>',
    '      <a class="nav-dd-item nav-dd-logout" href="gate.html" onclick="sessionStorage.removeItem(\'sb_access\')">',
    '        <span class="nav-dd-icon">' + icons.logout + '</span>Log out',
    '      </a>',
    '    </div>',
    '  </div>',

    '</div>'
  ].join('\n');

  /* Insert right where the <script> tag sits */
  var s = document.currentScript;
  s.parentNode.insertBefore(nav, s);

  /* ── Inject wallet.js once ── */
  if (!document.getElementById('skb-wallet-script')) {
    var ws = document.createElement('script');
    ws.id = 'skb-wallet-script';
    ws.src = (document.currentScript ? document.currentScript.src.replace('header.js', '') : '') + 'wallet.js';
    document.head.appendChild(ws);
  }

  /* ── Toggle dropdown ── */
  document.addEventListener('DOMContentLoaded', function () {
    var avatar   = document.getElementById('skbNavAvatar');
    var dropdown = document.getElementById('skbNavDropdown');
    if (!avatar || !dropdown) return;
    /* Move dropdown to <body> to escape overflow:hidden clipping on .page */
    document.body.appendChild(dropdown);

    avatar.addEventListener('click', function (e) {
      e.stopPropagation();
      if (!dropdown.classList.contains('open')) {
        var rect = avatar.getBoundingClientRect();
        dropdown.style.top   = (rect.bottom + 8) + 'px';
        dropdown.style.right  = (window.innerWidth - rect.right) + 'px';
        dropdown.style.left   = 'auto';
      }
      dropdown.classList.toggle('open');
    });
    document.addEventListener('click', function () {
      dropdown.classList.remove('open');
    });
  });

  /* ════════════════════════════════════════════
     PHONE OVERLAY — injected once into <body>
  ════════════════════════════════════════════ */
  var overlay = document.createElement('div');
  overlay.id = 'skb-phone-overlay';
  overlay.innerHTML = [
    '<button class="skb-phone-close" id="skb-phone-close">✕</button>',
    '<div class="skb-phone-shell">',
    '  <div class="skb-phone-island"></div>',
    '  <div class="skb-phone-screen">',
    '    <div class="skb-mob-blobs">',
    '      <div class="skb-mob-blob mb1"></div>',
    '      <div class="skb-mob-blob mb2"></div>',
    '      <div class="skb-mob-blob mb3"></div>',
    '    </div>',
    '    <div class="skb-mob-content">',
    '    <div class="skb-mob-header">',
    '      <img class="skb-mob-logo" src="img_M/SKB LOGO.png" alt="SkillBet" />',
    '      <div class="skb-mob-header-right">',
    '        <button class="skb-mob-wallet"><span class="skb-mob-wallet-amount">£1,247.50</span><span class="skb-mob-wallet-add">+</span></button>',
    '        <img class="skb-mob-avatar" src="img_M/head skin .png" alt="avatar"/>',
    '      </div>',
    '    </div>',
    '    <div class="skb-mob-card">',
    '      <div class="skb-mob-card-bg"><img src="img_M/image.jpg" alt=""/></div>',
    '      <div class="skb-mob-card-content">',
    '        <div class="skb-mob-event-label">League of Legends — Worlds 2025 · Final</div>',
    '        <div class="skb-mob-event-sub">In 2 days</div>',
    '        <div class="skb-mob-teams">',
    '          <div class="skb-mob-team">',
    '            <img src="img_M/logoT1.png" alt="T1"/>',
    '            <div class="skb-mob-odd">1.65</div>',
    '          </div>',
    '          <div class="skb-mob-vs">VS</div>',
    '          <div class="skb-mob-team">',
    '            <img src="img_M/logoKC.png" alt="KC"/>',
    '            <div class="skb-mob-odd">2.30</div>',
    '          </div>',
    '        </div>',
    '        <svg class="skb-mob-graph" viewBox="0 0 500 180" preserveAspectRatio="xMidYMid meet">',
    '          <defs>',
    '            <linearGradient id="mob-gt1" x1="0" y1="0" x2="0" y2="1">',
    '              <stop offset="0%" stop-color="#ef4444" stop-opacity="0"/>',
    '              <stop offset="100%" stop-color="#ef4444" stop-opacity="0.28"/>',
    '            </linearGradient>',
    '            <linearGradient id="mob-gkc" x1="0" y1="0" x2="0" y2="1">',
    '              <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.22"/>',
    '              <stop offset="100%" stop-color="#38bdf8" stop-opacity="0"/>',
    '            </linearGradient>',
    '            <filter id="mob-glow-t1" x="-20%" y="-80%" width="140%" height="260%">',
    '              <feGaussianBlur stdDeviation="3" result="blur"/>',
    '              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>',
    '            </filter>',
    '            <filter id="mob-glow-kc" x="-20%" y="-80%" width="140%" height="260%">',
    '              <feGaussianBlur stdDeviation="3" result="blur"/>',
    '              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>',
    '            </filter>',
    '          </defs>',
    '          <line x1="38" y1="12"  x2="430" y2="12"  stroke="rgba(255,255,255,0.07)" stroke-width="1"/>',
    '          <line x1="38" y1="48"  x2="430" y2="48"  stroke="rgba(255,255,255,0.07)" stroke-width="1"/>',
    '          <line x1="38" y1="84"  x2="430" y2="84"  stroke="rgba(255,255,255,0.12)" stroke-width="1" stroke-dasharray="4,3"/>',
    '          <line x1="38" y1="119" x2="430" y2="119" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>',
    '          <line x1="38" y1="155" x2="430" y2="155" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>',
    '          <text x="30" y="16"  text-anchor="end" fill="rgba(255,255,255,0.35)" font-size="9" font-family="Exo 2,sans-serif">100%</text>',
    '          <text x="30" y="52"  text-anchor="end" fill="rgba(255,255,255,0.35)" font-size="9" font-family="Exo 2,sans-serif">75%</text>',
    '          <text x="30" y="88"  text-anchor="end" fill="rgba(255,255,255,0.35)" font-size="9" font-family="Exo 2,sans-serif">50%</text>',
    '          <text x="30" y="123" text-anchor="end" fill="rgba(255,255,255,0.35)" font-size="9" font-family="Exo 2,sans-serif">25%</text>',
    '          <text x="30" y="159" text-anchor="end" fill="rgba(255,255,255,0.35)" font-size="9" font-family="Exo 2,sans-serif">0%</text>',
    '          <text x="38"  y="172" text-anchor="middle" fill="rgba(255,255,255,0.3)" font-size="9" font-family="Exo 2,sans-serif">Start</text>',
    '          <text x="212" y="172" text-anchor="middle" fill="rgba(255,255,255,0.3)" font-size="9" font-family="Exo 2,sans-serif">10min</text>',
    '          <text x="387" y="172" text-anchor="middle" fill="rgba(255,255,255,0.3)" font-size="9" font-family="Exo 2,sans-serif">20min</text>',
    '          <text x="430" y="172" text-anchor="middle" fill="rgba(255,255,255,0.3)" font-size="9" font-family="Exo 2,sans-serif">Live</text>',
    '          <path d="M38,84 82,80 125,74 169,70 212,66 256,63 300,61 343,58 387,57 430,62 L430,12 L38,12 Z" fill="url(#mob-gt1)"/>',
    '          <path d="M38,84 82,88 125,94 169,98 212,102 256,105 300,107 343,110 387,111 430,105 L430,155 L38,155 Z" fill="url(#mob-gkc)"/>',
    '          <polyline points="38,84 82,80 125,74 169,70 212,66 256,63 300,61 343,58 387,57 430,62" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" filter="url(#mob-glow-t1)"/>',
    '          <polyline points="38,84 82,88 125,94 169,98 212,102 256,105 300,107 343,110 387,111 430,105" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" filter="url(#mob-glow-kc)"/>',
    '          <circle cx="430" cy="62"  r="4" fill="#ef4444"/>',
    '          <circle cx="430" cy="105" r="4" fill="#38bdf8"/>',
    '          <text x="436" y="66"  fill="#ef4444" font-size="13" font-weight="700" font-family="Exo 2,sans-serif">T1 65%</text>',
    '          <text x="436" y="109" fill="#38bdf8" font-size="13" font-weight="700" font-family="Exo 2,sans-serif">KC 35%</text>',
    '        </svg>',
    '      </div>',
    '    </div>',
    /* ── Hot Matches ── */
    '  <div class="skb-mob-hot">',
    '    <div class="skb-mob-hot-title">Hot Matches</div>',
    '    <div class="skb-mob-hot-track">',

    /* Card 1 — LoL T1 vs KCorp */
    '      <div class="skb-mob-hcard">',
    '        <div class="skb-mob-hcard-bg"><img src="img_M/image.jpg" alt=""/></div>',
    '        <div class="skb-mob-hcard-content">',
    '          <div class="skb-mob-hcard-label">League of Legends — Worlds 2025 · Final</div>',
    '          <div class="skb-mob-hcard-teams">',
    '            <div class="skb-mob-hcard-team"><img src="img_M/logoT1.png" alt="T1"/><div class="skb-mob-hcard-odd">1.65</div></div>',
    '            <div class="skb-mob-hcard-vs">VS</div>',
    '            <div class="skb-mob-hcard-team"><img src="img_M/logoKC.png" alt="KC"/><div class="skb-mob-hcard-odd">2.30</div></div>',
    '          </div>',
    '          <svg class="skb-mob-hcard-graph" viewBox="0 0 500 120" preserveAspectRatio="xMidYMid meet">',
    '            <defs>',
    '              <linearGradient id="hg1a" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ef4444" stop-opacity="0"/><stop offset="100%" stop-color="#ef4444" stop-opacity="0.25"/></linearGradient>',
    '              <linearGradient id="hg1b" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#38bdf8" stop-opacity="0.2"/><stop offset="100%" stop-color="#38bdf8" stop-opacity="0"/></linearGradient>',
    '            </defs>',
    '            <line x1="38" y1="60" x2="430" y2="60" stroke="rgba(255,255,255,0.1)" stroke-width="1" stroke-dasharray="4,3"/>',
    '            <path d="M38,60 125,50 212,44 300,40 387,38 430,42 L430,8 L38,8 Z" fill="url(#hg1a)"/>',
    '            <path d="M38,60 125,64 212,70 300,74 387,76 430,70 L430,108 L38,108 Z" fill="url(#hg1b)"/>',
    '            <polyline points="38,60 125,50 212,44 300,40 387,38 430,42" fill="none" stroke="#ef4444" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>',
    '            <polyline points="38,60 125,64 212,70 300,74 387,76 430,70" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>',
    '            <circle cx="430" cy="42" r="3.5" fill="#ef4444"/><circle cx="430" cy="70" r="3.5" fill="#38bdf8"/>',
    '            <text x="436" y="46" fill="#ef4444" font-size="11" font-weight="700" font-family="Exo 2,sans-serif">T1 65%</text>',
    '            <text x="436" y="74" fill="#38bdf8" font-size="11" font-weight="700" font-family="Exo 2,sans-serif">KC 35%</text>',
    '          </svg>',
    '        </div>',
    '      </div>',

    /* Card 2 — CS2 Vitality vs NaVi */
    '      <div class="skb-mob-hcard">',
    '        <div class="skb-mob-hcard-bg contain"><img src="img_M/Counter_Strike_2_Logo.png" alt=""/></div>',
    '        <div class="skb-mob-hcard-content">',
    '          <div class="skb-mob-hcard-label">CS2 — ESL Pro League S21 · Final</div>',
    '          <div class="skb-mob-hcard-teams">',
    '            <div class="skb-mob-hcard-team"><img src="img_M/logovita.png" alt="Vitality"/><div class="skb-mob-hcard-odd">1.75</div></div>',
    '            <div class="skb-mob-hcard-vs">VS</div>',
    '            <div class="skb-mob-hcard-team"><img src="img_M/NAVI_Logo_2020.png" alt="NaVi" style="mix-blend-mode:multiply"/><div class="skb-mob-hcard-odd">2.05</div></div>',
    '          </div>',
    '          <svg class="skb-mob-hcard-graph" viewBox="0 0 500 120" preserveAspectRatio="xMidYMid meet">',
    '            <defs>',
    '              <linearGradient id="hg2a" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#facc15" stop-opacity="0"/><stop offset="100%" stop-color="#facc15" stop-opacity="0.22"/></linearGradient>',
    '              <linearGradient id="hg2b" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#60a5fa" stop-opacity="0.18"/><stop offset="100%" stop-color="#60a5fa" stop-opacity="0"/></linearGradient>',
    '            </defs>',
    '            <line x1="38" y1="60" x2="430" y2="60" stroke="rgba(255,255,255,0.1)" stroke-width="1" stroke-dasharray="4,3"/>',
    '            <path d="M38,60 125,58 212,62 300,56 387,50 430,54 L430,108 L38,108 Z" fill="url(#hg2a)"/>',
    '            <path d="M38,60 125,62 212,58 300,64 387,70 430,66 L430,8 L38,8 Z" fill="url(#hg2b)"/>',
    '            <polyline points="38,60 125,58 212,62 300,56 387,50 430,54" fill="none" stroke="#facc15" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>',
    '            <polyline points="38,60 125,62 212,58 300,64 387,70 430,66" fill="none" stroke="#60a5fa" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>',
    '            <circle cx="430" cy="54" r="3.5" fill="#facc15"/><circle cx="430" cy="66" r="3.5" fill="#60a5fa"/>',
    '            <text x="436" y="58" fill="#facc15" font-size="11" font-weight="700" font-family="Exo 2,sans-serif">Vita 55%</text>',
    '            <text x="436" y="70" fill="#60a5fa" font-size="11" font-weight="700" font-family="Exo 2,sans-serif">NaVi 45%</text>',
    '          </svg>',
    '        </div>',
    '      </div>',

    /* Card 3 — Dota2 OG vs Spirit */
    '      <div class="skb-mob-hcard">',
    '        <div class="skb-mob-hcard-bg"><img src="img_M/image (1).jpg" alt=""/></div>',
    '        <div class="skb-mob-hcard-content">',
    '          <div class="skb-mob-hcard-label">Dota 2 — The International 2025 · Final</div>',
    '          <div class="skb-mob-hcard-teams">',
    '            <div class="skb-mob-hcard-team"><img src="img_M/OG_Logo.png" alt="OG"/><div class="skb-mob-hcard-odd">2.60</div></div>',
    '            <div class="skb-mob-hcard-vs">VS</div>',
    '            <div class="skb-mob-hcard-team"><img src="img_M/spirit.png" alt="Spirit" style="filter:invert(1)"/><div class="skb-mob-hcard-odd">1.45</div></div>',
    '          </div>',
    '          <svg class="skb-mob-hcard-graph" viewBox="0 0 500 120" preserveAspectRatio="xMidYMid meet">',
    '            <defs>',
    '              <linearGradient id="hg3a" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4d82f5" stop-opacity="0.22"/><stop offset="100%" stop-color="#4d82f5" stop-opacity="0"/></linearGradient>',
    '              <linearGradient id="hg3b" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity="0"/><stop offset="100%" stop-color="#fff" stop-opacity="0.1"/></linearGradient>',
    '            </defs>',
    '            <line x1="38" y1="60" x2="430" y2="60" stroke="rgba(255,255,255,0.1)" stroke-width="1" stroke-dasharray="4,3"/>',
    '            <path d="M38,60 125,66 212,62 300,70 387,74 430,74 L430,108 L38,108 Z" fill="url(#hg3a)"/>',
    '            <path d="M38,60 125,54 212,58 300,50 387,46 430,46 L430,8 L38,8 Z" fill="url(#hg3b)"/>',
    '            <polyline points="38,60 125,66 212,62 300,70 387,74 430,74" fill="none" stroke="#4d82f5" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>',
    '            <polyline points="38,60 125,54 212,58 300,50 387,46 430,46" fill="none" stroke="#ffffff" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>',
    '            <circle cx="430" cy="74" r="3.5" fill="#4d82f5"/><circle cx="430" cy="46" r="3.5" fill="#fff"/>',
    '            <text x="436" y="78" fill="#4d82f5" font-size="11" font-weight="700" font-family="Exo 2,sans-serif">OG 38%</text>',
    '            <text x="436" y="50" fill="#fff" font-size="11" font-weight="700" font-family="Exo 2,sans-serif">Spirit 62%</text>',
    '          </svg>',
    '        </div>',
    '      </div>',

    /* Card 4 — LoL rematch */
    '      <div class="skb-mob-hcard">',
    '        <div class="skb-mob-hcard-bg"><img src="img_M/image.jpg" alt=""/></div>',
    '        <div class="skb-mob-hcard-content">',
    '          <div class="skb-mob-hcard-label">League of Legends — Worlds 2025 · Semi</div>',
    '          <div class="skb-mob-hcard-teams">',
    '            <div class="skb-mob-hcard-team"><img src="img_M/logoT1.png" alt="T1"/><div class="skb-mob-hcard-odd">1.90</div></div>',
    '            <div class="skb-mob-hcard-vs">VS</div>',
    '            <div class="skb-mob-hcard-team"><img src="img_M/logoKC.png" alt="KC"/><div class="skb-mob-hcard-odd">1.85</div></div>',
    '          </div>',
    '          <svg class="skb-mob-hcard-graph" viewBox="0 0 500 120" preserveAspectRatio="xMidYMid meet">',
    '            <defs>',
    '              <linearGradient id="hg4a" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ef4444" stop-opacity="0"/><stop offset="100%" stop-color="#ef4444" stop-opacity="0.25"/></linearGradient>',
    '              <linearGradient id="hg4b" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#38bdf8" stop-opacity="0.2"/><stop offset="100%" stop-color="#38bdf8" stop-opacity="0"/></linearGradient>',
    '            </defs>',
    '            <line x1="38" y1="60" x2="430" y2="60" stroke="rgba(255,255,255,0.1)" stroke-width="1" stroke-dasharray="4,3"/>',
    '            <path d="M38,60 125,56 212,52 300,58 387,54 430,58 L430,8 L38,8 Z" fill="url(#hg4a)"/>',
    '            <path d="M38,60 125,64 212,68 300,62 387,66 430,62 L430,108 L38,108 Z" fill="url(#hg4b)"/>',
    '            <polyline points="38,60 125,56 212,52 300,58 387,54 430,58" fill="none" stroke="#ef4444" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>',
    '            <polyline points="38,60 125,64 212,68 300,62 387,66 430,62" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>',
    '            <circle cx="430" cy="58" r="3.5" fill="#ef4444"/><circle cx="430" cy="62" r="3.5" fill="#38bdf8"/>',
    '            <text x="436" y="62" fill="#ef4444" font-size="11" font-weight="700" font-family="Exo 2,sans-serif">T1 52%</text>',
    '            <text x="436" y="74" fill="#38bdf8" font-size="11" font-weight="700" font-family="Exo 2,sans-serif">KC 48%</text>',
    '          </svg>',
    '        </div>',
    '      </div>',

    /* Card 5 — CS2 group stage */
    '      <div class="skb-mob-hcard">',
    '        <div class="skb-mob-hcard-bg contain"><img src="img_M/Counter_Strike_2_Logo.png" alt=""/></div>',
    '        <div class="skb-mob-hcard-content">',
    '          <div class="skb-mob-hcard-label">CS2 — ESL Pro League S21 · Semi</div>',
    '          <div class="skb-mob-hcard-teams">',
    '            <div class="skb-mob-hcard-team"><img src="img_M/logovita.png" alt="Vitality"/><div class="skb-mob-hcard-odd">1.60</div></div>',
    '            <div class="skb-mob-hcard-vs">VS</div>',
    '            <div class="skb-mob-hcard-team"><img src="img_M/NAVI_Logo_2020.png" alt="NaVi" style="mix-blend-mode:multiply"/><div class="skb-mob-hcard-odd">2.40</div></div>',
    '          </div>',
    '          <svg class="skb-mob-hcard-graph" viewBox="0 0 500 120" preserveAspectRatio="xMidYMid meet">',
    '            <defs>',
    '              <linearGradient id="hg5a" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#facc15" stop-opacity="0"/><stop offset="100%" stop-color="#facc15" stop-opacity="0.22"/></linearGradient>',
    '              <linearGradient id="hg5b" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#60a5fa" stop-opacity="0.18"/><stop offset="100%" stop-color="#60a5fa" stop-opacity="0"/></linearGradient>',
    '            </defs>',
    '            <line x1="38" y1="60" x2="430" y2="60" stroke="rgba(255,255,255,0.1)" stroke-width="1" stroke-dasharray="4,3"/>',
    '            <path d="M38,60 125,54 212,48 300,44 387,40 430,38 L430,108 L38,108 Z" fill="url(#hg5a)"/>',
    '            <path d="M38,60 125,66 212,72 300,76 387,80 430,82 L430,8 L38,8 Z" fill="url(#hg5b)"/>',
    '            <polyline points="38,60 125,54 212,48 300,44 387,40 430,38" fill="none" stroke="#facc15" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>',
    '            <polyline points="38,60 125,66 212,72 300,76 387,80 430,82" fill="none" stroke="#60a5fa" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>',
    '            <circle cx="430" cy="38" r="3.5" fill="#facc15"/><circle cx="430" cy="82" r="3.5" fill="#60a5fa"/>',
    '            <text x="436" y="42" fill="#facc15" font-size="11" font-weight="700" font-family="Exo 2,sans-serif">Vita 63%</text>',
    '            <text x="436" y="86" fill="#60a5fa" font-size="11" font-weight="700" font-family="Exo 2,sans-serif">NaVi 37%</text>',
    '          </svg>',
    '        </div>',
    '      </div>',

    /* Card 6 — Dota2 group stage */
    '      <div class="skb-mob-hcard">',
    '        <div class="skb-mob-hcard-bg"><img src="img_M/image (1).jpg" alt=""/></div>',
    '        <div class="skb-mob-hcard-content">',
    '          <div class="skb-mob-hcard-label">Dota 2 — The International 2025 · Semi</div>',
    '          <div class="skb-mob-hcard-teams">',
    '            <div class="skb-mob-hcard-team"><img src="img_M/OG_Logo.png" alt="OG"/><div class="skb-mob-hcard-odd">2.10</div></div>',
    '            <div class="skb-mob-hcard-vs">VS</div>',
    '            <div class="skb-mob-hcard-team"><img src="img_M/spirit.png" alt="Spirit" style="filter:invert(1)"/><div class="skb-mob-hcard-odd">1.70</div></div>',
    '          </div>',
    '          <svg class="skb-mob-hcard-graph" viewBox="0 0 500 120" preserveAspectRatio="xMidYMid meet">',
    '            <defs>',
    '              <linearGradient id="hg6a" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#4d82f5" stop-opacity="0.22"/><stop offset="100%" stop-color="#4d82f5" stop-opacity="0"/></linearGradient>',
    '              <linearGradient id="hg6b" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity="0"/><stop offset="100%" stop-color="#fff" stop-opacity="0.1"/></linearGradient>',
    '            </defs>',
    '            <line x1="38" y1="60" x2="430" y2="60" stroke="rgba(255,255,255,0.1)" stroke-width="1" stroke-dasharray="4,3"/>',
    '            <path d="M38,60 125,64 212,68 300,65 387,70 430,68 L430,108 L38,108 Z" fill="url(#hg6a)"/>',
    '            <path d="M38,60 125,56 212,52 300,55 387,50 430,52 L430,8 L38,8 Z" fill="url(#hg6b)"/>',
    '            <polyline points="38,60 125,64 212,68 300,65 387,70 430,68" fill="none" stroke="#4d82f5" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>',
    '            <polyline points="38,60 125,56 212,52 300,55 387,50 430,52" fill="none" stroke="#ffffff" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>',
    '            <circle cx="430" cy="68" r="3.5" fill="#4d82f5"/><circle cx="430" cy="52" r="3.5" fill="#fff"/>',
    '            <text x="436" y="72" fill="#4d82f5" font-size="11" font-weight="700" font-family="Exo 2,sans-serif">OG 44%</text>',
    '            <text x="436" y="56" fill="#fff" font-size="11" font-weight="700" font-family="Exo 2,sans-serif">Spirit 56%</text>',
    '          </svg>',
    '        </div>',
    '      </div>',

    '    </div>',  /* end hot track */
    '  </div>',   /* end hot */

    /* ── Top Players ── */
    '  <div class="skb-mob-players">',
    '    <div class="skb-mob-players-title">Top Players</div>',
    '    <div class="skb-mob-players-track">',

    /* 1 — ZywOo */
    '      <div class="tp-pc">',
    '        <div class="tp-pc-bg" style="background:linear-gradient(175deg,#1a1400 0%,#2a2000 60%,#3a2e00 100%);"></div>',
    '        <div class="tp-pc-team-badge" style="background:rgba(250,204,21,0.2);border:1px solid rgba(250,204,21,0.5);color:#facc15;">Vitality</div>',
    '        <div class="tp-pc-body">',
    '          <div class="tp-pc-name">ZywOo</div>',
    '          <svg class="tp-pc-avatar" viewBox="0 0 80 88" fill="none">',
    '            <path d="M22 22 C22 17 27 14 32 13 L40 11 L48 13 C53 14 58 17 58 22 L63 42 L54 44 L54 76 L26 76 L26 44 L17 42 Z" fill="#facc15" stroke="#d4a000" stroke-width="1.5"/>',
    '            <path d="M26 13 L26 76 M54 13 L54 76" stroke="#111" stroke-width="4" opacity="0.4"/>',
    '            <path d="M34 11 Q40 14 46 11" stroke="#d4a000" stroke-width="2" fill="none"/>',
    '            <text x="40" y="60" text-anchor="middle" fill="#111" font-size="9" font-weight="900" font-family="Arial">VITALITY</text>',
    '            <path d="M22 22 L17 42 L26 44 L26 30 Z" fill="#facc15" stroke="#d4a000" stroke-width="1"/>',
    '            <path d="M58 22 L63 42 L54 44 L54 30 Z" fill="#facc15" stroke="#d4a000" stroke-width="1"/>',
    '          </svg>',
    '          <div class="tp-pc-role">Star Rifler</div>',
    '        </div>',
    '        <div class="tp-pc-footer" style="background:linear-gradient(90deg,#d4a000,#facc15);color:#111;">',
    '          <div class="tp-pc-footer-label">Highest Rating</div>',
    '          <div class="tp-pc-odd">1.70</div>',
    '        </div>',
    '      </div>',

    /* 2 — s1mple */
    '      <div class="tp-pc">',
    '        <div class="tp-pc-bg" style="background:linear-gradient(175deg,#09090f 0%,#0f0c1e 60%,#1a1040 100%);"></div>',
    '        <div class="tp-pc-team-badge" style="background:rgba(245,197,24,0.2);border:1px solid rgba(245,197,24,0.5);color:#f5c518;">NaVi</div>',
    '        <div class="tp-pc-body">',
    '          <div class="tp-pc-name">s1mple</div>',
    '          <svg class="tp-pc-avatar" viewBox="0 0 80 88" fill="none">',
    '            <path d="M22 22 C22 17 27 14 32 13 L40 11 L48 13 C53 14 58 17 58 22 L63 42 L54 44 L54 76 L26 76 L26 44 L17 42 Z" fill="#0a0a0a" stroke="#f5c518" stroke-width="1.5"/>',
    '            <path d="M36 13 L36 76 M44 13 L44 76" stroke="#f5c518" stroke-width="3" opacity="0.7"/>',
    '            <path d="M34 11 Q40 14 46 11" stroke="#f5c518" stroke-width="2" fill="none"/>',
    '            <text x="40" y="60" text-anchor="middle" fill="#f5c518" font-size="11" font-weight="900" font-family="Arial">NaVi</text>',
    '            <path d="M22 22 L17 42 L26 44 L26 30 Z" fill="#111" stroke="#f5c518" stroke-width="1"/>',
    '            <path d="M58 22 L63 42 L54 44 L54 30 Z" fill="#111" stroke="#f5c518" stroke-width="1"/>',
    '          </svg>',
    '          <div class="tp-pc-role">AWPer</div>',
    '        </div>',
    '        <div class="tp-pc-footer" style="background:linear-gradient(90deg,#b8960a,#f5c518);color:#111;">',
    '          <div class="tp-pc-footer-label">Highest Rating</div>',
    '          <div class="tp-pc-odd">2.20</div>',
    '        </div>',
    '      </div>',

    /* 3 — Faker */
    '      <div class="tp-pc">',
    '        <div class="tp-pc-bg" style="background:linear-gradient(175deg,#1a0000 0%,#2e0a0a 60%,#3d1010 100%);"></div>',
    '        <div class="tp-pc-team-badge" style="background:rgba(239,68,68,0.2);border:1px solid rgba(239,68,68,0.5);color:#f87171;">T1</div>',
    '        <div class="tp-pc-body">',
    '          <div class="tp-pc-name">Faker</div>',
    '          <svg class="tp-pc-avatar" viewBox="0 0 80 88" fill="none">',
    '            <path d="M22 22 C22 17 27 14 32 13 L40 11 L48 13 C53 14 58 17 58 22 L63 42 L54 44 L54 76 L26 76 L26 44 L17 42 Z" fill="#cc0000" stroke="#990000" stroke-width="1.5"/>',
    '            <path d="M20 30 L60 30 L60 50 L20 50 Z" fill="#fff" opacity="0.08"/>',
    '            <path d="M34 11 Q40 9 46 11" stroke="#fff" stroke-width="2" fill="none"/>',
    '            <text x="40" y="60" text-anchor="middle" fill="#fff" font-size="11" font-weight="900" font-family="Arial">T1</text>',
    '            <path d="M22 22 L17 42 L26 44 L26 30 Z" fill="#cc0000" stroke="#990000" stroke-width="1"/>',
    '            <path d="M58 22 L63 42 L54 44 L54 30 Z" fill="#cc0000" stroke="#990000" stroke-width="1"/>',
    '          </svg>',
    '          <div class="tp-pc-role">Mid Lane</div>',
    '        </div>',
    '        <div class="tp-pc-footer" style="background:linear-gradient(90deg,#990000,#ef4444);color:#fff;">',
    '          <div class="tp-pc-footer-label">Highest Rating</div>',
    '          <div class="tp-pc-odd">1.55</div>',
    '        </div>',
    '      </div>',

    /* 4 — Caps */
    '      <div class="tp-pc">',
    '        <div class="tp-pc-bg" style="background:linear-gradient(175deg,#0e0e0e 0%,#1a1a1a 60%,#252525 100%);"></div>',
    '        <div class="tp-pc-team-badge" style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.35);color:#fff;">G2</div>',
    '        <div class="tp-pc-body">',
    '          <div class="tp-pc-name">Caps</div>',
    '          <svg class="tp-pc-avatar" viewBox="0 0 80 88" fill="none">',
    '            <path d="M22 22 C22 17 27 14 32 13 L40 11 L48 13 C53 14 58 17 58 22 L63 42 L54 44 L54 76 L26 76 L26 44 L17 42 Z" fill="#1a1a1a" stroke="#e53935" stroke-width="1.5"/>',
    '            <path d="M22 22 L58 55" stroke="#e53935" stroke-width="7" opacity="0.5" stroke-linecap="round"/>',
    '            <path d="M34 11 Q40 9 46 11" stroke="#e53935" stroke-width="2" fill="none"/>',
    '            <text x="40" y="60" text-anchor="middle" fill="#fff" font-size="11" font-weight="900" font-family="Arial">G2</text>',
    '            <path d="M22 22 L17 42 L26 44 L26 30 Z" fill="#1a1a1a" stroke="#e53935" stroke-width="1"/>',
    '            <path d="M58 22 L63 42 L54 44 L54 30 Z" fill="#1a1a1a" stroke="#e53935" stroke-width="1"/>',
    '          </svg>',
    '          <div class="tp-pc-role">Mid Lane</div>',
    '        </div>',
    '        <div class="tp-pc-footer" style="background:linear-gradient(90deg,#111,#333);color:#fff;">',
    '          <div class="tp-pc-footer-label">Highest Rating</div>',
    '          <div class="tp-pc-odd">2.80</div>',
    '        </div>',
    '      </div>',

    /* 5 — Miracle- */
    '      <div class="tp-pc">',
    '        <div class="tp-pc-bg" style="background:linear-gradient(175deg,#0a0a0a 0%,#141414 60%,#1e1e1e 100%);"></div>',
    '        <div class="tp-pc-team-badge" style="background:rgba(249,115,22,0.2);border:1px solid rgba(249,115,22,0.5);color:#fb923c;">OG</div>',
    '        <div class="tp-pc-body">',
    '          <div class="tp-pc-name">Miracle-</div>',
    '          <svg class="tp-pc-avatar" viewBox="0 0 80 88" fill="none">',
    '            <path d="M22 22 C22 17 27 14 32 13 L40 11 L48 13 C53 14 58 17 58 22 L63 42 L54 44 L54 76 L26 76 L26 44 L17 42 Z" fill="#111" stroke="#f97316" stroke-width="1.5"/>',
    '            <path d="M26 13 L26 76" stroke="#fff" stroke-width="5" opacity="0.15"/>',
    '            <path d="M54 13 L54 76" stroke="#fff" stroke-width="5" opacity="0.15"/>',
    '            <path d="M34 11 Q40 9 46 11" stroke="#f97316" stroke-width="2" fill="none"/>',
    '            <text x="40" y="60" text-anchor="middle" fill="#f97316" font-size="11" font-weight="900" font-family="Arial">OG</text>',
    '            <path d="M22 22 L17 42 L26 44 L26 30 Z" fill="#111" stroke="#f97316" stroke-width="1"/>',
    '            <path d="M58 22 L63 42 L54 44 L54 30 Z" fill="#111" stroke="#f97316" stroke-width="1"/>',
    '          </svg>',
    '          <div class="tp-pc-role">Carry</div>',
    '        </div>',
    '        <div class="tp-pc-footer" style="background:linear-gradient(90deg,#c2410c,#f97316);color:#fff;">',
    '          <div class="tp-pc-footer-label">Highest Rating</div>',
    '          <div class="tp-pc-odd">2.10</div>',
    '        </div>',
    '      </div>',

    /* 6 — TORONTOTOKYO */
    '      <div class="tp-pc">',
    '        <div class="tp-pc-bg" style="background:linear-gradient(175deg,#060a18 0%,#0a1030 60%,#0e1540 100%);"></div>',
    '        <div class="tp-pc-team-badge" style="background:rgba(56,130,246,0.2);border:1px solid rgba(56,130,246,0.5);color:#60a5fa;">Spirit</div>',
    '        <div class="tp-pc-body">',
    '          <div class="tp-pc-name">TORONTO<br>TOKYO</div>',
    '          <svg class="tp-pc-avatar" viewBox="0 0 80 88" fill="none">',
    '            <path d="M22 22 C22 17 27 14 32 13 L40 11 L48 13 C53 14 58 17 58 22 L63 42 L54 44 L54 76 L26 76 L26 44 L17 42 Z" fill="#0d1a3a" stroke="#3882f6" stroke-width="1.5"/>',
    '            <path d="M22 22 L58 55" stroke="#3882f6" stroke-width="8" opacity="0.5" stroke-linecap="round"/>',
    '            <path d="M22 22 L58 55" stroke="#60a5fa" stroke-width="3" opacity="0.7" stroke-linecap="round"/>',
    '            <path d="M34 11 Q40 9 46 11" stroke="#3882f6" stroke-width="2" fill="none"/>',
    '            <text x="40" y="62" text-anchor="middle" fill="#93c5fd" font-size="9" font-weight="900" font-family="Arial">SPIRIT</text>',
    '            <path d="M22 22 L17 42 L26 44 L26 30 Z" fill="#0d1a3a" stroke="#3882f6" stroke-width="1"/>',
    '            <path d="M58 22 L63 42 L54 44 L54 30 Z" fill="#0d1a3a" stroke="#3882f6" stroke-width="1"/>',
    '          </svg>',
    '          <div class="tp-pc-role">Carry</div>',
    '        </div>',
    '        <div class="tp-pc-footer" style="background:linear-gradient(90deg,#1d4ed8,#3882f6);color:#fff;">',
    '          <div class="tp-pc-footer-label">Highest Rating</div>',
    '          <div class="tp-pc-odd">3.20</div>',
    '        </div>',
    '      </div>',

    '    </div>',  /* end players track */
    '  </div>',   /* end players */

    /* ── Top Combinés ── */
    '  <div class="skb-mob-tc">',
    '    <div class="skb-mob-tc-title">Top Combinés</div>',
    '    <div class="skb-mob-tc-track">',

    /* #1 */
    '      <div class="tc-card">',
    '        <div class="tc-rank"><img src="img_M/logo lol.png" alt="LoL"/></div>',
    '        <div class="tc-bets">',
    '          <div class="tc-bet"><span class="tc-game">🎮 LoL · Worlds</span><span class="tc-time">Auj. 20:00</span><div class="tc-pick">T1 à gagner <span class="tc-odd">1,65</span></div></div>',
    '          <div class="tc-bet"><span class="tc-game">🔫 CS2 · ESL Pro</span><span class="tc-time">Auj. 21:00</span><div class="tc-pick">NaVi à gagner <span class="tc-odd">1,85</span></div></div>',
    '          <div class="tc-bet"><span class="tc-game">⚡ Val · VCT</span><span class="tc-time">Auj. 22:00</span><div class="tc-pick">Fnatic à gagner <span class="tc-odd">2,10</span></div></div>',
    '        </div>',
    '        <div class="tc-footer"><span class="tc-count">1,247 bets placed</span><span class="tc-combined">6,40</span></div>',
    '      </div>',

    /* #2 */
    '      <div class="tc-card">',
    '        <div class="tc-rank"><img src="img_M/logo dota2.png" alt="Dota2"/></div>',
    '        <div class="tc-bets">',
    '          <div class="tc-bet"><span class="tc-game">🐉 Dota 2 · TI</span><span class="tc-time">Auj. 19:00</span><div class="tc-pick">Spirit à gagner <span class="tc-odd">1,45</span></div></div>',
    '          <div class="tc-bet"><span class="tc-game">🚀 RL · RLCS</span><span class="tc-time">Auj. 20:30</span><div class="tc-pick">KC à gagner <span class="tc-odd">1,70</span></div></div>',
    '          <div class="tc-bet"><span class="tc-game">🎮 LoL · LCK</span><span class="tc-time">Auj. 21:30</span><div class="tc-pick">Gen.G à gagner <span class="tc-odd">2,30</span></div></div>',
    '        </div>',
    '        <div class="tc-footer"><span class="tc-count">984 bets placed</span><span class="tc-combined">5,67</span></div>',
    '      </div>',

    /* #3 */
    '      <div class="tc-card">',
    '        <div class="tc-rank"><img src="img_M/logocs2.png" alt="CS2"/></div>',
    '        <div class="tc-bets">',
    '          <div class="tc-bet"><span class="tc-game">🔫 CS2 · BLAST</span><span class="tc-time">Auj. 18:00</span><div class="tc-pick">Vitality à gagner <span class="tc-odd">1,55</span></div></div>',
    '          <div class="tc-bet"><span class="tc-game">⚡ Val · VCT</span><span class="tc-time">Auj. 19:30</span><div class="tc-pick">Paper Rex à gagner <span class="tc-odd">2,40</span></div></div>',
    '          <div class="tc-bet"><span class="tc-game">🎮 LoL · LPL</span><span class="tc-time">Auj. 20:00</span><div class="tc-pick">BLG à gagner <span class="tc-odd">3,10</span></div></div>',
    '        </div>',
    '        <div class="tc-footer"><span class="tc-count">762 bets placed</span><span class="tc-combined">11,56</span></div>',
    '      </div>',

    /* #4 */
    '      <div class="tc-card">',
    '        <div class="tc-rank"><img src="img_M/logo dota2.png" alt="Dota2"/></div>',
    '        <div class="tc-bets">',
    '          <div class="tc-bet"><span class="tc-game">🎮 LoL · Worlds</span><span class="tc-time">Auj. 17:00</span><div class="tc-pick">T1 +1,5 maps <span class="tc-odd">1,30</span></div></div>',
    '          <div class="tc-bet"><span class="tc-game">🚀 RL · RLCS</span><span class="tc-time">Auj. 20:00</span><div class="tc-pick">G2 à gagner <span class="tc-odd">2,20</span></div></div>',
    '          <div class="tc-bet"><span class="tc-game">🐉 Dota 2 · TI</span><span class="tc-time">Auj. 21:00</span><div class="tc-pick">EG à gagner <span class="tc-odd">1,90</span></div></div>',
    '        </div>',
    '        <div class="tc-footer"><span class="tc-count">641 bets placed</span><span class="tc-combined">5,43</span></div>',
    '      </div>',

    /* #5 */
    '      <div class="tc-card">',
    '        <div class="tc-rank"><img src="img_M/logocs2.png" alt="CS2"/></div>',
    '        <div class="tc-bets">',
    '          <div class="tc-bet"><span class="tc-game">🔫 CS2 · IEM</span><span class="tc-time">Auj. 16:30</span><div class="tc-pick">G2 à gagner <span class="tc-odd">1,60</span></div></div>',
    '          <div class="tc-bet"><span class="tc-game">⚡ Val · VCT</span><span class="tc-time">Auj. 18:00</span><div class="tc-pick">Sentinels à gagner <span class="tc-odd">2,60</span></div></div>',
    '          <div class="tc-bet"><span class="tc-game">🎮 LoL · LCK</span><span class="tc-time">Auj. 20:00</span><div class="tc-pick">DRX à gagner <span class="tc-odd">1,78</span></div></div>',
    '        </div>',
    '        <div class="tc-footer"><span class="tc-count">528 bets placed</span><span class="tc-combined">7,41</span></div>',
    '      </div>',

    /* #6 */
    '      <div class="tc-card">',
    '        <div class="tc-rank"><img src="img_M/logo lol.png" alt="LoL"/></div>',
    '        <div class="tc-bets">',
    '          <div class="tc-bet"><span class="tc-game">🐉 Dota 2 · ESL</span><span class="tc-time">Auj. 15:00</span><div class="tc-pick">Liquid à gagner <span class="tc-odd">1,40</span></div></div>',
    '          <div class="tc-bet"><span class="tc-game">🚀 RL · RLCS</span><span class="tc-time">Auj. 17:30</span><div class="tc-pick">NRG à gagner <span class="tc-odd">1,55</span></div></div>',
    '          <div class="tc-bet"><span class="tc-game">🔫 CS2 · ESL Pro</span><span class="tc-time">Auj. 19:00</span><div class="tc-pick">FaZe à gagner <span class="tc-odd">1,95</span></div></div>',
    '        </div>',
    '        <div class="tc-footer"><span class="tc-count">415 bets placed</span><span class="tc-combined">4,22</span></div>',
    '      </div>',

    /* #7 */
    '      <div class="tc-card">',
    '        <div class="tc-rank"><img src="img_M/logo lol.png" alt="LoL"/></div>',
    '        <div class="tc-bets">',
    '          <div class="tc-bet"><span class="tc-game">🎮 LoL · LEC</span><span class="tc-time">Auj. 18:00</span><div class="tc-pick">G2 à gagner <span class="tc-odd">1,30</span></div></div>',
    '          <div class="tc-bet"><span class="tc-game">⚡ Val · VCT</span><span class="tc-time">Auj. 20:00</span><div class="tc-pick">KRÜ à gagner <span class="tc-odd">1,80</span></div></div>',
    '          <div class="tc-bet"><span class="tc-game">🎮 LoL · LPL</span><span class="tc-time">Auj. 21:00</span><div class="tc-pick">JDG à gagner <span class="tc-odd">3,50</span></div></div>',
    '        </div>',
    '        <div class="tc-footer"><span class="tc-count">387 bets placed</span><span class="tc-combined">8,19</span></div>',
    '      </div>',

    /* #8 */
    '      <div class="tc-card">',
    '        <div class="tc-rank"><img src="img_M/logocs2.png" alt="CS2"/></div>',
    '        <div class="tc-bets">',
    '          <div class="tc-bet"><span class="tc-game">🔫 CS2 · BLAST</span><span class="tc-time">Auj. 17:00</span><div class="tc-pick">Heroic à gagner <span class="tc-odd">2,15</span></div></div>',
    '          <div class="tc-bet"><span class="tc-game">🐉 Dota 2 · TI</span><span class="tc-time">Auj. 19:00</span><div class="tc-pick">PSG.LGD à gagner <span class="tc-odd">2,40</span></div></div>',
    '          <div class="tc-bet"><span class="tc-game">🚀 RL · RLCS</span><span class="tc-time">Auj. 21:00</span><div class="tc-pick">Moist à gagner <span class="tc-odd">1,95</span></div></div>',
    '        </div>',
    '        <div class="tc-footer"><span class="tc-count">302 bets placed</span><span class="tc-combined">10,04</span></div>',
    '      </div>',

    /* #9 */
    '      <div class="tc-card">',
    '        <div class="tc-rank"><img src="img_M/logo dota2.png" alt="Dota2"/></div>',
    '        <div class="tc-bets">',
    '          <div class="tc-bet"><span class="tc-game">⚡ Val · VCT</span><span class="tc-time">Auj. 16:00</span><div class="tc-pick">Loud à gagner <span class="tc-odd">1,48</span></div></div>',
    '          <div class="tc-bet"><span class="tc-game">🎮 LoL · Worlds</span><span class="tc-time">Auj. 18:30</span><div class="tc-pick">Cloud9 à gagner <span class="tc-odd">2,00</span></div></div>',
    '          <div class="tc-bet"><span class="tc-game">🔫 CS2 · IEM</span><span class="tc-time">Auj. 20:30</span><div class="tc-pick">Astralis à gagner <span class="tc-odd">2,35</span></div></div>',
    '        </div>',
    '        <div class="tc-footer"><span class="tc-count">278 bets placed</span><span class="tc-combined">6,95</span></div>',
    '      </div>',

    /* #10 */
    '      <div class="tc-card">',
    '        <div class="tc-rank"><img src="img_M/logocs2.png" alt="CS2"/></div>',
    '        <div class="tc-bets">',
    '          <div class="tc-bet"><span class="tc-game">🚀 RL · RLCS</span><span class="tc-time">Auj. 15:30</span><div class="tc-pick">Faze à gagner <span class="tc-odd">3,20</span></div></div>',
    '          <div class="tc-bet"><span class="tc-game">🐉 Dota 2 · ESL</span><span class="tc-time">Auj. 17:00</span><div class="tc-pick">Gaimin à gagner <span class="tc-odd">1,45</span></div></div>',
    '          <div class="tc-bet"><span class="tc-game">⚡ Val · VCT</span><span class="tc-time">Auj. 19:30</span><div class="tc-pick">100T à gagner <span class="tc-odd">1,92</span></div></div>',
    '        </div>',
    '        <div class="tc-footer"><span class="tc-count">195 bets placed</span><span class="tc-combined">8,91</span></div>',
    '      </div>',

    '    </div>',  /* end tc track */
    '  </div>',   /* end tc */
    /* ── Game selector + match list ── */
    '  <div class="skb-mob-games">',
    '    <div class="skb-mob-filter">',
    '      <button class="skb-mob-filter-btn active" data-game="all">All</button>',
    '      <button class="skb-mob-filter-btn" data-game="cs2">CS2</button>',
    '      <button class="skb-mob-filter-btn" data-game="dota2">Dota 2</button>',
    '      <button class="skb-mob-filter-btn" data-game="lol">LoL</button>',
    '    </div>',

    /* Match 1 — LoL T1 vs KCorp */
    '    <div class="skb-mob-match-card" data-game="lol">',
    '      <div class="skb-mob-match-card-bg"><img src="img_M/image.jpg" alt=""/></div>',
    '      <div class="skb-mob-match-card-body">',
    '        <div class="skb-mob-match-card-label">LoL · Worlds 2025 — Final</div>',
    '        <div class="skb-mob-match-card-row">',
    '          <div class="skb-mob-match-card-team"><img src="img_M/logoT1.png" alt="T1"/><span class="skb-mob-match-card-name">T1</span></div>',
    '          <span class="skb-mob-match-card-vs">VS</span>',
    '          <div class="skb-mob-match-card-team"><img src="img_M/logoKC.png" alt="KC"/><span class="skb-mob-match-card-name">KCorp</span></div>',
    '          <div style="display:flex;flex-direction:column;gap:4px;align-items:flex-end">',
    '            <span class="skb-mob-match-card-odd">1.65</span>',
    '            <span class="skb-mob-match-card-odd">2.30</span>',
    '          </div>',
    '        </div>',
    '      </div>',
    '    </div>',

    /* Match 2 — CS2 Vitality vs NaVi */
    '    <div class="skb-mob-match-card" data-game="cs2">',
    '      <div class="skb-mob-match-card-bg contain-bg"><img src="img_M/Counter_Strike_2_Logo.png" alt=""/></div>',
    '      <div class="skb-mob-match-card-body">',
    '        <div class="skb-mob-match-card-label">CS2 · ESL Pro League S21 — Final</div>',
    '        <div class="skb-mob-match-card-row">',
    '          <div class="skb-mob-match-card-team"><img src="img_M/logovita.png" alt="Vitality"/><span class="skb-mob-match-card-name">Vitality</span></div>',
    '          <span class="skb-mob-match-card-vs">VS</span>',
    '          <div class="skb-mob-match-card-team"><img src="img_M/NAVI_Logo_2020.png" alt="NaVi" style="mix-blend-mode:multiply"/><span class="skb-mob-match-card-name">NaVi</span></div>',
    '          <div style="display:flex;flex-direction:column;gap:4px;align-items:flex-end">',
    '            <span class="skb-mob-match-card-odd">1.75</span>',
    '            <span class="skb-mob-match-card-odd">2.05</span>',
    '          </div>',
    '        </div>',
    '      </div>',
    '    </div>',

    /* Match 3 — Dota2 OG vs Spirit */
    '    <div class="skb-mob-match-card" data-game="dota2">',
    '      <div class="skb-mob-match-card-bg"><img src="img_M/image (1).jpg" alt=""/></div>',
    '      <div class="skb-mob-match-card-body">',
    '        <div class="skb-mob-match-card-label">Dota 2 · The International 2025 — Final</div>',
    '        <div class="skb-mob-match-card-row">',
    '          <div class="skb-mob-match-card-team"><img src="img_M/OG_Logo.png" alt="OG"/><span class="skb-mob-match-card-name">OG</span></div>',
    '          <span class="skb-mob-match-card-vs">VS</span>',
    '          <div class="skb-mob-match-card-team"><img src="img_M/spirit.png" alt="Spirit" style="filter:invert(1)"/><span class="skb-mob-match-card-name">Spirit</span></div>',
    '          <div style="display:flex;flex-direction:column;gap:4px;align-items:flex-end">',
    '            <span class="skb-mob-match-card-odd">2.60</span>',
    '            <span class="skb-mob-match-card-odd">1.45</span>',
    '          </div>',
    '        </div>',
    '      </div>',
    '    </div>',

    /* Match 4 — LoL rematch */
    '    <div class="skb-mob-match-card" data-game="lol">',
    '      <div class="skb-mob-match-card-bg"><img src="img_M/image.jpg" alt=""/></div>',
    '      <div class="skb-mob-match-card-body">',
    '        <div class="skb-mob-match-card-label">LoL · Worlds 2025 — Semi-Final</div>',
    '        <div class="skb-mob-match-card-row">',
    '          <div class="skb-mob-match-card-team"><img src="img_M/logoT1.png" alt="T1"/><span class="skb-mob-match-card-name">T1</span></div>',
    '          <span class="skb-mob-match-card-vs">VS</span>',
    '          <div class="skb-mob-match-card-team"><img src="img_M/logoKC.png" alt="KC"/><span class="skb-mob-match-card-name">KCorp</span></div>',
    '          <div style="display:flex;flex-direction:column;gap:4px;align-items:flex-end">',
    '            <span class="skb-mob-match-card-odd">1.90</span>',
    '            <span class="skb-mob-match-card-odd">1.85</span>',
    '          </div>',
    '        </div>',
    '      </div>',
    '    </div>',

    /* Match 5 — CS2 group stage */
    '    <div class="skb-mob-match-card" data-game="cs2">',
    '      <div class="skb-mob-match-card-bg contain-bg"><img src="img_M/Counter_Strike_2_Logo.png" alt=""/></div>',
    '      <div class="skb-mob-match-card-body">',
    '        <div class="skb-mob-match-card-label">CS2 · ESL Pro League S21 — Semi-Final</div>',
    '        <div class="skb-mob-match-card-row">',
    '          <div class="skb-mob-match-card-team"><img src="img_M/logovita.png" alt="Vitality"/><span class="skb-mob-match-card-name">Vitality</span></div>',
    '          <span class="skb-mob-match-card-vs">VS</span>',
    '          <div class="skb-mob-match-card-team"><img src="img_M/NAVI_Logo_2020.png" alt="NaVi" style="mix-blend-mode:multiply"/><span class="skb-mob-match-card-name">NaVi</span></div>',
    '          <div style="display:flex;flex-direction:column;gap:4px;align-items:flex-end">',
    '            <span class="skb-mob-match-card-odd">1.60</span>',
    '            <span class="skb-mob-match-card-odd">2.40</span>',
    '          </div>',
    '        </div>',
    '      </div>',
    '    </div>',

    /* Match 6 — Dota2 group stage */
    '    <div class="skb-mob-match-card" data-game="dota2">',
    '      <div class="skb-mob-match-card-bg"><img src="img_M/image (1).jpg" alt=""/></div>',
    '      <div class="skb-mob-match-card-body">',
    '        <div class="skb-mob-match-card-label">Dota 2 · The International 2025 — Semi-Final</div>',
    '        <div class="skb-mob-match-card-row">',
    '          <div class="skb-mob-match-card-team"><img src="img_M/OG_Logo.png" alt="OG"/><span class="skb-mob-match-card-name">OG</span></div>',
    '          <span class="skb-mob-match-card-vs">VS</span>',
    '          <div class="skb-mob-match-card-team"><img src="img_M/spirit.png" alt="Spirit" style="filter:invert(1)"/><span class="skb-mob-match-card-name">Spirit</span></div>',
    '          <div style="display:flex;flex-direction:column;gap:4px;align-items:flex-end">',
    '            <span class="skb-mob-match-card-odd">2.10</span>',
    '            <span class="skb-mob-match-card-odd">1.70</span>',
    '          </div>',
    '        </div>',
    '      </div>',
    '    </div>',

    /* Match 7 — LoL group stage */
    '    <div class="skb-mob-match-card" data-game="lol">',
    '      <div class="skb-mob-match-card-bg"><img src="img_M/image.jpg" alt=""/></div>',
    '      <div class="skb-mob-match-card-body">',
    '        <div class="skb-mob-match-card-label">LoL · Worlds 2025 — Group Stage</div>',
    '        <div class="skb-mob-match-card-row">',
    '          <div class="skb-mob-match-card-team"><img src="img_M/logoT1.png" alt="T1"/><span class="skb-mob-match-card-name">T1</span></div>',
    '          <span class="skb-mob-match-card-vs">VS</span>',
    '          <div class="skb-mob-match-card-team"><img src="img_M/logoKC.png" alt="KC"/><span class="skb-mob-match-card-name">KCorp</span></div>',
    '          <div style="display:flex;flex-direction:column;gap:4px;align-items:flex-end">',
    '            <span class="skb-mob-match-card-odd">1.55</span>',
    '            <span class="skb-mob-match-card-odd">2.55</span>',
    '          </div>',
    '        </div>',
    '      </div>',
    '    </div>',

    /* Match 8 — Dota2 group stage 2 */
    '    <div class="skb-mob-match-card" data-game="dota2">',
    '      <div class="skb-mob-match-card-bg"><img src="img_M/image (1).jpg" alt=""/></div>',
    '      <div class="skb-mob-match-card-body">',
    '        <div class="skb-mob-match-card-label">Dota 2 · The International 2025 — Group Stage</div>',
    '        <div class="skb-mob-match-card-row">',
    '          <div class="skb-mob-match-card-team"><img src="img_M/OG_Logo.png" alt="OG"/><span class="skb-mob-match-card-name">OG</span></div>',
    '          <span class="skb-mob-match-card-vs">VS</span>',
    '          <div class="skb-mob-match-card-team"><img src="img_M/spirit.png" alt="Spirit" style="filter:invert(1)"/><span class="skb-mob-match-card-name">Spirit</span></div>',
    '          <div style="display:flex;flex-direction:column;gap:4px;align-items:flex-end">',
    '            <span class="skb-mob-match-card-odd">3.00</span>',
    '            <span class="skb-mob-match-card-odd">1.35</span>',
    '          </div>',
    '        </div>',
    '      </div>',
    '    </div>',

    '  </div>',   /* end games */

    '    </div>',  /* end skb-mob-content */

    /* ── Esport view ── */
    '  <div class="skb-mob-esport-view">',
    '    <div class="skb-mob-header">',
    '      <img class="skb-mob-logo" src="img_M/SKB LOGO.png" alt="SkillBet" />',
    '      <div class="skb-mob-header-right">',
    '        <button class="skb-mob-wallet"><span class="skb-mob-wallet-amount">£1,247.50</span><span class="skb-mob-wallet-add">+</span></button>',
    '        <img class="skb-mob-avatar" src="img_M/head skin .png" alt="avatar"/>',
    '      </div>',
    '    </div>',
    '    <div class="skb-mob-tourn">',
    '      <div class="skb-mob-tourn-title">Current Tournaments</div>',
    '      <div class="skb-mob-tourn-list">',

    '        <div class="skb-mob-tourn-item">',
    '          <div class="skb-mob-tourn-badge" style="background:rgba(239,68,68,0.15);">',
    '            <img src="img_M/logo lol.png" alt="LoL"/>',
    '          </div>',
    '          <div class="skb-mob-tourn-info">',
    '            <div class="skb-mob-tourn-name">Worlds 2025 — Finals</div>',
    '            <div class="skb-mob-tourn-sub">League of Legends · Seoul</div>',
    '          </div>',
    '          <span class="skb-mob-tourn-live is-live">Live</span>',
    '        </div>',

    '        <div class="skb-mob-tourn-item">',
    '          <div class="skb-mob-tourn-badge" style="background:rgba(250,204,21,0.12);">',
    '            <img src="img_M/logocs2.png" alt="CS2"/>',
    '          </div>',
    '          <div class="skb-mob-tourn-info">',
    '            <div class="skb-mob-tourn-name">ESL Pro League S21</div>',
    '            <div class="skb-mob-tourn-sub">CS2 · Malta · Group Stage</div>',
    '          </div>',
    '          <span class="skb-mob-tourn-live is-live">Live</span>',
    '        </div>',

    '        <div class="skb-mob-tourn-item">',
    '          <div class="skb-mob-tourn-badge" style="background:rgba(77,130,245,0.15);">',
    '            <img src="img_M/logo dota2.png" alt="Dota2"/>',
    '          </div>',
    '          <div class="skb-mob-tourn-info">',
    '            <div class="skb-mob-tourn-name">The International 2025</div>',
    '            <div class="skb-mob-tourn-sub">Dota 2 · Copenhagen · Semi</div>',
    '          </div>',
    '          <span class="skb-mob-tourn-live upcoming">Demain</span>',
    '        </div>',

    '        <div class="skb-mob-tourn-item">',
    '          <div class="skb-mob-tourn-badge" style="background:rgba(255,70,85,0.12);">',
    '            <img src="img_M/game_card/AFFICHE-VALORANT.png" alt="Valorant" style="width:28px;height:28px;border-radius:6px;"/>',
    '          </div>',
    '          <div class="skb-mob-tourn-info">',
    '            <div class="skb-mob-tourn-name">VCT Masters Tokyo</div>',
    '            <div class="skb-mob-tourn-sub">Valorant · Tokyo · Playoffs</div>',
    '          </div>',
    '          <span class="skb-mob-tourn-live upcoming">J+3</span>',
    '        </div>',

    '      </div>',
    '    </div>',

    '    <div class="skb-mob-gc-title">Esport Games</div>',
    '    <div class="skb-mob-gc-grid">',
    '      <div class="skb-mob-gc-item"><img src="img_M/game_card/CARD-LOL.png" alt="LoL"/></div>',
    '      <div class="skb-mob-gc-item"><img src="img_M/game_card/CARD-CS2.png" alt="CS2"/></div>',
    '      <div class="skb-mob-gc-item"><img src="img_M/game_card/CARD-DOTA2.png" alt="Dota 2"/></div>',
    '      <div class="skb-mob-gc-item"><img src="img_M/game_card/CARD-FORTNITE.png" alt="Fortnite"/></div>',
    '      <div class="skb-mob-gc-item"><img src="img_M/game_card/CARD-CALLOFDUTY.png" alt="Call of Duty"/></div>',
    '      <div class="skb-mob-gc-item"><img src="img_M/game_card/CARD-FIFA.png" alt="FIFA"/></div>',
    '      <div class="skb-mob-gc-item"><img src="img_M/game_card/CARD-HEARTHSTONE.png" alt="Hearthstone"/></div>',
    '      <div class="skb-mob-gc-item"><img src="img_M/game_card/CARD-DEADLOCK.png" alt="Deadlock"/></div>',
    '      <div class="skb-mob-gc-item"><img src="img_M/game_card/CARD-CHESS.png" alt="Chess"/></div>',
    '      <div class="skb-mob-gc-item"><img src="img_M/game_card/CARD-CROSSFIRE.png" alt="CrossFire"/></div>',
    '      <div class="skb-mob-gc-item"><img src="img_M/game_card/CARD-AOV.png" alt="Arena of Valor"/></div>',
    '      <div class="skb-mob-gc-item"><img src="img_M/game_card/AFFICHE-VALORANT.png" alt="Valorant"/></div>',
    '      <div class="skb-mob-gc-item"><img src="img_M/game_card/AFFICHE-LOL-WILD-RIFT.png" alt="LoL Wild Rift"/></div>',
    '      <div class="skb-mob-gc-item"><img src="img_M/game_card/AFFICHE-MARVEL.png" alt="Marvel"/></div>',
    '      <div class="skb-mob-gc-item"><img src="img_M/game_card/AFFICHE-MOBILE-LEGEND.png" alt="Mobile Legends"/></div>',
    '      <div class="skb-mob-gc-item"><img src="img_M/game_card/AFFICHE-MOBILE-RAINBOW.png" alt="Rainbow Six Mobile"/></div>',
    '      <div class="skb-mob-gc-item"><img src="img_M/game_card/AFFICHE-NBA2K.png" alt="NBA 2K"/></div>',
    '      <div class="skb-mob-gc-item"><img src="img_M/game_card/AFFICHE-OVERWATCH.png" alt="Overwatch"/></div>',
    "      <div class=\"skb-mob-gc-item\"><img src=\"img_M/game_card/AFFICHE-Playerunknown's.png\" alt=\"PUBG\"/></div>",
    '      <div class="skb-mob-gc-item"><img src="img_M/game_card/AFFICHE-ROCKET-LEAGUE.png" alt="Rocket League"/></div>',
    '      <div class="skb-mob-gc-item"><img src="img_M/game_card/AFFICHE-STARCRAFT.png" alt="StarCraft"/></div>',
    '      <div class="skb-mob-gc-item"><img src="img_M/game_card/AFFICHE-STREET-FIGHTER.png" alt="Street Fighter"/></div>',
    '      <div class="skb-mob-gc-item"><img src="img_M/game_card/AFFICHE-STREET-FIGHTER2.png" alt="Street Fighter 2"/></div>',
    '      <div class="skb-mob-gc-item"><img src="img_M/game_card/AFFICHE-TEKKEN.png" alt="Tekken"/></div>',
    '      <div class="skb-mob-gc-item"><img src="img_M/game_card/AFFICHE-WORLD-OF-TANK.png" alt="World of Tanks"/></div>',
    '      <div class="skb-mob-gc-item"><img src="img_M/game_card/AFFICHE-WORLD-OF-WARCRAFT.png" alt="World of Warcraft"/></div>',
    '    </div>',
    '  </div>',   /* end esport view */

    /* ── Live view ── */
    '  <div class="skb-mob-live-view">',
    '    <div class="skb-mob-header">',
    '      <img class="skb-mob-logo" src="img_M/SKB LOGO.png" alt="SkillBet" />',
    '      <div class="skb-mob-header-right">',
    '        <button class="skb-mob-wallet"><span class="skb-mob-wallet-amount">£1,247.50</span><span class="skb-mob-wallet-add">+</span></button>',
    '        <img class="skb-mob-avatar" src="img_M/head skin .png" alt="avatar"/>',
    '      </div>',
    '    </div>',
    '    <div class="skb-mob-live-filter">',
    '      <button class="skb-mob-live-filter-btn active" data-game="all">All</button>',
    '      <button class="skb-mob-live-filter-btn icon" data-game="cs2"><img src="img_M/logocs2.png" alt="CS2"/></button>',
    '      <button class="skb-mob-live-filter-btn icon" data-game="lol"><img src="img_M/logo lol.png" alt="LoL"/></button>',
    '      <button class="skb-mob-live-filter-btn icon" data-game="dota2"><img src="img_M/logo dota2.png" alt="Dota 2"/></button>',
    '      <button class="skb-mob-live-filter-btn icon" data-game="valorant"><img src="img_M/game_card/AFFICHE-VALORANT.png" alt="Valorant" style="width:22px;height:22px;border-radius:6px;object-fit:cover;"/></button>',
    '    </div>',

    '    <div class="skb-mob-live-cards">',

    /* Live card 1 — CS2 Vitality vs NaVi */
    '      <div class="skb-mob-live-card" data-game="cs2">',
    '        <div class="skb-mob-live-card-top">',
    '          <img class="skb-mob-live-card-top-img" src="img_M/game_card/CARD-CS2.png" alt=""/>',
    '          <span class="skb-mob-live-badge">LIVE</span>',
    '          <div class="skb-mob-live-name">Vitality VS NaVi</div>',
    '          <span class="skb-mob-live-game-label">CS2 · ESL Pro League S21</span>',
    '        </div>',
    '        <div class="skb-mob-live-odds">',
    '          <div class="skb-mob-live-row">',
    '            <span class="skb-mob-live-team-name">Vitality</span>',
    '            <div class="skb-mob-live-bar-track"><div class="skb-mob-live-bar-fill" style="width:80%;background:#facc15;"></div></div>',
    '            <div class="skb-mob-live-odd-btn">1.2</div>',
    '          </div>',
    '          <div class="skb-mob-live-row">',
    '            <span class="skb-mob-live-team-name">NaVi</span>',
    '            <div class="skb-mob-live-bar-track"><div class="skb-mob-live-bar-fill" style="width:20%;background:#60a5fa;"></div></div>',
    '            <div class="skb-mob-live-odd-btn">4.5</div>',
    '          </div>',
    '        </div>',
    '      </div>',

    /* Live card 2 — LoL T1 vs KCorp */
    '      <div class="skb-mob-live-card" data-game="lol">',
    '        <div class="skb-mob-live-card-top">',
    '          <img class="skb-mob-live-card-top-img" src="img_M/game_card/CARD-LOL.png" alt=""/>',
    '          <span class="skb-mob-live-badge">LIVE</span>',
    '          <div class="skb-mob-live-name">T1 VS KCorp</div>',
    '          <span class="skb-mob-live-game-label">LoL · Worlds 2025 · Final</span>',
    '        </div>',
    '        <div class="skb-mob-live-odds">',
    '          <div class="skb-mob-live-row">',
    '            <span class="skb-mob-live-team-name">T1</span>',
    '            <div class="skb-mob-live-bar-track"><div class="skb-mob-live-bar-fill" style="width:62%;background:#ef4444;"></div></div>',
    '            <div class="skb-mob-live-odd-btn">1.65</div>',
    '          </div>',
    '          <div class="skb-mob-live-row">',
    '            <span class="skb-mob-live-team-name">KCorp</span>',
    '            <div class="skb-mob-live-bar-track"><div class="skb-mob-live-bar-fill" style="width:38%;background:#38bdf8;"></div></div>',
    '            <div class="skb-mob-live-odd-btn">2.30</div>',
    '          </div>',
    '        </div>',
    '      </div>',

    /* Live card 3 — Dota2 OG vs Spirit */
    '      <div class="skb-mob-live-card" data-game="dota2">',
    '        <div class="skb-mob-live-card-top">',
    '          <img class="skb-mob-live-card-top-img" src="img_M/game_card/CARD-DOTA2.png" alt=""/>',
    '          <span class="skb-mob-live-badge">LIVE</span>',
    '          <div class="skb-mob-live-name">OG VS Spirit</div>',
    '          <span class="skb-mob-live-game-label">Dota 2 · The International 2025</span>',
    '        </div>',
    '        <div class="skb-mob-live-odds">',
    '          <div class="skb-mob-live-row">',
    '            <span class="skb-mob-live-team-name">OG</span>',
    '            <div class="skb-mob-live-bar-track"><div class="skb-mob-live-bar-fill" style="width:35%;background:#4d82f5;"></div></div>',
    '            <div class="skb-mob-live-odd-btn">2.60</div>',
    '          </div>',
    '          <div class="skb-mob-live-row">',
    '            <span class="skb-mob-live-team-name">Spirit</span>',
    '            <div class="skb-mob-live-bar-track"><div class="skb-mob-live-bar-fill" style="width:65%;background:#fff;"></div></div>',
    '            <div class="skb-mob-live-odd-btn">1.45</div>',
    '          </div>',
    '        </div>',
    '      </div>',

    /* Live card 4 — Valorant Fnatic vs Sentinels */
    '      <div class="skb-mob-live-card" data-game="valorant">',
    '        <div class="skb-mob-live-card-top">',
    '          <img class="skb-mob-live-card-top-img" src="img_M/game_card/AFFICHE-VALORANT.png" alt=""/>',
    '          <span class="skb-mob-live-badge">LIVE</span>',
    '          <div class="skb-mob-live-name">Fnatic VS Sentinels</div>',
    '          <span class="skb-mob-live-game-label">Valorant · VCT Masters Tokyo</span>',
    '        </div>',
    '        <div class="skb-mob-live-odds">',
    '          <div class="skb-mob-live-row">',
    '            <span class="skb-mob-live-team-name">Fnatic</span>',
    '            <div class="skb-mob-live-bar-track"><div class="skb-mob-live-bar-fill" style="width:55%;background:#ff4655;"></div></div>',
    '            <div class="skb-mob-live-odd-btn">1.85</div>',
    '          </div>',
    '          <div class="skb-mob-live-row">',
    '            <span class="skb-mob-live-team-name">Sentinels</span>',
    '            <div class="skb-mob-live-bar-track"><div class="skb-mob-live-bar-fill" style="width:45%;background:#a78bfa;"></div></div>',
    '            <div class="skb-mob-live-odd-btn">2.05</div>',
    '          </div>',
    '        </div>',
    '      </div>',

    '    </div>',  /* end live-cards */
    '  </div>',   /* end live view */

    /* ── Profil view ── */
    '  <div class="skb-mob-profil-view">',
    '    <div class="skb-mob-header">',
    '      <img class="skb-mob-logo" src="img_M/SKB LOGO.png" alt="SkillBet" />',
    '      <div class="skb-mob-header-right">',
    '        <button class="skb-mob-wallet"><span class="skb-mob-wallet-amount">£1,247.50</span><span class="skb-mob-wallet-add">+</span></button>',
    '        <img class="skb-mob-avatar" src="img_M/head skin .png" alt="avatar"/>',
    '      </div>',
    '    </div>',
    '    <div class="skb-mob-profil-header">',
    '      <div class="skb-mob-profil-skin">',
    '        <img src="img_M/avatar test.png" alt="Avatar"/>',
    '        <div class="skb-mob-profil-username">@username</div>',
    '      </div>',
    '      <div class="skb-mob-profil-right">',
    '        <div class="skb-mob-profil-stats">',
    '          <div class="skb-mob-profil-stat">',
    '            <span class="skb-mob-profil-stat-val">1,204</span>',
    '            <span class="skb-mob-profil-stat-label">Followers</span>',
    '          </div>',
    '          <div class="skb-mob-profil-stat">',
    '            <span class="skb-mob-profil-stat-val">348</span>',
    '            <span class="skb-mob-profil-stat-label">Followed</span>',
    '          </div>',
    '        </div>',
    '        <div class="skb-mob-profil-balance-block">',
    '          <div class="skb-mob-profil-balance-label">Current Balance</div>',
    '          <div class="skb-mob-profil-balance-amount">£2,450.00</div>',
    '        </div>',
    '        <div class="skb-mob-profil-action-btns">',
    '          <button class="skb-mob-profil-btn withdraw">Withdraw</button>',
    '          <button class="skb-mob-profil-btn deposit">Deposit</button>',
    '        </div>',
    '      </div>',
    '    </div>',  /* end profil-header */
    '    <div class="skb-mob-profil-menu">',
    '      <div class="skb-mob-profil-menu-btn skb-mob-profil-store-btn">',
    '        <span class="skb-mob-profil-menu-label">Go to the store</span>',
    '        <img class="skb-mob-profil-menu-arrow" src="img_M/arrow.png" alt=""/>',
    '      </div>',
    '      <div class="skb-mob-profil-menu-btn">',
    '        <span class="skb-mob-profil-menu-label">Sponsor a friend</span>',
    '        <img class="skb-mob-profil-menu-arrow" src="img_M/arrow.png" alt=""/>',
    '      </div>',
    '      <div class="skb-mob-profil-menu-btn">',
    '        <span class="skb-mob-profil-menu-label">Settings</span>',
    '        <img class="skb-mob-profil-menu-arrow" src="img_M/arrow.png" alt=""/>',
    '      </div>',
    '    </div>',  /* end menu */

    '    <div class="skb-mob-bh">',
    '      <div class="skb-mob-bh-head">',
    '        <span class="skb-mob-bh-title">Betting History</span>',
    '        <div class="skb-mob-bh-tabs">',
    '          <button class="skb-mob-bh-tab active" data-bh="won">Won</button>',
    '          <button class="skb-mob-bh-tab" data-bh="lost">Lost</button>',
    '          <button class="skb-mob-bh-tab" data-bh="all">All</button>',
    '        </div>',
    '      </div>',
    '      <div class="skb-mob-bh-list">',

    /* WON bets */
    '        <div class="skb-mob-bh-item" data-bh="won">',
    '          <div class="skb-mob-bh-row1"><span class="skb-mob-bh-event">T1 vs KCorp</span><span class="skb-mob-bh-date">01/06/2026</span></div>',
    '          <div class="skb-mob-bh-row2"><div class="skb-mob-bh-details"><span>£50</span><span class="skb-mob-bh-sep">·</span><span>1.65</span><span class="skb-mob-bh-sep">·</span><span class="skb-mob-bh-gain">+£82.50</span></div><span class="skb-mob-bh-badge won">Won</span></div>',
    '        </div>',

    '        <div class="skb-mob-bh-item" data-bh="lost">',
    '          <div class="skb-mob-bh-row1"><span class="skb-mob-bh-event">Vitality vs NaVi</span><span class="skb-mob-bh-date">31/05/2026</span></div>',
    '          <div class="skb-mob-bh-row2"><div class="skb-mob-bh-details"><span>£30</span><span class="skb-mob-bh-sep">·</span><span>ESL Pro League</span></div><span class="skb-mob-bh-badge lost">Lost</span></div>',
    '        </div>',

    '        <div class="skb-mob-bh-item" data-bh="won">',
    '          <div class="skb-mob-bh-row1"><span class="skb-mob-bh-event">OG vs Spirit</span><span class="skb-mob-bh-date">30/05/2026</span></div>',
    '          <div class="skb-mob-bh-row2"><div class="skb-mob-bh-details"><span>£20</span><span class="skb-mob-bh-sep">·</span><span>2.60</span><span class="skb-mob-bh-sep">·</span><span class="skb-mob-bh-gain">+£52.00</span></div><span class="skb-mob-bh-badge won">Won</span></div>',
    '        </div>',

    '        <div class="skb-mob-bh-item" data-bh="lost">',
    '          <div class="skb-mob-bh-row1"><span class="skb-mob-bh-event">Fnatic vs Sentinels</span><span class="skb-mob-bh-date">29/05/2026</span></div>',
    '          <div class="skb-mob-bh-row2"><div class="skb-mob-bh-details"><span>£25</span><span class="skb-mob-bh-sep">·</span><span>VCT Masters Tokyo</span></div><span class="skb-mob-bh-badge lost">Lost</span></div>',
    '        </div>',

    '        <div class="skb-mob-bh-item" data-bh="won">',
    '          <div class="skb-mob-bh-row1"><span class="skb-mob-bh-event">T1 vs Gen.G</span><span class="skb-mob-bh-date">28/05/2026</span></div>',
    '          <div class="skb-mob-bh-row2"><div class="skb-mob-bh-details"><span>£40</span><span class="skb-mob-bh-sep">·</span><span>1.90</span><span class="skb-mob-bh-sep">·</span><span class="skb-mob-bh-gain">+£76.00</span></div><span class="skb-mob-bh-badge won">Won</span></div>',
    '        </div>',

    '        <div class="skb-mob-bh-item" data-bh="lost">',
    '          <div class="skb-mob-bh-row1"><span class="skb-mob-bh-event">NaVi vs G2</span><span class="skb-mob-bh-date">27/05/2026</span></div>',
    '          <div class="skb-mob-bh-row2"><div class="skb-mob-bh-details"><span>£15</span><span class="skb-mob-bh-sep">·</span><span>BLAST Premier</span></div><span class="skb-mob-bh-badge lost">Lost</span></div>',
    '        </div>',

    '        <div class="skb-mob-bh-item" data-bh="won">',
    '          <div class="skb-mob-bh-row1"><span class="skb-mob-bh-event">Spirit vs Liquid</span><span class="skb-mob-bh-date">26/05/2026</span></div>',
    '          <div class="skb-mob-bh-row2"><div class="skb-mob-bh-details"><span>£60</span><span class="skb-mob-bh-sep">·</span><span>1.45</span><span class="skb-mob-bh-sep">·</span><span class="skb-mob-bh-gain">+£87.00</span></div><span class="skb-mob-bh-badge won">Won</span></div>',
    '        </div>',

    '        <div class="skb-mob-bh-item" data-bh="lost">',
    '          <div class="skb-mob-bh-row1"><span class="skb-mob-bh-event">Vitality vs Heroic</span><span class="skb-mob-bh-date">25/05/2026</span></div>',
    '          <div class="skb-mob-bh-row2"><div class="skb-mob-bh-details"><span>£35</span><span class="skb-mob-bh-sep">·</span><span>IEM Cologne</span></div><span class="skb-mob-bh-badge lost">Lost</span></div>',
    '        </div>',

    '      </div>',  /* end bh-list */
    '    </div>',    /* end bh */

    /* ── Manage my profile ── */
    '    <div style="margin:20px 14px 8px;font-family:\'Exo 2\',sans-serif;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff;">Manage my profile</div>',
    '    <div class="skb-mob-profil-menu" style="margin:0 14px 32px;">',
    '      <div class="skb-mob-profil-menu-btn">',
    '        <span class="skb-mob-profil-menu-label">Payment methods</span>',
    '        <img class="skb-mob-profil-menu-arrow" src="img_M/arrow.png" alt=""/>',
    '      </div>',
    '      <div class="skb-mob-profil-menu-btn">',
    '        <span class="skb-mob-profil-menu-label">Transactions</span>',
    '        <img class="skb-mob-profil-menu-arrow" src="img_M/arrow.png" alt=""/>',
    '      </div>',
    '      <div class="skb-mob-profil-menu-btn">',
    '        <span class="skb-mob-profil-menu-label">Messages</span>',
    '        <img class="skb-mob-profil-menu-arrow" src="img_M/arrow.png" alt=""/>',
    '      </div>',
    '      <div class="skb-mob-profil-menu-btn">',
    '        <span class="skb-mob-profil-menu-label">Documents</span>',
    '        <img class="skb-mob-profil-menu-arrow" src="img_M/arrow.png" alt=""/>',
    '      </div>',
    '      <div class="skb-mob-profil-menu-btn">',
    '        <span class="skb-mob-profil-menu-label">Login and security</span>',
    '        <img class="skb-mob-profil-menu-arrow" src="img_M/arrow.png" alt=""/>',
    '      </div>',
    '      <div class="skb-mob-profil-menu-btn">',
    '        <span class="skb-mob-profil-menu-label">Notifications</span>',
    '        <img class="skb-mob-profil-menu-arrow" src="img_M/arrow.png" alt=""/>',
    '      </div>',
    '      <div class="skb-mob-profil-menu-btn">',
    '        <span class="skb-mob-profil-menu-label">Preferences</span>',
    '        <img class="skb-mob-profil-menu-arrow" src="img_M/arrow.png" alt=""/>',
    '      </div>',
    '    </div>',

    /* ── Keep Control ── */
    '    <div style="margin:4px 14px 8px;font-family:\'Exo 2\',sans-serif;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff;">Keep Control</div>',
    '    <div class="skb-mob-profil-menu" style="margin:0 14px 40px;">',
    '      <div class="skb-mob-profil-menu-btn">',
    '        <span class="skb-mob-profil-menu-label">Monitoring my gaming activity</span>',
    '        <img class="skb-mob-profil-menu-arrow" src="img_M/arrow.png" alt=""/>',
    '      </div>',
    '      <div class="skb-mob-profil-menu-btn">',
    '        <span class="skb-mob-profil-menu-label">Managing my budget</span>',
    '        <img class="skb-mob-profil-menu-arrow" src="img_M/arrow.png" alt=""/>',
    '      </div>',
    '      <div class="skb-mob-profil-menu-btn">',
    '        <span class="skb-mob-profil-menu-label">Testing my gaming habits</span>',
    '        <img class="skb-mob-profil-menu-arrow" src="img_M/arrow.png" alt=""/>',
    '      </div>',
    '      <div class="skb-mob-profil-menu-btn">',
    '        <span class="skb-mob-profil-menu-label">Excluding myself</span>',
    '        <img class="skb-mob-profil-menu-arrow" src="img_M/arrow.png" alt=""/>',
    '      </div>',
    '      <div class="skb-mob-profil-menu-btn">',
    '        <span class="skb-mob-profil-menu-label">Staying informed</span>',
    '        <img class="skb-mob-profil-menu-arrow" src="img_M/arrow.png" alt=""/>',
    '      </div>',
    '    </div>',

    /* ── Legal information ── */
    '    <div style="margin:4px 14px 8px;font-family:\'Exo 2\',sans-serif;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#fff;">Legal Information</div>',
    '    <div class="skb-mob-profil-menu" style="margin:0 14px 48px;">',
    '      <div class="skb-mob-profil-menu-btn">',
    '        <span class="skb-mob-profil-menu-label">Help</span>',
    '        <img class="skb-mob-profil-menu-arrow" src="img_M/arrow.png" alt=""/>',
    '      </div>',
    '      <div class="skb-mob-profil-menu-btn">',
    '        <span class="skb-mob-profil-menu-label">Terms of use</span>',
    '        <img class="skb-mob-profil-menu-arrow" src="img_M/arrow.png" alt=""/>',
    '      </div>',
    '      <div class="skb-mob-profil-menu-btn">',
    '        <span class="skb-mob-profil-menu-label">Privacy policy</span>',
    '        <img class="skb-mob-profil-menu-arrow" src="img_M/arrow.png" alt=""/>',
    '      </div>',
    '      <div class="skb-mob-profil-menu-btn">',
    '        <span class="skb-mob-profil-menu-label">Cookie preferences</span>',
    '        <img class="skb-mob-profil-menu-arrow" src="img_M/arrow.png" alt=""/>',
    '      </div>',
    '    </div>',

    '    <div style="padding:0 14px 48px;">',
    '      <button style="width:100%;padding:14px 0;border-radius:10px;cursor:pointer;border:1px solid rgba(239,68,68,0.35);background:rgba(239,68,68,0.08);font-family:\'Exo 2\',sans-serif;font-size:12px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:#ef4444;transition:all 0.15s;">Disconnect</button>',
    '    </div>',

    '  </div>',   /* end profil view */

    /* ── Store view ── */
    '  <div class="skb-mob-store-view">',
    '    <div class="skb-mob-store-topbar">',
    '      <button class="skb-mob-store-back"><img src="img_M/arrow.png" alt="back" style="width:26px;height:26px;object-fit:contain;transform:scaleX(-1);"/></button>',
    '      <div class="skb-mob-store-title">Store</div>',
    '',
    '    </div>',

    /* Characters */
    '    <div class="skb-mob-store-section">',
    '      <div class="skb-mob-store-section-ttl">Characters</div>',
    '      <div class="skb-mob-store-grid">',
    '        <div class="skb-mob-store-item equipped">',
    '          <div class="skb-mob-store-img" style="background:transparent;"><img src="img_M/lion.png" alt="Lion" style="mix-blend-mode:screen;"/></div>',
    '          <div class="skb-mob-store-info"><div class="skb-mob-store-name">Bad Lion</div><div class="skb-mob-store-price">4.99£</div></div>',
    '        </div>',
    '        <div class="skb-mob-store-item">',
    '          <div class="skb-mob-store-img" style="background:transparent;"><img src="img_M/axo.png" alt="Axo" style="mix-blend-mode:screen;"/></div>',
    '          <div class="skb-mob-store-info"><div class="skb-mob-store-name">AXO</div><div class="skb-mob-store-price">4.99£</div></div>',
    '        </div>',
    '        <div class="skb-mob-store-item">',
    '          <div class="skb-mob-store-img" style="background:transparent;"><img src="img_M/panda.png" alt="Panda" style="mix-blend-mode:screen;"/></div>',
    '          <div class="skb-mob-store-info"><div class="skb-mob-store-name">Hight Panda</div><div class="skb-mob-store-price">4.99£</div></div>',
    '        </div>',
    '      </div>',
    '    </div>',

    /* Head accessories */
    '    <div class="skb-mob-store-section">',
    '      <div class="skb-mob-store-section-ttl">Head Accessories</div>',
    '      <div class="skb-mob-store-grid">',
    '        <div class="skb-mob-store-item">',
    '          <div class="skb-mob-store-img"><img src="img_M/casquette.png" alt="Cap"/></div>',
    '          <div class="skb-mob-store-info"><div class="skb-mob-store-name">Blue Cap</div><div class="skb-mob-store-price">1.50£</div></div>',
    '        </div>',
    '        <div class="skb-mob-store-item">',
    '          <div class="skb-mob-store-img" style="filter:hue-rotate(45deg);"><img src="img_M/casquette.png" alt="Cap Gold"/></div>',
    '          <div class="skb-mob-store-info"><div class="skb-mob-store-name">Gold Cap</div><div class="skb-mob-store-price">1.50£</div></div>',
    '        </div>',
    '        <div class="skb-mob-store-item">',
    '          <div class="skb-mob-store-img" style="filter:hue-rotate(260deg);"><img src="img_M/casquette.png" alt="Cap Purple"/></div>',
    '          <div class="skb-mob-store-info"><div class="skb-mob-store-name">Purple Cap</div><div class="skb-mob-store-price">1.50£</div></div>',
    '        </div>',
    '      </div>',
    '    </div>',

    /* Back accessory */
    '    <div class="skb-mob-store-section">',
    '      <div class="skb-mob-store-section-ttl">Back Accessory</div>',
    '      <div class="skb-mob-store-grid">',
    '        <div class="skb-mob-store-item">',
    '          <div class="skb-mob-store-img"><img src="img_M/manette.png" alt="Controller"/></div>',
    '          <div class="skb-mob-store-info"><div class="skb-mob-store-name">Controller</div><div class="skb-mob-store-price">2.25£</div></div>',
    '        </div>',
    '        <div class="skb-mob-store-item">',
    '          <div class="skb-mob-store-img" style="filter:hue-rotate(120deg);"><img src="img_M/manette.png" alt="Controller XL"/></div>',
    '          <div class="skb-mob-store-info"><div class="skb-mob-store-name">Ctrl XL</div><div class="skb-mob-store-price">2.25£</div></div>',
    '        </div>',
    '        <div class="skb-mob-store-item">',
    '          <div class="skb-mob-store-img" style="filter:hue-rotate(200deg);"><img src="img_M/manette.png" alt="Controller Pro"/></div>',
    '          <div class="skb-mob-store-info"><div class="skb-mob-store-name">Ctrl Pro</div><div class="skb-mob-store-price">2.25£</div></div>',
    '        </div>',
    '      </div>',
    '    </div>',

    /* Foot accessories */
    '    <div class="skb-mob-store-section" style="padding-bottom:40px;">',
    '      <div class="skb-mob-store-section-ttl">Foot Accessories</div>',
    '      <div class="skb-mob-store-grid">',
    '        <div class="skb-mob-store-item">',
    '          <div class="skb-mob-store-img"><img src="img_M/shoes.png" alt="Shoes"/></div>',
    '          <div class="skb-mob-store-info"><div class="skb-mob-store-name">W Low Shoes</div><div class="skb-mob-store-price">3.00£</div></div>',
    '        </div>',
    '        <div class="skb-mob-store-item">',
    '          <div class="skb-mob-store-img" style="filter:hue-rotate(45deg);"><img src="img_M/shoes.png" alt="Shoes Gold"/></div>',
    '          <div class="skb-mob-store-info"><div class="skb-mob-store-name">Gold Shoes</div><div class="skb-mob-store-price">3.00£</div></div>',
    '        </div>',
    '        <div class="skb-mob-store-item">',
    '          <div class="skb-mob-store-img" style="filter:hue-rotate(260deg);"><img src="img_M/shoes.png" alt="Shoes Neon"/></div>',
    '          <div class="skb-mob-store-info"><div class="skb-mob-store-name">Neon Shoes</div><div class="skb-mob-store-price">3.00£</div></div>',
    '        </div>',
    '      </div>',
    '    </div>',

    '  </div>',   /* end store view */

    /* ── Match view ── */
    '  <div class="skb-mob-match-view" id="skbMatchView">',

    /* top bar */
    '    <div class="skb-mob-mv-topbar">',
    '      <button class="skb-mob-mv-back" id="skbMvBack"><img src="img_M/arrow.png" alt="back"/></button>',
    '      <div class="skb-mob-mv-title">NaVi vs Spirit</div>',
    '    </div>',

    /* header card */
    '    <div class="skb-mob-mv-header">',
    '      <div class="skb-mob-mv-teams">',
    '        <div class="skb-mob-mv-team">',
    '          <img src="img_M/NAVI_Logo_2020.png" alt="NaVi"/>',
    '          <div class="skb-mob-mv-team-name">NaVi</div>',
    '          <div class="skb-mob-mv-team-odd skb-mob-mv-card-odd" data-pick="NaVi à gagner" data-odds="2.30" data-match="NaVi vs Spirit">2.30</div>',
    '        </div>',
    '        <div class="skb-mob-mv-center">',
    '          <div style="font-size:9px;font-weight:700;color:rgba(255,255,255,0.4);letter-spacing:1px;text-transform:uppercase;margin-bottom:4px;">CS2 · ESL Pro League</div>',
    '          <div class="skb-mob-mv-score">13 — 8</div>',
    '          <div class="skb-mob-mv-round">Map 2 · R15</div>',
    '        </div>',
    '        <div class="skb-mob-mv-team">',
    '          <img src="img_M/spirit.png" alt="Spirit" style="filter:invert(1);mix-blend-mode:screen;"/>',
    '          <div class="skb-mob-mv-team-name">Spirit</div>',
    '          <div class="skb-mob-mv-team-odd skb-mob-mv-card-odd" data-pick="Spirit à gagner" data-odds="1.55" data-match="NaVi vs Spirit">1.55</div>',
    '        </div>',
    '      </div>',
    /* win probability graph */
    '      <svg class="skb-mob-mv-graph" viewBox="0 0 500 100" preserveAspectRatio="xMidYMid meet">',
    '        <defs>',
    '          <linearGradient id="mvga" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#facc15" stop-opacity="0.25"/><stop offset="100%" stop-color="#facc15" stop-opacity="0"/></linearGradient>',
    '          <linearGradient id="mvgb" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffffff" stop-opacity="0"/><stop offset="100%" stop-color="#ffffff" stop-opacity="0.12"/></linearGradient>',
    '        </defs>',
    '        <line x1="20" y1="50" x2="460" y2="50" stroke="rgba(255,255,255,0.08)" stroke-width="1" stroke-dasharray="4,3"/>',
    '        <path d="M20,50 60,42 95,46 130,38 165,32 200,40 235,28 270,34 305,24 340,30 375,20 410,26 460,20 L460,50 Z" fill="url(#mvga)"/>',
    '        <path d="M20,50 60,58 95,54 130,62 165,68 200,60 235,72 270,66 305,76 340,70 375,80 410,74 460,80 L460,50 Z" fill="url(#mvgb)"/>',
    '        <polyline points="20,50 60,42 95,46 130,38 165,32 200,40 235,28 270,34 305,24 340,30 375,20 410,26 460,20" fill="none" stroke="#facc15" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>',
    '        <polyline points="20,50 60,58 95,54 130,62 165,68 200,60 235,72 270,66 305,76 340,70 375,80 410,74 460,80" fill="none" stroke="rgba(255,255,255,0.7)" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>',
    '        <circle cx="460" cy="20" r="4" fill="#facc15"/>',
    '        <circle cx="460" cy="80" r="4" fill="rgba(255,255,255,0.7)"/>',
    '        <text x="466" y="24" fill="#facc15" font-size="12" font-weight="700" font-family="Exo 2,sans-serif">NaVi 27%</text>',
    '        <text x="466" y="84" fill="rgba(255,255,255,0.7)" font-size="12" font-weight="700" font-family="Exo 2,sans-serif">Spirit 73%</text>',
    '      </svg>',
    '    </div>',

    /* tabs */
    '    <div class="skb-mob-mv-tabs">',
    '      <div class="skb-mob-mv-tab active" data-tab="mv-main">Main</div>',
    '      <div class="skb-mob-mv-tab" data-tab="mv-match">Match</div>',
    '      <div class="skb-mob-mv-tab" data-tab="mv-map">Map</div>',
    '      <div class="skb-mob-mv-tab" data-tab="mv-players">Players</div>',
    '    </div>',

    /* ── Tab Main ── */
    '    <div class="skb-mob-mv-panel active" id="mv-main">',
    '      <div class="skb-mob-mv-section-ttl">Victoire du match</div>',
    '      <div class="skb-mob-mv-dbl">',
    '        <div class="skb-mob-mv-dbl-opt skb-mob-mv-card-odd" data-pick="NaVi à gagner" data-odds="2.30" data-match="NaVi vs Spirit"><div class="skb-mob-mv-dbl-team">NaVi</div><div class="skb-mob-mv-dbl-opt-val">2.30</div></div>',
    '        <div class="skb-mob-mv-dbl-opt skb-mob-mv-card-odd" data-pick="Spirit à gagner" data-odds="1.55" data-match="NaVi vs Spirit"><div class="skb-mob-mv-dbl-team">Spirit</div><div class="skb-mob-mv-dbl-opt-val">1.55</div></div>',
    '      </div>',
    '      <div class="skb-mob-mv-section-ttl">Événements</div>',
    '      <div class="skb-mob-mv-card">',
    '        <div class="skb-mob-mv-card-hdr">First Blood — Map 2</div>',
    '        <div class="skb-mob-mv-card-row"><span class="skb-mob-mv-card-lbl">NaVi first blood</span><div class="skb-mob-mv-card-odd" data-pick="NaVi first blood" data-odds="3.40" data-match="NaVi vs Spirit">3.40</div></div>',
    '        <div class="skb-mob-mv-card-row"><span class="skb-mob-mv-card-lbl">Spirit first blood</span><div class="skb-mob-mv-card-odd" data-pick="Spirit first blood" data-odds="1.28" data-match="NaVi vs Spirit">1.28</div></div>',
    '      </div>',
    '      <div class="skb-mob-mv-card">',
    '        <div class="skb-mob-mv-card-hdr">donk — Total kills</div>',
    '        <div class="skb-mob-mv-card-row"><span class="skb-mob-mv-card-lbl">Plus de 15,5</span><div class="skb-mob-mv-card-odd" data-pick="donk +15.5 kills" data-odds="1.75" data-match="NaVi vs Spirit">1.75</div></div>',
    '        <div class="skb-mob-mv-card-row"><span class="skb-mob-mv-card-lbl">Moins de 15,5</span><div class="skb-mob-mv-card-odd" data-pick="donk -15.5 kills" data-odds="2.05" data-match="NaVi vs Spirit">2.05</div></div>',
    '      </div>',
    '      <div class="skb-mob-mv-card">',
    '        <div class="skb-mob-mv-card-hdr">Pistol round — Map 2</div>',
    '        <div class="skb-mob-mv-card-row"><span class="skb-mob-mv-card-lbl">NaVi (CT side)</span><div class="skb-mob-mv-card-odd" data-pick="NaVi pistol round" data-odds="2.10" data-match="NaVi vs Spirit">2.10</div></div>',
    '        <div class="skb-mob-mv-card-row"><span class="skb-mob-mv-card-lbl">Spirit (T side)</span><div class="skb-mob-mv-card-odd" data-pick="Spirit pistol round" data-odds="1.72" data-match="NaVi vs Spirit">1.72</div></div>',
    '      </div>',
    '      <div class="skb-mob-mv-card">',
    '        <div class="skb-mob-mv-card-hdr">Kill au couteau</div>',
    '        <div class="skb-mob-mv-card-row"><span class="skb-mob-mv-card-lbl">Oui</span><div class="skb-mob-mv-card-odd" data-pick="Kill couteau — Oui" data-odds="8.50" data-match="NaVi vs Spirit">8.50</div></div>',
    '        <div class="skb-mob-mv-card-row"><span class="skb-mob-mv-card-lbl">Non</span><div class="skb-mob-mv-card-odd" data-pick="Kill couteau — Non" data-odds="1.06" data-match="NaVi vs Spirit">1.06</div></div>',
    '      </div>',
    '    </div>',

    /* ── Tab Match ── */
    '    <div class="skb-mob-mv-panel" id="mv-match">',
    '      <div class="skb-mob-mv-card">',
    '        <div class="skb-mob-mv-card-hdr">Vainqueur de la série</div>',
    '        <div class="skb-mob-mv-card-row"><span class="skb-mob-mv-card-lbl">NaVi 2-0</span><div class="skb-mob-mv-card-odd" data-pick="NaVi 2-0" data-odds="3.20" data-match="NaVi vs Spirit">3.20</div></div>',
    '        <div class="skb-mob-mv-card-row"><span class="skb-mob-mv-card-lbl">NaVi 2-1</span><div class="skb-mob-mv-card-odd" data-pick="NaVi 2-1" data-odds="5.50" data-match="NaVi vs Spirit">5.50</div></div>',
    '        <div class="skb-mob-mv-card-row"><span class="skb-mob-mv-card-lbl">Spirit 2-1</span><div class="skb-mob-mv-card-odd" data-pick="Spirit 2-1" data-odds="2.80" data-match="NaVi vs Spirit">2.80</div></div>',
    '        <div class="skb-mob-mv-card-row"><span class="skb-mob-mv-card-lbl">Spirit 2-0</span><div class="skb-mob-mv-card-odd" data-pick="Spirit 2-0" data-odds="1.85" data-match="NaVi vs Spirit">1.85</div></div>',
    '      </div>',
    '      <div class="skb-mob-mv-card">',
    '        <div class="skb-mob-mv-card-hdr">Total de rounds</div>',
    '        <div class="skb-mob-mv-card-row"><span class="skb-mob-mv-card-lbl">Plus de 55,5</span><div class="skb-mob-mv-card-odd" data-pick="Total rounds +55.5" data-odds="1.90" data-match="NaVi vs Spirit">1.90</div></div>',
    '        <div class="skb-mob-mv-card-row"><span class="skb-mob-mv-card-lbl">Moins de 55,5</span><div class="skb-mob-mv-card-odd" data-pick="Total rounds -55.5" data-odds="1.90" data-match="NaVi vs Spirit">1.90</div></div>',
    '      </div>',
    '    </div>',

    /* ── Tab Map ── */
    '    <div class="skb-mob-mv-panel" id="mv-map">',
    '      <div class="skb-mob-mv-card">',
    '        <div class="skb-mob-mv-card-hdr">Map 2 — Inferno</div>',
    '        <div class="skb-mob-mv-card-row"><span class="skb-mob-mv-card-lbl">NaVi gagne map 2</span><div class="skb-mob-mv-card-odd" data-pick="NaVi gagne map 2" data-odds="2.50" data-match="NaVi vs Spirit">2.50</div></div>',
    '        <div class="skb-mob-mv-card-row"><span class="skb-mob-mv-card-lbl">Spirit gagne map 2</span><div class="skb-mob-mv-card-odd" data-pick="Spirit gagne map 2" data-odds="1.52" data-match="NaVi vs Spirit">1.52</div></div>',
    '      </div>',
    '      <div class="skb-mob-mv-card">',
    '        <div class="skb-mob-mv-card-hdr">Rounds map 2</div>',
    '        <div class="skb-mob-mv-card-row"><span class="skb-mob-mv-card-lbl">NaVi handicap -3,5</span><div class="skb-mob-mv-card-odd" data-pick="NaVi hcp -3.5" data-odds="2.20" data-match="NaVi vs Spirit">2.20</div></div>',
    '        <div class="skb-mob-mv-card-row"><span class="skb-mob-mv-card-lbl">Spirit handicap +3,5</span><div class="skb-mob-mv-card-odd" data-pick="Spirit hcp +3.5" data-odds="1.65" data-match="NaVi vs Spirit">1.65</div></div>',
    '      </div>',
    '    </div>',

    /* ── Tab Players ── */
    '    <div class="skb-mob-mv-panel" id="mv-players">',
    '      <div class="skb-mob-mv-card">',
    '        <div class="skb-mob-mv-card-hdr">s1mple — Total kills map 2</div>',
    '        <div class="skb-mob-mv-card-row"><span class="skb-mob-mv-card-lbl">Plus de 18,5</span><div class="skb-mob-mv-card-odd" data-pick="s1mple +18.5 kills" data-odds="1.85" data-match="NaVi vs Spirit">1.85</div></div>',
    '        <div class="skb-mob-mv-card-row"><span class="skb-mob-mv-card-lbl">Moins de 18,5</span><div class="skb-mob-mv-card-odd" data-pick="s1mple -18.5 kills" data-odds="1.95" data-match="NaVi vs Spirit">1.95</div></div>',
    '      </div>',
    '      <div class="skb-mob-mv-card">',
    '        <div class="skb-mob-mv-card-hdr">donk — MVP du match</div>',
    '        <div class="skb-mob-mv-card-row"><span class="skb-mob-mv-card-lbl">Oui</span><div class="skb-mob-mv-card-odd" data-pick="donk MVP" data-odds="2.40" data-match="NaVi vs Spirit">2.40</div></div>',
    '        <div class="skb-mob-mv-card-row"><span class="skb-mob-mv-card-lbl">Non</span><div class="skb-mob-mv-card-odd" data-pick="donk pas MVP" data-odds="1.48" data-match="NaVi vs Spirit">1.48</div></div>',
    '      </div>',
    '      <div class="skb-mob-mv-card">',
    '        <div class="skb-mob-mv-card-hdr">Meilleur ratio — map 2</div>',
    '        <div class="skb-mob-mv-card-row"><span class="skb-mob-mv-card-lbl">s1mple</span><div class="skb-mob-mv-card-odd" data-pick="s1mple best ratio" data-odds="2.10" data-match="NaVi vs Spirit">2.10</div></div>',
    '        <div class="skb-mob-mv-card-row"><span class="skb-mob-mv-card-lbl">donk</span><div class="skb-mob-mv-card-odd" data-pick="donk best ratio" data-odds="1.70" data-match="NaVi vs Spirit">1.70</div></div>',
    '        <div class="skb-mob-mv-card-row"><span class="skb-mob-mv-card-lbl">Autre joueur</span><div class="skb-mob-mv-card-odd" data-pick="autre best ratio" data-odds="3.50" data-match="NaVi vs Spirit">3.50</div></div>',
    '      </div>',
    '    </div>',

    '  </div>',   /* end match view */

    /* ── Game view ── */
    '  <div class="skb-mob-game-view" id="skbGameView">',

    /* top bar */
    '    <div class="skb-mob-gv-topbar">',
    '      <button class="skb-mob-gv-back" id="skbGvBack"><img src="img_M/arrow.png" alt="back"/></button>',
    '      <div class="skb-mob-gv-title" id="skbGvTitle">CS2</div>',
    '    </div>',

    /* banner */
    '    <div class="skb-mob-gv-banner">',
    '      <img class="skb-mob-gv-banner-bg-img" src="img_M/game_card/CARD-CS2.png" alt="" id="skbGvBannerImg"/>',
    '      <div class="skb-mob-gv-banner-overlay" id="skbGvBannerOverlay"></div>',
    '      <img class="skb-mob-gv-banner-icon" src="img_M/logocs2.png" alt="" id="skbGvIcon"/>',
    '      <div class="skb-mob-gv-banner-content">',
    '        <div class="skb-mob-gv-game-name" id="skbGvGameName">Counter-Strike 2</div>',
    '        <div class="skb-mob-gv-followers" id="skbGvFollowers">Followed by 847,312 people</div>',
    '      </div>',
    '    </div>',

    /* Huge Craze */
    '    <div class="skb-mob-gv-section-ttl">Huge Craze</div>',
    '    <div class="skb-mob-gv-matches">',

    /* Card 1 — Vitality vs NaVi */
    '      <div class="skb-mob-hcard" style="flex:0 0 auto;scroll-snap-align:unset;">',
    '        <div class="skb-mob-hcard-bg contain"><img src="img_M/Counter_Strike_2_Logo.png" alt=""/></div>',
    '        <div class="skb-mob-hcard-content">',
    '          <div class="skb-mob-hcard-label">CS2 · ESL Pro League S21 — Final</div>',
    '          <div class="skb-mob-hcard-teams">',
    '            <div class="skb-mob-hcard-team"><img src="img_M/logovita.png" alt="Vitality"/><div class="skb-mob-hcard-odd">1.75</div></div>',
    '            <div class="skb-mob-hcard-vs">VS</div>',
    '            <div class="skb-mob-hcard-team"><img src="img_M/NAVI_Logo_2020.png" alt="NaVi" style="mix-blend-mode:multiply"/><div class="skb-mob-hcard-odd">2.05</div></div>',
    '          </div>',
    '          <svg class="skb-mob-hcard-graph" viewBox="0 0 500 120" preserveAspectRatio="xMidYMid meet">',
    '            <defs>',
    '              <linearGradient id="gvcg1a" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#facc15" stop-opacity="0"/><stop offset="100%" stop-color="#facc15" stop-opacity="0.22"/></linearGradient>',
    '              <linearGradient id="gvcg1b" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#60a5fa" stop-opacity="0.18"/><stop offset="100%" stop-color="#60a5fa" stop-opacity="0"/></linearGradient>',
    '            </defs>',
    '            <line x1="38" y1="60" x2="430" y2="60" stroke="rgba(255,255,255,0.1)" stroke-width="1" stroke-dasharray="4,3"/>',
    '            <path d="M38,60 125,54 212,48 300,44 387,40 430,38 L430,108 L38,108 Z" fill="url(#gvcg1a)"/>',
    '            <path d="M38,60 125,66 212,72 300,76 387,80 430,82 L430,8 L38,8 Z" fill="url(#gvcg1b)"/>',
    '            <polyline points="38,60 125,54 212,48 300,44 387,40 430,38" fill="none" stroke="#facc15" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>',
    '            <polyline points="38,60 125,66 212,72 300,76 387,80 430,82" fill="none" stroke="#60a5fa" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>',
    '            <circle cx="430" cy="38" r="3.5" fill="#facc15"/><circle cx="430" cy="82" r="3.5" fill="#60a5fa"/>',
    '            <text x="436" y="42" fill="#facc15" font-size="11" font-weight="700" font-family="Exo 2,sans-serif">Vita 63%</text>',
    '            <text x="436" y="86" fill="#60a5fa" font-size="11" font-weight="700" font-family="Exo 2,sans-serif">NaVi 37%</text>',
    '          </svg>',
    '          <div class="skb-mob-gv-bets-placed">14,382 bets placed</div>',
    '        </div>',
    '      </div>',

    /* Card 2 — G2 vs Spirit */
    '      <div class="skb-mob-hcard" style="flex:0 0 auto;scroll-snap-align:unset;">',
    '        <div class="skb-mob-hcard-bg contain"><img src="img_M/Counter_Strike_2_Logo.png" alt=""/></div>',
    '        <div class="skb-mob-hcard-content">',
    '          <div class="skb-mob-hcard-label">CS2 · ESL Pro League S21 — Semi</div>',
    '          <div class="skb-mob-hcard-teams">',
    '            <div class="skb-mob-hcard-team"><img src="img_M/G2.webp" alt="G2"/><div class="skb-mob-hcard-odd">2.10</div></div>',
    '            <div class="skb-mob-hcard-vs">VS</div>',
    '            <div class="skb-mob-hcard-team"><img src="img_M/spirit.png" alt="Spirit" style="filter:invert(1)"/><div class="skb-mob-hcard-odd">1.70</div></div>',
    '          </div>',
    '          <svg class="skb-mob-hcard-graph" viewBox="0 0 500 120" preserveAspectRatio="xMidYMid meet">',
    '            <defs>',
    '              <linearGradient id="gvcg2a" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#c084fc" stop-opacity="0"/><stop offset="100%" stop-color="#c084fc" stop-opacity="0.2"/></linearGradient>',
    '              <linearGradient id="gvcg2b" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fff" stop-opacity="0.15"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient>',
    '            </defs>',
    '            <line x1="38" y1="60" x2="430" y2="60" stroke="rgba(255,255,255,0.1)" stroke-width="1" stroke-dasharray="4,3"/>',
    '            <path d="M38,60 125,66 212,62 300,70 387,74 430,74 L430,108 L38,108 Z" fill="url(#gvcg2a)"/>',
    '            <path d="M38,60 125,54 212,58 300,50 387,46 430,46 L430,8 L38,8 Z" fill="url(#gvcg2b)"/>',
    '            <polyline points="38,60 125,66 212,62 300,70 387,74 430,74" fill="none" stroke="#c084fc" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>',
    '            <polyline points="38,60 125,54 212,58 300,50 387,46 430,46" fill="none" stroke="#ffffff" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>',
    '            <circle cx="430" cy="74" r="3.5" fill="#c084fc"/><circle cx="430" cy="46" r="3.5" fill="#fff"/>',
    '            <text x="436" y="78" fill="#c084fc" font-size="11" font-weight="700" font-family="Exo 2,sans-serif">G2 42%</text>',
    '            <text x="436" y="50" fill="#fff" font-size="11" font-weight="700" font-family="Exo 2,sans-serif">Spirit 58%</text>',
    '          </svg>',
    '          <div class="skb-mob-gv-bets-placed">9,071 bets placed</div>',
    '        </div>',
    '      </div>',

    /* Card 3 — NaVi vs MOUZ */
    '      <div class="skb-mob-hcard" style="flex:0 0 auto;scroll-snap-align:unset;">',
    '        <div class="skb-mob-hcard-bg contain"><img src="img_M/Counter_Strike_2_Logo.png" alt=""/></div>',
    '        <div class="skb-mob-hcard-content">',
    '          <div class="skb-mob-hcard-label">CS2 · IEM Cologne — Quarter-Final</div>',
    '          <div class="skb-mob-hcard-teams">',
    '            <div class="skb-mob-hcard-team"><img src="img_M/NAVI_Logo_2020.png" alt="NaVi" style="mix-blend-mode:multiply"/><div class="skb-mob-hcard-odd">1.90</div></div>',
    '            <div class="skb-mob-hcard-vs">VS</div>',
    '            <div class="skb-mob-hcard-team"><img src="img_M/mouz.svg" alt="MOUZ"/><div class="skb-mob-hcard-odd">1.90</div></div>',
    '          </div>',
    '          <svg class="skb-mob-hcard-graph" viewBox="0 0 500 120" preserveAspectRatio="xMidYMid meet">',
    '            <defs>',
    '              <linearGradient id="gvcg3a" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#60a5fa" stop-opacity="0.18"/><stop offset="100%" stop-color="#60a5fa" stop-opacity="0"/></linearGradient>',
    '              <linearGradient id="gvcg3b" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f97316" stop-opacity="0"/><stop offset="100%" stop-color="#f97316" stop-opacity="0.2"/></linearGradient>',
    '            </defs>',
    '            <line x1="38" y1="60" x2="430" y2="60" stroke="rgba(255,255,255,0.1)" stroke-width="1" stroke-dasharray="4,3"/>',
    '            <path d="M38,60 125,56 212,52 300,58 387,54 430,56 L430,8 L38,8 Z" fill="url(#gvcg3a)"/>',
    '            <path d="M38,60 125,64 212,68 300,62 387,66 430,64 L430,108 L38,108 Z" fill="url(#gvcg3b)"/>',
    '            <polyline points="38,60 125,56 212,52 300,58 387,54 430,56" fill="none" stroke="#60a5fa" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>',
    '            <polyline points="38,60 125,64 212,68 300,62 387,66 430,64" fill="none" stroke="#f97316" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>',
    '            <circle cx="430" cy="56" r="3.5" fill="#60a5fa"/><circle cx="430" cy="64" r="3.5" fill="#f97316"/>',
    '            <text x="436" y="60" fill="#60a5fa" font-size="11" font-weight="700" font-family="Exo 2,sans-serif">NaVi 52%</text>',
    '            <text x="436" y="68" fill="#f97316" font-size="11" font-weight="700" font-family="Exo 2,sans-serif">MOUZ 48%</text>',
    '          </svg>',
    '          <div class="skb-mob-gv-bets-placed">21,654 bets placed</div>',
    '        </div>',
    '      </div>',

    '    </div>',  /* end gv-matches */

    /* Tournaments */
    '    <div class="skb-mob-gv-section-ttl">Tournaments</div>',
    '    <div class="skb-mob-gv-tlist">',

    '      <div class="skb-mob-gv-ti">',
    '        <div class="skb-mob-gv-ti-logo" style="background:rgba(250,204,21,0.12);"><img src="img_M/logocs2.png" alt=""/></div>',
    '        <div class="skb-mob-gv-ti-info">',
    '          <div class="skb-mob-gv-ti-name">ESL Pro League S21</div>',
    '          <div class="skb-mob-gv-ti-sub">Malta · Group Stage</div>',
    '        </div>',
    '        <span class="skb-mob-tourn-live is-live">Live</span>',
    '      </div>',

    '      <div class="skb-mob-gv-ti">',
    '        <div class="skb-mob-gv-ti-logo" style="background:rgba(250,204,21,0.12);"><img src="img_M/logocs2.png" alt=""/></div>',
    '        <div class="skb-mob-gv-ti-info">',
    '          <div class="skb-mob-gv-ti-name">IEM Cologne 2025</div>',
    '          <div class="skb-mob-gv-ti-sub">Cologne · Semi-finals</div>',
    '        </div>',
    '        <span class="skb-mob-tourn-live is-live">Live</span>',
    '      </div>',

    '      <div class="skb-mob-gv-ti">',
    '        <div class="skb-mob-gv-ti-logo" style="background:rgba(250,204,21,0.12);"><img src="img_M/logocs2.png" alt=""/></div>',
    '        <div class="skb-mob-gv-ti-info">',
    '          <div class="skb-mob-gv-ti-name">BLAST Premier Spring</div>',
    '          <div class="skb-mob-gv-ti-sub">Copenhagen · Finals</div>',
    '        </div>',
    '        <span class="skb-mob-tourn-live upcoming">J+2</span>',
    '      </div>',

    '      <div class="skb-mob-gv-ti">',
    '        <div class="skb-mob-gv-ti-logo" style="background:rgba(250,204,21,0.12);"><img src="img_M/logocs2.png" alt=""/></div>',
    '        <div class="skb-mob-gv-ti-info">',
    '          <div class="skb-mob-gv-ti-name">PGL Major 2025</div>',
    '          <div class="skb-mob-gv-ti-sub">Shanghai · Playoffs</div>',
    '        </div>',
    '        <span class="skb-mob-tourn-live upcoming">J+5</span>',
    '      </div>',

    '      <div class="skb-mob-gv-ti">',
    '        <div class="skb-mob-gv-ti-logo" style="background:rgba(250,204,21,0.12);"><img src="img_M/logocs2.png" alt=""/></div>',
    '        <div class="skb-mob-gv-ti-info">',
    '          <div class="skb-mob-gv-ti-name">ESL One Berlin</div>',
    '          <div class="skb-mob-gv-ti-sub">Berlin · Group Stage</div>',
    '        </div>',
    '        <span class="skb-mob-tourn-live upcoming">J+9</span>',
    '      </div>',

    '    </div>',  /* end gv-tlist */

    /* Top Players */
    '    <div class="skb-mob-gv-section-ttl">Top Players</div>',
    '    <div class="skb-mob-players-track" style="padding-bottom:80px;">',

    '      <div class="tp-pc">',
    '        <div class="tp-pc-bg" style="background:linear-gradient(175deg,#1a1400 0%,#2a2000 60%,#3a2e00 100%);"></div>',
    '        <div class="tp-pc-team-badge" style="background:rgba(250,204,21,0.2);border:1px solid rgba(250,204,21,0.5);color:#facc15;">Vitality</div>',
    '        <div class="tp-pc-body">',
    '          <div class="tp-pc-name">ZywOo</div>',
    '          <svg class="tp-pc-avatar" viewBox="0 0 80 88" fill="none">',
    '            <path d="M22 22 C22 17 27 14 32 13 L40 11 L48 13 C53 14 58 17 58 22 L63 42 L54 44 L54 76 L26 76 L26 44 L17 42 Z" fill="#facc15" stroke="#d4a000" stroke-width="1.5"/>',
    '            <path d="M26 13 L26 76 M54 13 L54 76" stroke="#111" stroke-width="4" opacity="0.4"/>',
    '            <path d="M34 11 Q40 14 46 11" stroke="#d4a000" stroke-width="2" fill="none"/>',
    '            <text x="40" y="60" text-anchor="middle" fill="#111" font-size="9" font-weight="900" font-family="Arial">VITALITY</text>',
    '            <path d="M22 22 L17 42 L26 44 L26 30 Z" fill="#facc15" stroke="#d4a000" stroke-width="1"/>',
    '            <path d="M58 22 L63 42 L54 44 L54 30 Z" fill="#facc15" stroke="#d4a000" stroke-width="1"/>',
    '          </svg>',
    '          <div class="tp-pc-role">Star Rifler</div>',
    '        </div>',
    '        <div class="tp-pc-footer" style="background:linear-gradient(90deg,#d4a000,#facc15);color:#111;">',
    '          <div class="tp-pc-footer-label">Highest Rating</div>',
    '          <div class="tp-pc-odd">1.70</div>',
    '        </div>',
    '      </div>',

    '      <div class="tp-pc">',
    '        <div class="tp-pc-bg" style="background:linear-gradient(175deg,#09090f 0%,#0f0c1e 60%,#1a1040 100%);"></div>',
    '        <div class="tp-pc-team-badge" style="background:rgba(245,197,24,0.2);border:1px solid rgba(245,197,24,0.5);color:#f5c518;">NaVi</div>',
    '        <div class="tp-pc-body">',
    '          <div class="tp-pc-name">s1mple</div>',
    '          <svg class="tp-pc-avatar" viewBox="0 0 80 88" fill="none">',
    '            <path d="M22 22 C22 17 27 14 32 13 L40 11 L48 13 C53 14 58 17 58 22 L63 42 L54 44 L54 76 L26 76 L26 44 L17 42 Z" fill="#0a0a0a" stroke="#f5c518" stroke-width="1.5"/>',
    '            <path d="M36 13 L36 76 M44 13 L44 76" stroke="#f5c518" stroke-width="3" opacity="0.7"/>',
    '            <path d="M34 11 Q40 14 46 11" stroke="#f5c518" stroke-width="2" fill="none"/>',
    '            <text x="40" y="60" text-anchor="middle" fill="#f5c518" font-size="11" font-weight="900" font-family="Arial">NaVi</text>',
    '            <path d="M22 22 L17 42 L26 44 L26 30 Z" fill="#111" stroke="#f5c518" stroke-width="1"/>',
    '            <path d="M58 22 L63 42 L54 44 L54 30 Z" fill="#111" stroke="#f5c518" stroke-width="1"/>',
    '          </svg>',
    '          <div class="tp-pc-role">AWPer</div>',
    '        </div>',
    '        <div class="tp-pc-footer" style="background:linear-gradient(90deg,#b8960a,#f5c518);color:#111;">',
    '          <div class="tp-pc-footer-label">Highest Rating</div>',
    '          <div class="tp-pc-odd">2.20</div>',
    '        </div>',
    '      </div>',

    '      <div class="tp-pc">',
    '        <div class="tp-pc-bg" style="background:linear-gradient(175deg,#1a0000 0%,#2e0a0a 60%,#3d1010 100%);"></div>',
    '        <div class="tp-pc-team-badge" style="background:rgba(239,68,68,0.2);border:1px solid rgba(239,68,68,0.5);color:#f87171;">T1</div>',
    '        <div class="tp-pc-body">',
    '          <div class="tp-pc-name">Faker</div>',
    '          <svg class="tp-pc-avatar" viewBox="0 0 80 88" fill="none">',
    '            <path d="M22 22 C22 17 27 14 32 13 L40 11 L48 13 C53 14 58 17 58 22 L63 42 L54 44 L54 76 L26 76 L26 44 L17 42 Z" fill="#cc0000" stroke="#990000" stroke-width="1.5"/>',
    '            <path d="M20 30 L60 30 L60 50 L20 50 Z" fill="#fff" opacity="0.08"/>',
    '            <path d="M34 11 Q40 9 46 11" stroke="#fff" stroke-width="2" fill="none"/>',
    '            <text x="40" y="60" text-anchor="middle" fill="#fff" font-size="11" font-weight="900" font-family="Arial">T1</text>',
    '            <path d="M22 22 L17 42 L26 44 L26 30 Z" fill="#cc0000" stroke="#990000" stroke-width="1"/>',
    '            <path d="M58 22 L63 42 L54 44 L54 30 Z" fill="#cc0000" stroke="#990000" stroke-width="1"/>',
    '          </svg>',
    '          <div class="tp-pc-role">Mid Lane</div>',
    '        </div>',
    '        <div class="tp-pc-footer" style="background:linear-gradient(90deg,#990000,#ef4444);color:#fff;">',
    '          <div class="tp-pc-footer-label">Highest Rating</div>',
    '          <div class="tp-pc-odd">1.55</div>',
    '        </div>',
    '      </div>',

    '      <div class="tp-pc">',
    '        <div class="tp-pc-bg" style="background:linear-gradient(175deg,#0e0e0e 0%,#1a1a1a 60%,#252525 100%);"></div>',
    '        <div class="tp-pc-team-badge" style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.35);color:#fff;">G2</div>',
    '        <div class="tp-pc-body">',
    '          <div class="tp-pc-name">Caps</div>',
    '          <svg class="tp-pc-avatar" viewBox="0 0 80 88" fill="none">',
    '            <path d="M22 22 C22 17 27 14 32 13 L40 11 L48 13 C53 14 58 17 58 22 L63 42 L54 44 L54 76 L26 76 L26 44 L17 42 Z" fill="#1a1a1a" stroke="#e53935" stroke-width="1.5"/>',
    '            <path d="M22 22 L58 55" stroke="#e53935" stroke-width="7" opacity="0.5" stroke-linecap="round"/>',
    '            <path d="M34 11 Q40 9 46 11" stroke="#e53935" stroke-width="2" fill="none"/>',
    '            <text x="40" y="60" text-anchor="middle" fill="#fff" font-size="11" font-weight="900" font-family="Arial">G2</text>',
    '            <path d="M22 22 L17 42 L26 44 L26 30 Z" fill="#1a1a1a" stroke="#e53935" stroke-width="1"/>',
    '            <path d="M58 22 L63 42 L54 44 L54 30 Z" fill="#1a1a1a" stroke="#e53935" stroke-width="1"/>',
    '          </svg>',
    '          <div class="tp-pc-role">Mid Lane</div>',
    '        </div>',
    '        <div class="tp-pc-footer" style="background:linear-gradient(90deg,#111,#333);color:#fff;">',
    '          <div class="tp-pc-footer-label">Highest Rating</div>',
    '          <div class="tp-pc-odd">2.80</div>',
    '        </div>',
    '      </div>',

    '      <div class="tp-pc">',
    '        <div class="tp-pc-bg" style="background:linear-gradient(175deg,#060a18 0%,#0a1030 60%,#0e1540 100%);"></div>',
    '        <div class="tp-pc-team-badge" style="background:rgba(56,130,246,0.2);border:1px solid rgba(56,130,246,0.5);color:#60a5fa;">Spirit</div>',
    '        <div class="tp-pc-body">',
    '          <div class="tp-pc-name">TORONTO<br>TOKYO</div>',
    '          <svg class="tp-pc-avatar" viewBox="0 0 80 88" fill="none">',
    '            <path d="M22 22 C22 17 27 14 32 13 L40 11 L48 13 C53 14 58 17 58 22 L63 42 L54 44 L54 76 L26 76 L26 44 L17 42 Z" fill="#0d1a3a" stroke="#3882f6" stroke-width="1.5"/>',
    '            <path d="M22 22 L58 55" stroke="#3882f6" stroke-width="8" opacity="0.5" stroke-linecap="round"/>',
    '            <path d="M22 22 L58 55" stroke="#60a5fa" stroke-width="3" opacity="0.7" stroke-linecap="round"/>',
    '            <path d="M34 11 Q40 9 46 11" stroke="#3882f6" stroke-width="2" fill="none"/>',
    '            <text x="40" y="62" text-anchor="middle" fill="#93c5fd" font-size="9" font-weight="900" font-family="Arial">SPIRIT</text>',
    '            <path d="M22 22 L17 42 L26 44 L26 30 Z" fill="#0d1a3a" stroke="#3882f6" stroke-width="1"/>',
    '            <path d="M58 22 L63 42 L54 44 L54 30 Z" fill="#0d1a3a" stroke="#3882f6" stroke-width="1"/>',
    '          </svg>',
    '          <div class="tp-pc-role">Carry</div>',
    '        </div>',
    '        <div class="tp-pc-footer" style="background:linear-gradient(90deg,#1d4ed8,#3882f6);color:#fff;">',
    '          <div class="tp-pc-footer-label">Highest Rating</div>',
    '          <div class="tp-pc-odd">3.20</div>',
    '        </div>',
    '      </div>',

    '    </div>',  /* end players track */

    /* Other Matches */
    '    <div class="skb-mob-gv-section-ttl" style="margin-top:20px;">Other Matches</div>',
    '    <div class="skb-mob-gv-other-matches" id="skbOtherMatches"></div>',

    '  </div>',   /* end game view */

    /* ── Not Yet Available view ── */
    '  <div class="skb-mob-nya-view" id="skbNyaView">',
    '    <div class="skb-mob-nya-title">Not Yet Available</div>',
    '    <div class="skb-mob-nya-sub">Coming soon</div>',
    '  </div>',

    /* ── Bracket view ── */
    '  <div class="skb-mob-bracket-view">',

    /* top bar */
    '    <div class="skb-mob-bk-topbar">',
    '      <button class="skb-mob-bk-back">&#8592;</button>',
    '      <div class="skb-mob-bk-title">ESL Pro League S21</div>',
    '    </div>',

    /* format switcher */
    '    <div class="skb-mob-bk-fmtbar">',
    '      <button class="skb-mob-bk-fmt active" data-bkfmt="se">Single Elim.</button>',
    '      <button class="skb-mob-bk-fmt" data-bkfmt="de">Double Elim.</button>',
    '      <button class="skb-mob-bk-fmt" data-bkfmt="swiss">Swiss</button>',
    '    </div>',

    /* ══ SE Panel ══ */
    '    <div id="skbBkSE">',

    /* playoffs tag */
    '      <div class="skb-mob-bk-phdr">',
    '        <span class="skb-mob-bk-ptag">PLAYOFFS</span>',
    '        <span class="skb-mob-bk-psub">Single Elimination · ESL Pro League S21</span>',
    '      </div>',

    /* ── Bracket tree (SE) — JS draws bezier connectors dynamically ── */
    '      <div class="skb-mob-bk-tree-wrap">',
    '        <div class="skb-mob-bk-tree" id="skbSeTree" style="width:382px;height:310px;">',

    /* Dynamic SVG — JS will fill this with cubic bezier paths */
    '          <svg id="skbSeSvg" style="position:absolute;top:0;left:0;width:382px;height:310px;pointer-events:none;overflow:visible;z-index:2;"></svg>',

    /* QF column */
    '          <div class="skb-mob-bk-col" style="width:110px;">',
    '            <div class="skb-mob-bk-col-label">QUARTER-FINALS</div>',
    '            <div class="skb-mob-bk-col-matches">',

    '              <div class="skb-mob-bk-slot" id="skbSeQf1">',
    '                <div class="skb-mob-bk-mini" style="width:110px;">',
    '                  <div class="skb-mob-bk-mini-h"><span class="skb-mob-bk-mini-st fin">FINAL</span><span class="skb-mob-bk-mini-bo">BO3</span></div>',
    '                  <div class="skb-mob-bk-mini-t win"><img class="skb-mob-bk-mini-tl" src="img_M/NAVI_Logo_2020.png"/><span class="skb-mob-bk-mini-tn">NAVI</span><span class="skb-mob-bk-mini-sc w">2</span></div>',
    '                  <div class="skb-mob-bk-mini-t los"><img class="skb-mob-bk-mini-tl" src="img_M/astralis.svg"/><span class="skb-mob-bk-mini-tn">Astralis</span><span class="skb-mob-bk-mini-sc">0</span></div>',
    '                </div>',
    '              </div>',

    '              <div class="skb-mob-bk-slot" id="skbSeQf2">',
    '                <div class="skb-mob-bk-mini" style="width:110px;">',
    '                  <div class="skb-mob-bk-mini-h"><span class="skb-mob-bk-mini-st fin">FINAL</span><span class="skb-mob-bk-mini-bo">BO3</span></div>',
    '                  <div class="skb-mob-bk-mini-t win"><img class="skb-mob-bk-mini-tl" src="img_M/G2.webp"/><span class="skb-mob-bk-mini-tn">G2</span><span class="skb-mob-bk-mini-sc w">2</span></div>',
    '                  <div class="skb-mob-bk-mini-t los"><img class="skb-mob-bk-mini-tl" src="img_M/OG_Logo.png"/><span class="skb-mob-bk-mini-tn">OG</span><span class="skb-mob-bk-mini-sc">1</span></div>',
    '                </div>',
    '              </div>',

    '              <div class="skb-mob-bk-slot" id="skbSeQf3">',
    '                <div class="skb-mob-bk-mini" style="width:110px;">',
    '                  <div class="skb-mob-bk-mini-h"><span class="skb-mob-bk-mini-st fin">FINAL</span><span class="skb-mob-bk-mini-bo">BO3</span></div>',
    '                  <div class="skb-mob-bk-mini-t win"><img class="skb-mob-bk-mini-tl" src="img_M/mouz.svg"/><span class="skb-mob-bk-mini-tn">MOUZ</span><span class="skb-mob-bk-mini-sc w">2</span></div>',
    '                  <div class="skb-mob-bk-mini-t los"><img class="skb-mob-bk-mini-tl" src="img_M/pain.webp"/><span class="skb-mob-bk-mini-tn">Gen.G</span><span class="skb-mob-bk-mini-sc">0</span></div>',
    '                </div>',
    '              </div>',

    '              <div class="skb-mob-bk-slot" id="skbSeQf4">',
    '                <div class="skb-mob-bk-mini" style="width:110px;">',
    '                  <div class="skb-mob-bk-mini-h"><span class="skb-mob-bk-mini-st fin">FINAL</span><span class="skb-mob-bk-mini-bo">BO3</span></div>',
    '                  <div class="skb-mob-bk-mini-t win"><img class="skb-mob-bk-mini-tl" src="img_M/vita.webp"/><span class="skb-mob-bk-mini-tn">Vitality</span><span class="skb-mob-bk-mini-sc w">2</span></div>',
    '                  <div class="skb-mob-bk-mini-t los"><img class="skb-mob-bk-mini-tl" src="img_M/M8.webp"/><span class="skb-mob-bk-mini-tn">M8</span><span class="skb-mob-bk-mini-sc">1</span></div>',
    '                </div>',
    '              </div>',

    '            </div>',
    '          </div>',   /* end QF col */

    '          <div class="skb-mob-bk-gap" style="width:24px;"></div>',

    /* SF column */
    '          <div class="skb-mob-bk-col" style="width:110px;">',
    '            <div class="skb-mob-bk-col-label">SEMI-FINALS</div>',
    '            <div class="skb-mob-bk-col-matches">',

    '              <div class="skb-mob-bk-slot" id="skbSeSf1">',
    '                <div class="skb-mob-bk-mini" style="width:110px;">',
    '                  <div class="skb-mob-bk-mini-h"><span class="skb-mob-bk-mini-st fin">FINAL</span><span class="skb-mob-bk-mini-bo">BO3</span></div>',
    '                  <div class="skb-mob-bk-mini-t win"><img class="skb-mob-bk-mini-tl" src="img_M/NAVI_Logo_2020.png"/><span class="skb-mob-bk-mini-tn">NAVI</span><span class="skb-mob-bk-mini-sc w">2</span></div>',
    '                  <div class="skb-mob-bk-mini-t los"><img class="skb-mob-bk-mini-tl" src="img_M/G2.webp"/><span class="skb-mob-bk-mini-tn">G2</span><span class="skb-mob-bk-mini-sc">1</span></div>',
    '                </div>',
    '              </div>',

    '              <div class="skb-mob-bk-slot" id="skbSeSf2">',
    '                <div class="skb-mob-bk-mini mlive" style="width:110px;">',
    '                  <div class="skb-mob-bk-mini-h"><span class="skb-mob-bk-mini-st lv"><span class="skb-mob-bk-mini-ld"></span>LIVE</span><span class="skb-mob-bk-mini-bo">BO3</span></div>',
    '                  <div class="skb-mob-bk-mini-t win"><img class="skb-mob-bk-mini-tl" src="img_M/mouz.svg"/><span class="skb-mob-bk-mini-tn">MOUZ</span><span class="skb-mob-bk-mini-sc w">1</span></div>',
    '                  <div class="skb-mob-bk-mini-t"><img class="skb-mob-bk-mini-tl" src="img_M/vita.webp"/><span class="skb-mob-bk-mini-tn">Vitality</span><span class="skb-mob-bk-mini-sc">0</span></div>',
    '                </div>',
    '              </div>',

    '            </div>',
    '          </div>',   /* end SF col */

    '          <div class="skb-mob-bk-gap" style="width:24px;"></div>',

    /* GF column */
    '          <div class="skb-mob-bk-col" style="width:110px;">',
    '            <div class="skb-mob-bk-col-label">GRAND FINAL</div>',
    '            <div class="skb-mob-bk-col-matches">',

    '              <div class="skb-mob-bk-slot" id="skbSeGf">',
    '                <div class="skb-mob-bk-mini mgf mup" style="width:110px;">',
    '                  <div class="skb-mob-bk-mini-h"><span class="skb-mob-bk-mini-st up">UPCOMING</span><span class="skb-mob-bk-mini-bo">BO5&#127942;</span></div>',
    '                  <div class="skb-mob-bk-mini-t"><img class="skb-mob-bk-mini-tl" src="img_M/NAVI_Logo_2020.png"/><span class="skb-mob-bk-mini-tn">NAVI</span><span class="skb-mob-bk-mini-sc">—</span></div>',
    '                  <div class="skb-mob-bk-mini-t"><span style="width:13px;height:13px;border-radius:50%;border:1px dashed rgba(168,85,247,0.4);display:inline-flex;align-items:center;justify-content:center;font-size:5px;color:rgba(168,85,247,0.5);flex-shrink:0;"></span><span class="skb-mob-bk-mini-tn" style="color:rgba(255,255,255,0.28);font-style:italic;">TBD</span><span class="skb-mob-bk-mini-sc">—</span></div>',
    '                </div>',
    '              </div>',

    '            </div>',
    '          </div>',   /* end GF col */

    '        </div>',   /* end .skb-mob-bk-tree */
    '      </div>',    /* end .skb-mob-bk-tree-wrap */

    /* ── Prize Pool ── */
    '      <div class="skb-mob-bk-pp">',
    '        <div class="skb-mob-bk-pp-hdr">',
    '          <span class="skb-mob-bk-pp-ttl">Prize Pool</span>',
    '          <span class="skb-mob-bk-pp-total">$1,000,000</span>',
    '        </div>',
    '        <div class="skb-mob-bk-podium">',
    '          <div class="skb-mob-bk-pod p2"><div class="skb-mob-bk-pod-med">🥈</div><div class="skb-mob-bk-pod-pl">2ND PLACE</div><div class="skb-mob-bk-pod-amt">$200,000</div><div class="skb-mob-bk-pod-tm">TBD</div></div>',
    '          <div class="skb-mob-bk-pod p1"><div class="skb-mob-bk-pod-med">🥇</div><div class="skb-mob-bk-pod-pl">1ST PLACE</div><div class="skb-mob-bk-pod-amt">$400,000</div><div class="skb-mob-bk-pod-tm">TBD</div></div>',
    '          <div class="skb-mob-bk-pod p3"><div class="skb-mob-bk-pod-med">🥉</div><div class="skb-mob-bk-pod-pl">3RD PLACE</div><div class="skb-mob-bk-pod-amt">$80,000</div><div class="skb-mob-bk-pod-tm">G2 Esports</div></div>',
    '        </div>',
    '        <div class="skb-mob-bk-pp-rows">',
    '          <div class="skb-mob-bk-pp-row"><span class="skb-mob-bk-pp-place">4TH</span><span class="skb-mob-bk-pp-team">TBD</span><span class="skb-mob-bk-pp-amt">$80,000</span></div>',
    '          <div class="skb-mob-bk-pp-row"><span class="skb-mob-bk-pp-place">5TH</span><span class="skb-mob-bk-pp-team">Team Liquid</span><span class="skb-mob-bk-pp-amt">$30,000</span></div>',
    '          <div class="skb-mob-bk-pp-row"><span class="skb-mob-bk-pp-place">6TH</span><span class="skb-mob-bk-pp-team">Fnatic</span><span class="skb-mob-bk-pp-amt">$30,000</span></div>',
    '          <div class="skb-mob-bk-pp-row"><span class="skb-mob-bk-pp-place">7TH</span><span class="skb-mob-bk-pp-team">Cloud9</span><span class="skb-mob-bk-pp-amt">$30,000</span></div>',
    '          <div class="skb-mob-bk-pp-row"><span class="skb-mob-bk-pp-place">8TH</span><span class="skb-mob-bk-pp-team">Ninjas in P.</span><span class="skb-mob-bk-pp-amt">$30,000</span></div>',
    '        </div>',
    '      </div>',   /* end prize pool */

    /* ── Participating Teams ── */
    '      <div class="skb-mob-bk-tm-hdr">PARTICIPATING TEAMS</div>',
    '      <div class="skb-mob-bk-tgrid">',
    '        <div class="skb-mob-bk-tc"><div class="skb-mob-bk-tc-seed">#1</div><img class="skb-mob-bk-tc-img" src="img_M/vita.webp"/><div class="skb-mob-bk-tc-name">Vitality</div><div class="skb-mob-bk-tc-rank">HLTV #1</div></div>',
    '        <div class="skb-mob-bk-tc"><div class="skb-mob-bk-tc-seed">#2</div><img class="skb-mob-bk-tc-img" src="img_M/NAVI_Logo_2020.png"/><div class="skb-mob-bk-tc-name">NAVI</div><div class="skb-mob-bk-tc-rank">HLTV #3</div></div>',
    '        <div class="skb-mob-bk-tc"><div class="skb-mob-bk-tc-seed">#3</div><img class="skb-mob-bk-tc-img" src="img_M/fut.webp"/><div class="skb-mob-bk-tc-name">FaZe Clan</div><div class="skb-mob-bk-tc-rank">HLTV #2</div></div>',
    '        <div class="skb-mob-bk-tc"><div class="skb-mob-bk-tc-seed">#4</div><img class="skb-mob-bk-tc-img" src="img_M/spirit.png" style="filter:invert(1);"/><div class="skb-mob-bk-tc-name">T. Spirit</div><div class="skb-mob-bk-tc-rank">HLTV #4</div></div>',
    '        <div class="skb-mob-bk-tc"><div class="skb-mob-bk-tc-seed">#5</div><img class="skb-mob-bk-tc-img" src="img_M/G2.webp"/><div class="skb-mob-bk-tc-name">G2 Esports</div><div class="skb-mob-bk-tc-rank">HLTV #5</div></div>',
    '        <div class="skb-mob-bk-tc"><div class="skb-mob-bk-tc-seed">#6</div><img class="skb-mob-bk-tc-img" src="img_M/mouz.svg"/><div class="skb-mob-bk-tc-name">MOUZ</div><div class="skb-mob-bk-tc-rank">HLTV #6</div></div>',
    '        <div class="skb-mob-bk-tc"><div class="skb-mob-bk-tc-seed">#7</div><img class="skb-mob-bk-tc-img" src="img_M/astralis.svg"/><div class="skb-mob-bk-tc-name">Astralis</div><div class="skb-mob-bk-tc-rank">HLTV #8</div></div>',
    '        <div class="skb-mob-bk-tc"><div class="skb-mob-bk-tc-seed">#8</div><img class="skb-mob-bk-tc-img" src="img_M/fut.webp"/><div class="skb-mob-bk-tc-name">FUT Esports</div><div class="skb-mob-bk-tc-rank">HLTV #18</div></div>',
    '        <div class="skb-mob-bk-tc"><div class="skb-mob-bk-tc-seed">#9</div><img class="skb-mob-bk-tc-img" src="img_M/aurora.webp"/><div class="skb-mob-bk-tc-name">Heroic</div><div class="skb-mob-bk-tc-rank">HLTV #9</div></div>',
    '        <div class="skb-mob-bk-tc"><div class="skb-mob-bk-tc-seed">#10</div><img class="skb-mob-bk-tc-img" src="img_M/falcon.webp"/><div class="skb-mob-bk-tc-name">Falcons</div><div class="skb-mob-bk-tc-rank">HLTV #10</div></div>',
    '        <div class="skb-mob-bk-tc"><div class="skb-mob-bk-tc-seed">#11</div><img class="skb-mob-bk-tc-img" src="img_M/legacy.webp"/><div class="skb-mob-bk-tc-name">GamerLegion</div><div class="skb-mob-bk-tc-rank">HLTV #11</div></div>',
    '        <div class="skb-mob-bk-tc"><div class="skb-mob-bk-tc-seed">#12</div><img class="skb-mob-bk-tc-img" src="img_M/mouz.svg"/><div class="skb-mob-bk-tc-name">Fnatic</div><div class="skb-mob-bk-tc-rank">HLTV #13</div></div>',
    '        <div class="skb-mob-bk-tc"><div class="skb-mob-bk-tc-seed">#13</div><img class="skb-mob-bk-tc-img" src="img_M/M8.webp"/><div class="skb-mob-bk-tc-name">BIG</div><div class="skb-mob-bk-tc-rank">HLTV #15</div></div>',
    '        <div class="skb-mob-bk-tc"><div class="skb-mob-bk-tc-seed">#14</div><img class="skb-mob-bk-tc-img" src="img_M/furia.svg"/><div class="skb-mob-bk-tc-name">Ninjas in P.</div><div class="skb-mob-bk-tc-rank">HLTV #14</div></div>',
    '        <div class="skb-mob-bk-tc"><div class="skb-mob-bk-tc-seed">#15</div><img class="skb-mob-bk-tc-img" src="img_M/pain.webp"/><div class="skb-mob-bk-tc-name">paiN Gaming</div><div class="skb-mob-bk-tc-rank">HLTV #20</div></div>',
    '        <div class="skb-mob-bk-tc"><div class="skb-mob-bk-tc-seed">#16</div><img class="skb-mob-bk-tc-img" src="img_M/monte.webp"/><div class="skb-mob-bk-tc-name">Monte</div><div class="skb-mob-bk-tc-rank">HLTV #16</div></div>',
    '      </div>',

    '    </div>',   /* end SE panel */

    /* ══ DE Panel ══ */
    '    <div id="skbBkDE" style="display:none;">',

    /* UB label */
    '      <div class="skb-mob-bk-de-sec">',
    '        <div class="skb-mob-bk-de-lbl-ub">▲ Upper Bracket</div>',
    '      </div>',

    /* UB tree */
    '      <div class="skb-mob-bk-tree-wrap">',
    '        <div class="skb-mob-bk-tree" style="height:300px;">',

    /* SVG connectors for UB (80px cols, 16px gaps, 280px matches area, label=20px) */
    /* R1 centers: 35,105,175,245 / R2 centers: 70,210 / R3 center: 140 */
    '          <svg style="position:absolute;top:20px;left:0;width:272px;height:280px;pointer-events:none;overflow:visible;" viewBox="0 0 272 280">',
    '            <path d="M 80,35 H 88 M 80,105 H 88 M 88,35 V 105 M 88,70 H 96" stroke="rgba(168,85,247,0.55)" stroke-width="1.5" fill="none"/>',
    '            <path d="M 80,175 H 88 M 80,245 H 88 M 88,175 V 245 M 88,210 H 96" stroke="rgba(168,85,247,0.55)" stroke-width="1.5" fill="none"/>',
    '            <path d="M 176,70 H 184 M 176,210 H 184 M 184,70 V 210 M 184,140 H 192" stroke="rgba(168,85,247,0.4)" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>',
    '          </svg>',

    /* R1 column */
    '          <div class="skb-mob-bk-col" style="width:80px;">',
    '            <div class="skb-mob-bk-col-label">ROUND 1</div>',
    '            <div class="skb-mob-bk-col-matches">',
    '              <div class="skb-mob-bk-slot"><div class="skb-mob-bk-mini" style="width:80px;"><div class="skb-mob-bk-mini-h"><span class="skb-mob-bk-mini-st fin">FINAL</span><span class="skb-mob-bk-mini-bo">BO3</span></div><div class="skb-mob-bk-mini-t win"><img class="skb-mob-bk-mini-tl" src="img_M/logoT1.png"/><span class="skb-mob-bk-mini-tn">T1</span><span class="skb-mob-bk-mini-sc w">2</span></div><div class="skb-mob-bk-mini-t los"><img class="skb-mob-bk-mini-tl" src="img_M/spirit.png" style="filter:invert(1);"/><span class="skb-mob-bk-mini-tn">Spirit</span><span class="skb-mob-bk-mini-sc">0</span></div></div></div>',
    '              <div class="skb-mob-bk-slot"><div class="skb-mob-bk-mini" style="width:80px;"><div class="skb-mob-bk-mini-h"><span class="skb-mob-bk-mini-st fin">FINAL</span><span class="skb-mob-bk-mini-bo">BO3</span></div><div class="skb-mob-bk-mini-t win"><img class="skb-mob-bk-mini-tl" src="img_M/OG_Logo.png"/><span class="skb-mob-bk-mini-tn">OG</span><span class="skb-mob-bk-mini-sc w">2</span></div><div class="skb-mob-bk-mini-t los"><img class="skb-mob-bk-mini-tl" src="img_M/gen g logo.png"/><span class="skb-mob-bk-mini-tn">Gen.G</span><span class="skb-mob-bk-mini-sc">1</span></div></div></div>',
    '              <div class="skb-mob-bk-slot"><div class="skb-mob-bk-mini" style="width:80px;"><div class="skb-mob-bk-mini-h"><span class="skb-mob-bk-mini-st fin">FINAL</span><span class="skb-mob-bk-mini-bo">BO3</span></div><div class="skb-mob-bk-mini-t win"><img class="skb-mob-bk-mini-tl" src="img_M/falcon.webp"/><span class="skb-mob-bk-mini-tn">Falcon</span><span class="skb-mob-bk-mini-sc w">2</span></div><div class="skb-mob-bk-mini-t los"><img class="skb-mob-bk-mini-tl" src="img_M/aurora.webp"/><span class="skb-mob-bk-mini-tn">Aurora</span><span class="skb-mob-bk-mini-sc">0</span></div></div></div>',
    '              <div class="skb-mob-bk-slot"><div class="skb-mob-bk-mini" style="width:80px;"><div class="skb-mob-bk-mini-h"><span class="skb-mob-bk-mini-st fin">FINAL</span><span class="skb-mob-bk-mini-bo">BO3</span></div><div class="skb-mob-bk-mini-t win"><img class="skb-mob-bk-mini-tl" src="img_M/Mongolz.webp"/><span class="skb-mob-bk-mini-tn">Mongolz</span><span class="skb-mob-bk-mini-sc w">2</span></div><div class="skb-mob-bk-mini-t los"><img class="skb-mob-bk-mini-tl" src="img_M/furia.svg"/><span class="skb-mob-bk-mini-tn">FURIA</span><span class="skb-mob-bk-mini-sc">1</span></div></div></div>',
    '            </div>',
    '          </div>',

    '          <div class="skb-mob-bk-gap" style="width:16px;"></div>',

    /* R2 column */
    '          <div class="skb-mob-bk-col" style="width:80px;">',
    '            <div class="skb-mob-bk-col-label">ROUND 2</div>',
    '            <div class="skb-mob-bk-col-matches">',
    '              <div class="skb-mob-bk-slot"><div class="skb-mob-bk-mini" style="width:80px;"><div class="skb-mob-bk-mini-h"><span class="skb-mob-bk-mini-st fin">FINAL</span><span class="skb-mob-bk-mini-bo">BO3</span></div><div class="skb-mob-bk-mini-t win"><img class="skb-mob-bk-mini-tl" src="img_M/logoT1.png"/><span class="skb-mob-bk-mini-tn">T1</span><span class="skb-mob-bk-mini-sc w">2</span></div><div class="skb-mob-bk-mini-t los"><img class="skb-mob-bk-mini-tl" src="img_M/Mongolz.webp"/><span class="skb-mob-bk-mini-tn">Mongolz</span><span class="skb-mob-bk-mini-sc">1</span></div></div></div>',
    '              <div class="skb-mob-bk-slot"><div class="skb-mob-bk-mini" style="width:80px;"><div class="skb-mob-bk-mini-h"><span class="skb-mob-bk-mini-st fin">FINAL</span><span class="skb-mob-bk-mini-bo">BO3</span></div><div class="skb-mob-bk-mini-t win"><img class="skb-mob-bk-mini-tl" src="img_M/OG_Logo.png"/><span class="skb-mob-bk-mini-tn">OG</span><span class="skb-mob-bk-mini-sc w">2</span></div><div class="skb-mob-bk-mini-t los"><img class="skb-mob-bk-mini-tl" src="img_M/falcon.webp"/><span class="skb-mob-bk-mini-tn">Falcon</span><span class="skb-mob-bk-mini-sc">0</span></div></div></div>',
    '            </div>',
    '          </div>',

    '          <div class="skb-mob-bk-gap" style="width:16px;"></div>',

    /* UB Final column */
    '          <div class="skb-mob-bk-col" style="width:80px;">',
    '            <div class="skb-mob-bk-col-label">UB FINAL</div>',
    '            <div class="skb-mob-bk-col-matches">',
    '              <div class="skb-mob-bk-slot"><div class="skb-mob-bk-mini mup" style="width:80px;"><div class="skb-mob-bk-mini-h"><span class="skb-mob-bk-mini-st up">UPCOMING</span><span class="skb-mob-bk-mini-bo">BO3</span></div><div class="skb-mob-bk-mini-t"><img class="skb-mob-bk-mini-tl" src="img_M/logoT1.png"/><span class="skb-mob-bk-mini-tn">T1</span><span class="skb-mob-bk-mini-sc">—</span></div><div class="skb-mob-bk-mini-t"><img class="skb-mob-bk-mini-tl" src="img_M/OG_Logo.png"/><span class="skb-mob-bk-mini-tn">OG</span><span class="skb-mob-bk-mini-sc">—</span></div><div class="skb-mob-bk-mini-odds"><div class="skb-mob-bk-mini-odd"><span class="skb-mob-bk-mini-odd-lbl">T1</span><span class="skb-mob-bk-mini-odd-val">1.65</span></div><div class="skb-mob-bk-mini-odd"><span class="skb-mob-bk-mini-odd-lbl">OG</span><span class="skb-mob-bk-mini-odd-val">2.30</span></div></div></div></div>',
    '            </div>',
    '          </div>',

    '        </div>',   /* end UB tree */
    '      </div>',

    /* Grand Finals */
    '      <div class="skb-mob-bk-de-gf">',
    '        <div class="skb-mob-bk-de-gf-title">🏆 Grand Finals <span style="font-size:6px;font-weight:700;letter-spacing:1px;color:rgba(255,255,255,0.25);margin-left:4px;">UPCOMING · BO5</span></div>',
    '        <div class="skb-mob-bk-de-gf-row">',
    '          <span class="skb-mob-bk-de-gf-slot">UB Winner</span>',
    '          <div class="skb-mob-bk-de-gf-team"><span style="width:14px;height:14px;border-radius:50%;border:1px dashed rgba(168,85,247,0.35);display:inline-flex;align-items:center;justify-content:center;font-size:5px;color:rgba(168,85,247,0.4);flex-shrink:0;"></span><span class="skb-mob-bk-de-gf-name">TBD</span></div>',
    '          <span class="skb-mob-bk-de-adv">1 match ahead</span>',
    '        </div>',
    '        <div class="skb-mob-bk-de-gf-row">',
    '          <span class="skb-mob-bk-de-gf-slot">LB Winner</span>',
    '          <div class="skb-mob-bk-de-gf-team"><span style="width:14px;height:14px;border-radius:50%;border:1px dashed rgba(168,85,247,0.35);display:inline-flex;align-items:center;justify-content:center;font-size:5px;color:rgba(168,85,247,0.4);flex-shrink:0;"></span><span class="skb-mob-bk-de-gf-name">TBD</span></div>',
    '        </div>',
    '      </div>',

    /* LB label */
    '      <div class="skb-mob-bk-de-sec">',
    '        <div class="skb-mob-bk-de-lbl-lb">▼ Lower Bracket</div>',
    '      </div>',

    /* LB tree */
    '      <div class="skb-mob-bk-tree-wrap">',
    '        <div class="skb-mob-bk-tree" style="height:240px;">',

    /* SVG connectors for LB (80px cols, 16px gaps, 220px matches area, label=20px) */
    /* LBR1 centers: 55,165 / LBR2 centers: 55,165 (direct) / LBFinal center: 110 */
    '          <svg style="position:absolute;top:20px;left:0;width:272px;height:220px;pointer-events:none;overflow:visible;" viewBox="0 0 272 220">',
    '            <path d="M 80,55 H 96 M 80,165 H 96" stroke="rgba(239,68,68,0.45)" stroke-width="1.5" fill="none"/>',
    '            <path d="M 176,55 H 184 M 176,165 H 184 M 184,55 V 165 M 184,110 H 192" stroke="rgba(239,68,68,0.4)" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>',
    '          </svg>',

    /* LBR1 column */
    '          <div class="skb-mob-bk-col" style="width:80px;">',
    '            <div class="skb-mob-bk-col-label" style="color:rgba(239,68,68,0.65);">LB ROUND 1</div>',
    '            <div class="skb-mob-bk-col-matches">',
    '              <div class="skb-mob-bk-slot"><div class="skb-mob-bk-mini" style="width:80px;background:rgba(4,6,20,0.72);border-color:rgba(96,130,210,0.16);"><div class="skb-mob-bk-mini-h"><span class="skb-mob-bk-mini-st fin">FINAL</span><span class="skb-mob-bk-mini-bo">BO3</span></div><div class="skb-mob-bk-mini-t win"><img class="skb-mob-bk-mini-tl" src="img_M/spirit.png" style="filter:invert(1);"/><span class="skb-mob-bk-mini-tn">Spirit</span><span class="skb-mob-bk-mini-sc w">2</span></div><div class="skb-mob-bk-mini-t los"><img class="skb-mob-bk-mini-tl" src="img_M/aurora.webp"/><span class="skb-mob-bk-mini-tn">Aurora</span><span class="skb-mob-bk-mini-sc">1</span></div></div></div>',
    '              <div class="skb-mob-bk-slot"><div class="skb-mob-bk-mini" style="width:80px;background:rgba(4,6,20,0.72);border-color:rgba(96,130,210,0.16);"><div class="skb-mob-bk-mini-h"><span class="skb-mob-bk-mini-st fin">FINAL</span><span class="skb-mob-bk-mini-bo">BO3</span></div><div class="skb-mob-bk-mini-t win"><img class="skb-mob-bk-mini-tl" src="img_M/gen g logo.png"/><span class="skb-mob-bk-mini-tn">Gen.G</span><span class="skb-mob-bk-mini-sc w">2</span></div><div class="skb-mob-bk-mini-t los"><img class="skb-mob-bk-mini-tl" src="img_M/furia.svg"/><span class="skb-mob-bk-mini-tn">FURIA</span><span class="skb-mob-bk-mini-sc">0</span></div></div></div>',
    '            </div>',
    '          </div>',

    '          <div class="skb-mob-bk-gap" style="width:16px;"></div>',

    /* LBR2 column */
    '          <div class="skb-mob-bk-col" style="width:80px;">',
    '            <div class="skb-mob-bk-col-label" style="color:rgba(239,68,68,0.65);">LB ROUND 2</div>',
    '            <div class="skb-mob-bk-col-matches">',
    '              <div class="skb-mob-bk-slot"><div class="skb-mob-bk-mini" style="width:80px;background:rgba(4,6,20,0.72);border-color:rgba(96,130,210,0.16);"><div class="skb-mob-bk-mini-h"><span class="skb-mob-bk-mini-st fin">FINAL</span><span class="skb-mob-bk-mini-bo">BO3</span></div><div class="skb-mob-bk-mini-t win"><img class="skb-mob-bk-mini-tl" src="img_M/spirit.png" style="filter:invert(1);"/><span class="skb-mob-bk-mini-tn">Spirit</span><span class="skb-mob-bk-mini-sc w">2</span></div><div class="skb-mob-bk-mini-t los"><img class="skb-mob-bk-mini-tl" src="img_M/Mongolz.webp"/><span class="skb-mob-bk-mini-tn">Mongolz</span><span class="skb-mob-bk-mini-sc">1</span></div></div></div>',
    '              <div class="skb-mob-bk-slot"><div class="skb-mob-bk-mini" style="width:80px;background:rgba(4,6,20,0.72);border-color:rgba(96,130,210,0.16);"><div class="skb-mob-bk-mini-h"><span class="skb-mob-bk-mini-st fin">FINAL</span><span class="skb-mob-bk-mini-bo">BO3</span></div><div class="skb-mob-bk-mini-t win"><img class="skb-mob-bk-mini-tl" src="img_M/gen g logo.png"/><span class="skb-mob-bk-mini-tn">Gen.G</span><span class="skb-mob-bk-mini-sc w">2</span></div><div class="skb-mob-bk-mini-t los"><img class="skb-mob-bk-mini-tl" src="img_M/falcon.webp"/><span class="skb-mob-bk-mini-tn">Falcon</span><span class="skb-mob-bk-mini-sc">0</span></div></div></div>',
    '            </div>',
    '          </div>',

    '          <div class="skb-mob-bk-gap" style="width:16px;"></div>',

    /* LB Final column */
    '          <div class="skb-mob-bk-col" style="width:80px;">',
    '            <div class="skb-mob-bk-col-label" style="color:rgba(239,68,68,0.65);">LB FINAL</div>',
    '            <div class="skb-mob-bk-col-matches">',
    '              <div class="skb-mob-bk-slot"><div class="skb-mob-bk-mini mup" style="width:80px;background:rgba(4,6,20,0.72);border-color:rgba(96,130,210,0.2);"><div class="skb-mob-bk-mini-h"><span class="skb-mob-bk-mini-st up">UPCOMING</span><span class="skb-mob-bk-mini-bo">BO3</span></div><div class="skb-mob-bk-mini-t"><img class="skb-mob-bk-mini-tl" src="img_M/spirit.png" style="filter:invert(1);"/><span class="skb-mob-bk-mini-tn">Spirit</span><span class="skb-mob-bk-mini-sc">—</span></div><div class="skb-mob-bk-mini-t"><img class="skb-mob-bk-mini-tl" src="img_M/gen g logo.png"/><span class="skb-mob-bk-mini-tn">Gen.G</span><span class="skb-mob-bk-mini-sc">—</span></div><div class="skb-mob-bk-mini-odds"><div class="skb-mob-bk-mini-odd"><span class="skb-mob-bk-mini-odd-lbl">Spirit</span><span class="skb-mob-bk-mini-odd-val">2.10</span></div><div class="skb-mob-bk-mini-odd"><span class="skb-mob-bk-mini-odd-lbl">Gen.G</span><span class="skb-mob-bk-mini-odd-val">1.75</span></div></div></div></div>',
    '            </div>',
    '          </div>',

    '        </div>',   /* end LB tree */
    '      </div>',
    '      <div style="height:20px;"></div>',

    '    </div>',   /* end DE panel */

    /* ══ Swiss Panel ══ */
    '    <div id="skbBkSwiss" style="display:none;">',
    '      <div class="skb-mob-bk-sw">',

    /* Round 1 */
    '        <div class="skb-mob-bk-sw-round">',
    '          <div class="skb-mob-bk-sw-round-hdr"><span class="skb-mob-bk-sw-round-lbl">ROUND 1</span><span class="skb-mob-bk-sw-round-count">8 matches · 0-0</span></div>',
    '          <div class="skb-mob-bk-sw-body">',
    '            <div class="skb-mob-bk-sw-row"><div class="skb-mob-bk-sw-logo win"><img src="img_M/NAVI_Logo_2020.png"/></div><span class="skb-mob-bk-sw-name">NAVI</span><span class="skb-mob-bk-sw-sc">1-0</span><span class="skb-mob-bk-sw-name los" style="text-align:right">paiN</span><div class="skb-mob-bk-sw-logo los"><img src="img_M/pain.webp"/></div></div>',
    '            <div class="skb-mob-bk-sw-row"><div class="skb-mob-bk-sw-logo win"><img src="img_M/fut.webp"/></div><span class="skb-mob-bk-sw-name">FaZe</span><span class="skb-mob-bk-sw-sc">1-0</span><span class="skb-mob-bk-sw-name los" style="text-align:right">Monte</span><div class="skb-mob-bk-sw-logo los"><img src="img_M/monte.webp"/></div></div>',
    '            <div class="skb-mob-bk-sw-row"><div class="skb-mob-bk-sw-logo win"><img src="img_M/G2.webp"/></div><span class="skb-mob-bk-sw-name">G2</span><span class="skb-mob-bk-sw-sc">1-0</span><span class="skb-mob-bk-sw-name los" style="text-align:right">GamerLeg.</span><div class="skb-mob-bk-sw-logo los"><img src="img_M/legacy.webp"/></div></div>',
    '            <div class="skb-mob-bk-sw-row"><div class="skb-mob-bk-sw-logo win"><img src="img_M/furia.svg"/></div><span class="skb-mob-bk-sw-name">FURIA</span><span class="skb-mob-bk-sw-sc">1-0</span><span class="skb-mob-bk-sw-name los" style="text-align:right">Falcons</span><div class="skb-mob-bk-sw-logo los"><img src="img_M/falcon.webp"/></div></div>',
    '            <div class="skb-mob-bk-sw-row"><div class="skb-mob-bk-sw-logo win"><img src="img_M/vita.webp"/></div><span class="skb-mob-bk-sw-name">Vitality</span><span class="skb-mob-bk-sw-sc">1-0</span><span class="skb-mob-bk-sw-name los" style="text-align:right">BIG</span><div class="skb-mob-bk-sw-logo los"><img src="img_M/M8.webp"/></div></div>',
    '            <div class="skb-mob-bk-sw-row"><div class="skb-mob-bk-sw-logo win"><img src="img_M/mouz.svg"/></div><span class="skb-mob-bk-sw-name">MOUZ</span><span class="skb-mob-bk-sw-sc">1-0</span><span class="skb-mob-bk-sw-name los" style="text-align:right">Astralis</span><div class="skb-mob-bk-sw-logo los"><img src="img_M/astralis.svg"/></div></div>',
    '            <div class="skb-mob-bk-sw-row"><div class="skb-mob-bk-sw-logo win"><img src="img_M/Mongolz.webp"/></div><span class="skb-mob-bk-sw-name">Mongolz</span><span class="skb-mob-bk-sw-sc">1-0</span><span class="skb-mob-bk-sw-name los" style="text-align:right">FUT</span><div class="skb-mob-bk-sw-logo los"><img src="img_M/fut.webp"/></div></div>',
    '            <div class="skb-mob-bk-sw-row"><div class="skb-mob-bk-sw-logo win"><img src="img_M/aurora.webp"/></div><span class="skb-mob-bk-sw-name">Heroic</span><span class="skb-mob-bk-sw-sc">1-0</span><span class="skb-mob-bk-sw-name los" style="text-align:right">ParisVison</span><div class="skb-mob-bk-sw-logo los"><img src="img_M/Parisvison.webp"/></div></div>',
    '          </div>',
    '        </div>',

    /* Round 2 */
    '        <div class="skb-mob-bk-sw-round">',
    '          <div class="skb-mob-bk-sw-round-hdr"><span class="skb-mob-bk-sw-round-lbl">ROUND 2</span><span class="skb-mob-bk-sw-round-count">8 matches</span></div>',
    '          <div class="skb-mob-bk-sw-body">',
    '            <div class="skb-mob-bk-sw-grp-lbl">1-0 GROUP</div>',
    '            <div class="skb-mob-bk-sw-row"><div class="skb-mob-bk-sw-logo win"><img src="img_M/NAVI_Logo_2020.png"/></div><span class="skb-mob-bk-sw-name">NAVI</span><span class="skb-mob-bk-sw-sc">2-0</span><span class="skb-mob-bk-sw-name los" style="text-align:right">FaZe</span><div class="skb-mob-bk-sw-logo los"><img src="img_M/fut.webp"/></div></div>',
    '            <div class="skb-mob-bk-sw-row"><div class="skb-mob-bk-sw-logo win"><img src="img_M/G2.webp"/></div><span class="skb-mob-bk-sw-name">G2</span><span class="skb-mob-bk-sw-sc">2-0</span><span class="skb-mob-bk-sw-name los" style="text-align:right">FURIA</span><div class="skb-mob-bk-sw-logo los"><img src="img_M/furia.svg"/></div></div>',
    '            <div class="skb-mob-bk-sw-row"><div class="skb-mob-bk-sw-logo win"><img src="img_M/vita.webp"/></div><span class="skb-mob-bk-sw-name">Vitality</span><span class="skb-mob-bk-sw-sc">2-0</span><span class="skb-mob-bk-sw-name los" style="text-align:right">MOUZ</span><div class="skb-mob-bk-sw-logo los"><img src="img_M/mouz.svg"/></div></div>',
    '            <div class="skb-mob-bk-sw-row"><div class="skb-mob-bk-sw-logo win"><img src="img_M/Mongolz.webp"/></div><span class="skb-mob-bk-sw-name">Mongolz</span><span class="skb-mob-bk-sw-sc">2-0</span><span class="skb-mob-bk-sw-name los" style="text-align:right">Heroic</span><div class="skb-mob-bk-sw-logo los"><img src="img_M/aurora.webp"/></div></div>',
    '            <div class="skb-mob-bk-sw-grp-lbl">0-1 GROUP</div>',
    '            <div class="skb-mob-bk-sw-row"><div class="skb-mob-bk-sw-logo win"><img src="img_M/pain.webp"/></div><span class="skb-mob-bk-sw-name">paiN</span><span class="skb-mob-bk-sw-sc">1-1</span><span class="skb-mob-bk-sw-name los" style="text-align:right">Monte</span><div class="skb-mob-bk-sw-logo los"><img src="img_M/monte.webp"/></div></div>',
    '            <div class="skb-mob-bk-sw-row"><div class="skb-mob-bk-sw-logo win"><img src="img_M/falcon.webp"/></div><span class="skb-mob-bk-sw-name">Falcons</span><span class="skb-mob-bk-sw-sc">1-1</span><span class="skb-mob-bk-sw-name los" style="text-align:right">GamerLeg.</span><div class="skb-mob-bk-sw-logo los"><img src="img_M/legacy.webp"/></div></div>',
    '            <div class="skb-mob-bk-sw-row"><div class="skb-mob-bk-sw-logo win"><img src="img_M/M8.webp"/></div><span class="skb-mob-bk-sw-name">BIG</span><span class="skb-mob-bk-sw-sc">1-1</span><span class="skb-mob-bk-sw-name los" style="text-align:right">Astralis</span><div class="skb-mob-bk-sw-logo los"><img src="img_M/astralis.svg"/></div></div>',
    '            <div class="skb-mob-bk-sw-row"><div class="skb-mob-bk-sw-logo win"><img src="img_M/Parisvison.webp"/></div><span class="skb-mob-bk-sw-name">ParisVison</span><span class="skb-mob-bk-sw-sc">1-1</span><span class="skb-mob-bk-sw-name los" style="text-align:right">FUT</span><div class="skb-mob-bk-sw-logo los"><img src="img_M/fut.webp"/></div></div>',
    '          </div>',
    '        </div>',

    /* Round 3 */
    '        <div class="skb-mob-bk-sw-round">',
    '          <div class="skb-mob-bk-sw-round-hdr"><span class="skb-mob-bk-sw-round-lbl">ROUND 3</span><span class="skb-mob-bk-sw-round-count">8 matches</span></div>',
    '          <div class="skb-mob-bk-sw-body">',
    '            <div class="skb-mob-bk-sw-grp-lbl">2-0 GROUP</div>',
    '            <div class="skb-mob-bk-sw-row"><div class="skb-mob-bk-sw-logo win"><img src="img_M/NAVI_Logo_2020.png"/></div><span class="skb-mob-bk-sw-name">NAVI</span><span class="skb-mob-bk-sw-sc">3-0</span><span class="skb-mob-bk-sw-name los" style="text-align:right">G2</span><div class="skb-mob-bk-sw-logo los"><img src="img_M/G2.webp"/></div></div>',
    '            <div class="skb-mob-bk-sw-row"><div class="skb-mob-bk-sw-logo win"><img src="img_M/vita.webp"/></div><span class="skb-mob-bk-sw-name">Vitality</span><span class="skb-mob-bk-sw-sc">3-0</span><span class="skb-mob-bk-sw-name los" style="text-align:right">Mongolz</span><div class="skb-mob-bk-sw-logo los"><img src="img_M/Mongolz.webp"/></div></div>',
    '            <div class="skb-mob-bk-sw-grp-lbl">1-1 GROUP</div>',
    '            <div class="skb-mob-bk-sw-row"><div class="skb-mob-bk-sw-logo win"><img src="img_M/fut.webp"/></div><span class="skb-mob-bk-sw-name">FaZe</span><span class="skb-mob-bk-sw-sc">2-1</span><span class="skb-mob-bk-sw-name los" style="text-align:right">FURIA</span><div class="skb-mob-bk-sw-logo los"><img src="img_M/furia.svg"/></div></div>',
    '            <div class="skb-mob-bk-sw-row"><div class="skb-mob-bk-sw-logo win"><img src="img_M/aurora.webp"/></div><span class="skb-mob-bk-sw-name">Heroic</span><span class="skb-mob-bk-sw-sc">2-1</span><span class="skb-mob-bk-sw-name los" style="text-align:right">MOUZ</span><div class="skb-mob-bk-sw-logo los"><img src="img_M/mouz.svg"/></div></div>',
    '            <div class="skb-mob-bk-sw-row"><div class="skb-mob-bk-sw-logo" style="border:1px solid rgba(255,255,255,0.08);"><img src="img_M/pain.webp"/></div><span class="skb-mob-bk-sw-name">paiN</span><span class="skb-mob-bk-sw-sc" style="color:rgba(255,255,255,0.2);">VS</span><span class="skb-mob-bk-sw-name" style="text-align:right">Falcons</span><div class="skb-mob-bk-sw-logo" style="border:1px solid rgba(255,255,255,0.08);"><img src="img_M/falcon.webp"/></div></div>',
    '            <div class="skb-mob-bk-sw-row"><div class="skb-mob-bk-sw-logo" style="border:1px solid rgba(255,255,255,0.08);"><img src="img_M/M8.webp"/></div><span class="skb-mob-bk-sw-name">BIG</span><span class="skb-mob-bk-sw-sc" style="color:rgba(255,255,255,0.2);">VS</span><span class="skb-mob-bk-sw-name" style="text-align:right">ParisVison</span><div class="skb-mob-bk-sw-logo" style="border:1px solid rgba(255,255,255,0.08);"><img src="img_M/Parisvison.webp"/></div></div>',
    '            <div class="skb-mob-bk-sw-grp-lbl">0-2 GROUP</div>',
    '            <div class="skb-mob-bk-sw-row"><div class="skb-mob-bk-sw-logo win"><img src="img_M/legacy.webp"/></div><span class="skb-mob-bk-sw-name">GamerLeg.</span><span class="skb-mob-bk-sw-sc">1-2</span><span class="skb-mob-bk-sw-name los" style="text-align:right">Monte</span><div class="skb-mob-bk-sw-logo los"><img src="img_M/monte.webp"/></div></div>',
    '            <div class="skb-mob-bk-sw-row"><div class="skb-mob-bk-sw-logo" style="border:1px solid rgba(255,255,255,0.08);"><img src="img_M/fut.webp"/></div><span class="skb-mob-bk-sw-name">FUT</span><span class="skb-mob-bk-sw-sc" style="color:rgba(255,255,255,0.2);">VS</span><span class="skb-mob-bk-sw-name" style="text-align:right">Astralis</span><div class="skb-mob-bk-sw-logo" style="border:1px solid rgba(255,255,255,0.08);"><img src="img_M/astralis.svg"/></div></div>',
    '          </div>',
    '        </div>',

    /* Round 4 */
    '        <div class="skb-mob-bk-sw-round">',
    '          <div class="skb-mob-bk-sw-round-hdr"><span class="skb-mob-bk-sw-round-lbl">ROUND 4</span><span class="skb-mob-bk-sw-round-count">6 matches (deciding)</span></div>',
    '          <div class="skb-mob-bk-sw-body">',
    '            <div class="skb-mob-bk-sw-grp-lbl q">✓ 3-0 QUALIFIED</div>',
    '            <div class="skb-mob-bk-sw-row qual" style="justify-content:center;gap:16px;"><div class="skb-mob-bk-sw-logo" style="width:30px;height:30px;"><img src="img_M/NAVI_Logo_2020.png"/></div><div class="skb-mob-bk-sw-logo" style="width:30px;height:30px;"><img src="img_M/vita.webp"/></div></div>',
    '            <div class="skb-mob-bk-sw-grp-lbl">2-1 GROUP (advance if win)</div>',
    '            <div class="skb-mob-bk-sw-row"><div class="skb-mob-bk-sw-tbd"></div><span class="skb-mob-bk-sw-name" style="color:rgba(255,255,255,0.3);">TBD</span><span class="skb-mob-bk-sw-sc" style="color:rgba(255,255,255,0.2);">VS</span><span class="skb-mob-bk-sw-name" style="text-align:right;color:rgba(255,255,255,0.3);">TBD</span><div class="skb-mob-bk-sw-tbd"></div></div>',
    '            <div class="skb-mob-bk-sw-row"><div class="skb-mob-bk-sw-tbd"></div><span class="skb-mob-bk-sw-name" style="color:rgba(255,255,255,0.3);">TBD</span><span class="skb-mob-bk-sw-sc" style="color:rgba(255,255,255,0.2);">VS</span><span class="skb-mob-bk-sw-name" style="text-align:right;color:rgba(255,255,255,0.3);">TBD</span><div class="skb-mob-bk-sw-tbd"></div></div>',
    '            <div class="skb-mob-bk-sw-row"><div class="skb-mob-bk-sw-tbd"></div><span class="skb-mob-bk-sw-name" style="color:rgba(255,255,255,0.3);">TBD</span><span class="skb-mob-bk-sw-sc" style="color:rgba(255,255,255,0.2);">VS</span><span class="skb-mob-bk-sw-name" style="text-align:right;color:rgba(255,255,255,0.3);">TBD</span><div class="skb-mob-bk-sw-tbd"></div></div>',
    '            <div class="skb-mob-bk-sw-grp-lbl e">✗ 0-3 ELIMINATED</div>',
    '            <div class="skb-mob-bk-sw-row elim" style="justify-content:center;gap:16px;"><div class="skb-mob-bk-sw-logo los" style="width:30px;height:30px;"><img src="img_M/monte.webp"/></div><div class="skb-mob-bk-sw-logo los" style="width:30px;height:30px;"><img src="img_M/astralis.svg"/></div></div>',
    '          </div>',
    '        </div>',

    '      </div>',   /* end .skb-mob-bk-sw */
    '    </div>',   /* end Swiss panel */

    '  </div>',   /* end bracket view */

    /* floating betslip button */
    '  <div class="skb-mob-bs-fab" id="skbBsFab">',
    '    <img src="img_M/bets.png" alt="bets"/>',
    '    <span class="skb-mob-bs-fab-badge" id="skbBsBadge" style="display:none;">0</span>',
    '  </div>',

    /* bet slip slide-up panel */
    '  <div class="skb-mob-bs-panel" id="skbBsPanel">',
    '    <div class="skb-mob-bs-panel-handle"></div>',
    '    <div class="skb-mob-bs-panel-hdr">',
    '      <span class="skb-mob-bs-panel-title">Bet Slip</span>',
    '      <span class="skb-mob-bs-panel-count" id="skbBsPanelCount">0</span>',
    '      <button class="skb-mob-bs-panel-close" id="skbBsPanelClose">✕</button>',
    '    </div>',
    '    <div class="skb-mob-bs-panel-body" id="skbBsPanelBody">',
    '      <div class="skb-mob-bs-empty" id="skbBsEmpty">Clique sur une cote<br/>pour ajouter un pari</div>',
    '      <div id="skbBsList"></div>',
    '      <div id="skbBsBottom" style="display:none;">',
    '        <div class="skb-mob-bs-divider"></div>',
    '        <div class="skb-mob-bs-combined">',
    '          <span class="skb-mob-bs-combined-lbl">Cote combinée</span>',
    '          <span class="skb-mob-bs-combined-val" id="skbBsCombined">1.00</span>',
    '        </div>',
    '        <div class="skb-mob-bs-divider"></div>',
    '        <div class="skb-mob-bs-stake-lbl">Mise (£)</div>',
    '        <input class="skb-mob-bs-stake-input" id="skbBsStake" type="number" value="10" placeholder="0.00"/>',
    '        <div class="skb-mob-bs-qa">',
    '          <div class="skb-mob-bs-qa-btn" data-add="5">+5</div>',
    '          <div class="skb-mob-bs-qa-btn" data-add="10">+10</div>',
    '          <div class="skb-mob-bs-qa-btn" data-add="25">+25</div>',
    '          <div class="skb-mob-bs-qa-btn" data-add="50">+50</div>',
    '        </div>',
    '        <div class="skb-mob-bs-gains">',
    '          <span class="skb-mob-bs-gains-lbl">Gains potentiels</span>',
    '          <span class="skb-mob-bs-gains-val" id="skbBsGains">£10.00</span>',
    '        </div>',
    '        <button class="skb-mob-bs-submit" id="skbBsSubmit">Place bet</button>',
    '      </div>',
    '    </div>',
    '  </div>',

    /* bottom nav */
    '    <div class="skb-mob-nav">',

    /* Esport */
    '      <div class="skb-mob-nav-item">',
    '        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">',
    '          <path d="M6 9H4.5a2.5 2.5 0 010-5H6"/><path d="M18 9h1.5a2.5 2.5 0 000-5H18"/>',
    '          <path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>',
    '          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>',
    '          <path d="M18 2H6v7a6 6 0 0012 0V2z"/>',
    '        </svg>',
    '        Esport',
    '      </div>',

    /* Live */
    '      <div class="skb-mob-nav-item">',
    '        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">',
    '          <circle cx="12" cy="12" r="2"/>',
    '          <path d="M16.24 7.76a6 6 0 010 8.49m-8.48-.01a6 6 0 010-8.49"/>',
    '          <path d="M19.07 4.93a10 10 0 010 14.14m-14.14 0a10 10 0 010-14.14"/>',
    '        </svg>',
    '        Live',
    '      </div>',

    /* Bet — center, active */
    '      <div class="skb-mob-nav-center">',
    '        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">',
    '          <path d="M2 9a3 3 0 010 6v2a2 2 0 002 2h16a2 2 0 002-2v-2a3 3 0 010-6V7a2 2 0 00-2-2H4a2 2 0 00-2 2v2z"/>',
    '          <line x1="9" y1="12" x2="15" y2="12"/>',
    '        </svg>',
    '        Bet',
    '      </div>',

    /* Profil */
    '      <div class="skb-mob-nav-item">',
    '        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">',
    '          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>',
    '          <circle cx="12" cy="7" r="4"/>',
    '        </svg>',
    '        Profil',
    '      </div>',

    /* Game */
    '      <div class="skb-mob-nav-item">',
    '        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">',
    '          <rect x="2" y="7" width="20" height="13" rx="3"/>',
    '          <line x1="6" y1="13" x2="10" y2="13"/><line x1="8" y1="11" x2="8" y2="15"/>',
    '          <circle cx="15" cy="12" r="1" fill="currentColor" stroke="none"/>',
    '          <circle cx="17" cy="14" r="1" fill="currentColor" stroke="none"/>',
    '          <path d="M7 7V5a2 2 0 012-2h6a2 2 0 012 2v2"/>',
    '        </svg>',
    '        Game',
    '      </div>',

    '    </div>',  /* end nav */
    '  </div>',   /* end screen */
    '  <div class="skb-phone-bar"></div>',
    '</div>'
  ].join('\n');

  /* append overlay after body is ready */
  function mountOverlay() {
    document.body.appendChild(overlay);

    var btn    = document.getElementById('skb-phone-btn');
    var closeB = document.getElementById('skb-phone-close');

    function openOverlay()  { overlay.classList.add('open'); }
    function closeOverlay() { overlay.classList.remove('open'); }

    btn.addEventListener('click', openOverlay);
    closeB.addEventListener('click', closeOverlay);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeOverlay();
    });

    /* ESC closes */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeOverlay();
    });

    /* ── Game filter logic ── */
    var filterBtns  = overlay.querySelectorAll('.skb-mob-filter-btn');
    var matchCards  = overlay.querySelectorAll('.skb-mob-match-card');

    /* ── Bottom nav tab switching ── */
    var allNavTabs   = overlay.querySelectorAll('.skb-mob-nav-item');
    var betTab       = overlay.querySelector('.skb-mob-nav-center');
    var contentView  = overlay.querySelector('.skb-mob-content');
    var esportView   = overlay.querySelector('.skb-mob-esport-view');
    var liveView     = overlay.querySelector('.skb-mob-live-view');
    var profilView   = overlay.querySelector('.skb-mob-profil-view');
    var bracketView  = overlay.querySelector('.skb-mob-bracket-view');
    var storeView    = overlay.querySelector('.skb-mob-store-view');
    var matchView    = overlay.querySelector('.skb-mob-match-view');
    var gameView     = overlay.querySelector('.skb-mob-game-view');
    var nyaView      = overlay.querySelector('.skb-mob-nya-view');

    var allViews = [contentView, esportView, liveView, profilView, bracketView, storeView, matchView, gameView, nyaView];

    function hideAllViews() {
      allViews.forEach(function (v) { if (v) v.style.display = 'none'; });
    }

    function deactivateAllTabs() {
      allNavTabs.forEach(function (t) {
        t.style.color = 'rgba(255,255,255,0.35)';
        var s = t.querySelector('svg'); if (s) s.style.opacity = '0.4';
      });
      betTab.style.color = 'rgba(255,255,255,0.35)';
      var bs = betTab.querySelector('svg'); if (bs) bs.style.opacity = '0.4';
    }

    function activateTab(el) {
      el.style.color = '#fff';
      var s = el.querySelector('svg'); if (s) s.style.opacity = '1';
    }

    /* Esport tab (index 0) */
    allNavTabs[0].addEventListener('click', function () {
      deactivateAllTabs(); activateTab(allNavTabs[0]);
      hideAllViews();
      esportView.style.display = 'block';
    });

    /* Live tab (index 1) */
    allNavTabs[1].addEventListener('click', function () {
      deactivateAllTabs(); activateTab(allNavTabs[1]);
      hideAllViews();
      liveView.style.display = 'block';
    });

    /* Bet tab (center) */
    betTab.addEventListener('click', function () {
      deactivateAllTabs(); activateTab(betTab);
      hideAllViews();
      contentView.style.display = '';
    });

    /* Profil tab (index 2) */
    allNavTabs[2].addEventListener('click', function () {
      deactivateAllTabs(); activateTab(allNavTabs[2]);
      hideAllViews();
      profilView.style.display = 'block';
    });

    /* Game → Not Yet Available */
    allNavTabs[3].addEventListener('click', function () {
      deactivateAllTabs(); activateTab(allNavTabs[3]);
      hideAllViews();
      if (nyaView) nyaView.style.display = 'flex';
    });

    /* ── Go to the store → store view dans le téléphone ── */
    (function () {
      var storeBtn = overlay.querySelector('.skb-mob-profil-store-btn');
      if (storeBtn) storeBtn.addEventListener('click', function () {
        hideAllViews();
        if (storeView) storeView.style.display = 'flex';
      });

      /* Bouton retour dans la store → revenir au profil */
      var storeBack = storeView ? storeView.querySelector('.skb-mob-store-back') : null;
      if (storeBack) storeBack.addEventListener('click', function () {
        hideAllViews();
        profilView.style.display = 'block';
        deactivateAllTabs();
        activateTab(allNavTabs[2]);
      });

      /* Buy → Equip → Equipped par section */
      if (storeView) {
        storeView.querySelectorAll('.skb-mob-store-btn').forEach(function(btn) {
          btn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (btn.disabled) return;
            if (btn.classList.contains('skb-mob-store-btn-buy')) {
              btn.classList.remove('skb-mob-store-btn-buy');
              btn.classList.add('skb-mob-store-btn-equip');
              btn.textContent = 'Equip';
            } else if (btn.classList.contains('skb-mob-store-btn-equip')) {
              var section = btn.closest('.skb-mob-store-grid');
              if (section) {
                section.querySelectorAll('.skb-mob-store-item').forEach(function(c) {
                  c.classList.remove('equipped');
                  var b = c.querySelector('.skb-mob-store-btn');
                  if (b && b.classList.contains('skb-mob-store-btn-equipped')) {
                    b.classList.remove('skb-mob-store-btn-equipped');
                    b.classList.add('skb-mob-store-btn-equip');
                    b.textContent = 'Equip';
                    b.disabled = false;
                  }
                });
              }
              btn.closest('.skb-mob-store-item').classList.add('equipped');
              btn.classList.remove('skb-mob-store-btn-equip');
              btn.classList.add('skb-mob-store-btn-equipped');
              btn.textContent = 'On';
              btn.disabled = true;
            }
          });
        });
      }
    })();

    /* ── Particules "Go to the store" ── */
    (function () {
      var storeBtn = overlay.querySelector('.skb-mob-profil-store-btn');
      if (!storeBtn) return;
      function spawnParticle() {
        var p = document.createElement('span');
        var size = Math.random() * 5 + 2;
        var x    = Math.random() * storeBtn.offsetWidth;
        var y    = Math.random() * storeBtn.offsetHeight;
        var angle = Math.random() * 360;
        var dist  = Math.random() * 40 + 12;
        var dx = Math.cos(angle * Math.PI / 180) * dist;
        var dy = Math.sin(angle * Math.PI / 180) * dist;
        var dur = Math.random() * 500 + 300;
        p.style.cssText = 'position:absolute;left:'+x+'px;top:'+y+'px;width:'+size+'px;height:'+size+'px;'
          +'border-radius:50%;background:rgba(255,255,255,'+(Math.random()*0.5+0.4)+');'
          +'pointer-events:none;z-index:100;box-shadow:0 0 '+(size*2.5)+'px rgba(255,255,255,0.8);';
        storeBtn.appendChild(p);
        p.animate(
          [{transform:'translate(0,0) scale(1)',opacity:1},
           {transform:'translate('+dx+'px,'+dy+'px) scale(0)',opacity:0}],
          {duration:dur, easing:'ease-out', fill:'forwards'}
        ).onfinish = function () { p.remove(); };
      }
      setInterval(spawnParticle, 30);
    })();

    /* ── Floating Bet Slip FAB + Panel ── */
    (function () {
      var fab      = overlay.querySelector('#skbBsFab');
      var badge    = overlay.querySelector('#skbBsBadge');
      var panel    = overlay.querySelector('#skbBsPanel');
      var closeBtn = overlay.querySelector('#skbBsPanelClose');
      var list     = overlay.querySelector('#skbBsList');
      var empty    = overlay.querySelector('#skbBsEmpty');
      var bottom   = overlay.querySelector('#skbBsBottom');
      var combined = overlay.querySelector('#skbBsCombined');
      var gains    = overlay.querySelector('#skbBsGains');
      var stake    = overlay.querySelector('#skbBsStake');
      var countEl  = overlay.querySelector('#skbBsPanelCount');

      var bets = [];

      function calcCombined() {
        return bets.reduce(function(acc, b) { return acc * b.odds; }, 1);
      }

      function updateGains() {
        var s = parseFloat(stake ? stake.value : '10') || 0;
        var c = calcCombined();
        if (gains) gains.textContent = '£' + (s * c).toFixed(2);
        if (combined) combined.textContent = c.toFixed(2);
      }

      function render() {
        if (!list) return;
        list.innerHTML = '';
        var isEmpty = bets.length === 0;
        if (empty) empty.style.display = isEmpty ? '' : 'none';
        if (bottom) bottom.style.display = isEmpty ? 'none' : '';
        if (badge) { badge.textContent = bets.length; badge.style.display = bets.length ? 'flex' : 'none'; }
        if (countEl) countEl.textContent = bets.length;
        if (fab) fab.style.display = bets.length ? 'flex' : 'none';

        bets.forEach(function(bet, i) {
          var div = document.createElement('div');
          div.className = 'skb-mob-bs-bet';
          div.innerHTML =
            '<div class="skb-mob-bs-bet-game">Counter-Strike 2</div>' +
            '<div class="skb-mob-bs-bet-match">' + bet.match + '</div>' +
            '<div class="skb-mob-bs-bet-pick">' + bet.pick + '</div>' +
            '<div class="skb-mob-bs-bet-odds">' + bet.odds.toFixed(2) + '</div>' +
            '<div class="skb-mob-bs-bet-remove" data-i="' + i + '">✕ retirer</div>';
          list.appendChild(div);
        });

        list.querySelectorAll('.skb-mob-bs-bet-remove').forEach(function(btn) {
          btn.addEventListener('click', function() {
            bets.splice(parseInt(btn.getAttribute('data-i')), 1);
            render(); updateGains();
          });
        });

        updateGains();
      }

      /* Ouvre/ferme le panel */
      function openPanel() { if (panel) panel.classList.add('open'); }
      function closePanel() { if (panel) panel.classList.remove('open'); }

      if (fab) fab.addEventListener('click', openPanel);
      if (closeBtn) closeBtn.addEventListener('click', closePanel);

      /* Stake input + quick amounts */
      if (stake) stake.addEventListener('input', updateGains);
      overlay.querySelectorAll('.skb-mob-bs-qa-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
          if (stake) { stake.value = (parseFloat(stake.value) || 0) + parseFloat(btn.getAttribute('data-add')); }
          updateGains();
        });
      });

      /* Submit */
      var submit = overlay.querySelector('#skbBsSubmit');
      if (submit) submit.addEventListener('click', function() {
        bets = [];
        render();
        closePanel();
        if (stake) stake.value = '10';
      });

      /* Écoute les clics sur les cotes — capture phase pour intercepter
         avant betslip.js ET traiter le pari en même temps */
      overlay.addEventListener('click', function(e) {
        var odd = e.target.closest('.skb-mob-odd, .skb-mob-hcard-odd, .skb-mob-match-card-odd, .skb-mob-live-odd-btn, .tp-pc-odd, .tc-odd, .tc-combined, .hm-odd');
        if (!odd) return;

        /* Stoppe la propagation vers betslip.js (site bureau) */
        e.stopPropagation();

        var oddsVal = parseFloat(odd.textContent.replace(',', '.')) || 1;

        /* Récupère le nom de l'équipe / joueur */
        var teamEl = odd.closest('.skb-mob-team, .skb-mob-hcard-team');
        var tpCard = odd.closest('.tp-pc');
        var pick;
        if (tpCard) {
          var pName = tpCard.querySelector('.tp-pc-name');
          pick = (pName ? pName.textContent.trim() : 'Player') + ' — Best Perf.';
        } else if (teamEl) {
          var img = teamEl.querySelector('img');
          pick = (img ? img.getAttribute('alt') : odd.textContent) + ' to win';
        } else {
          pick = 'Pari ' + (bets.length + 1);
        }

        /* Récupère le nom du match */
        var card = odd.closest('[class*="card"], [class*="hcard"], [class*="event"], [class*="match"]');
        var labelEl = card ? card.querySelector('[class*="event-label"], [class*="label"]') : null;
        var matchName = labelEl ? labelEl.textContent.trim() : 'Match';

        /* Évite les doublons */
        var dup = bets.some(function(b) { return b.match === matchName && b.pick === pick; });
        if (dup) return;

        bets.push({ match: matchName, pick: pick, odds: oddsVal });
        render();

        /* Pulse sur le FAB */
        if (fab) {
          fab.style.transform = 'scale(1.25)';
          setTimeout(function() { fab.style.transform = ''; }, 200);
        }
      }, true); /* capture phase */

      render();
    })();

    /* ── Match view ── */
    (function () {
      if (!matchView) return;

      /* Retour : revenir à la vue précédente (contentView) */
      var mvBack = matchView.querySelector('#skbMvBack');
      if (mvBack) mvBack.addEventListener('click', function () {
        hideAllViews();
        contentView.style.display = '';
        deactivateAllTabs(); activateTab(betTab);
      });

      /* Tabs */
      matchView.querySelectorAll('.skb-mob-mv-tab').forEach(function(tab) {
        tab.addEventListener('click', function() {
          matchView.querySelectorAll('.skb-mob-mv-tab').forEach(function(t) { t.classList.remove('active'); });
          matchView.querySelectorAll('.skb-mob-mv-panel').forEach(function(p) { p.classList.remove('active'); });
          tab.classList.add('active');
          var target = matchView.querySelector('#' + tab.getAttribute('data-tab'));
          if (target) target.classList.add('active');
        });
      });

      /* Cotes dans la match view → déjà gérées par le listener capture FAB */

      /* Ouverture depuis n'importe quel match cliqué dans l'appli */
      overlay.addEventListener('click', function(e) {
        /* Ne pas ouvrir si on a cliqué sur une cote */
        if (e.target.closest('.skb-mob-mv-card-odd, .skb-mob-hcard-odd, .skb-mob-odd, .skb-mob-match-card-odd, .skb-mob-live-odd-btn, .tp-pc-odd, .tc-odd, .tc-combined, .hm-odd, .skb-mob-bs-fab, .skb-mob-bs-panel')) return;

        var card = e.target.closest('.skb-mob-hcard, .skb-mob-match-card');
        if (!card) return;

        hideAllViews();
        matchView.style.display = 'flex';
        /* Reset tabs */
        matchView.querySelectorAll('.skb-mob-mv-tab').forEach(function(t) { t.classList.remove('active'); });
        matchView.querySelectorAll('.skb-mob-mv-panel').forEach(function(p) { p.classList.remove('active'); });
        var firstTab = matchView.querySelector('.skb-mob-mv-tab');
        var firstPanel = matchView.querySelector('#mv-main');
        if (firstTab) firstTab.classList.add('active');
        if (firstPanel) firstPanel.classList.add('active');
        matchView.scrollTop = 0;
      });
    })();

    /* ── Betting History filter ── */
    var bhTabs  = overlay.querySelectorAll('.skb-mob-bh-tab');
    var bhItems = overlay.querySelectorAll('.skb-mob-bh-item');

    function applyBhFilter(filter) {
      bhItems.forEach(function (item) {
        item.style.display = (filter === 'all' || item.getAttribute('data-bh') === filter) ? '' : 'none';
      });
    }

    /* default: show only won */
    applyBhFilter('won');

    bhTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        bhTabs.forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        applyBhFilter(tab.getAttribute('data-bh'));
      });
    });

    /* ── Live filter logic ── */
    var liveFilterBtns = overlay.querySelectorAll('.skb-mob-live-filter-btn');
    var liveCards      = overlay.querySelectorAll('.skb-mob-live-card');

    liveFilterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        liveFilterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var game = btn.getAttribute('data-game');
        liveCards.forEach(function (card) {
          card.style.display = (game === 'all' || card.getAttribute('data-game') === game) ? '' : 'none';
        });
      });
    });

    /* ── Bracket view logic ── */
    (function () {
      if (!bracketView) return;

      var bkTitle   = bracketView.querySelector('.skb-mob-bk-title');
      var bkFmtBtns = bracketView.querySelectorAll('.skb-mob-bk-fmt');
      var bkPanels  = {
        se:    bracketView.querySelector('#skbBkSE'),
        de:    bracketView.querySelector('#skbBkDE'),
        swiss: bracketView.querySelector('#skbBkSwiss')
      };

      /* ── SE bezier connector lines (same technique as bracket.html) ── */
      var SE_CONNS = [
        { from: 'skbSeQf1', to: 'skbSeSf1', active: true  },
        { from: 'skbSeQf2', to: 'skbSeSf1', active: true  },
        { from: 'skbSeQf3', to: 'skbSeSf2', active: true  },
        { from: 'skbSeQf4', to: 'skbSeSf2', active: true  },
        { from: 'skbSeSf1', to: 'skbSeGf',  active: true  },
        { from: 'skbSeSf2', to: 'skbSeGf',  active: false },
      ];

      function drawSEBezier() {
        var svg = bracketView.querySelector('#skbSeSvg');
        if (!svg) return;
        var container = svg.parentElement; /* the .skb-mob-bk-tree div */
        var cr = container.getBoundingClientRect();
        if (!cr.width) return;

        svg.innerHTML = '';

        SE_CONNS.forEach(function (conn) {
          var fromSlot = bracketView.querySelector('#' + conn.from);
          var toSlot   = bracketView.querySelector('#' + conn.to);
          if (!fromSlot || !toSlot) return;

          var fromCard = fromSlot.querySelector('.skb-mob-bk-mini');
          var toCard   = toSlot.querySelector('.skb-mob-bk-mini');
          if (!fromCard || !toCard) return;

          var fr = fromCard.getBoundingClientRect();
          var tr = toCard.getBoundingClientRect();

          /* x1: right edge of source card; y1: vertical centre of the winner row */
          var winRow = fromCard.querySelector('.skb-mob-bk-mini-t.win') || fromCard.querySelector('.skb-mob-bk-mini-t');
          var wr = winRow ? winRow.getBoundingClientRect() : fr;
          var x1 = fr.right  - cr.left;
          var y1 = wr.top + wr.height / 2 - cr.top;

          /* x2: left edge of target card; y2: midpoint between the two team rows */
          var destTeams = toCard.querySelectorAll('.skb-mob-bk-mini-t');
          var x2 = tr.left - cr.left;
          var y2;
          if (destTeams.length >= 2) {
            var dr1 = destTeams[0].getBoundingClientRect();
            var dr2 = destTeams[1].getBoundingClientRect();
            y2 = (dr1.bottom + dr2.top) / 2 - cr.top;
          } else {
            y2 = tr.top + tr.height / 2 - cr.top;
          }

          /* cubic bezier: control points meet at horizontal midpoint → smooth S-curve */
          var mx   = (x1 + x2) / 2;
          var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          path.setAttribute('d', 'M ' + x1 + ',' + y1 + ' C ' + mx + ',' + y1 + ' ' + mx + ',' + y2 + ' ' + x2 + ',' + y2);
          path.setAttribute('fill', 'none');
          path.setAttribute('stroke', conn.active ? '#a855f7' : 'rgba(255,255,255,0.45)');
          path.setAttribute('stroke-width', '1.5');
          if (!conn.active) path.setAttribute('stroke-dasharray', '4 3');
          svg.appendChild(path);
        });
      }

      /* format switcher (SE / DE / Swiss) */
      bkFmtBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          bkFmtBtns.forEach(function(b){ b.classList.remove('active'); });
          btn.classList.add('active');
          var fmt = btn.getAttribute('data-bkfmt');
          Object.keys(bkPanels).forEach(function(k){
            if (bkPanels[k]) bkPanels[k].style.display = (k === fmt) ? '' : 'none';
          });
          /* redraw beziers when switching back to SE */
          if (fmt === 'se') { setTimeout(drawSEBezier, 20); }
        });
      });

      /* tournament items → open bracket */
      var tournItems = overlay.querySelectorAll('.skb-mob-tourn-item');

      tournItems.forEach(function (item) {
        item.addEventListener('click', function () {
          /* update title */
          var nameEl = item.querySelector('.skb-mob-tourn-name');
          if (bkTitle && nameEl) bkTitle.textContent = nameEl.textContent;

          /* reset to SE format */
          bkFmtBtns.forEach(function(b){ b.classList.remove('active'); });
          if (bkFmtBtns[0]) bkFmtBtns[0].classList.add('active');
          Object.keys(bkPanels).forEach(function(k){
            if (bkPanels[k]) bkPanels[k].style.display = (k === 'se') ? '' : 'none';
          });

          /* reset scroll */
          bracketView.scrollTop = 0;

          /* show bracket view then draw beziers (needs layout to be done first) */
          deactivateAllTabs();
          hideAllViews();
          bracketView.style.display = 'flex';
          setTimeout(drawSEBezier, 30);
        });
      });

      /* back button → return to esport view */
      var backBtn = bracketView.querySelector('.skb-mob-bk-back');
      if (backBtn) {
        backBtn.addEventListener('click', function () {
          deactivateAllTabs(); activateTab(allNavTabs[0]);
          hideAllViews();
          esportView.style.display = 'block';
        });
      }
    })();

    /* ── Game view (clic sur une carte de jeu dans l'onglet Esport) ── */
    (function () {
      if (!gameView) return;

      /* Données par jeu : titre, image banner, icon, couleur overlay, followers */
      var gameData = {
        'LoL':              { name: 'League of Legends', banner: 'img_M/game_card/CARD-LOL.png',           icon: 'img_M/logo lol.png',                         color: 'rgba(239,68,68,0.15)',   followers: '2,341,089' },
        'CS2':              { name: 'Counter-Strike 2',  banner: 'img_M/game_card/CARD-CS2.png',           icon: 'img_M/logocs2.png',                          color: 'rgba(250,204,21,0.15)',  followers: '1,847,312' },
        'Dota 2':           { name: 'Dota 2',            banner: 'img_M/game_card/CARD-DOTA2.png',         icon: 'img_M/logo dota2.png',                       color: 'rgba(77,130,245,0.15)',  followers: '983,450' },
        'Fortnite':         { name: 'Fortnite',          banner: 'img_M/game_card/CARD-FORTNITE.png',      icon: 'img_M/game_card/CARD-FORTNITE.png',          color: 'rgba(99,179,237,0.15)',  followers: '3,102,774' },
        'Call of Duty':     { name: 'Call of Duty',      banner: 'img_M/game_card/CARD-CALLOFDUTY.png',    icon: 'img_M/game_card/CARD-CALLOFDUTY.png',        color: 'rgba(34,197,94,0.12)',   followers: '1,204,561' },
        'FIFA':             { name: 'FIFA / EA FC',      banner: 'img_M/game_card/CARD-FIFA.png',          icon: 'img_M/game_card/CARD-FIFA.png',              color: 'rgba(250,204,21,0.12)',  followers: '4,587,220' },
        'Valorant':         { name: 'Valorant',          banner: 'img_M/game_card/AFFICHE-VALORANT.png',   icon: 'img_M/game_card/AFFICHE-VALORANT.png',       color: 'rgba(255,70,85,0.15)',   followers: '1,673,908' },
        'Hearthstone':      { name: 'Hearthstone',       banner: 'img_M/game_card/CARD-HEARTHSTONE.png',   icon: 'img_M/game_card/CARD-HEARTHSTONE.png',       color: 'rgba(250,170,60,0.15)',  followers: '512,340' },
        'Deadlock':         { name: 'Deadlock',          banner: 'img_M/game_card/CARD-DEADLOCK.png',      icon: 'img_M/game_card/CARD-DEADLOCK.png',          color: 'rgba(168,85,247,0.15)',  followers: '289,103' },
        'Chess':            { name: 'Chess',             banner: 'img_M/game_card/CARD-CHESS.png',         icon: 'img_M/game_card/CARD-CHESS.png',             color: 'rgba(255,255,255,0.08)', followers: '743,890' },
        'CrossFire':        { name: 'CrossFire',         banner: 'img_M/game_card/CARD-CROSSFIRE.png',     icon: 'img_M/game_card/CARD-CROSSFIRE.png',         color: 'rgba(239,68,68,0.12)',   followers: '418,227' },
        'Rocket League':    { name: 'Rocket League',     banner: 'img_M/game_card/AFFICHE-ROCKET-LEAGUE.png', icon: 'img_M/game_card/AFFICHE-ROCKET-LEAGUE.png', color: 'rgba(99,179,237,0.15)', followers: '634,518' },
        'Overwatch':        { name: 'Overwatch 2',       banner: 'img_M/game_card/AFFICHE-OVERWATCH.png',  icon: 'img_M/game_card/AFFICHE-OVERWATCH.png',      color: 'rgba(250,120,50,0.15)',  followers: '891,034' },
        'PUBG':             { name: 'PUBG',              banner: "img_M/game_card/AFFICHE-Playerunknown's.png", icon: "img_M/game_card/AFFICHE-Playerunknown's.png", color: 'rgba(250,204,21,0.12)', followers: '1,056,782' },
      };

      var gvBannerImg     = gameView.querySelector('#skbGvBannerImg');
      var gvBannerOverlay = gameView.querySelector('#skbGvBannerOverlay');
      var gvIcon          = gameView.querySelector('#skbGvIcon');
      var gvTitle         = gameView.querySelector('#skbGvTitle');
      var gvGameName      = gameView.querySelector('#skbGvGameName');
      var gvFollowers     = gameView.querySelector('#skbGvFollowers');

      /* Clic sur une carte dans la grille esport */
      var gcItems = overlay.querySelectorAll('.skb-mob-gc-item');
      gcItems.forEach(function (item) {
        item.addEventListener('click', function () {
          var img = item.querySelector('img');
          var alt = img ? img.getAttribute('alt') : '';
          var data = gameData[alt] || { name: alt || 'Esport', banner: (img ? img.src : ''), icon: (img ? img.src : ''), color: 'rgba(168,85,247,0.15)' };

          /* Mise à jour du contenu dynamique */
          if (gvBannerImg) gvBannerImg.src = data.banner;
          if (gvBannerOverlay) gvBannerOverlay.style.background = 'linear-gradient(135deg,' + data.color + ' 0%,rgba(7,11,31,0.85) 60%)';
          if (gvIcon) gvIcon.src = data.icon;
          if (gvTitle) gvTitle.textContent = alt;
          if (gvGameName) gvGameName.textContent = data.name;
          if (gvFollowers) gvFollowers.textContent = 'Followed by ' + (data.followers || Math.floor(Math.random()*900+100)+','+Math.floor(Math.random()*900+100)) + ' people';

          deactivateAllTabs(); activateTab(allNavTabs[0]);
          hideAllViews();
          gameView.style.display = 'flex';
          gameView.scrollTop = 0;
          var tlist = gameView.querySelector('.skb-mob-gv-tlist');
          if (tlist) tlist.style.minHeight = '130px';
          var ptrack = gameView.querySelector('.skb-mob-players-track');
          if (ptrack) {
            ptrack.style.minHeight = '220px';
            ptrack.style.alignItems = 'flex-start';
            ptrack.querySelectorAll('.tp-pc').forEach(function(c){ c.style.minHeight = '210px'; });
          }
        });
      });

      /* Bouton retour → vue esport */
      var gvBack = gameView.querySelector('#skbGvBack');
      if (gvBack) gvBack.addEventListener('click', function () {
        deactivateAllTabs(); activateTab(allNavTabs[0]);
        hideAllViews();
        esportView.style.display = 'block';
      });

      /* Other Matches — génération des 35 cartes */
      (function () {
        var omContainer = gameView.querySelector('#skbOtherMatches');
        if (!omContainer) return;
        var teams = [
          { name: 'NaVi',       logo: 'img_M/logocs2.png' },
          { name: 'Vitality',   logo: 'img_M/logocs2.png' },
          { name: 'G2',         logo: 'img_M/logocs2.png' },
          { name: 'FaZe',       logo: 'img_M/logocs2.png' },
          { name: 'Heroic',     logo: 'img_M/logocs2.png' },
          { name: 'Astralis',   logo: 'img_M/logocs2.png' },
          { name: 'Liquid',     logo: 'img_M/logocs2.png' },
          { name: 'MOUZ',       logo: 'img_M/logocs2.png' },
          { name: 'Spirit',     logo: 'img_M/logocs2.png' },
          { name: 'Complexity', logo: 'img_M/logocs2.png' },
          { name: 'BIG',        logo: 'img_M/logocs2.png' },
          { name: 'ENCE',       logo: 'img_M/logocs2.png' },
          { name: 'Outsiders',  logo: 'img_M/logocs2.png' },
          { name: 'Cloud9',     logo: 'img_M/logocs2.png' },
          { name: 'fnatic',     logo: 'img_M/logocs2.png' },
          { name: 'OG',         logo: 'img_M/logocs2.png' },
          { name: 'paiN',       logo: 'img_M/logocs2.png' },
          { name: 'FURIA',      logo: 'img_M/logocs2.png' },
          { name: 'VP',         logo: 'img_M/logocs2.png' },
          { name: 'NiP',        logo: 'img_M/logocs2.png' },
        ];
        var tourneys = ['ESL Pro League S21', 'IEM Cologne 2025', 'BLAST Premier', 'PGL Major', 'IEM Katowice', 'ESL One Berlin', 'BLAST Spring Final'];
        var times = ['Live', 'Auj. 18:00', 'Auj. 20:30', 'Auj. 22:00', 'Dem. 14:00', 'Dem. 17:30', 'Dem. 21:00', 'J+2 15:00', 'J+3 19:00'];
        function rnd(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
        function odd() { var v = (1 + Math.random() * 3.5).toFixed(2); return v; }
        var html = '';
        for (var i = 0; i < 35; i++) {
          var t1 = teams[rnd(0, teams.length - 1)];
          var t2 = teams[rnd(0, teams.length - 1)];
          while (t2.name === t1.name) t2 = teams[rnd(0, teams.length - 1)];
          var tourn = tourneys[rnd(0, tourneys.length - 1)];
          var time  = times[rnd(0, times.length - 1)];
          var o1 = odd(), o2 = odd(), od = (Math.random() > 0.5 ? (1 + Math.random() * 1.5).toFixed(2) : 'N/A');
          var liveTag = time === 'Live' ? ' <span style="color:#e91e8c;font-size:9px;font-weight:900;">● LIVE</span>' : '';
          html += '<div class="skb-mob-gv-om-card">' +
            '<div class="skb-mob-gv-om-label">' + tourn + ' · ' + time + liveTag + '</div>' +
            '<div class="skb-mob-gv-om-row">' +
              '<div class="skb-mob-gv-om-team"><img src="' + t1.logo + '" alt=""/><span class="skb-mob-gv-om-name">' + t1.name + '</span></div>' +
              '<span class="skb-mob-gv-om-vs">VS</span>' +
              '<div class="skb-mob-gv-om-team right"><img src="' + t2.logo + '" alt=""/><span class="skb-mob-gv-om-name">' + t2.name + '</span></div>' +
            '</div>' +
            '<div class="skb-mob-gv-om-odds">' +
              '<div class="skb-mob-gv-om-odd">' + o1 + '</div>' +
              '<div class="skb-mob-gv-om-odd" style="background:rgba(255,255,255,0.04);font-size:10px;color:rgba(255,255,255,0.3);">Draw</div>' +
              '<div class="skb-mob-gv-om-odd">' + o2 + '</div>' +
            '</div>' +
          '</div>';
        }
        omContainer.innerHTML = html;
      })();
    })();

    /* ── Game filter logic ── */
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        /* update active pill */
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        var game = btn.getAttribute('data-game');

        /* show/hide cards */
        matchCards.forEach(function (card) {
          if (game === 'all' || card.getAttribute('data-game') === game) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    /* ── Drag-to-scroll for horizontal carousels (desktop mouse + touch fix) ── */
    (function () {
      var tracks = overlay.querySelectorAll(
        '.skb-mob-hot-track, .skb-mob-players-track, .skb-mob-tc-track, .skb-mob-bk-tree-wrap'
      );
      tracks.forEach(function (el) {
        var startX, startScroll, dragging = false;

        el.addEventListener('mousedown', function (e) {
          if (e.target.closest && e.target.closest('button,a')) return;
          dragging    = true;
          startX      = e.pageX;
          startScroll = el.scrollLeft;
          el.style.userSelect = 'none';
          e.preventDefault();
        });

        document.addEventListener('mousemove', function (e) {
          if (!dragging) return;
          el.scrollLeft = startScroll - (e.pageX - startX);
        });

        document.addEventListener('mouseup', function () {
          if (!dragging) return;
          dragging = false;
          el.style.userSelect = '';
        });
      });
    })();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountOverlay);
  } else {
    mountOverlay();
  }

})();
