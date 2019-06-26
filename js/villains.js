$(function () {

    $.ajaxSetup({
        xhrFields: {
            withCredentials: true
        }
    });

    // alert("Hello");
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/users',
        // xhrFields: {
        //     withCredentials: true,
        // },
        // crossDomain: true,
        success: function (user) {
            console.log(user);
        },
        failure: function () {
            console.log('Sth went wrong!');
        }

    })
});