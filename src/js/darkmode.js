import Darkmode from 'darkmode-js';

new Darkmode().showWidget();
console.log('darkmode');

const options = {
  bottom: '64px', // default: '32px'
  right: 'unset', // default: '32px'
  left: '32px', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff', // default: '#fff'
  buttonColorDark: '#100f2c', // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true, // default: true
};

const darkmode = new Darkmode(options);
darkmode.showWidget();

// const options = {
//   bottom: '32px', // Poziționare inițială jos
//   right: '32px',
//   label: '🌓',
//   autoMatchOsTheme: true,
// };

// const darkmode = new Darkmode(options);
// darkmode.showWidget(); // Afișează widgetul default în colțul dreapta jos
