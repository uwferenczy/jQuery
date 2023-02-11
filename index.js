$("h1").addClass("big-title margin-50");
$("a").attr("href","https://www.yahoo.com")
$("h1").click(function(){
    $("h1").css("color", "purple");
})

$("button").click(function(){
    $("h1").slideToggle();
})

$(document).keypress(function(event) {
    $("h1").text(event.key);
})

$("h1").on("mouseover", function(){
    $("h1").css("color", "purple");
})