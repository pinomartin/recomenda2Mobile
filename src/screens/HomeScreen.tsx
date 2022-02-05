import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../components/Button';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import CardMoviePoster from '../components/CardMoviePoster';
import GradientBackgroud from '../components/GradientBackgroud';
import HorizontalSlider from '../components/HorizontalSlider';
import useMovies from '../hooks/useMovies';
import {RootStackParams} from '../navigation/Navigation';
// import ImageColors from 'react-native-image-colors';
import {getImageColors} from '../helpers/getColors';
import {GradientContext} from '../context/GradientContext';
import {getTheme} from '../utils/theme/colors';
import movieDB from '../api/movieDB';

const {width: windowWidth} = Dimensions.get('window');

const HomeScreen = ({
  navigation,
}: StackScreenProps<RootStackParams, 'HomeScreen'>) => {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();
  const {setMainColors} = useContext(GradientContext);

  const getPosterColors = async (index: number) => {
    // nowPlaying[index].title
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const [primary = 'green', secondary = 'coral'] = await getImageColors(uri);

    setMainColors({primary, secondary});
  };

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0);
    }
  }, [nowPlaying]);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="coral" size={50} />
      </View>
    );
  }

  return (
    <GradientBackgroud>
      <ScrollView>
        <View
          style={{
            marginTop: top + 20,
          }}>
          {/* {Carousel de peliculas} */}
          <View style={{height: 440}}>
            <Carousel
              data={nowPlaying}
              renderItem={({item}) => <CardMoviePoster movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 16}}>
            <Button
              onPress={() => navigation.navigate('SwipeScreen')}
              label="Recomenda2"
            />
          </View>
          {/* <View style={styles.homeScreen__buttonWrapper}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.homeScreen__swipperButton}
              onPress={() => navigation.navigate('SwipeScreen')}>
              <Text style={styles.homeScreen__swipperButton}>Swipper</Text>
            </TouchableOpacity>
          </View> */}

          {/* {Peliculas Populares} */}
          <HorizontalSlider title={'Mas populares'} movies={popular} />
          <HorizontalSlider title={'Mejor valuadas'} movies={topRated} />
          <HorizontalSlider title={'Proximamente'} movies={upcoming} />
        </View>
      </ScrollView>
    </GradientBackgroud>
  );
};

export default HomeScreen;
