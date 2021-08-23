import React from "react";
import TestPage from "./Components/TestPage";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Premium from "./Components/Premium";

function App() {
  return (
    <Router>
      <div className="App">

        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/test" component={TestPage} />
          <Route path="/premium" component={Premium} />


        </Switch>
      </div>
    </Router>
  );
}

export default App;
