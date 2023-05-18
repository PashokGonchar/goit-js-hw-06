const textInputEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

textInputEl.addEventListener('input', (e) => {
  textEl.style.fontSize = `${e.target.value}px`;
});
