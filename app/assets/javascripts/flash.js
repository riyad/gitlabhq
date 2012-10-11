$(function(){
  $("#flash_container").slideDown("slow");
  $("#flash_container").click(function(){
    $(this).slideUp("slow");
  });
  setTimeout("hideFlash()",3000);
});

function hideFlash(){
  $("#flash_container").slideUp("slow");
}
