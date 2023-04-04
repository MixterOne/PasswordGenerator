const empty = "";
const upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const loCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*=-_";

const pwLength = document.getElementById("length-text");
const upperCase = document.getElementById("txt-uppercase");
const lowerCase = document.getElementById("txt-lowercase");
const txtNumber = document.getElementById("txt-number");
const txtSymbol = document.getElementById("txt-symbol");
const submit = document.getElementById("submit");
const password = document.getElementById("password");

submit.addEventListener("click", () => {
    let initialPassword = empty;
    (upperCase.checked) ? initialPassword += upCase : "";
    (lowerCase.checked) ? initialPassword += loCase : "";
    (txtNumber.checked) ? initialPassword += number : "";
    (txtSymbol.checked) ? initialPassword += symbol : "";

    password.value = generatePassword(pwLength.value, initialPassword)
});

function generatePassword(l, initialPassword) {
    let pass = "";
    for (let i = 0; i < l; i++) {
        pass += initialPassword.charAt(Math.floor(Math.random() * initialPassword.length));
    }

    return pass;
}

// Copy password

const copy = document.getElementById("copy");

copy.addEventListener("click", () => {
    if (password.value == "") {
        alert("Por favor, faça a geração de uma senha")
    } else {
        password.selected();
        document.execCommand("copy");
        alert("Senha copiada!")
    }
})