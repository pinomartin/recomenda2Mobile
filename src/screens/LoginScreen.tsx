import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button, {BUTTON_TYPES} from '../components/Button';
import Input from '../components/Input';
import Loader from '../components/Loader';
import {AuthContext} from '../context/AuthContext';
import useInput from '../hooks/useInput';
import {AuthStackParam} from '../navigation/AuthStack';
import {elevations} from '../utils/theme';
import {getTheme} from '../utils/theme/colors';

const LoginScreen = ({
  navigation,
}: StackScreenProps<AuthStackParam, 'LoginScreen'>) => {
  const {login, register, isLoading, registerError, loginError} =
    useContext(AuthContext);
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return !isLoading ? (
    <View style={styles.loginScreen__container}>
      <View style={styles.loginScreen__inputContainer}>
        <Text style={styles.loginScreen__inputLabel}>Email</Text>
        <Input
          value={email}
          onChangeText={e => {
            setEmail(e);
          }}
          keyboardType={'email-address'}
          placeholder="mail@ejemplo.com"
          caption={registerError.emailError || loginError.emailError}
        />
      </View>
      {/* {isLoading ?  : null} */}

      <View style={styles.loginScreen__inputContainer}>
        <Text style={styles.loginScreen__inputLabel}>Contraseña</Text>
        <Input
          placeholder="8 o más caracteres"
          caption={
            isRegisterMode
              ? registerError.passwordError
              : loginError.passwordError
          }
          value={password}
          onChangeText={e => {
            setPassword(e);
          }}
          secureText
        />
      </View>
      {isRegisterMode ? (
        <View style={styles.loginScreen__inputContainer}>
          <Button
            label={'Registrate!'}
            onPress={() => register(email, password, () => {})}
            type={BUTTON_TYPES.TERITIARY}

            // isDisabled
            // customStyles={styles.loginScreen__submitButton}
          />
        </View>
      ) : (
        <View style={styles.loginScreen__inputContainer}>
          <Button
            label={'Iniciar Sesion'}
            onPress={() => login(email, password, () => {})}
          />
        </View>
      )}
      <Button
        label={isRegisterMode ? 'Ya tengo cuenta' : 'Es mi primera vez aqui'}
        onPress={() => setIsRegisterMode(!isRegisterMode)}
        customStyles={styles.loginScreen__buttonRegisterLoginMode}
      />
    </View>
  ) : (
    <Loader
      containerStyles={styles.loginScreen__container}
      color={getTheme().primary10}
      size={30}
    />
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
