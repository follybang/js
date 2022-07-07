export function finishList() {
  const list = document.querySelector('.list');
  const special = document.querySelector('.special');

  const element1 = document.createElement('li');
  element1.textContent = '1';
  list.prepend(element1);

  const element4 = document.createElement('li');
  element4.textContent = '4';
  special.before(element4);

  const element6 = document.createElement('li');
  element6.textContent = '6';
  special.after(element6);

  const element8 = document.createElement('li');
  element8.textContent = '8';
  list.append(element8);
}

finishList();
