// 'use strict';

// const backgroundImages = {
//   desktop: [
//     '/echipa-2/images/desktop/background-red-1x.jpg',
//     '/echipa-2/images/desktop/background-orange-1x.jpg',
//     '/echipa-2/images/desktop/background-yellow-1x.jpg',
//   ],
//   tablet: [
//     '/echipa-2/images/tablet/background-red-1x.jpg',
//     '/echipa-2/images/tablet/background-orange-1x.jpg',
//     '/echipa-2/images/tablet/background-yellow-1x.jpg',
//   ],
//   mobile: [
//     '/echipa-2/images/mobile/bgd-mobil-red-1x.jpg',
//     '/echipa-2/images/mobile/bgd-mobil-orange-1x.jpg',
//     '/echipa-2/images/mobile/bgd-mobil-yellow-1x.jpg',
//   ],
// };

// let currentBackgroundIndex = 0;
// let currentDevice = 'desktop'; // Setează implicit dispozitivul la desktop

// function rotateBackground() {
//   const headerContainer = document.querySelector('.header-container');

//   // Detectarea dispozitivului (poate fi optimizată)
//   if (window.innerWidth >= 768) {
//     currentDevice = 'desktop';
//   } else if (window.innerWidth >= 480) {
//     currentDevice = 'tablet';
//   } else {
//     currentDevice = 'mobile';
//   }

//   // index aleatoriu pentru imaginea curentă
//   let randomIndex = Math.floor(
//     Math.random() * backgroundImages[currentDevice].length
//   );

//   // imaginea nu se repetă imediat
//   while (randomIndex === currentBackgroundIndex) {
//     randomIndex = Math.floor(
//       Math.random() * backgroundImages[currentDevice].length
//     );
//   }

//   // Actualizează indexul curent și selectează noua imagine
//   currentBackgroundIndex = randomIndex;
//   headerContainer.style.backgroundImage = `url('${backgroundImages[currentDevice][randomIndex]}')`;
// }

// // Apel inițial pentru a seta imaginea de fundal
// rotateBackground();

// // Interval pentru a schimba imaginea în mod regulat
// setInterval(rotateBackground, 3000); // Schimbă imaginea la fiecare 3 secunde
