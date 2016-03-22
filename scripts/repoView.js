(function(module) {
  var repoView = {};

  var render = Handlebars.compile($('#repo-template').text());

  repoView.index = function() {
    if ($('#about ol li').length === 0 ) {
      $('#about ol').append(myRepos.filterMe('name').map(render));
    }
  };

  module.repoView = repoView;
})(window);
