import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                     */import{i as o,g as n,s as m,c as a,o as d}from"./assets/vendor-BNe1RqNb.js";const l={apiKey:"AIzaSyCw7VkecxwaMQ6UI5ymBFqf54FHRi8_Fkc",authDomain:"filmoteka-ef771.firebaseapp.com",projectId:"filmoteka-ef771",storageBucket:"filmoteka-ef771.appspot.com",messagingSenderId:"731162565659",appId:"1:731162565659:web:da75ae92afc254876bacbe",measurementId:"G-13YE8DDH34"},c=o(l),s=n(c);document.getElementById("show-register").addEventListener("click",e=>{e.preventDefault(),document.getElementById("login-form").classList.add("form-hidden"),document.getElementById("login-form").classList.remove("form-visible"),document.getElementById("register-form").classList.remove("form-hidden"),document.getElementById("register-form").classList.add("form-visible")});document.getElementById("show-login").addEventListener("click",e=>{e.preventDefault(),document.getElementById("register-form").classList.add("form-hidden"),document.getElementById("register-form").classList.remove("form-visible"),document.getElementById("login-form").classList.remove("form-hidden"),document.getElementById("login-form").classList.add("form-visible")});document.getElementById("login-btn").addEventListener("click",e=>{e.preventDefault();const i=document.getElementById("email-input").value,r=document.getElementById("password-input").value;m(s,i,r).then(t=>{Swal.fire("Logare reușită!","Veți fi redirecționat.","success"),setTimeout(()=>{window.location.href="../index.html"},2e3)}).catch(t=>{Swal.fire("Eroare la logare",t.message,"error")})});document.getElementById("register-btn").addEventListener("click",e=>{e.preventDefault();const i=document.getElementById("register-email").value,r=document.getElementById("register-password").value;a(s,i,r).then(t=>{Swal.fire("Înregistrare reușită!","Acum vă puteți loga.","success"),setTimeout(()=>{document.getElementById("register-form").classList.add("form-hidden"),document.getElementById("register-form").classList.remove("form-visible"),document.getElementById("login-form").classList.remove("form-hidden"),document.getElementById("login-form").classList.add("form-visible")},2e3)}).catch(t=>{Swal.fire("Eroare la înregistrare",t.message,"error")})});d(s,e=>{e&&(window.location.href="../index.html")});
//# sourceMappingURL=login.js.map
