import {StyleSheet} from 'react-native';
import Colors from 'constants/colors';

export default StyleSheet.create({
  mainContainer: {
    marginTop: 20,
  },
  disabledButton: {
    height: 50,
    width: '100%',
    borderRadius: 10,
    backgroundColor: Colors.grey13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledButtonTitle: {
    color: Colors.white1,
    fontSize: 15,
  },
  parking: {
    backgroundColor: Colors.grey15,
    width: '90%',
    paddingVertical: 10,
    alignSelf: 'center',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  parkingImage: {
    height: 55,
    width: 55,
    borderRadius: 110,
    marginLeft: 15,
  },
  parkingDescription: {
    fontSize: 9,
  },
});
