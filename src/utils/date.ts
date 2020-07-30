import moment, {Moment} from 'jalali-moment';

export const shamsiToMiladi = (date: string) => moment(date, 'jYYYY/jM/jD');

export const formatEventDate = (date: string) =>
  moment(shamsiToMiladi(date))
    .locale('fa')
    .format('ddd D MMMM YY');

export const getEventDays = (
  start_date: string,
  end_date: string,
): Array<string> => {
  const _formatDay = (date: Moment) =>
    moment(date)
      .locale('fa')
      .format('ddd D MMMM YY');

  const days: Array<string> = [];
  const end = shamsiToMiladi(end_date);
  let day = shamsiToMiladi(start_date);
  while (day.diff(end) <= 0) {
    days.push(_formatDay(day));
    day.add(1, 'd');
  }
  return days;
};
