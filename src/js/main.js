$(document).ready(function() {
  var about = $('#aboutUs');
  var menu = $('#menu');
  var press = $('#press');
  var locations = $('#locations');
  var contact = $('#contact');
  var order = $('#order');
  var isScrolling = false;

  fetch("data/menu.json")
  .then(function(response) {
    return response.json();
  }).then(compileTemplate);

  function compileTemplate(context) {
    var source = $("#menu-template").html();
    var template = Handlebars.compile(source);
    var html = template(context);
    $("#menuItems").append(html);
  }

  $(window).scroll(function() {
    if($(document).scrollTop() > 20) {
      $(".site-header").addClass("shrink");
    } else {
      $(".site-header").removeClass("shrink");
    }
  });

  $('.toggle-nav').click(function(event) {
    $(this).toggleClass('active');
    $('nav ul').toggleClass('active');
    event.preventDefault();
  })

  $(".slide").click(function(event) {
    var $li = $(this).parent();
    var linkHref = $(this).attr('href');

    $li.addClass("current").siblings().removeClass("current");
    isScrolling = true;
    $('html, body').animate({
      scrollTop: $(linkHref).offset().top
    },
    1500,
    null,
    function() {
      isScrolling = false;
    });
    event.preventDefault();
  });


  function getOffset(element) {
    return element.offset().top;
  };

  window.addEventListener('scroll', function() {
    if (isScrolling) {
      return;
    }
    if (window.scrollY >= getOffset(about) && window.scrollY <= getOffset(menu)) {
      $li = $('a[href="#aboutUs"]').parent();
      $li.addClass("current").siblings().removeClass("current");
    }
    if (window.scrollY >= getOffset(menu) && window.scrollY <= getOffset(press)) {
      $li = $('a[href="#menu"]').parent();
      $li.addClass("current").siblings().removeClass("current");
    }
    if (window.scrollY >= getOffset(press) && window.scrollY <= getOffset(locations)) {
      $li = $('a[href="#press"]').parent();
      $li.addClass("current").siblings().removeClass("current");
    }
    if (window.scrollY >= getOffset(locations) && window.scrollY <= getOffset(contact)) {
      $li = $('a[href="#locations"]').parent();
      $li.addClass("current").siblings().removeClass("current");
    }
    if (window.scrollY >= getOffset(contact) && window.scrollY <= getOffset(order)) {
      $li = $('a[href="#contact"]').parent();
      $li.addClass("current").siblings().removeClass("current");
    }
    if (window.scrollY >= getOffset(order) - 400) {
      $li = $('a[href="#order"]').parent();
      $li.addClass("current").siblings().removeClass("current");
    }
  });

});
