import {StyleSheet} from 'react-native';
import Colors from 'constants/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  centerContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  chooseMarketplaceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  chooseMarketplaceTitle: {
    color: Colors.yellow1,
  },
  dropdownContainer: {
    flex: 0.5,
    top: -5,
  },
  dropdown: {
    height: 30,
  },
});
