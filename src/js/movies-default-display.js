"use strict";

import axios from 'axios';
const galleryContainer = document.querySelector('.default-display_gallery');
const photosUrl = `https://image.tmdb.org/t/p/original/`



const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2ZlZGNlMTYxMzAxYjJjNWMwNWNiODUxMTczNjQ4MSIsIm5iZiI6MTcyNjIzNDc4My44Mjc1MDMsInN1YiI6IjY2ZTQyYjcxOTAxM2ZlODcyMjI0MGMwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D5LbIIzpcPuMhunLfXSG8JZnTRPsItrz-_9PCNoELIQ'
    }
  };

  const genres = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };
  
  function galleryDisplay() {
  fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US&per_page=18', options)
    .then(response => response.json())
    .then(response => response.results.forEach(element => {
        let date = `${element.release_date}`.slice(0, 4);
        let div = document.createElement('div')
        const movieGenre = element.genre_ids.map((id) => genres[id] || "Unknown").join(", ");
        div.innerHTML = `
        <img src="${photosUrl}${element.poster_path}" class="galleryContainer_image" alt="${element.title} photo">
        <h2 class="galleryContainer_title">${element.title}</h2>
        <p class="galleryContainer_subtitle">${movieGenre} | ${date}</p>
      `;
      galleryContainer.appendChild(div);
      div.classList.add(`galleryContainer_card`)
  })
)
    .catch(err => console.error(err));
    };

    galleryDisplay()