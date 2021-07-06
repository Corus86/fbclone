import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBNOb5w0GRVtku3NpLJVberJMajwVH8Uc4",
    authDomain: "fbclone-1274a.firebaseapp.com",
    projectId: "fbclone-1274a",
    storageBucket: "fbclone-1274a.appspot.com",
    messagingSenderId: "428914581414",
    appId: "1:428914581414:web:b436b11315105de212f967",
    measurementId: "G-88M4W5D5VN"
  };

  const fireApp = firebase.initializeApp(firebaseConfig);
  const db = fireApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;