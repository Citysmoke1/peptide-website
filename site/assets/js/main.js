/* Shared site utilities: age gate, accordion, toast, vial illustration, helpers */
(function(){
  window.Aurum = window.Aurum || {};

  function qs(sel, ctx){ return (ctx||document).querySelector(sel); }
  function qsa(sel, ctx){ return Array.prototype.slice.call((ctx||document).querySelectorAll(sel)); }
  function getParam(name){
    var m = new RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return m ? decodeURIComponent(m[1].replace(/\+/g,' ')) : null;
  }
  function formatPrice(n){ return '$' + Number(n).toFixed(2) + ' AUD'; }

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

  /* ---------- Blog category illustrations (inline SVG, gold-line-art on dark) ---------- */
  var iconUid = 0;
  function iconWrap(inner, uid){
    return ''
      + '<svg class="blog-icon" viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">'
      + '  <defs>'
      + '    <linearGradient id="ic' + uid + '" x1="0" y1="0" x2="1" y2="1">'
      + '      <stop offset="0" stop-color="#f2d998"/><stop offset=".55" stop-color="#c9a24b"/><stop offset="1" stop-color="#8a7233"/>'
      + '    </linearGradient>'
      + '  </defs>'
      + inner
      + '</svg>';
  }

  /* Metabolic Research — peptide chain docking into a receptor gap */
  function iconMetabolic(uid){
    return iconWrap(''
      + '  <g fill="none" stroke="url(#ic' + uid + ')" stroke-width="2.4" stroke-linecap="round">'
      + '    <path d="M40 55 L64 40 L88 55 L112 40 L136 55 L160 40"/>'
      + '  </g>'
      + '  <g fill="none" stroke="#5c4c22" stroke-width="10" stroke-linecap="round">'
      + '    <path d="M40 96 Q68 84 90 96"/>'
      + '    <path d="M110 96 Q132 84 160 96"/>'
      + '  </g>'
      + '  <g fill="url(#ic' + uid + ')">'
      + '    <circle cx="40" cy="55" r="5"/><circle cx="64" cy="40" r="5"/><circle cx="88" cy="55" r="5"/>'
      + '    <circle cx="112" cy="40" r="5"/><circle cx="136" cy="55" r="5"/><circle cx="160" cy="40" r="5"/>'
      + '    <circle cx="100" cy="88" r="6"/>'
      + '  </g>', uid);
  }

  /* CNS Research — neuron with dendrites firing across a synapse */
  function iconCNS(uid){
    return iconWrap(''
      + '  <g fill="none" stroke="url(#ic' + uid + ')" stroke-width="2.2" stroke-linecap="round">'
      + '    <path d="M55 75 L30 55 M55 75 L28 75 M55 75 L32 96 M55 75 L48 50"/>'
      + '    <path d="M55 75 L140 75"/>'
      + '    <path d="M140 75 L165 55 M140 75 L167 75 M140 75 L163 96 M140 75 L147 50"/>'
      + '  </g>'
      + '  <circle cx="55" cy="75" r="13" fill="none" stroke="url(#ic' + uid + ')" stroke-width="2.4"/>'
      + '  <circle cx="140" cy="75" r="9" fill="none" stroke="url(#ic' + uid + ')" stroke-width="2.4"/>'
      + '  <g fill="#e3c374"><circle cx="90" cy="75" r="2.6"/><circle cx="105" cy="75" r="2.6"/><circle cx="120" cy="75" r="2.6"/></g>', uid);
  }

  /* Dermal Research — layered skin cross-section with a collagen helix */
  function iconDermal(uid){
    return iconWrap(''
      + '  <g fill="none" stroke="#5c4c22" stroke-width="1.4">'
      + '    <path d="M20 45 Q100 30 180 45"/>'
      + '    <path d="M20 80 Q100 65 180 80"/>'
      + '    <path d="M20 115 Q100 100 180 115"/>'
      + '  </g>'
      + '  <path d="M96 48 C110 55 82 62 96 69 C110 76 82 83 96 90 C110 97 82 104 96 111" fill="none" stroke="url(#ic' + uid + ')" stroke-width="2.6" stroke-linecap="round"/>', uid);
  }

  /* Endocrine Research — gland releasing hormone signal to a target cell */
  function iconEndocrine(uid){
    return iconWrap(''
      + '  <path d="M48 50 C60 50 64 62 60 70 C56 78 50 80 48 92 C46 80 40 78 36 70 C32 62 36 50 48 50 Z" fill="url(#ic' + uid + ')"/>'
      + '  <path d="M64 75 L150 75" stroke="url(#ic' + uid + ')" stroke-width="2" fill="none" stroke-linecap="round"/>'
      + '  <g fill="#e3c374"><circle cx="90" cy="75" r="3.6"/><circle cx="112" cy="75" r="3.6"/><circle cx="134" cy="75" r="3.6"/></g>'
      + '  <circle cx="165" cy="75" r="15" fill="none" stroke="url(#ic' + uid + ')" stroke-width="2.4"/>'
      + '  <circle cx="165" cy="75" r="5" fill="url(#ic' + uid + ')"/>', uid);
  }

  /* Specialty Research — precision receptor targeting */
  function iconSpecialty(uid){
    return iconWrap(''
      + '  <circle cx="100" cy="75" r="42" fill="none" stroke="url(#ic' + uid + ')" stroke-width="2"/>'
      + '  <circle cx="100" cy="75" r="26" fill="none" stroke="#5c4c22" stroke-width="1.4"/>'
      + '  <g stroke="url(#ic' + uid + ')" stroke-width="2.2" stroke-linecap="round">'
      + '    <path d="M100 22 L100 34 M100 116 L100 128 M47 75 L59 75 M141 75 L153 75"/>'
      + '    <path d="M90 75 L106 66 M90 75 L106 84"/>'
      + '  </g>'
      + '  <g fill="url(#ic' + uid + ')"><circle cx="90" cy="75" r="4.2"/><circle cx="106" cy="66" r="4.2"/><circle cx="106" cy="84" r="4.2"/></g>', uid);
  }

  var blogIcons = {
    'Metabolic Research': iconMetabolic,
    'CNS Research': iconCNS,
    'Dermal Research': iconDermal,
    'Endocrine Research': iconEndocrine,
    'Specialty Research': iconSpecialty
  };
  function blogIconSVG(category){
    var uid = 'bi' + (iconUid++);
    var fn = blogIcons[category];
    return fn ? fn(uid) : null;
  }

  window.Aurum = { qs:qs, qsa:qsa, getParam:getParam, formatPrice:formatPrice, initAgeGate:initAgeGate,
    initAccordion:initAccordion, initTabs:initTabs, showToast:showToast, vialSVG:vialSVG, blogIconSVG:blogIconSVG };

  document.addEventListener('DOMContentLoaded', function(){
    initAgeGate();
    var mm = qs('#mobileMenuOverlay'); // reserved
  });
})();
