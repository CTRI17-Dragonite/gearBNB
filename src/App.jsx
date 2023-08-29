import React from 'react';
import NavBar from './components/NavBar.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import Homepage from './components/Homepage.jsx';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
// createcontexts

const App = () => {

//create usestates



  return (
    <div>
        {/* <div className="text-3xl underline border-black border-2 bg-pink-500">
          TAILWIND TEST   
        </div> */}
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/home" exact element={<Homepage />} />
          <Route path="/SignUp" exact element={<SignUp />} />
          {/* <Login /> */}
          {/* <Homepage />
          <SignUp /> */}
        {/* <Route /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
