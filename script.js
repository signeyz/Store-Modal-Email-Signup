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
  let section = document.getElementsByClassName('section')[0];

  let mainContainer = document.getElementsByClassName('whole')[0];

  let emailState = false;

  let showModal = () => {
    if (emailState === false) {
      mainContainer.classList.add('whole--visible');
      emailState = true;
    }
  };

  document.body.addEventListener('mouseleave', () => {
    showModal();
  });

  let removeModal = document.getElementsByClassName('close-btn')[0];

  removeModal.addEventListener('click', () => {
    mainContainer.classList.remove('whole--visible');
    section.classList.add('section-gone');
  });
  console.log(mainContainer);
};
