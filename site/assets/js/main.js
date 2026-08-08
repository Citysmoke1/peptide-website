/* Shared site utilities: age gate, accordion, toast, vial illustration, helpers */
(function(){
  window.Aurum = window.Aurum || {};

  function qs(sel, ctx){ return (ctx||document).querySelector(sel); }
  function qsa(sel, ctx){ return Array.prototype.slice.call((ctx||document).querySelectorAll(sel)); }
  function getParam(name){
    var m = new RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g,' ')) : null;
  }
  function formatPrice(n){ return '$' + Number(n).toFixed(2); }

  /* ---------- Age / research-use gate ---------- */
  function initAgeGate(){
    if(localStorage.getItem('aurum_age_verified') === 'yes') return;
    var root = document.body.getAttribute('data-root') || '';
    var overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'ageGate';
    overlay.innerHTML = ''
      + '<div class="modal-box">'
      + '  <img src="' + root + 'assets/img/logo.jpeg" alt="Logo">'
      + '  <h3>Research Use Only</h3>'
      + '  <p>The Aurum Peptide Co sells reference-standard compounds strictly for laboratory research by qualified professionals. Products are <strong>not for human or veterinary use</strong> and are not drugs, food, cosmetics or medicines.</p>'
      + '  <p>By entering, you confirm you are <strong>18 years or older</strong> and purchasing solely for lawful in-vitro research purposes.</p>'
      + '  <div class="modal-actions">'
      + '     <a class="btn btn-outline-light btn-sm" href="https://www.google.com" style="flex:1;">Leave Site</a>'
      + '     <button class="btn btn-gold btn-sm" id="ageGateEnter" style="flex:1;">I Confirm &amp; Enter</button>'
      + '  </div>'
      + '</div>';
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
    qs('#ageGateEnter', overlay).addEventListener('click', function(){
      localStorage.setItem('aurum_age_verified', 'yes');
      overlay.remove();
      document.body.style.overflow = '';
    });
  }

  /* ---------- Accordion (FAQ) ---------- */
  function initAccordion(container){
    qsa('.accordion-item', container).forEach(function(item){
      var btn = qs('.accordion-btn', item);
      var panel = qs('.accordion-panel', item);
      btn.addEventListener('click', function(){
        var isOpen = item.classList.contains('open');
        qsa('.accordion-item', container).forEach(function(i){
          i.classList.remove('open');
          qs('.accordion-panel', i).style.maxHeight = null;
        });
        if(!isOpen){
          item.classList.add('open');
          panel.style.maxHeight = panel.scrollHeight + 40 + 'px';
        }
      });
    });
  }

  /* ---------- Tabs (product detail) ---------- */
  function initTabs(container){
    qsa('.pd-tab-btn', container).forEach(function(btn){
      btn.addEventListener('click', function(){
        qsa('.pd-tab-btn', container).forEach(function(b){ b.classList.remove('active'); });
        qsa('.pd-tab-panel', container).forEach(function(p){ p.classList.remove('active'); });
        btn.classList.add('active');
        qs('#' + btn.getAttribute('data-tab')).classList.add('active');
      });
    });
  }

  /* ---------- Toast ---------- */
  var toastTimer;
  function showToast(msg){
    var t = qs('#globalToast');
    if(!t){
      t = document.createElement('div');
      t.className = 'toast';
      t.id = 'globalToast';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function(){ t.classList.remove('show'); }, 2600);
  }

  /* ---------- Vial illustration (inline SVG placeholder art) ---------- */
  var vialUid = 0;
  function vialSVG(initials, opts){
    opts = opts || {};
    var accent = opts.fill || '#c9a24b';
    var uid = 'v' + (vialUid++);
    return ''
      + '<svg class="vial" viewBox="0 0 120 220" xmlns="http://www.w3.org/2000/svg">'
      + '  <defs>'
      + '    <linearGradient id="cap' + uid + '" x1="0" y1="0" x2="0" y2="1">'
      + '      <stop offset="0" stop-color="#f2d998"/><stop offset=".5" stop-color="#c9a24b"/><stop offset="1" stop-color="#8a7233"/>'
      + '    </linearGradient>'
      + '    <linearGradient id="glass' + uid + '" x1="0" y1="0" x2="0" y2="1">'
      + '      <stop offset="0" stop-color="#232320"/><stop offset="1" stop-color="#0b0b0c"/>'
      + '    </linearGradient>'
      + '    <linearGradient id="sheen' + uid + '" x1="0" y1="0" x2="1" y2="1">'
      + '      <stop offset="0" stop-color="#ffffff" stop-opacity=".35"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/>'
      + '    </linearGradient>'
      + '  </defs>'
      + '  <rect x="40" y="0" width="40" height="10" rx="2" fill="url(#cap' + uid + ')"/>'
      + '  <rect x="36" y="8" width="48" height="20" rx="4" fill="url(#cap' + uid + ')"/>'
      + '  <rect x="30" y="26" width="60" height="148" rx="14" fill="url(#glass' + uid + ')" stroke="#e3c374" stroke-width="1.5" opacity=".97"/>'
      + '  <rect x="30" y="26" width="26" height="148" rx="14" fill="url(#sheen' + uid + ')"/>'
      + '  <rect x="23" y="118" width="74" height="44" rx="4" fill="#050505" stroke="#e3c374" stroke-width="1.3"/>'
      + '  <g stroke="#c9a24b" stroke-width="1.3" stroke-linecap="round">'
      + '    <path d="M39 127 L47 132 L55 127 L63 132 L71 127" fill="none"/>'
      + '  </g>'
      + '  <g fill="#e3c374"><circle cx="39" cy="127" r="1.8"/><circle cx="47" cy="132" r="1.8"/><circle cx="55" cy="127" r="1.8"/><circle cx="63" cy="132" r="1.8"/><circle cx="71" cy="127" r="1.8"/></g>'
      + '  <text x="60" y="148" font-family="Inter, sans-serif" font-size="14" font-weight="800" fill="#e3c374" text-anchor="middle">' + initials + '</text>'
      + '  <line x1="32" y1="154" x2="88" y2="154" stroke="#5c4c22" stroke-width="1"/>'
      + '  <text x="60" y="159" font-family="Inter, sans-serif" font-size="6" letter-spacing="1" fill="#c9c4b8" text-anchor="middle">RESEARCH USE</text>'
      + '  <rect x="23" y="165" width="74" height="8" rx="0" fill="' + accent + '"/>'
      + '</svg>';
  }

  window.Aurum = { qs:qs, qsa:qsa, getParam:getParam, formatPrice:formatPrice, initAgeGate:initAgeGate,
    initAccordion:initAccordion, initTabs:initTabs, showToast:showToast, vialSVG:vialSVG };

  document.addEventListener('DOMContentLoaded', function(){
    initAgeGate();
    var mm = qs('#mobileMenuOverlay'); // reserved
  });
})();
