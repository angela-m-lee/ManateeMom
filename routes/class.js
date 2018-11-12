var db = require("../models"); 

module.exports = function(app) {

  // Get all classes
  app.get("/api/class", function(req, res) {
    db.Class.findAll({}).then(function(dbClass) {
      res.json(dbClass);
    });
  });

  // Create a new class
  app.post("/api/class", function(req, res) {
    db.Class.create(req.body).then(function(dbClass) {
      res.json(dbClass);
    });
  });

  // Delete an class by id
  app.delete("/api/class/:id", function(req, res) {
    db.Class.destroy({ where: { id: req.params.id } }).then(function(dbClass) {
      res.json(dbClass);
    });
  });
};