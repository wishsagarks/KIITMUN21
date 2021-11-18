function updateTimer() {
  future = Date.parse("Dec 17, 2021 11:30:00");
  now = new Date();
  diff = future - now;

  days = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours = Math.floor(diff / (1000 * 60 * 60));
  mins = Math.floor(diff / (1000 * 60));
  secs = Math.floor(diff / 1000);

  d = days;
  h = hours - days * 24;
  m = mins - hours * 60;
  s = secs - mins * 60;

  document.getElementById("timer")
      .innerHTML =
      '<div>' + d + '<span>days</span></div>' +
      '<div>' + h + '<span>hours</span></div>' +
      '<div>' + m + '<span>minutes</span></div>' +
      '<div>' + s + '<span>seconds</span></div>';
}
setInterval('updateTimer()', 1000);

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
