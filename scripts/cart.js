document.querySelector(".container_logo").addEventListener('click', function() {
    window.location.href = "index.html"
  }) 

  document.querySelector(".container_logo").addEventListener('mouseover', function() {
    document.querySelector(".container_logo > img").style.cursor = "pointer";
  })

$('.new_items').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  variableWidth: true,
  arrows: true,
  autoplay: true
});
    //SIGN IN CHECK
    let registeredUsers = JSON.parse(localStorage.getItem('userDataBase')) || [];

    let [isSignedIn, indexOfUserSignedIn] = JSON.parse(localStorage.getItem("loggedInUser")) || [false, -1];
    let signedInUserEmail = null;
    let userCart = null;
    let userFavorites = null;

    console.log(registeredUsers[indexOfUserSignedIn])

    if (isSignedIn) {
        userCart = registeredUsers[indexOfUserSignedIn].userCart;
        userCart.map(display);
        document.querySelector(".container_cart >div>img").src = "";
            document.querySelector(".container_cart >div>p").textContent = ""
            document.querySelector(".container_cart >div>button:nth-child(1)").style = "display:none";
            document.querySelector(".container_cart >div>button:nth-child(2)").style = "display:none";
    }

    //MAPPING THE CART
    let totalCostDisplay = document.querySelector(".total_amount>div:nth-child(1)>.right_side>div:nth-child(2)>p");
    
    function subtotalCalculator() {
        
        totalCostDisplay.innerHTML = "";
        let sum = 0;
        for(let i = 0; i < userCart.length; i++) {
            let num  = Number(document.querySelectorAll(".cartSubTotal")[i].textContent.slice(1))
            sum += num;
        }
        totalCostDisplay.textContent = `$${sum.toFixed(2)}`;
    }

    function display(data, index) {


        let tr = document.createElement("tr");
        var td1 = document.createElement("td");

        var divv = document.createElement("div");

        var img = document.createElement("img");
        img.setAttribute("src", data.img);

        divv.append(img)

        var div = document.createElement("div");
        var p = document.createElement("p");
        p.textContent = data.name;

        div.append(p)

        td1.append(divv, div);

        var td2 = document.createElement("td");
        td2.setAttribute("class", "unitPrice");

        var p1 = document.createElement("p");
        p1.textContent = `$${data.price}`;

        td2.append(p1);

        //decrement button
        var td3 = document.createElement("td");
        var div1 = document.createElement("div");
        var btn1 = document.createElement("button");
        btn1.setAttribute("class", "counter-minus");
        

        btn1.textContent = "-";

        var p2 = document.createElement("p");
        p2.setAttribute("class", "counter-display");
        p2.textContent = "1";

        var btn2 = document.createElement("button");
        btn2.setAttribute("class", "counter-plus");
       
        btn2.textContent = "+";


        div1.append(btn1, p2, btn2);

        td3.append(div1);

        var td4 = document.createElement("td");
        td4.setAttribute("class", "subtotal");
        var p3 = document.createElement("p");
        p3.setAttribute("class", "cartSubTotal");
        p3.textContent = `$${data.price}`;
        td4.append(p3);

        var td5 = document.createElement("td");
        var btn3 = document.createElement("button");
        btn3.textContent = "delete";
        btn3.addEventListener('click', function() {
            document.querySelector("tbody").innerHTML = "";
            userCart.splice(index, 1);
            registeredUsers[indexOfUserSignedIn].userCart = userCart;
            localStorage.setItem("userDataBase", JSON.stringify(registeredUsers));
            
            userCart.map(display)
            subtotalCalculator();
        })


        td5.append(btn3);

        //Decrement button function
        btn1.addEventListener("click", function() {
            if(Number(p2.textContent) == 1) {
                return console.log("NOTHING CAN HAPPEN")
            } else {
                p2.textContent = +p2.textContent - 1;
                p3.textContent =  "$"+(+data.price * +p2.textContent);
                subtotalCalculator();
            }

            
        });

        //Increment Button function
        btn2.addEventListener("click", function() {
            p2.textContent = +p2.textContent + 1;
            p3.textContent = "$"+(+data.price * +p2.textContent);
            subtotalCalculator();
        });

        tr.append(td1, td2, td3, td4, td5);
        document.querySelector("tbody").append(tr)
    }

    if(isSignedIn) {
    subtotalCalculator()
    }

    // var res= userCart.reduce(totalPrice,0)

    // function totalPrice(ac,cv){
    //     return ac+Number(cv.price)

       
    // }
    // console.log(res)



    function goAddress(){
        if(!userCart.length) {
            return alert("There are no items in the cart! Please add something to proceed.")
        }
        localStorage.setItem("cartTotal", totalCostDisplay.textContent);
        window.location.href="checkout.html"
    }