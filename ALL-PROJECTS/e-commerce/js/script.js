$(document).ready(function(){
    $('.toggle-aside').click(function(e){
      e.preventDefault();
      $('aside').toggleClass('active');
      $('.toggle-open, .toggle-close').toggleClass('d-none');
    });
  });
  

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 1) {
      $(".navbar").addClass("scrolled");
    } else {
      $(".navbar").removeClass("scrolled");
    }
  });
  