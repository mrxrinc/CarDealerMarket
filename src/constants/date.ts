import moment from 'moment-jalaali';
import fa from 'moment/src/locale/fa';
moment.locale('fa', fa);
moment.loadPersian();
export const TODAY = moment(Date.now()).format('ddd D MMM YYYY');

export const MONTHS = [
  'FARVARDIN',
  'ORDIBEHESHT',
  'KHORDAD',
  'TIR',
  'MORDAD',
  'SHAHRIVAR',
  'MEHR',
  'ABAN',
  'AZAR',
  'DEY',
  'BAHMAN',
  'ESFAND',
];

export const MONTHS_PERSIAN = [
  'فروردین',
  'اردیبهشت',
  'خرداد',
  'تیر',
  'مرداد',
  'شهریور',
  'مهر',
  'آبان',
  'آذر',
  'دی',
  'بهمن',
  'اسفند',
];
