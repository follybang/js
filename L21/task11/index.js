export function manageClasses() {
  document.querySelector('.one').classList.add('selected');
  document.querySelector('.two').classList.remove('selected');
  document.querySelector('.three').classList.toggle('three_done');
  document.querySelector('.some-class').classList.add('another-class');
}
