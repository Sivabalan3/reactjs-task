//  REACT CRUD OPERATION ON ARRAY WITH LOCALSTORAGE

import React, { useState, useEffect } from "react";

function Add() {
  const [input, setinput] = useState({ id: null, firstName: "", lastName: "" });
  const [editMode, setEditMode] = useState(false);

  // Load employees from localStorage
  const [employees, setemployees] = useState(() => {
    const savedEmployees = localStorage.getItem("employees");
    if (savedEmployees) {
      return JSON.parse(savedEmployees);
    } else {
      return [];
    }
  });

  // Save employees to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const handlechange = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.firstName || !input.lastName) {
      alert("Both first name and last name are required.");
      return;
    }

    if (!editMode) {
      const newEmployee = {
        id: employees.length + 1,
        firstName: input.firstName,
        lastName: input.lastName,
      };
      setemployees([...employees, newEmployee]);
    } else {
      const updatedEmployees = employees.map((employee) =>
        employee.id === input.id ? input : employee
      );
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
    const remainingEmployees = employees.filter(
      (employee) => employee.id !== id
    );
    setemployees(remainingEmployees);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="FirstName"
          value={input.firstName}
          name="firstName"
          onChange={handlechange}
        />
        <input
          placeholder="LastName"
          value={input.lastName}
          name="lastName"
          onChange={handlechange}
        />
        <button>{editMode ? "Update" : "Add"}</button>
      </form>

      <div>
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
                <button onClick={() => handleDelete(employee.id)}>
                  Delete
                </button>
                <button onClick={() => handleEdit(employee)}>Edit</button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Add;
