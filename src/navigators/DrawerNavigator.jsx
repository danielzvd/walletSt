import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from '!/screens/Drawer/Drawer';
import StackNavigator from './StackNavigator';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen component={StackNavigator} name="Root" />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
