$(function () {

  $("#ws-tab").bind("click", function (e) {
    if(e.target.tagName !== 'A'){
      return;
    }
    var tab = $(e.target).attr("class").replace("tab-", "");
    $(".schedule-ws").removeClass("fe ix ur vd").addClass(tab);
  });

  var bannerHeight = $('.banner').height();
  var header = $('header');
  $(window).on('scroll', function () {
    var scrollTop = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > bannerHeight) {
      header.addClass('shown');
    } else {
      header.removeClass('shown');
    }
  });

});
