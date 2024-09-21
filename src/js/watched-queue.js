import { openModal } from './modal-movie';

const moviesContainer = document.querySelector('.movies-container');
const STORAGE_KEY = 'movies';

// Functie adaugare in local storage
function addToLocalStorage(movie, listType) {
  let moviesData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
    watched: [],
    queue: [],
  };

  // Verificăm dacă filmul există deja în listă
  if (
    !moviesData[listType].some(storedMovie => storedMovie.title === movie.title)
  ) {
    moviesData[listType].push(movie);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(moviesData));
  } else {
    alert('Acest film exista deja in lista!');
  }
}

// Functie pentru a lua lista de filme din local storage
function getMoviesList(listType) {
  let moviesData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
    watched: [],
    queue: [],
  };
  return moviesData[listType];
}

// Functie pentru afisarea filmelor
function displayMovies(listType) {
  moviesContainer.innerHTML = '';
  const moviesList = getMoviesList(listType);

  if (moviesList.length === 0) {
    moviesContainer.innerHTML = `<p><b>Aceasta lista este goala!</b></p>`;
    return;
  }

  moviesList.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';
    movieCard.innerHTML = `
      <img src="movie-imgSrc" width="100%" height="315" class="movie-image"/>
      <h3 class="movie-title">${movie.title}</h3>
      <p class="movie-subtitle">${movie.genres} | 2020 </p>
    `;

    moviesContainer.appendChild(movieCard);
  });
}

// // adaugare film in local storage la apasarea butonului watched
document.addEventListener('click', function (e) {
  if (e.target && e.target.id === 'add-to-watched') {
    const selectedMovie = getMovieFromModal();
    addToLocalStorage(selectedMovie, 'watched');
  }

  if (e.target && e.target.id === 'add-to-queue') {
    const selectedMovie = getMovieFromModal();
    addToLocalStorage(selectedMovie, 'queue');
  }
});

// afisarea filmelor care au fost vizionate la apasarea butonului Watched din header
document.addEventListener('click', e => {
  if (e.target && e.target.className === 'watched') {
    displayMovies('watched');
  }

  if (e.target && e.target.className === 'queue') {
    displayMovies('queue');
  }
});

// afisarea filmelor care urmeaza sa fie vizionate la apasarea butonului Queue din header

function getMovieFromModal() {
  const title = document.getElementById('modal-title').textContent;
  const rating = document.getElementById('modal-rating').textContent;
  const votes = document.getElementById('modal-votes').textContent;
  const popularity = document.getElementById('modal-popularity').textContent;
  const genres = document.getElementById('modal-genres').textContent;
  const description = document.getElementById('modal-description').textContent;
  const trailer = document.getElementById('modal-trailer').src;

  return {
    // id: Date.now(),
    title,
    rating,
    votes,
    popularity,
    genres,
    description,
    trailer,
  };
}
