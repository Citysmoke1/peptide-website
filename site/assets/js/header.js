/* Injects the site header/nav into <div id="site-header"></div>.
   Active link is determined by document.body.dataset.page. */
(function(){
  var page = document.body.getAttribute('data-page') || '';
  var root = document.body.getAttribute('data-root') || '';
  var cfg = window.AURUM_CONFIG || { social:{} };

  var ICON = {
    discord: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="7" width="16" height="11" rx="4"/><path d="M8 7c.3-1.6 1.7-3 4-3s3.7 1.4 4 3"/><circle cx="9.5" cy="12.5" r="1" fill="currentColor" stroke="none"/><circle cx="14.5" cy="12.5" r="1" fill="currentColor" stroke="none"/><path d="M9 16c1 .7 4 .7 6 0"/></svg>',
    cart: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="20" r="1.4" fill="currentColor" stroke="none"/><circle cx="18" cy="20" r="1.4" fill="currentColor" stroke="none"/><path d="M2.5 3h2.4l2.1 11.3a2 2 0 0 0 2 1.7h8.4a2 2 0 0 0 2-1.6L21 8H6"/></svg>'
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
    + '      <a href="' + root + 'cart.html" class="icon-btn" aria-label="Cart" title="Cart">' + ICON.cart + '<span class="cart-count" id="cartCount">0</span></a>'
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
    if(window.AurumCart){ window.AurumCart.refreshBadge(); }
  });
})();
