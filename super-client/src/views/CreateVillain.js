import React, { Component } from "react";
import api from "../api";

class CreateVillain extends Component {
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

    api.villains.create(this.state).then(() => {
      this.props.history.push("/villains");
    });
  };

  render() {
    return (
      <div>
        <h1>Add Villain</h1>

        <form onSubmit={this.onFormSubmit}>
          Name:{" "}
          <input
            type={"text"}
            name={"name"}
            placeholder={"Name"}
            onChange={this.onInputChange}
          />
          Power:{" "}
          <input
            type={"text"}
            name={"power"}
            placeholder={"Power"}
            onChange={this.onInputChange}
          />
          Image:{" "}
          <input
            type={"text"}
            name={"image"}
            placeholder={"Image URL"}
            onChange={this.onInputChange}
          />
          Biography:{" "}
          <textarea
            name={"bio"}
            type={"text"}
            placeholder={"Biography"}
            onChange={this.onInputChange}
          />{" "}
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default CreateVillain;
