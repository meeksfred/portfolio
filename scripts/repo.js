(function(module) {
  var myRepos = {};

  myRepos.all = [];

  myRepos.fetchRepos = function(callback) {
    $.get('github/users/meeksfred/repos?per_page=20&sort=updated')
      .done(function(data, message, xhr) {
        myRepos.all = data;
      })
      .done(callback);
  };

    // Now I need to filter for the correct data
  myRepos.filterMe = function(attr) {
    return myRepos.all.filter(function(instance) {
      return instance[attr];
    });
  };

  module.myRepos = myRepos;
})(window);
