document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var email = document.getElementById("email").value;
    var emailError = document.getElementById("email-error");
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    var passwordError = document.getElementById("password-error");
    var confirmPasswordError = document.getElementById("confirm-password-error");

    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email is valid
    if (!emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email address";
        emailError.style.display = "block";
    } else {
        emailError.style.display = "none"; 
    }

    // Check if the password meets the length and complexity requirements
    if (password.length < 8 || !(/[a-z]/.test(password)) || !(/[A-Z]/.test(password))) {
        passwordError.textContent = "Password must be at least 8 characters long and contain both uppercase and lowercase letters";
        passwordError.style.display = "block";
    } else {
        passwordError.style.display = "none"; 
    }





    

    // Check if the confirm password matches the password
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match";
        confirmPasswordError.style.display = "block"; 
    } else {
        confirmPasswordError.style.display = "none";
    }

    
    if (emailError.style.display === "none" && passwordError.style.display === "none" && confirmPasswordError.style.display === "none") {
        window.location.href = "home.html"; 
    }
});
