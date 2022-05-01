const FormDeta = document.querySelector("form");
const inputEmail = document.querySelector("input.user-input");
const emailMsg = document.querySelector(".username-msg");
const inputPassword = document.querySelector("input.pass-input");
const passwordMsg = document.querySelector(".password-msg");
let IfloginTrue=false;
FormDeta.addEventListener("submit",submitForm)
function submitForm(e){
    e.preventDefault()

}