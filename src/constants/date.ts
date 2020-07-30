import moment from 'jalali-moment';

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
