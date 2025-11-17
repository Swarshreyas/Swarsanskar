// Handle form submission
document.getElementById("signinForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Check if any field is empty
  if (username === "" || password === "") {
    alert("Please enter both username/email and password!");
    return;
  }

  // Get stored user info from signup (if exists)
  const storedUser = JSON.parse(localStorage.getItem("swarsanskarUser"));

  // Validate user login
  if (storedUser && (username === storedUser.email || username === storedUser.name) && password === storedUser.password) {
    alert(`Welcome back, ${storedUser.name}! 🎵\nYour ID: ${storedUser.userId}`);
    window.location.href = "web.html"; // redirect to dashboard
  } else {
    alert("Invalid username or password. Please try again!");
  }
});
