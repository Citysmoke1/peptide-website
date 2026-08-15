/* Shared Web3Forms submission helper.
   Spam protection, layered:
   1. Honeypot field ("botcheck") that only bots fill in.
   2. hCaptcha challenge (pages load https://web3forms.com/client/script.js and add a
      <div class="h-captcha" data-captcha="true"> inside the <form>), verified server-side
      by Web3Forms before a submission is accepted.
   3. Minimum fill time — reject submissions that land less than MIN_FILL_TIME_MS after the
      page loaded, since scripted submitters skip reading/typing.
   4. Per-form cooldown — after a successful send, block repeat submissions of the same form
      from this browser for COOLDOWN_MS, so a loop hammering the submit button can't flood
      the inbox even if it clears the honeypot/captcha once. */
window.Aurum = window.Aurum || {};

var AURUM_PAGE_LOAD_TIME = Date.now();
var AURUM_MIN_FILL_TIME_MS = 2500;
var AURUM_SUBMIT_COOLDOWN_MS = 60000;

window.Aurum.submitWeb3Form = function(form, opts){
  opts = opts || {};
  return new Promise(function(resolve, reject){
    var honeypot = form.querySelector('input[name="botcheck"]');
    if(honeypot && honeypot.checked){
      resolve({ success:true, spam:true });
      return;
    }
    if(Date.now() - AURUM_PAGE_LOAD_TIME < AURUM_MIN_FILL_TIME_MS){
      reject({ success:false, message:'Please take a moment to review your details before submitting.' });
      return;
    }
    var cooldownKey = 'aurum_lastsubmit_' + (form.id || 'form');
    var last = Number(localStorage.getItem(cooldownKey) || 0);
    if(Date.now() - last < AURUM_SUBMIT_COOLDOWN_MS){
      reject({ success:false, message:"You've already sent this — please wait a moment before submitting again." });
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
        if(data.success){
          localStorage.setItem(cooldownKey, String(Date.now()));
          resolve(data);
        } else {
          reject(data);
        }
      })
      .catch(reject);
  });
};
