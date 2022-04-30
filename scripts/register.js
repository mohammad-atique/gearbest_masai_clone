document.querySelector("form").addEventListener("submit", formSubmit);    //Adding EventListner

var userArr=JSON.parse(localStorage.getItem     ("userDataBase")) ||[];

function formSubmit(event){
    event.preventDefault();

    var name=document.querySelector("#name").value;
    var email=document.querySelector("#email").value;
    var password=document.querySelector("#password").value;
    var mobile=document.querySelector("#mobile").value;
    var checkbox=document.querySelector("#checkbox");

    for(let i = 0; i < userArr.length; i++) {
        if(userArr[i].useremail == email) {   
            return alert("Account already exists for this Email ID");
        }
    }

    var userData={
                    username: name,
                    useremail: email,
                    userpassword: password,
                    usermobile: mobile,
                    userCart: [],
                    userFavorites: []
                };

                // console.log(userData)

                userArr.push(userData);

                // console.log(userArr)

                
               
                if(checkbox.checked==true ){
                    alert("Registration is Successful");
                }
                else{
                    return alert("To complete the registration, you must agree to Gearbest's website Terms and Conditions.");
                }

                localStorage.setItem("userDataBase", JSON.stringify(userArr));
                window.location.href="login.html";
}