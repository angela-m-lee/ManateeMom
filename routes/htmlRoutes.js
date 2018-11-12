var db = require("../models");

module.exports = function (app) {
    // Load index page
    app.get("/", function (req, res) {
        db.Example.findAll({}).then(function (dbExamples) {
            res.render("index", {
                msg: "Welcome!",
                examples: dbExamples
            });
        });
    });

    // Load example page and pass in an example by id
    app.get("/example/:id", function (req, res) {
        db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
            res.render("example", {
                example: dbExample
            });
        });
    });

    //Get all songs
    app.get("/student", function (req, res) {
        db.Student.findAll({}).then(function (dbStudent) {
            db.Class.findAll({}).then(function (dbClass) {
                db.Assignment.findAll({}).then(function (dbAssignment) {
                    res.render("student", {
                        msg: "here is your info",
                        student: dbStudent,
                        class: dbClass,
                        assignment: dbAssignment
                    });
                });
            });
        })

    });

    // Render 404 page for any unmatched routes
    app.get("*", function (req, res) {
        res.render("404");
    });
};