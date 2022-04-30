//linking the nav_bar
document.querySelector(".gearBestLogo").addEventListener('mouseover', function() {
    event.target.style.cursor = "pointer";
})

document.querySelector(".gearBestLogo").addEventListener('click', function() {
  window.location.href = "index.html"
})

document.querySelector(".nav_cart").addEventListener("click", function() {
      window.location.href = "cart.html";
  })

  document.querySelector(".nav_sign_in").addEventListener("click", function() {
      window.location.href = "login.html";
  })

  document.querySelector(".nav_favorites").addEventListener("click", function() {
      window.location.href = "favorite.html";
  })

//sign in check
var registeredUsers = JSON.parse(localStorage.getItem("userDataBase")) || [];

var [isSignedIn, indexOfUserSignedIn] = JSON.parse(localStorage.getItem("loggedInUser")) || [false, -1];
var signedInUserEmail = null;
var userCart = null;
var userFavorites = null;

if (isSignedIn) {
  userFavorites = registeredUsers[indexOfUserSignedIn].userFavorites;
  userCart = registeredUsers[indexOfUserSignedIn].userCart;
  signedInUserEmail = registeredUsers[indexOfUserSignedIn].useremail;

  userFavorites.map(display);

  document.querySelector(".favorite_container>div>div:nth-child(3)>div:nth-child(2)>img ").src = "";

  document.querySelector(".favorite_container>div>div:nth-child(3)>div:nth-child(3)>p ").textContent = "";

  document.querySelector(".favorite_container>div>div:nth-child(3)>div:nth-child(4)>p").textContent = "";
}

if(isSignedIn) {
      document.querySelector('.cartCounter').textContent = userCart.length;
      document.querySelector('.favCounter').textContent = userFavorites.length;
      document.querySelector(".nav_sign_in").textContent = signedInUserEmail;
      document.querySelector(".nav_sign_in").style.overflow = "hidden";
      document.querySelector(".nav_sign_in").style.marginLeft = "14px";
      document.querySelector(".nav_sign_in").addEventListener("mouseover", function() {
          let logoutBox = document.createElement('div');
          logoutBox.setAttribute('class', "logOutDropDown");
          if(document.querySelectorAll(".logOutDropDown").length > 0) {
              return;
          }

          document.querySelector(".nav_sign_in").addEventListener("click", function() {
               location.reload();
          })

          logout_button = document.createElement("div");
          logout_button.setAttribute("class", "logOutOption");
          logout_button.textContent = "LOGOUT";

          logout_button.addEventListener('click', function() {
              localStorage.setItem("loggedInUser", JSON.stringify([false, -1]));
              location.reload();
          })

          logoutBox.append(logout_button);
          document.querySelector(".nav_sign_in").append(logoutBox);
      })
  }

function display(data, index) {
  var div = document.createElement("div");
  div.setAttribute("class", "box")

  var div1 = document.createElement("div");
  var img = document.createElement("img");
  img.setAttribute("src", data.img);

  var div2 = document.createElement("div");
  div2.setAttribute("class", "button_holder");
  var btn1 = document.createElement("button");
  var f1 = document.createElement("i");
  f1.setAttribute("class", "fas fa-shopping-cart");

  btn1.append(f1);
  btn1.addEventListener('click', function() {
    
          for(let i = 0; i < userCart.length; i++) {
              if(userCart[i].img == data.img) {
                  return alert("Item already added to cart!");
              }
          }
          userCart.push(data);
          registeredUsers[indexOfUserSignedIn].userCart = userCart;
          localStorage.setItem("userDataBase", JSON.stringify(registeredUsers));
          document.querySelector(".cartCounter").textContent = userCart.length;
          alert("Item added to cart successfully");
  })

  var btn2 = document.createElement("button");
  btn2.addEventListener("click", function() {
    document.querySelector(".box_container").innerHTML = "";
          userFavorites.splice(index, 1);
          registeredUsers[indexOfUserSignedIn].userFavorites = userFavorites;
          localStorage.setItem("userDataBase", JSON.stringify(registeredUsers));
          document.querySelector(".favCounter").textContent = userFavorites.length;
          return userFavorites.map(display);
  })
  var f2 = document.createElement("i");
  f2.setAttribute("class", "far fa-trash-alt");

  btn2.append(f2);

  div2.append(btn1, btn2);

  div1.append(img, div2);

  var div3 = document.createElement("div");
  var p1 = document.createElement("p");
  p1.textContent = data.name;

  div3.append(p1);

  var div4 = document.createElement("div");
  var p2 = document.createElement("p");
  p2.textContent = "$" + data.price;

  div4.append(p2);

  div.append(div1, div3, div4);
  document.querySelector(".box_container").append(div)


}