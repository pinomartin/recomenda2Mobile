import auth from '@react-native-firebase/auth';
import {useState} from 'react';

const useLogin = () => {
  const errorMessageInitialState = {emailError: '', passwordError: ''};

  const [loginError, setErrorMessage] = useState(errorMessageInitialState);
  const [isLoading, setIsLoading] = useState(false);

  const signInWithEmailAndPassword = (
    email: string,
    password: string,
    callback: () => void,
  ) => {
    setIsLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        callback();
        setErrorMessage(errorMessageInitialState);
        setIsLoading(false);
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          setErrorMessage({
            ...loginError,
            emailError: 'Ingrese un mail válido',
          });
        }
        if (error.code === 'auth/wrong-password') {
          setErrorMessage({
            ...loginError,
            passwordError: 'La contraseña es incorrecta',
          });
        }
        setIsLoading(false);

        console.log('errorSignInEmail', error);
      });
  };

  const signOut = async (callback: () => void) => {
    setIsLoading(true);
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
        setErrorMessage(errorMessageInitialState);
        setIsLoading(false);
        callback();
      });
  };

  return {signInWithEmailAndPassword, signOut, loginError, isLoading};
};

export default useLogin;
