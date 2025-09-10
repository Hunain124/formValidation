const form = document.querySelector("#form");
let userName = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");

// My functions

// error function
function througherror(input, message) {
    let formControl = input.parentElement;
    formControl.className = "formControl error";
    let small = formControl.querySelector("small");
    small.textContent = message;
}

// noissue function 
function noIssue(input) {
    let formControl = input.parentElement;
    formControl.className = "formControl success";
}

//confirm password
function checkPassword(input, message) {
    let formControl = input.parentElement;
    formControl.className = "formControl error";
    let small = formControl.querySelector("small");
    small.textContent = message;
}

// Check Length of username or password
function checkLength(input, min, max) {
    if (input.value.length < min) {
        througherror(input, `${input.id} must be above in ${min} letters`);
    } else if (input.value.length > max) {
        througherror(input, `${input.id} must be in ${min} to ${max} lettes`)
    }

}

// addEventListener
form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (userName.value == "") {
        througherror(userName, "Username is required");
    } else {
        noIssue(userName);
    };
    if (email.value == "") {
        througherror(email, "Email is required");
    } else {
        noIssue(email);
    };
    if (password.value == "") {
        througherror(password, "Password is required");
    } else {
        noIssue(password);
    };
    if (confirmPassword.value == "") {
        througherror(confirmPassword, "Confirm Password is required");
    } else if (confirmPassword.value != password.value) {
        checkPassword(confirmPassword, "Password is not match");
    } else {
        noIssue(confirmPassword);
    };
    checkLength(userName, 3, 10);
    checkLength(password, 6, 30)
})