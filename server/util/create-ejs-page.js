module.exports = function createPage (view, title, scripts, pageData) {
  var input = {
    title: title,
    page: view,
    pageData: pageData || {},
    scripts: scripts || [],
    activePages: {}
  };

  // decide which menu item activate
  var activeView = view;

  // highlight services when view is detail
  if (activeView == 'detail') input.activePages['services'] = 1;
  input.activePages[activeView] = 1;

  return function (req, res, next) {
    res.render('base', input);
  }
};