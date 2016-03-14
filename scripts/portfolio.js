function Project (opts) {
  this.author = opts.author;
  this.title = opts.title;
  this.category = opts.category;
  this.authorUrl = opts.authorUrl;
  this.publishedOn = opts.publishedOn;
  this.body = opts.body;
}

Project.all = [];

Project.prototype.toHtml = function() {
  var source = $('#project-template').html();
  var template = Handlebars.compile(source);

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';

  return template(this);
};

Project.loadAll = function(myData) {
  myData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });

  myData.forEach(function(ex) {
    Project.all.push(new Project(ex));
  });
};

Project.grabAll = function() {
  if(localStorage.myData) {
    Project.loadAll(JSON.parse(localStorage.myData));
    projectView.initIndexPage();
  } else {
    $.getJSON('/data/portfolioArticles.json', function(myData) {
      Project.loadAll(myData);

      var toCache = JSON.stringify(myData);
      localStorage.myData = toCache;
    }).error(function(err) {
      console.log(err);
    });

    projectView.initIndexPage();
  }
};
