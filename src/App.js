import React from "react";
import "./styles.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Error from "./components/Error";
// import { Route, Switch } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signups from "./components/Signup";
import MeraSignup from "./components/MeraSignup";
import Home from "./components/home";

function App() {
  // const[meraname, setMeraname] = React.useState("")

  // function myChange(e){
  //   debugger
  //   setMeraname(e.target.value)
  // }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<MeraSignup />} />
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <input type="text" value={meraname} onChange={myChange} />
      <h2>
        {meraname}
      </h2> */}
    </div>
  );
}

export default App;
