import React, {useState, useEffect, useMemo} from 'react';
import {View, StyleSheet} from 'react-native';
import IranYekan from 'components/common/IranYekan';
// import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from 'constants/colors';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import colors from 'constants/colors';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from 'constants/layout';
import {MONTHS_PERSIAN} from 'constants/date';
import styles from './styles';

type Props = {
  checked: boolean;
  containerStyle?: object;
  titleStyle?: object;
  title: string;
  onPress: () => void;
};

const start_date = '1399-06-14';
const end_date = '1399-07-13';

const mainStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ({}: Props) => (
  <View style={mainStyle.mainContainer}>
    <Calendar
      startTime={start_date}
      endTime={end_date}
      selectedDays={[]}
      disabledDays={[]}
    />
  </View>
);

const generateCalendarData = (startTime: string, endTime: string) => {
  const result = [];
  const startTimeSplited = startTime.split('-').map((item) => parseInt(item));
  const endTimeSplited = endTime.split('-').map((item) => parseInt(item));

  const startMonth = startTimeSplited[1];
  const startDay = startTimeSplited[2];
  const endMonth = endTimeSplited[1];
  const endDay = endTimeSplited[2];

  // find the months
  for (let i = startMonth; i <= endMonth; i++) {
    result.push({month: i, days: []});
  }

  let currentDay = startDay;
  let currentMonth = startMonth;
  while (currentDay !== endDay + 1 || currentMonth !== endMonth) {
    result[currentMonth - startMonth].days.push(currentDay);
    if (currentDay === 31) {
      currentDay = 1;
      currentMonth++;
    } else {
      currentDay++;
    }
  }
  return {months: result, year: startTimeSplited[0]};
};

const calendarStyle = StyleSheet.create({
  mainContainer: {
    maxHeight: 350,
    width: DEVICE_WIDTH * 0.9,
    borderWidth: 1,
    borderColor: colors.black1,
    borderRadius: 10,
  },
  monthContainer: {},
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

const Calendar = ({startTime, endTime, selectedDays, disabledDays}) => {
  const {months, year} = useMemo(
    () => generateCalendarData(startTime, endTime),
    [startTime, endTime],
  );
  console.log('months', months);
  return (
    <ScrollView style={calendarStyle.mainContainer}>
      {months.map(({month, days}) => (
        <View key={month} style={calendarStyle.monthContainer}>
          <CalendarHeader month={month} year={year} />
          <View style={calendarStyle.daysContainer}>
            {days.map((day) => (
              <Day key={day} day={day} />
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const dayStyle = StyleSheet.create({
  mainContainer: {
    height: (DEVICE_WIDTH * 0.9) / 7.04,
    width: (DEVICE_WIDTH * 0.9) / 7.04,
    // backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Day = ({day, isDisabled, isSelected, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        dayStyle.mainContainer,
        isSelected && dayStyle.selected,
        isDisabled && dayStyle.disabled,
      ]}>
      <IranYekan
        style={[
          dayStyle.title,
          isDisabled && dayStyle.titleDisabled,
          isSelected && dayStyle.titleSelected,
        ]}>
        {day}
      </IranYekan>
    </TouchableOpacity>
  );
};

const calendarHeaderStyle = StyleSheet.create({
  mainContainer: {
    height: 70,
    width: '100%',
  },
  headerContainer: {
    flex: 1,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: colors.grey1,
    borderBottomWidth: 1,
    alignSelf: 'center',
  },
  daysContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: colors.grey1,
    borderBottomWidth: 1,
  },
});

const CalendarHeader = ({month, year}) => (
  <View style={calendarHeaderStyle.mainContainer}>
    <View style={calendarHeaderStyle.headerContainer}>
      <IranYekan style={calendarHeaderStyle.headerTitle}>
        {MONTHS_PERSIAN[month]} {year}
      </IranYekan>
    </View>
    <View style={calendarHeaderStyle.daysContainer}>
      <IranYekan style={calendarHeaderStyle.dayTitle}>ش</IranYekan>
      <IranYekan style={calendarHeaderStyle.dayTitle}>ی</IranYekan>
      <IranYekan style={calendarHeaderStyle.dayTitle}>د</IranYekan>
      <IranYekan style={calendarHeaderStyle.dayTitle}>س</IranYekan>
      <IranYekan style={calendarHeaderStyle.dayTitle}>چ</IranYekan>
      <IranYekan style={calendarHeaderStyle.dayTitle}>پ</IranYekan>
      <IranYekan style={calendarHeaderStyle.dayTitle}>ج</IranYekan>
    </View>
  </View>
);

const calculateStyle = StyleSheet.create({});

const Calculate = ({}) => (
  <View style={calculateStyle.pricing}>
    <View style={calculateStyle.pricingHeader}>
      <IranYekan style={calculateStyle.pricingText}>
        مبلغ قابل پرداخت:{' '}
      </IranYekan>
    </View>
    <View style={calculateStyle.pricingContent}>
      <IranYekan style={calculateStyle.pricingText}>2500</IranYekan>
      <IranYekan style={calculateStyle.pricingText}>X</IranYekan>
      <IranYekan style={calculateStyle.pricingText}>2500</IranYekan>
      <IranYekan style={calculateStyle.pricingText}>2500</IranYekan>
    </View>
  </View>
);
