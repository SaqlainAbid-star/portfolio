/** @format */

import React from "react";
import { StaticRouter as Router, Route } from "react-router-dom";
import Content from "../pages/Content";

export default function AppRouter() {
  return (
    <div>
      <Router>
        <Route exact path='/' component={Content} />
      </Router>
    </div>
  );
}
