import{o as f}from"./modal-movie-BMDh4blJ.js";import"./vendor-BaZnZOwH.js";document.addEventListener("DOMContentLoaded",()=>{const c=document.querySelector(".watched"),i=document.querySelector(".queue"),n=document.getElementById("movie-grid"),l="watchedMovies",u="queueMovies";c&&n?c.addEventListener("click",()=>{const t=d(l);s(t,n,!0,!1)}):console.error("Watched section button or movie grid not found"),i&&n?i.addEventListener("click",()=>{const t=d(u);s(t,n,!1,!0)}):console.error("Queue section button or movie grid not found");function d(t){return JSON.parse(localStorage.getItem(t))||[]}function s(t,r,a=!1,p=!1){if(r.innerHTML="",t.length===0){r.innerHTML="<p>No movies found.</p>";return}t.forEach(e=>{const o=document.createElement("div");o.classList.add("movie-card"),o.innerHTML=`
        <img src="${e.posterUrl}" alt="${e.title}" />
        <h3>${e.title}</h3>
        <p>${e.movieGenre}</p>
        <p>${e.description}</p>
      `,o.addEventListener("click",()=>{f(e.posterUrl,e.title,e.movieGenre,e.description,null,null,null,null,a,p,o)}),r.appendChild(o)})}});
//# sourceMappingURL=main-CyhdLG0z.js.map
