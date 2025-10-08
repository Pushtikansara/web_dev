function validateForm() {
  let isValid = true;

  // Input elements
  let fullname = document.getElementById("fullname");
  let studentid = document.getElementById("studentid");
  let email = document.getElementById("email");
  let username = document.getElementById("username");
  let password = document.getElementById("password");
  let confirmpassword = document.getElementById("confirmpassword");
  let phone = document.getElementById("phone");

  // Remove old error spans if they exist
  document.querySelectorAll(".error").forEach(el => el.remove());

  // RegEx patterns
  const nameRegex = /^[a-zA-Z\s]+$/;
  const idRegex = /^[0-9CEce]{7}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@(charusat\.edu\.in)$/;
  const phoneRegex = /^[0-9]{10}$/;

  // Validation helper
  const showError = (element, message) => {
    const error = document.createElement("span");
    error.className = "error";
    error.style.color = "red";
    error.style.fontSize = "0.9em";
    error.innerText = message;
    element.parentNode.insertBefore(error, element.nextSibling);
    isValid = false;
  };

  // Full Name
  if (!nameRegex.test(fullname.value.trim())) {
    showError(fullname, "*Please enter a valid name (letters only)");
  }

  // Student ID
  if (!idRegex.test(studentid.value.trim())) {
    showError(studentid, "*Student ID must be 7 characters: digits or CE/ce");
  }

  // Email
  if (!emailRegex.test(email.value.trim()) ||
      (!email.value.trim().startsWith("24ce") && !email.value.trim().startsWith("d25ce"))
  ) {
    showError(email, "*Must be a valid charusat email starting with 24ce or d25ce");
  }

  // Username
  if (username.value.trim().length < 4) {
    showError(username, "*Username must be at least 4 characters");
  }

  // Password match
  if (password.value !== confirmpassword.value) {
    showError(confirmpassword, "*Passwords do not match");
  }

  // Phone number
  if (!phoneRegex.test(phone.value.trim())) {
    showError(phone, "*Phone number must be 10 digits");
  }

  // If form is valid, display registration details
  if (isValid) {
    displayRegistrationDetails();
  }

  return false; // Prevent form submission
}

function displayRegistrationDetails() {
  const fullname = document.getElementById("fullname").value;
  const studentid = document.getElementById("studentid").value;
  const email = document.getElementById("email").value;
  const username = document.getElementById("username").value;
  const phone = document.getElementById("phone").value;

  // Create URL with form data as parameters
  const successUrl = `registration-success.html?fullname=${encodeURIComponent(fullname)}&studentid=${encodeURIComponent(studentid)}&email=${encodeURIComponent(email)}&username=${encodeURIComponent(username)}&phone=${encodeURIComponent(phone)}`;
  
  // Redirect to success page
  window.location.href = successUrl;
}


// Add real-time validation for each input field
document.addEventListener("DOMContentLoaded", function() {
  const nameRegex = /^[a-zA-Z\s]+$/;
  const idRegex = /^[0-9CEce]{7}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@(charusat\.edu\.in)$/;
  const phoneRegex = /^[0-9]{10}$/;

  const fields = [
    { el: document.getElementById("fullname"), validate: function(val) { return nameRegex.test(val.trim()); }, msg: "*Please enter a valid name (letters only)" },
    { el: document.getElementById("studentid"), validate: function(val) { return idRegex.test(val.trim()); }, msg: "*Student ID must be 7 characters: digits or CE/ce" },
    { el: document.getElementById("email"), validate: function(val) { return emailRegex.test(val.trim()) && (val.trim().startsWith("24ce") || val.trim().startsWith("d25ce")); }, msg: "*Must be a valid charusat email starting with 24ce or d25ce" },
    { el: document.getElementById("username"), validate: function(val) { return val.trim().length >= 4; }, msg: "*Username must be at least 4 characters" },
    { el: document.getElementById("password"), validate: function(val) { return true; }, msg: "" }, // Password checked with confirm
    { el: document.getElementById("confirmpassword"), validate: function(val) { return val === document.getElementById("password").value; }, msg: "*Passwords do not match" },
    { el: document.getElementById("phone"), validate: function(val) { return phoneRegex.test(val.trim()); }, msg: "*Phone number must be 10 digits" },
  ];

  fields.forEach(field => {
    if (!field.el) return;
    field.el.addEventListener("input", function() {
      // Remove old error
      let next = field.el.nextSibling;
      if (next && next.className === "error") next.remove();
      
      // Remove all color classes
      field.el.classList.remove("error-border", "success-border");
      
      // Validate
      if (field.el.value.trim() === "") {
        // Empty field - no color
        return;
      } else if (!field.validate(field.el.value)) {
        // Invalid input - red border
        if (field.msg) {
          const error = document.createElement("span");
          error.className = "error";
          error.innerText = field.msg;
          field.el.parentNode.insertBefore(error, field.el.nextSibling);
        }
        field.el.classList.add("error-border");
      } else {
        // Valid input - green border
        field.el.classList.add("success-border");
      }
    });
  });
});