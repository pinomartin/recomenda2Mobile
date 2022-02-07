import React from 'react';
import {Text, StyleSheet, Pressable, StyleProp, ViewStyle} from 'react-native';
import { windowHeight, windowWidth } from '../../utils/layout';
import {elevations} from '../../utils/theme';
import {getTheme} from '../../utils/theme/colors';

interface ButtonProps {
  onPress: () => void;
  label: string;
  customStyles?: StyleProp<ViewStyle>;
  isDisabled?: boolean;
}

const Button = ({
  onPress,
  label = 'Press me',
  customStyles,
  isDisabled = false,
}: ButtonProps) => {
  return (
    <Pressable
      disabled={isDisabled}
      style={[styles.homeScreen__buttonWrapper, customStyles]}
      onPress={onPress}>
      <Text style={styles.homeScreen__swipperButton__label}>{label}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  homeScreen__buttonWrapper: {
    marginTop: 8,
    width: windowWidth / 2,
    height: windowHeight / 15,
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
  button__disabled: {
    backgroundColor: getTheme().secondary10,
  },
});
