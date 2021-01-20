import * as React from "react";

export type DataContextType = {
  signInWithEmailAndPassword: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const defaultDataContext: DataContextType = {
  signInWithEmailAndPassword: () => {
    throw new Error("Signin has not been implemented for this app");
  },
  signOut: () => {
    throw new Error("Signout has not been implemented for this app");
  }
};

export const DataContext = React.createContext(defaultDataContext);
