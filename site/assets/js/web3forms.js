/* Shared Web3Forms submission helper.
   Spam/DDOS protection: a hidden honeypot field ("botcheck") that only bots fill in, plus
   an hCaptcha challenge (pages load https://web3forms.com/client/script.js and add a
   <div class="h-captcha" data-captcha="true"> inside the <form>) that Web3Forms verifies
   server-side before accepting a submission — real visitors solve one checkbox, scripted
   mass-submits get rejected. */
window.Aurum = window.Aurum || {};

window.Aurum.submitWeb3Form = function(form, opts){
  opts = opts || {};
  return new Promise(function(resolve, reject){
    var honeypot = form.querySelector('input[name="botcheck"]');
    if(honeypot && honeypot.checked){
      resolve({ success:true, spam:true });
      return;
    }
    var fd = new FormData(form);
    fd.set('access_key', window.AURUM_CONFIG.web3forms.accessKey);
    if(opts.subject && !fd.get('subject')) fd.set('subject', opts.subject);
    if(opts.fromName) fd.set('from_name', opts.fromName);
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(Object.fromEntries(fd))
    })
      .then(function(res){ return res.json(); })
      .then(function(data){
        if(data.success){ resolve(data); } else { reject(data); }
      })
      .catch(reject);
  });
};
