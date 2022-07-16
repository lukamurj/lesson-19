// COMMENT form ვალიდაციები
const userSignUpForm = document.querySelector("#sign-up"),
  userName = document.querySelector("#username"),
  email = document.querySelector("#email"),
  password = document.querySelector("#password"),
  personal_num = document.querySelector("#personal_num"),
  mobile_num = document.querySelector("#mobile_num"),
  position = document.querySelector("#position"),
  userNameError = document.querySelector("#username-error"),
  passwordError = document.querySelector("#password-error"),
  emailError = document.querySelector("#email-error"),
  personal_numError = document.querySelector("#personal_num-error"),
  mobile_numError = document.querySelector("#mobile_num-error"),
  positionError = document.querySelector("#position-error");

function validateUserName() {
  // როცა ვალიდური არაა, ეს required არის და ცარიელი როცაა მაშინ გამოვა ერორი
  if (!userName.validity.valid) {
    // console.log(userName.validity);
    userName.classList.add("error");
    userNameError.textContent = "user name required";

    // true ან დაბლა false ს ვაბრუნებთ იმის მიხედვით ვალიდაცია გაიარა თუ არა
    return false;
  } else {
    userNameError.textContent = "";
    userName.classList.remove("error");
    return true;
  }
}

function validateEmail() {
  // როცა ვალიდური არაა, ეს required არის და ცარიელი როცაა მაშინ გამოვა ერორი
  if (!email.validity.valid) {
    email.classList.add("error");
    emailError.textContent = "email required";
    // როცა, ცარიელი არაა, მაგრამ მეილის სწორი ფორმა არაა და @ სიმბოლო არაა გამოყენებული
    if (email.validity.typeMismatch) {
      emailError.textContent = "not valid email";
    }
    return false;
  } else {
    emailError.textContent = "";
    email.classList.remove("error");
    return true;
  }
}

function validatePassword() {
  // როცა პაროლი 4 სიმბოლოზე ნაკლებია, მაშინ გამოვა ერორი
  if (password.value.length <= 4) {
    password.classList.add("error");
    passwordError.textContent = "password must be 4 or more characters";
    // console.log(userName.validity.tooShort);
    return false;
  } else {
    passwordError.textContent = "";
    password.classList.remove("error");
    // password.type = "text";
    return true;
  }
}

function validatePersonalNum() {
  if (
    /^[0-9]+$/.test(personal_num.value) != true &&
    personal_num.value.length != 11
  ) {
    personal_num.classList.add("error");
    personal_numError.textContent =
      "personal number must contain only numbers and must be 11 digits";
    return false;
  } else if (/^[0-9]+$/.test(personal_num.value) != true) {
    personal_num.classList.add("error");
    personal_numError.textContent = "personal number must contain only numbers";
    return false;
  } else if (personal_num.value.length != 11) {
    personal_num.classList.add("error");
    personal_numError.textContent = "personal number must be 11 digits";
    return false;
  } else {
    personal_numError.textContent = "";
    personal_num.classList.remove("error");
    return true;
  }
}

function validateMobileNum() {
  if (
    /^[0-9]+$/.test(mobile_num.value) != true &&
    mobile_num.value.length != 9
  ) {
    mobile_num.classList.add("error");
    mobile_numError.textContent =
      "mobile number must contain only numbers and must be 9 digits";
    return false;
  } else if (/^[0-9]+$/.test(mobile_num.value) != true) {
    mobile_num.classList.add("error");
    mobile_numError.textContent = "mobile number must contain only numbers";
    return false;
  } else if (mobile_num.value.length != 9) {
    mobile_num.classList.add("error");
    mobile_numError.textContent = "mobile number must be 9 digits";
    return false;
  } else {
    mobile_numError.textContent = "";
    mobile_num.classList.remove("error");
    return true;
  }
}

function validatePosition() {
  if (/^[0-9]+$/.test(position.value) != true && position.value.length > 30) {
    position.classList.add("error");
    positionError.textContent =
      "position must contain only numbers and must be no more than 30 digits";
    return false;
  } else if (/^[0-9]+$/.test(position.value) != true) {
    position.classList.add("error");
    positionError.textContent = "position must contain only numbers";
    return false;
  } else if (position.value.length > 30) {
    position.classList.add("error");
    positionError.textContent = "position must be no more than 30 digits";
    return false;
  } else {
    positionError.textContent = "";
    position.classList.remove("error");
    return true;
  }
}

userName.addEventListener("input", () => {
  // console.log(e.target.value);
  validateUserName();
});

email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);
personal_num.addEventListener("input", validatePersonalNum);
mobile_num.addEventListener("input", validateMobileNum);
position.addEventListener("input", validatePosition);

userSignUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const isValidUserName = validateUserName(),
    isValidEmail = validateEmail(),
    isValidPassword = validatePassword(),
    isValidPersonal_Num = validatePersonalNum(),
    isValidMobile_Num = validateMobileNum(),
    isValidPosition = validatePosition();
  if (
    isValidUserName &&
    isValidEmail &&
    isValidPassword &&
    isValidPersonal_Num &&
    isValidMobile_Num &&
    isValidPosition
  ) {
    const userInfo = {
      userName: userName.value,
      email: email.value,
      password: password.value,
      personal_num: personal_num.value,
      mobile_num: mobile_num.value,
      position: position.value,
    };

    console.log(userInfo);
    // მოდალის გამოტანა
    dynamicOpenModal("#sign-in-modal");
  }
});

// COMMENT modals, popup
const modalEl = document.querySelector(".modal"),
  closeBtn = document.querySelector(".modal-close"),
  openModalSecond = document.querySelector(".open-modal-second");

function showModal() {
  modalEl.classList.add("open");
}

function closeModal() {
  modalEl.classList.remove("open");
}

function dynamicOpenModal(selector) {
  const modal = document.querySelector(selector);
  if (modal) {
    modal.classList.add("open");

    const closeBtn = modal.querySelector(".modal-close");
    closeBtn.addEventListener("click", () => {
      dynamicCloseModal(selector);
    });
  }
}

function dynamicCloseModal(selector) {
  const modal = document.querySelector(selector);
  if (modal) {
    modal.classList.remove("open");
  }
}

openModalSecond.addEventListener("click", () => {
  dynamicOpenModal("#sign-up-modal");
});
