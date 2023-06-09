// const categories = document.querySelectorAll('.item');
// console.log(categories)

// let numbersArr = categories.length;
// console.log('Number of Categories : ', numbersArr);

// categories.forEach((cat) => {
//   console.log('Category:', cat.querySelector('h2').textContent);
//   console.log('Elements:', cat.querySelectorAll('li').length);
// });

const itemEl = categories.children;
const lengthCategoriesEl = itemEl.length;
console.log(`Number of Categories : ${lengthCategoriesEl}`);

const itemElArray = Array.prototype.slice.call(itemEl)
itemElArray.forEach((cat) => {
  console.log('Category:', cat.firstElementChild.textContent);
  console.log('Elements:', cat.lastElementChild.childElementCount);
});