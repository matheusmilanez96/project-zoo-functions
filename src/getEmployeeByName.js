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

console.log(getEmployeeByName('Bethea'));

module.exports = getEmployeeByName;
