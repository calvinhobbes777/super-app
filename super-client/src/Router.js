import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path={"/"} component={ksk} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
