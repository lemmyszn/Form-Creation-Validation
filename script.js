document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Function to validate username
    function validateUsername(username) {
        if (username.length < 3) {
            return 'Username must be at least 3 characters long';
        }
        return '';
    }

    // Function to validate email
    function validateEmail(email) {
        if (!email.includes('@') || !email.includes('.')) {
            return 'Please enter a valid email address';
        }
        return '';
    }

    // Function to validate password
    function validatePassword(password) {
        if (password.length < 8) {
            return 'Password must be at least 8 characters long';
        }
        return '';
    }

    // Function to display feedback
    function displayFeedback(isValid, messages) {
        feedbackDiv.style.display = 'block';
        
        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745';
            feedbackDiv.style.backgroundColor = '#d4edda';
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545';
            feedbackDiv.style.backgroundColor = '#ffbaba';
        }
    }

    // Function to handle form submission
    function handleSubmit(event) {
        event.preventDefault();

        // Get and trim input values
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Validate all fields
        const usernameError = validateUsername(username);
        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);

        // Collect all error messages
        const messages = [usernameError, emailError, passwordError].filter(msg => msg !== '');

        // Check if form is valid
        const isValid = messages.length === 0;

        // Display feedback
        displayFeedback(isValid, messages);
    }

    // Add submit event listener to form
    form.addEventListener('submit', handleSubmit);
}); 