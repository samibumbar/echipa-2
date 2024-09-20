const watchedMoviesContainer = document.querySelector('.watched-movies-container');
const queueMoviesContainer = document.querySelector('.queue-movies-container');
const watchedBtn = document.querySelector('.watched');
const queueBtn = document.querySelector('.queue');
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
  const moviesList = getMoviesList(listType);
  const moviesContainer = document.querySelector(
    `.${listType}-movies-container .movies-container`
  );

  moviesContainer.innerHTML = '';

  moviesList.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';
    movieCard.innerHTML = `
      <iframe id="modal-trailer" width="100%" height="315" src="${movie.trailer}" 
      frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <h3 class="movie-title">${movie.title}</h3>
      <p class="movie-subtitle">${movie.genres} | ${movie.rating} | ${movie.popularity}</p>
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
document.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target && e.target.id === 'add-to-watched') {
    console.log('Butonul Add to Watched a fost apăsat');
    const selectedMovie = getMovieFromModal();
    addToLocalStorage(selectedMovie, 'watched');
  }

  if (e.target && e.target.id === 'add-to-queue') {
    console.log('Butonul Add to Queue a fost apăsat');
    const selectedMovie = getMovieFromModal();
    addToLocalStorage(selectedMovie, 'queue');
  }
});


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
  const title = document.getElementById('modal-title').textContent;
  const rating = document.getElementById('modal-rating').textContent;
  const votes = document.getElementById('modal-votes').textContent;
  const popularity = document.getElementById('modal-popularity').textContent;
  const genres = document.getElementById('modal-genres').textContent;
  const description = document.getElementById('modal-description').textContent;
  const trailer = document.getElementById('modal-trailer').src;


  return {
    id: Date.now(),
    title,
    rating,
    votes,
    popularity,
    genres,
    description,
    trailer
  };
}
