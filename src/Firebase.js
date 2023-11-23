import { initializeApp } from 'firebase';
require('dotenv').config({ path: '../.env' });

const pe = process.env;

const firebaseConfig = {
    apiKey: pe.FIREBASE_API_KEY,
    authDomain: pe.FIREBASE_AUTH_DOMAIN,
    projectId: pe.FIREBASE_PROJECT_ID,
    storageBucket: pe.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: pe.FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APP_ID
}

const firebaseApp = initializeApp(firebaseConfig);