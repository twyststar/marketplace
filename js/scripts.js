$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var prodPick = $("#product").val();
    var colorPick = $("#color").val();
    var coolPick = $("#coolness").val();

    $("#prodList").append("<li>"+prodPick+"</li>");
    $("#colorList").append("<li>"+colorPick+"</li>");
    $("#coolList").append("<li>"+coolPick+"</li>");


    $("#receipt").show();

    event.preventDefault();
  });
});
