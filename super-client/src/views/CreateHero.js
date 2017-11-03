import React, { Component } from "react";
import api from "../api";

class CreateHero extends Component {
  constructor() {
    super();

    this.state = {};
  }

  onInputChange = e => {
    e.persist();

    let prop = e.target.name;
    let val = e.target.value;

    this.setState(state => ({
      ...state,
      [prop]: val
    }));
  };

  onFormSubmit = e => {
    e.preventDefault();

    api.heroes.create(this.state).then(() => {
      this.props.history.push("/heroes");
    });
  };

  render() {
    return (
      <div>
        <h1>Add Hero</h1>

        <form onSubmit={this.onFormSubmit}>
          Name:{" "}
          <input
            onChange={this.onInputChange}
            name={"name"}
            placeholder={"Name"}
            type={"text"}
          />
          Power:{" "}
          <input
            onChange={this.onInputChange}
            name={"power"}
            placeholder={"Power"}
            type={"text"}
          />
          Image:{" "}
          <input
            onChange={this.onInputChange}
            name={"image"}
            placeholder={"Image URL"}
            type={"text"}
          />
          Biography:{" "}
          <textarea
            onChange={this.onInputChange}
            name={"bio"}
            placeholder={"Biography"}
            type={"text"}
          />{" "}
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default CreateHero;
