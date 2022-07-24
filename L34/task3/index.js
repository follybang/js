// 1. validation
// 2. read form and send data to server
// 3. get response from server & display it

const baseUrl = 'https://62dc66a957ac3c3f3c5aaf2f.mockapi.io/api/v1/form';
const loginForm = document.querySelector('.login-form');
const submitBtn = document.querySelector('.submit-button');
const emailInp = document.querySelector('.form-input[type="email"]');
const textInp = document.querySelector('.form-input[type="text"]');
const passwordInp = document.querySelector('.form-input[type="password"]');

function createUser(newUser) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  });
}

function readForm(e) {
  e.preventDefault();
  const loginData = Object.fromEntries(new FormData(loginForm));
  createUser(loginData)
    .then(response => response.json())
    .then(data => {
      alert(JSON.stringify(data));
      loginForm.reset();
    });
}

loginForm.addEventListener('input', () => {
  const isValid = loginForm.reportValidity();
  submitBtn.disabled = !isValid;
});

loginForm.addEventListener('submit', readForm);
