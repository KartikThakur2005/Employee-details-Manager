
const employeeLoginForm = document.getElementById('employeeLoginForm');
const hrLoginForm = document.getElementById('hrLoginForm');
const employeeTab = document.getElementById('employeeTab');
const hrTab = document.getElementById('hrTab');

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

// Add event listeners to switch between forms
employeeTab.addEventListener('click', showEmployeeLogin);
hrTab.addEventListener('click', showHRLogin);

// Employee Login form submit event
employeeLoginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('employeeEmail').value;
    const password = document.getElementById('employeePassword').value;
    const message = document.getElementById('employeeMessage');

    if (email === 'employee@example.com' && password === 'password') {
        message.style.color = 'green';
        message.textContent = 'Employee Login Successful';
        message.style.display = 'block';
    } else {
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
