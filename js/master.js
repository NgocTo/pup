$(document).ready(function(){
    $("#intro > a").click(function(e){
        e.preventDefault();
        $("#intro").fadeOut(700);
        $("#overlay").fadeOut(700);
        displayInterface();
    });

    function displayInterface() {
        $("#controls").css("width", "100%");
    }
    $("#black").click(function() {
        blackDog();
    })
    $("#white").click(function() {
        whiteDog();
    })
    $("#brown").click(function() {
        brownDog();
    })
    $("#gold").click(function() {
        goldDog();
    })
    $(".color").on("click", function () {
        $(".color").removeClass("selected");
        $(this).addClass("selected");
    });
    $(".mood").on("click", function () {
        $(".mood").removeClass("selected");
        $(this).addClass("selected");
    });
});
