import React from 'react';
import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
} from 'react-native';

interface InputProps {
  onChangeText?: (text: string, extracted?: string) => void;
  keyboardType?: KeyboardTypeOptions;
  secureText?: boolean;
  value: string;
  customStyles?: StyleProp<TextStyle>;
}

const Input = ({
  onChangeText,
  keyboardType,
  secureText = false,
  value,
  customStyles,
}: InputProps) => {
  return (
    <TextInput
      keyboardType={keyboardType}
      onChangeText={onChangeText}
      secureTextEntry={secureText}
      style={[styles.input__wrapper, customStyles]}
      value={value}
      autoCapitalize={'none'}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input__wrapper: {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 8,

  },
});
