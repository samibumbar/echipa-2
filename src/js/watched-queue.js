const watchedBtn = document.querySelector('.watched');
const queueBtn = document.querySelector('.queue');
const STORAGE_KEY = 'movies';


// TEST FILME
// const selectedMovie = [
//   {
//   title: 'Deadpool',
//   genre: 'Action',
//   year: 2021,
//   id: '12345',
//   },

//   {
//   title: 'Spiderman',
//   genre: 'Action',
//   year: 2001,
//   id: 12346,
//   }
// ]

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

function getMoviesList(listType) {
    let moviesData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {watched: [], queue: []};
    return moviesData[listType];
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

watchedBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showWatched();
});

queueBtn.addEventListener('click', (e) => {
  e.preventDefault();
  showQueue();
});

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


// TEST AFISARE FILME
// if (!localStorage.getItem(STORAGE_KEY)) {
//   addToLocalStorage(selectedMovie[1], 'watched');
//   addToLocalStorage(selectedMovie[0], 'queue');
// }