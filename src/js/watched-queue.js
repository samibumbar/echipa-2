const watchedBtn = document.querySelector('.watched');
const queueBtn = document.querySelector('.queue');
const STORAGE_KEY = 'movies';

function addToLocalStorage(movie, listType) {

    // Obtinem obiectul din local storage sau initializam cu liste goale
    let moviesData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {watched: [], queue: []};

    // Adaugare film in lista specificata (watched sau queue)
    moviesData[listType].push(movie);

    // Stocare obiect in local storage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(moviesData));
}

function getMoviesList(listType) {
    let moviesData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {watched: [], queue: []};
    return moviesData[listType];
}

function displayMovies(listType) {
    const moviesList = getMoviesList(listType);
    const moviesContainer = document.querySelector(`.${listType}-movies-container`);
    moviesContainer.innerHTML = '';

    moviesList.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `<h3>${movie.title}</h3><p>${movie.genre} | ${movie.year}</p>`;
        moviesContainer.appendChild(movieCard);
        
    });

    window.onload = displayMovies('watched');
    window.onload = displayMovies('queue');
}

// Event listener pentru butonul „watched”
watchedBtn.addEventListener('click', () => {
  addToLocalStorage(selectedMovie, 'watched');
});

// Event listener pentru butonul „queue”
queueBtn.addEventListener('click', () => {
  addToLocalStorage(selectedMovie, 'queue');
});