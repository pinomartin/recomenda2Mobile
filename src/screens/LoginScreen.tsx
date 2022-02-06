import {StackScreenProps} from '@react-navigation/stack';
import React, {useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import useLogin from '../firebase/useLogin';
import useRegister from '../firebase/useSignUp';
import {RootStackParams} from '../navigation/Navigation';
import {elevations} from '../utils/theme';
import {getTheme} from '../utils/theme/colors';

const LoginScreen = ({
  navigation,
}: StackScreenProps<RootStackParams, 'LoginScreen'>) => {
  const {signInWithEmailAndPassword, loginError, isLoading} = useLogin();
  const {createAccountWithEmail, registerError, isRegisterLoading} =
    useRegister();
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


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
      {isLoading ? (
        <ActivityIndicator color={getTheme().primary10} size={30} />
      ) : null}
      {isRegisterLoading ? (
        <ActivityIndicator color={getTheme().primary10} size={30} />
      ) : null}
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
            onPress={() =>
              createAccountWithEmail(email, password, () =>
                navigation.navigate('HomeScreen'),
              )
            }
            customStyles={styles.loginScreen__submitButton}
          />
        </View>
      ) : (
        <View style={styles.loginScreen__inputContainer}>
          <Button
            label={'Iniciar Sesion'}
            onPress={() =>
              signInWithEmailAndPassword(email, password, () =>
                navigation.navigate('HomeScreen'),
              )
            }
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
    paddingHorizontal: 32,
  },
  loginScreen__loginButton: {
    backgroundColor: getTheme().additional20,
    paddingHorizontal: 32,
  },
  loginScreen__buttonRegisterLoginMode: {
    backgroundColor: 'transparent',
    marginTop: 8,
    borderColor: getTheme().primary10,
  },
});
