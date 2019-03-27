$(document).ready(function(){
    $("#intro > a").click(function(e){
        e.preventDefault();
        $("#intro").fadeOut(1500);
        $("#overlay").fadeOut(1500);
        displayInterface();
    });


    function displayInterface() {
        $("#overlay").removeClass('hide');
    }
});
