import React from 'react';

import { View, Text } from 'react-native';

const Welcome = ({ navigation }) => {
  return (
    <View>
      <Text onPress={() => navigation.navigate('Login')}>Sejam bem-vindos</Text>
    </View>
  );
};

export default Welcome;
