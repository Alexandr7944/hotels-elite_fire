const rangeInput = document.querySelector('.designer__length');

const handleInputChange = (e) => {
  const { target } = e;
  const { min } = target;
  const { max } = target;
  const { value } = target;

  target.style.backgroundSize = `${((value - min) * 100) / (max - min)}% 100%`;
};

rangeInput.addEventListener('input', handleInputChange);

const burgerBtn = document.querySelector('.burger__btn');
const menu = document.querySelector('.menu-mobile');
const close = () => {
  menu.classList.toggle('none');
  burgerBtn.classList.toggle('close');
};

document.addEventListener('click', (e) => {
  if (e.target.closest('.menu-mobile__item a')
    || !e.target.closest('.menu-mobile')) close();
});
