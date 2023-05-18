const textInputEl = document.getElementById('name-input');
const outputEl = document.getElementById('name-output');

textInputEl.addEventListener('input', (e) => {outputEl.textContent = e.target.value || 'Anonymous'});