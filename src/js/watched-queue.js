const watchedBtn = document.querySelector('.watched');
const queueBtn = document.querySelector('.queue');
const STORAGE_KEY = 'movies';

watchedBtn.addEventListener('click', salut);

function salut() {
    console.log('Salut!');
}