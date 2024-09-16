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
  }
}

function displayMovies(listType) {
  const moviesList = getMoviesList(listType);
  let moviesContainer = document.querySelector(`.${listType}-movies-container`);
  if (!moviesContainer) {
    console.error(`Elementul .${listType}-movies-container nu a fost găsit.`);
    return;
  }

  moviesContainer.innerHTML = '';

    moviesList.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `<h3>${movie.title}</h3><p>${movie.genre} | ${movie.year}</p>`;
        moviesContainer.appendChild(movieCard);
        
    });
}

function getMoviesList(listType) {
  let moviesData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
    watched: [],
    queue: [],
  };
  return moviesData[listType];
}


function showWatched() {
  document.querySelector('.watched-movies-container').style.display = 'block';
  document.querySelector('.queue-movies-container').style.display = 'none';
  displayMovies('watched');
}

function showQueue() {
  document.querySelector('.watched-movies-container').style.display = 'none';
  document.querySelector('.queue-movies-container').style.display = 'block';
  displayMovies('queue');
}

const addToWatchedBtn = document.uerySelector('.addToWatched');
const addToQueueBtn = document.querySelector('.addToQueue');

addToWatchedBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addToLocalStorage(selectedMovie, 'watched');
});

addToQueueBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addToLocalStorage(selectedMovie, 'queue');
})

watchedBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showWatched();
});

queueBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showQueue();
});

