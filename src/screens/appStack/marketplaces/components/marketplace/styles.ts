import {StyleSheet} from 'react-native';
import Colors from 'constants/colors';

export default StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 90,
  },
  details: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: Colors.grey13,
  },
  image: {
    width: 73,
    height: 73,
    borderRadius: 100,
    marginLeft: 17,
    marginBottom: 5,
  },
  title: {
    fontSize: 17,
  },
  address: {
    fontSize: 9,
    color: Colors.grey2,
  },
  status: {
    fontSize: 8,
    color: Colors.blue1,
  },
  statusFull: {
    color: Colors.red1,
  },
});
