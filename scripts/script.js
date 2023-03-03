// get elements
const userNameEl = document.getElementById("username");
const emailEl = document.getElementById("email");
const passwordEl = document.getElementById("password");
const confirmPasswordEl = document.getElementById("confirm-password");
const formEl = document.getElementById("form");
// console.log(userNameEl);
// console.log(userNameEl.value);

// for testing all the elements are got
// console.log(userNameEl.value);                     [ here you don't get any value because when
// console.log(emailEl.value);                          form loading input field values are  empty]
// console.log(passwordEl.value);
// console.log(confirmPasswordEl.value);

//global variables
const input = [
  { input: userNameEl, name: "username" },
  { input: emailEl, name: "Email" },
  { input: passwordEl, name: "Password" },
  { input: confirmPasswordEl, name: "Confirm-password" },
];

console.log(input.length);
// functions

//error function
const errorFunction = (element, message) => {
  let formControl = element.parentElement;
  // console.log(formControl);
  formControl.className = "form-control error";
  let small = formControl.querySelector(".small");
  // console.log(small);
  small.innerText = `${message} is invalid!`;
};

//success function
const successFunction = (element) => {
  let formControl = element.parentElement;
  formControl.className = "form-control success";
};

//checkRequiredInfo
function checkRequired(inputArray, message) {}
// eventListeners
formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  let userName = userNameEl.value.trim();
  let email = emailEl.value.trim(); //[ here you will get any value because when
  let password = passwordEl.value.trim(); //  form loading input field values are  filled ]
  let confirmPassword = confirmPasswordEl.value.trim();

  checkRequired(input);

  //input error --> input border red and show invalid message
  //input success --> input border green only
  if (userName) {
    successFunction(userNameEl);
  } else {
    errorFunction(userNameEl, "Username");
  }
  if (email) {
    successFunction(emailEl);
  } else {
    errorFunction(emailEl, "E-mail");
  }
  if (password) {
    successFunction(passwordEl);
  } else {
    errorFunction(passwordEl, "Password");
  }
  if (confirmPassword) {
    //password === confirm password
    if (password === confirmPassword) {
      successFunction(confirmPasswordEl);
    } else {
      errorFunction(
        confirmPasswordEl,
        "confirm-password not matched to previous one so it"
      );
    }
  } else {
    errorFunction(confirmPasswordEl, "Confirm Password");
  }

  // console.log(userName);
  // console.log(email);
  // console.log(password);
  // console.log(confirmPassword);
});

// initial setup
