document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');
    const messageBox = document.getElementById('message-box');
    const messageText = document.getElementById('message-text');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const email = document.getElementById('email').value;

        // Perform validation
        if (!isValidUsername(username) || !isValidPassword(password) || !isValidEmail(email) || password !== confirmPassword) {
            showMessage('Please check your inputs.');
        } else {
            showMessage('Sign up successful!');
        }
    });

    function isValidUsername(username) {
        // Check username requirements
        // Must be between 3 and 20 characters long.
        // Allowed characters: alphanumeric characters (letters A-Z, numbers 0-9), hyphens (-), and underscores (_).
        // Must start with a letter.
        // Cannot contain spaces or special characters other than hyphens and underscores.
        const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/;
        return usernameRegex.test(username);
    }

    function isValidPassword(password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+\[\]{}|;:'",.<>?/`~])[A-Za-z\d!@#$%^&*()-_=+\[\]{}|;:'",.<>?/`~]{8,}$/;
        return passwordRegex.test(password);
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showMessage(message) {
        messageText.textContent = message;
        messageBox.classList.remove('hidden');
        setTimeout(function() {
            messageBox.classList.add('hidden');
        }, 3000); 
    }
});
