let email = document.getElementById("email");
let submit = document.getElementById("submit");
let dob = document.getElementById("dob");

email.addEventListener("input", () => validate(email));
submit.addEventListener("click", () => validate(email));
submit.addEventListener("click", () => ageValidate(dob));

function getAge(today, birthDate) {
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m == 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
  console.log(age);
}

let dateELE = document.getElementById("dob");

dateELE.addEventListener("change", () => {
  let [year, month, date] = document.getElementById("dob").value.split("-");
  let dob = new Date(year, month, date);
  let Today = new Date();
  age = getAge(Today, dob);

  dateELE.style.border = "2px solid rgba(0,0,0,0.4)";
  if (age < 18 || age > 55) {
    dateELE.setCustomValidity("Your age is not lies between 18 and 55");
    dateELE.style.border = "2px solid red";
    return;
  } else {
    dateELE.setCustomValidity("");
  }
});

function validate(element) {
  if (element.validity.typeMismatch) {
    element.setCustomValidity("The email is not in the right format:/");
    email.reportValidity();
  } else {
    element.setCustomValidity("");
  }
}

// ===================================Local Storage ================================
