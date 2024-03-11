/* login.html script */

document.getElementById('login-button').addEventListener('click', function() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let messageBox = document.querySelector('.messageBox');
   
    fetch('https://jsonplaceholder.typicode.com/users')
    // Cases if API was successfully opened
    .then(response => {
        if (!response.ok) {
            // Throws an Error is there was an error opening the API
            throw new Error('Network response was not ok');
        }
        // Else, Returns the JSON file
        return response.json();
    })

    .then(users => {
        // finds profile that matches the inputted username and password, if !user, prints error
        const user = users.find(u => u.email === password && u.name === username);
        if (user) {
            // Function call to showMessage with appropriate messages
            showMessage('Login Successful!');
        } else {
            // Shows Error for when it never matches
            showMessage('Login Failed... Invalid Username or Password.');
        }
    })

    .catch(error => {
        alert('Failed to fetch user data. Please try again.');
        console.error('There was a problem with the fetch operation:', error);
    });

    function showMessage(message) {
        if (!messageBox) {
            console.error('Message box element not found.');
            return;
        }

        messageBox.textContent = message;
        messageBox.className = 'messageBox'; // Reset class
        messageBox.style.display = 'block'; // Show message box
    }
});