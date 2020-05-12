import * as dateFns from 'date-fns';
import fr from 'date-fns/locale/fr';
import en from 'date-fns/locale/en-US';
import I18n from 'react-native-i18n';
import DeviceInfo from 'react-native-device-info';
import { toUpperFirst } from './string';

const getDateLocale = () => (I18n.locale === 'fr' ? fr : en);

const is24HourFormat = DeviceInfo.is24Hour;

const timeFormat = () => (is24HourFormat() ? 'HH:mm' : 'h:mm a');

const dateFormat = {
  time: timeFormat(),
  yesterday: 'Yesterday',
  weekday: `EEEE ${timeFormat()}`,
  monthDay: `MMM, dd ${timeFormat()}`,
  date: 'yyyy-MM-dd'
};

const toFormatMessage = (d) => {
  let value = null;
  const oneDay = 1000 * 60 * 60 * 24;
  const today = new Date().valueOf();
  const date = d * 1000;
  const locale = getDateLocale();

  if (dateFns.isToday(date)) {
    value = dateFns.format(date, dateFormat.time, { locale });
  } else if (dateFns.isYesterday(date)) {
    value = `${dateFormat.yesterday} ${dateFns.format(date, dateFormat.time, { locale })}`;
  } else if (dateFns.isWithinInterval(date, { start: today - oneDay * 7, end: today - oneDay })) {
    value = dateFns.format(date, dateFormat.weekday, { locale });
  } else {
    value = dateFns.format(date, dateFormat.monthDay, { locale });
  }

  return toUpperFirst(value);
};

const dateFormatFuture = {
  today: 'Today',
  tomorrow: 'Tomorrow',
  weekday: 'EEEE',
  otherDay: 'MMM dd'
};

const toFormat = (d, format = dateFormat.date) => `${dateFns.format(d, format, { locale: getDateLocale() })}`;

const toFormatMessageFuture = (d) => {
  let value = null;
  const now = new Date();
  const offset = now.getTimezoneOffset();
  const date = new Date(d + (offset > 0 ? (offset * 1000 * 60) : 0));
  const oneDay = 1000 * 60 * 60 * 24;
  const today = new Date().valueOf();

  if (dateFns.isToday(date)) {
    value = `${dateFormatFuture.today} ${dateFns.format(date, dateFormatFuture.otherDay)}`;
  } else if (dateFns.isTomorrow(date)) {
    value = `${dateFormatFuture.tomorrow} ${dateFns.format(date, dateFormatFuture.otherDay)}`;
  } else if (dateFns.isWithinInterval(date, { start: today + oneDay, end: today + oneDay * 7 })) {
    value = dateFns.format(date, dateFormatFuture.weekday);
  } else {
    value = dateFns.format(date, dateFormatFuture.otherDay);
  }

  return toUpperFirst(value);
};

const getTime = (d) => dateFns.getTime(d);


const timezoneOffsetOfEvent = ({ date, time, utcOffset }) => {
  const now = new Date();
  const offset = now.getTimezoneOffset();

  const convertToDate = toFormat(new Date(Number(date)));
  const utc = new Date(`${convertToDate}T${time}.000Z`);
  const oneDay = 60 * 24;
  const add = 2 * offset + (offset > 0 ? oneDay : 0);
  const diff = -(offset + utcOffset) + add;
  const diffTime = diff * 60 * 1000;
  const timezoneOffset = new Date(utc.getTime() + diffTime);
  return toFormat(timezoneOffset, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
};

export default {
  timezoneOffsetOfEvent,
  toFormatMessageFuture,
  toFormatMessage,
  toFormat,
  getTime,
  getDateLocale,
  ...dateFormat,
  is24HourFormat,
  timeFormat
};
