import axios from 'axios';
import { openModal } from './modal-movie.js';

document.addEventListener('DOMContentLoaded', function () {
  const API_KEY = '1cfedce161301b2c5c05cb8511736481';
  const BASE_URL = 'https://api.themoviedb.org/3';

  const genres = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystery',
    10749: 'Romance',
    878: 'Science Fiction',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western',
  };

  // Elemente DOM
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  const movieGrid = document.getElementById('movie-grid');
  const defaultGallery = document.getElementById('default-display_gallery');
  const loadingIndicator = document.getElementById('loading-indicator');

  if (!movieGrid) {
    console.error('Elementul movie-grid nu a fost găsit!');
    return;
  }

  searchButton.addEventListener('click', event => {
    event.preventDefault();
    const query = searchInput.value.trim();
    if (query) {
      searchMovies(query);
    } else {
      showDefaultGallery();
    }
  });

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    if (!query) {
      showDefaultGallery();
      clearMovieGrid();
    } else {
      hideDefaultGallery();
    }
  });

  function searchMovies(query) {
    showLoading();
    axios
      .get(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
          query
        )}`
      )
      .then(response => {
        const movies = filterAndSortMovies(response.data.results);
        displayMovies(movies);
      })
      .catch(error => {
        console.error('Eroare la preluarea filmelor:', error);
        showErrorMessage(
          'A apărut o eroare în timpul căutării. Încercați din nou.'
        );
      })
      .finally(hideLoading);
  }

  function filterAndSortMovies(movies) {
    return movies
      .filter(movie => movie.popularity && movie.release_date)
      .sort(
        (a, b) =>
          b.popularity - a.popularity ||
          new Date(b.release_date) - new Date(a.release_date)
      );
  }

  function displayMovies(movies) {
    clearMovieGrid();

    if (movies.length === 0) {
      movieGrid.innerHTML = '<p>Niciun film găsit.</p>';
      return;
    }

    movies.forEach(movie => {
      if (!movie.poster_path) return;

      const movieCard = createMovieCard(movie);
      movieGrid.appendChild(movieCard);

      // Adăugăm eveniment de click pe fiecare card de film pentru a deschide modalul
      movieCard.addEventListener('click', () => {
        openModal(
          `https://image.tmdb.org/t/p/original${movie.poster_path}`,
          movie.title,
          movie.genre_ids.map(id => genres[id] || 'Unknown').join(', '),
          movie.overview,
          null,
          movie.vote_average,
          movie.vote_count,
          movie.popularity
        );
      });
    });
  }

  function createMovieCard(movie) {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');

    const posterUrl = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
    const title = movie.title;
    const movieGenres = movie.genre_ids
      .map(id => genres[id] || 'Unknown')
      .join(', ');

    movieCard.innerHTML = `
      <img src="${posterUrl}" alt="${title}" style="max-width: 100%; height: auto;">
      <h3>${title}</h3>
      <h3 class="span">Gen: ${movieGenres}</h3>
    `;

    return movieCard;
  }

  function showDefaultGallery() {
    defaultGallery.style.display = 'block';
  }

  function hideDefaultGallery() {
    defaultGallery.style.display = 'none';
  }

  function clearMovieGrid() {
    movieGrid.innerHTML = '';
  }

  function showErrorMessage(message) {
    clearMovieGrid();
    movieGrid.innerHTML = `<p class="error-message">${message}</p>`;
  }

  function showLoading() {
    if (loadingIndicator) {
      loadingIndicator.style.display = 'block';
    }
  }

  function hideLoading() {
    if (loadingIndicator) {
      loadingIndicator.style.display = 'none';
    }
  }
});
