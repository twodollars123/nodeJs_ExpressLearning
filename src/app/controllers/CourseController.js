const { mongooseToObject } = require("../../ultis/mongoose");
const course = require("../models/course");

class CourseController {
  //get "/course/:slug"
  show(req, res, next) {
    course
      .findOne({ slug: req.params.slug })
      .then((item) => {
        console.log(item);
        res.render("courseDetail", { item: mongooseToObject(item) });
      })
      .catch(next);
  }

  //get "course/create"
  create(req, res, next) {
    res.render("createNewCourse");
  }

  //post "course/store"
  store(req, res, next) {
    console.log("A", req.body);
    const formData = req.body;
    const newCourse = new course(formData);
    newCourse
      .save()
      .then(() => res.redirect("/"))
      .catch(next);
  }
}

module.exports = new CourseController();
