const watchedBtn = document.querySelector('.watched');
const queueBtn = document.querySelector('.queue');
const watchedMovieContainer = document.querySelector(
  '.watched-movies-container'
);
const queueMovieContainer = document.querySelector('.queue-movies-container');
const addToWatchedBtn = document.querySelector('.addToWatched');
const addToQueueBtn = document.querySelector('.addToQueue');

const STORAGE_KEY = 'movies';

const watchedMovies = [
  {
    title: 'The Matrix',
    genre: 'Action, Sci-Fi',
    year: 1999,
    id: '1',
    imageUrl: 'https://via.placeholder.com/150?text=The+Matrix',
  },
  {
    title: 'The Godfather',
    genre: 'Crime, Drama',
    year: 1972,
    id: '2',
    imageUrl: 'https://via.placeholder.com/150?text=The+Godfather',
  },
  {
    title: 'Pulp Fiction',
    genre: 'Crime, Drama',
    year: 1994,
    id: '3',
    imageUrl: 'https://via.placeholder.com/150?text=Pulp+Fiction',
  },
  {
    title: 'The Lord of the Rings',
    genre: 'Adventure, Fantasy',
    year: 2001,
    id: '4',
    imageUrl: 'https://via.placeholder.com/150?text=LOTR',
  },
  {
    title: 'Forrest Gump',
    genre: 'Drama, Romance',
    year: 1994,
    id: '5',
    imageUrl: 'https://via.placeholder.com/150?text=Forrest+Gump',
  },
];

const queueMovies = [
  {
    title: 'Inception',
    genre: 'Action, Sci-Fi',
    year: 2010,
    id: '6',
    imageUrl: 'https://via.placeholder.com/150?text=Inception',
  },
  {
    title: 'Fight Club',
    genre: 'Drama',
    year: 1999,
    id: '7',
    imageUrl: 'https://via.placeholder.com/150?text=Fight+Club',
  },
  {
    title: 'The Dark Knight',
    genre: 'Action, Crime, Drama',
    year: 2008,
    id: '8',
    imageUrl: 'https://via.placeholder.com/150?text=The+Dark+Knight',
  },
  {
    title: 'Gladiator',
    genre: 'Action, Adventure, Drama',
    year: 2000,
    id: '9',
    imageUrl: 'https://via.placeholder.com/150?text=Gladiator',
  },
  {
    title: 'Titanic',
    genre: 'Drama, Romance',
    year: 1997,
    id: '10',
    imageUrl: 'https://via.placeholder.com/150?text=Titanic',
  },
];

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
    `.${listType}-movies-container`
  );

  moviesContainer.innerHTML = '';

  // afisam filmele
  moviesList.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';
    movieCard.innerHTML = `
      <img src="${movie.imageUrl}" alt="${movie.title}" class="movie-poster">
      <h3>${movie.title}</h3>
      <p>${movie.genre} | ${movie.year}</p>
    `;

    // Adăugăm evenimente pentru butoanele de adăugare
    // movieCard.querySelector('.add-to-watched').addEventListener('click', () => {
    //   addToLocalStorage(movie, 'watched');
    // });
    // movieCard.querySelector('.add-to-queue').addEventListener('click', () => {
    //   addToLocalStorage(movie, 'queue');
    // });

    moviesContainer.appendChild(movieCard);
  });
}

// functie care afiseaza filmele selectate care au fost deja vazute
function showWatched() {
  watchedMovieContainer.style.display = 'block';
  queueMovieContainer.style.display = 'none';
  displayMovies('watched');
}

// functie care afiseaza filmele selectate pentru a fi vizionate
function showQueue() {
  watchedMovieContainer.style.display = 'none';
  queueMovieContainer.style.display = 'block';
  displayMovies('queue');
}

// adaugare film in local storage la apasarea butonului watched
// addToWatchedBtn.addEventListener('click', e => {
//   e.preventDefault();
//   addToLocalStorage(selectedMovie, 'watched');
// });

// // adaugare film in local strogare la apasarea butonului queue
// addToQueueBtn.addEventListener('click', e => {
//   e.preventDefault();
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

// function getSelectedMovieFromModal() {
//   // Preluăm datele filmului din elementele modalului
//   const title = document.querySelector('.modal-title').textContent;
//   const genre = document.querySelector('.modal-genre').textContent;
//   const year = document.querySelector('.modal-year').textContent;
//   const id = document.querySelector('[data-movie-id]').getAttribute('data-movie-id');

//   // Creăm obiectul `selectedMovie` cu aceste date
//   return {
//     title: title,
//     genre: genre,
//     year: year,
//     id: id,
//   };
// }

watchedMovies.forEach(movie => addToLocalStorage(movie, 'watched'));
queueMovies.forEach(movie => addToLocalStorage(movie, 'queue'));
