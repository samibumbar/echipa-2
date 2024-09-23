import{i as j,g as U,o as W,b as q,S as h}from"./vendor-BNe1RqNb.js";const O={apiKey:"AIzaSyCw7VkecxwaMQ6UI5ymBFqf54FHRi8_Fkc",authDomain:"filmoteka-ef771.firebaseapp.com",projectId:"filmoteka-ef771",storageBucket:"filmoteka-ef771.appspot.com",messagingSenderId:"731162565659",appId:"1:731162565659:web:da75ae92afc254876bacbe",measurementId:"G-13YE8DDH34"},N=j(O),y=U(N);W(y,e=>{e||(window.location.href="echipa-2/page-3.html")});document.getElementById("logout-btn").addEventListener("click",()=>{q(y).then(()=>{window.location.href="echipa-2/page-3.html"}).catch(e=>{console.error("Eroare la deconectare:",e)})});document.addEventListener("click",function(e){e.target&&e.target.id==="logout-btn"&&q(y).then(()=>{window.location.href="/login.html"}).catch(t=>{console.error("Eroare la deconectare:",t)})});const Q={bottom:"64px",right:"unset",left:"32px",time:"0.5s",mixColor:"#fff",backgroundColor:"#fff",buttonColorDark:"#100f2c",buttonColorLight:"#fff",saveInCookies:!0,label:"🌓",autoMatchOsTheme:!0},D=new Darkmode(Q);D.showWidget();function P(e){localStorage.setItem("darkmode",e?"enabled":"disabled")}document.querySelector(".darkmode-toggle").addEventListener("click",function(){const e=D.isActivated();P(e)});localStorage.getItem("darkmode")==="enabled"&&new Darkmode().toggle();const E={desktop:["./images/desktop/background-red-1x.jpg","./images/desktop/background-orange-1x.jpg","./images/desktop/background-yellow-1x.jpg"],tablet:["./images/tablet/background-red-1x.jpg","./images/tablet/background-orange-1x.jpg","./images/tablet/background-yellow-1x.jpg"],mobile:["./images/mobile/bgd-mobil-red-1x.jpg","./images/mobile/bgd-mobil-orange-1x.jpg","./images/mobile/bgd-mobil-yellow-1x.jpg"]};let B=0,i="desktop";function $(){const e=document.querySelector(".header-container");window.innerWidth>=768?i="desktop":window.innerWidth>=480?i="tablet":i="mobile";let t=Math.floor(Math.random()*E[i].length);for(;t===B;)t=Math.floor(Math.random()*E[i].length);B=t,e.style.backgroundImage=`url('${E[i][t]}')`}$();setInterval($,3e3);function R(e,t,o,d,s=null,m=null,u=null,a=null,g=!1,k=!1,c=null){const n=document.getElementById("movieModal"),l=document.getElementById("modal-poster"),L=document.getElementById("modal-title"),w=document.getElementById("modal-genres"),I=document.getElementById("modal-description"),C=document.getElementById("modal-rating"),S=document.getElementById("modal-votes"),x=document.getElementById("modal-popularity"),f=document.getElementById("add-to-watched"),p=document.getElementById("add-to-queue");if(!n||!l||!L||!w||!I||!C||!S||!x||!f||!p){console.error("Modal elements not found.");return}L.textContent=t,w.textContent=`Genres: ${o}`,I.textContent=d,C.textContent=m?`Rating: ${m}`:"Rating unavailable",S.textContent=u?`${u} votes`:"Votes unavailable",x.textContent=a?`Popularity: ${a}`:"Popularity unavailable",s?l.outerHTML=`<iframe id="modal-trailer" width="100%" " src="${s}" 
      frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`:l.src=e,n.classList.remove("is-hidden"),n.classList.add("is-visible"),g?(f.textContent="Remove from WATCHED",f.onclick=()=>{A("watchedMovies",t),c&&c.remove(),h.fire(`${t} has been removed from WATCHED!`).then(()=>{b()})}):k?(p.textContent="Remove from QUEUE",p.onclick=()=>{A("queueMovies",t),c&&c.remove(),h.fire(`${t} has been removed from QUEUE!`).then(()=>{b()})}):(f.textContent="Add to WATCHED",f.onclick=()=>{T("watchedMovies",{title:t,posterUrl:e,movieGenre:o,description:d}),h.fire(`${t} has been added to WATCHED!`)},p.textContent="Add to QUEUE",p.onclick=()=>{T("queueMovies",{title:t,posterUrl:e,movieGenre:o,description:d}),h.fire(`${t} has been added to QUEUE!`)}),document.addEventListener("keydown",_)}function b(){const e=document.getElementById("movieModal"),t=document.getElementById("modal-trailer");if(t){t.remove();const o=document.querySelector(".wrapper-item");o.innerHTML='<img id="modal-poster" src="" alt="Movie Poster" />'}e.classList.remove("is-visible"),e.classList.add("is-hidden"),document.removeEventListener("keydown",_)}function T(e,t){const o=JSON.parse(localStorage.getItem(e))||[];o.find(d=>d.title===t.title)||(o.push(t),localStorage.setItem(e,JSON.stringify(o)))}function A(e,t){const d=(JSON.parse(localStorage.getItem(e))||[]).filter(s=>s.title!==t);localStorage.setItem(e,JSON.stringify(d))}function _(e){e.key==="Escape"&&b()}document.addEventListener("DOMContentLoaded",function(){document.getElementById("close-modal-btn").addEventListener("click",b)});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".watched"),t=document.querySelector(".queue"),o=document.getElementById("movie-grid"),d="watchedMovies",s="queueMovies";e&&o?e.addEventListener("click",()=>{const a=m(d);u(a,o,!0,!1)}):console.error("Watched section button or movie grid not found"),t&&o?t.addEventListener("click",()=>{const a=m(s);u(a,o,!1,!0)}):console.error("Queue section button or movie grid not found");function m(a){return JSON.parse(localStorage.getItem(a))||[]}function u(a,g,k=!1,c=!1){if(g.innerHTML="",a.length===0){g.innerHTML="<p>No movies found.</p>";return}a.forEach(n=>{const l=document.createElement("div");l.classList.add("movie-card"),l.innerHTML=`

        <img src="${n.posterUrl}" alt="${n.title}" class='galleryContainer_image'/>
        <h3 class="galleryContainer_title">${n.title}</h3>
        <p class='galleryContainer_subtitle'>${n.movieGenre} | ${n.release_date}</p>

      `,l.addEventListener("click",()=>{R(n.posterUrl,n.title,n.movieGenre,n.description,null,null,null,null,k,c,l)}),g.appendChild(l)})}});const F=document.querySelector(".open-modal-team"),J=document.querySelector(".close-modal-team"),M=document.querySelector(".backdrop-modal"),r=document.getElementsByClassName("team__modal");F.addEventListener("click",G);J.addEventListener("click",v);function G(e){M.classList.remove("team__backdrop--hidden"),document.addEventListener("keydown",H),document.addEventListener("click",K),r[0].classList.add("openModalAnimationTeam")}function v(e){r[0].classList.remove("closeModalAnimationTeam"),M.classList.add("team__backdrop--hidden"),document.removeEventListener("keydown",H),document.body.style.overflow=""}function H(e){e.code==="Escape"&&(r[0].classList.remove("openModalAnimationTeam"),r[0].classList.add("closeModalAnimationTeam"),setTimeout(()=>{v()},400),v())}function K(e){e.target===M&&(r[0].classList.remove("openModalAnimationTeam"),r[0].classList.add("closeModalAnimationTeam"),setTimeout(()=>{v()},400))}export{R as o};
//# sourceMappingURL=modal-team-6hr6L91_.js.map
