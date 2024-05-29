//ODD OR EVEN


import React,{ useState } from "react";

 const App = () => {
  const [input, setinput] = useState("");
  const [msg, setmsg] = useState("");

  const handleChange = (e) => {
    setinput(e.target.value);
    setmsg(e.target.value % 2 === 0 ? "even" : "odd");
  };
  return (
    <div className="App">
      <p style={{ color: msg === "even" ? "red" : "green" }}>{msg}</p>
      <input type="text" onChange={handleChange} value={input} />
      <h1>hello</h1>
    </div>
  );
};
export default App;