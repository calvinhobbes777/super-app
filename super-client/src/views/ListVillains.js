import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../api";

class ListVillains extends Component {
  constructor() {
    super();

    this.state = {
      villains: []
    };
  }

  componentDidMount() {
    api.villains.getAll().then(villains => {
      if (!villains.length && villains.legth !== 0) {
        console.log("return value was not an array of Villains", villains);
        villains = [];

        this.setState(state => {
          return {
            villains: villains
          };
        });
      }
    });
  }

  render() {
    let { villains } = this.state;
    return (
      <div>
        <h1>Villains List</h1>
        <Link style={{ float: "right" }} to={`/villains/new`}>
          New Villain
        </Link>
        {villains.map(v => (
          <div style={{ padding: 10 }} key={v.id}>
            <Link to={`/villains/${v.id}`}>
              {v.name} - {v.villains.length} Villains
            </Link>
          </div>
        ))}
      </div>
    );
  }
}
export default ListVillains;
