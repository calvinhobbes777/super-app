module.exports = db => {
  const type = db.type;
  const Villain = db.createModel("Villain", {
    name: type.string().required(),
    power: type.string().required(),
    bio: type.string().required(),
    image: type.string().required()
  });
  return Villain;
};
