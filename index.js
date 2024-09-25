import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{o as E}from"./assets/darkmode-dcLnVF9G.js";import{a as _,i as A,g as T,o as $}from"./assets/vendor-DwzPqAEj.js";document.addEventListener("DOMContentLoaded",function(){const c="1cfedce161301b2c5c05cb8511736481",a="https://api.themoviedb.org/3",p={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"},e=document.getElementById("search-input"),u=document.getElementById("search-button"),o=document.getElementById("movie-grid"),r=document.getElementById("default-display_gallery"),d=document.getElementById("loading-indicator");if(!o){console.error("Elementul movie-grid nu a fost găsit!");return}u.addEventListener("click",i=>{i.preventDefault();const t=e.value.trim();t?l(t):y()}),e.addEventListener("input",()=>{e.value.trim()?v():(y(),C())});function l(i){w(),_.get(`${a}/search/movie?api_key=${c}&query=${encodeURIComponent(i)}`).then(t=>{const m=n(t.data.results);f(m)}).catch(t=>{console.error("Eroare la preluarea filmelor:",t),b("A apărut o eroare în timpul căutării. Încercați din nou.")}).finally(x)}function n(i){return i.filter(t=>t.popularity&&t.release_date).sort((t,m)=>m.popularity-t.popularity||new Date(m.release_date)-new Date(t.release_date))}function f(i){if(C(),i.length===0){o.innerHTML="<p>Niciun film găsit.</p>";return}i.forEach(t=>{if(!t.poster_path)return;const m=g(t);o.appendChild(m),m.addEventListener("click",()=>{E(`https://image.tmdb.org/t/p/original${t.poster_path}`,t.title,t.genre_ids.map(h=>p[h]||"Unknown").join(", "),t.overview,null,t.vote_average,t.vote_count,t.popularity)})})}function g(i){const t=document.createElement("div");t.classList.add("galleryContainer_card");const m=`https://image.tmdb.org/t/p/original${i.poster_path}`,h=i.title,k=i.genre_ids.map(D=>p[D]||"Unknown").join(", ");return t.innerHTML=`
      <img class="galleryContainer_image" src="${m}" alt="${h}" style="max-width: 100%; height: auto;>
      <h3 class="galleryContainer_title">${h}</h3>
      <h3 class="galleryContainer_subtitle"> ${k}</h3>
    `,t}function y(){r.style.display="block"}function v(){r.style.display="none"}function C(){o.innerHTML=""}function b(i){C(),o.innerHTML=`<p class="error-message">${i}</p>`}function w(){d&&(d.style.display="block")}function x(){d&&(d.style.display="none")}});const M=document.querySelector(".default-display_gallery"),j="https://image.tmdb.org/t/p/original/";let s=1;const L={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2ZlZGNlMTYxMzAxYjJjNWMwNWNiODUxMTczNjQ4MSIsIm5iZiI6MTcyNjIzNDc4My44Mjc1MDMsInN1YiI6IjY2ZTQyYjcxOTAxM2ZlODcyMjI0MGMwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D5LbIIzpcPuMhunLfXSG8JZnTRPsItrz-_9PCNoELIQ"}},N={28:"Acțiune",12:"Aventură",16:"Animație",35:"Comedie",80:"Crimă",99:"Documentar",18:"Dramă",10751:"Familie",14:"Fantezie",36:"Istorie",27:"Horror",10402:"Muzică",9648:"Mister",10749:"Romantic",878:"SF",10770:"Film TV",53:"Thriller",10752:"Război",37:"Western"};async function z(c){try{const e=(await _.get(`https://api.themoviedb.org/3/movie/${c}/videos?api_key=1cfedce161301b2c5c05cb8511736481`,L)).data.results.find(u=>u.type==="Trailer");return e?e.site==="YouTube"?`https://www.youtube.com/embed/${e.key}?autoplay=1&controls=0&modestbranding=1&rel=0`:`https://player.vimeo.com/video/${e.key}?autoplay=1`:null}catch(a){return console.error("Eroare la preluarea trailerului:",a),null}}async function I(c=1){if(!M){console.error("Elementul container al galeriei nu a fost găsit!");return}M.innerHTML="";try{const a=await _.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=1cfedce161301b2c5c05cb8511736481&page=${c}`,L),p=a.data.results;if(!p||!Array.isArray(p)){console.error("Format de răspuns API invalid:",a.data);return}p.forEach(async e=>{const u=e.release_date?e.release_date.slice(0,4):"Data necunoscută",o=e.genre_ids.map(v=>N[v]||"Necunoscut").join(", "),r=e.poster_path?`${j}${e.poster_path}`:"cale_catre_imagine_de_rezerva.jpg",d=e.overview||"Descriere indisponibilă",l=e.vote_average,n=e.vote_count,f=e.popularity,g=await z(e.id);let y=document.createElement("div");y.classList.add("gallery-card-modal"),y.innerHTML=`
        <img src="${r}" class="galleryContainer_image" alt="${e.title} photo">
        <h2 class="galleryContainer_title">${e.title}</h2>
        <p class="galleryContainer_subtitle">${o} | ${u}</p>
      `,y.addEventListener("click",function(){E(r,e.title,o,d,g,l,n,f)}),M.appendChild(y),y.classList.add("galleryContainer_card")})}catch(a){console.error("Eroare la preluarea filmelor:",a.response?a.response.data:a.message)}}document.addEventListener("DOMContentLoaded",function(){I(s);const c=document.getElementById("pagination"),a=1;let p=1e3;function e(o){document.querySelector(".default-display_gallery").innerHTML="";for(let r=(o-1)*a+1;r<=o*a;r++)I(o)}function u(){const o=Math.ceil(p/a);c.innerHTML="";const r=document.createElement("span");r.className="arrow",r.textContent="←",r.addEventListener("click",function(){s>1&&(s--,u(),e(s))}),c.appendChild(r);for(let l=1;l<=o;l++){let f=function(){l===s&&n.classList.add("active")};const n=document.createElement("a");if(n.href="#",n.textContent=[l],(n.textContent>s+3||n.textContent<s-4)&&n.classList.add("hidden"),l>=s+3){let g=document.createElement("p");g.textContent="• • •",g.classList.add("dots"),n.textContent=[l]+"       "+g.textContent,l>999&&(n.classList.remove("hidden"),n.textContent="1000")}n.addEventListener("click",f()),n.addEventListener("click",function(){s=l,e(s),u()}),c.appendChild(n)}const d=document.createElement("span");d.className="arrow",d.textContent="→",d.addEventListener("click",function(){s<o&&(s++,e(s),u())}),c.appendChild(d)}u()});const G={apiKey:"AIzaSyCw7VkecxwaMQ6UI5ymBFqf54FHRi8_Fkc",authDomain:"filmoteka-ef771.firebaseapp.com",projectId:"filmoteka-ef771",storageBucket:"filmoteka-ef771.appspot.com",messagingSenderId:"731162565659",appId:"1:731162565659:web:da75ae92afc254876bacbe",measurementId:"G-13YE8DDH34"},H=A(G),B=T(H);$(B,c=>{c||(window.location.href="/echipa-2/page-3.html")});
//# sourceMappingURL=index.js.map
