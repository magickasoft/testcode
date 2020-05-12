import * as dateFns from 'date-fns';
import { weekToFormat, yearToFormat } from '../../utils/helpers/graphQl';

const createWeeks = (d = Date.now()) => {
  const year = dateFns.getYear(d);
  const week = dateFns.getISOWeek(d);

  return [
    `${yearToFormat(year)}-${weekToFormat(week)}`,
    `${yearToFormat(year)}-${weekToFormat(week - 1)}`,
    `${yearToFormat(year)}-${weekToFormat(week - 2)}`,
    `${yearToFormat(year)}-${weekToFormat(week - 3)}`,
    `${yearToFormat(year)}-${weekToFormat(week - 4)}`,
    `${yearToFormat(year)}-${weekToFormat(week - 5)}`,
  ];
};

export {
  createWeeks,
};
