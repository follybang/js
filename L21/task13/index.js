export function getSection(num) {
  const res = document.querySelector(`[data-number="${num}"]`);
  const res2 = res.closest('.box');
  return res2.dataset.section;
}

console.log(getSection());
