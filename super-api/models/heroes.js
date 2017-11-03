module.exports = db => {
  const type = db.type;
  const Hero = db.createModel("Hero", {
    name: type.string().required(),
    power: type.string().required(),
    bio: type.string().required(),
    image: type.string().required()
  });
  return Hero;
};
