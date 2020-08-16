import {StyleSheet} from 'react-native';
import Colors from 'constants/colors';
import {BOTTOM_TAB_PADDING} from 'constants/layout';

export default StyleSheet.create({
  mainContainer: {
    paddingBottom: BOTTOM_TAB_PADDING,
  },
  centerContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  warningText: {
    color: Colors.yellow1,
    marginVertical: 20,
  },
  event: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  eventDate: {
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.purple1,
    paddingHorizontal: 3,
    minWidth: 90,
  },
  eventDateText: {
    color: Colors.white1,
    fontSize: 10,
  },
  eventDetails: {
    paddingHorizontal: 10,
    flex: 1,
  },
  eventTitle: {
    fontSize: 12,
  },
  eventDescription: {
    fontSize: 9,
    color: Colors.grey1,
  },
  dashedBorderContainer: {
    height: 40,
    paddingRight: 50,
    alignItems: 'flex-end',
  },
  dashedBorder: {
    width: 1,
    height: 9,
    backgroundColor: Colors.purple1,
    marginBottom: 8,
  },
});
