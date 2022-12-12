const data = require('../data/zoo_data');

const countAnimals = (...animal) => {
  if (animal.length === 0) {
    const obj = {};
    const animals = data.species.map((especie) => {
      const key = especie.name;
      obj[key] = especie.residents.length;
      return obj;
    });
    return animals[0];
  }
  const animals = data.species.filter((especie) => animal[0].species === especie.name);
  if (Object.keys(animal[0]).length === 1) {
    return animals[0].residents.length;
  }
  const genderAnimals = animals[0].residents.filter((residente) => residente.sex === animal[0].sex);
  return genderAnimals.length;
};

console.log(countAnimals());

module.exports = countAnimals;
