**let imgBox = document.getElementById("imgBox");
let Qrimg = document.getElementById("qrimg");
let qrText = document.getElementById("qrtext");

function generateQR() {
    if (qrText.value.length > 0) {
       6  let tempImg = new Image();
        tempImg.onload = function() {
            Qrimg.src = tempImg.src;
            imgBox.classList.add("show-img");
        };
        tempImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
    } else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }
}**