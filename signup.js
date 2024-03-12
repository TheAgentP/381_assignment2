document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-info');
    const messageBox = document.querySelector('.signup-messageBox');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const email = document.getElementById('email').value;

        // creates empty string
        let message = '';
        // Perform validation
        if (!isValidUsername(username)) {
            message = appendMessage(message, 'Check the Username.');
        }
        if (!isValidPassword(password)) {
            message = appendMessage(message, 'Check the Password.');
        }
        if (!isValidEmail(email)) {
            message = appendMessage(message, 'Check the Email.');
        }
        if (password !== confirmPassword) {
            message = appendMessage(message, 'Password doesn\'t match.')
        }
        
        showMessage(message);
        
    });

    function appendMessage(message, string){
        if (message == ''){
            return string;
        }else{
            return message + "\n" + string;
        }
    }
    
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
        /*    
            Each Component will make sure that:
            (?=.*[a-z]): Contains at least one lowercase letter ([a-z]).
            (?=.*[A-Z]): Contains at least one uppercase letter ([A-Z]).
            (?=.*\d): Contains at least one digit (\d).
            (?=.*[!@#$%^&*()-_=+\[\]{}|;:'",.<>?/~.])`: Contains at least one special character from the allowed list.
            [A-Za-z\d!@#$%^&*()-_=+\[\]{}|;:'",.<>?/~.]`: Matches any of the allowed characters (letters, digits, or special characters).
            {8,}: Must be at least 8 characters long.   
            */

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+\[\]{}|;:'",.<>?/`~])[A-Za-z\d!@#$%^&*()-_=+\[\]{}|;:'",.<>?/`~]{8,}$/;
        return passwordRegex.test(password);
    }

    function isValidEmail(email) {
        /*
        Each Component will make sure that
        [^\s@]+: Matches one or more characters that are not whitespace (\s) or the "@" symbol.
        @: Matches with "@" symbol.
        [^\s@]+: Domain, Matches one or more characters that are not whitespace or the "@" symbol.
        \.: Matches with dot literal.
        [^\s@]+: Top-Level Domain, Matches one or more characters that are not whitespace or the "@" symbol.(e.g., .com, .net, .io).
        */                 
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    
    function showMessage(message) {
        let messageBox = document.querySelector('.signup-messageBox');
        // if messageBox doesn't exist, throws an error.
        if (!messageBox) {
            throw new Error('Message box element not found.');
        }
    
        messageBox.innerHTML = ''; // Clear previous message
        const messageParagraph = document.createElement('p');
        // if message is empty, it means it was successful!
        if(message == ''){
            messageParagraph.textContent = `Sign Up Successful!`;
        }else{
            messageParagraph.textContent = `Error(s):\n${message}`;
        }
        num = 2;
        messageBox.appendChild(messageParagraph);
        messageBox.style.display = 'block';
        console.log(messageBox)
    }
});