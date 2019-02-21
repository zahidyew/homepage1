//Followed Codegrid's video tutorial on YT.
//I added the ability to hide mobile nav-bar when user clicked other parts of the web page.

//sticky nav bar when scrolled 
$(window).on("scroll", function() {
  //if scrolled add class and change background color of nav bar to black (value set in css).
  if($(window).scrollTop()) {
    $('nav').addClass('scrolled');
  }
  else {
    $('nav').removeClass('scrolled');
  }
});

//menu toggle button
$(document).ready(function() {
  //when clicked list the nav bar
  $(".menu-icon").on("click", function() {
    $("nav ul").toggleClass("showing");
  });
  //when clicked on other parts, hide the nav bar
  $("#main-content").on("click", function () {
    $("nav ul").removeClass("showing");
  });
  $(".sub-content").on("click", function () {
    $("nav ul").removeClass("showing");
  });
});

/* //menu toggle button
$(document).ready(function () {
  var isClicked = false;
  //when clicked list the nav bar
  $(".menu-icon").on("click", function () {
    isClicked = true;
    if (isClicked) {
      $("nav ul").toggleClass("showing");
      isClicked = false;
    }
    else {
      $("nav ul").removeClass("showing");
    }
  });
}); */
