import React, { Suspense } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import "antd/dist/antd.css";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Gauges from "./components/Gauges";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dash</Link>

          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
