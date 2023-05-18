const textInputEl = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

textInputEl.addEventListener('change', (e) => {
  textEl.style.fontSize = `${e.target.value}px`;
});
