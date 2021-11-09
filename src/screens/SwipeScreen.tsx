import React, {useState} from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import TinderCard from 'react-tinder-card';
import useMovies from '../hooks/useMovies';

const SwipeScreen = () => {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const [lastDirection, setLastDirection] = useState<string>('');

  const swiped = (direction: string, nameToDelete: string) => {
    console.log('removing: ' + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name: string) => {
    console.log(name + ' left the screen!');
  };

  return (
      
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {isLoading ? (<><ActivityIndicator color="#000"></ActivityIndicator></>) : (

            <View style={{width: '90%', maxWidth: 260, height: '50%' }}>
              {popular.map(movie => {
               return(
      
                <TinderCard
                  key={movie.id}
                  onSwipe={dir => swiped(dir, movie.title)}
                  onCardLeftScreen={() => outOfFrame('Tincho')}
                  
                  >
                  <View style={styles.swipper__card}>
                    <Image source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}} style={styles.swipper__imageCard} />
                    {/* <Text style={{color: 'blue', fontSize: 200, zIndex: 999}}>{movie.overview}</Text> */}
                  </View>
                </TinderCard>
               )
              })}
            </View>
        )}
        </View>
  );
};

const styles = StyleSheet.create({
  swipper__card: {
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
    maxWidth: 260,
    height: 400,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  swipper__imageCard: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 20,
  },
});

export default SwipeScreen;
