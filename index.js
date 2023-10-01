// Write your solution in this file!

let employee = {
    name: "Jerry Tarus",
    streetAddress: "12th Main Belle Avenue",
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key, value) {
    const newEmployee = { ...employee };
    newEmployee[key] = value;
  
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  