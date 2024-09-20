"use strict";

import axios from 'axios';
import Flickity from 'flickity';
const galleryContainer = document.querySelector('.default-display_gallery');
const photosUrl = `https://image.tmdb.org/t/p/original/`

let queryPage = 1;
// document.querySelector('.dot').style.visibility='hidden'

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

  let posts = 20;
  
  async function galleryDisplay() {
    try {
      
      const datas = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=1cfedce161301b2c5c05cb8511736481&per_page=${posts}&page=${queryPage}`, options)
      const results = datas.data.results;
      let v = Object.values(results)
    
      v.forEach(element => {
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
  })}
  catch (error) {
  console.log(error.message)}
};

galleryDisplay()
  

document.addEventListener("DOMContentLoaded", function () {
  const paginationDiv =  
  document.getElementById("pagination"); 
  const itemsPerPage = 1; 
  let totalItems = 1000;

  function generateContent(page) { 
    document.querySelector(`.default-display_gallery`).innerHTML='';
        
    for (let i = (page - 1) * itemsPerPage + 1; 
      i <= page * itemsPerPage; i++) { 
      galleryDisplay() 
      } 
    } 
  
    function generatePagination() {
      const totalPages = Math.ceil(totalItems / itemsPerPage); 
      paginationDiv.innerHTML = "";
      const prevArrow = document.createElement("span"); 
      prevArrow.className = "arrow"; 
      prevArrow.textContent = "←"; 
      prevArrow.addEventListener("click", function () { 
        
        if (queryPage > 1) {     
          queryPage--; 
          generatePagination();
          generateContent(queryPage);    
        } 
        });  
        
        paginationDiv.appendChild(prevArrow); 
        
        let maxValue = Math.max(totalPages);
        
        for (let i = 1; i <= totalPages; i++) {     
          const link = document.createElement("a");
          link.href = "#"; 
          link.textContent = [i];
          if (link.textContent > queryPage + 3 || link.textContent < queryPage - 4) {
              link.classList.add('hidden')

              }  
          if (i >= queryPage + 2  ) {
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
        
          if (i === queryPage) { 
            link.classList.add("active"); }
        
          }
              
              // document.querySelector('.dot').style.visibility='visible'

          link.addEventListener("click", function () {  
            queryPage = i; 
            generateContent(queryPage); 
            generatePagination(); 
          }); 
  
          paginationDiv.appendChild(link); 
        } 
        
    

        const nextArrow = document.createElement("span"); 
        nextArrow.className = "arrow"; 
        nextArrow.textContent = "→"; 
        nextArrow.addEventListener("click", function () { 
            if (queryPage < totalPages) {
                queryPage++
                generateContent(queryPage);  
                generatePagination(); 
            } 
           
        }); 
        paginationDiv.appendChild(nextArrow); 
    } 
   
    generatePagination(); 
});

