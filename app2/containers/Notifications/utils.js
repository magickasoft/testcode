import moment from 'moment';
import { is24HourFormat } from 'utils';
import { strings } from 'locales';

const getHourFormat = () => (is24HourFormat() ? '' : ', A');

const titleStatusMap2 = {
  order_received: 'received your order',
  on_the_way: 'is on the way!',
  arrived: 'Your taxi is here!',
  cancelled: 'Your cancellation',
  rejected: 'rejected'
};

const getStatusByTitle = title => (
  Object.keys(titleStatusMap2).find(key => title.toLowerCase().includes(titleStatusMap2[key].toLowerCase()))
);

// WEDNESDAY, JULY 04, 2018
const sectionFormatter = {
  lastDay: `[${strings('notifications.period.yesterday')}]`,
  sameDay: `[${strings('notifications.period.today')}]`,
  sameElse: 'dddd, MMMM DD, YYYY',
  nextDay: 'dddd, MMMM DD, YYYY',
  lastWeek: 'dddd, MMMM DD, YYYY',
  nextWeek: 'dddd, MMMM DD, YYYY'
};

// July 04, 2018, 8:23 AM
const dateFormatter = {
  lastDay: `[${strings('notifications.period.yesterday')}], h:mm${getHourFormat()}`,
  sameDay: `[${strings('notifications.period.today')}], h:mm${getHourFormat()}`,
  sameElse: `MMMM DD, YYYY, h:mm${getHourFormat()}`,
  nextDay: `MMMM DD, YYYY, h:mm${getHourFormat()}`,
  lastWeek: `MMMM DD, YYYY, h:mm${getHourFormat()}`,
  nextWeek: `MMMM DD, YYYY, h:mm${getHourFormat()}`
};

const defineStatuses = items => items.map((item) => {
  const indicatedStatus = item.body ? getStatusByTitle(item.body) : undefined;
  return { ...item, indicatedStatus };
});

const getPeriods = () => {
  const today = () => moment();
  const yesterday = () => moment().subtract(1, 'days');
  const weekAgo = () => moment().subtract(7, 'days');
  const monthAgo = () => moment().subtract(1, 'months');
  const yearAgo = () => moment().subtract(12, 'months');
  return { today, yesterday, weekAgo, monthAgo, yearAgo };
};

const filterSectionsByPeriod = (items) => {
  const { today, yesterday, weekAgo, monthAgo, yearAgo } = getPeriods();
  const check = (now, before, after) => (now.isBefore(before()) && now.isAfter(after())) || now.isSame(after(), 'day');

  return items.map((item) => {
    const itemTime = moment(item.createdAt);
    const tempTitle = itemTime.calendar(null, sectionFormatter);

    let section;
    if (check(itemTime, today, yesterday)) {
      section = tempTitle.toUpperCase();
    } else if (check(itemTime, yesterday, weekAgo)) {
      section = strings('notifications.period.lastWeek');
    } else if (check(itemTime, weekAgo, monthAgo)) {
      section = strings('notifications.period.lastMonth');
    } else if (check(itemTime, monthAgo, yearAgo)) {
      section = strings('notifications.period.lastYear');
    } else {
      section = strings('notifications.period.longTimeAgo');
    }

    return ({
      ...item,
      title: item.title,
      section,
      timestampDate: moment(item.createdAt).calendar(null, dateFormatter)
    });
  });
};

const sortSectionsByTimestamp = (items) => {
  const timestampItem = {};
  items.forEach((item) => {
    if (!timestampItem[item.section] || !timestampItem[item.section].data) {
      timestampItem[item.section] = { data: [] };
    }
    timestampItem[item.section].data.push(item);
  });

  return Object.keys(timestampItem).map(section => ({
    section,
    ...timestampItem[section]
  }));
};

const sortItems = items => (
  sortSectionsByTimestamp(filterSectionsByPeriod(defineStatuses(items)))
);

export default sortItems;
