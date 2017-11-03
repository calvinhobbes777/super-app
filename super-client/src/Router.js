import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {
  Home,
  CreateHero,
  CreateVillain,
  EditHero,
  EditVillain,
  HeroDetails,
  VillainDetails,
  ListHeroes,
  ListVillains
} from "./views/index";

import {
  Home,
  CreateHero,
  CreateVillain,
  EditHero,
  EditVillain,
  HeroDetails,
  VillainDetails,
  ListHeroes,
  ListVillains
} from "./views";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/heroes"} component={ListHeroes} />
          <Route exact path={"/villains"} component={ListVillains} />
          <Route exact path={"/heros/new"} component={CreateHero} />
          <Route exact path={"/villains/new"} component={CreateVillain} />
          <Route exact path={"/heroes/:heroId"} component={HeroDetails} />
          <Route
            exact
            path={"/villains/:villainId"}
            component={VillainDetails}
          />
          <Route exact path={"/heroes/:heroId/edit"} component={EditHero} />
          <Route
            exact
            path={"/villains/:villainId/edit"}
            component={EditVillain}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
