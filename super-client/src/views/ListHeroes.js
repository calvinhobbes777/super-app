import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../api";

class ListHeroes extends Component {
  constructor() {
    super();

    this.state = {
      heroes: []
    };
  }

  componentDidMount() {
    api.heroes.getAll().then(heroes => {
      if (!heroes.length && heroes.legth !== 0) {
        console.log("return value was not an array of Heroes", heroes);
        heroes = [];

        this.setState(state => {
          return {
            heroes: heroes
          };
        });
      }
    });
  }

  render() {
    let { heroes } = this.state;
    return (
      <div>
        <h1>Heroes List</h1>
        <Link style={{ float: "right" }} to={`/heroes/new`}>
          New Hero
        </Link>
        {heroes.map(h => (
          <div style={{ padding: 10 }} key={h.id}>
            <Link to={`/heroes/${h.id}`}>
              {h.name} - {h.heroes.length} Heroes
            </Link>
          </div>
        ))}
      </div>
    );
  }
}
export default ListHeroes;
