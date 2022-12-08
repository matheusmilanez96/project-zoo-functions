const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => data.species.filter((especie) => ids.includes(especie.id));

module.exports = getSpeciesByIds;
