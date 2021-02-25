import React, { useState, useEffect, useContext, createContext } from 'react';
import queryString from 'query-string';
import firebase from 'firebase/app';
import 'firebase/auth';
import prod from '../.firebase/prod.json';
import { User } from '../interfaces';

if (!firebase.apps.length) {
  firebase.initializeApp(prod);
}

const AuthContext = createContext<any | null>(null);

export const ProvideAuth: React.FC = ({ children }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [user, setUser] = useState<User | null>(null);

  console.log(user);

  const signIn = (email: string, password: string) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        return response.user;
      });
  };

  const signUp = (email: string, password: string) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user);
        return response.user;
      });
  };

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(false);
      });
  };

  const sendPasswordResetEmail = (email: string) => {
    return firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        return true;
      });
  };

  // const confirmPasswordReset = (
  //   password: string,
  //   code: string | string[] | null
  // ) => {
  //   const resetCode = code || getFromQueryString('oobCode');

  //   return firebase
  //     .auth()
  //     .confirmPasswordReset(resetCode as string, password)
  //     .then(() => {
  //       return true;
  //     });
  // };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) setUser(user);
      else setUser(false);
    });

    return () => unsubscribe();
  }, []);

  return {
    userId: user && user.uid,
    signIn,
    signUp,
    signout,
    sendPasswordResetEmail,
  };
}

const getFromQueryString = (key: string) => {
  return queryString.parse(window.location.search)[key];
};
