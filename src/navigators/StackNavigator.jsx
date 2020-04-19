import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '!/screens/Welcome/Welcome';
import Login from '!/screens/Login/Login';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
