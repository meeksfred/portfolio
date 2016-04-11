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

  Project.renderHtml = function() {
    var template = Handlebars.compile($('#project-template').text());

    this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
    this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';

    return template(this);
  };

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
