const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const currentEmployee = data.employees.find((employee) => employee.id === id);
  const speciesID = currentEmployee.responsibleFor[0];
  const currentSpecies = data.species.find((especie) => especie.id === speciesID);
  const oldestAnimal = currentSpecies.residents
    .reduce((acc, curr) => (acc.age > curr.age ? acc : curr));
  return Object.values(oldestAnimal);
};

module.exports = getOldestFromFirstSpecies;
