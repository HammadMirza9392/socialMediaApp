import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
/// cutom add
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBYYhCmUDNN0xaA22vFeFqsrnt9AKIlXbM',
  authDomain: 'socialmediaapp-a7e21.firebaseapp.com',
  projectId: 'socialmediaapp-a7e21',
  storageBucket: 'socialmediaapp-a7e21.appspot.com',
  messagingSenderId: '1007615873358',
  appId: '1:1007615873358:web:2663bbbf4e2cc660490e1f',
  measurementId: 'G-9N6LNLD2ET',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// custom add
export const auth = getAuth(app);
export const db = getFirestore(app);
