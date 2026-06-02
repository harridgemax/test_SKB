/**
 * wallet.js — Shared Wallet Modal (Deposit / Withdrawal / History / Bonuses)
 * Usage: openWallet()  or  openWallet('withdrawal')
 */
(function () {
  'use strict';

  /* ─────────────────────────────────────────────
     STATE
  ───────────────────────────────────────────── */
  var S = {
    balance:       1247.50,
    withdrawable:  1197.50,   // lower because of active bonus
    tab:           'deposit',
    method:        'card',
    amount:        '',
    kycComplete:   false,     // flip to true to unlock withdrawals
  };

  var METHODS = [
    { id:'card',  label:'Card',          icon:'💳', fee:'0%', time:'Instant',    min:10,  max:10000 },
    { id:'paypal',label:'PayPal',        icon:'🅿',  fee:'0%', time:'Instant',    min:10,  max:5000  },
    { id:'btc',   label:'Bitcoin',       icon:'₿',  fee:'0%', time:'10–30 min',  min:20,  max:50000 },
    { id:'eth',   label:'Ethereum',      icon:'Ξ',  fee:'0%', time:'5–15 min',   min:20,  max:50000 },
    { id:'bank',  label:'Bank transfer', icon:'🏦', fee:'0%', time:'1–3 days',   min:50,  max:50000 },
  ];

  var HISTORY = [
    { type:'deposit',    method:'Card',          amount:500,  status:'completed', date:'May 28, 2026' },
    { type:'withdrawal', method:'PayPal',         amount:200,  status:'completed', date:'May 20, 2026' },
    { type:'deposit',    method:'Bitcoin',        amount:300,  status:'completed', date:'May 15, 2026' },
    { type:'withdrawal', method:'Bank transfer',  amount:150,  status:'pending',   date:'Jun 1, 2026'  },
    { type:'deposit',    method:'PayPal',         amount:100,  status:'completed', date:'Apr 30, 2026' },
    { type:'deposit',    method:'Card',          amount:247.5, status:'completed', date:'Apr 12, 2026' },
  ];

  var BONUSES = [
    {
      type:'active', name:'Welcome bonus',
      unlocked:50, required:100, wagered:35,
      expires:'Jun 15, 2026',
      desc:'Complete £100 in bets to unlock £50 bonus.',
    },
    {
      type:'available', name:'Reload bonus 20%',
      max:200,
      desc:'Deposit min. £50 to claim up to £200.',
    },
  ];

  /* ─────────────────────────────────────────────
     CSS
  ───────────────────────────────────────────── */
  var css = `
    #wlt-overlay {
      position:fixed; inset:0; z-index:9000;
      background:rgba(4,6,18,0.85);
      backdrop-filter:blur(6px);
      display:flex; align-items:center; justify-content:center;
      opacity:0; transition:opacity 0.22s; pointer-events:none;
    }
    #wlt-overlay.open { opacity:1; pointer-events:all; }

    #wlt-modal {
      width:640px; max-width:calc(100vw - 32px);
      max-height:calc(100vh - 48px);
      background:linear-gradient(160deg, #121630 0%, #0d1024 100%);
      border:1px solid rgba(139,92,246,0.28);
      border-radius:22px;
      display:flex; flex-direction:column;
      transform:translateY(16px) scale(0.98); transition:transform 0.22s cubic-bezier(.34,1.3,.64,1), opacity 0.22s;
      overflow:hidden;
      box-shadow:0 32px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.03) inset, 0 1px 0 rgba(255,255,255,0.07) inset;
    }
    #wlt-overlay.open #wlt-modal { transform:translateY(0) scale(1); }

    /* Header */
    .wlt-head {
      display:flex; align-items:center; justify-content:space-between;
      padding:22px 28px 18px;
      background:linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(236,72,153,0.06) 100%);
      border-bottom:1px solid rgba(139,92,246,0.15);
      flex-shrink:0;
      position:relative;
    }
    .wlt-head::after {
      content:''; position:absolute; bottom:0; left:28px; right:28px;
      height:1px;
      background:linear-gradient(90deg, transparent, rgba(139,92,246,0.4), transparent);
    }
    .wlt-balance-wrap { display:flex; flex-direction:column; gap:2px; }
    .wlt-balance-label {
      font-size:9px; font-weight:700; letter-spacing:2px; text-transform:uppercase;
      color:rgba(196,200,226,0.38); font-family:'Exo 2',sans-serif;
    }
    .wlt-balance-amount {
      font-family:'Rajdhani',sans-serif; font-size:34px; font-weight:700; line-height:1;
      background:linear-gradient(135deg, #e8eaf6 30%, #a78bfa 100%);
      -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
    }
    .wlt-balance-sub {
      font-size:10px; color:rgba(196,200,226,0.35); font-family:'Exo 2',sans-serif; margin-top:1px;
    }
    .wlt-head-right { display:flex; align-items:center; gap:10px; }
    .wlt-close {
      width:34px; height:34px; border-radius:10px;
      background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.08);
      display:flex; align-items:center; justify-content:center;
      cursor:pointer; color:rgba(196,200,226,0.45); font-size:15px; line-height:1;
      transition:background 0.15s, color 0.15s, border-color 0.15s;
    }
    .wlt-close:hover { background:rgba(239,68,68,0.12); border-color:rgba(239,68,68,0.3); color:#ef4444; }

    /* Tabs */
    .wlt-tabs {
      display:flex; border-bottom:1px solid rgba(139,92,246,0.12);
      flex-shrink:0; padding:0 28px; gap:4px;
      background:rgba(5,8,22,0.3);
    }
    .wlt-tab {
      padding:14px 16px 12px; text-align:center; cursor:pointer;
      font-family:'Exo 2',sans-serif; font-size:11px; font-weight:700; letter-spacing:0.8px;
      color:rgba(196,200,226,0.4); border-bottom:2px solid transparent; margin-bottom:-1px;
      transition:color 0.15s, border-color 0.15s; position:relative; user-select:none;
      text-transform:uppercase; white-space:nowrap;
    }
    .wlt-tab:hover { color:rgba(196,200,226,0.75); }
    .wlt-tab.active { color:#e8eaf6; border-bottom-color:#a855f7; }
    .wlt-tab-badge {
      position:absolute; top:10px; right:8px;
      width:6px; height:6px; border-radius:50%;
      background:#ec4899; border:1.5px solid #0d1024;
      box-shadow:0 0 6px rgba(236,72,153,0.7);
    }

    /* Body */
    .wlt-body { flex:1; overflow-y:auto; padding:24px 28px 0; min-height:0;
      scrollbar-width:thin; scrollbar-color:rgba(139,92,246,0.25) transparent; }
    .wlt-body::-webkit-scrollbar { width:3px; }
    .wlt-body::-webkit-scrollbar-thumb { background:rgba(139,92,246,0.25); border-radius:4px; }

    /* Panel */
    .wlt-panel { display:none; flex-direction:column; gap:20px; padding-bottom:24px; }
    .wlt-panel.active { display:flex; }

    /* Method selector */
    .wlt-methods { display:grid; grid-template-columns:repeat(5,1fr); gap:8px; }
    .wlt-method {
      display:flex; flex-direction:column; align-items:center; gap:6px;
      padding:13px 6px 11px; border-radius:12px; cursor:pointer;
      background:rgba(255,255,255,0.03); border:1.5px solid rgba(255,255,255,0.06);
      transition:background 0.15s, border-color 0.15s, transform 0.12s, box-shadow 0.15s;
      position:relative; overflow:hidden;
    }
    .wlt-method:hover { background:rgba(139,92,246,0.08); border-color:rgba(139,92,246,0.25); transform:translateY(-1px); }
    .wlt-method.sel {
      background:rgba(139,92,246,0.14); border-color:rgba(139,92,246,0.5);
      box-shadow:0 0 16px rgba(139,92,246,0.18), 0 0 0 1px rgba(139,92,246,0.1) inset;
    }
    .wlt-method.sel::after {
      content:'✓'; position:absolute; top:5px; right:6px;
      font-size:8px; font-weight:800; color:#a855f7;
    }
    .wlt-method-icon {
      font-size:22px; line-height:1;
      filter:drop-shadow(0 2px 4px rgba(0,0,0,0.3));
    }
    .wlt-method-label {
      font-size:9px; font-weight:700; letter-spacing:0.3px;
      color:rgba(196,200,226,0.5); white-space:nowrap; font-family:'Exo 2',sans-serif;
    }
    .wlt-method.sel .wlt-method-label { color:#c4c8e2; }

    /* Amount */
    .wlt-amount-wrap { position:relative; }
    .wlt-currency {
      position:absolute; left:18px; top:50%; transform:translateY(-50%);
      font-family:'Rajdhani',sans-serif; font-size:24px; font-weight:700; color:rgba(196,200,226,0.3);
      pointer-events:none;
    }
    .wlt-amount-input {
      width:100%; padding:18px 18px 18px 38px;
      background:rgba(255,255,255,0.04); border:1.5px solid rgba(255,255,255,0.09);
      border-radius:14px; outline:none;
      font-family:'Rajdhani',sans-serif; font-size:32px; font-weight:700; color:#e8eaf6;
      transition:border-color 0.18s, box-shadow 0.18s, background 0.18s;
    }
    .wlt-amount-input:focus {
      border-color:rgba(168,85,247,0.6);
      background:rgba(139,92,246,0.06);
      box-shadow:0 0 0 3px rgba(139,92,246,0.12), 0 0 20px rgba(139,92,246,0.08);
    }
    .wlt-amount-input::placeholder { color:rgba(196,200,226,0.15); }

    .wlt-quick { display:flex; gap:8px; }
    .wlt-q {
      flex:1; padding:9px 0; text-align:center;
      background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.07);
      border-radius:10px; cursor:pointer;
      font-family:'Exo 2',sans-serif; font-size:11px; font-weight:700; color:rgba(196,200,226,0.5);
      transition:background 0.12s, color 0.12s, border-color 0.12s, transform 0.1s;
    }
    .wlt-q:hover {
      background:rgba(139,92,246,0.13); color:#c4c8e2;
      border-color:rgba(139,92,246,0.35); transform:translateY(-1px);
    }
    .wlt-q:active { transform:translateY(0); }

    /* Info row */
    .wlt-info { display:grid; grid-template-columns:repeat(3,1fr); gap:8px; }
    .wlt-info-cell {
      background:rgba(255,255,255,0.025); border:1px solid rgba(255,255,255,0.055);
      border-radius:11px; padding:12px 14px;
      transition:background 0.15s;
    }
    .wlt-info-cell:hover { background:rgba(255,255,255,0.04); }
    .wlt-info-label {
      font-size:9px; font-weight:700; letter-spacing:1.2px; text-transform:uppercase;
      color:rgba(196,200,226,0.3); font-family:'Exo 2',sans-serif;
    }
    .wlt-info-val { font-size:13px; font-weight:600; color:#c4c8e2; margin-top:4px; font-family:'Exo 2',sans-serif; }

    /* CTA */
    .wlt-cta {
      width:100%; padding:16px; border:none; border-radius:12px;
      background:linear-gradient(135deg, #7c3aed 0%, #9333ea 60%, #a855f7 100%);
      color:#fff;
      font-family:'Exo 2',sans-serif; font-size:12px; font-weight:800; letter-spacing:1.8px; text-transform:uppercase;
      cursor:pointer;
      transition:opacity 0.15s, box-shadow 0.2s, transform 0.12s;
      position:relative; overflow:hidden;
      box-shadow:0 4px 20px rgba(124,58,237,0.35);
    }
    .wlt-cta:not(:disabled):hover {
      box-shadow:0 6px 28px rgba(124,58,237,0.55);
      transform:translateY(-1px);
    }
    .wlt-cta:not(:disabled):active { transform:translateY(0); }
    .wlt-cta::before {
      content:''; position:absolute; inset:0;
      background:linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 50%);
      pointer-events:none;
    }
    .wlt-cta:disabled { opacity:0.3; cursor:not-allowed; box-shadow:none; }
    .wlt-cta.loading { pointer-events:none; }
    .wlt-cta .cta-spinner {
      display:none; width:18px; height:18px; border-radius:50%;
      border:2px solid rgba(255,255,255,0.3); border-top-color:#fff;
      animation:wlt-spin 0.7s linear infinite; margin:0 auto;
    }
    .wlt-cta.loading .cta-text { display:none; }
    .wlt-cta.loading .cta-spinner { display:block; }
    @keyframes wlt-spin { to { transform:rotate(360deg); } }

    /* Alert banners */
    .wlt-alert {
      display:flex; align-items:flex-start; gap:10px;
      padding:13px 16px; border-radius:11px;
      font-family:'Exo 2',sans-serif; font-size:12px; font-weight:500; line-height:1.55;
    }
    .wlt-alert.success { background:rgba(74,222,128,0.07); border:1px solid rgba(74,222,128,0.22); color:#4ade80; }
    .wlt-alert.error   { background:rgba(239,68,68,0.07);  border:1px solid rgba(239,68,68,0.2);   color:#ef4444; }
    .wlt-alert.info    { background:rgba(139,92,246,0.07); border:1px solid rgba(139,92,246,0.2);  color:#a855f7; }
    .wlt-alert.warning { background:rgba(245,158,11,0.07); border:1px solid rgba(245,158,11,0.2);  color:#f59e0b; }

    /* Withdrawal confirm step */
    .wlt-confirm { display:flex; flex-direction:column; gap:12px; }
    .wlt-confirm-row {
      display:flex; justify-content:space-between; align-items:center;
      padding:10px 0; border-bottom:1px solid rgba(139,92,246,0.1);
    }
    .wlt-confirm-row:last-of-type { border-bottom:none; }
    .wlt-confirm-label { font-size:11px; color:rgba(196,200,226,0.45); font-family:'Exo 2',sans-serif; }
    .wlt-confirm-val   { font-size:13px; font-weight:600; color:#d6d9ef; font-family:'Exo 2',sans-serif; }
    .wlt-confirm-btns  { display:flex; gap:10px; }
    .wlt-btn-cancel {
      flex:1; padding:14px; border:1px solid rgba(255,255,255,0.09); border-radius:11px;
      background:rgba(255,255,255,0.03); color:rgba(196,200,226,0.5);
      font-family:'Exo 2',sans-serif; font-size:11px; font-weight:700; letter-spacing:1px; text-transform:uppercase;
      cursor:pointer; transition:border-color 0.12s, color 0.12s, background 0.12s;
    }
    .wlt-btn-cancel:hover { border-color:rgba(255,255,255,0.18); color:#c4c8e2; background:rgba(255,255,255,0.05); }

    /* History */
    .wlt-tx { display:flex; flex-direction:column; }
    .wlt-tx-row {
      display:flex; align-items:center; gap:14px;
      padding:13px 0; border-bottom:1px solid rgba(255,255,255,0.04);
      transition:background 0.12s; border-radius:8px; margin:0 -8px; padding-left:8px; padding-right:8px;
    }
    .wlt-tx-row:last-child { border-bottom:none; }
    .wlt-tx-row:hover { background:rgba(255,255,255,0.025); }
    .wlt-tx-icon {
      width:38px; height:38px; border-radius:11px; flex-shrink:0;
      display:flex; align-items:center; justify-content:center;
      font-size:16px; font-weight:700;
    }
    .wlt-tx-icon.dep {
      background:rgba(74,222,128,0.1); color:#4ade80;
      border:1px solid rgba(74,222,128,0.2);
      box-shadow:0 0 12px rgba(74,222,128,0.08);
    }
    .wlt-tx-icon.wit {
      background:rgba(139,92,246,0.1); color:#a855f7;
      border:1px solid rgba(139,92,246,0.2);
      box-shadow:0 0 12px rgba(139,92,246,0.08);
    }
    .wlt-tx-info { flex:1; min-width:0; }
    .wlt-tx-method { font-size:13px; font-weight:600; color:#c4c8e2; font-family:'Exo 2',sans-serif; }
    .wlt-tx-date   { font-size:10px; color:rgba(196,200,226,0.38); margin-top:2px; font-family:'Exo 2',sans-serif; }
    .wlt-tx-right  { text-align:right; }
    .wlt-tx-amount { font-family:'Rajdhani',sans-serif; font-size:16px; font-weight:700; }
    .wlt-tx-amount.dep { color:#4ade80; }
    .wlt-tx-amount.wit { color:#c4c8e2; }
    .wlt-tx-status { font-size:9px; font-weight:700; letter-spacing:0.5px; margin-top:3px; font-family:'Exo 2',sans-serif; text-transform:uppercase; }
    .wlt-tx-status.completed { color:rgba(74,222,128,0.65); }
    .wlt-tx-status.pending   { color:rgba(245,158,11,0.8); }
    .wlt-tx-status.cancelled { color:rgba(239,68,68,0.7); }

    .wlt-filters { display:flex; gap:6px; }
    .wlt-filter {
      padding:6px 14px; border-radius:8px; cursor:pointer;
      font-family:'Exo 2',sans-serif; font-size:10px; font-weight:700; letter-spacing:0.5px;
      background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.07);
      color:rgba(196,200,226,0.45); transition:background 0.12s, color 0.12s, border-color 0.12s;
      text-transform:uppercase;
    }
    .wlt-filter.active {
      background:rgba(139,92,246,0.14); border-color:rgba(139,92,246,0.38); color:#c4c8e2;
    }
    .wlt-support {
      font-size:11px; color:rgba(196,200,226,0.3); font-family:'Exo 2',sans-serif;
      text-align:center; padding:4px 0 2px;
    }
    .wlt-support a { color:#8b5cf6; text-decoration:none; }
    .wlt-support a:hover { color:#a855f7; text-decoration:underline; }

    /* Bonuses */
    .wlt-bonus {
      background:rgba(255,255,255,0.025); border:1px solid rgba(255,255,255,0.06);
      border-radius:14px; padding:18px 20px;
      position:relative; overflow:hidden;
    }
    .wlt-bonus::before {
      content:''; position:absolute; left:0; top:0; bottom:0; width:3px;
      background:linear-gradient(180deg, #7c3aed, #ec4899);
      border-radius:3px 0 0 3px;
    }
    .wlt-bonus-head { display:flex; align-items:center; justify-content:space-between; margin-bottom:10px; }
    .wlt-bonus-name { font-size:14px; font-weight:700; color:#d6d9ef; font-family:'Exo 2',sans-serif; }
    .wlt-bonus-tag {
      font-size:9px; font-weight:700; letter-spacing:0.7px; padding:3px 10px; border-radius:20px;
      font-family:'Exo 2',sans-serif; text-transform:uppercase;
    }
    .wlt-bonus-tag.active    { background:rgba(74,222,128,0.1); border:1px solid rgba(74,222,128,0.25); color:#4ade80; }
    .wlt-bonus-tag.available { background:rgba(139,92,246,0.12); border:1px solid rgba(139,92,246,0.3); color:#a855f7; }
    .wlt-bonus-desc { font-size:11.5px; color:rgba(196,200,226,0.48); font-family:'Exo 2',sans-serif; margin-bottom:14px; line-height:1.55; }
    .wlt-progress-track { height:5px; background:rgba(255,255,255,0.07); border-radius:4px; overflow:hidden; margin-bottom:6px; }
    .wlt-progress-fill {
      height:100%; border-radius:4px;
      background:linear-gradient(90deg, #7c3aed, #a855f7);
      box-shadow:0 0 8px rgba(139,92,246,0.5);
    }
    .wlt-progress-label { font-size:10px; color:rgba(196,200,226,0.38); font-family:'Exo 2',sans-serif; }
    .wlt-bonus-expires { font-size:10px; color:rgba(196,200,226,0.28); font-family:'Exo 2',sans-serif; margin-top:8px; }

    /* Footer */
    .wlt-foot {
      flex-shrink:0; padding:12px 28px;
      border-top:1px solid rgba(139,92,246,0.1);
      font-size:10px; color:rgba(196,200,226,0.22); font-family:'Exo 2',sans-serif;
      text-align:center; line-height:1.6;
      background:rgba(5,8,22,0.3);
    }
    .wlt-foot a { color:rgba(139,92,246,0.5); text-decoration:none; }
    .wlt-foot a:hover { color:#a855f7; }

    /* Section label */
    .wlt-section-label {
      font-size:9px; font-weight:700; letter-spacing:2px; text-transform:uppercase;
      color:rgba(196,200,226,0.28); font-family:'Exo 2',sans-serif; margin-bottom:8px;
    }
  `;

  var styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  /* ─────────────────────────────────────────────
     BUILD MODAL
  ───────────────────────────────────────────── */
  function buildModal() {
    var overlay = document.createElement('div');
    overlay.id = 'wlt-overlay';
    overlay.innerHTML = `
      <div id="wlt-modal">

        <div class="wlt-head">
          <div class="wlt-balance-wrap">
            <span class="wlt-balance-label">Total Balance</span>
            <span class="wlt-balance-amount" id="wlt-bal">£${fmt(S.balance)}</span>
            <span class="wlt-balance-sub">Withdrawable: £${fmt(S.withdrawable)}</span>
          </div>
          <div class="wlt-head-right">
            <div class="wlt-close" id="wlt-close-btn">✕</div>
          </div>
        </div>

        <div class="wlt-tabs">
          <div class="wlt-tab active" data-tab="deposit">Deposit</div>
          <div class="wlt-tab" data-tab="withdrawal">Withdraw</div>
          <div class="wlt-tab" data-tab="history">History</div>
          <div class="wlt-tab" data-tab="bonuses">Bonuses<span class="wlt-tab-badge"></span></div>
        </div>

        <div class="wlt-body">

          <!-- ── DEPOSIT ── -->
          <div class="wlt-panel active" id="wlt-deposit">
            <div>
              <div class="wlt-section-label">Payment method</div>
              <div class="wlt-methods" id="wlt-methods-dep"></div>
            </div>
            <div>
              <div class="wlt-section-label">Amount</div>
              <div class="wlt-amount-wrap">
                <span class="wlt-currency">£</span>
                <input class="wlt-amount-input" id="wlt-dep-input" type="number" placeholder="0" min="0"/>
              </div>
            </div>
            <div class="wlt-quick" id="wlt-quick-dep"></div>
            <div class="wlt-info" id="wlt-info-dep"></div>
            <div id="wlt-dep-alert"></div>
            <button class="wlt-cta" id="wlt-dep-cta" disabled>
              <span class="cta-text" id="wlt-dep-cta-text">Enter an amount</span>
              <span class="cta-spinner"></span>
            </button>
          </div>

          <!-- ── WITHDRAWAL ── -->
          <div class="wlt-panel" id="wlt-withdrawal">
            <div id="wlt-wit-kyc-banner"></div>
            <div id="wlt-wit-body">
              <div>
                <div class="wlt-section-label">Method</div>
                <div class="wlt-methods" id="wlt-methods-wit"></div>
              </div>
              <div>
                <div class="wlt-section-label">Amount</div>
                <div class="wlt-amount-wrap">
                  <span class="wlt-currency">£</span>
                  <input class="wlt-amount-input" id="wlt-wit-input" type="number" placeholder="0" min="0"/>
                </div>
              </div>
              <div class="wlt-quick" id="wlt-quick-wit"></div>
              <div class="wlt-info" id="wlt-info-wit"></div>
              <div id="wlt-wit-alert"></div>
              <div id="wlt-wit-confirm-step" style="display:none;" class="wlt-confirm">
                <div class="wlt-section-label">Confirm withdrawal</div>
                <div id="wlt-wit-confirm-rows"></div>
                <div class="wlt-confirm-btns">
                  <button class="wlt-btn-cancel" id="wlt-wit-back">← Back</button>
                  <button class="wlt-cta" id="wlt-wit-confirm-cta" style="flex:2;">
                    <span class="cta-text" id="wlt-wit-confirm-text">Confirm</span>
                    <span class="cta-spinner"></span>
                  </button>
                </div>
              </div>
              <div id="wlt-wit-form-step">
                <button class="wlt-cta" id="wlt-wit-cta" disabled style="margin-top:4px;">
                  <span class="cta-text" id="wlt-wit-cta-text">Enter an amount</span>
                  <span class="cta-spinner"></span>
                </button>
              </div>
            </div>
          </div>

          <!-- ── HISTORY ── -->
          <div class="wlt-panel" id="wlt-history">
            <div class="wlt-filters" id="wlt-hist-filters">
              <div class="wlt-filter active" data-f="all">All</div>
              <div class="wlt-filter" data-f="deposit">Deposits</div>
              <div class="wlt-filter" data-f="withdrawal">Withdrawals</div>
            </div>
            <div class="wlt-tx" id="wlt-tx-list"></div>
            <div class="wlt-support">Transaction stuck? <a href="#">Contact support</a></div>
          </div>

          <!-- ── BONUSES ── -->
          <div class="wlt-panel" id="wlt-bonuses">
            <div id="wlt-bonus-list"></div>
          </div>

        </div>

        <div class="wlt-foot">
          <a href="#">Responsible gambling</a> · Daily limit: £2,000 · 18+ · Gambling can be addictive — play responsibly
        </div>

      </div>
    `;
    document.body.appendChild(overlay);
    return overlay;
  }

  /* ─────────────────────────────────────────────
     HELPERS
  ───────────────────────────────────────────── */
  function fmt(n) {
    return Number(n).toLocaleString('en-GB', { minimumFractionDigits:2, maximumFractionDigits:2 });
  }

  function currentMethod(panel) {
    return METHODS.find(function(m){ return m.id === S.method; }) || METHODS[0];
  }

  function renderMethods(containerId) {
    var c = document.getElementById(containerId);
    if (!c) return;
    c.innerHTML = METHODS.map(function(m){
      return '<div class="wlt-method'+(m.id===S.method?' sel':'')+'" data-id="'+m.id+'">'+
             '<span class="wlt-method-icon">'+m.icon+'</span>'+
             '<span class="wlt-method-label">'+m.label+'</span>'+
             '</div>';
    }).join('');
    c.querySelectorAll('.wlt-method').forEach(function(el){
      el.addEventListener('click', function(){
        S.method = el.dataset.id;
        renderMethods(containerId);
        updateInfo();
      });
    });
  }

  function renderQuick(containerId, inputId, ctaId, ctaTextId) {
    var c = document.getElementById(containerId);
    if (!c) return;
    [10,25,50,100,200].forEach(function(v){
      var btn = document.createElement('div');
      btn.className = 'wlt-q';
      btn.textContent = '£'+v;
      btn.addEventListener('click', function(){
        var inp = document.getElementById(inputId);
        if (inp) { inp.value = v; inp.dispatchEvent(new Event('input')); }
      });
      c.appendChild(btn);
    });
  }

  function renderInfo(containerId, isWithdrawal) {
    var c = document.getElementById(containerId);
    if (!c) return;
    var m = currentMethod();
    c.innerHTML =
      '<div class="wlt-info-cell"><div class="wlt-info-label">Min / Max</div><div class="wlt-info-val">£'+m.min+' / £'+fmt(m.max)+'</div></div>'+
      '<div class="wlt-info-cell"><div class="wlt-info-label">Fees</div><div class="wlt-info-val">'+m.fee+'</div></div>'+
      '<div class="wlt-info-cell"><div class="wlt-info-label">Processing</div><div class="wlt-info-val">'+m.time+'</div></div>';
  }

  function updateInfo() {
    renderInfo('wlt-info-dep', false);
    renderInfo('wlt-info-wit', true);
  }

  function updateCta(inputId, ctaId, ctaTextId, isWithdrawal) {
    var inp = document.getElementById(inputId);
    var cta = document.getElementById(ctaId);
    var txt = document.getElementById(ctaTextId);
    if (!inp || !cta || !txt) return;
    var v = parseFloat(inp.value) || 0;
    var m = currentMethod();
    var limit = isWithdrawal ? S.withdrawable : Infinity;
    if (v < m.min || (v > m.max) || (isWithdrawal && v > limit)) {
      cta.disabled = true;
      if (v > 0 && v < m.min) txt.textContent = 'Min. £'+m.min;
      else if (v > m.max)      txt.textContent = 'Max. £'+fmt(m.max);
      else if (isWithdrawal && v > limit) txt.textContent = 'Exceeds withdrawable balance';
      else                     txt.textContent = 'Enter an amount';
    } else if (v > 0) {
      cta.disabled = false;
      txt.textContent = (isWithdrawal ? 'Withdraw' : 'Deposit') + ' £'+fmt(v);
    } else {
      cta.disabled = true;
      txt.textContent = 'Enter an amount';
    }
  }

  function renderHistory(filter) {
    var c = document.getElementById('wlt-tx-list');
    if (!c) return;
    var rows = filter === 'all' ? HISTORY : HISTORY.filter(function(t){ return t.type === filter; });
    c.innerHTML = rows.map(function(t){
      var dep = t.type === 'deposit';
      return '<div class="wlt-tx-row">'+
        '<div class="wlt-tx-icon '+(dep?'dep':'wit')+'">'+(dep?'↓':'↑')+'</div>'+
        '<div class="wlt-tx-info">'+
          '<div class="wlt-tx-method">'+t.method+'</div>'+
          '<div class="wlt-tx-date">'+t.date+'</div>'+
        '</div>'+
        '<div class="wlt-tx-right">'+
          '<div class="wlt-tx-amount '+(dep?'dep':'wit')+'">'+(dep?'+':'-')+'£'+fmt(t.amount)+'</div>'+
          '<div class="wlt-tx-status '+t.status+'">'+t.status.charAt(0).toUpperCase()+t.status.slice(1)+'</div>'+
        '</div>'+
      '</div>';
    }).join('');
  }

  function renderBonuses() {
    var c = document.getElementById('wlt-bonus-list');
    if (!c) return;
    c.innerHTML = BONUSES.map(function(b){
      if (b.type === 'active') {
        var pct = Math.round((b.wagered / b.required) * 100);
        return '<div class="wlt-bonus">'+
          '<div class="wlt-bonus-head">'+
            '<span class="wlt-bonus-name">'+b.name+'</span>'+
            '<span class="wlt-bonus-tag active">Active</span>'+
          '</div>'+
          '<div class="wlt-bonus-desc">'+b.desc+'</div>'+
          '<div class="wlt-progress-track"><div class="wlt-progress-fill" style="width:'+pct+'%"></div></div>'+
          '<div class="wlt-progress-label">£'+b.wagered+' / £'+b.required+' wagered ('+pct+'%)</div>'+
          '<div class="wlt-bonus-expires">Expires '+b.expires+'</div>'+
        '</div>';
      } else {
        return '<div class="wlt-bonus">'+
          '<div class="wlt-bonus-head">'+
            '<span class="wlt-bonus-name">'+b.name+'</span>'+
            '<span class="wlt-bonus-tag available">Available</span>'+
          '</div>'+
          '<div class="wlt-bonus-desc">'+b.desc+'</div>'+
          '<button class="wlt-cta" style="padding:10px;font-size:10px;">Claim bonus</button>'+
        '</div>';
      }
    }).join('');
  }

  function simulateAction(ctaEl, onDone) {
    ctaEl.classList.add('loading');
    setTimeout(function(){
      ctaEl.classList.remove('loading');
      onDone();
    }, 1400);
  }

  function showAlert(containerId, type, msg) {
    var c = document.getElementById(containerId);
    if (!c) return;
    c.innerHTML = '<div class="wlt-alert '+type+'">'+msg+'</div>';
    setTimeout(function(){ if(c) c.innerHTML = ''; }, 5000);
  }

  function refreshBalance() {
    var el = document.getElementById('wlt-bal');
    if (el) el.textContent = '£'+fmt(S.balance);
    var sub = document.querySelector('.wlt-balance-sub');
    if (sub) sub.textContent = 'Withdrawable: £'+fmt(S.withdrawable);
    var navBal = document.querySelector('.nav-balance-amount');
    if (navBal) navBal.textContent = '£'+fmt(S.balance);
  }

  /* ─────────────────────────────────────────────
     INIT EVENTS
  ───────────────────────────────────────────── */
  function initEvents() {
    /* Close */
    document.getElementById('wlt-close-btn').addEventListener('click', closeWallet);
    document.getElementById('wlt-overlay').addEventListener('click', function(e){
      if (e.target === this) closeWallet();
    });

    /* Tab switching */
    document.querySelectorAll('.wlt-tab').forEach(function(tab){
      tab.addEventListener('click', function(){
        S.tab = tab.dataset.tab;
        document.querySelectorAll('.wlt-tab').forEach(function(t){ t.classList.remove('active'); });
        document.querySelectorAll('.wlt-panel').forEach(function(p){ p.classList.remove('active'); });
        tab.classList.add('active');
        document.getElementById('wlt-'+S.tab).classList.add('active');
      });
    });

    /* Deposit methods + input */
    renderMethods('wlt-methods-dep');
    renderQuick('wlt-quick-dep', 'wlt-dep-input', 'wlt-dep-cta', 'wlt-dep-cta-text');
    renderInfo('wlt-info-dep', false);
    document.getElementById('wlt-dep-input').addEventListener('input', function(){
      S.amount = this.value;
      updateCta('wlt-dep-input','wlt-dep-cta','wlt-dep-cta-text', false);
    });
    document.getElementById('wlt-dep-cta').addEventListener('click', function(){
      var v = parseFloat(document.getElementById('wlt-dep-input').value) || 0;
      simulateAction(this, function(){
        S.balance += v;
        refreshBalance();
        document.getElementById('wlt-dep-input').value = '';
        updateCta('wlt-dep-input','wlt-dep-cta','wlt-dep-cta-text', false);
        showAlert('wlt-dep-alert','success','Deposit of £'+fmt(v)+' successful. Your balance has been updated.');
      });
    });

    /* Withdrawal KYC check */
    var kyc = document.getElementById('wlt-wit-kyc-banner');
    var witBody = document.getElementById('wlt-wit-body');
    if (!S.kycComplete) {
      kyc.innerHTML = '<div class="wlt-alert warning">Identity verification required — complete KYC in <a href="settings.html" style="color:inherit;font-weight:700;">Settings → KYC</a> to enable withdrawals.</div>';
      witBody.style.opacity = '0.35';
      witBody.style.pointerEvents = 'none';
    }

    /* Withdrawal methods + input */
    renderMethods('wlt-methods-wit');
    renderQuick('wlt-quick-wit', 'wlt-wit-input', 'wlt-wit-cta', 'wlt-wit-cta-text');
    renderInfo('wlt-info-wit', true);
    document.getElementById('wlt-wit-input').addEventListener('input', function(){
      updateCta('wlt-wit-input','wlt-wit-cta','wlt-wit-cta-text', true);
    });

    /* Withdrawal — go to confirm */
    document.getElementById('wlt-wit-cta').addEventListener('click', function(){
      var v = parseFloat(document.getElementById('wlt-wit-input').value) || 0;
      var m = currentMethod();
      document.getElementById('wlt-wit-form-step').style.display = 'none';
      document.getElementById('wlt-wit-confirm-step').style.display = 'flex';
      document.getElementById('wlt-wit-confirm-rows').innerHTML =
        '<div class="wlt-confirm-row"><span class="wlt-confirm-label">Method</span><span class="wlt-confirm-val">'+m.label+'</span></div>'+
        '<div class="wlt-confirm-row"><span class="wlt-confirm-label">Amount</span><span class="wlt-confirm-val">£'+fmt(v)+'</span></div>'+
        '<div class="wlt-confirm-row"><span class="wlt-confirm-label">Fees</span><span class="wlt-confirm-val">'+m.fee+'</span></div>'+
        '<div class="wlt-confirm-row"><span class="wlt-confirm-label">You receive</span><span class="wlt-confirm-val" style="color:#e8eaf6;font-size:15px;">£'+fmt(v)+'</span></div>'+
        '<div class="wlt-confirm-row"><span class="wlt-confirm-label">Processing time</span><span class="wlt-confirm-val">'+m.time+'</span></div>';
      document.getElementById('wlt-wit-confirm-text').textContent = 'Confirm withdrawal £'+fmt(v);
    });

    /* Withdrawal — back */
    document.getElementById('wlt-wit-back').addEventListener('click', function(){
      document.getElementById('wlt-wit-confirm-step').style.display = 'none';
      document.getElementById('wlt-wit-form-step').style.display = 'block';
    });

    /* Withdrawal — confirm */
    document.getElementById('wlt-wit-confirm-cta').addEventListener('click', function(){
      var v = parseFloat(document.getElementById('wlt-wit-input').value) || 0;
      simulateAction(this, function(){
        S.balance -= v;
        S.withdrawable -= v;
        refreshBalance();
        document.getElementById('wlt-wit-confirm-step').style.display = 'none';
        document.getElementById('wlt-wit-form-step').style.display = 'block';
        document.getElementById('wlt-wit-input').value = '';
        updateCta('wlt-wit-input','wlt-wit-cta','wlt-wit-cta-text', true);
        showAlert('wlt-wit-alert','success','Withdrawal of £'+fmt(v)+' submitted. Funds will arrive within '+currentMethod().time.toLowerCase()+'.');
      });
    });

    /* History filters */
    document.getElementById('wlt-hist-filters').addEventListener('click', function(e){
      var btn = e.target.closest('.wlt-filter');
      if (!btn) return;
      document.querySelectorAll('.wlt-filter').forEach(function(b){ b.classList.remove('active'); });
      btn.classList.add('active');
      renderHistory(btn.dataset.f);
    });
    renderHistory('all');

    /* Bonuses */
    renderBonuses();
  }

  /* ─────────────────────────────────────────────
     PUBLIC API
  ───────────────────────────────────────────── */
  window.openWallet = function (tab) {
    var overlay = document.getElementById('wlt-overlay');
    if (!overlay) {
      overlay = buildModal();
      initEvents();
    }
    if (tab) {
      S.tab = tab;
      document.querySelectorAll('.wlt-tab').forEach(function(t){ t.classList.toggle('active', t.dataset.tab === tab); });
      document.querySelectorAll('.wlt-panel').forEach(function(p){ p.classList.toggle('active', p.id === 'wlt-'+tab); });
    }
    overlay.classList.add('open');
  };

  window.closeWallet = function () {
    var overlay = document.getElementById('wlt-overlay');
    if (overlay) overlay.classList.remove('open');
  };

})();