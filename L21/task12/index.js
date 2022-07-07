export function squaredNumbers() {
  const data1 = document.querySelector('[data-number="5"]');
  data1.setAttribute('data-squared-number', data1.dataset.number * data1.dataset.number);

  const data2 = document.querySelector('[data-number="7"]');
  data2.setAttribute('data-squared-number', data2.dataset.number * data2.dataset.number);

  const data3 = document.querySelector('[data-number="-3"]');
  data3.setAttribute('data-squared-number', data3.dataset.number * data3.dataset.number);
}
