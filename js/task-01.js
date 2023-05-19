const categories = document.querySelectorAll('.item');

let numbersArr = categories.length;
console.log('Number of Categories : ', numbersArr);

categories.forEach((cat) => {
  console.log('Category:', cat.querySelector('h2').textContent);
  console.log('Elements:', cat.querySelectorAll('li').length);
});
