import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {getTheme} from '../../utils/theme/colors';
// import typography from '../../utils/theme/typography';

interface SquareColorProps {
    background: string;
    color: string;
}
const ThemeViewScreen = () => {
  const SquareColor = ({background, color}:SquareColorProps) => {
    return (
      <>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: background,
            borderRadius: 10,
            marginVertical: 12,
          }}></View>
        <Text>{color}</Text>
      </>
    );
  };
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 16,
          marginVertical: 32
        }}>
        <SquareColor background={getTheme().primary} color="primary" />
        <SquareColor background={getTheme().primary10} color="primary10" />
        <SquareColor background={getTheme().primary30} color="primary30" />
        <SquareColor background={getTheme().primary40} color="primary40" />
        <SquareColor background={getTheme().primary50} color="primary50" />
        <SquareColor background={getTheme().primary70} color="primary70" />
        <SquareColor background={getTheme().primary90} color="primary90" />
        <SquareColor background={getTheme().secondary} color="secondary" />
        <SquareColor background={getTheme().secondary10} color="secondary10" />
        <SquareColor background={getTheme().secondary30} color="secondary30" />
        {/* <SquareColor background={getTheme().secondary50} color="secondary50" /> */}
        {/* <SquareColor background={getTheme().secondary70} color="secondary70" /> */}
        {/* <SquareColor background={getTheme().secondary90} color="secondary90" /> */}
        <SquareColor background={getTheme().additional} color="additional" />
        <SquareColor background={getTheme().additional10} color="additional10" />
        <SquareColor background={getTheme().additional20} color="additional20" />
        <SquareColor background={getTheme().additional40} color="additional40" />
        <SquareColor background={getTheme().approved} color="approved" />
        <SquareColor background={getTheme().approved40} color="approved40" />
        <SquareColor background={getTheme().error} color="error" />
        <SquareColor background={getTheme().error40} color="error40" />
        <SquareColor background={getTheme().warning} color="warning" />
        <SquareColor background={getTheme().warning40} color="warning40" />
        <SquareColor background={getTheme().information} color="information" />
        <SquareColor
          background={getTheme().information40}
          color="information40"
        />
        <SquareColor background={getTheme().neutral40} color="neutral40" />

        {/* <Text  style={{...typography().subtile}}>Text Colors</Text>



            <Text  style={{...typography().emphasisRegular, color: getTheme().text, marginVertical: 16}}>text</Text>
            <Text  style={{...typography().emphasisRegular, color: getTheme().text30, marginVertical: 16}}>text30</Text>
            <Text  style={{...typography().emphasisRegular, color: getTheme().text40, marginVertical: 16}}>text40</Text>
            <Text  style={{...typography().emphasisRegular, color: getTheme().text50, marginVertical: 16}}>text50</Text>
            <Text  style={{...typography().emphasisRegular, color: getTheme().text70, marginVertical: 16}}>text70</Text>
            <Text  style={{...typography().emphasisRegular, color: getTheme().text, marginVertical: 16}}>(Elevation , Overlay & White sin mods)</Text> */}
      </View>
    </ScrollView>
  );
};

export default ThemeViewScreen;
