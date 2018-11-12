var db = require("../models"); 

module.exports = function(app) {

  // Get all student
  app.get("/api/student", function(req, res) {
    db.Student.findAll({}).then(function(dbStudent) {
      res.json(dbStudent);
    });
  });

  // Create a new student
  app.post("/api/student", function(req, res) {
    db.Student.create(req.body).then(function(dbStudent) {
      res.json(dbStudent);
    });
  });

  // Delete an student by id
  app.delete("/api/student/:id", function(req, res) {
    db.Student.destroy({ where: { id: req.params.id } }).then(function(dbStudent) {
      res.json(dbStudent);
    });
  });
};