
// Header scroll and change width

$(window).scroll(function () {
  if ($(this).scrollTop()> 1) {
      $('.navbar').addClass('navbar-scorll')
  }else{
      $('.navbar').removeClass('navbar-scorll')
  }
})

$(document).on("scroll", function(){
  var pixels = $(document).scrollTop();
  var pageHeight = $(document).height() - $(window).height();
  var progress = 100 * pixels / pageHeight;
  
  $("div.progress").css("width", progress + "%");
})


  const popup = document.getElementById("popup");
  const toastbox = document.getElementById("toastbox");
  
  const nameError = document.getElementById("name-error");
  const phoneError = document.getElementById("phone-error");
  const EmailError = document.getElementById("mail-error");
  const msgError = document.getElementById("msg-error");
  const submitError = document.getElementById("submit-error");
  
  document.querySelector(".login-btn").addEventListener("click", () => {
    popup.classList.add("open-popup");
  });
  
  function validateName() {
    const name = document.getElementById("contact-name").value.trim();
    if (name.length === 0) {
      nameError.innerHTML = "Name is required";
      return false;
    }
    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
      nameError.innerHTML = "Write full name";
      return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
  }
  
  function validatePhone() {
    const phone = document.getElementById("contact-phone").value.trim();
    if (phone.length === 0) {
      phoneError.innerHTML = "Phone no is required";
      return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
      phoneError.innerHTML = "Phone no must be 10 digits";
      return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
  }
  
  function validateMail() {
    const mail = document.getElementById("contact-mail").value.trim();
    if (mail.length === 0) {
      EmailError.innerHTML = "Email is required";
      return false;
    }
    if (!mail.match(/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)) {
      EmailError.innerHTML = "Email is invalid";
      return false;
    }
    EmailError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
  }
  
  function validateMsg() {
    const msg = document.getElementById("contact-msg").value.trim();
    const required = 30;
    const left = required - msg.length;
    if (left > 0) {
      msgError.innerHTML = left + " more characters required";
      return false;
    }
    msgError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
  }
  
  document.getElementById("close").addEventListener("click", function (event) {
    event.preventDefault();
  
    const isValid =
      validateName() && validatePhone() && validateMail() && validateMsg();
  
    if (!isValid) {
      submitError.style.display = "block";
      submitError.innerHTML = "Please fill all information";
      setTimeout(() => {
        submitError.style.display = "none";
      }, 3000);
      return false;
    }
  
    // Store data
    const name = document.getElementById("contact-name").value.trim();
    const phone = document.getElementById("contact-phone").value.trim();
    const mail = document.getElementById("contact-mail").value.trim();
  
    let formDataArray = JSON.parse(localStorage.getItem("formDataArray")) || [];
    formDataArray.push({ name, phone, mail });
    localStorage.setItem("formDataArray", JSON.stringify(formDataArray));
  
    // Show toast
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = `<i class="fa-solid fa-check"></i> Successfully Submitted`;
    toastbox.appendChild(toast);
  
    setTimeout(() => {
      toast.remove();
    }, 5000);
    alert("Form submitted successfully!");
    // Close popup and reset form
    popup.classList.remove("open-popup");
    document.querySelector("#popup form").reset();
  
    // Clear error messages
    nameError.innerHTML = "";
    phoneError.innerHTML = "";
    EmailError.innerHTML = "";
    msgError.innerHTML = "";
    submitError.innerHTML = "";
  });
  document.addEventListener("click", function (event) {
    const isClickInside = popup.contains(event.target);
    const isLoginButton = event.target.closest(".login-btn");
  
    if (!isClickInside && !isLoginButton && popup.classList.contains("open-popup")) {
      popup.classList.remove("open-popup");
    }
  });  