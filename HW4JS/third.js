'use strict';

const input = prompt('Месяц');

const map = new Map();

const months = [['January', 1], ['February', 2], ['March', 3], ['April', 4], ['May', 5], ['June', 6], ['July', 7],
  ['August', 8], ['September', 9], ['October', 10], ['November', 11], ['December', 12]];

months.forEach(([string, number]) => {
  map.set(string, number);
  map.set(number, string);
});

const number = Number(input);

const month = Number.isNaN(number) ? map.get(input) : map.get(number);

if (!month) {
  alert.log('Wrong value');
} else {
  alert.log(month);
}
