(function(module) {

  function Project (opts) {
    this.author = opts.author;
    this.title = opts.title;
    this.category = opts.category;
    this.authorUrl = opts.authorUrl;
    this.publishedOn = opts.publishedOn;
    this.body = opts.body;
    this.picture = opts.picture;
  }

  Project.all = [];

  Project.loadAll = function(myData) {
    myData.sort(function(a,b) {
      return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
    });

    Project.all = myData.map(function(ele) {
      return new Project(ele);
    });
  };

  Project.grabAll = function(callback) {
    if(localStorage.myData) {
      Project.loadAll(JSON.parse(localStorage.myData));
      callback();
    } else {
      $.getJSON('/data/portfolioArticles.json', function(myData) {
        Project.loadAll(myData);

        var toCache = JSON.stringify(myData);
        localStorage.myData = toCache;
        callback();
      });

    }
  };

  module.Project = Project;
})(window);
