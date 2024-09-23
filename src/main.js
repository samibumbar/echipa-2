// import { initializeApp } from 'firebase/app';
// import {
//   getAuth,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from 'firebase/auth';

// // Configurarea Firebase
// const firebaseConfig = {
//   apiKey: 'AIzaSyCw7VkecxwaMQ6UI5ymBFqf54FHRi8_Fkc',
//   authDomain: 'filmoteka-ef771.firebaseapp.com',
//   projectId: 'filmoteka-ef771',
//   storageBucket: 'filmoteka-ef771.appspot.com',
//   messagingSenderId: '731162565659',
//   appId: '1:731162565659:web:da75ae92afc254876bacbe',
//   measurementId: 'G-13YE8DDH34',
// };

// // Inițializează aplicația Firebase doar o singură dată
// let app;
// if (!initializeApp.apps?.length) {
//   app = initializeApp(firebaseConfig);
// }
// const auth = getAuth(app);

// // Verificare dacă utilizatorul este autentificat
// onAuthStateChanged(auth, user => {
//   const loginForm = document.getElementById('login-form');
//   const protectedPage = document.getElementById('protected-page');

//   if (user) {
//     console.log('Utilizator autentificat:', user.email);
//     if (loginForm) loginForm.style.display = 'none'; // Ascundem formularul de login dacă este autentificat
//     if (protectedPage) protectedPage.style.display = 'block'; // Afișăm pagina protejată
//   } else {
//     console.log('Niciun utilizator autentificat.');
//     if (loginForm) loginForm.style.display = 'block'; // Afișăm formularul de login
//     if (protectedPage) protectedPage.style.display = 'none'; // Ascundem pagina protejată
//   }
// });

// // Autentificare utilizator
// document.getElementById('login-btn')?.addEventListener('click', event => {
//   event.preventDefault();
//   const email = document.getElementById('email-input').value;
//   const password = document.getElementById('password-input').value;

//   signInWithEmailAndPassword(auth, email, password)
//     .then(userCredential => {
//       // Logare reușită
//       Swal.fire('Logare reușită!', 'Veți fi redirecționat.', 'success');
//       setTimeout(() => {
//         window.location.href = '/page-3.html'; // Redirecționare către pagina protejată
//       }, 2000);
//     })
//     .catch(error => {
//       Swal.fire('Eroare la logare', error.message, 'error');
//     });
// });

// // Înregistrare utilizator
// document.getElementById('register-btn')?.addEventListener('click', event => {
//   event.preventDefault();
//   const email = document.getElementById('register-email').value;
//   const password = document.getElementById('register-password').value;

//   createUserWithEmailAndPassword(auth, email, password)
//     .then(userCredential => {
//       // Înregistrare reușită
//       Swal.fire('Înregistrare reușită!', 'Veți fi redirecționat.', 'success');
//       setTimeout(() => {
//         window.location.href = '/page-3.html'; // Redirecționare către pagina protejată
//       }, 2000);
//     })
//     .catch(error => {
//       Swal.fire('Eroare la înregistrare', error.message, 'error');
//     });
// });

// // Deconectare
// document.getElementById('logout-btn')?.addEventListener('click', () => {
//   signOut(auth)
//     .then(() => {
//       Swal.fire('Deconectat', 'Ați fost deconectat.', 'success');
//       setTimeout(() => {
//         window.location.href = '/login.html';
//       }, 2000);
//     })
//     .catch(error => {
//       Swal.fire('Eroare la deconectare', error.message, 'error');
//     });
// });
