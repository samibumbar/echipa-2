const watchedBtn = document.querySelector('.watched');
const queueBtn = document.querySelector('.queue');
const watchedMoviesContainer = document.querySelector(
  '.watched-movies-container'
);
const queueMoviesContainer = document.querySelector('.queue-movies-container');
// const addToWatchedBtn = document.querySelector('.addToWatched');
// const addToQueueBtn = document.querySelector('.addToQueue');

const STORAGE_KEY = 'movies';

// Functie adaugare in local storage
function addToLocalStorage(movie, listType) {
  let moviesData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
    watched: [],
    queue: [],
  };

  // Verificăm dacă filmul există deja în listă
  if (!moviesData[listType].some(storedMovie => storedMovie.id === movie.id)) {
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
  // cu ajutorul functiei getMovieiList luam filmele din local storage si le salvam intr-o variabila moviesList
  const moviesList = getMoviesList(listType);
  const moviesContainer = document.querySelector(
    `.${listType}-movies-container .movies-container`
  );
  console.log(moviesContainer);

  moviesContainer.innerHTML = '';

  // afisam filmele
  moviesList.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';
    movieCard.innerHTML = `
      <img src="${movie.imageUrl}" alt="${movie.title}" class="movie-poster">
      <h3 class="movie-title">${movie.title}</h3>
      <p class="movie-subtitle">${movie.genre} | ${movie.year}</p>
    `;
    moviesContainer.appendChild(movieCard);
  });
}

// functie care afiseaza filmele selectate care au fost deja vazute
function showWatched() {
  watchedMoviesContainer.style.display = 'block';
  queueMoviesContainer.style.display = 'none';
  displayMovies('watched');
}

// functie care afiseaza filmele selectate pentru a fi vizionate
function showQueue() {
  watchedMoviesContainer.style.display = 'none';
  queueMoviesContainer.style.display = 'block';
  displayMovies('queue');
}

// // adaugare film in local storage la apasarea butonului watched
// addToWatchedBtn.addEventListener('click', e => {
//   e.preventDefault();
//   const selectedMovie = getMovieFromModal();
//   addToLocalStorage(selectedMovie, 'watched');
// });

// // adaugare film in local strogare la apasarea butonului queue
// addToQueueBtn.addEventListener('click', e => {
//   e.preventDefault();
//   const selectedMovie = getMovieFromModal();
//   addToLocalStorage(selectedMovie, 'queue');
// });

// afisarea filmelor care au fost vizionate la apasarea butonului Watched din header
watchedBtn.addEventListener('click', e => {
  e.preventDefault();
  showWatched();
});

// afisarea filmelor care urmeaza sa fie vizionate la apasarea butonului Queue din header
queueBtn.addEventListener('click', e => {
  e.preventDefault();
  showQueue();
});

function getMovieFromModal() {
  // Preluăm datele filmului din elementele modalului
  const title = document.querySelector('.modal-title').textContent;
  const genre = document.querySelector('.modal-genre').textContent;
  const year = document.querySelector('.modal-year').textContent;
  const id = document
    .querySelector('[data-movie-id]')
    .getAttribute('data-movie-id');

  // Creem obiectul `selectedMovie` cu aceste date
  return {
    title: title,
    genre: genre,
    year: year,
    id: id,
  };
}
