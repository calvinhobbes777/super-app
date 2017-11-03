import React, { Component } from "react";
import api from "../api";
import { Link } from "react-router-dom";

class HeroDetails extends Component {
  constructor() {
    super();

    this.state = {
      hero: {}
    };
  }

  componentDidMount() {
    let heroId = this.props.match.params.heroId;

    api.heroes.getById(heroId).then(hero => {
      if (!heroId) {
        console.log("This is not the hero you were looking for", hero);

        this.setState(state => {
          return {
            hero: hero
          };
        });
      }
    });
  }

  render() {
    let { hero } = this.state;
    return (
      <div>
        <h1>Hero Details</h1>
        <div>
          <Link to={`/heroes/${hero.id}/edit`}>Edit</Link>
          <h3>{hero.name}</h3>
          <div>
            <img src={hero.image} alt="Hero Image" />
          </div>
          <b>
            <u>Power:</u>
          </b>
          <div>{hero.power}</div>
          <b>
            <u>Bio:</u>
          </b>
          <div>{hero.bio}</div>
          <hr />
          {hero.heroes_archnemesis && (
            <div>
              <Link to={`/villains/${heroes_archnemesis.id}`}>
                {heroes_archnemesis.name}
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default HeroDetails;
