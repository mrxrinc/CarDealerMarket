import React, {useMemo, useCallback} from 'react';
import {View, ScrollView} from 'react-native';
import CalendarHeader from './components/Header';
import Day from './components/Day';
import {generateCalendarData} from 'utils/date';
import {MonthInCalendar, OnDatePress, CalendarDate} from 'constants/types';
import styles from './styles';

interface CalendarProps {
  dates: CalendarDate;
  disabledDays: string[];
  onDatePress: OnDatePress;
}
export default ({dates, disabledDays, onDatePress}: CalendarProps) => {
  const {months, year} = useMemo(
    () => generateCalendarData(dates.start_date, dates.end_date),
    [dates],
  );
  const renderMonths = useCallback(
    ({month, days}: MonthInCalendar) => (
      <View key={month}>
        <CalendarHeader month={month} year={year} />
        <View style={styles.daysContainer}>
          {days.map((day, i) => (
            <Day
              key={i}
              day={day}
              month={month}
              isDisabled={disabledDays.includes(`${month}-${day}`)}
              onDatePress={onDatePress}
            />
          ))}
        </View>
      </View>
    ),
    [months],
  );
  return (
    <ScrollView style={styles.mainContainer} nestedScrollEnabled>
      {months.map(renderMonths)}
    </ScrollView>
  );
};
