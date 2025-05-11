const endDate = " 18 april 2025 7:30 PM";
document.getElementById("end-date").innerText = endDate;
const input = document.querySelectorAll("input");

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000; // Fixing the calculation to countdown instead of counting up

    input[0].value = Math.floor(diff / 3600 / 24); // Days
    input[1].value = Math.floor(diff / 3600) % 24; // Hours
    input[2].value = Math.floor(diff / 60) % 60;  // Minutes
    input[3].value = Math.floor(diff) % 60; // Seconds
}


clock();

// Updating countdown every second
setInterval(clock, 1000);