function validateForm() { 
  const name = document.getElementById("fullname").value.trim(); 
  const email = document.getElementById("email").value.trim(); 
  const username = document.getElementById("username").value.trim(); 
  const password = document.getElementById("password").value; 
  const confirmPassword = document.getElementById("confirmpassword").value; 
  const phone = document.getElementById("phone").value.trim(); 

  const nameRegex = /^[a-zA-Z\s]+$/; 
  const usernameRegex = /^[a-zA-Z0-9]{5,15}$/; 
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; 
  const phoneRegex = /^[0-9]{10}$/; 

  if (!nameRegex.test(name)) { 
    alert("Full Name should contain only letters and spaces."); 
    return false; 
  } 

  if (!usernameRegex.test(username)) { 
    alert("Username must be 5-15 characters and alphanumeric."); 
    return false; 
  } 

  if (!passwordRegex.test(password)) { 
    alert("Password must be at least 8 characters with letters, digits, and one special character."); 
    return false; 
  } 

  if (password !== confirmPassword) { 
    alert("Passwords do not match."); 
    return false; 
  } 

  if (!phoneRegex.test(phone)) { 
    alert("Phone number must be exactly 10 digits."); 
    return false; 
  } 

  alert(" Registration Successful!"); 
  return true; 
}
