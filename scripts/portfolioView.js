var projectView = {};

projectView.mainNav = function() {
  $('.head-nav').on('click', 'li', function () {
    $('.tab-content').hide();
    // $('#' + $(this).data('content')).show();
    $('#' + $(this).data('content')).fadeIn(); //I recommended that Max use a .fadeIn() method, to make the change between single tabs seem smoother.
  });

  $('.head-nav .tab:first').click();
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
      // $('project.template').hide();
    }
  });
};

projectView.initIndexPage = function() {
  Project.all.forEach(function(z){
    $('#projects').append(z.toHtml());
  });
};

$(document).ready(function() {
  projectView.mainNav();
  projectView.populateFilters();
  projectView.categoryFilter();
});
