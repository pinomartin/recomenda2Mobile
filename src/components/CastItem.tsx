import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Cast} from '../interfaces/creditInterface';

interface Props {
  actor: Cast;
}

const CastItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.castItem__container}>

      {actor.profile_path && (
        <Image source={{uri}} style={styles.castItem__image} />
      )}

      <View style={styles.castItem__textContainer}>
        <Text style={{fontSize: 14, fontWeight: 'bold'}}>{actor.name}</Text>
        <Text style={{fontSize: 12, opacity: 0.7}}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  castItem__container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    marginHorizontal: 20,
    paddingRight: 10,
  },
  castItem__image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  castItem__textContainer: {
    alignSelf: 'center',
    marginLeft: 10,
  },
});

export default CastItem;
