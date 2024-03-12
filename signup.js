document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-info');
    const messageBox = document.querySelector('.signup-messageBox');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const email = document.getElementById('email').value;

        // Perform validation
        if (!isValidUsername(username)) {
            showMessage('Invalid Username.', 1);
        } else if (!isValidPassword(password)) {
            showMessage('Invalid Password.', 1);
        } else if (!isValidEmail(email)) {
            showMessage('Invalid Email', 1);
        } else if (password !== confirmPassword) {
            showMessage('The Password is not the same', 1);
        } else {
            showMessage('Sign Up Successful!', 0);
        }
        
    });

    function isValidUsername(username) {
        // Check username requirements
        // Must be between 2 and 19 characters long.
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

    function showMessage(message, num) {
        let messageBox = document.querySelector('.signup-messageBox');
        // if messageBox doesn't exist, throws an error.
        if (!messageBox) {
            throw new Error('Message box element not found.');
        }
    
        messageBox.innerHTML = ''; // Clear previous message
        const messageParagraph = document.createElement('p');
        if (num = 1) {
            messageParagraph.textContent = `Error: ${message}`;
        } else if(num = 0) {
            messageParagraph.textContent = `${message}`;
        }else {
            messageParagraph.textContent = `Something went wrong...`;
        }
        messageBox.appendChild(messageParagraph);
        messageBox.style.display = 'block';
        console.log(messageBox)
    }
});