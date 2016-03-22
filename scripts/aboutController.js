(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('#projects').hide();
    $('#about').fadeIn();
    myRepos.fetchRepos(repoView.index);
  };

  module.aboutController = aboutController;
})(window);
