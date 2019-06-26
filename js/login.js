$(function () {

    $.ajaxSetup({
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true
    });

    $('#login-form').on('submit', (function (e) {
        e.preventDefault();
        let user = {
            username: $("#username").val(),
            password: $("#password").val()
        };
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/users/login',
            dataType: 'json',
            data: user,
            success: function (reply) {
                console.log(reply);
                alert("Your are logged in!");
                window.location.href = '/heros.html';
            },
            error: function () {
                alert("Username or Password do not match");
                $("#login-form").trigger('reset');
            }

        });
    }));
});