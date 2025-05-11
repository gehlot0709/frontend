const username = document.querySelector('input[type="text"]')
const password = document.querySelector('input[type="password"]')
const form = document.querySelector('form')
const submit = form.querySelector(' ')

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const obj ={
        name: username.value,
        Password:password.value
    }
    localStorage.setItem("Userinfo",JSON.stringify(obj))
    if (!obj.name) {
        alert("please enter your username")
    }if (!obj.Password) {
        alert("please enter your password")
    }else{
        alert("submit successfully")
    }
    username.value = "";
    password.value = "";

})