const { arrayToObject } = require("../../ultis/mongoose");
const course = require("../models/course");

class SiteController {
  home(rep, res, next) {
    // course.find({}, function (err, courses) {
    //   if (!err) {
    //     res.json(courses);
    //   } else {
    //     res.status(400).json({ error: "ERROR!!!" });
    //   }
    // });

    //promise

    course
      .find({})
      .then((courses) =>
        res.render("home", { courses: arrayToObject(courses) })
      )
      .catch(next);
  }

  search(rep, res) {
    res.send("search");
  }
}

module.exports = new SiteController();
