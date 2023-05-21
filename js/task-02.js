const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const textElement = document.querySelector('#ingredients');

let list = '';

ingredients.forEach((el) => {
  let li = document.createElement('li');
  li.textContent = el;
  li.classList.add('item');
  list += li.outerHTML;
});

textElement.insertAdjacentHTML('afterbegin', list);