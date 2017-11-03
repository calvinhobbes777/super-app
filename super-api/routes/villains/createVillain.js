module.exports = {
  method: "POST",
  path: "/api/villains",
  handler: function(request, reply) {
    let villain = new this.models.Villain(request.payload);

    villain
      .save()
      .then(result => reply(result))
      .catch(error => reply(error));
  }
};
