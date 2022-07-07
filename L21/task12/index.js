export function squaredNumbers() {
  const data1 = document.querySelector('[data-number="5"]');
  data1.dataset.squaredNumber = data1.dataset.number * data1.dataset.number;

  const data2 = document.querySelector('[data-number="7"]');
  data2.dataset.squaredNumber = data2.dataset.number * data2.dataset.number;

  const data3 = document.querySelector('[data-number="-3"]');
  data3.dataset.squaredNumber = data3.dataset.number * data3.dataset.number;
}

squaredNumbers();
