
$(function(){

  $("#ws-tab").bind("click", "a", function(e){
    var tab = $(e.target).attr("class").replace("tab-","");
    $(".schedule-ws").removeClass("fe ix ur vd").addClass(tab);
  });
  
  $(window).on('scroll',function(e){
    console.log(e);
  });
});

