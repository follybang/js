export function finishForm() {
  const inputElement = document.createElement('input');
  inputElement.setAttribute('name', 'login');
  inputElement.setAttribute('type', 'text');
  document.querySelector('.login-form').prepend(inputElement);
  document.querySelector('[name = password]').setAttribute('type', 'password');
}
