import"./assets/main-C5zE2kCR.js";/* empty css                      */const d=document.querySelector(".default-display_gallery"),p="https://image.tmdb.org/t/p/original/";let i=1;const g={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2ZlZGNlMTYxMzAxYjJjNWMwNWNiODUxMTczNjQ4MSIsIm5iZiI6MTcyNjIzNDc4My44Mjc1MDMsInN1YiI6IjY2ZTQyYjcxOTAxM2ZlODcyMjI0MGMwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D5LbIIzpcPuMhunLfXSG8JZnTRPsItrz-_9PCNoELIQ"}},u={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"};function s(){fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=1cfedce161301b2c5c05cb8511736481&page=${i}`,g).then(t=>t.json()).then(t=>t.results.forEach(n=>{let a=`${n.release_date}`.slice(0,4),r=document.createElement("div");const c=n.genre_ids.map(l=>u[l]||"Unknown").join(", ");r.innerHTML=`
        <img src="${p}${n.poster_path}" class="galleryContainer_image" alt="${n.title} photo">
        <h2 class="galleryContainer_title">${n.title}</h2>
        <p class="galleryContainer_subtitle">${c} | ${a}</p>
      `,d.appendChild(r),r.classList.add("galleryContainer_card"),i++})).catch(t=>console.error(t))}s();function y(){document.querySelector(".default-display_gallery").innerHTML="",s(),i--}function o(){document.querySelector(".default-display_gallery").innerHTML="",s(),i++}var e={code:"",Extend:function(t){t=t||{},e.size=t.size||300,e.page=t.page||1,e.step=t.step||3},Add:function(t,n){for(var a=t;a<n;a++)e.code+="<a>"+a+"</a>"},Last:function(){e.code+="<i>...</i><a>"+e.size+"</a>"},First:function(){e.code+="<a>1</a><i>...</i>"},Click:function(){e.page=+this.innerHTML,e.Start()},Prev:function(){e.page--,e.page<1&&(e.page=1),e.Start(),y()},Next:function(){e.page++,e.page>e.size&&(e.page=e.size),e.Start(),o()},Bind:function(){for(var t=e.e.getElementsByTagName("a"),n=0;n<t.length;n++)+t[n].innerHTML===e.page&&(t[n].className="current"),t[n].addEventListener("click",e.Click,!1),t[n].addEventListener("click",o)},Finish:function(){e.e.innerHTML=e.code,e.code="",e.Bind()},Start:function(){e.size<e.step*2+6?e.Add(1,e.size+1):e.page<e.step*2+1?(e.Add(1,e.step*2+4),e.Last()):e.page>e.size-e.step*2?(e.First(),e.Add(e.size-e.step*2-2,e.size+1)):(e.First(),e.Add(e.page-e.step,e.page+e.step+1),e.Last()),e.Finish()},Buttons:function(t){var n=t.getElementsByTagName("a");n[0].addEventListener("click",e.Prev,!1),n[1].addEventListener("click",e.Next,!1)},Create:function(t){var n=['<a class="prev-arrow">←</a>',"<span></span>",'<a class="next-arrow">→</a>'];t.innerHTML=n.join(""),e.e=t.getElementsByTagName("span")[0],e.Buttons(t)},Init:function(t,n){e.Extend(n),e.Create(t),e.Start()}},f=function(){e.Init(document.getElementById("pagination"),{size:20,page:1,step:1})};document.addEventListener("DOMContentLoaded",f,!1);
//# sourceMappingURL=index.js.map
