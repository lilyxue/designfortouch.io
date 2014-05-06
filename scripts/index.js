$(function () {

  $("#ws-tab").bind("click", "a", function (e) {
    var tab = $(e.target).attr("class").replace("tab-", "");
    $(".schedule-ws").removeClass("fe ix ur vd").addClass(tab);
  });

  var bannerHeight = $('.banner').height();
  var header = $('header');
  $(window).on('scroll', function () {
    if (document.body.scrollTop > bannerHeight) {
      header.addClass('shown');
    } else {
      header.removeClass('shown');
    }
  });

});

