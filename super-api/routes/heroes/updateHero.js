module.exports = {
  path: "/api/heroes/{id}",
  method: ["PUT", "PATCH"],
  handler: function(request, reply) {
    let id = request.params.id;
    let updateHero = request.payload;
    this.models.Hero
      .get(id)
      .then(doc => doc.merge(updateHero))
      .then(result => reply(result))
      .catch(error => reply(error));
  }
};
