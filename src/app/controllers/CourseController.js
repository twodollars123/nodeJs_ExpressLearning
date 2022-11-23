const { mongooseToObject } = require("../../ultis/mongoose");
const course = require("../models/course");

class CourseController {
  //get "/course/:slug"
  show(req, res, next) {
    console.log("a", req.params.slug);
    course
      .findOne({ slug: req.params.slug })
      .then((item) => {
        console.log(item);
        res.render("courseDetail", { item: mongooseToObject(item) });
      })
      .catch(next);
  }
}

module.exports = new CourseController();
