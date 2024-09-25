import Darkmode from 'darkmode-js';

// Creează o instanță a darkmode
const darkmode = new Darkmode();

// // Verifică dacă tema anterioară este salvată în localStorage
const currentTheme = localStorage.getItem('theme') || 'light';

// // Setează tema inițială
if (currentTheme === 'dark') {
  darkmode.toggle();
}

// // Găsește butonul de schimbare a temei
const themeToggle = document.getElementById('theme-toggle');

// // Adaugă un eveniment pentru buton

themeToggle?.addEventListener('click', () => {
  darkmode.toggle(); // Schimbă tema

  // Salvează noua temă în localStorage
  const theme = document.body.classList.contains('dark-mode')
    ? 'dark'
    : 'light';
  localStorage.setItem('theme', theme);
});

document.getElementById('theme-toggle')?.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');

  // Salvare tema în localStorage
  const theme = document.body.classList.contains('dark-mode')
    ? 'dark'
    : 'light';
  localStorage.setItem('theme', theme);
});

// Aplicarea temei salvate la încărcare
window.onload = function () {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
};
