function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
let inputEl = document.getElementById('controls').firstElementChild;
let boxesEl = document.getElementById('boxes');

function createBoxes() {
  let amount = inputEl.value;
  if (amount > 0) {
    boxesEl.innerHTML = '';
    let sizeDiv = 30;
    for (let i = 0; i < amount; i++) {
      let boxEl = document.createElement('div');
      boxesEl.appendChild(boxEl);
      boxEl.style.width = `${sizeDiv}px`;
      boxEl.style.height = `${sizeDiv}px`;
      boxEl.style.border = '1px solid red';
      sizeDiv += 10;
      boxEl.style.backgroundColor = getRandomHexColor();
    }
  }
}
createBtn.addEventListener('click', createBoxes);

inputEl.addEventListener('keyup', (e) => {
  e.target.value = 
    e.target.value > +e.target.max ? +e.target.max : e.target.value;
});

function destroyBoxes() {
  boxesEl.innerHTML = '';
}

destroyBtn.addEventListener('click', destroyBoxes);
