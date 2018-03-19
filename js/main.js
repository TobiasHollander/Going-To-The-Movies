$(document).ready(function(){
  initIncludes();
  $("#sumbit").click(getMovieData);
});

function initIncludes(){
  $("#nav-include").load('/includes/nav.html');
}

function getMovieData(){
  var uri = "http://www.omdbapi.com/";
  $.ajax({
    type: "GET",
    url: uri,
    dataType: 'json',
    data: $("#f").serialize(),
    success: function(data){
      console.log(data);
    }
  });
  return false;
}
