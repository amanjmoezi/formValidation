const FormDeta = document.querySelector("form");
const inputEmail = document.querySelector("input.user-input");
const emailMsg = document.querySelector(".username-msg");
const inputPassword = document.querySelector("input.pass-input");
const passwordMsg = document.querySelector(".password-msg");
const statusElement = document.querySelector(".signin-status");
let IfloginTrue=false;
FormDeta.addEventListener("submit",validationForm)
function validationForm(e){
    e.preventDefault()
    const emailvalue = inputEmail.value
    const Passwordvalue = inputPassword.value
    IfloginTrue=false;
    if (emailvalue.indexOf("@")===-1|| emailvalue.indexOf(".")===-1 ) {
        emailMsg.innerText = "چرا مثل ادم یه ایمیل وارد نمی کنیی😒"
        IfloginTrue=false;
    }else if(emailvalue.indexOf("@.")!=-1)
    {
        emailMsg.innerText = "مثه ادم یه ایمیل وارد کن چرا @ و . کنار هم می زاری";
        IfloginTrue=false;        
    }else if (Passwordvalue=="") {
        passwordMsg.innerText = "خالیه که نامرد!"
        IfloginTrue=false;
    }else{
        emailMsg.innerText = ""
        IfloginTrue=true;
        passwordMsg.innerText = ""
        
    }
    if (IfloginTrue===true) {
        submitform()
        console.log(IfloginTrue);
    }
}
function submitform() {
    const emailvalue = inputEmail.value
    const Passwordvalue = inputPassword.value
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
    body: JSON.stringify({
    email: emailvalue,
    password: Passwordvalue,
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  })
   .then((response) => response.json())
   .then((json) => {
       const emailApi = json.email;
        const passwordApi = json.password;
        console.log(emailApi);
        console.log(passwordApi);
        let btnlogin = document.querySelector("button.signin-button");
        let imglement = document.createElement("img")
        imglement.setAttribute("src","loading.gif")
        imglement.setAttribute("width","80px")
        btnlogin.innerText = ""
        btnlogin.appendChild(imglement)
            btnlogin.innerText = "ورود"
            if (emailvalue==emailApi||Passwordvalue==passwordApi) {
                statusElement.innerText = "خوش اومدی به سگ سیتی";
            }else
            {
                statusElement.classList.add("error")
                statusElement.innerText = "خوش نیومدی به سگ سیتی";
            }
   });

    
}
