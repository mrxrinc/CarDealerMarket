import {StyleSheet} from 'react-native';
import colors from 'constants/colors';

export default StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.grey14,
  },
  videoContainer: {
    position: 'relative',
    height: 250,
    width: '100%',
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'yellow',
  },
  closeIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
    fontSize: 35,
    color: colors.white1,
  },
});
