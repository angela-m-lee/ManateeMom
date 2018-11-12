var db = require("../models"); 

module.exports = function(app) {

  // Get all examples
  app.get("/api/assignment", function(req, res) {
    db.Assignment.findAll({}).then(function(dbAssignment) {
      res.json(dbAssignment);
    });
  });

  // Create a new example
  app.post("/api/assignment", function(req, res) {
    db.Assignment.create(req.body).then(function(dbAssignment) {
      res.json(dbAssignment);
    });
  });

  // Delete an example by id
  app.delete("/api/assignment/:id", function(req, res) {
    db.Assignment.destroy({ where: { id: req.params.id } }).then(function(dbAssignment) {
      res.json(dbAssignment);
    });
  });
};