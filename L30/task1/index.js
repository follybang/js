export const addImage = imgSrc => {
  const p = new Promise((resolve, reject) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My photo');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const { width, height } = imgElem;

    imgElem.addEventListener('load', () => resolve({ width, height }));

    imgElem.addEventListener('error', () => reject(new Error('Image load is failed...')));
  });

  return p;
};

// const imgSrc =
//   'https://p.bigstockphot.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';
// const resultPromise = addImage(imgSrc);
// console.log(resultPromise);
