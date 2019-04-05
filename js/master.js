$(document).ready(function(){
    $("#intro > a").click(function(e){
        e.preventDefault();
        $("#intro").fadeOut(700);
        $("#overlay").fadeOut(700);
        displayInterface();
    });

    $("#toggleInterface").click(function(e){
        $( "#controls" ).toggle(300, "linear");
        if($("#toggleInterface").text() == "Close controls <") {
            $("#toggleInterface").text("See controls >");
        } else if ($("#toggleInterface").text() == "See controls >"){
            $("#toggleInterface").text("Close controls <");
        }
    });

    function displayInterface() {
        $("#controls").css("width", "100%");
    }
    $(".color").on("click", function () {
        $(".color").removeClass("selected");
        $(this).addClass("selected");
    });
    $(".mood").on("click", function () {
        $(".mood").removeClass("selected");
        $(this).addClass("selected");
    });
});

