import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Movie} from '../interfaces/movieInterface';
import { getTheme } from '../utils/theme/colors';
import CardMoviePoster from './CardMoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
}

const HorizontalSlider = ({title, movies}: Props) => {
  return (
    <View style={{
        height: (title) ? 260 : 220,
        }}>
      {title && <Text style={{fontSize: 20, fontWeight: '500', marginLeft: 10, color: getTheme().white, letterSpacing: 0, marginBottom: 8}}>{title}</Text>}

      <FlatList
        data={movies}
        renderItem={({item}) => (
          <CardMoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HorizontalSlider;
