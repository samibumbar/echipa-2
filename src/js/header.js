// 'use strict';
import { initializeApp } from 'firebase/app';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';

// Configurația Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCw7VkecxwaMQ6UI5ymBFqf54FHRi8_Fkc',
  authDomain: 'filmoteka-ef771.firebaseapp.com',
  projectId: 'filmoteka-ef771',
  storageBucket: 'filmoteka-ef771.appspot.com',
  messagingSenderId: '731162565659',
  appId: '1:731162565659:web:da75ae92afc254876bacbe',
  measurementId: 'G-13YE8DDH34',
};

// Inițializează aplicația Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Verifică dacă utilizatorul este autentificat
onAuthStateChanged(auth, user => {
  if (!user) {
    window.location.href = '/echipa-2/page-3.html'; // Redirecționare la login dacă nu ești autentificat
  }
});




  document.getElementById('logout-btn').addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      window.location.href = '/page-3.html'; // Redirecționare la pagina de logare
    })
    .catch(error => {
      console.error('Eroare la deconectare:', error);
    });
});
const backgroundImages = {
  desktop: [
    '/echipa-2/images/desktop/background-red-1x.jpg',
    '/echipa-2/images/desktop/background-orange-1x.jpg',
    '/echipa-2/images/desktop/background-yellow-1x.jpg',
  ],
  tablet: [
    '/echipa-2/images/tablet/background-red-1x.jpg',
    '/echipa-2/images/tablet/background-orange-1x.jpg',
    '/echipa-2/images/tablet/background-yellow-1x.jpg',
  ],
  mobile: [
    '/echipa-2/images/mobile/bgd-mobil-red-1x.jpg',
    '/echipa-2/images/mobile/bgd-mobil-orange-1x.jpg',
    '/echipa-2/images/mobile/bgd-mobil-yellow-1x.jpg',
  ],
};
document.addEventListener('click', function (e) {
  if(e.target && e.target.id === 'logout-btn') {
    signOut(auth)
      .then(() => {
        window.location.href = '/login.html'; // Redirecționare la pagina de logare
      })
      .catch(error => {
        console.error('Eroare la deconectare:', error);
      });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('darkmode-toogle');
  const body = document.body;

  // Check if dark mode is enabled (if previously set in localStorage)
  if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
  }

  // Event listener for toggle
  darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });

  // Enable dark mode
  function enableDarkMode() {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled'); // Save user preference
  }

  // Disable dark mode
  function disableDarkMode() {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled'); // Save user preference
  }
});


// document.getElementById('logout-btn').addEventListener('click', () => {
//   signOut(auth)
//     .then(() => {
//       window.location.href = '/login.html'; // Redirecționare la pagina de logare
//     })
//     .catch(error => {
//       console.error('Eroare la deconectare:', error);
//     });
// });

// const backgroundImages = {
//   desktop: [
//     './images/desktop/background-red-1x.jpg',
//     './images/desktop/background-orange-1x.jpg',
//     './images/desktop/background-yellow-1x.jpg',
//   ],
//   tablet: [
//     './images/tablet/background-red-1x.jpg',
//     './images/tablet/background-orange-1x.jpg',
//     './images/tablet/background-yellow-1x.jpg',
//   ],
//   mobile: [
//     './images/mobile/bgd-mobil-red-1x.jpg',
//     './images/mobile/bgd-mobil-orange-1x.jpg',
//     './images/mobile/bgd-mobil-yellow-1x.jpg',
//   ],
// };

let currentBackgroundIndex = 0;
let currentDevice = 'desktop'; // Setează implicit dispozitivul la desktop

function rotateBackground() {
  const headerContainer = document.querySelector('.header-container');

  // Detectarea dispozitivului (poate fi optimizată)
  if (window.innerWidth >= 768) {
    currentDevice = 'desktop';
  } else if (window.innerWidth >= 480) {
    currentDevice = 'tablet';
  } else {
    currentDevice = 'mobile';
  }

  // index aleatoriu pentru imaginea curentă
  let randomIndex = Math.floor(
    Math.random() * backgroundImages[currentDevice].length
  );

  // imaginea nu se repetă imediat
  while (randomIndex === currentBackgroundIndex) {
    randomIndex = Math.floor(
      Math.random() * backgroundImages[currentDevice].length
    );
  }

  // Actualizează indexul curent și selectează noua imagine
  currentBackgroundIndex = randomIndex;
  headerContainer.style.backgroundImage = `url('${backgroundImages[currentDevice][randomIndex]}')`;
}

// Apel inițial pentru a seta imaginea de fundal
rotateBackground();

// Interval pentru a schimba imaginea în mod regulat
setInterval(rotateBackground, 3000); // Schimbă imaginea la fiecare 3 secunde
