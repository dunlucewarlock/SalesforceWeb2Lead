var _ld_scriptEl = document.createElement('script');
 _ld_scriptEl.src = 'https://cdn.leandata.com/js-snippet/ld-book-v2.js';
 _ld_scriptEl.addEventListener('load', function () {
   let options = {
     autoSubmit : true,
   }
   let formElement = document.querySelector('Bookit');

   LDBookItV2.initialize('00Dam000000dVaJEAU', 'Demo Request', 'ld_bookit_log_id', options);
   LDBookItV2.setFormProvider('custom');
   LDBookItV2.setFormTarget(formElement);
 });
 document.body.appendChild(_ld_scriptEl);

