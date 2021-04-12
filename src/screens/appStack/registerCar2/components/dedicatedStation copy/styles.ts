import {StyleSheet} from 'react-native';
import Colors from './node_modules/constants/colors';
import {DEVICE_WIDTH} from './node_modules/constants/layout';

export default StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    paddingRight: 40,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 5,
    width: '100%',
  },
  title: {
    fontSize: 22,
  },
  image: {
    flex: 1,
    borderRadius: 140,
  },
  description: {
    fontSize: 9,
    color: Colors.grey2,
  },

  // expandedStation: {
  //   width: '90%',
  //   alignSelf: 'center',
  // },
  // expandedStationImage: {
  //   width: '100%',
  //   height: 300,
  //   resizeMode: 'contain',
  // },
  // expandedStationPrice: {
  //   color: Colors.purple1,
  //   fontSize: 16,
  //   marginTop: 15,
  // },
  // expandedStationDescription: {
  //   color: Colors.purple1,
  //   fontSize: 12,
  //   marginTop: 20,
  // },
  // expandedStationButton: {
  //   backgroundColor: Colors.purple1,
  //   width: '100%',
  //   marginTop: 30,
  //   marginBottom: 25,
  // },
});
