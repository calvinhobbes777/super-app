module.exports = {
  path: "/api/villains/{id}",
  method: "GET",
  handler: function(request, reply) {
    let id = request.params.id;

    this.models.Villain
      .get(id)
      .getJoin({ villain_archnemisis: true })
      .then(result => reply(result))
      .catch(error => reply(error));
  }
};
