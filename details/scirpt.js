    //  for our add pop up
    let box = document.querySelector("#box");
    let addbtn = document.querySelector("#addbtn");
    let add_user = document.querySelector("#add_user");
    let close_btn = document.querySelector("#close_but");
    let tbody = document.querySelector("#tbody");
    let delete_pop = document.querySelector("#delete-pop");
    let confirm = document.querySelector("#confirm");
    let cancle = document.querySelector("#cancle");
    let regForm = document.querySelector("#register-form");
    let allInput = regForm.querySelectorAll("input"); // thsi return an list od all input 
    let allreg_but = regForm.querySelectorAll("button");
    let allRegData = [];
    let search  = document.querySelector("#search");
    let deleteall = document.querySelector("#deleteall"); 
    let logout = document.querySelector("#logout")

    let add_window = function() {
        box.classList.add(  "hidden");
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

    if(localStorage.getItem("allRegData")!= null)  // after reload our data will be saved here from local sorage
    {
        allRegData = JSON.parse(localStorage.getItem("allRegData"));
    }

        regForm.onsubmit = (e) =>
        {
            e.preventDefault();  
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
                allInput.forEach(input => input.value = "");
            clos_add();
        }



    //  uploding data in html


    let printData = function()
    {
        tbody.innerHTML =""; //---> for not reting duplicate data on sumbit new user
    allRegData.forEach((data, index) =>
        {
            let datastr = JSON.stringify(data);
            let finaldata = datastr.replace(/"/g, "'"); 
        
            
            tbody.innerHTML += ` <tr>
                                <td>${index+1}</td>
                                <td>${data.name}</td>
                                <td>${data.email}</td>
                                <td>${data.mobile}</td>
                                <td>${data.dob}</td>
                                <td>${data.password}</td>
                                <td>
                                    <button  id="edit" index = ${index}  data ="${finaldata}" class="button1">
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
        user_edit();
    }

    //  dalete a user


    let delete_confirm = () => {
        return new Promise((resolve, reject) => {
            delete_pop.classList.remove("hidden"); 

            
            confirm.onclick = () => {
                resolve(true);
                delete_pop.classList.add("hidden"); 
            };

            cancle.onclick = () => {
                reject(false); 
                delete_pop.classList.add("hidden"); 
            };
        });
    };

    // Handle delete action
    let deletuser = function() {
        let alldel = tbody.querySelectorAll("#delete");

        for (let btn of alldel) {
            btn.onclick = async () => {
                try {
                    let confirmed = await delete_confirm(); 

                    if (confirmed) {
                        let index = btn.getAttribute("index");
                        allRegData.splice(index, 1);
                        localStorage.setItem("allRegData", JSON.stringify(allRegData)); 
                        printData(); 
                    }
                    } catch (err) {
                        console.log("Delete action canceled");
                    }
            };
        }
    };


    // ------------------------ Editing the user details --------------------------------------

    let user_edit = () => {
        let alledit = tbody.querySelectorAll("#edit");

        for (let btn of alledit) {
            btn.onclick = () => {
            
                let data = btn.getAttribute("data"); 
                let index = btn.getAttribute("index");
            
                let finaldata = data.replace(/'/g, '"'); 

                let dataobj = JSON.parse(finaldata);
                add_window(); 

                allInput[0].value = dataobj.name;
                allInput[1].value = dataobj.email;
                allInput[2].value = dataobj.mobile;
                allInput[3].value = dataobj.dob;
                allInput[4].value = dataobj.password;

                allreg_but[0].disabled = false;
                allreg_but[1].disabled = true;
                
                allreg_but[0].onclick = ()=>
                    {
                        allRegData[index] = {
                            name:allInput[0].value,
                        email:allInput[1].value,
                        mobile:allInput[2].value,
                        dob:allInput[3].value,
                        password:allInput[4].value,
                    
                        }

                        localStorage.setItem("allRegData", JSON.stringify(allRegData));
                        allreg_but[0].disabled = true;
                allreg_but[1].disabled = false;
                        printData();
                    
                    
                    clos_add();
                    }
            };
        }
    };



    // -------------------------------- Search ------------------------------

    let search_fun = () =>{
        let value = search.value.toLowerCase();
    let tr = tbody.querySelectorAll("TR");
    let i;
    for( i =0; i < tr.length; i++)
        {
            let allTD = tr[i].querySelectorAll("TD");
            let name = allTD[1].innerHTML;
            let email = allTD[2].innerHTML
            let number = allTD[3].innerHTML;
        if(name.toLocaleLowerCase().indexOf(value) != -1)
        {
            tr[i].style.display = "";
            
        }
        else  if(email.toLocaleLowerCase().indexOf(value) != -1)
            {
            tr[i].style.display = "";
            
            }
        else  if(number.toLocaleLowerCase().indexOf(value) != -1)
            {
            tr[i].style.display = "";
            
            }
        else{
            tr[i].style.display = "none";
        }
        }
    }

    search.oninput = ()=>{
        search_fun();
    }


    // ------------------------------------------- delteall ---------------------------

    deleteall.onclick = async () => {
        try {
            let confirmed = await delete_confirm(); 
    
            if (confirmed) {
                localStorage.removeItem("allRegData"); 
                allRegData = [];
                printData();
             
            }
        } catch (err) {
            console.log("Delete action canceled");
        }
    }
    

    printData();



    //  ---------------------------------- Logoout ---------------------

    logout.onclick = ()=>{

        window.location.href ="../login.html";
    }


