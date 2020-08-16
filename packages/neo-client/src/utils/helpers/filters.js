import moment from 'moment';

export const uppercase = (value) => value.toUpperCase();

export const currency = (value) => {
  const parsedText = Number(value)
    .toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `$${parsedText}`;
};

export const date = (value) => moment(value).format('dddd, MMMM Do');
