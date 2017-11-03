module.exports = {
  path: "/api/heroes/{id}/villain",
  method: "POST",
  handler: function(request, reply) {
    let id = request.params.id;
    let villain = request.payload;

    this.models.Hero
      .get(id)
      .then(hero => hero.addRelation("hero_archnemisis", villain))
      .then(result => reply(result))
      .catch(error => reply(error));
  }
};
