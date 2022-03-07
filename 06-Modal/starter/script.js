'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  //   console.log(btnsOpenModal[i].textContent);

  btnsOpenModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

const closedModal = function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closedModal);
overlay.addEventListener('click', closedModal);
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closedModal();
  }
});
