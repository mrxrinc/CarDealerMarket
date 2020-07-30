import {StyleSheet} from 'react-native';
import Colors from 'constants/colors';

export default StyleSheet.create({
  mainContainer: {
    width: '100%',
    overflow: 'hidden',
    borderRadius: 10,
    marginVertical: 20,
  },
  detailsContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    flexDirection: 'row',
  },
  dateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.grey17,
  },
  titleContainer: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: Colors.grey17,
    alignItems: 'center',
  },
  title: {
    color: Colors.white1,
    fontSize: 19,
    textShadowColor: Colors.black1,
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  day: {
    fontSize: 48,
    color: Colors.white1,
    fontWeight: '100',
  },
  month: {
    color: Colors.white1,
    fontSize: 18,
    marginBottom: -5,
    marginTop: 20,
    opacity: 0.8,
  },
  dotsContainer: {
    position: 'absolute',
    bottom: 12,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 35,
    flexDirection: 'row',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 12,
    backgroundColor: Colors.grey1,
  },
  activeDot: {
    width: 7,
    height: 7,
    borderRadius: 14,
    backgroundColor: Colors.white1,
  },
});
