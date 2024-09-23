'use strict';
import axios from 'axios';
import { openModal } from './modal-movie.js';

const galleryContainer = document.querySelector('.default-display_gallery');
const photosUrl = `https://image.tmdb.org/t/p/original/`;
let currentPage = 1;
const totalPages = 50;
let page = 1

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2ZlZGNlMTYxMzAxYjJjNWMwNWNiODUxMTczNjQ4MSIsIm5iZiI6MTcyNjIzNDc4My44Mjc1MDMsInN1YiI6IjY2ZTQyYjcxOTAxM2ZlODcyMjI0MGMwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D5LbIIzpcPuMhunLfXSG8JZnTRPsItrz-_9PCNoELIQ',
  },
};

const genres = {
  28: 'Acțiune',
  12: 'Aventură',
  16: 'Animație',
  35: 'Comedie',
  80: 'Crimă',
  99: 'Documentar',
  18: 'Dramă',
  10751: 'Familie',
  14: 'Fantezie',
  36: 'Istorie',
  27: 'Horror',
  10402: 'Muzică',
  9648: 'Mister',
  10749: 'Romantic',
  878: 'SF',
  10770: 'Film TV',
  53: 'Thriller',
  10752: 'Război',
  37: 'Western',
};

async function getMovieTrailer(movieId) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=1cfedce161301b2c5c05cb8511736481`,
      options
    );
    const videos = response.data.results;

    const trailer = videos.find(video => video.type === 'Trailer');
    if (trailer) {
      return trailer.site === 'YouTube'
        ? `https://www.youtube.com/embed/${trailer.key}?autoplay=1&controls=0&modestbranding=1&rel=0`
        : `https://player.vimeo.com/video/${trailer.key}?autoplay=1`;
    }
    return null;
  } catch (error) {
    console.error('Eroare la preluarea trailerului:', error);
    return null;
  }
}

async function displayMovies(page = 1) {
  if (!galleryContainer) {
    console.error('Elementul container al galeriei nu a fost găsit!');
    return;
  }

  galleryContainer.innerHTML = '';

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=1cfedce161301b2c5c05cb8511736481&page=${page}`,
      options
    );
    const results = response.data.results;

    if (!results || !Array.isArray(results)) {
      console.error('Format de răspuns API invalid:', response.data);
      return;
    }

    results.forEach(async element => {
      const date = element.release_date
        ? element.release_date.slice(0, 4)
        : 'Data necunoscută';
      const movieGenre = element.genre_ids
        .map(id => genres[id] || 'Necunoscut')
        .join(', ');
      const posterUrl = element.poster_path
        ? `${photosUrl}${element.poster_path}`
        : 'cale_catre_imagine_de_rezerva.jpg';
      const movieDescription = element.overview || 'Descriere indisponibilă';
      const rating = element.vote_average;
      const voteCount = element.vote_count;
      const popularity = element.popularity;

      const trailerUrl = await getMovieTrailer(element.id);

      let div = document.createElement('div');
      div.classList.add('gallery-card-modal');

      div.innerHTML = `
        <img src="${posterUrl}" class="galleryContainer_image" alt="${element.title} photo">
        <h2 class="galleryContainer_title">${element.title}</h2>
        <p class="galleryContainer_subtitle">${movieGenre} | ${date}</p>
      `;

      div.addEventListener('click', function () {
        openModal(
          posterUrl,
          element.title,
          movieGenre,
          movieDescription,
          trailerUrl,
          rating,
          voteCount,
          popularity
        );
      });

      galleryContainer.appendChild(div);
      div.classList.add('galleryContainer_card');
    });
  } catch (error) {
    console.error(
      'Eroare la preluarea filmelor:',
      error.response ? error.response.data : error.message
    );
  }
}

document.addEventListener('DOMContentLoaded', function () {
  displayMovies(page); // Afișăm filmele inițial
    const paginationDiv =  
    document.getElementById("pagination"); 
    const itemsPerPage = 1; 
    let totalItems = 1000;
  
    function generateContent(page) { 
      document.querySelector(`.default-display_gallery`).innerHTML='';
          
      for (let i = (page - 1) * itemsPerPage + 1; 
        i <= page * itemsPerPage; i++) { 
        displayMovies(page) 
        } 
      } 
    
      function generatePagination() {
        const totalPages = Math.ceil(totalItems / itemsPerPage); 
        paginationDiv.innerHTML = "";
        const prevArrow = document.createElement("span"); 
        prevArrow.className = "arrow"; 
        prevArrow.textContent = "←"; 
        prevArrow.addEventListener("click", function () { 
          
          if (page > 1) {     
            page--; 
            generatePagination();
            generateContent(page);    
          } 
          });  
          
          paginationDiv.appendChild(prevArrow); 
          
          let maxValue = Math.max(totalPages);
          
          for (let i = 1; i <= totalPages; i++) {     
            const link = document.createElement("a");
            link.href = "#"; 
            link.textContent = [i];
            if (link.textContent > page + 3 || link.textContent < page - 4) {
                link.classList.add('hidden')
  
                }  
            if (i >= page + 3  ) {
                  let dots = document.createElement("p");
                  dots.textContent = `• • •`;
                  dots.classList.add('dots')
                 link.textContent= [i] + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0'  + dots.textContent;
                 if ( i > 999 ) {
                  link.classList.remove('hidden')
                  link.textContent = '1000'
                  
                }
                  }
            
            link.addEventListener('click', pagination()) 
            function pagination(){
          
            if (i === page) { 
              link.classList.add("active"); }
          
            }
                
                // document.querySelector('.dot').style.visibility='visible'
  
            link.addEventListener("click", function () {  
              page = i; 
              generateContent(page); 
              generatePagination(); 
            }); 
    
            paginationDiv.appendChild(link); 
          } 
          
      
  
          const nextArrow = document.createElement("span"); 
          nextArrow.className = "arrow"; 
          nextArrow.textContent = "→"; 
          nextArrow.addEventListener("click", function () { 
              if (page < totalPages) {
                  page++
                  generateContent(page);  
                  generatePagination(); 
              } 
             
          }); 
          paginationDiv.appendChild(nextArrow); 
      } 
     
      generatePagination(); 
  });
