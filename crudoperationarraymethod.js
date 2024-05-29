
// react crud operation on ARRAY Metods

import React, { useState } from 'react';
import './App.css'


function App() {
  const employeesData=[{id:1,firstName:"siva",lastName:"kumar"}]
  const [employees, setemployees] = useState(employeesData);
  const [input, setinput] = useState({ id: null, firstName: "", lastName: "" });
  const [editMode, setEditMode] = useState(false);
  const handlechange = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      // Validation: Ensure firstName and lastName are not empty
  if (!input.firstName || !input.lastName) {
    alert('Both first name and last name are required.');
    return;
  }
    if (!editMode) {
      const newEmployee = { id: employees.length + 1, firstName: input.firstName, lastName: input.lastName };
      setemployees([...employees, newEmployee]);
    } else {
      const updatedEmployees = employees.map(employee => employee.id === input.id ? input : employee);
      setemployees(updatedEmployees);
      setEditMode(false);
    }
    setinput({ id: null, firstName: "", lastName: "" });
  };

  const handleEdit = (employee) => {
    setinput(employee);
    setEditMode(true);
  };

  const handleDelete = (id) => {
    const remainingEmployees = employees.filter(employee => employee.id !== id);
    setemployees(remainingEmployees);
  };

  return (
    <div className='App'>
  <center>
      <form onSubmit={handleSubmit}>
        <input placeholder='FirstName' value={input.firstName} name="firstName" onChange={handlechange} />
        <input placeholder='LastName' value={input.lastName} name='lastName' onChange={handlechange} />
        <button>{editMode ? 'Update' : 'Add'}</button>
      </form>

      <table>
        <thead>
          <th>No</th>
          <th>FirstName</th>
          <th>LastName</th>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <button onClick={() => handleEdit(employee)}>Edit</button>
              <button onClick={() => handleDelete(employee.id)}>Delete</button>
            </tr>
          ))}
        </tbody>
      </table>
      </center>
      
    </div>
  );
}

export default App;
