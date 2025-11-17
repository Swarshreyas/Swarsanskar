// Function to generate random user ID
function generateUserId() {
  const prefix = "SWAR";
  const randomNum = Math.floor(100000 + Math.random() * 900000); // 6-digit number
  return `${prefix}${randomNum}`;
}

// Handle form submission
document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent actual form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validation
  if (name === "" || email === "" || password === "") {
    alert("Please fill out all fields!");
    return;
  }

  // Generate a unique ID
  const userId = generateUserId();

  // (Optional) Store user data in local storage for testing
  const user = { name, email, password, userId };
  localStorage.setItem("swarsanskarUser", JSON.stringify(user));

  // Show confirmation
  alert(`Welcome, ${name}! 🎶\nYour Swarsanskar ID: ${userId}`);

  // Redirect to sign-in page
  window.location.href = "index.html";
});
