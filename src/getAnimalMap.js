const data = require('../data/zoo_data');

const fullMap = () => {
  const NE = data.species
    .filter((especie) => especie.location === 'NE')
    .map((especie) => especie.name);
  const NW = data.species
    .filter((especie) => especie.location === 'NW')
    .map((especie) => especie.name);
  const SE = data.species
    .filter((especie) => especie.location === 'SE')
    .map((especie) => especie.name);
  const SW = data.species
    .filter((especie) => especie.location === 'SW')
    .map((especie) => especie.name);
  return {
    NE,
    NW,
    SE,
    SW,
  };
};

const animalNames = (animal, opt) => {
  const ani1 = data.species.filter((especie) => especie.name === animal)[0];
  let ani2;
  if (!Object.keys(opt).includes('sex')) {
    const obj = ani1.residents
      .map((resident) => resident.name);
    ani2 = obj;
  } else {
    const obj = ani1.residents
      .filter((resident) => resident.sex === opt.sex)
      .map((resident) => resident.name);
    ani2 = obj;
  }
  if (opt.sorted === false || !Object.keys(opt).includes('sorted')) {
    return { [animal]: ani2 };
  }
  const ani3 = ani2.sort();
  return { [animal]: ani3 };
};

const makeObject = (obj) => {
  const { NE } = obj[0];
  const { NW } = obj[1];
  const { SE } = obj[2];
  const { SW } = obj[3];
  return { NE, NW, SE, SW };
};

const mapWithNames = (opt) => {
  const obj = fullMap();
  const obj2 = Object.values(obj).map((animalArray, index) => {
    const arr = [];
    for (let i = 0; i < animalArray.length; i += 1) {
      arr.push(animalNames(animalArray[i], opt));
    }
    const location = Object.keys(obj)[index];
    return { [location]: arr };
  });
  return makeObject(obj2);
};

const getAnimalMap = (...options) => {
  if (options.length === 0) { return fullMap(); }
  const [opt] = options;
  if (!Object.keys(opt).includes('includeNames') || opt.includeNames !== true) {
    return fullMap();
  }
  const obj = mapWithNames(opt);
  return obj;
};

module.exports = getAnimalMap;
