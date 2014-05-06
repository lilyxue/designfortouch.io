$(function () {

  // 工作坊切换
  $("#ws-tab").bind("click", function (e) {
    if(e.target.tagName !== 'A'){
      return;
    }
    var tab = $(e.target).attr("class").replace("tab-", "");
    $(".schedule-ws").removeClass("fe ix ur vd").addClass(tab);
  });

  // 固顶 header
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
  
  // Google Maps

  var map, canvas = $('.map')[0];
  var pos = new google.maps.LatLng(31.218967,121.416349);
  function initialize() {
    var mapOptions = {
      zoom: 15,
      center: pos,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(canvas,mapOptions);

    var marker = new google.maps.Marker({map: map, position: pos});
    var infowindow = new google.maps.InfoWindow({content: "<b>龙之梦万丽酒店10楼</b><br/>长宁区长宁路1018号（近汇川路）<br/> 上海市" });
    google.maps.event.addListener(marker, "click", function () {infowindow.open(map, marker);});
    infowindow.open(map, marker);
  }

  google.maps.event.addDomListener(window, 'load', initialize);

});
