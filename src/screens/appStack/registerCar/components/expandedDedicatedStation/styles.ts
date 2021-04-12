import {StyleSheet} from 'react-native';
import colors from 'constants/colors';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    paddingHorizontal: 25,
    alignItems: 'flex-end',
    paddingVertical: 15,
    backgroundColor: colors.white1,
  },
  title: {
    fontSize: 20,
    marginBottom: 15,
  },
  imageContainer: {
    width: '100%',
    height: 190,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.grey1,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    color: colors.purple1,
    fontSize: 16,
    marginTop: 5,
    width: 110,
    flex: 0,
  },
  characteristics: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  characteristic: {
    fontSize: 14,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 14,
    backgroundColor: colors.grey1,
    marginLeft: 10,
  },
  button: {
    backgroundColor: colors.purple1,
    width: '100%',
    marginTop: 30,
    marginBottom: 25,
  },
});
