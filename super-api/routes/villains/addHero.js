module.exports = {
  path: "/api/villains/{id}/hero",
  method: "POST",
  handler: function(request, reply) {
    let id = request.params.id;
    let hero = request.payload;

    this.models.Villain
      .get(id)
      .then(villain => villain.addRelation("villain_archnemisis", hero))
      .then(result => reply(result))
      .catch(error => reply(error));
  }
};
