var projectView = {};

projectView.mainNav = function() {
  $('.head-nav').on('click', 'li', function () {
    $('.tab-content').hide();
    // $('#' + $(this).data('content')).show();
    $('#' + $(this).data('content')).fadeIn(); //I recommended that Max use a .fadeIn() method, to make the change between single tabs seem smoother.
  });

  $('.head-nav .tab:first').click();
};

$(document).ready(function() {
  projectView.mainNav();
});
