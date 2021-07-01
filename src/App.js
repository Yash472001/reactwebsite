import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";


function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contactus" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
