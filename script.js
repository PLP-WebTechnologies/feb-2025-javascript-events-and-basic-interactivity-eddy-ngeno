// Event Handling
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("You clicked the button!");
});

document.getElementById("hoverBtn").addEventListener("mouseover", () => {
  alert("You hovered over me!");
});

document.addEventListener("keydown", (event) => {
  document.getElementById("keypressMsg").textContent = `You pressed: ${event.key}`;
});

document.getElementById("secretBtn").addEventListener("dblclick", () => {
  alert("🎉 You discovered the secret double-click!");
});

// Interactive Elements
document.getElementById("colorBtn").addEventListener("click", () => {
  document.getElementById("colorBtn").style.backgroundColor = "lightgreen";
});

function openTab(tabId) {
  document.getElementById("tab1").style.display = "none";
  document.getElementById("tab2").style.display = "none";
  document.getElementById(tabId).style.display = "block";
}

const images = [
  "https://via.placeholder.com/200/ff7f7f",
  "https://via.placeholder.com/200/7fcfff",
  "https://via.placeholder.com/200/7fff7f"
];
let currentImg = 0;
function nextImage() {
  currentImg = (currentImg + 1) % images.length;
  document.getElementById("galleryImg").src = images[currentImg];
}

// Form Validation
document.getElementById("myForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("formMsg");

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!email.match(emailPattern)) {
    message.textContent = "Please enter a valid email.";
  } else if (password.length < 8) {
    message.textContent = "Password must be at least 8 characters.";
  } else {
    message.style.color = "green";
    message.textContent = "Form submitted successfully!";
  }
});
