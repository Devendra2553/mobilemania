
$(document).ready(function () {
    $("#registration-form").submit(function () {
        var email = $("#email").val();
        var password = $("#password").val();

        if (email == "" || password == "") {

            $(".mobile-screen").css("background-color","antiquewhite");

            // $("p").animate({width: "235px"});
            $("p").css("background-color", "maroon");
            $("p").text("Check Again");

            $("#label_e").css("color", "maroon");
            $("#email").css("border-color", "maroon");

            $("#label_p").css("color", "maroon");
            $("#password").css("border-color", "maroon");

            $("button").css("background-color", "maroon");
            
            $(".register").css("color", "maroon");
            $(".register").css("border", "solid maroon");
            return false;
        }
    });
});