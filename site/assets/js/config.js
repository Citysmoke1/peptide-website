/* Site-wide configuration — update these values when real details are supplied.
   Business email, social links and Supabase keys are placeholders pending client info. */
window.AURUM_CONFIG = {
  businessEmail: 'hello@aurumpeptideco.com', /* PLACEHOLDER — replace with real business email */
  supportPhone: '+61 4XX XXX XXX',            /* PLACEHOLDER */
  abn: '00 000 000 000',                      /* PLACEHOLDER */
  social: {
    whatsapp: '#',  /* PLACEHOLDER — e.g. https://wa.me/614XXXXXXXX */
    telegram: '#',  /* PLACEHOLDER — e.g. https://t.me/yourhandle */
    discord:  '#',  /* PLACEHOLDER — e.g. https://discord.gg/yourinvite */
    instagram:'#',
    facebook: '#'
  },
  /* Supabase backend — not yet connected. Once project URL + anon key are supplied,
     wire form submit handlers (see request-product.html, contact.html, track-order.html,
     checkout.html) to supabase.from('table').insert({...}) instead of the local mock. */
  supabase: { url:'', anonKey:'' }
};
