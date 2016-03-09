var projectView = {};

projectView.mainNav = function() {
  $('.head-nav').on('click', 'li', function () {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).show();
  });

  $('.head-nav .tab:first').click();
};

$(document).ready(function() {
  projectView.mainNav();
});
