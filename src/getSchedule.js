const data = require('../data/zoo_data');

const exhibition = (weekday) => {
  const array = data.species.filter((especie) => especie.availability.includes(weekday));
  const array2 = array.map((especie) => especie.name);
  return array2;
};

const officeHour = (weekday) => {
  const { hours } = data;
  const string = `Open from ${hours[weekday].open}am until ${hours[weekday].close}pm`;
  return string;
};

const fullSchedule = {
  Tuesday: {
    officeHour: officeHour('Tuesday'),
    exhibition: exhibition('Tuesday'),
  },
  Wednesday: {
    officeHour: officeHour('Wednesday'),
    exhibition: exhibition('Wednesday'),
  },
  Thursday: {
    officeHour: officeHour('Thursday'),
    exhibition: exhibition('Thursday'),
  },
  Friday: {
    officeHour: officeHour('Friday'),
    exhibition: exhibition('Friday'),
  },
  Saturday: {
    officeHour: officeHour('Saturday'),
    exhibition: exhibition('Saturday'),
  },
  Sunday: {
    officeHour: officeHour('Sunday'),
    exhibition: exhibition('Sunday'),
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};

const getSchedule = (scheduleTarget) => {
  const findSpecies = data.species.find((species) => species.name === scheduleTarget);
  if (findSpecies !== undefined) {
    return findSpecies.availability;
  }
  if (Object.keys(fullSchedule).includes(scheduleTarget)) {
    return {
      [scheduleTarget]: fullSchedule[scheduleTarget],
    };
  }
  return fullSchedule;
};

console.log(getSchedule('Monday'));

module.exports = getSchedule;
