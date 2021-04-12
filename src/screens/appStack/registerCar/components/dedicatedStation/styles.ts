import {StyleSheet} from 'react-native';
import colors from 'constants/colors';

export default StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    paddingRight: 25,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 5,
    width: '100%',
  },
  title: {
    fontSize: 18,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 160,
    marginLeft: 20,
  },
  description: {
    fontSize: 9,
    color: colors.grey2,
  },
});
