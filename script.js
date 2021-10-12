// const close = document.querySelector('.close');
// const contain = document.querySelector('.container');

// function gone() {
//   contain.classList.add('container-gone');
//   console.log(contain);
// }

// const bye = close.addEventListener('click', gone);
// console.log(bye);

// NEW FADE IN AND OUT

window.onload = function () {
  let mainContainer = document.getElementsByClassName('whole')[0];

  document.body.addEventListener('mouseleave', () => {
    mainContainer.classList.add('whole--visible');
  });

  let removeModal = document.getElementsByClassName('close-btn')[0];
  removeModal.addEventListener('click', () => {
    mainContainer.classList.remove('whole--visible');
  });
  console.log(mainContainer);
};
