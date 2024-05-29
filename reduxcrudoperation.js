//APP.JS FILE
import React, { useState } from 'react';
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee, updateEmployee, deleteEmployee } from './store/feautures/crud';

function App() {
  const [input, setinput] = useState({ id: null, firstName: "", lastName: "" });
  const [editMode, setEditMode] = useState(false);
  const employees = useSelector((state) => state.employees.employees);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.firstName || !input.lastName) {
      alert('Both first name and last name are required.');
      return;
    }
    if (!editMode) {
      dispatch(addEmployee({ firstName: input.firstName, lastName: input.lastName }));
    } else {
      dispatch(updateEmployee(input));
      setEditMode(false);
    }
    setinput({ id: null, firstName: "", lastName: "" });
  };

  const handleEdit = (employee) => {
    setinput(employee);
    setEditMode(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
  };

  return (
    <div className='App'>
  
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input type="text" name="firstName" value={input.firstName} onChange={(e) => setinput({ ...input, firstName: e.target.value })} />
        <label>Last Name</label>
        <input type="text" name="lastName" value={input.lastName} onChange={(e) => setinput({ ...input, lastName: e.target.value })} />
        <button type="submit" style={{ backgroundColor:editMode === true ? "red" : "green",color:"white" }}>{editMode ? 'Update' : 'Add'}</button>
      </form>
<center>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>
                <button onClick={() => handleEdit(employee)} style={{color:"purple"}}>Edit</button>
                <button onClick={() => handleDelete(employee.id)} style={{color:"red"}}>Delete</button>
              </td>
            </tr>
            
          ))}
          
        </tbody>
      </table>
      </center>
    </div>
  );
}

export default App;


//CRUD SLICE In File Name employeeSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employees: [
      { id: 1, firstName: "siva",      lastName: "kumar" },
      { id: 2, firstName: "employee2", lastName: "lastname2" },
      { id: 3, firstName: "employee3", lastName: "lastname3" },
      { id: 4, firstName: "employee4", lastName: "lastname4" },
      { id: 5, firstName: "employee5", lastName: "lastname5" },
      { id: 6, firstName: "employee6", lastName: "lastname6" },
      { id: 7, firstName: "employee7", lastName: "lastname7" },
      { id: 8, firstName: "employee8", lastName: "lastname8" },
      { id: 9, firstName: "employee9", lastName: "lastname9" },
      { id: 10,firstName: "employee10",lastName: "lastname10"},
    ]
  };
  
 const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      const newEmployee = {
        id: state.employees.length + 1,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName
      };
      state.employees.push(newEmployee);
    },
    updateEmployee: (state, action) => {
      const { id, firstName, lastName } = action.payload;
      const existingEmployee = state.employees.find(employee => employee.id === id);
      if (existingEmployee) {
        existingEmployee.firstName = firstName;
        existingEmployee.lastName = lastName;
      }
    },
    deleteEmployee: (state, action) => {
      const id = action.payload;
      const remainingEmployees = state.employees.filter(employee => employee.id !== id);
      state.employees = remainingEmployees;
    }
  }
});

export const { addEmployee, updateEmployee, deleteEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;


//Store. js file 


import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./feautures/counterSlice";
import crud from "./feautures/crud";
export const store = configureStore({
    reducer: {
        employees:crud,
    }
})


