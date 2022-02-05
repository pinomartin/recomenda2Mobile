import React from 'react';
import {FlatList, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import {Cast} from '../interfaces/creditInterface';
import {MovieFull} from '../interfaces/movieInterface';
import CastItem from './CastItem';
import { getTheme } from '../utils/theme/colors';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="gold" size={16} />
          <Text style={{color: getTheme().white, fontWeight: '600'}}> {movieFull.vote_average}</Text>
          <Text style={{color: getTheme().white}}> {movieFull.genres.map(gen => gen.name).join(', ')}</Text>
        </View>
        <Text
          style={{
            fontSize: 15,
            marginTop: 10,
            fontWeight: 'bold',
            color: getTheme().primary70,
          }}>
          Sinopsis
        </Text>
        <Text style={{fontSize: 14, marginTop: 5, color: getTheme().white}}>{movieFull.overview}</Text>
        <Text style={{fontSize: 15, marginTop: 10, fontWeight: 'bold', color: getTheme().primary70}}>
          Presupuesto
        </Text>
        <Text style={{fontSize: 14, marginTop: 5, color: getTheme().white}}>
          {currencyFormatter.format(movieFull.budget, {code: 'ARS'})}
        </Text>
      </View>

      {/*Casting */}
      <View style={{marginTop: 10, marginBottom: 100}}>
        <Text
          style={{
            fontSize: 15,
            marginTop: 10,
            fontWeight: 'bold',
            marginHorizontal: 20,
            color: getTheme().primary70
          }}>
          Actores
        </Text>

        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 10, height: 70}}
        />
        {/* <CastItem actor={cast[0]} /> */}
      </View>
    </>
  );
};

export default MovieDetails;
