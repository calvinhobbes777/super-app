module.exports = {
  path: "/api/heroes/{id}",
  method: "GET",
  handler: function(request, reply) {
    let id = request.params.id;

    this.models.Hero
      .get(id)
      .getJoin({ hero_archnemisis: true })
      .then(result => reply(result))
      .catch(error => reply(error));
  }
};
