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
  // let dealButton = document.getElementsByClassName('deal');

  let input = document.getElementsByClassName('input')[0];

  let inputBtn = document.getElementsByClassName('btn')[0];
  console.log(inputBtn);
  console.log(input);

  let section = document.getElementsByClassName('section')[0];

  let mainContainer = document.getElementsByClassName('whole')[0];

  let emailState = false;

  function emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function animate() {
    input.classList.remove('anim');
    setTimeout(function () {
      input.classList.add('anim');
    }, 1);
  }

  inputBtn.addEventListener('click', () => {
    if (emailIsValid(emailIsValid.value)) {
      console.log(emailIsValid.value);
    } else {
      console.log('this is not a value email');
      document
        .getElementsByClassName('input')[0]
        .classList.add('input-visible');
      document.getElementsByClassName('input')[0].classList.add('anim');
      animate();
    }
  });

  let deals = () => {
    if (emailState === false) {
      mainContainer.classList.add('whole--visible');
      emailState = true;
    }
  };

  document.body.addEventListener('click', () => {
    deals();
  });

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
