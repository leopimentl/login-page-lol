const inputs = document.querySelectorAll(".input")
const button = document.querySelector(".confirm-login")

const handleFocus = ({ target }) => {
    const label = target.previousElementSibling
    label.classList.add("label-active")

}

const handleBlur = ({ target }) => {
    const label = target.previousElementSibling
    if (target.value === "") {
        label.classList.remove("label-active")
    }
}

const handleChange = () => {
    const [username, password] = inputs
    
    if (username.value != "" && username.value.length >= 2 && password.value.length >= 1) {
        button.removeAttribute("disabled")
    } else {
        button.setAttribute('disabled', '')
    }
}

inputs.forEach((input) => {
    input.addEventListener('blur', handleBlur)
})

inputs.forEach((input) => {
    input.addEventListener('focus', handleFocus)
})

inputs.forEach((input) => input.addEventListener("input", handleChange))