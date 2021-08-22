const close = document.querySelector('.close');
const contain = document.querySelector('.container');

function gone() {
  contain.classList.add('container-gone');
  console.log(contain);
}

const bye = close.addEventListener('click', gone);
console.log(bye);
