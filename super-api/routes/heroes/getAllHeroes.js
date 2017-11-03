module.exports = {
  method: "GET",
  path: "/api/heroes",
  handler: function(request, reply) {
    this.models.Hero
      .filter({})
      .getJoin({ hero_archnemisis: true })
      .then(result => reply(result))
      .catch(error => reply(error));
  }
};
