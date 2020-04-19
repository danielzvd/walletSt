import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Keyboard,
} from 'react-native';
import logo from '!/assets/images/logo.png';
import Button from '!/components/Button/Button';
import styles from './style';

const Welcome = ({ navigation }) => {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();

  const onLoginPress = () => {
    Keyboard.dismiss();
  };

  return (
    <View style={styles.background}>
      <View
        style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.backContainer}>
        <View style={styles.frontContainer}>
          <View style={styles.loginContainer}>
            <View style={styles.inputContainer}>
              <Icon name="account" size={32} color="#899eff"></Icon>
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => setLogin(text)}
                value={login}
                underlineColorAndroid={'#899eff'}
                placeholder="Login"
                returnKeyType={'next'}
                onSubmitEditing={() => {
                  secondTextInput.focus();
                }}
                blurOnSubmit={false}
              />
            </View>

            <View style={styles.inputContainer}>
              <Icon name="lock" size={32} color="#899eff"></Icon>
              <TextInput
                ref={(input) => {
                  secondTextInput = input;
                }}
                style={styles.textInput}
                onChangeText={(text) => setPassword(text)}
                value={password}
                underlineColorAndroid={'#899eff'}
                placeholder="Password"
                secureTextEntry={true}
              />
            </View>
          </View>
          <Text style={styles.forgotPassword}>Forgot my password</Text>
          <Button
            title="Login"
            buttonStyle={styles.button}
            onPress={onLoginPress}
          />
          <Button title="Register" buttonStyle={styles.buttonNoBorder} />
        </View>
      </View>
    </View>
  );
};

export default Welcome;
