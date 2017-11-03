import React, { Component } from "react";
import api from "../api";

class EditVillain extends Component {
  constructor() {
    super();

    this.state = {
      villain: {}
    };
  }

  onInputChange = e => {
    e.persist();

    let prop = e.target.name;
    let val = e.target.value;

    this.setState(state => ({
      ...state,
      villain: {
        ...state.villain,
        [prop]: val
      }
    }));
  };

  onFormSubmit = e => {
    e.preventDefault();

    api.villains.update(this.state).then(() => {
      this.props.history.push("/villains");
    });
  };

  componentDidMout() {
    let villainId = this.props.match.params.villainId;
    api.villains.getById(villainId).then(villain => {
      this.setState(state => {
        return {
          villain: villain
        };
      });
    });
  }

  render() {
    let { villain } = this.state;
    return (
      <div>
        <h1>Edit Villain</h1>

        <form onSubmit={this.onFormSubmit}>
          Name:{" "}
          <input
            type={"text"}
            name={"name"}
            value={villain.name}
            placeholder={"Name"}
            onChange={this.onInputChange}
          />
          Power:{" "}
          <input
            type={"text"}
            name={"power"}
            value={villain.power}
            placeholder={"Power"}
            onChange={this.onInputChange}
          />
          Image:{" "}
          <input
            type={"text"}
            name={"image"}
            value={villain.image}
            placeholder={"Image URL"}
            onChange={this.onInputChange}
          />
          Biography:{" "}
          <textarea
            name={"bio"}
            type={"text"}
            value={villain.bio}
            placeholder={"Biography"}
            onChange={this.onInputChange}
          />{" "}
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default EditVillain;
