const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const sumEl = document.getElementById('value');

let counterValue = 0;

decrementBtn.addEventListener('click', onTargetDecrementBtnClick);

incrementBtn.addEventListener('click', onTargetIncrementBtnClick);

function onTargetDecrementBtnClick() {
  counterValue -= 1;
  sumEl.innerHTML = counterValue;
}

function onTargetIncrementBtnClick() {
  counterValue += 1;
    sumEl.innerHTML = counterValue;
}
