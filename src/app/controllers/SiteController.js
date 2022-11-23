const course = require("../models/course");

class SiteController {
  home(rep, res) {
    course.find({}, function (err, courses) {
      if (!err) {
        res.json(courses);
      } else {
        res.status(400).json({ error: "ERROR!!!" });
      }
    });
  }

  search(rep, res) {
    res.send("search");
  }
}

module.exports = new SiteController();
