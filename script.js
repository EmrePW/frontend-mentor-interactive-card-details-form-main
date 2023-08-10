
const card_number = document.getElementById('card-number');
const card_owner_name = document.getElementById('card-owner-name');
const card_month = document.getElementById("month");
const card_year = document.getElementById("year");
const card_cvc = document.getElementById('card-cvc');

const name1 = document.getElementById('name');
const number = document.getElementById('number');
const expiration_month = document.getElementById('expiration-month');
const expiration_year = document.getElementById('expiration-year');
const cvc = document.getElementById("cvc");

const form = document.getElementById("myForm");
const completed = document.querySelector(".completed");
const completed__button = completed.querySelector(".button");
   

form.addEventListener("submit", (e) => {
    e.preventDefault();

    validateInput()
})

function validateInput() {

    if(!isEmpty(name1)) return;
    if(!isEmpty(number)) return;
    if(!isEmptyALT(expiration_month)) return;
    if(!isEmptyALT(expiration_year)) return;
    if(!isEmpty(cvc)) return;


    form.setAttribute("hidden", true);
    completed.removeAttribute("hidden");


}

function TestForRegex(element){
    const parentElement = element.parentElement;
    const errorContainer = parentElement.querySelector(".error");
    errorContainer.innerText = "";
    let number_regex = /^\d+$/g;

    if(!number_regex.test(element.value)){
        errorContainer.innerText = "Wrong format. Numbers only.";
        element.classList.add("error-active");
        element.classList.remove("success");
        return false;
    }
    
    return true;
}

function TestForRegexALT(element){
    const parentElement = element.parentElement.parentElement;
    const errorContainer = parentElement.querySelector(".error");
    errorContainer.innerText = "";
    let number_regex = /^\d+$/g;

    if(!number_regex.test(element.value)){
        errorContainer.innerText = "Wrong format. Numbers only.";
        element.classList.add("error-active");
        element.classList.remove("success");
        return false;
    }
    
    return true;
}

function isEmpty(element){
    const parentElement = element.parentElement;
    const errorContainer = parentElement.querySelector(".error");
    errorContainer.innerText = "";

    if(element.value === "") {
        errorContainer.innerText = "Can't be blank";
        element.classList.add("error-active");
        return false;
    }
    return true;
}

function isEmptyALT(element){
    const parentElement = expiration_month.parentElement.parentElement;
    const errorContainer = parentElement.querySelector(".error");
    errorContainer.innerText = "";

    if(element.value === "") {
        errorContainer.innerText = "Can't be blank";
        element.classList.add("error-active");
        return false;
    }
    return true;
}

name1.addEventListener("keyup", () => {
    name1.parentElement.querySelector(".error").innerText = "";
    if(name1.value === "") {
        name1.classList.remove("success");
        card_owner_name.setHTML("full name");
        return;
    }

    name1.classList.remove("error-active");
    name1.classList.add("success");
    card_owner_name.setHTML(name1.value.trim());
})

number.addEventListener("keyup", () => {
    if(number.value === "") {
        number.classList.remove("success");
        card_number.setHTML("0000 0000 0000 0000");
        return;
    }
    if(!TestForRegex(number)) return;

    number.classList.remove("error-active");
    number.classList.add("success");
    card_number.setHTML(number.value.trim());
})

cvc.addEventListener("keyup", () => {
    if(cvc.value === ""){
        cvc.classList.remove("success");
        card_cvc.setHTML("000");
        return;
    }
    if(!TestForRegex(cvc)) return;

    cvc.classList.remove("error-active");
    cvc.classList.add("success");
    card_cvc.setHTML(cvc.value.trim());
})

expiration_month.addEventListener("keyup", () => {
    if(expiration_month.value === ""){
        expiration_month.classList.remove("success");
        card_month.setHTML("00");
        return;
    }
    if(!TestForRegexALT(expiration_month)) return;

    expiration_month.classList.remove("error-active");
    expiration_month.classList.add("success");
    card_month.setHTML(expiration_month.value.trim());
})

expiration_year.addEventListener("keyup", () => {
    if(expiration_year.value === ""){
        expiration_year.classList.remove("success");
        card_year.setHTML("00");
        return;
    }
    if(!TestForRegexALT(expiration_year)) return;

    expiration_year.classList.remove("error-active");
    expiration_year.classList.add("success");
    card_year.setHTML(expiration_year.value.trim());
    
})

completed__button.addEventListener("click", () => {
    form.removeAttribute("hidden");
    completed.setAttribute("hidden", true);
    name1.value = "";
    number.value = "";
    expiration_month.value = ""
    expiration_year.value = ""
    cvc.value = ""
})