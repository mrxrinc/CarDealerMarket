import moment, {Moment} from 'moment-jalaali';
import {CalendarData} from 'constants/types';

export const shamsiToMiladi = (date: string) => moment(date, 'jYYYY/jM/jD');

export const formatEventDate = (date: string) =>
  moment(shamsiToMiladi(date)).locale('fa').format('ddd D MMMM YY');

export const getEventDays = (
  start_date: string,
  end_date: string,
): Array<string> => {
  const _formatDay = (date: Moment) =>
    moment(date).locale('fa').format('ddd D MMMM YY');

  const days: Array<string> = [];
  const end = shamsiToMiladi(end_date);
  let day = shamsiToMiladi(start_date);
  while (day.diff(end) <= 0) {
    days.push(_formatDay(day));
    day.add(1, 'd');
  }
  return days;
};

export const generateCalendarData = (
  startTime: string,
  endTime: string,
): CalendarData => {
  const months: Array<{month: number; days: number[]}> = [];
  const [year, startMonth, startDay] = startTime
    .split('-')
    .map((item) => Number(item));
  // ignore the year since our range is not going to exceed a year.
  const [_, endMonth, endDay] = endTime.split('-').map((item) => Number(item));

  // find the months
  for (let i = startMonth; i <= endMonth; i++) {
    // transform it to Miladi, since Shamsi doesn't work correctly
    const monthDate = shamsiToMiladi(`${year}-${i < 10 ? '0' + i : i}-01`);
    const numberOfDaysInMonth = moment(monthDate).daysInMonth();
    let days: number[] = [];
    // check to see in which weekday the month starts
    const startWeekDay = moment(
      i === startMonth ? startTime : monthDate,
    ).weekday();
    // if it's not equal to 6(Saturday) we should fill the days with undefineds
    // so calendar will show empty placeholders for those days
    if (startWeekDay !== 6) {
      days = Array.from({length: startWeekDay + 1});
    }

    const lastDayOfMonth = i === endMonth ? endDay : numberOfDaysInMonth;
    const firstDayOfMonth = i === startMonth ? startDay : 1;
    for (let j = firstDayOfMonth; j <= lastDayOfMonth; j++) {
      days.push(j);
    }
    months.push({month: i, days});
  }

  return {months, year};
};
