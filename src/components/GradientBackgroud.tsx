import React, {useContext, useEffect} from 'react';
import {StyleSheet, View, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GradientContext} from '../context/GradientContext';
import useFade from '../hooks/useFade';
import {getTheme} from '../utils/theme/colors';

interface Props {
  children: JSX.Element | JSX.Element[];
}
const GradientBackgroud = ({children}: Props) => {
  const {colors, prevColors, setPrevMainColors} = useContext(GradientContext);
  const {fadeIn, fadeOut, opacity} = useFade();

  useEffect(() => {
    fadeIn(() => {
      setPrevMainColors(colors);
      fadeOut(0);
    }, 300);
  }, [colors]);

  return (
    <View style={{flex: 1}}>
      {/* { children } */}
      <LinearGradient
        colors={[
          prevColors.primary,
          prevColors.secondary,
          getTheme().secondary,
        ]}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.5, y: 0.9}}
      />

      <Animated.View style={{...StyleSheet.absoluteFillObject, opacity}}>
        <LinearGradient
          colors={[colors.primary, colors.secondary, getTheme().secondary]}
          style={{...StyleSheet.absoluteFillObject}}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.5, y: 0.9}}
        />
      </Animated.View>
      {children}
    </View>
  );
};

export default GradientBackgroud;
