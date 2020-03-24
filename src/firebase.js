import firebase from 'firebase';

const firebaseConfig = {
    //Key in your database details
    apiKey: "AIzaSyCKU56Qo9AAp_7XUsZNRzJWsGE2JEAqTYU",
    authDomain: "countries-57f38.firebaseapp.com",
    databaseURL: "https://countries-57f38.firebaseio.com",
    projectId: "countries-57f38",
    storageBucket: "countries-57f38.appspot.com",
    messagingSenderId: "881357568189",
    appId: "1:881357568189:web:c3e3e5671745412fb39fd4",
    measurementId: "G-PD21TVRFMZ"
  };
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;