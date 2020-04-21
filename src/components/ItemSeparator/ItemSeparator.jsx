import React from 'react';
import { View, StyleSheet } from 'react-native';

const ItemSeparator = () => {
  return <View style={styles.itemSeparator} />;
};

const styles = StyleSheet.create({
  itemSeparator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#595959',
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default ItemSeparator;
