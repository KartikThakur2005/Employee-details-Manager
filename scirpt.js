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
