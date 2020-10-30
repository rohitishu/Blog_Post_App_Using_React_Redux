import React from "react";
import Navbar from "./Navbar";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Post from "./Post";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/:post_id" component={Post} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
