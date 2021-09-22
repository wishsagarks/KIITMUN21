var countDownDate = new Date("Jan 29, 2021 08:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (days<10){
  	days = "0"+days;
  }
  if (hours<10){
  	hours = "0"+hours;
  }
  if (minutes<10){
  	minutes = "0" + minutes;
  }
  if (seconds<10){
  	seconds = "0" + seconds;
  }
  jQuery('#beta-first .layer .timer .days').html("<div class='time'>" + days + "</div><p>days</p>");
  jQuery('#beta-first .layer .timer .hours').html("<div class='time'>" + hours + "</div><p>hours</p>");
  jQuery('#beta-first .layer .timer .minutes').html("<div class='time'>" + minutes + "</div><p>mins</p>");
  jQuery('#beta-first .layer .timer .seconds').html("<div class='time'>" + seconds + "</div><p>secs</p>");

}, 1000);

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
