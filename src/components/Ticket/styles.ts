import {StyleSheet} from 'react-native';
import Colors from 'constants/colors';
import {DEVICE_WIDTH} from 'constants/layout';
import colors from 'constants/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.black1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  closeIcon: {
    fontSize: 35,
    color: colors.white1,
    position: 'absolute',
    top: 30,
    right: 5,
  },
  ticketContainer: {
    height: '85%',
    width: '82%',
    borderRadius: 10,
    backgroundColor: Colors.white1,
  },
  top: {
    height: '58%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  barcodeContainer: {
    borderWidth: 1,
    borderColor: colors.grey1,
    padding: 10,
  },
  trackingCode: {
    marginBottom: -12,
  },
  title: {
    fontSize: 24,
    color: colors.purple1,
  },
  desc: {
    fontSize: 17,
  },
  bottom: {
    height: '40%',
    alignItems: 'center',
  },
  bottomTitle: {
    marginTop: -10,
  },
  numbers: {
    color: colors.purple1,
    fontSize: 33,
  },
  price: {
    marginTop: -8,
  },
  toman: {
    position: 'absolute',
    bottom: 80,
    left: 90,
    fontSize: 12,
  },
  middleView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  middleBorder: {
    width: '85%',
    height: 1,
    backgroundColor: colors.grey4,
  },
  borderCircle: {
    height: 30,
    width: 30,
    borderRadius: 60,
    backgroundColor: Colors.black1,
  },
  borderCircleLeft: {
    marginLeft: -17,
  },
  borderCircleRight: {
    marginRight: -17,
  },
  dorhatoUrl: {
    position: 'absolute',
    bottom: 100,
    left: -25,
    color: colors.grey1,
    transform: [{rotate: '90deg'}],
  },
  dateContainer: {
    backgroundColor: colors.grey3,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 0,
    height: 45,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  saveButton: {
    backgroundColor: colors.white1,
    width: '85%',
  },
  saveButtonTitle: {
    color: colors.purple1,
    fontSize: 22,
  },
});
