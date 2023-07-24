import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
function App() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="App">
      <h2 id="todo">LOGIN</h2>
      <label>Email:</label>
      <input type="text" value={email} />
      <label>Password:</label>
      <input type="text" value={password} />
      <button>Login</button>
    </div>
  );
}

export default App;
