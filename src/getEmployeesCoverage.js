const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  let i = -1;
  data.employees.map((employee, index) => {
    if (employee.firstName === employeeName || employee.lastName === employeeName) {
      i = index;
    }
    return i;
  });
  if (i >= 0) {
    return data.employees[i];
  }
  return {};
};

const getEmployeeByID = (employeeID) => {
  let i = -1;
  data.employees.map((employee, index) => {
    if (employee.id === employeeID) {
      i = index;
    }
    return i;
  });
  if (i < 0) {
    throw new Error('Informações inválidas');
  }
  return data.employees[i];
};

const getSpeciesByID = (speciesID, param) => {
  let i = -1;
  data.species.map((species, index) => {
    if (species.id === speciesID) {
      i = index;
    }
    return i;
  });
  if (i >= 0) {
    return data.species[i][param];
  }
  return {};
};

const speciesArray = (array, param) => array.map((id) => getSpeciesByID(id, param));

const createEmployeeObj = (employee) => {
  const employeeObj = {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: speciesArray(employee.responsibleFor, 'name'),
    locations: speciesArray(employee.responsibleFor, 'location'),
  };
  return employeeObj;
};

const getEmployeesCoverage = (...args) => {
  if (args.length === 0) {
    return data.employees.map((emp) => createEmployeeObj(emp));
  }
  let employee;
  const [person] = args;
  if (Object.keys(person)[0] === 'name') {
    employee = getEmployeeByName(person.name);
  }
  if (Object.keys(person)[0] === 'id') {
    employee = getEmployeeByID(person.id);
  }
  return createEmployeeObj(employee);
};

// console.log(createEmployeeObj(data.employees[0]));
console.log(getEmployeesCoverage());
// console.log(getEmployeesCoverage({ name: 'Sharonda' }));
// console.log(getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));

module.exports = getEmployeesCoverage;
