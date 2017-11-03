import React, { Component } from "react";

class Home extends Component {
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

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Add Hero</h1>

        <form>
          <input
            onChange={this.onInputChange}
            name={"name"}
            placeholder={"Name"}
            type={"text"}
          />
          <input
            onChange={this.onInputChange}
            name={"power"}
            placeholder={"Power"}
            type={"text"}
          />
          <input
            onChange={this.onInputChange}
            name={"image"}
            placeholder={"Image URL"}
            type={"text"}
          />
          <textarea
            onChange={this.onInputChange}
            name={"bio"}
            placeholder={"Biography"}
            type={"text"}
          />
        </form>
      </div>
    );
  }
}
export default Home;
