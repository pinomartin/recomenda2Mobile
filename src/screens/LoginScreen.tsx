import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';
import {signInWithEmail} from '../firebase /useSignInEmail';
import {elevations} from '../utils/theme';
import {getTheme} from '../utils/theme/colors';

const LoginScreen = () => {
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
        />
      </View>
      <View style={styles.loginScreen__inputContainer}>
        <Text style={styles.loginScreen__inputLabel}>Password</Text>
        <Input value={password} onChangeText={e => setPassword(e)} secureText />
      </View>
      <View style={styles.loginScreen__inputContainer}>
        <Button
          label={'Submit'}
          onPress={() => signInWithEmail(email, password)}
          customStyles={styles.loginScreen__submitButton}
        />
      </View>
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
    backgroundColor: getTheme().primary70,
    paddingHorizontal: 32,
  },
});
