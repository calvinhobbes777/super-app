import React, { Component } from "react";
import api from "../api";

class EditHero extends Component {
  constructor() {
    super();

    this.state = {
      hero: {}
    };
  }

  onInputChange = e => {
    e.persist();

    let prop = e.target.name;
    let val = e.target.value;

    this.setState(state => ({
      ...state,
      hero: {
        ...state.hero,
        [prop]: val
      }
    }));
  };

  onFormSubmit = e => {
    e.preventDefault();

    api.heroes.update(this.state).then(() => {
      this.props.history.push("/heroes");
    });
  };

  componentDidMout() {
    let heroId = this.props.match.params.heroId;
    api.heroes.getById(heroId).then(hero => {
      this.setState(state => {
        return {
          hero: hero
        };
      });
    });
  }

  render() {
    let { hero } = this.state;
    return (
      <div>
        <h1>Edit Hero</h1>

        <form onSubmit={this.onFormSubmit}>
          Name:{" "}
          <input
            type={"text"}
            name={"name"}
            value={hero.name}
            placeholder={"Name"}
            onChange={this.onInputChange}
          />
          Power:{" "}
          <input
            type={"text"}
            name={"power"}
            value={hero.power}
            placeholder={"Power"}
            onChange={this.onInputChange}
          />
          Image:{" "}
          <input
            type={"text"}
            name={"image"}
            value={hero.image}
            placeholder={"Image URL"}
            onChange={this.onInputChange}
          />
          Biography:{" "}
          <textarea
            name={"bio"}
            type={"text"}
            value={hero.bio}
            placeholder={"Biography"}
            onChange={this.onInputChange}
          />{" "}
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default EditHero;
