import"./assets/main-4PObKIrR.js";/* empty css                      */import{a as m}from"./assets/vendor-Cn2Vr82J.js";const y=document.querySelector(".default-display_gallery"),u="https://image.tmdb.org/t/p/original/";let e=1;const g={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2ZlZGNlMTYxMzAxYjJjNWMwNWNiODUxMTczNjQ4MSIsIm5iZiI6MTcyNjIzNDc4My44Mjc1MDMsInN1YiI6IjY2ZTQyYjcxOTAxM2ZlODcyMjI0MGMwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D5LbIIzpcPuMhunLfXSG8JZnTRPsItrz-_9PCNoELIQ"}},h={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"};let M=20;async function p(){try{const c=(await m.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=1cfedce161301b2c5c05cb8511736481&per_page=${M}&page=${e}`,g)).data.results;Object.values(c).forEach(t=>{let o=`${t.release_date}`.slice(0,4),n=document.createElement("div");const a=t.genre_ids.map(r=>h[r]||"Unknown").join(", ");n.innerHTML=`
        <img src="${u}${t.poster_path}" class="galleryContainer_image" alt="${t.title} photo">
        <h2 class="galleryContainer_title">${t.title}</h2>
        <p class="galleryContainer_subtitle">${a} | ${o}</p>
        `,y.appendChild(n),n.classList.add("galleryContainer_card")})}catch(i){console.log(i.message)}}p();document.addEventListener("DOMContentLoaded",function(){const i=document.getElementById("pagination"),c=1,d=15;function t(n){document.querySelector(".default-display_gallery").innerHTML="";for(let a=(n-1)*c+1;a<=n*c;a++)p()}function o(){const n=Math.ceil(d/c);i.innerHTML="";const a=document.createElement("span");a.className="arrow",a.textContent="←",a.addEventListener("click",function(){e>1&&(e--,o(),t(e))}),i.appendChild(a);for(let s=1;s<=n;s++){const l=document.createElement("a");l.href="#",l.textContent=s,s===e&&l.classList.add("active"),l.addEventListener("click",function(){e=s,t(e),o()}),i.appendChild(l)}const r=document.createElement("span");r.className="arrow",r.textContent="→",r.addEventListener("click",function(){e<n&&(e++,t(e),o())}),i.appendChild(r)}o()});
//# sourceMappingURL=index.js.map
