module.exports = {
  method: "POST",
  path: "/api/heroes",
  handler: function(request, reply) {
    let hero = new this.models.Hero(request.payload);

    hero
      .save()
      .then(result => reply(result))
      .catch(error => reply(error));
  }
};
