import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '!/hooks/use-theme';

import DrawerNavigator from '!/navigators/DrawerNavigator';

const App = () => {
  useEffect(() => {
    StatusBar.setBackgroundColor('#5372ff', true);
    StatusBar.setBarStyle('light-content', true);
  }, []);
  return (
    <ThemeProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
