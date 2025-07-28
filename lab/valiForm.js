document.addEventListener("DOMContentLoaded", function () {
  // Regex patterns
  const nameRegex = /^[a-zA-Z\s]+$/;
  const usernameRegex = /^[a-zA-Z0-9]{5,15}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const phoneRegex = /^[0-9]{10}$/;
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  // Input elements
  const fullnameInput = document.getElementById("fullname");
  const studentidInput = document.getElementById("studentid");
  const emailInput = document.getElementById("email");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const confirmpasswordInput = document.getElementById("confirmpassword");
  const phoneInput = document.getElementById("phone");

  // Helper function
  function showError(inputId, message) {
    document.getElementById(inputId + "Error").textContent = message;
    alert(message);
  }

  function clearError(inputId) {
    document.getElementById(inputId + "Error").textContent = "";
  }

  // Full Name
  fullnameInput.addEventListener("blur", function () {
    const name = fullnameInput.value.trim();
    if (!nameRegex.test(name)) {
      showError("fullname", "Name can only contain letters and spaces.");
    } else {
      clearError("fullname");
    }
  });

  // Student ID - just check if it's empty
  studentidInput.addEventListener("blur", function () {
    if (studentidInput.value.trim() === "") {
      showError("studentid", "Student ID is required.");
    } else {
      clearError("studentid");
    }
  });

  // Email
  emailInput.addEventListener("blur", function () {
    if (!emailPattern.test(emailInput.value.trim())) {
      showError("email", "Enter a valid email address.");
    } else {
      clearError("email");
    }
  });

  // Username
  usernameInput.addEventListener("blur", function () {
    if (!usernameRegex.test(usernameInput.value.trim())) {
      showError("username", "Username must be 5–15 characters, letters and numbers only.");
    } else {
      clearError("username");
    }
  });

  // Password
  passwordInput.addEventListener("blur", function () {
    if (!passwordRegex.test(passwordInput.value)) {
      showError("password", "Password must contain 8+ characters, 1 letter, 1 number, 1 special symbol.");
    } else {
      clearError("password");
    }
  });

  // Confirm Password
  confirmpasswordInput.addEventListener("blur", function () {
    if (confirmpasswordInput.value !== passwordInput.value) {
      showError("confirmpassword", "Passwords do not match.");
    } else {
      clearError("confirmpassword");
    }
  });

  // Phone
  phoneInput.addEventListener("blur", function () {
    if (!phoneRegex.test(phoneInput.value.trim())) {
      showError("phone", "Phone number must be 10 digits.");
    } else {
      clearError("phone");
    }
  });
});
