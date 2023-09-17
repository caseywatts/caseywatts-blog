<script lang="ts">
  import { FirebaseApp } from "sveltefire";
  import { initializeApp } from "firebase/app";
  import { getFirestore } from "firebase/firestore";
  import { getAuth } from "firebase/auth";
  import { signInAnonymously } from "firebase/auth";
  import LogInNav from "./LogInNav.svelte";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAk7eGXjzq1IvvDSjMtQZ6w99Ih0m2AwEI",
    authDomain: "chords-db.firebaseapp.com",
    databaseURL: "https://chords-db-default-rtdb.firebaseio.com",
    projectId: "chords-db",
    storageBucket: "chords-db.appspot.com",
    messagingSenderId: "16982689672",
    appId: "1:16982689672:web:7472b13c82d71da3d99c3d",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const auth = getAuth(app);
  signInAnonymously(auth);
</script>

<FirebaseApp {auth} {firestore}>
  <LogInNav />
  <slot />
</FirebaseApp>
