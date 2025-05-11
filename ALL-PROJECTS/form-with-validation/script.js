const userName = document.querySelector("#Username");
const password = document.querySelector("#Password");
const img = document.querySelector("#imageUpload");
const phoneNo = document.querySelector("#Phonenum");
const mail = document.querySelector("#mail");
const form = document.querySelector("form");

const invalidUser = document.querySelector("#invalidUser");
const invalidPassword = document.querySelector("#invalidPassword");
const invalidImage = document.querySelector("#invalidImage");
const invalidNumber = document.querySelector("#invalidNumber");
const invalidMail = document.querySelector("#invalidMail");

let toastBox = document.getElementById("toastBox");
let toastSound = document.getElementById("toastSound");

function playSound() {
  toastSound.currentTime = 0;
  toastSound.play();
}

function createToast(message, type = "success") {
  let toast = document.createElement("div");
  toast.classList.add("toast", type);

  const icon = `<i class="fa-solid ${type === "success" ? "fa-circle-check success" : "fa-circle-xmark error"}"></i>`;
  toast.innerHTML = `${icon} ${message}`;
  toastBox.appendChild(toast);
  playSound();

  setTimeout(() => {
    toast.remove();
  }, 6000);
}

function applyShakeEffect(element) {
  element.classList.add("shake", "error");
  setTimeout(() => {
    element.classList.remove("shake");
  }, 300);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  // Reset styles
  [userName, password, img, phoneNo, mail].forEach(el => el.classList.remove("error"));

  // Username
  if (!userName.value.trim()) {
    invalidUser.textContent = "Please enter your username";
    invalidUser.style.display = "block";
    applyShakeEffect(userName);
    isValid = false;
  } else {
    invalidUser.textContent = "";
    invalidUser.style.display = "none";
  }

  // Password
  if (!password.value.trim()) {
    invalidPassword.textContent = "Please enter your password";
    invalidPassword.style.display = "block";
    applyShakeEffect(password);
    isValid = false;
  } else {
    invalidPassword.textContent = "";
    invalidPassword.style.display = "none";
  }

  // Image
  if (!img.files || img.files.length === 0) {
    invalidImage.textContent = "Please select an image";
    invalidImage.style.display = "block";
    applyShakeEffect(img);
    isValid = false;
  } else {
    invalidImage.textContent = "";
    invalidImage.style.display = "none";
  }

  // Phone
  if (!phoneNo.value.trim() || phoneNo.value.length < 10) {
    invalidNumber.textContent = "Please enter a valid phone number";
    invalidNumber.style.display = "block";
    applyShakeEffect(phoneNo);
    isValid = false;
  } else {
    invalidNumber.textContent = "";
    invalidNumber.style.display = "none";
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!mail.value.trim() || !emailRegex.test(mail.value)) {
    invalidMail.textContent = "Please enter a valid email";
    invalidMail.style.display = "block";
    applyShakeEffect(mail);
    isValid = false;
  } else {
    invalidMail.textContent = "";
    invalidMail.style.display = "none";
  }

  if (isValid) {
    const formData = {
      name: userName.value,
      pass: password.value,
      Img: img.value,
      Phone: phoneNo.value,
      Email: mail.value,
    };

    // Save to localStorage
    localStorage.setItem("formData", JSON.stringify(formData));

    createToast("Successfully Submitted ✅", "success");
    alert("Form submitted successfully!");

    form.reset();
  } else {
    createToast("Please fix the errors and try again ❌", "error");
  }
});
