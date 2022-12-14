const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some((person) => person.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  const mngrBool = isManager(managerId);
  if (mngrBool === true) {
    const nameArray = [];
    const subordinates = data.employees.filter((person) => person.managers.includes(managerId));
    subordinates.forEach((person) => {
      const name = `${person.firstName} ${person.lastName}`;
      nameArray.push(name);
      return nameArray;
    });
    return nameArray;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
