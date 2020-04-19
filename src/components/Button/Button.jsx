import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import styles from './style';

const Button = ({ title, buttonStyle, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
