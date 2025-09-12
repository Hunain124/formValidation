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
        througherror(input, `${input.id} must be between ${min} to ${max} letters`)
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

// Animation for Gsap
let tl = gsap.timeline();

tl.from(".form", {
  duration: 1.2,
  opacity: 0,
  scale: 0.7,
  ease: "elastic.out(1, 0.5)"
})
.from(".form h2", {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: "back.out(1.7)"
}, "-=0.5") // overlap thoda
.from(".formControl", {
  duration: 0.8,
  y: 40,
  opacity: 0,
  stagger: 0.2,
  ease: "power3.out"
}, "-=0.3")
gsap.fromTo(".form button",
  { y: 50, opacity: 0 },   // start
  { duration: 1, y: 0, opacity: 1, delay: 1.5, ease: "power3.out" } // end
);


