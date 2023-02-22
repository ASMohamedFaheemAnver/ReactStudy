import React from "react";
import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Timer from "./Timer";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Switch>
          <Route path="/about" component={About}></Route>
          <Route path="/shop" component={Shop}></Route>
          <Route path="/timer" component={Timer}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
