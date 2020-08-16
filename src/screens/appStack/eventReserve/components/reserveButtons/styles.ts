import {StyleSheet} from 'react-native';
import colors from 'constants/colors';

export default StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: 65,
    backgroundColor: colors.purple1,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: colors.purple1,
    fontSize: 24,
    position: 'absolute',
    top: -45,
    right: 16,
  },
  button: {
    flex: 1,
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  buttonTitle: {
    color: colors.white1,
    textAlign: 'center',
    fontSize: 13,
  },
  middleButton: {
    borderRightWidth: 0.5,
    borderRightColor: colors.white1,
    borderLeftWidth: 0.5,
    borderLeftColor: colors.white1,
  },
});
