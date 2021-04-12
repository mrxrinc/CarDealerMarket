import {StyleSheet} from 'react-native';
import colors from './node_modules/constants/colors';

export default StyleSheet.create({
  mainContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  price: {
    color: colors.purple1,
    fontSize: 16,
    marginTop: 15,
  },
  description: {
    color: colors.purple1,
    fontSize: 12,
    marginTop: 20,
  },
  button: {
    backgroundColor: colors.purple1,
    width: '100%',
    marginTop: 30,
    marginBottom: 25,
  },
});
