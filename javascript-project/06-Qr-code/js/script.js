let imgBox = document.getElementById("imgBox")
let Qrimg = document.getElementById("qrimg")
let qrText = document.getElementById("qrtext")

function generateQR() {
    if (qrText.value.length > 0) {
        Qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img")
    }else{
        qrText.classList.add("error");
        setTimeout(()=>{
            qrText.classList.remove("error")
        },1000)
    }
}


