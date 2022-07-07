export function getTitle() {
  const text = document.querySelector('.title').textContent;
  return text;
}

console.log(getTitle());

export function getDescription() {
  const text = document.querySelector('.about').innerText;
  return text;
}

console.log(getDescription());

export function getPlans() {
  const text = document.querySelector('.plans').innerHTML;
  return text;
}

console.log(getPlans());

export function getGoal() {
  const text = document.querySelector('.goal').outerHTML;
  return text;
}

console.log(getGoal());
