module.exports = router => {
  // render handlebars home page
  router.get("/", (req, res) => {
    res.render("home");
  });
  // render handlebars saved page
  router.get("/saved", (req, res) => {
    res.render("saved");
  });
}