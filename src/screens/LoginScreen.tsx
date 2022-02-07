import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import Loader from '../components/Loader';
import {AuthContext} from '../context/AuthContext';
import {AuthStackParam} from '../navigation/AuthStack';
import {elevations} from '../utils/theme';
import {getTheme} from '../utils/theme/colors';

const LoginScreen = ({
  navigation,
}: StackScreenProps<AuthStackParam, 'LoginScreen'>) => {
  // const {signInWithEmailAndPassword, loginError, isLoading} = useLogin();
  // const {createAccountWithEmail, registerError, isRegisterLoading} =
  //   useRegister();
  const {login, register, isLoading, registerError, loginError} =
    useContext(AuthContext);
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const {...authData} = useAuth();
  // const {user, initializing} = authData;

  return (
    <View style={styles.loginScreen__container}>
      <View style={styles.loginScreen__inputContainer}>
        <Text style={styles.loginScreen__inputLabel}>Email</Text>
        <Input
          value={email}
          onChangeText={e => setEmail(e)}
          keyboardType={'email-address'}
          placeholder="mail@ejemplo.com"
          caption={registerError.emailError || loginError.emailError}
        />
      </View>
      {isLoading ? <Loader color={getTheme().primary10} size={30} /> : null}

      <View style={styles.loginScreen__inputContainer}>
        <Text style={styles.loginScreen__inputLabel}>Password</Text>
        <Input
          placeholder="8 o más caracteres"
          caption={
            isRegisterMode
              ? registerError.passwordError
              : loginError.passwordError
          }
          value={password}
          onChangeText={e => setPassword(e)}
          secureText
        />
      </View>
      {isRegisterMode ? (
        <View style={styles.loginScreen__inputContainer}>
          <Button
            label={'Registrate!'}
            onPress={() => register(email, password, () => {})}
            customStyles={styles.loginScreen__submitButton}
          />
        </View>
      ) : (
        <View style={styles.loginScreen__inputContainer}>
          <Button
            label={'Iniciar Sesion'}
            onPress={() => login(email, password, () => {})}
            customStyles={styles.loginScreen__loginButton}
          />
        </View>
      )}
      <Button
        label={isRegisterMode ? 'Ya tengo cuenta' : 'Es mi primera vez aqui'}
        onPress={() => setIsRegisterMode(!isRegisterMode)}
        customStyles={styles.loginScreen__buttonRegisterLoginMode}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginScreen__container: {
    flex: 1,
    backgroundColor: getTheme().primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginScreen__inputContainer: {
    marginVertical: 16,
    ...elevations.elevation06,
  },
  loginScreen__inputLabel: {
    color: getTheme().white,
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 4,
  },
  loginScreen__submitButton: {
    backgroundColor: getTheme().additional,
  },
  loginScreen__loginButton: {
    backgroundColor: getTheme().additional20,
  },
  loginScreen__buttonRegisterLoginMode: {
    backgroundColor: 'transparent',
    borderColor: getTheme().primary10,
  },
});
