



$(window).on("load", function() { 
  $("body").css("overflow-y","hidden");
  setTimeout(function(){
      $(".loading").addClass("fadeOut");       
      $(".loading").hide();
      $(".body-content").addClass("fadeIn");
      $(".body-content").css("opacity","1");
      $("body").css("overflow-y","auto");
  },0.5*1000);
});
$("#myCarousel").carousel();
$(function () {
  $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

      var $navItem = $(".menu-item");
      $navItem.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      var $navLogo = $(".nav-logo");
      var navLogo = document.getElementById('img2');
      
      if($(this).scrollTop() > $nav.height())
          navLogo.setAttribute("src", "./assets/img/logo/e-mun-logo-black.png");
      else
        navLogo.setAttribute("src", "./assets/img/logo/e-mun-logo.png");
  });
});
