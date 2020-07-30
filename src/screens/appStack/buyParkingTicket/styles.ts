import {StyleSheet} from 'react-native';
import Colors from 'constants/colors';

export default StyleSheet.create({
  centerContainer: {
    width: '90%',
    alignSelf: 'center',
    paddingTop: 10,
  },
  horizontalInputsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  smallInput: {
    flex: 0.485,
  },
  priceText: {
    fontSize: 13,
    marginTop: 20,
  },
  input: {
    marginTop: 12,
  },
  submitButton: {
    backgroundColor: Colors.purple1,
    marginTop: 30,
  },
});
