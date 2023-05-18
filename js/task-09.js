function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let bodyEl = document.querySelector('body');
let changeColorEl = document.querySelector('.change-color');
let nameColor = document.querySelector('.color');

changeColorEl.addEventListener('click', () => {
  let color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  nameColor.textContent = color;
});
