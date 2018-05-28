$(document).ready(function(){

  $("#submit").click(getMovieData);
});

function getMovieData(){
  var uri = "http://www.omdbapi.com/";
  $.ajax({
    type: "GET",
    url: uri,
    dataType: 'json',
    data: $("#f").serialize(),
    success: function(data){
      outputData(data)
      console.log(data);
    }
  });
  return false;
}

function outputData(d){
  var data = d.Search;
  console.log(data);
  var targetDiv = $("#movie-data-output");
  targetDiv.empty();
  for(var i = 0; i < data.length; i++){
    var img = data[i].Poster
    if(img === "N/A") img = "http://www.reelviews.net/resources/img/default_poster.jpg";
    targetDiv.append("<div class='col s3'><div class='card small'><div class='card-image'><img src='"+ img +"'></div><div class='card-content'><h6>"+data[i].Title+"</h6></div></div>");
  }

}
