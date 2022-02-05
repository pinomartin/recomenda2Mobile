import React, {useContext, useEffect, useState} from 'react';
import {ActivityIndicator, Button, Image, StyleSheet, Text, View} from 'react-native';
import TinderCard from 'react-tinder-card';
import GradientBackgroud from '../components/GradientBackgroud';
import {GradientContext} from '../context/GradientContext';
import {getImageColors} from '../helpers/getColors';
import useMovies from '../hooks/useMovies';
import { getTheme } from '../utils/theme/colors';

const SwipeScreen = () => {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const [lastDirection, setLastDirection] = useState<string>('');
  const {setMainColors} = useContext(GradientContext);

  const getPosterColors = async (index: number) => {
    // nowPlaying[index].title
    const movie = topRated[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const [primary = 'green', secondary = 'coral'] = await getImageColors(uri);

    setMainColors({primary, secondary});
  };

  // useEffect(() => {
  //   if (popular.length > 0) {
  //     getPosterColors(0);
  //   }
  // }, []);

  const swiped = (direction: string, nameToDelete: string) => {
    console.log('removing: ' + nameToDelete);
    switch (direction) {
      case 'left':
        console.log('LEFT');
        break;
      case 'right':
        console.log('RIGHT');
        break;
      case 'up':
        console.log('UP');
        break;
      default:
        break;
    }
    setLastDirection(direction);
  };

  const outOfFrame = (name: string) => {
    console.log(name + ' left the screen!');
  };

  return (
    // <GradientBackgroud>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: getTheme().secondary}}>
        {isLoading ? (
          <ActivityIndicator color="#000"></ActivityIndicator>
        ) : (
          <View style={{width: '90%', maxWidth: 260, height: '50%'}}>
            {topRated.map( (movie, index) => {
              // getPosterColors(index);
              return (
                <TinderCard
                  key={movie.id}
                  onSwipe={dir => swiped(dir, movie.title)}
                  // onCardLeftScreen={() => outOfFrame('Tincho')}
                  preventSwipe={['down']}>
                  <View style={styles.swipper__card}>
                    <Image
                      source={{
                        uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                      }}
                      style={styles.swipper__imageCard}
                    />
                    {/* <Text style={{color: 'blue', fontSize: 200, zIndex: 999}}>{movie.overview}</Text> */}
                  </View>
                </TinderCard>
              );
            })}
          </View>
        )}
      </View>
    // </GradientBackgroud>
  );
};

const styles = StyleSheet.create({
  swipper__card: {
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
    maxWidth: 260,
    height: 420,
    shadowColor: 'black',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    borderRadius: 15,
    resizeMode: 'cover',
  },
  swipper__imageCard: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 15,
  },
});

export default SwipeScreen;
