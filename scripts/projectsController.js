(function(module) {
  var projectsController = {};

  projectsController.index = function() {
    Project.grabAll(projectView.initIndexPage);
    $('#about').hide();
    $('#projects').fadeIn();
  };

  module.projectsController = projectsController;
})(window);
