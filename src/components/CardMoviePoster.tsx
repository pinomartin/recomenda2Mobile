import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Movie} from '../interfaces/movieInterface';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

const CardMoviePoster = ({movie, height = 420, width = 300}: Props) => {
  const {poster_path} = movie;
  const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;

  const navigation = useNavigation<StackNavigationProp<any, any>>();

  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate('DetailScreen', movie)}
      activeOpacity={0.7}
      style={{
        width, 
        height, 
        marginHorizontal: 8,
        paddingBottom: 20,
        paddingHorizontal: 7
      }}
    >
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 10,
  },
});

export default CardMoviePoster;
