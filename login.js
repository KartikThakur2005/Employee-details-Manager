
const employeeLoginForm = document.getElementById('employeeLoginForm');
const hrLoginForm = document.getElementById('hrLoginForm');
const employeeTab = document.getElementById('employeeTab');
const hrTab = document.getElementById('hrTab');
let logoutBtn = document.getElementById("logoutBtn");
let allRegData = [];
let user_input  =  employeeLoginForm.querySelectorAll("input");
let log_cont = document.querySelector(".login-container");
let user_cont =  document.querySelector(".container");

function showEmployeeLogin() {
    employeeLoginForm.style.display = 'block';
    hrLoginForm.style.display = 'none';
    employeeTab.classList.add('active');
    hrTab.classList.remove('active');
}


function showHRLogin() {
    hrLoginForm.style.display = 'block';
    employeeLoginForm.style.display = 'none';
    hrTab.classList.add('active');
    employeeTab.classList.remove('active');
}

function checkUser()
{
    if(localStorage.getItem("allRegData")!= null)  // after reload our data will be saved here from local sorage
    {
        allRegData = JSON.parse(localStorage.getItem("allRegData"));
    }

    if(allRegData.find((data)=> data.email == user_input[0].value) && allRegData.find((data)=> data.password == user_input[1].value))
    {
    
       return true;
    }

    return false;

     
}

function showUser() 
{

    let currentUser = allRegData.find((data) => data.email == user_input[0].value && data.password == user_input[1].value);

    log_cont.classList.add("hidden");
    user_cont.classList.remove("hidden");
    user_cont.classList.add("visible");

    if (currentUser) {
       
        document.getElementById("name").innerHTML  = currentUser.name;  // Remove '#' from the element IDs
        document.getElementById("email").innerHTML  = currentUser.email;
        document.getElementById("dob").innerHTML  = currentUser.dob;
        document.getElementById("number").innerHTML  = currentUser.mobile;
    
    }


    
}


// ------------------- For logout user ----------------------

logoutBtn.addEventListener("click",()=>{
    
    log_cont.classList.remove("hidden");
    user_cont.classList.add("hidden");
    user_cont.classList.remove("visible");
  
    
})





// Add event listeners to switch between forms
employeeTab.addEventListener('click', showEmployeeLogin);
hrTab.addEventListener('click', showHRLogin);

// Employee Login form submit event
employeeLoginForm.addEventListener('submit', function (event) 
{
    event.preventDefault();
   
    const message = document.getElementById('employeeMessage');


    if (checkUser()) 
    {
         showUser();
       
    } 
    else {
        message.style.color = 'red';
        message.textContent = 'Invalid Email or Password';
        message.style.display = 'block';
    }
});

// HR Login form submit event
hrLoginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const hrPassword = document.getElementById('hrPassword').value;
    const message = document.getElementById('hrMessage');

    if (hrPassword === 'hr123') {
                
        setTimeout(() => {
            window.location.href ="/details/details_temp.html";
        }, 1000); 
    } else {
        message.style.color = 'red';
        message.textContent = 'Invalid HR Password';
        message.style.display = 'block';
    }
});


showEmployeeLogin();



            
           
        


