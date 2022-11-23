const newsRouter = require("./new");
const siteRouter = require("./site");
const courseRouter = require("./course");

function route(app) {
  app.use("/courses", courseRouter);

  app.use("/news", newsRouter);

  app.use("/", siteRouter);
}

module.exports = route;
