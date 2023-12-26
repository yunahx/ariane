(function($){
$(document).ready(function() {
$("a[title]").style_my_tooltips({
tip_follows_cursor:false,
tip_delay_time:90,
tip_fade_speed:600,
attribute:"title"
});
});
})(jQuery);

function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablink;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";}


  document.getElementById(pageName).style.display = "block";
  
  elmnt.style.backgroundColor = color;
}
document.getElementById("defaultOpen").click();


$(document).ready(function(){
  $(".tablink").click(function(){
    $(".postholder").hide();
        $(".notes").hide();
  });
  $(".tabsclose").click(function(){
    $(".postholder").show();
        $(".notes").show();
  });
});