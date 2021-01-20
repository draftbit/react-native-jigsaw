import firebase from "firebase";
import type { DataContext } from "./DataContext";

export default {
  signInWithEmailAndPassword: (email, password) =>
    firebase.auth().signInWithEmailAndPassword(email, password),

  signOut: () => firebase.auth().signOut(),
};
