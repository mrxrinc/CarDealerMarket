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
    marginTop: 30,
  },
  input: {
    marginTop: 12,
  },
  submitButton: {
    backgroundColor: Colors.purple1,
    marginTop: 35,
    marginBottom: 10,
  },
  formButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 50,
  },
  formButton: {
    height: 47,
    width: '48.5%',
    borderRadius: 10,
    backgroundColor: Colors.grey14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formButtonTitle: {
    color: Colors.white1,
    fontSize: 14,
  },
});
