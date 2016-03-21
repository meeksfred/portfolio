(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('#projects').hide();
    $('#about').fadeIn();
  };

  module.aboutController = aboutController;
})(window);
