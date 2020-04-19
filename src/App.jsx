import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigator from '!/navigators/StackNavigator';

const App = () => {
  useEffect(() => {
    StatusBar.setBackgroundColor('#5372ff', true);
    StatusBar.setBarStyle('light-content', true);
  }, []);
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
