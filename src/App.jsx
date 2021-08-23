import React from "react";
import QuizPage from "./Components/Quiz/QuizPage";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
          <Route path="/test" component={QuizPage} />
          <Route path="/premium" component={Premium} />


        </Switch>
      </div>
    </Router>
  );
}

export default App;
