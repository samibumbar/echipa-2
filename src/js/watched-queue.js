import { openModal } from './modal-movie.js';
import Swal from 'sweetalert2';

document.addEventListener('DOMContentLoaded', () => {
  const watchedSectionButton = document.getElementById('watched');
  const queueSectionButton = document.getElementById('queue');
  const movieGrid = document.getElementById('movie-grid');

  const WATCHED_KEY = 'watchedMovies';
  const QUEUE_KEY = 'queueMovies';

  // Eveniment pentru butonul "watched"
  if (watchedSectionButton && movieGrid) {
    watchedSectionButton.addEventListener('click', () => {
      const watchedMovies = getFromLocalStorage(WATCHED_KEY);
      displayMovies(watchedMovies, movieGrid, true, false);
    });
  } else {
    console.error('Watched section button or movie grid not found');
  }

  // Eveniment pentru butonul "queue"
  if (queueSectionButton && movieGrid) {
    queueSectionButton.addEventListener('click', () => {
      const queueMovies = getFromLocalStorage(QUEUE_KEY);
      displayMovies(queueMovies, movieGrid, false, true);
    });
  } else {
    console.error('Queue section button or movie grid not found');
  }

  // Funcția pentru obținerea filmelor din localStorage
  function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
  }

  // Funcția pentru a afișa filmele
  function displayMovies(
    movies,
    container,
    isFromWatched = false,
    isFromQueue = false
  ) {
    container.innerHTML = '';

    if (movies.length === 0) {
      container.innerHTML = '<p>No movies found.</p>';
      return;
    }

    movies.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');
      movieCard.innerHTML = `
        <img src="${movie.posterUrl}" alt="${movie.title}" class='galleryContainer_image'/>
        <h3 class="galleryContainer_title">${movie.title}</h3>
        <p class='galleryContainer_subtitle'>${movie.movieGenre} | ${movie.release_date}</p>
      `;

      // Eveniment pentru deschiderea modalului la clic pe cardul de film
      movieCard.addEventListener('click', () => {
        openModal(
          movie.posterUrl,
          movie.title,
          movie.movieGenre,
          movie.description,
          null,
          null,
          null,
          null,
          isFromWatched,
          isFromQueue,
          movieCard
        );
      });

      container.appendChild(movieCard);
    });
  }

  // Global click event listener
  document.addEventListener('click', function (e) {
    // Verifică dacă elementul clicat are ID-ul 'watched'
    if (e.target && e.target.id === 'watched') {
      console.log('Butonul "watched" a fost clicat');
      const watchedMovies = getFromLocalStorage(WATCHED_KEY);
      displayMovies(watchedMovies, movieGrid, true, false);
    }

    // Verifică dacă elementul clicat are ID-ul 'queue'
    if (e.target && e.target.id === 'queue') {
      console.log('Butonul "queue" a fost clicat');
      const queueMovies = getFromLocalStorage(QUEUE_KEY);
      displayMovies(queueMovies, movieGrid, false, true);
    }

    // Verifică dacă elementul clicat are clasa 'movie-card'
    if (e.target && e.target.classList.contains('movie-card')) {
      console.log('Un card de film a fost clicat');
      // Aici poți adăuga cod suplimentar pentru a gestiona clicul pe cardul de film
    }
  });
});
