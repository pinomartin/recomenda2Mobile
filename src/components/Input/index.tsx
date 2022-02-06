import React from 'react';
import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
} from 'react-native';
import { getTheme } from '../../utils/theme/colors';

interface InputProps {
  onChangeText?: (text: string, extracted?: string) => void;
  keyboardType?: KeyboardTypeOptions;
  secureText?: boolean;
  value: string;
  customStyles?: StyleProp<TextStyle>;
  placeholder?: string;
  caption?: string;
  type?: 'default' | 'error' | 'success'
}

const Input = ({
  onChangeText,
  keyboardType,
  secureText = false,
  value,
  customStyles,
  placeholder = '',
  caption= '',
  type = 'default'
}: InputProps) => {

 
  const captionStyles = [
    styles.input__caption,
    type === 'error' ? styles.input__caption__error : null,
  ];



  return (
    <>
    <TextInput
      keyboardType={keyboardType}
      onChangeText={onChangeText}
      secureTextEntry={secureText}
      style={[styles.input__wrapper, customStyles]}
      value={value}
      autoCapitalize={'none'}
      placeholder={placeholder}
    />
    <Text style={captionStyles}>{caption}</Text>
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  input__wrapper: {
    width: 240,
    backgroundColor: 'white',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 8,

  },
  input__caption:{
    fontSize: 12,
    color: getTheme().white,
    paddingTop: 4
  },
  input__caption__error:{
    color: getTheme().warning40
  }
});
