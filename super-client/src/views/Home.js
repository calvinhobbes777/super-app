import React, { Component } from "react";

class Home extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Super Home Screen</h1>

        <h3>Choose your side</h3>
        <hr />
        <button onClick={() => this.props.history.push("/heroes")}>
          Heroes
        </button>
        <button onClick={() => this.props.history.push("/villains")}>
          Villains
        </button>
      </div>
    );
  }
}
export default Home;
