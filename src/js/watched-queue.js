import { openModal } from './modal-movie.js';
import Swal from 'sweetalert2';

document.addEventListener('DOMContentLoaded', () => {
  const watchedSectionButton = document.querySelector('.watched');
  const queueSectionButton = document.querySelector('.queue');
  const movieGrid = document.getElementById('movie-grid');

  const WATCHED_KEY = 'watchedMovies';
  const QUEUE_KEY = 'queueMovies';

  if (watchedSectionButton && movieGrid) {
    watchedSectionButton.addEventListener('click', () => {
      const watchedMovies = getFromLocalStorage(WATCHED_KEY);
      displayMovies(watchedMovies, movieGrid, true, false);
    });
  } else {
    console.error('Watched section button or movie grid not found');
  }

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
        <img src="${movie.posterUrl}" alt="${movie.title}" class='movie-poster'/>
        <h3 class="movie-title">${movie.title}</h3>
        <p class='movie-description'>${movie.movieGenre} | ${movie.release_date}</p>
      `;

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
});
