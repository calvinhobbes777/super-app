module.exports = {
  path: "/api/villains/{id}",
  method: ["PUT", "PATCH"],
  handler: function(request, reply) {
    let id = request.params.id;
    let updateVillain = request.payload;
    this.models.Villain
      .get(id)
      .then(doc => doc.merge(updateVillain))
      .then(result => reply(result))
      .catch(error => reply(error));
  }
};
