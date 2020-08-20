import {StyleSheet} from 'react-native';
import Colors from 'constants/colors';

export default StyleSheet.create({
  mainContainer: {
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: Colors.white1,
    elevation: 10,
    overflow: 'hidden',
  },
  details: {
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 18,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 13,
    color: Colors.black2,
  },
  price: {
    fontSize: 17,
  },
  desc: {
    fontSize: 11,
    marginTop: 6,
    color: Colors.blue2,
  },
});
