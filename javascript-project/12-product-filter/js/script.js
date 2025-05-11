const forms = document.querySelectorAll("form");
const progressBar = document.querySelector(".progress-bar");

const nextToFrom2 = () => {
    const email = forms[0].querySelector('input[type="email"]');
    const password = forms[0].querySelectorAll('input[type="password"]');

    if (!email.value.trim() || !password[0].value.trim() || !password[1].value.trim()) {
        alert("Please fill in all fields.");
        return;
    }

    if (password[0].value !== password[1].value) {
        alert("Passwords do not match.");
        return;
    }

    forms[0].style.left = '-100%';
    forms[1].style.left = '0';
    progressBar.style.width = '66%';
};

const prevToform1 = () => {
    forms[0].style.left = '0';
    forms[1].style.left = '100%';
    progressBar.style.width = '33%';
};

const nextToForm3 = () => {
    const inputs = forms[1].querySelectorAll('input');

    for (let input of inputs) {
        if (!input.value.trim()) {
            alert("Please fill in all personal details.");
            return;
        }
    }

    forms[2].style.left = '0';
    forms[1].style.left = '-100%';
    progressBar.style.width = '100%';
};

const prevToForm2 = () => {
    forms[2].style.left = '100%';
    forms[1].style.left = '0';
    progressBar.style.width = '66%';
};
