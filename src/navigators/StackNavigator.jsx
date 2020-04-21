import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '!/screens/Welcome/Welcome';
import logoHorizontal from '!/assets/images/logo-horizontal.png';
const Stack = createStackNavigator();
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Register from '!/screens/Register/Register';
import Home from '!/screens/Home/Home';

const StackNavigator = ({ navigation }) => {
  const screenOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: '#5372ff',
    },
    headerRightContainerStyle: {
      zIndex: 99,
    },
    headerLeftContainerStyle: {
      zIndex: 99,
    },
    headerTitle: () => (
      <Image
        source={logoHorizontal}
        style={{
          width: 270,
          height: 40,
          position: 'absolute',
          left: -30,
          top: -20,
        }}
      />
    ),
    headerLeft: () => (
      <TouchableOpacity onPress={() => false}>
        <Icon name="menu" size={32} color="#FFFFFF" style={{ padding: 15 }} />
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity onPress={() => false}>
        <Icon name="bell" size={28} color="#FFFFFF" style={{ padding: 15 }} />
      </TouchableOpacity>
    ),
  });

  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#5372ff',
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Home" component={Home} options={screenOptions} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
