const inputTextEl = document.getElementById('validation-input');

inputTextEl.addEventListener('blur', (e) => {
  e.target.value.length == inputTextEl.dataset.length
    ? (inputTextEl.className = 'valid')
    : (inputTextEl.className = 'invalid');
});
