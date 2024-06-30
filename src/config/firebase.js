// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDqoDcjpIQZF7sL0SPydCAVYKDBxyJZdj8',
  authDomain: 'sympla-cra-clone.firebaseapp.com',
  databaseURL: 'https://sympla-cra-clone-default-rtdb.firebaseio.com',
  projectId: 'sympla-cra-clone',
  storageBucket: 'sympla-cra-clone.appspot.com',
  messagingSenderId: '1083889994286',
  appId: '1:1083889994286:web:35a2fd3c4df396e344adbf',
  measurementId: 'G-430JLL2C0W',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// export const database = getDatabase(app);
