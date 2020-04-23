import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '!/hooks/use-theme';
import StackNavigator from '!/navigators/StackNavigator';

const App = () => {
  useEffect(() => {
    StatusBar.setBackgroundColor('#5372ff', true);
    StatusBar.setBarStyle('light-content', true);
  }, []);
  return (
    <ThemeProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
