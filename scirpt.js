//  for our add pop up
let box = document.querySelector("#box");
let addbtn = document.querySelector("#addbtn");
let add_user = document.querySelector("#add_user");
let close_btn = document.querySelector("#close_but");

let add_window = function() {
    box.classList.add("hidden");
    box.classList.remove("visible");
    add_user.classList.add("visible");
    add_user.classList.remove("hidden");
};

let clos_add = function() {
    add_user.classList.add("hidden");
    add_user.classList.remove("visible");
    box.classList.add("visible");
    box.classList.remove("hidden");
};

addbtn.addEventListener("click", add_window);
close_btn.addEventListener("click", clos_add);

// ---------------------------------------------

//  Form registration
let regForm = document.querySelector("#register-form");
let allInput = regForm.querySelectorAll("INPUT"); // thsi return an list od all input 
let allRegData = [];

if(localStorage.getItem("allRegData")!= null)  // after reload our data will be saved here from local sorage
{
    allRegData = JSON.parse(localStorage.getItem("allRegData"));
}

regForm.onsubmit = (e) =>
    {
        e.preventDefault();  // this will not save data after reload
       let
        allRegData.push({
            name:allInput[0].value,
            email:allInput[1].value,
            mobile:allInput[2].value,
            dob:allInput[3].value,
            password:allInput[4].value,
        })
      localStorage.setItem("allRegData", JSON.stringify(allRegData));

    }


