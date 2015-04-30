exports.render = function(req, res) {
  res.render('index', {
    title: 'Hello the big wide world'
  });
};