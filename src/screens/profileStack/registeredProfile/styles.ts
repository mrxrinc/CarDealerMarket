import {StyleSheet} from 'react-native';
import colors from 'constants/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white1,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.headerBackground,
    paddingTop: 40,
    paddingBottom: 10,
  },
  editButton: {
    position: 'absolute',
    left: 18,
    top: 37,
    alignItems: 'center',
    flexDirection: 'row',
  },
  editTitle: {
    marginLeft: 10,
  },
  profileText: {
    fontSize: 23,
    color: colors.purple1,
  },
  profielIcon: {
    marginVertical: 7,
  },
});
