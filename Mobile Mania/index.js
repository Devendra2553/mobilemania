$(document).ready(function () {
    
    $("#btn-to-signup").click(function () {
        $(".login").css("margin-top", "-500px");
    });
    $("#btn-to-login").click(function () {
        $(".login").css("margin-top", "0px");
    });

    $("#login-form").submit(function () {

        var email = $("#email").val();
        var password = $("#password").val();
2
        if (email == "" || password == "") {

            $("#label-login").css("background-color", "maroon");
            $("#label-login").text("Check Again");

            $("#label_e").css("color", "maroon");
            $("#email").css("border-color", "maroon");

            $("#label_p").css("color", "maroon");
            $("#password").css("border-color", "maroon");

            $("#btn-login").css("background-color", "white").css("color", "maroon").css("border", "1px solid maroon");
            $("#btn-to-signup").css("background-color", "maroon").css("color", "white").css("border", "1px solid maroon");

            return false;
        }
    });
});