import"./assets/header-D5D4glH0.js";import{o as v}from"./assets/main-Bc9YYlwY.js";import{a as l}from"./assets/vendor-Cn2Vr82J.js";const s=document.querySelector(".default-display_gallery"),M="https://image.tmdb.org/t/p/original/";let I=1;const d={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2ZlZGNlMTYxMzAxYjJjNWMwNWNiODUxMTczNjQ4MSIsIm5iZiI6MTcyNjIzNDc4My44Mjc1MDMsInN1YiI6IjY2ZTQyYjcxOTAxM2ZlODcyMjI0MGMwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D5LbIIzpcPuMhunLfXSG8JZnTRPsItrz-_9PCNoELIQ"}},f={28:"Acțiune",12:"Aventură",16:"Animație",35:"Comedie",80:"Crimă",99:"Documentar",18:"Dramă",10751:"Familie",14:"Fantezie",36:"Istorie",27:"Horror",10402:"Muzică",9648:"Mister",10749:"Romantic",878:"SF",10770:"Film TV",53:"Thriller",10752:"Război",37:"Western"};async function _(a){try{const e=(await l.get(`https://api.themoviedb.org/3/movie/${a}/videos?api_key=1cfedce161301b2c5c05cb8511736481`,d)).data.results.find(i=>i.type==="Trailer");return e?e.site==="YouTube"?`https://www.youtube.com/embed/${e.key}?autoplay=1&controls=0&modestbranding=1&rel=0`:`https://player.vimeo.com/video/${e.key}?autoplay=1`:null}catch(r){return console.error("Eroare la preluarea trailerului:",r),null}}async function b(a=1){if(!s){console.error("Elementul container al galeriei nu a fost găsit!");return}s.innerHTML="";try{const r=await l.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=1cfedce161301b2c5c05cb8511736481&page=${a}`,d),o=r.data.results;if(!o||!Array.isArray(o)){console.error("Format de răspuns API invalid:",r.data);return}o.forEach(async e=>{const i=e.release_date?e.release_date.slice(0,4):"Data necunoscută",n=e.genre_ids.map(h=>f[h]||"Necunoscut").join(", "),c=e.poster_path?`${M}${e.poster_path}`:"cale_catre_imagine_de_rezerva.jpg",p=e.overview||"Descriere indisponibilă",u=e.vote_average,y=e.vote_count,g=e.popularity,m=await _(e.id);let t=document.createElement("div");t.classList.add("gallery-card-modal"),t.innerHTML=`
        <img src="${c}" class="galleryContainer_image" alt="${e.title} photo">
        <h2 class="galleryContainer_title">${e.title}</h2>
        <p class="galleryContainer_subtitle">${n} | ${i}</p>
      `,t.addEventListener("click",function(){v(c,e.title,n,p,m,u,y,g)}),s.appendChild(t),t.classList.add("galleryContainer_card")})}catch(r){console.error("Eroare la preluarea filmelor:",r.response?r.response.data:r.message)}}document.addEventListener("DOMContentLoaded",function(){b(I)});
//# sourceMappingURL=index.js.map
