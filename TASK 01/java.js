const form = document.querySelector('form');
const thankYou = document.querySelector(".thank-you");
const nameInput = document.querySelector(
    'input[name="name"]'
    
);
const emailInput = document.querySelector(
    'input[name="email"]'
);
const messageInput = document.querySelector(
    'textarea[name="message"]'
);

const inputs = [nameInput, emailInput, messageInput];

let isFormValid = false;
let isValidationOn = false;

const resetElm = (elm) => {
  elm.classList.remove("invalid");
  elm.nextElementSibling.classList.add("hidden");
};

const invalidateElm = (elm) => {
    elm.classList.add("invalid");
    elm.nextElementSibling.classList.remove("hidden");
};

const validateInputs = () => {
    if (!isValidationOn) return;

     isFormValid = true;
     resetElm(nameInput);
     resetElm(emailInput);

     inputs.forEach(resetElm);

    nameInput.classList.remove("invalid");
    nameInput.nextElementSibling.classList.add("hidden");
    
    
if (!nameInput.value) {
    nameInput.classList.add("invalid");
    nameInput.nextElementSibling.classList.remove("hidden");
    isFormValid = false;
    invalideElm(nameInput);
 }

if (!isValidEmail(emailInput.value)) {
    isFormValid = false;
    invalideElm(emailInput);
 }


 if (!messageInput.value) {
    isFormValid = false;
    invalideElm(messageInput);
 }
};

form.addEventListener("submit", (e) => {
 e.preventDefault();
 isValidationOn = true;
 validateInputs();
 if (isFormValid) {
 form.remove();
 thankYou.classList.remove("hidden");
 }
});

nameInput.addEventListener('input', () =>{
validateInputs();
});

inputs.forEach((input) => {
    input.addEventListener("input", () => {
    validateInputs();
});
});