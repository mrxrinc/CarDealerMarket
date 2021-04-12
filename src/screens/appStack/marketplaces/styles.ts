import {StyleSheet} from 'react-native';
import Colors from 'constants/colors';

export default StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
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
