const buttonElem = document.querySelector('.main__block--popup');
const modalElem = document.querySelector('.main__modal--overlay');

modalElem.style.cssText = `
  display: flex;
  visibility: hidden;
  opacity: 0;
  transition: opacity 250ms easy-in-out;
`;

const closeModal = (evn) => {
  //evn.preventDefault();
  const target = evn.target;

  if(target === modalElem || target.closest('.main__modal--close')) {
    modalElem.style.opacity = '0';

    setTimeout(() => {
      modalElem.style.visibility = 'hidden';
    }, 250)
  }
}

const openModal = () => {
  modalElem.style.visibility = 'visible';
  modalElem.style.opacity = '1';
}

buttonElem.addEventListener('click', openModal);
modalElem.addEventListener('click', closeModal);