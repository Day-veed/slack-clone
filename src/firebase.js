import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAW0hYlGCeeJLBcqT_v0OKKaWnILuYKPxI",
    authDomain: "slack-clone-yt-9221c.firebaseapp.com",
    projectId: "slack-clone-yt-9221c",
    storageBucket: "slack-clone-yt-9221c.appspot.com",
    messagingSenderId: "1048924224760",
    appId: "1:1048924224760:web:513af7177478dac3314f0d"
}; 

const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};