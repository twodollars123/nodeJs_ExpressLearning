const { mongooseToObject } = require("../../ultis/mongoose");
const course = require("../models/course");

class CourseController {
  //get "/course/:slug"
  show(req, res, next) {
    course
      .findOne({ slug: req.params.slug })
      .then((item) => {
        res.render("courseDetail", { item: mongooseToObject(item) });
      })
      .catch(next);
  }

  //[get] /courses/:id/edit
  edit(req, res, next) {
    course
      .findOne({ _id: req.params.id })
      .then((Course) => {
        res.render("courses/updateCourse", {
          Course: mongooseToObject(Course),
        });
      })
      .catch(next);
  }

  //get "course/create"
  create(req, res, next) {
    res.render("createNewCourse");
  }

  //post "course/store"
  store(req, res, next) {
    const formData = req.body;
    const newCourse = new course(formData);
    newCourse
      .save()
      .then(() => res.redirect("/"))
      .catch(next);
  }

  //[put] courses/:id
  update(req, res, next) {
    course
      .updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }
}

module.exports = new CourseController();
