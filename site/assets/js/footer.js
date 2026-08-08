/* Injects the site footer into <div id="site-footer"></div>. */
(function(){
  var root = document.body.getAttribute('data-root') || '';
  var year = new Date().getFullYear();
  var cfg = window.AURUM_CONFIG || { social:{}, businessEmail:'hello@aurumpeptideco.com', abn:'00 000 000 000' };

  var ICON = {
    whatsapp: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12.5a7.5 7.5 0 1 1-3.4-6.3"/><path d="M20 12.5c0-1.1-.2-2-.6-2.9M14 3.4c1.7.4 3.2 1.4 4.3 2.8"/><path d="M8.5 9.2c.2-.5.6-.5.9-.5.3 0 .5 0 .7.4.2.4.7 1.5.7 1.6.1.2.1.3 0 .5-.1.2-.2.3-.3.5-.2.2-.3.3-.1.6.2.3.9 1.4 1.9 2.2 1.3 1 2.2 1.3 2.6 1.1.2-.1.4-.3.6-.6.1-.2.3-.2.5-.1l1.5.7c.2.1.3.2.3.4 0 .8-.9 1.6-1.7 1.7-1.4.2-2.9-.3-4.6-1.6-1.9-1.5-3-3.1-3.2-3.5-.2-.4-.7-1.4-.5-2.2z"/></svg>',
    telegram: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 4L3 11.5l6 2M21 4l-3 16-6-4.5M21 4l-9.3 8.3M9 13.5v5.3l3-3.3"/></svg>',
    discord: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="7" width="16" height="11" rx="4"/><path d="M8 7c.3-1.6 1.7-3 4-3s3.7 1.4 4 3"/><circle cx="9.5" cy="12.5" r="1" fill="currentColor" stroke="none"/><circle cx="14.5" cy="12.5" r="1" fill="currentColor" stroke="none"/><path d="M9 16c1 .7 4 .7 6 0"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>',
    mail: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>'
  };
  var abnKnown = cfg.abn && cfg.abn.indexOf('00 000') === -1;

  var html = ''
    + '<footer class="site-footer">'
    + '  <div class="container">'
    + '    <div class="footer-grid">'
    + '      <div>'
    + '        <div class="footer-brand"><img src="' + root + 'assets/img/logo.jpeg" alt="Logo"><span class="name">The Aurum Peptide Co</span></div>'
    + '        <p style="font-size:.86rem;max-width:34ch;">Third-party tested research peptides, dispatched fast from Australia. Strictly for licensed laboratory and research use.</p>'
    + '        <div class="footer-socials">'
    + '          <a href="' + cfg.social.whatsapp + '" aria-label="WhatsApp" title="WhatsApp" target="_blank" rel="noopener">' + ICON.whatsapp + '</a>'
    + '          <a href="' + cfg.social.telegram + '" aria-label="Telegram" title="Telegram" target="_blank" rel="noopener">' + ICON.telegram + '</a>'
    + '          <a href="' + cfg.social.discord + '" aria-label="Discord" title="Discord" target="_blank" rel="noopener">' + ICON.discord + '</a>'
    + '          <a href="' + cfg.social.instagram + '" aria-label="Instagram" title="Instagram">' + ICON.instagram + '</a>'
    + '          <a href="mailto:' + cfg.businessEmail + '" aria-label="Email" title="Email">' + ICON.mail + '</a>'
    + '        </div>'
    + '      </div>'
    + '      <div><h4>Shop</h4><ul>'
    + '        <li><a href="' + root + 'shop.html">Shop All Peptides</a></li>'
    + '        <li><a href="' + root + 'coa-library.html">CoA Library</a></li>'
    + '        <li><a href="' + root + 'blog.html">Research Blog</a></li>'
    + '        <li><a href="' + root + 'request-product.html">Request a Product</a></li>'
    + '        <li><a href="' + root + 'track-order.html">Track Your Order</a></li>'
    + '      </ul></div>'
    + '      <div><h4>Support</h4><ul>'
    + '        <li><a href="' + root + 'faq.html">FAQ</a></li>'
    + '        <li><a href="' + root + 'contact.html">Contact Us</a></li>'
    + '        <li><a href="' + root + 'shipping-policy.html">Shipping Policy</a></li>'
    + '        <li><a href="' + root + 'returns-refunds.html">Returns &amp; Refunds</a></li>'
    + '        <li><a href="' + root + 'about.html">About Us</a></li>'
    + '      </ul></div>'
    + '      <div><h4>Legal</h4><ul>'
    + '        <li><a href="' + root + 'terms.html">Terms &amp; Legal Disclaimer</a></li>'
    + '        <li><a href="' + root + 'privacy.html">Privacy Policy</a></li>'
    + '        <li><a href="' + root + 'returns-refunds.html">Refund Policy</a></li>'
    + '      </ul></div>'
    + '    </div>'
    + '    <div class="footer-legal-strip">'
    + '      All products sold by The Aurum Peptide Co are furnished strictly for in-vitro laboratory research and forensic use by qualified professionals only. '
    + '      They are not drugs, food, food additives, cosmetics or medical devices, and are not intended for human or animal consumption, diagnosis, treatment, cure or prevention of any disease. '
    + '      No claim is made regarding the safety or efficacy of these compounds for human or animal use. By purchasing you confirm you are 18+, represent a qualified research capacity, and accept full responsibility for lawful handling and use in your jurisdiction. See our <a href="' + root + 'terms.html" style="text-decoration:underline;color:var(--gold-bright);">full Terms &amp; Disclaimer</a>.'
    + '    </div>'
    + '    <div class="footer-bottom">'
    + '      <span>&copy; ' + year + ' The Aurum Peptide Co. All rights reserved.</span>'
    + '      <span>' + (abnKnown ? 'ABN ' + cfg.abn + ' &middot; ' : '') + 'Made in Australia</span>'
    + '    </div>'
    + '  </div>'
    + '</footer>';

  var mount = document.getElementById('site-footer');
  if(mount){ mount.innerHTML = html; }
})();
