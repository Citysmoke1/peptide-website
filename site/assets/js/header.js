/* Injects the site header/nav into <div id="site-header"></div>.
   Active link is determined by document.body.dataset.page. */
(function(){
  var page = document.body.getAttribute('data-page') || '';
  var root = document.body.getAttribute('data-root') || '';
  var cfg = window.AURUM_CONFIG || { social:{} };

  var ICON = {
    discord: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="7" width="16" height="11" rx="4"/><path d="M8 7c.3-1.6 1.7-3 4-3s3.7 1.4 4 3"/><circle cx="9.5" cy="12.5" r="1" fill="currentColor" stroke="none"/><circle cx="14.5" cy="12.5" r="1" fill="currentColor" stroke="none"/><path d="M9 16c1 .7 4 .7 6 0"/></svg>',
    order: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4"/><path d="M9 13h6M9 17h6M9 9h2"/></svg>'
  };

  function link(href, label, key){
    var active = (key === page) ? ' active' : '';
    return '<a href="' + root + href + '" class="' + active.trim() + '">' + label + '</a>';
  }
  function socialLink(cls, url, label, title, icon){
    return '<a href="' + url + '" class="' + cls + '" aria-label="' + label + '" title="' + title + '" target="_blank" rel="noopener">' + icon + '</a>';
  }

  var navLinks = ''
    + link('shop.html','Shop','shop')
    + link('blog.html','Blog','blog')
    + link('coa-library.html','CoA Library','coa')
    + link('about.html','About Us','about')
    + link('faq.html','FAQ','faq')
    + link('request-product.html','Request Product','request')
    + link('contact.html','Contact Us','contact')
    + link('track-order.html','Track Order','track')
    + '<div class="mobile-nav-social">'
    +   socialLink('mobile-social-link', cfg.social.discord || '#', 'Discord', 'Join our Discord', ICON.discord + ' Discord')
    + '</div>';

  var html = ''
    + '<div class="disclaimer-bar">'
    + '  <strong>Research Use Only.</strong> Not for human or veterinary use. Not a drug, food, cosmetic or medicine. '
    + '  <a href="' + root + 'terms.html">View full disclaimer</a>'
    + '</div>'
    + '<header class="site-header">'
    + '  <div class="nav-row">'
    + '    <a href="' + root + 'index.html" class="brand">'
    + '      <img src="' + root + 'assets/img/logo.jpeg" alt="The Aurum Peptide Co logo">'
    + '      <span class="brand-text"><span class="name">The Aurum Peptide Co</span><span class="tag">Premium Peptides &middot; Trusted Results</span></span>'
    + '    </a>'
    + '    <nav class="main-nav" id="mainNav">' + navLinks + '</nav>'
    + '    <div class="nav-actions">'
    + '      <div class="nav-social">'
    +          socialLink('icon-btn', cfg.social.discord || '#', 'Discord', 'Join our Discord', ICON.discord)
    + '      </div>'
    + '      <a href="' + root + 'shop.html#order-form" class="btn btn-gold btn-sm nav-enquire-btn">' + ICON.order + '<span>Enquire Now</span></a>'
    + '      <button class="nav-toggle" id="navToggle" aria-label="Menu">&#9776;</button>'
    + '    </div>'
    + '  </div>'
    + '</header>';

  var mount = document.getElementById('site-header');
  if(mount){ mount.innerHTML = html; }

  document.addEventListener('DOMContentLoaded', function(){
    var toggle = document.getElementById('navToggle');
    var nav = document.getElementById('mainNav');
    if(toggle && nav){
      toggle.addEventListener('click', function(){ nav.classList.toggle('open'); });
    }
  });
})();
