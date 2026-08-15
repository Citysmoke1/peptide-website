/* Site-wide configuration — update these values when real details are supplied.
   Business email, social links and Supabase keys are placeholders pending client info. */
window.AURUM_CONFIG = {
  businessEmail: 'AurumOperationsAdmin@proton.me',
  supportPhone: '+61 4XX XXX XXX',            /* PLACEHOLDER */
  abn: '00 000 000 000',                      /* PLACEHOLDER */
  social: {
    discord:  '#',  /* PLACEHOLDER — e.g. https://discord.gg/yourinvite */
    instagram:'#',
    facebook: '#'
  },
  /* Web3Forms — all site forms (order enquiry, contact, product request) submit here via
     assets/js/web3forms.js, which delivers to the inbox tied to this access key. */
  web3forms: { accessKey: 'ee6f1ef9-77f5-43b8-a422-6816247d4962' },
  /* Supabase backend — not yet connected. Once project URL + anon key are supplied,
     order/order-tracking history could move from email-only to supabase.from('table').insert({...}). */
  supabase: { url:'', anonKey:'' }
};
