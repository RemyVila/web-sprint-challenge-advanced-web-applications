import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { axiosWithAuth } from './utils/axiosWithAuth';
import BubblePage from './components/BubblePage';
import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute';
import "./styles.scss";

function App() {
  

  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} history={localStorage} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}

        <PrivateRoute exact path='/protected' component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
