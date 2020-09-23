import React, { useState, useReducer } from 'react';
import Container from './Container';
import Menu from './Menu';
import List from './List';
import DepartmentItem from './DepartmentItem';
import EmployeeItem from './EmployeeItem';
import departmentReducer from '../reducers/department';
import employeeReducer from '../reducers/employee';

function App() {
  const [departments, dispatchDepartments] = useReducer(departmentReducer, []);
  const [employees, dispatchEmployees] = useReducer(employeeReducer, []);
  const menuOptions = [{
    title: 'departments',
    items: departments,
    itemComponent: DepartmentItem
  }, {
    title: 'employees',
    items: employees,
    itemComponent: EmployeeItem
  }];
  const [selectedMenu, setSelectedMenu] = useState(menuOptions[0]);

  function handleSelection(selection) {
    const chosenOption = menuOptions.find(option => option.title === selection);
    setSelectedMenu(chosenOption);
  }

  return (
    <div className="app">
      <Container>
        <Menu selectedMenu={selectedMenu.title} onMenuSelection={handleSelection} />
        <List title={selectedMenu.title} items={selectedMenu.items} itemComponent={selectedMenu.itemComponent}/>
      </Container>
    </div>
  );
}

export default App;
