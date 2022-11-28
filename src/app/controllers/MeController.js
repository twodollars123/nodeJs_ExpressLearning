const { mongooseToObject, arrayToObject } = require("../../ultis/mongoose");
const course = require("../models/course");

class MeController {
  index(req, res, next) {
    res.send("me index");
  }

  //[get] /me/stored/courses
  storedCourses(req, res, next) {
    course
      .find({})
      .then((courses) =>
        res.render("me/storeCourses", { courses: arrayToObject(courses) })
      )
      .catch(next);
  }
}

module.exports = new MeController();
