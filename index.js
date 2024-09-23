import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{o as I}from"./assets/watched-queue-Bc_M6QzN.js";import{a as _,i as $,g as A,o as T}from"./assets/vendor-BNe1RqNb.js";document.addEventListener("DOMContentLoaded",function(){const s="1cfedce161301b2c5c05cb8511736481",a="https://api.themoviedb.org/3",c={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"},t=document.getElementById("search-input"),d=document.getElementById("search-button"),o=document.getElementById("movie-grid"),u=document.getElementById("default-display_gallery"),l=document.getElementById("loading-indicator");if(!o){console.error("Elementul movie-grid nu a fost găsit!");return}d.addEventListener("click",r=>{r.preventDefault();const e=t.value.trim();e?y(e):i()}),t.addEventListener("input",()=>{t.value.trim()?f():(i(),v())});function y(r){E(),_.get(`${a}/search/movie?api_key=${s}&query=${encodeURIComponent(r)}`).then(e=>{const n=m(e.data.results);g(n)}).catch(e=>{console.error("Eroare la preluarea filmelor:",e),C("A apărut o eroare în timpul căutării. Încercați din nou.")}).finally(L)}function m(r){return r.filter(e=>e.popularity&&e.release_date).sort((e,n)=>n.popularity-e.popularity||new Date(n.release_date)-new Date(e.release_date))}function g(r){if(v(),r.length===0){o.innerHTML="<p>Niciun film găsit.</p>";return}r.forEach(e=>{if(!e.poster_path)return;const n=h(e);o.appendChild(n),n.addEventListener("click",()=>{I(`https://image.tmdb.org/t/p/original${e.poster_path}`,e.title,e.genre_ids.map(p=>c[p]||"Unknown").join(", "),e.overview,null,e.vote_average,e.vote_count,e.popularity)})})}function h(r){const e=document.createElement("div");e.classList.add("galleryContainer_card");const n=`https://image.tmdb.org/t/p/original${r.poster_path}`,p=r.title,w=r.genre_ids.map(D=>c[D]||"Unknown").join(", ");return e.innerHTML=`
      <img class="galleryContainer_image" src="${n}" alt="${p}" style="max-width: 100%; height: auto;>
      <h3 class="galleryContainer_title">${p}</h3>
      <h3 class="galleryContainer_subtitle"> ${w}</h3>
    `,e}function i(){u.style.display="block"}function f(){u.style.display="none"}function v(){o.innerHTML=""}function C(r){v(),o.innerHTML=`<p class="error-message">${r}</p>`}function E(){l&&(l.style.display="block")}function L(){l&&(l.style.display="none")}});const M=document.querySelector(".default-display_gallery"),k="https://image.tmdb.org/t/p/original/";let j=1;const b={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2ZlZGNlMTYxMzAxYjJjNWMwNWNiODUxMTczNjQ4MSIsIm5iZiI6MTcyNjIzNDc4My44Mjc1MDMsInN1YiI6IjY2ZTQyYjcxOTAxM2ZlODcyMjI0MGMwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D5LbIIzpcPuMhunLfXSG8JZnTRPsItrz-_9PCNoELIQ"}},z={28:"Acțiune",12:"Aventură",16:"Animație",35:"Comedie",80:"Crimă",99:"Documentar",18:"Dramă",10751:"Familie",14:"Fantezie",36:"Istorie",27:"Horror",10402:"Muzică",9648:"Mister",10749:"Romantic",878:"SF",10770:"Film TV",53:"Thriller",10752:"Război",37:"Western"};async function G(s){try{const t=(await _.get(`https://api.themoviedb.org/3/movie/${s}/videos?api_key=1cfedce161301b2c5c05cb8511736481`,b)).data.results.find(d=>d.type==="Trailer");return t?t.site==="YouTube"?`https://www.youtube.com/embed/${t.key}?autoplay=1&controls=0&modestbranding=1&rel=0`:`https://player.vimeo.com/video/${t.key}?autoplay=1`:null}catch(a){return console.error("Eroare la preluarea trailerului:",a),null}}async function N(s=1){if(!M){console.error("Elementul container al galeriei nu a fost găsit!");return}M.innerHTML="";try{const a=await _.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=1cfedce161301b2c5c05cb8511736481&page=${s}`,b),c=a.data.results;if(!c||!Array.isArray(c)){console.error("Format de răspuns API invalid:",a.data);return}c.forEach(async t=>{const d=t.release_date?t.release_date.slice(0,4):"Data necunoscută",o=t.genre_ids.map(f=>z[f]||"Necunoscut").join(", "),u=t.poster_path?`${k}${t.poster_path}`:"cale_catre_imagine_de_rezerva.jpg",l=t.overview||"Descriere indisponibilă",y=t.vote_average,m=t.vote_count,g=t.popularity,h=await G(t.id);let i=document.createElement("div");i.classList.add("gallery-card-modal"),i.innerHTML=`
        <img src="${u}" class="galleryContainer_image" alt="${t.title} photo">
        <h2 class="galleryContainer_title">${t.title}</h2>
        <p class="galleryContainer_subtitle">${o} | ${d}</p>
      `,i.addEventListener("click",function(){I(u,t.title,o,l,h,y,m,g)}),M.appendChild(i),i.classList.add("galleryContainer_card")})}catch(a){console.error("Eroare la preluarea filmelor:",a.response?a.response.data:a.message)}}document.addEventListener("DOMContentLoaded",function(){N(j)});const B={apiKey:"AIzaSyCw7VkecxwaMQ6UI5ymBFqf54FHRi8_Fkc",authDomain:"filmoteka-ef771.firebaseapp.com",projectId:"filmoteka-ef771",storageBucket:"filmoteka-ef771.appspot.com",messagingSenderId:"731162565659",appId:"1:731162565659:web:da75ae92afc254876bacbe",measurementId:"G-13YE8DDH34"},F=$(B),H=A(F);T(H,s=>{s||(window.location.href="/echipa-2/page-3.html")});
//# sourceMappingURL=index.js.map
