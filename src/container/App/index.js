import React from "react";
import { Route } from "react-router-dom";
import Home from "../Home";
import Search from "../Search";

import "./app.css";

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/search" component={Search} />
  </div>
);

export default App;
