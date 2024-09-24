import Swal from 'sweetalert2';

export function openModal(
  posterUrl,
  title,
  movieGenre,
  description,
  trailerUrl = null,
  rating = null,
  voteCount = null,
  popularity = null,
  isFromWatched = false,
  isFromQueue = false,
  movieCardElement = null
) {
  const modal = document.getElementById('movieModal');
  const modalPoster = document.getElementById('modal-poster');
  const modalTitle = document.getElementById('modal-title');
  const modalGenres = document.getElementById('modal-genres');
  const modalDescription = document.getElementById('modal-description');
  const modalRating = document.getElementById('modal-rating');
  const modalVotes = document.getElementById('modal-votes');
  const modalPopularity = document.getElementById('modal-popularity');
  const watchedButton = document.getElementById('add-to-watched');
  const queueButton = document.getElementById('add-to-queue');

  if (
    !modal ||
    !modalPoster ||
    !modalTitle ||
    !modalGenres ||
    !modalDescription ||
    !modalRating ||
    !modalVotes ||
    !modalPopularity ||
    !watchedButton ||
    !queueButton
  ) {
    console.error('Modal elements not found.');
    return;
  }

  // Setăm conținutul în modal
  modalTitle.textContent = title;
  modalGenres.textContent = `Genres: ${movieGenre}`;
  modalDescription.textContent = description;
  modalRating.textContent = rating ? `Rating: ${rating}` : 'Rating unavailable';
  modalVotes.textContent = voteCount
    ? `${voteCount} votes`
    : 'Votes unavailable';
  modalPopularity.textContent = popularity
    ? `Popularity: ${popularity}`
    : 'Popularity unavailable';

  if (trailerUrl) {
    modalPoster.outerHTML = `<iframe id="modal-trailer" width="100%" " src="${trailerUrl}" 
      frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
  } else {
    modalPoster.src = posterUrl;
  }

  modal.classList.remove('is-hidden');
  modal.classList.add('is-visible');

  // Configurarea butoanelor în funcție de starea filmului
  if (isFromWatched) {
    watchedButton.textContent = 'Remove from WATCHED';
    watchedButton.onclick = () => {
      removeFromLocalStorage('watchedMovies', title);
      if (movieCardElement) movieCardElement.remove();
      Swal.fire(`${title} has been removed from WATCHED!`).then(() => {
        closeModal();
      });
    };

    // Adaugă butonul pentru a adăuga în QUEUE
    queueButton.textContent = 'Add to QUEUE';
    queueButton.onclick = () => {
      saveToLocalStorage('queueMovies', {
        title,
        posterUrl,
        movieGenre,
        description,
      });
      Swal.fire(`${title} has been added to QUEUE!`);
    };
  } else if (isFromQueue) {
    queueButton.textContent = 'Remove from QUEUE';
    queueButton.onclick = () => {
      removeFromLocalStorage('queueMovies', title);
      if (movieCardElement) movieCardElement.remove();
      Swal.fire(`${title} has been removed from QUEUE!`).then(() => {
        closeModal();
      });
    };

    // Butonul pentru a adăuga în WATCHED
    watchedButton.textContent = 'Add to WATCHED';
    watchedButton.onclick = () => {
      saveToLocalStorage('watchedMovies', {
        title,
        posterUrl,
        movieGenre,
        description,
      });
      Swal.fire(`${title} has been added to WATCHED!`);
    };
  } else {
    watchedButton.textContent = 'Add to WATCHED';
    watchedButton.onclick = () => {
      saveToLocalStorage('watchedMovies', {
        title,
        posterUrl,
        movieGenre,
        description,
      });
      Swal.fire(`${title} has been added to WATCHED!`);
    };

    queueButton.textContent = 'Add to QUEUE';
    queueButton.onclick = () => {
      saveToLocalStorage('queueMovies', {
        title,
        posterUrl,
        movieGenre,
        description,
      });
      Swal.fire(`${title} has been added to QUEUE!`);
    };
  }

  document.addEventListener('keydown', handleEscapeKey);
  document.body.classList.add('overflow-hidden', 'modal-active');
}

export function closeModal() {
  const modal = document.getElementById('movieModal');
  const modalTrailer = document.getElementById('modal-trailer');

  if (modalTrailer) {
    modalTrailer.remove();
    const modalWrapper = document.querySelector('.wrapper-item');
    modalWrapper.innerHTML = `<img id="modal-poster" src="" alt="Movie Poster" />`;
  }

  modal.classList.remove('is-visible');
  modal.classList.add('is-hidden');

  document.removeEventListener('keydown', handleEscapeKey);
  document.body.classList.remove('overflow-hidden', 'modal-active');
}

function saveToLocalStorage(key, movie) {
  const storedMovies = JSON.parse(localStorage.getItem(key)) || [];
  if (!storedMovies.find(storedMovie => storedMovie.title === movie.title)) {
    storedMovies.push(movie);
    localStorage.setItem(key, JSON.stringify(storedMovies));
  }
}

function removeFromLocalStorage(key, movieTitle) {
  const storedMovies = JSON.parse(localStorage.getItem(key)) || [];
  const updatedMovies = storedMovies.filter(
    movie => movie.title !== movieTitle
  );
  localStorage.setItem(key, JSON.stringify(updatedMovies));
}

function handleEscapeKey(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document
    .getElementById('close-modal-btn')
    .addEventListener('click', closeModal);
});
