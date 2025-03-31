document.addEventListener("DOMContentLoaded", function () {
  // DOM elements
  const body = document.body;

  // Create and append the form elements dynamically
  const form = document.createElement("form");

  // Heading
  const heading = document.createElement("h1");
  heading.textContent = "Login Form";

  // Username field
  const usernameInput = document.createElement("input");
  usernameInput.type = "text";
  usernameInput.placeholder = "Username";
  usernameInput.id = "username";

  // Password field
  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.placeholder = "Password";
  passwordInput.id = "password";

  // Remember Me checkbox
  const checkboxLabel = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "checkbox";
  checkboxLabel.textContent = " Remember me.";
  checkboxLabel.prepend(checkbox);

  // Submit button
  const submitBtn = document.createElement("input");
  submitBtn.type = "submit";
  submitBtn.id = "submit";
  submitBtn.value = "Submit";

  // Existing user button
  const existingUserBtn = document.createElement("button");
  existingUserBtn.id = "existing";
  existingUserBtn.textContent = "Login as existing user";
  existingUserBtn.style.display = "none"; // Initially hidden

  // Append elements to form
  form.appendChild(heading);
  form.appendChild(usernameInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(passwordInput);
  form.appendChild(document.createElement("br"));
  form.appendChild(checkboxLabel);
  form.appendChild(document.createElement("br"));
  form.appendChild(submitBtn);

  // Append elements to body
  body.appendChild(form);
  body.appendChild(existingUserBtn);

  // Check if credentials exist in localStorage
  function checkStoredCredentials() {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
      existingUserBtn.style.display = "block"; // Show button
      existingUserBtn.addEventListener("click", function () {
        alert(`Logged in as ${savedUsername}`);
      });
    } else {
      existingUserBtn.style.display = "none"; // Hide button if no stored credentials
    }
  }

  checkStoredCredentials(); // Check on page load

  // Form submit event listener
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const rememberMe = checkbox.checked;

    if (!username || !password) {
      alert("Please enter username and password.");
      return;
    }

    alert(`Logged in as ${username}`);

    if (rememberMe) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }

    checkStoredCredentials(); // Update visibility of "Login as existing user"
  });
});
