import {Stylesheet, StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginLeft: '40%',
  },
  font: {
    fontSize: 16,
  },
  h1: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 25,
  },
  form: {
    borderWidth: 1,
    paddingHorizontal: 15,
    marginHorizontal: 12,
    paddingBottom: 20,
  },
  label: {
    paddingLeft: 10,
    marginBottom: 10,
    marginTop: 20,
  },
  field: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    marginTop: 15,
    borderRadius: 10,
  },
  buttonFont: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '700',
  },
});

export default Style;
