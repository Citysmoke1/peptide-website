/* Injects the site header/nav into <div id="site-header"></div>.
   Active link is determined by document.body.dataset.page. */
(function(){
  var page = document.body.getAttribute('data-page') || '';
  var root = document.body.getAttribute('data-root') || '';
  var cfg = window.AURUM_CONFIG || { social:{} };

  var ICON = {
    whatsapp: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12.5a7.5 7.5 0 1 1-3.4-6.3"/><path d="M20 12.5c0-1.1-.2-2-.6-2.9M14 3.4c1.7.4 3.2 1.4 4.3 2.8"/><path d="M8.5 9.2c.2-.5.6-.5.9-.5.3 0 .5 0 .7.4.2.4.7 1.5.7 1.6.1.2.1.3 0 .5-.1.2-.2.3-.3.5-.2.2-.3.3-.1.6.2.3.9 1.4 1.9 2.2 1.3 1 2.2 1.3 2.6 1.1.2-.1.4-.3.6-.6.1-.2.3-.2.5-.1l1.5.7c.2.1.3.2.3.4 0 .8-.9 1.6-1.7 1.7-1.4.2-2.9-.3-4.6-1.6-1.9-1.5-3-3.1-3.2-3.5-.2-.4-.7-1.4-.5-2.2z"/></svg>',
    telegram: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 4L3 11.5l6 2M21 4l-3 16-6-4.5M21 4l-9.3 8.3M9 13.5v5.3l3-3.3"/></svg>',
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
    +   socialLink('mobile-social-link', cfg.social.whatsapp || '#', 'WhatsApp', 'Chat on WhatsApp', ICON.whatsapp + ' WhatsApp')
    +   socialLink('mobile-social-link', cfg.social.telegram || '#', 'Telegram', 'Message on Telegram', ICON.telegram + ' Telegram')
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
    +          socialLink('icon-btn', cfg.social.whatsapp || '#', 'WhatsApp', 'Chat on WhatsApp', ICON.whatsapp)
    +          socialLink('icon-btn', cfg.social.telegram || '#', 'Telegram', 'Message on Telegram', ICON.telegram)
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
