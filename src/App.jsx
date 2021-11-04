import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from "./Components/Home";
import QuizPage from "./Components/Quiz/QuizPage";
import Premium from "./Components/Premium";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <Router>
      <div className="App">

        <Navbar />
          
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/quiz" component={QuizPage} />
            <Route path="/premium" component={Premium} />


        </Switch>
      </div>
    </Router>
  );
}

export default App;
