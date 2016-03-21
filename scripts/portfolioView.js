(function(module) {

  var projectView = {};

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
    if ($('#projects article').length === 0 ) {
      Project.all.forEach(function(z){
        $('#projects').append(z.toHtml());
      });
    }


    projectView.populateFilters();
    projectView.categoryFilter();
  };

  module.projectView = projectView;
})(window);
