const thinky = require("thinky");
const config = require("../config");

const db = thinky({
  db: config.db.name,
  port: config.db.port,
  host: config.db.host
});

const Hero = require("./heroes")(db);
const Villain = require("./villains")(db);

Villain.hasOne(Hero, "villain_archnemisis", "id", "id");
Hero.hasOne(Villain, "heroes_archnemisis", "id", "id");

module.exports = {
  Hero: Hero,
  Villain: Villain
};
