import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseApp = initializeApp({
    apiKey: 'AIzaSyB0jkgZlbp3zmXG6E841ckdIL5WkEUk6EM',
    authDomain: 'tiktokclone-c416f.firebaseapp.com',
    projectId: 'tiktokclone-c416f',
    storageBucket: 'tiktokclone-c416f.appspot.com',
    messagingSenderId: '369539913787',
    appId: '1:369539913787:web:845a292c4a3f67551ee41e',
});

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
