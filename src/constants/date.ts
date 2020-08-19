import moment from 'moment-jalaali';

export const TODAY = moment(Date.now()).locale('fa').format('ddd D MMM YYYY');

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
