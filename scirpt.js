let box = document.querySelector("#box");
let addbtn  = document.querySelector("#addbtn");
let add_user = document.querySelector("#add_user");

let add_window = function()
{
   box.classList.add("hidden");
   add_user.classList.remove("hidden");
}     

addbtn.addEventListener("click",add_window)
