import"./assets/header-B-Xkr_L_.js";/* empty css                    */const r=document.querySelector(".watched"),l=document.querySelector(".queue"),s=document.querySelector(".watched-movies-container"),i=document.querySelector(".queue-movies-container"),u="movies";function d(e){return(JSON.parse(localStorage.getItem(u))||{watched:[],queue:[]})[e]}function a(e){const c=d(e),o=document.querySelector(`.${e}-movies-container .movies-container`);console.log(o),o.innerHTML="",c.forEach(t=>{const n=document.createElement("div");n.className="movie-card",n.innerHTML=`
      <img src="${t.imageUrl}" alt="${t.title}" class="movie-poster">
      <h3 class="movie-title">${t.title}</h3>
      <p class="movie-subtitle">${t.genre} | ${t.year}</p>
    `,o.appendChild(n)})}function m(){s.style.display="block",i.style.display="none",a("watched")}function v(){s.style.display="none",i.style.display="block",a("queue")}r.addEventListener("click",e=>{e.preventDefault(),m()});l.addEventListener("click",e=>{e.preventDefault(),v()});
//# sourceMappingURL=page-2.js.map
