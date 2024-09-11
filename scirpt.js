//  for our add pop up
let box = document.querySelector("#box");
let addbtn = document.querySelector("#addbtn");
let add_user = document.querySelector("#add_user");
let close_btn = document.querySelector("#close_but");
let tbody = document.querySelector("#tbody");


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
       let checkEmail = allRegData.find((data)=> data.email == allInput[1].value); // if there present data it will return all
        if( checkEmail == undefined)
            {
                allRegData.push({
                    name:allInput[0].value,
                    email:allInput[1].value,
                    mobile:allInput[2].value,
                    dob:allInput[3].value,
                    password:allInput[4].value,
                })
              localStorage.setItem("allRegData", JSON.stringify(allRegData));
              printData();
            }
            else
            {
                alert("email aleready exsit");
            }
    }



//  uploding data in html


let printData = function()
{
    tbody.innerHTML =""; //---> for not reting duplicate data on sumbit new user
   allRegData.forEach((data, index) =>
    {
        tbody.innerHTML += ` <tr>
                            <td>${index+1}</td>
                            <td>${data.name}</td>
                            <td>${data.email}</td>
                            <td>${data.mobile}</td>
                            <td>${data.dob}</td>
                            <td>${data.password}</td>
                             <td>
                                <button  id="edit" index = ${index} class="button1">
                                    <i class="ri-edit-line"></i>
                                </button>
                                <button id = "delete" index = ${index} class="button2">
                                    <i class="ri-delete-bin-6-line"></i>
                                </button>
                             </td>
                        </tr>
                       
                        `
    })
    deletuser();     

}

//  dalete a user
let deletuser = function()
{
   let alldel = tbody.querySelectorAll("#delete");

   for( let btn of alldel)
    {
        btn.onclick = () =>{
            let index = btn.getAttribute("index");
            allRegData.splice(index, 1);
            localStorage.setItem("allRegData",JSON.stringify(allRegData))
            printData();
        }
    }
}

printData();
// deletuser();  


