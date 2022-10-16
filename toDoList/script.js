

$("button").click(function() {
  var userValue = $("input").val();
  $(".list").after("<h3>"+ userValue +"</h3>")

  $("h3").click(function() {
    $("h3").css("text-decoration", "line-through")
  });
});
