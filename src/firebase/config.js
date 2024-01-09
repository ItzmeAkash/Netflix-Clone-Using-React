import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDJZaYW9H2xKrzPssiTPY9Lg__fo_lBzI4",
    authDomain: "olxx-143b5.firebaseapp.com",
    projectId: "olxx-143b5",
    storageBucket: "olxx-143b5.appspot.com",
    messagingSenderId: "876023955755",
    appId: "1:876023955755:web:823d637aca0d97cab6c56e",
    measurementId: "G-98YCHP21D9"
  };


 export default firebase.initializeApp(firebaseConfig)