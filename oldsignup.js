/* signup.html */
document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-info');
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting normally
       
        // Validation checks
        const username = this.querySelector('[name="username"]').value;
        const password = this.querySelector('[name="password"]').value;
        const confirmPassword = this.querySelector('[name="confirm-password"]').value;
        const email = this.querySelector('[name="email"]').value;
        let errorMessage = '';

        // Username validation
        if (!/^[A-Za-z]\s*[A-Za-z0-9_-]{2,19}$/.test(username)) {
            errorMessage += 'Username is invalid.\n';
        }

        // Password validation
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+[\]{}|;:'",.<>?/`~])[A-Za-z\d!@#$%^&*()\-_=+[\]{}|;:'",.<>?/`~]{8,}$/.test(password)) {
            errorMessage += 'Password is invalid.\n';
        }

        // Confirm Password validation
        if (password !== confirmPassword) {
            errorMessage += 'Passwords do not match.\n';
        }

        // Email validation
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            errorMessage += 'Email is invalid.\n';
        }

        if (errorMessage === '') {
            // If there are no errors, submit the form
            this.submit();
        } else {
            // Display error messages
            displayMessage(errorMessage);
        }
    });
});


function displayMessage(message) {
    let messageBox = document.querySelector('.signup-messageBox');
    // if messageBox doesn't exist, throws an error.
    if (!messageBox) {
        throw new Error('Message box element not found.');
    }

    messageBox.innerHTML = ''; // Clear previous message
    const messageParagraph = document.createElement('p');
    if (message) {
        messageParagraph.textContent = `Error: ${message}`;
    } else {
        messageParagraph.textContent = 'Signup successful!';
    }
    messageBox.appendChild(messageParagraph);
}