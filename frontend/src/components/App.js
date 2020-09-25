import React, { useState, useReducer, useEffect } from 'react';
import DepartmentService from '../services/department.service';
import EmployeeService from '../services/employee.service';
import EmployeeForm from '../components/EmployeeForm';
import DepartmentForm from '../components/DepartmentForm';
import Container from './Container';
import CreateButton from './CreateButton';
import Menu from './Menu';
import List from './List';
import DepartmentItem from './DepartmentListItem';
import EmployeeItem from './EmployeeListItem';
import departmentReducer from '../reducers/department';
import employeeReducer from '../reducers/employee';
import EmptyBox from './EmptyBox';
import DeleteBox from './DeleteBox';
import ThemeSwitcher from './ThemeSwitcher';

const menuOptions = [{
  title: 'departments',
  itemComponent: DepartmentItem
}, {
  title: 'employees',
  itemComponent: EmployeeItem
}];

function App() {
  const [departments, dispatchDepartments] = useReducer(departmentReducer, []);
  const [employees, dispatchEmployees] = useReducer(employeeReducer, []);
  const [selectedMenu, setSelectedMenu] = useState(menuOptions[0]);
  const [componentToRender, setComponentToRender] = useState({
    operation: 'list',
    id: null
  });
  
  useEffect(() => {
    const fetchData = async () => {
      const service = selectedMenu.title === 'departments' 
        ? DepartmentService 
        : EmployeeService;
      const result = await service.get();
      const dispatch = selectedMenu.title === 'departments' 
        ? dispatchDepartments 
        : dispatchEmployees;
      dispatch({ type: 'GET', payload: result })
    };
    fetchData();
  }, [selectedMenu.title]);

  function handleSelection(selection) {
    const chosenOption = menuOptions.find(option => option.title === selection);
    setSelectedMenu(chosenOption);
    changeRender('list')
  }

  const renderCreateButton = () => {
    const text = `Add ${selectedMenu.title === 'departments' ? 'Department' : 'Employee'}`;
    return (
      <CreateButton text={text} onClick={changeRender} />
    );
  }

  function changeRender(renderOp, id = null) {
    if(componentToRender.op !== renderOp) {
      setComponentToRender({ operation: renderOp, id });
    }
  }

  const renderRead = () => {
    const items = selectedMenu.title === 'departments' ? departments : employees;
    return (
      <List title={selectedMenu.title} items={items} itemComponent={selectedMenu.itemComponent} changeRender={changeRender}/>
    );
  }

  const renderWrite = (mode, id = null) => {
    if(selectedMenu.title === 'employees') {
      if (departments.length > 0) {
        return (
          <EmployeeForm id={id} mode={mode} departments={departments} changeRender={changeRender}/>
        )
      } else {
        return (
          <EmptyBox message="You must have at least one department before creating an employee." />
        );
      }
    } else {
      return <DepartmentForm id={id} mode={mode} changeRender={changeRender} />;
    }
  }

  const renderDelete = (id) => {
    return (
      <DeleteBox id={id} resource={selectedMenu.title} changeRender={changeRender}/>
    )
  }

  const renderSwitch = (componentToRender) => {
    const { id } = componentToRender;
    switch (componentToRender.operation) {
      case 'list':
        return renderRead();
      case 'create':
        return renderWrite('create');
      case 'edit':
        return renderWrite('edit', id);
      case 'delete':
        return renderDelete(id);
      default:
        throw new Error();
    }
  }

  return (
    <div className="app">
      <ThemeSwitcher />
      <Container>
        {renderCreateButton()}
        <Menu selectedMenu={selectedMenu.title} onMenuSelection={handleSelection} />
        {renderSwitch(componentToRender)}
      </Container>
    </div>
  );
}

export default App;
