const formEl = document.querySelector('.login-form');
const inputsEl = formEl.elements;

let loginForm = {}

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    if (inputsEl['email'].value === '' || inputsEl['password'].value === '') {
      alert('Всі поля повинні бути заповнені!!!');
    } else {
        loginForm['email'] = inputsEl['email'].value;
        loginForm['password'] = inputsEl['password'].value;
        console.log(loginForm);
        formEl.reset();
    } 
    return false;  
});
