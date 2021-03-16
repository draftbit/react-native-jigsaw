import * as React from "react";

export const useAuthState = (auth: any) => {
  const [error, setError] = React.useState();
  const [value, setValue] = React.useState(auth.currentUser);

  React.useEffect(() => {
    const list = auth.onAuthStateChanged(setValue, setError);

    return () => {
      list();
    };
  }, [auth]);

  const signInWithEmailAndPassword = (user: string, password: string) => {
    auth
      .signInWithEmailAndPassword(user, password)
      .then(setValue)
      .catch(setError);
  };

  const createUserWithEmailAndPassword = (user: string, password: string) => {
    auth
      .signInWithEmailAndPassword(user, password)
      .then(setValue)
      .catch(setError);
  };

  const signOut = () => auth.signOut();

  return [
    value,
    error,
    signInWithEmailAndPassword,
    signOut,
    createUserWithEmailAndPassword,
  ];
};
