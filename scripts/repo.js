(function(module) {
  var myRepos = {};

  myRepos.all = [];

  myRepos.fetchRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/users/meeksfred/repos?per_page=5&sort=updated',
      type: 'GET',
      headers: { 'Authorization': 'token ' + githubToken },
      success: function(data, message, xhr) {
        myRepos.all = data;
        callback();
      }
    });
  };

    // Now I need to filter for the correct data
  myRepos.filterMe = function(attr) {
    return myRepos.all.filter(function(instance) {
      return instance[attr];
    });
  };

  module.myRepos = myRepos;
})(window);
