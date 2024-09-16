"use strict";

import axios from 'axios';
const galleryContainer = document.querySelector('.default-display_gallery');
const photosUrl = `https://image.tmdb.org/t/p/original/`

let queryPage = 1;

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
  fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=1cfedce161301b2c5c05cb8511736481&page=${queryPage}`, options)
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
      queryPage ++;
  })
)
    .catch(err => console.error(err));
    };

    galleryDisplay()
  
  function prevPageUpdate() {
    document.querySelector(`.default-display_gallery`).innerHTML='';
    galleryDisplay()
    queryPage --
  }

  function updateGallery() {
    document.querySelector(`.default-display_gallery`).innerHTML='';
    galleryDisplay()
    queryPage ++
  }


    var Pagination = {
      code: '',
      // --------------------
      // Utility
      // --------------------
      // converting initialize data
      Extend: function(data) {
          data = data || {};
          Pagination.size = data.size || 300;
          Pagination.page = data.page || 1;
          Pagination.step = data.step || 3;
      },
      // add pages by number (from [s] to [f])
      Add: function(s, f) {
          for (var i = s; i < f; i++) {
              Pagination.code += '<a>' + i + '</a>';
          }
      },
      // add last page with separator
      Last: function() {
          Pagination.code += '<i>...</i><a>' + Pagination.size + '</a>';
      },
      // add first page with separator
      First: function() {
          Pagination.code += '<a>1</a><i>...</i>';
      },
      // --------------------
      // Handlers
      // --------------------
      // change page
      Click: function() {
          Pagination.page = +this.innerHTML;
          Pagination.Start();
      },
      // previous page
      Prev: function() {
          Pagination.page--;
          if (Pagination.page < 1) {
              Pagination.page = 1;
          }
          Pagination.Start();
          prevPageUpdate();
      },
      // next page
      Next: function() {
          Pagination.page++;
          if (Pagination.page > Pagination.size) {
              Pagination.page = Pagination.size;
          }
          Pagination.Start();
          updateGallery();
      },
      // --------------------
      // Script
      // --------------------
      // binding pages
      Bind: function() {
          var a = Pagination.e.getElementsByTagName('a');
          for (var i = 0; i < a.length; i++) {
              if (+a[i].innerHTML === Pagination.page) a[i].className = 'current';
              a[i].addEventListener('click', Pagination.Click, false);
              a[i].addEventListener('click', updateGallery);
          }
      },
      // write pagination
      Finish: function() {
          Pagination.e.innerHTML = Pagination.code;
          Pagination.code = '';
          Pagination.Bind();
      },
      // find pagination type
      Start: function() {
          if (Pagination.size < Pagination.step * 2 + 6) {
              Pagination.Add(1, Pagination.size + 1);
          }
          else if (Pagination.page < Pagination.step * 2 + 1) {
              Pagination.Add(1, Pagination.step * 2 + 4);
              Pagination.Last();
          }
          else if (Pagination.page > Pagination.size - Pagination.step * 2) {
              Pagination.First();
              Pagination.Add(Pagination.size - Pagination.step * 2 - 2, Pagination.size + 1);
          }
          else {
              Pagination.First();
              Pagination.Add(Pagination.page - Pagination.step, Pagination.page + Pagination.step + 1);
              Pagination.Last();
          }
          Pagination.Finish();
      },
      // --------------------
      // Initialization
      // --------------------
      // binding buttons
      Buttons: function(e) {
          var nav = e.getElementsByTagName('a');
          nav[0].addEventListener('click', Pagination.Prev, false);
          nav[1].addEventListener('click', Pagination.Next, false);
          },
      // create skeleton
      Create: function(e) {
          var html = [
              '<a class="prev-arrow">←</a>', // previous button
              '<span></span>',  // pagination container
              '<a class="next-arrow">→</a>'  // next button
          ];
          e.innerHTML = html.join('');
          Pagination.e = e.getElementsByTagName('span')[0];
          Pagination.Buttons(e);
      },
      // init
      Init: function(e, data) {
          Pagination.Extend(data);
          Pagination.Create(e);
          Pagination.Start();
      }
  };
  /* * * * * * * * * * * * * * * * *
  * Initialization
  * * * * * * * * * * * * * * * * */
  var init = function() {
      Pagination.Init(document.getElementById('pagination'), {
          size: 20, // pages size
          page: 1,  // selected page
          step: 1   // pages before and after current
      });
  };
  document.addEventListener('DOMContentLoaded', init, false);