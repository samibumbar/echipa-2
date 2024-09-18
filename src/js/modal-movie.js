document.addEventListener('DOMContentLoaded', () => {
  const openModalBtn = document.getElementById('default-display_gallery');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalContent = document.querySelector('.modal-content');
  const modal = document.getElementById('movieModal');

  openModalBtn.addEventListener('click', () => {
    modal.classList.remove('is-hidden');
  });
  closeModalBtn.addEventListener('click', event => {
    event.stopPropagation;

    modal.classList.add('is-hidden');
    console.log('Modal should be hidden now');
  });
  modal.addEventListener('click', event => {
    if (event.target === modal) {
      modal.classList.add('is-hidden');
    }
  });
});

// Asigură-te că DOM-ul este complet încărcat înainte de a rula codul
// window.onload = function () {
//   const openModalBtn = document.getElementById('default-display_gallery');
//   const closeModalBtn = document.getElementById('close-modal-btn');
//   const modal = document.getElementById('movieModal');

//   // Verificăm dacă toate elementele sunt găsite
//   if (openModalBtn && closeModalBtn && modal) {
//     // Deschidem modalul la click pe butonul de deschidere
//     openModalBtn.addEventListener('click', function () {
//       modal.classList.remove('is-hidden');
//     });

//     // Închidem modalul la click pe butonul de închidere
//     closeModalBtn.addEventListener('click', function () {
//       modal.classList.add('is-hidden');
//     });
//   } else {
//     console.error('Elementele necesare nu au fost găsite în DOM.');
//   }
// };
