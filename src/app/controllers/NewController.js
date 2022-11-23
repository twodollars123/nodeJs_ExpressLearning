class NewController {
  //get "/news"
  index(rep, res) {
    res.render("news");
  }

  //get "/news/:slug"
  show(rep, res) {
    res.send("new detail???");
  }
}

module.exports = new NewController();
