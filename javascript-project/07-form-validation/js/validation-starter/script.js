let nameError = document.getElementById("name-error")
let phoneError = document.getElementById("phone-error")
let EmailError = document.getElementById("mail-error")
let msgError = document.getElementById("msg-error")
let submitError = document.getElementById("submit-error")
let toastbox = document.getElementById("toastbox")

function validateName() {
    
    if (name.length == 0) {
        nameError.innerHTML = "Name is required"
        return false
    } if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write full name"
        return false
    } else {
        nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
        return true;
    }
}
function validatePhone() {
    
    if (Phone.length == 0) {
        phoneError.innerHTML = "Phone no is required"
        return false
    }
    if (Phone.length !== 10) {
        phoneError.innerHTML = "Phone no must be 10 digits"
        return false

    }
    if (!Phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Only digit please"
        return false
    }
    phoneError.innerHTML = '<i class="fa-solid fa-check"></i>'
    return true

}

function validateMail() {
    let Mail = document.getElementById("contact-mail").value
    if (Mail.length == 0) {
        EmailError.innerHTML = "Email is required"
        return false
    }
    if (!Mail.match(/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)) {
        EmailError.innerHTML = "Email is invalid"
        return false
    }
    else {
        EmailError.innerHTML = '<i class="fa-solid fa-check"></i>'
        return true
    }

}

function validateMsg() {
    let msg = document.getElementById("contact-msg").value;
    let required = 30;
    let left = required - msg.length;

    if (left > 0) {
        msgError.innerHTML = left + " More characters required"
    } else {
        msgError.innerHTML = '<i class="fa-solid fa-check"></i>'
        return true
    }

}

function validateForm(event) {
    event.preventDefault();

    let name = document.getElementById("contact-name").value;
    let Phone = document.getElementById("contact-phone").value;

    validateForm(name, phone, msg)


    const obj = {
        name: name,
        phone: Phone
    }

    Array.push(obj)

    localStorage.setItem("key", JSON.stringify(Array))

    if (!validateName() || !validatePhone() || !validateMail() || !validateMsg()) {
        submitError.style.display = 'block';
        submitError.innerHTML = "Please fill all information";
        setTimeout(() => { submitError.style.display = "none" }, 3000);
        return false;
    }

    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = "Successfully Submitted";
    toastbox.appendChild(toast);


    setTimeout(() => {
        toast.classList.add("animate");
    }, 10);

    

}

document.getElementById("reset").reset()