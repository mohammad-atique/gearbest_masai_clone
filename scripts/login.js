document.querySelector("form").addEventListener("submit", formSubmit);
var regUsers = JSON.parse(localStorage.getItem("userDataBase")) || [];

var loggedInUserData=[false, -1];
localStorage.setItem("loggedInUser", JSON.stringify(loggedInUserData));


function formSubmit(event) {
    event.preventDefault();
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    var [isSignedIn, indexOfUser] = check(regUsers, email, password);
    
    

    //On successful signup we will send the index of the user from the userDataBase with a boolean true which tells us if the user is logged in or not. In addition, the index from the userdatabase array will let us access the personal arrays of favorites and carts of the user.

    if (isSignedIn == true) {
        alert("SignIn Successful");
        loginData(isSignedIn, indexOfUser)
        window.location.href = "index.html";
    } else {
        return alert("Invalid Email/Password");
    }

    //function to check if useremail and password matches
    function check(regUsers, email, password) {
        for (var i = 0; i < regUsers.length; i++) {
            if (regUsers[i].useremail === email && regUsers[i].userpassword === password) {
                return [true, i];
            }
        }
        return [false, -1];
    }

    function loginData(dataCheck, userCartArr){
      
        loggedInUserData[0] = true;
        loggedInUserData[1]=indexOfUser;

        localStorage.setItem("loggedInUser", JSON.stringify(loggedInUserData));
    }

}