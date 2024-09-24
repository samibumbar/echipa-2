// 'use strict';
const backgroundImages = {
  desktop: [
    '/images/desktop/background-red-1x.jpg',
    '/images/desktop/background-orange-1x.jpg',
    '/images/desktop/background-yellow-1x.jpg',
  ],
  tablet: [
    '/images/tablet/background-red-1x.jpg',
    '/images/tablet/background-orange-1x.jpg',
    '/images/tablet/background-yellow-1x.jpg',
  ],
  mobile: [
    '/images/mobile/bgd-mobil-red-1x.jpg',
    '/images/mobile/bgd-mobil-orange-1x.jpg',
    '/images/mobile/bgd-mobil-yellow-1x.jpg',
  ],
};
let currentBackgroundIndex = 0;
let currentDevice = 'desktop'; // Setează implicit dispozitivul la desktop

function rotateBackground() {
  const headerContainer = document.querySelector('.header-container');

  // Detectarea dispozitivului pe baza dimensiunii ferestrei
  if (window.innerWidth >= 1200) {
    currentDevice = 'desktop';
  } else if (window.innerWidth >= 768 && window.innerWidth < 1200) {
    currentDevice = 'tablet';
  } else {
    currentDevice = 'mobile';
  }

  // index aleatoriu pentru imaginea curentă
  let randomIndex = Math.floor(
    Math.random() * backgroundImages[currentDevice].length
  );

  // Evită repetarea aceleași imagini consecutiv
  while (randomIndex === currentBackgroundIndex) {
    randomIndex = Math.floor(
      Math.random() * backgroundImages[currentDevice].length
    );
  }

  // Actualizează indexul curent și imaginea de fundal
  currentBackgroundIndex = randomIndex;
  headerContainer.style.backgroundImage = `url('${backgroundImages[currentDevice][randomIndex]}')`;
}

// Apel inițial pentru a seta imaginea de fundal
rotateBackground();

// Interval pentru a schimba imaginea în mod regulat
setInterval(rotateBackground, 3000); // Schimbă imaginea la fiecare 3 secunde
// Schimbă imaginea la fiecare 3 secunde

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
    window.location.href = 'echipa-2/page-3.html'; // Redirecționare la login dacă nu ești autentificat
  }
});

document.getElementById('logout-btn').addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      window.location.href = 'echipa-2/page-3.html';
    })
    .catch(error => {
      console.error('Eroare la deconectare:', error);
    });
});
document.addEventListener('click', function (e) {
  if (e.target && e.target.id === 'logout-btn') {
    signOut(auth)
      .then(() => {
        window.location.href = '/page-3.html'; // Redirecționare la pagina de logare
      })
      .catch(error => {
        console.error('Eroare la deconectare:', error);
      });
  }
});

// const options = {
//   bottom: '64px', // default: '32px'
//   right: 'unset', // default: '32px'
//   left: '32px', // default: 'unset'
//   time: '0.5s', // default: '0.3s'
//   mixColor: '#fff', // default: '#fff'
//   backgroundColor: '#fff', // default: '#fff'
//   buttonColorDark: '#100f2c', // default: '#100f2c'
//   buttonColorLight: '#fff', // default: '#fff'
//   saveInCookies: true, // default: true,
//   label: '🌓', // default: ''
//   autoMatchOsTheme: true, // default: true
// };

// const darkmode = new darkmode(options);
// darkmode.showWidget();

// function saveDarkModePreference(isDarkMode) {
//   localStorage.setItem('darkmode', isDarkMode ? 'enabled' : 'disabled');
// }

// document
//   .querySelector('.darkmode-toggle')
//   .addEventListener('click', function () {
//     const isDarkMode = Darkmode.isActivated();
//     saveDarkModePreference(isDarkMode);
//   });

// // Aplică tema pe baza valorii din localStorage la fiecare încărcare de pagină
// if (localStorage.getItem('darkmode') === 'enabled') {
//   const darkmode = new Darkmode();
//   darkmode.toggle();
// }
