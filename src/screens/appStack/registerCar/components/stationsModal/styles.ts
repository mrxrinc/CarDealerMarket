import {StyleSheet} from 'react-native';
import Colors from 'constants/colors';
import {DEVICE_WIDTH} from 'constants/layout';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    letterSpacing: 2,
    marginTop: 18,
    marginBottom: 25,
    color: Colors.purple1,
    textAlign: 'center',
  },
  arrowContaienr: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  station: {
    flexDirection: 'row',
    paddingRight: 40,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 5,
    width: '100%',
  },
  border: {
    width: '60%',
    height: 0.5,
    backgroundColor: Colors.grey13,
    position: 'absolute',
    right: 40,
    bottom: 0,
  },
  stationImageContainer: {
    elevation: 50,
    width: 70,
    height: 70,
    borderRadius: 140,
    marginLeft: 15,
    overflow: 'hidden',
    backgroundColor: Colors.white1,
  },
  stationImage: {
    flex: 1,
    borderRadius: 140,
  },
  stationTitle: {
    fontSize: 16,
  },
  stationDescription: {
    fontSize: 9,
    color: Colors.grey2,
  },
  expandedStation: {
    width: '90%',
    alignSelf: 'center',
  },
  expandedStationImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  expandedStationPrice: {
    color: Colors.purple1,
    fontSize: 16,
    marginTop: 15,
  },
  expandedStationDescription: {
    color: Colors.purple1,
    fontSize: 12,
    marginTop: 20,
  },
  expandedStationButton: {
    backgroundColor: Colors.purple1,
    width: '100%',
    marginTop: 30,
    marginBottom: 25,
  },
});
