export const getYears = (yearRange = 30) => {
  const currentYear = new Date().getFullYear();
  const startYear = currentYear - yearRange;
  const yearsArr = [];

  while (startYear <= currentYear) {
    yearsArr.push(startYear + 1);
  }

  return yearsArr.reverse();
};

export const getDaysInMonth = (month = 1, year = 1980) => new Date(year, month, 0).getDate();

export const arrayByCount = (count) => [...Array(count).keys()].map((e) => e + 1);
