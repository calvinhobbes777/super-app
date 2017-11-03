module.exports = {
  path: "/api/heroes/{id}",
  method: "DELETE",
  handler: function(request, reply) {
    let id = request.params.id;

    this.models.Hero
      .get(id)
      .then(doc => doc.delete())
      .then(result => reply(true))
      .catch(error => reply(error));
  }
};
