import {StyleSheet} from 'react-native';
import Colors from 'constants/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    color: Colors.grey3,
    fontSize: 14,
    marginRight: 17,
    marginBottom: 1,
  },
  check: {
    position: 'absolute',
    right: -2,
    bottom: 5,
  },
});
