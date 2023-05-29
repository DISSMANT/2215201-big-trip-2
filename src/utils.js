import dayjs from 'dayjs';

const HOUR_MINUTES_COUNT = 60;
const TOTAL_DAY_MINUTES_COUNT = 1440;
const DATE_FORMAT = 'YYYY-MM-DD';
const DATE_TIME_FORMAT = 'DD/MM/YY hh:mm';
const TIME_FORMAT = 'hh:mm';

const humanizePointDueDate = (date) => dayjs(date).format('DD MMM');

const getDaysOutput = (days) => {
  if (!days) {
    return '';
  }
  if (days < 10) {
    return `0${days}D`;
  }
  return `${days}D`;
};

const getHoursOutput = (days, restHours) => {
  if (!days && !restHours) {
    return '';
  }
  if(restHours < 10) {
    return `0${restHours}H`;
  }
  return `${restHours}H`;
};

const getMinutesOutput = (restMinutes) => (restMinutes < 10) ? `0${restMinutes}M` : `${restMinutes}M`;

const duration = (dateFrom, dateTo) => {
  const start = dayjs(dateFrom);
  const end = dayjs(dateTo);
  const difference = end.diff(start, 'minute');

  const days = Math.floor(difference / TOTAL_DAY_MINUTES_COUNT);
  const restHours = Math.floor((difference - days * TOTAL_DAY_MINUTES_COUNT) / HOUR_MINUTES_COUNT);
  const restMinutes = difference - (days * TOTAL_DAY_MINUTES_COUNT + restHours * HOUR_MINUTES_COUNT);

  const daysOutput = getDaysOutput(days);
  const hoursOutput = getHoursOutput(days, restHours);
  const minutesOutput = getMinutesOutput(restMinutes);

  return `${daysOutput} ${hoursOutput} ${minutesOutput}`;
};

const getDate = (date) => dayjs(date).format(DATE_FORMAT);

const getTime = (date) => dayjs(date).format(TIME_FORMAT);

const getDateTime = (date) => dayjs(date).format(DATE_TIME_FORMAT);

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomElement = (elements) => {
  const MIN = 0;
  const max = elements.length - 1;
  return elements[getRandomInteger(MIN, max)];
};

const isDatePast = (date) => dayjs().diff(date, 'day') > 0;
const isDateFuture = (date) => date.diff(dayjs(), 'day') >= 0;
const isDatePastFuture = (dateFrom, dateTo) => dayjs().diff(dateFrom, 'day') > 0 && dateTo.diff(dayjs(), 'day') > 0;

const capitalize = (item) => {
  if (item === false) {
    return '';
  }

  return item[0].toUpperCase() + item.slice(1);
};

const sortByPricePoint = (firstPoint, secondPoint) => secondPoint - firstPoint;
const sortByDayPoint = (firstPoint, secondPoint) => dayjs(firstPoint.dateFrom).diff(dayjs(secondPoint.dateFrom));
const sortByTimePoint = (firstPoint, secondPoint) => dayjs(secondPoint.dateTo).diff(dayjs(secondPoint.dateFrom)) - dayjs(firstPoint.dateTo).diff(dayjs(firstPoint.dateFrom));

export {getRandomInteger, getRandomElement, humanizePointDueDate, duration, getDate, getDateTime, getTime,
  isDatePastFuture, isDatePast, isDateFuture, capitalize, sortByPricePoint, sortByDayPoint, sortByTimePoint};
