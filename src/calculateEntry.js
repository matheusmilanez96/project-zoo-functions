const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const child = entrants.filter((pessoa) => pessoa.age < 18).length;
  const adult = entrants.filter((pessoa) => pessoa.age >= 18 && pessoa.age < 50).length;
  const senior = entrants.filter((pessoa) => pessoa.age >= 50).length;
  const obj = {
    child,
    adult,
    senior,
  };
  return obj;
};

const calculateEntry = (entrants) => {
  if (entrants === undefined || entrants.length === 0 || Object.keys(entrants).length === 0) {
    return 0;
  }
  const ages = countEntrants(entrants);
  const total = ages.child * 20.99 + ages.adult * 49.99 + ages.senior * 24.99;
  return total;
};

module.exports = { calculateEntry, countEntrants };
