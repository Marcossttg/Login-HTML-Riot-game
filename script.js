const inputs =document.querySelectorAll(".input");
const button = document.querySelector(".login-button")

const handleFocus = ({ target })=> {
    const span = target.previousElementSibling;
    span.classList.add("span-active");
}


const handleFocusOut = ({ target })=> {
    if(target.value === "") {
        const span = target.previousElementSibling;
        span.classList.remove("span-active");
    }
}

const handleCharge = () => {
    const [username, password] = inputs;

    if(username.value && password.value.length >= 8){
        button.removeAttribute("disabled");
    }else {
        button.setAttribute("disabled", "")
    }
}

/* focus nome/senha */
inputs.forEach((input)=> {
    input.addEventListener("focus", handleFocus);
})

inputs.forEach((input)=>{
    input.addEventListener("focusout", handleFocusOut);

})


/* button login */
inputs.forEach((input)=>{
    input.addEventListener("input", handleCharge);

})