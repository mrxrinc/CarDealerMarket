import React, {useState, useEffect, useMemo} from 'react';
import {View, StyleSheet} from 'react-native';
import IranYekan from 'components/common/IranYekan';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import colors from 'constants/colors';
import {DEVICE_WIDTH} from 'constants/layout';
import {MONTHS_PERSIAN} from 'constants/date';
import moment from 'moment-jalaali';
import {shamsiToMiladi} from 'utils/date';

interface Month {
  month: number;
  days: number[];
}
interface GenerateCalendarData {
  months: Array<Month>;
  year: number;
}
const generateCalendarData = (
  startTime: string,
  endTime: string,
): GenerateCalendarData => {
  const months: Array<{month: number; days: number[]}> = [];
  const startTimeSplited = startTime.split('-').map((item) => Number(item));
  const endTimeSplited = endTime.split('-').map((item) => Number(item));
  const numberOfMonthDays: {
    [key: number]: number;
  } = {};
  const startMonth = startTimeSplited[1];
  const startDay = startTimeSplited[2];
  const endMonth = endTimeSplited[1];
  const endDay = endTimeSplited[2];
  const year = startTimeSplited[0];
  // find the months
  for (let i = startMonth; i <= endMonth; i++) {
    const monthDate = shamsiToMiladi(`${year}-${i < 10 ? '0' + i : i}-01`);
    const startWeekDay = moment(
      i === startMonth ? startTime : monthDate,
    ).weekday();
    numberOfMonthDays[i] = moment(monthDate).daysInMonth();
    let days: number[] = [];
    if (startWeekDay !== 6) {
      days = Array.from({length: startWeekDay + 1});
    }
    months.push({month: i, days});
  }
  let currentDay = startDay;
  let currentMonth = startMonth;
  while (currentDay !== endDay + 1 || currentMonth !== endMonth) {
    months[currentMonth - startMonth].days.push(currentDay);
    if (currentDay === numberOfMonthDays[currentMonth]) {
      currentDay = 1;
      currentMonth++;
    } else {
      currentDay++;
    }
  }
  return {months, year};
};

type Props = {
  checked: boolean;
  containerStyle?: object;
  titleStyle?: object;
  title: string;
  onPress: () => void;
};

const start_date = '1399-06-20';
const end_date = '1399-08-23';

const mainStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const disabledDays = ['7-5', '7-1'];
const selectedDates: string[] = [];
export default ({}: Props) => {
  const [dates, setDates] = useState({start_date, end_date});
  const [dateFormatted, setDateFormatted] = useState<GenerateCalendarData>({
    months: [{month: 4, days: []}],
    year: 0,
  });
  useEffect(() => {
    setDateFormatted(generateCalendarData(dates.start_date, dates.end_date));
  }, []);

  const onDayPress = (date: string, isSelected: boolean) => {
    if (isSelected) {
      selectedDates.push(date);
    } else {
      selectedDates.splice(selectedDates.indexOf(date), 1);
    }
  };
  const onSubmit = () => {
    console.log('selectedDates', selectedDates);
  };

  return (
    <View style={mainStyle.mainContainer}>
      <Calendar
        disabledDays={disabledDays}
        onDayPress={onDayPress}
        {...dateFormatted}
      />
      <TouchableOpacity onPress={onSubmit}>
        <IranYekan>submit</IranYekan>
      </TouchableOpacity>
    </View>
  );
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

interface CalendarProps {
  months: Array<Month>;
  year: number;
  disabledDays: string[];
  onDayPress: (date: string, isSelected: boolean) => void;
}
const Calendar = ({months, year, disabledDays, onDayPress}: CalendarProps) => (
  <ScrollView style={calendarStyle.mainContainer}>
    {months.map(({month, days}) => (
      <View key={month} style={calendarStyle.monthContainer}>
        <CalendarHeader month={month} year={year} />
        <View style={calendarStyle.daysContainer}>
          {days.map((day, i) => (
            <Day
              key={i}
              day={day}
              month={month}
              isDisabled={disabledDays.includes(`${month}-${day}`)}
              onDayPress={onDayPress}
            />
          ))}
        </View>
      </View>
    ))}
  </ScrollView>
);

const dayStyle = StyleSheet.create({
  mainContainer: {
    height: (DEVICE_WIDTH * 0.9) / 7.04,
    width: (DEVICE_WIDTH * 0.9) / 7.04,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    width: '75%',
    height: '75%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainerSelected: {
    borderRadius: 100,
    backgroundColor: colors.yellow1,
  },
  titleContainerDisabled: {
    borderRadius: 100,
    backgroundColor: colors.grey1,
  },
  title: {
    color: colors.purple1,
  },
  titleSelected: {
    color: colors.white1,
  },
  titleDisabled: {
    color: colors.grey10,
  },
});

interface DayProps {
  day?: number;
  month: number;
  isDisabled: boolean;
  onDayPress: (date: string, isSelected: boolean) => void;
}

const Day = React.memo(({day, month, isDisabled, onDayPress}: DayProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const handlePress = () => {
    if (isDisabled || !day) return;
    setIsSelected(!isSelected);
    onDayPress(`${month}-${day}`, !isSelected);
  };
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handlePress}
      style={dayStyle.mainContainer}>
      <View
        style={[
          dayStyle.titleContainer,
          isSelected && dayStyle.titleContainerSelected,
          isDisabled && dayStyle.titleContainerDisabled,
        ]}>
        <IranYekan
          style={[
            dayStyle.title,
            isDisabled && dayStyle.titleDisabled,
            isSelected && dayStyle.titleSelected,
          ]}>
          {day}
        </IranYekan>
      </View>
    </TouchableOpacity>
  );
});

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
  headerTitle: {},
  dayTitle: {},
});

interface CalendarHeaderProps {
  month: number;
  year: number;
}

const CalendarHeader = ({month, year}: CalendarHeaderProps) => (
  <View style={calendarHeaderStyle.mainContainer}>
    <View style={calendarHeaderStyle.headerContainer}>
      <IranYekan style={calendarHeaderStyle.headerTitle}>
        {MONTHS_PERSIAN[month - 1]} {year}
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
