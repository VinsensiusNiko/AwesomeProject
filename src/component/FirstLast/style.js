import {Stylesheet, StyleSheet} from 'react-native';

const Style = StyleSheet.create({
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
});

export default Style;
