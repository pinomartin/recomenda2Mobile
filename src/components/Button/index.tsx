import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  Pressable,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {windowHeight, windowWidth} from '../../utils/layout';
import {elevations} from '../../utils/theme';
import {getTheme} from '../../utils/theme/colors';

export enum BUTTON_TYPES {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERITIARY = 'tertiary',
}

interface ButtonProps {
  onPress: () => void;
  label: string;
  customStyles?: StyleProp<ViewStyle>;
  isDisabled?: boolean;
  type?: BUTTON_TYPES;
}

const Button = ({
  onPress,
  label = 'Press me',
  customStyles,
  isDisabled = false,
  type = BUTTON_TYPES.PRIMARY,
}: ButtonProps) => {
  const buttonStyles: Array<ViewStyle> = [styles.homeScreen__buttonWrapper];
  const buttonTextStyles: Array<TextStyle> = [styles.button__label];
  const [pressed, setPressed] = useState(false);

  switch (type) {
    case BUTTON_TYPES.SECONDARY:
      buttonStyles.push(styles.button__secondary);
      buttonTextStyles.push(styles.button__label__secondary);

      if (pressed) {
        buttonStyles.push(styles.button__border__secondaryPressed);
        // buttonTextStyles.push(styles.button__text__secondaryPressed);
      } else if (isDisabled) {
        buttonStyles.push(styles.button__border__secondaryDisabled);
        buttonTextStyles.push(styles.button__label__disabled);
      }
      break;
    case BUTTON_TYPES.TERITIARY:
      buttonStyles.push(styles.button__tertiary);
      if (pressed) {
        buttonStyles.push(styles.button__border__tertiaryPressed);
        // buttonTextStyles.push(styles.button__text__secondaryPressed);
      } else if (isDisabled) {
        buttonStyles.push(styles.button__border__tertiaryDisabled);
        buttonTextStyles.push(styles.button__labelTertiary__disabled);
      }
      break;

    default:
      if (pressed) {
        buttonStyles.push(styles.button__background__pressed);
      } else if (isDisabled) {
        buttonStyles.push(styles.button__disabled);
        buttonTextStyles.push(styles.button__label__disabled);
      }
      break;
  }

  const updatePressedValue = (value: boolean) => {
    setPressed(value);

    return value;
  };

  return (
    <Pressable
      disabled={isDisabled}
      style={[buttonStyles, customStyles]}
      onPressIn={() => updatePressedValue(true)}
      onPressOut={() => updatePressedValue(false)}
      onPress={onPress}>
      <Text style={buttonTextStyles}>{label}</Text>
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
    paddingHorizontal: 12,
    ...elevations.elevation06,
    backgroundColor: getTheme().primary50,
  },
  button__background__pressed: {
    backgroundColor: getTheme().primary,
  },
  button__disabled: {
    backgroundColor: getTheme().text30,
  },
  button__secondary: {
    backgroundColor: getTheme().secondary,
  },
  button__label__secondary: {
    color: getTheme().primary,
  },
  button__border__secondaryPressed: {
    backgroundColor: getTheme().text70,
  },
  button__border__secondaryDisabled: {
    backgroundColor: getTheme().elevation,
  },
  button__tertiary: {
    backgroundColor: getTheme().additional,
  },
  button__border__tertiaryPressed: {
    backgroundColor: getTheme().additional20,
  },
  button__border__tertiaryDisabled: {
    backgroundColor: getTheme().additional10,
  },
  button__label: {
    textAlign: 'center',
    color: getTheme().white,
    fontWeight: 'bold',
    fontSize: 15,
  },
  button__label__disabled: {
    color: getTheme().text50,
  },
  button__labelTertiary__disabled: {
    color: getTheme().text30,
  },
});
