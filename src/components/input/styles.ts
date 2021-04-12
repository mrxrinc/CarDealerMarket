import {StyleSheet} from 'react-native';
import Colors from 'constants/colors';

const commonInputStyle = {
  width: '100%',
  borderRadius: 4,
  borderWidth: 0.5,
  borderColor: Colors.grey5,
  marginTop: 6,
};

const INPUT_HEIGHT = 56;
const commonTextInputStyle = {
  fontSize: 16,
  color: Colors.blue2,
};

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 7,
  },
  input: {
    ...commonInputStyle,
    ...commonTextInputStyle,
    height: INPUT_HEIGHT,
    fontFamily: 'iyRegular',
    textAlign: 'center',
  },
  multiline: {
    ...commonInputStyle,
    textAlign: 'right',
    fontSize: 13,
    minHeight: 150,
    textAlignVertical: 'top',
    paddingHorizontal: 13,
    fontFamily: 'iyRegular',
  },
  title: {
    color: Colors.grey1,
    fontSize: 11.5,
  },
  dropdownContainer: {
    ...commonInputStyle,
    height: INPUT_HEIGHT,
    justifyContent: 'center',
  },
  miniDropdownContainer: {
    height: 35,
    width: 95,
    overflow: 'hidden',
  },
  miniDropdown: {
    marginRight: -15,
  },
});
