// Funcția openModal care afișează trailerul sau posterul, ratingul, voturile și popularitatea
export function openModal(
  posterUrl,
  title,
  movieGenre,
  description,
  trailerUrl = null,
  rating = null,
  voteCount = null,
  popularity = null
) {
  console.log('openModal called'); // Verificăm dacă funcția este apelată
  console.log('Title:', title);
  console.log('Trailer URL:', trailerUrl);

  const modal = document.getElementById('movieModal');
  const modalPoster = document.getElementById('modal-poster');
  const modalTitle = document.getElementById('modal-title');
  const modalGenres = document.getElementById('modal-genres');
  const modalDescription = document.getElementById('modal-description');
  const modalRating = document.getElementById('modal-rating');
  const modalVotes = document.getElementById('modal-votes');
  const modalPopularity = document.getElementById('modal-popularity');

  // Verificăm dacă toate elementele există
  if (
    !modal ||
    !modalPoster ||
    !modalTitle ||
    !modalGenres ||
    !modalDescription ||
    !modalRating ||
    !modalVotes ||
    !modalPopularity
  ) {
    console.error('Elementele din modal nu au fost găsite.');
    return;
  }

  // Setăm conținutul în modal
  modalTitle.textContent = title;
  modalGenres.textContent = `Genuri: ${movieGenre}`;
  modalDescription.textContent = description;
  modalRating.textContent = rating
    ? `Rating: ${rating}`
    : 'Rating indisponibil';
  modalVotes.textContent = voteCount
    ? `${voteCount} voturi`
    : 'Voturi indisponibile';
  modalPopularity.textContent = popularity
    ? `Popularitate: ${popularity}`
    : 'Popularitate indisponibilă';

  // Dacă există un trailer, adăugăm un iframe, altfel afișăm posterul
  if (trailerUrl) {
    console.log('Afișare trailer');
    modalPoster.outerHTML = `<iframe id="modal-trailer" width="100%" height="315" src="${trailerUrl}" 
      frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
  } else {
    console.log('Afișare poster');
    modalPoster.src = posterUrl;
  }

  // Facem modalul vizibil
  modal.classList.remove('is-hidden');
  modal.classList.add('is-visible');
}

// Funcția closeModal care închide modalul
export function closeModal() {
  console.log('Închidere modal');
  const modal = document.getElementById('movieModal');
  const modalTrailer = document.getElementById('modal-trailer');

  if (modalTrailer) {
    modalTrailer.remove();
    const modalWrapper = document.querySelector('.wrapper-item');
    modalWrapper.innerHTML = `<img id="modal-poster" src="" alt="Movie Poster" />`;
  }

  modal.classList.remove('is-visible');
  modal.classList.add('is-hidden');
}

// Atașăm evenimentul de închidere la butonul close
document.addEventListener('DOMContentLoaded', function () {
  document
    .getElementById('close-modal-btn')
    .addEventListener('click', closeModal);
});
