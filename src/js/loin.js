import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Comută între Login și Register
document.getElementById('show-register').addEventListener('click', event => {
  event.preventDefault();
  document.getElementById('login-form').classList.add('form-hidden');
  document.getElementById('login-form').classList.remove('form-visible');
  document.getElementById('register-form').classList.remove('form-hidden');
  document.getElementById('register-form').classList.add('form-visible');
});

document.getElementById('show-login').addEventListener('click', event => {
  event.preventDefault();
  document.getElementById('register-form').classList.add('form-hidden');
  document.getElementById('register-form').classList.remove('form-visible');
  document.getElementById('login-form').classList.remove('form-hidden');
  document.getElementById('login-form').classList.add('form-visible');
});

// Autentificare utilizator
document.getElementById('login-btn').addEventListener('click', event => {
  event.preventDefault();
  const email = document.getElementById('email-input').value;
  const password = document.getElementById('password-input').value;

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      Swal.fire('Logare reușită!', 'Veți fi redirecționat.', 'success');
      setTimeout(() => {
        window.location.href = 'echipa-2/index.html';
      }, 2000);
    })
    .catch(error => {
      Swal.fire('Eroare la logare', error.message, 'error');
    });
});

// Înregistrare utilizator
document.getElementById('register-btn').addEventListener('click', event => {
  event.preventDefault();
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      Swal.fire('Înregistrare reușită!', 'Acum vă puteți loga.', 'success');
      setTimeout(() => {
        document.getElementById('register-form').classList.add('form-hidden');
        document
          .getElementById('register-form')
          .classList.remove('form-visible');
        document.getElementById('login-form').classList.remove('form-hidden');
        document.getElementById('login-form').classList.add('form-visible');
      }, 2000);
    })
    .catch(error => {
      Swal.fire('Eroare la înregistrare', error.message, 'error');
    });
});

// Verificare a autentificării
onAuthStateChanged(auth, user => {
  if (user) {
    window.location.href = 'echipa-2/index.html';
  }
});
