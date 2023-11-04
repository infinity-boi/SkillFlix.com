$(document).ready(function() {
    $('#login-form').submit(function(event) {
        event.preventDefault();

        // Simulate login logic (replace with actual login validation)
        var username = $('#username').val();
        var password = $('#password').val();

        if (username === 'gourav' && password === '12112430') {
            // Successful login
            window.location.href = 'home.html'; // Redirect to the welcome page
        } else {
            // Display error message
            $('#error-message').text('Invalid username or password. Please try again.');
        }
    });
});
