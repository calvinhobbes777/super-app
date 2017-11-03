module.exports = {
  method: "GET",
  path: "/api/villains",
  handler: function(request, reply) {
    this.models.Villain
      .filter({})
      .getJoin({ villain_archnemisis: true })
      .then(result => reply(result))
      .catch(error => reply(error));
  }
};
