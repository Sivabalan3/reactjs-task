//EMAIL VALIDATION

import React, { useState } from "react";
export default function App() {
  const [input, setinput] = useState({ email: "", password: "" });
  const [error, seterror] = useState({ email: "", password: "" });
  const handlechange = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };
  const Submit = (e) => {
    e.preventDefault();
    let errors = {};
    if (input.email === "siva@gmail.com" && input.password === "siva") {
      errors = { email: "", password: "" };
      alert("sucess");
    } else if (!input.email) {
      errors.email = "Email required";
    } else if (!input.password) {
      errors.password = "Password required";
    }
    seterror(errors);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <form onSubmit={Submit}>
        {error.email && <p>{error.email}</p>}
        <input
          placeholder="email"
          name="email"
          value={input.email}
          onChange={handlechange}
        />
        <input
          placeholder="password"
          name="password"
          value={input.password}
          onChange={handlechange}
        />
        {error.password && <p>{error.password}</p>}
        <button>Submit</button>
      </form>
    </div>
  );
}