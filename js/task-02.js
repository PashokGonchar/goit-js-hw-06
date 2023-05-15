const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const textElement = document.querySelector("#ingredients");
textElement.classList.add('item');

for (let i = 1; i < ingredients.length; i ++) {
  let li = document.createElement("li");
  li.innerHTML = ingredients[i];
  textElement.append(li);
}