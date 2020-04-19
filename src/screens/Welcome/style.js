import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#5372ff',
  },

  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    position: 'absolute',
    top: 65,
  },

  backContainer: {
    backgroundColor: 'rgba(230,230,230, 0.7)',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },

  frontContainer: {
    backgroundColor: '#FFF',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    marginTop: 25,
    paddingBottom: 20,
  },

  loginContainer: {
    marginTop: 40,
  },

  inputContainer: {
    marginHorizontal: 25,
    marginBottom: 20,
    flexDirection: 'row',
  },

  textInput: {
    flex: 1,
    justifyContent: 'center',
    height: 45,
    marginLeft: 10,
    marginRight: 10,
    color: '#525252',
    fontSize: 16,
  },

  forgotPassword: {
    marginLeft: 35,
    marginBottom: 25,
    color: '#c99e00',
    fontSize: 15,
  },

  buttonNoBorder: {
    borderWidth: 0,
    marginTop: 10,
  },

  button: {
    marginTop: 20,
  },
});

export default styles;
