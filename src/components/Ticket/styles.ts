import {StyleSheet} from 'react-native';
import Colors from 'constants/colors';
import {DEVICE_WIDTH} from 'constants/layout';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.black1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ticketContainer: {
    height: '70%',
    width: '95%',
    borderRadius: 10,
    backgroundColor: Colors.white1,
  },
  top: {
    height: '50%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 23,
  },
  desc: {
    fontSize: 17,
  },
  bottom: {
    height: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  barcode: {
    width: DEVICE_WIDTH * 0.4,
    height: DEVICE_WIDTH * 0.4,
  },
  barcodeDetails: {
    marginLeft: 7,
    justifyContent: 'space-between',
    height: DEVICE_WIDTH * 0.4,
  },
  barcodeNumTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  barcodeNum: {
    fontSize: 45,
    fontWeight: 'bold',
    marginTop: -10,
    marginLeft: 1,
  },
  barcodeDesc: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  absoluteContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  borderCircle: {
    height: 17,
    width: 17,
    borderRadius: 34,
    backgroundColor: Colors.black1,
  },
  borderCircleLeft: {
    marginLeft: -11,
  },
  borderCircleRight: {
    marginRight: -11,
  },
  dash: {
    height: 0.7,
    width: 6,
    backgroundColor: Colors.grey2,
  },
});
