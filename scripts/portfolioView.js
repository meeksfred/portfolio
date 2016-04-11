(function(module) {

  var projectView = {};

  var renderHtml = function(project) {
    var template = Handlebars.compile($('#project-template').text());

    this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
    this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';

    return template(project);
  };

  projectView.populateFilters = function() {
    $('article').each(function() {
      if (!$(this).hasClass('template')) {
        val = $(this).attr('data-category');
        var optionTag = '<option value="' + val + '">' + val + '</option>';
        if ($('#category-filter option[value="' + val + '"]').length === 0) {
          $('#category-filter').append(optionTag);
        }
      }
    });
  };

  projectView.categoryFilter = function() {
    $('#category-filter').on('change', function() {
      if ($(this).val()) {
        $('article').hide();
        $('article[data-category="' + $(this).val() + '"]').fadeIn();
      } else {
        $('article').fadeIn();
      }
    });
  };

  projectView.initIndexPage = function() {
    $('#projects').empty();
    Project.all.forEach(function(z){
      $('#projects').append(renderHtml(z));
    });


    projectView.populateFilters();
    projectView.categoryFilter();
  };

  module.projectView = projectView;
})(window);
