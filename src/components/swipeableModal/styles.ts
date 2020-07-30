import {StyleSheet} from 'react-native';
import Colors from 'constants/colors';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from 'constants/layout';

export default StyleSheet.create({
  modalStyle: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.94,
    marginTop: DEVICE_HEIGHT * 0.09,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: 'visible',
  },
  backScreen: {
    position: 'absolute',
    top: -22,
    alignSelf: 'center',
    height: 22,
    width: DEVICE_WIDTH * 0.95,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: Colors.grey16,
  },
});
