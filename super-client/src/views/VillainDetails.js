import React, { Component } from "react";
import api from "../api";
import { Link } from "react-router-dom";

class VillainDetails extends Component {
  constructor() {
    super();

    this.state = {
      villain: {}
    };
  }

  componentDidMount() {
    let villainId = this.props.match.params.villainId;

    api.villains.getById(villainId).then(villain => {
      if (!villainId) {
        console.log("This is not the villain you were looking for", villain);

        this.setState(state => {
          return {
            villain: villain
          };
        });
      }
    });
  }

  render() {
    let { villain } = this.state;
    return (
      <div>
        <h1>Villain Details</h1>
        <div>
          <Link to={`/villains/${villain.id}/edit`}>Edit</Link>
          <h3>{villain.name}</h3>
          <div>
            <img src={villain.image} alt="Villain Image" />
          </div>
          <b>
            <u>Power:</u>
          </b>
          <div>{villain.power}</div>
          <b>
            <u>Bio:</u>
          </b>
          <div>{villain.bio}</div>
          <hr />
          {villain.villains_archnemesis &&
            villain.villains_archnemesis.map(hero => (
              <div>
                <Link to={`/heroes/${hero.id}`}>{hero.name}</Link>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
export default VillainDetails;
