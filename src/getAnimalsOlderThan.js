const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const animalArray = data.species.filter((especie) => especie.name === animal)[0].residents;
  return animalArray.every((animals) => animals.age >= age);
};

module.exports = getAnimalsOlderThan;
