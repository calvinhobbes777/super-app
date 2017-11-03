module.exports = {
  path: "/api/villains/{id}",
  method: "DELETE",
  handler: function(request, reply) {
    let id = request.params.id;

    this.models.Villain
      .get(id)
      .then(doc => doc.delete())
      .then(result => reply(true))
      .catch(error => reply(error));
  }
};
