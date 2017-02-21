$(document).ready(function() {

  fetch("/data/menu.json")
  .then(function(response) {
    return response.json();
  }).then(compileTemplate);

  function compileTemplate(context) {
    var source = $("#menu-template").html();
    var template = Handlebars.compile(source);
    var html = template(context);
    $("#column1").append(html);

    console.log(context);
    console.log(html);
  }

  $(window).scroll(function() {
    if($(document).scrollTop() > 20) {
      $(".site-header").addClass("shrink");
    } else {
      $(".site-header").removeClass("shrink");
    }
  });

  $(".slide").click(function(event) {
    var $li = $(this).parent();
    var linkHref = $(this).attr('href');

    $li.addClass("current").siblings().removeClass("current");

    $('html, body').animate({
      scrollTop: $(linkHref).offset().top
    }, 1500);

    event.preventDefault();
  });
});
