import"./assets/main-DRmTjajx.js";/* empty css                      */const s=document.querySelector(".watched"),m=document.querySelector(".queue"),c=document.querySelector(".watched-movies"),n=document.querySelector(".queue-movies");document.querySelector(".addToWatched");document.querySelector(".addToQueue");const o="movies",h=[{title:"The Matrix",genre:"Action, Sci-Fi",year:1999,id:"1",imageUrl:"https://via.placeholder.com/150?text=The+Matrix"},{title:"The Godfather",genre:"Crime, Drama",year:1972,id:"2",imageUrl:"https://via.placeholder.com/150?text=The+Godfather"},{title:"Pulp Fiction",genre:"Crime, Drama",year:1994,id:"3",imageUrl:"https://via.placeholder.com/150?text=Pulp+Fiction"},{title:"The Lord of the Rings",genre:"Adventure, Fantasy",year:2001,id:"4",imageUrl:"https://via.placeholder.com/150?text=LOTR"},{title:"Forrest Gump",genre:"Drama, Romance",year:1994,id:"5",imageUrl:"https://via.placeholder.com/150?text=Forrest+Gump"}],u=[{title:"Inception",genre:"Action, Sci-Fi",year:2010,id:"6",imageUrl:"https://via.placeholder.com/150?text=Inception"},{title:"Fight Club",genre:"Drama",year:1999,id:"7",imageUrl:"https://via.placeholder.com/150?text=Fight+Club"},{title:"The Dark Knight",genre:"Action, Crime, Drama",year:2008,id:"8",imageUrl:"https://via.placeholder.com/150?text=The+Dark+Knight"},{title:"Gladiator",genre:"Action, Adventure, Drama",year:2e3,id:"9",imageUrl:"https://via.placeholder.com/150?text=Gladiator"},{title:"Titanic",genre:"Drama, Romance",year:1997,id:"10",imageUrl:"https://via.placeholder.com/150?text=Titanic"}];function l(e,i){let a=JSON.parse(localStorage.getItem(o))||{watched:[],queue:[]};a[i].some(t=>t.id===e.id)||(a[i].push(e),localStorage.setItem(o,JSON.stringify(a)))}function p(e){return(JSON.parse(localStorage.getItem(o))||{watched:[],queue:[]})[e]}function d(e){const i=p(e),a=document.querySelector(`.${e}-movies`);a.innerHTML="",i.forEach(t=>{const r=document.createElement("div");r.className="movie-card",r.innerHTML=`
      <img src="${t.imageUrl}" alt="${t.title}" class="movie-poster">
      <h3>${t.title}</h3>
      <p>${t.genre} | ${t.year}</p>
    `,a.appendChild(r)})}function g(){c.style.display="block",n.style.display="none",d("watched")}function v(){c.style.display="none",n.style.display="block",d("queue")}s.addEventListener("click",e=>{e.preventDefault(),g()});m.addEventListener("click",e=>{e.preventDefault(),v()});h.forEach(e=>l(e,"watched"));u.forEach(e=>l(e,"queue"));
//# sourceMappingURL=page-2.js.map
