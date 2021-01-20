import * as React from "react";
import appConfig from "app-config";

let signInWithEmailAndPassword;

if (appConfig) {
  if (appConfig.firebase) {
    const firebase = require("firebase");

    signInWithEmailAndPassword = (email, password) =>
      firebase.auth().signInWithEmailAndPassword(email, password);
  }
}

export type DataContextType = {
  signInWithEmailAndPassword: (email: string, password: string) => Promise<void>;
};

const defaultValue: DataContextType = {
  signInWithEmailAndPassword,
};

export const DataContext = React.createContext(defaultValue);
