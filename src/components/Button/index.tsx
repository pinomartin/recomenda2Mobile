import React from 'react';
import {
  Text,
  StyleSheet,
  Pressable,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {elevations} from '../../utils/theme';
import {getTheme} from '../../utils/theme/colors';

interface ButtonProps {
  onPress: () => void;
  label: string;
  customStyles?: StyleProp<ViewStyle>;
}

const Button = ({onPress, label = 'Press me', customStyles}: ButtonProps) => {
  return (
    <Pressable
      style={[styles.homeScreen__buttonWrapper, customStyles]}
      onPress={onPress}>
      <Text style={styles.homeScreen__swipperButton__label}>{label}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  homeScreen__buttonWrapper: {
    minHeight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: getTheme().primary,
    paddingHorizontal: 12,
    ...elevations.elevation06,
  },
  homeScreen__swipperButton__label: {
    textAlign: 'center',
    color: getTheme().white,
    fontWeight: 'bold',
  },
});
