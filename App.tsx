import 'react-native-gesture-handler';
// import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
// import {Navigation} from './src/navigation/Navigation';
import {GradientProvider} from './src/context/GradientContext';
import Providers from './src/navigation';
// import FadeScreen from './src/screens/FadeScreen';

// const AppState = ({children}: any) => {
//   return <GradientProvider>{children}</GradientProvider>;
// };

const App = () => {
  return (
    // <NavigationContainer>
    //   <AppState>

    //     {/* <FadeScreen /> */}
    //   </AppState>
    // </NavigationContainer>
    <GradientProvider>
      <Providers />
    </GradientProvider>
  );
};

export default App;
