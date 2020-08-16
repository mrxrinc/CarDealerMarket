import {StyleSheet} from 'react-native';
import Colors from 'constants/colors';
import {BOTTOM_TAB_PADDING} from 'constants/layout';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingBottom: BOTTOM_TAB_PADDING,
  },
  centerContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  warningText: {
    color: Colors.yellow1,
    marginVertical: 20,
    fontSize: 15,
  },
  eventsContainer: {
    height: 105,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  description: {
    marginTop: 20,
    lineHeight: 25,
  },
  eventDays: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    borderBottomWidth: 0.5,
    borderColor: 'grey',
    marginTop: 5,
  },
  eventDaysTitle: {
    fontSize: 18,
  },
  checkbox: {
    marginTop: 11,
  },
  firstButton: {
    backgroundColor: Colors.purple1,
    marginTop: 30,
  },
  secondButton: {
    backgroundColor: Colors.purple1,
    marginTop: 20,
    marginBottom: 10,
  },
  hideEventDays: {
    height: 0,
    opacity: 0,
  },
});
