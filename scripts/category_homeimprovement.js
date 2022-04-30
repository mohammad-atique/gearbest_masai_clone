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

    let registeredUsers = JSON.parse(localStorage.getItem('userDataBase')) || [];
    console.log(registeredUsers);
    
    let [isSignedIn, indexOfUserSignedIn] = JSON.parse(localStorage.getItem("loggedInUser")) || [false, -1];
    let signedInUserEmail = null;
    let userCart = null;
    let userFavorites = null;

    //If user is signed in we allocate user data to cart, favorites and email.
    if (isSignedIn) {
        signedInUserEmail = registeredUsers[indexOfUserSignedIn].useremail;
        userCart = registeredUsers[indexOfUserSignedIn].userCart;
        userFavorites = registeredUsers[indexOfUserSignedIn].userFavorites;
    }

    // console.log(signedInUserEmail)
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

    obj = [
        {
            brand: "Yeelight",
            img_url: "https://uidesign.gbtcdn.com/GB/images/others/pinpaiqiang/yeelogo.jpg"
        },
        {
            brand: "Nitecore",
            img_url: "https://uidesign.gbtcdn.com/GB/images/others/GB_brandpic/ni.jpg"
        },
        {
            brand: "WOWSTICK",
            img_url: "https://uidesign.gbtcdn.com/GB/image/brand/20190712_11282/WOWSTICK.jpg?imbypass=true"
        },
        {
            brand: "Xiomi",
            img_url: "https://uidesign.gbtcdn.com/GB/image/6874/150x73.jpg"
        },
        {
            brand: "Gocomma",
            img_url: "https://uidesign.gbtcdn.com/GB/images/banner/others/gocomme.png"
        },
    ]
    obj.map(function (elem) {
        var lilbox = document.createElement("button");
        lilbox.setAttribute("id", "lilbox");

        lilbox.addEventListener("click", function () {
            brandFilter(event, elem)
        });
        var image = document.createElement("img");
        image.setAttribute("src", elem.img_url);
        image.setAttribute("id", "pic");
        lilbox.append(image);
        document.querySelector("#brand").append(lilbox);
    });
    // var d = document.createElement("div");
    // d.textContent = "Price:";
    var b1 = document.createElement("button");
    b1.textContent = "$01.00-$20.00";
    b1.addEventListener("click", function () {
        priceFilter1(min = 01, max = 20)
    });
    var b2 = document.createElement("button");
    b2.textContent = "$20.01-$40.00";
    b2.addEventListener("click", function () {
        priceFilter2(min = 20, max = 40)
    });
    var b3 = document.createElement("button");
    b3.textContent = "$40.01-$60.00";

    b3.addEventListener("click", function () {
        priceFilter3(min = 40, max = 60)
    });
    var b4 = document.createElement("button");
    b4.textContent = "$60.01-$100.00";
    b4.addEventListener("click", function () {
        priceFilter4(min = 40, max = 100)
    });
    var b5 = document.createElement("button");
    b5.textContent = "$100.01-$300.00";
    b5.addEventListener("click", function () {
        priceFilter5(min = 100, max = 300)
    });
    var b6 = document.createElement("button");
    b6.textContent = "$300.01-$500.00";
    b6.addEventListener("click", function () {
        priceFilter6(min = 200, max = 500)
    });
    var d1 = document.querySelector("#custom")
    document.querySelector("#money").append(b1, b2, b3, b4, b5, b6, d1)
    var b = document.createElement("div");
    b.textContent = "Sort By:"
    var btn1 = document.createElement("button");
    btn1.textContent = "Recommended";
    btn1.addEventListener('click', sortRecommended);
    btn1.setAttribute("id", "recommend")
    var btn2 = document.createElement("button");
    btn2.addEventListener('click', sortHottest);
    btn2.textContent = "Hottest";
    var btn3 = document.createElement("button");
    btn3.textContent = "Newest";
    btn3.addEventListener('click', sortRecommended);
    var btn4 = document.createElement("button");
    btn4.textContent = "Rating";
    btn4.addEventListener('click', sortHottest);
    var btn5 = document.createElement("button");
    btn5.textContent = "Trending";
    btn5.addEventListener('click', sortTrending);
    var p = document.querySelector("#gold");
    document.querySelector("#sortby").append(b, btn1, btn2, btn3, btn4, btn5, p)

    var appliancesdata = [

{name: "Yeelight USB Powered Small Night Light",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/10/16/goods_thumb_220-v2/20191016155430_99304.jpg",
price: 24.25 
},

{name: "Yeelight YLDP13YL 1s LED Lamp Smart Bulb E26/E27 800lm AC 100 - 240V 8.5W Colorful Light Version",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/10/18/goods_thumb_220-v2/20191018101814_55865.jpg",
price: 45.86  
},


{name: "Yeelight YLTD14YL USB Rechargeable Folding 2700 - 5000K Table Lamp 200lm 5 Color Temperature Adjustable",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/11/05/goods_thumb_220-v2/20191105172947_5dc1410be62f3.jpg",
price: 41.78  
},


{name: "Yeelight YLCT01YL LED Bedside Lamp Adjustable Light Smart Voice Phone APP Control for Sleep Reading",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Distribution/2020/04/30/goods_thumb_220-v1/20200430102056_5eaa360818eb4.jpg",
price: 77.16 
},


{name: "Yeelight YLDP004 AC 200-240V 4.8W GU10 2700K White Light Dimming Version Smart LED Bulb",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2021/03/09/goods_thumb_220-v2/20210309152606_6047230e780f3.jpg",
price: 17.70 
},


// Xiaomi
{name: "Xiaomi MJJXLSD002QW 24-in-1 Precision Screwdriver Set Home Repair Tools",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/10/26/goods_thumb_220-v2/20201026105123_5f9639ab8e0df.jpg",
price: 46.99  
},


{name: "Xiaomi Electric Screwdriver Set 3.6V",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/11/02/goods_thumb_220-v1/20201102122831_5f9f8aef6ac43.jpg",
price: 95.99 
},


{name: "Xiaomi 2PCS LED Smart Bulbs White and Colorful Light Easy Installation",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Distribution/2020/04/09/goods_thumb_220-v2/20200409104557_5e8e8c6524eb9.jpg",
price: 71.07 
},


{name: "Xiaomi Mi Smart LED Bulb White and Colorful Light Compatible with Google Assistant / Amazon Alexa",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Distribution/2020/04/08/goods_thumb_220-v2/20200408101053_5e8d32ad1be9e.jpg",
price:  34.29
},


{name: "Xiaomi Human Body Sensor 2 Wireless Light Intensity Sensors and Movement Motion Sensor with Holder Smart Home Kit Work with BT Mesh Gateway",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2021/03/16/goods_thumb_220-v1/20210316174647_60507e87d28ef.jpg",
price:  19.89
},


//NITECORE

{name: "Nitecore TIP SE Dual-core Metal Keychain Lamp LED Light 700lm",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/08/17/goods_thumb_220-v2/20200817165222_5f3a4546a7785.jpg",
price: 45.16 
},


{name: "Nitecore TUBE USB Mini Flashlight Keychain 2 Modes 45LM",
img: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/11/20/goods-goods_thumb_220/1511149028823843880.jpg",
price: 14.99 
},


{name: "Nitecore NU05 Multiple Scenarios USB Rechargeable Headlamp",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/05/20/goods_thumb_220-v3/20190520090934_21407.jpg",
price: 23.64 
},


{name: "Nitecore TIKI 300LM Multipurpose LED Keychain Light",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/06/24/goods_thumb_220-v2/20200624114243_5ef2cbb31ae9a.jpg",
price: 36.01  
},


{name: "Nitecore TM9K Rechargeable Handheld Strong Light Suppression Flashlight 9500 Lumens",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/07/21/goods_thumb_220-v2/20200721115441_5f1667017ab01.jpg",
price: 185.10  
},

//Wowstick

{name: "WOWSTICK TRY 21 in 1 Mini Precise Handheld Cordless Electric Screwdriver Set 20 Bits",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2021/04/28/goods_thumb_220-v1/20210428141426_6088fd426af20.jpg",
price: 20.27  
},


{name: "WOWSTICK 1F+ Precision Screwdriver Kit for Repairing Work",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2021/04/26/goods_thumb_220-v1/20210426173755_608689f3398c9.jpg",
price: 24.20 
},


{name: "WOWSTICK Wowpad 2 Creative Magnetic Screw Positioning Plate Screwdriver Disassembly Companion",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2021/05/20/goods_thumb_220-v1/20210520165445_60a623d580d47.jpg",
price: 32.70 
},


{name: "WOWSTICK FZ Multifunctional Manual All-aluminum Screwdriver Set",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2021/04/26/goods_thumb_220-v1/20210426174621_60868bed4e185.jpg",
price: 48.55 
},


{name: "WOWSTICK TRY Dual Power Precision Screwdriver Set Mini Electric Manual Automatic Integrated Disassembly Repair Tool",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2021/05/20/goods_thumb_220-v1/20210520165851_60a624cbb7e98.jpg",
price: 39.95  
},

//Gocomma

{name: "Tetris Lights LED Luminous Building Block Desk Lamp Bedroom Night Light Hotel Window Atmosphere Lamp",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Other/2021/05/06/goods_thumb_220-v4/20210506092746_609346128529b.jpg",
price: 30.23 
},


{name: "Gocomma 5m 2GT - 6mm Rubber Opening Timing 3D Printer Belt",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/03/01/goods_thumb_220-v1/20190301121428_79526.jpg",
price: 6.10 
},


{name: "Gocomma POM Pulley Rubber Roller 10pcs",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/03/19/goods_thumb_220-v2/20190319165321_80708.jpg",
price: 12.50 
},


{name: "Gocomma Damper Blocker with Radiator for 42 Stepper Motor",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/03/06/goods_thumb_220-v1/20190306113109_41151.jpg",
price: 3.99 
},


{name: "Gocomma V6 Extrusion Head Kit 1.75mm ABS / PLA",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/03/01/goods_thumb_220-v1/20190301114108_12544.jpg",
price: 15.35 
},
{name: "Yeelight USB Powered Small Night Light",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/10/16/goods_thumb_220-v2/20191016155430_99304.jpg",
price: 24.25 
},

{name: "Yeelight YLDP13YL 1s LED Lamp Smart Bulb E26/E27 800lm AC 100 - 240V 8.5W Colorful Light Version",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/10/18/goods_thumb_220-v2/20191018101814_55865.jpg",
price: 45.86  
},


{name: "Yeelight YLTD14YL USB Rechargeable Folding 2700 - 5000K Table Lamp 200lm 5 Color Temperature Adjustable",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/11/05/goods_thumb_220-v2/20191105172947_5dc1410be62f3.jpg",
price: 41.78  
},


{name: "Yeelight YLCT01YL LED Bedside Lamp Adjustable Light Smart Voice Phone APP Control for Sleep Reading",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Distribution/2020/04/30/goods_thumb_220-v1/20200430102056_5eaa360818eb4.jpg",
price: 77.16 
},


{name: "Yeelight YLDP004 AC 200-240V 4.8W GU10 2700K White Light Dimming Version Smart LED Bulb",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2021/03/09/goods_thumb_220-v2/20210309152606_6047230e780f3.jpg",
price: 17.70 
},


// Xiaomi
{name: "Xiaomi MJJXLSD002QW 24-in-1 Precision Screwdriver Set Home Repair Tools",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/10/26/goods_thumb_220-v2/20201026105123_5f9639ab8e0df.jpg",
price: 46.99  
},


{name: "Xiaomi Electric Screwdriver Set 3.6V",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/11/02/goods_thumb_220-v1/20201102122831_5f9f8aef6ac43.jpg",
price: 95.99 
},


{name: "Xiaomi 2PCS LED Smart Bulbs White and Colorful Light Easy Installation",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Distribution/2020/04/09/goods_thumb_220-v2/20200409104557_5e8e8c6524eb9.jpg",
price: 71.07 
},


{name: "Xiaomi Mi Smart LED Bulb White and Colorful Light Compatible with Google Assistant / Amazon Alexa",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Distribution/2020/04/08/goods_thumb_220-v2/20200408101053_5e8d32ad1be9e.jpg",
price:  34.29
},


{name: "Xiaomi Human Body Sensor 2 Wireless Light Intensity Sensors and Movement Motion Sensor with Holder Smart Home Kit Work with BT Mesh Gateway",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2021/03/16/goods_thumb_220-v1/20210316174647_60507e87d28ef.jpg",
price:  19.89
},


//NITECORE

{name: "NITECORE TIP SE Dual-core Metal Keychain Lamp LED Light 700lm",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/08/17/goods_thumb_220-v2/20200817165222_5f3a4546a7785.jpg",
price: 45.16 
},


{name: "NITECORE TUBE USB Mini Flashlight Keychain 2 Modes 45LM",
img: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/11/20/goods-goods_thumb_220/1511149028823843880.jpg",
price: 14.99 
},


{name: "NITECORE NU05 Multiple Scenarios USB Rechargeable Headlamp",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/05/20/goods_thumb_220-v3/20190520090934_21407.jpg",
price: 23.64 
},


{name: "NITECORE TIKI 300LM Multipurpose LED Keychain Light",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/06/24/goods_thumb_220-v2/20200624114243_5ef2cbb31ae9a.jpg",
price: 36.01  
},


{name: "NITECORE TM9K Rechargeable Handheld Strong Light Suppression Flashlight 9500 Lumens",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/07/21/goods_thumb_220-v2/20200721115441_5f1667017ab01.jpg",
price: 185.10  
},

//Wowstick

{name: "WOWSTICK TRY 21 in 1 Mini Precise Handheld Cordless Electric Screwdriver Set 20 Bits",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2021/04/28/goods_thumb_220-v1/20210428141426_6088fd426af20.jpg",
price: 20.27  
},


{name: "WOWSTICK 1F+ Precision Screwdriver Kit for Repairing Work",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2021/04/26/goods_thumb_220-v1/20210426173755_608689f3398c9.jpg",
price: 24.20 
},


{name: "WOWSTICK Wowpad 2 Creative Magnetic Screw Positioning Plate Screwdriver Disassembly Companion",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2021/05/20/goods_thumb_220-v1/20210520165445_60a623d580d47.jpg",
price: 32.70 
},


{name: "WOWSTICK FZ Multifunctional Manual All-aluminum Screwdriver Set",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2021/04/26/goods_thumb_220-v1/20210426174621_60868bed4e185.jpg",
price: 48.55 
},


{name: "WOWSTICK TRY Dual Power Precision Screwdriver Set Mini Electric Manual Automatic Integrated Disassembly Repair Tool",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2021/05/20/goods_thumb_220-v1/20210520165851_60a624cbb7e98.jpg",
price: 39.95  
},

//Gocomma

{name: "Tetris Lights LED Luminous Building Block Desk Lamp Bedroom Night Light Hotel Window Atmosphere Lamp",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Other/2021/05/06/goods_thumb_220-v4/20210506092746_609346128529b.jpg",
price: 30.23 
},


{name: "Gocomma 5m 2GT - 6mm Rubber Opening Timing 3D Printer Belt",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/03/01/goods_thumb_220-v1/20190301121428_79526.jpg",
price: 6.10 
},


{name: "Gocomma POM Pulley Rubber Roller 10pcs",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/03/19/goods_thumb_220-v2/20190319165321_80708.jpg",
price: 12.50 
},


{name: "Gocomma Damper Blocker with Radiator for 42 Stepper Motor",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/03/06/goods_thumb_220-v1/20190306113109_41151.jpg",
price: 3.99 
},


{name: "Gocomma V6 Extrusion Head Kit 1.75mm ABS / PLA",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/03/01/goods_thumb_220-v1/20190301114108_12544.jpg",
price: 15.35 
},
]


    displayData(appliancesdata);
    function displayData(appliancesdata) {
        document.querySelector(".sSbox3").innerHTML = "";
        appliancesdata.map(function (data) {
            var dis = document.createElement("div");
            var dis1 = document.createElement("div")
            dis1.setAttribute("id", "picdiv")
            var image = document.createElement("img")
            image.setAttribute("src", data.img);
            image.setAttribute("id", "ip")
            dis1.append(image)
            var dis2 = document.createElement("div")
            dis2.setAttribute("id", "whish")
            var name = document.createElement("p")
            name.textContent = data.name;
            dis2.append(name)
            var dis3 = document.createElement("div")
            dis3.setAttribute("id", "cartdiv")
            var pri = document.createElement("p")
            pri.textContent = "$" + data.price;
            pri.setAttribute("id", "pri")
            var btn = document.createElement("button");
            btn.textContent = "Add To Cart";
            btn.setAttribute("id", "addcart")

            //FUNCTION PART OF SIGNIN/SIGNUP FLOW
            btn.addEventListener("click", function () {
                addToCart(data);
            });
            dis3.append(pri, btn)
            var dis4 = document.createElement("div")
            dis4.setAttribute("id", "Rating")
            //Ratings
            var Ratings = Math.random() * (5 - 3.5) + 3.5;
            Ratings = parseFloat(Ratings).toFixed(1);
            //Reviews
            var reviews = Math.random() * 500;
            reviews = Math.ceil(reviews);
            var Ratings_review = document.createElement("p")
            Ratings_review.setAttribute("class", "Ratings_review")
            Ratings_review.textContent = Ratings + " " + "(" + reviews + ")";

            //Favourite
            //FUNCTION PART OF SIGNIN/SIGNUP FLOW
            var favourite = document.createElement("p")
            favourite.addEventListener("click", function () {
                addToFav(data);
            });
            favourite.setAttribute("class", "favourite_btn")
            favourite.textContent = "";
            dis4.append(Ratings_review, favourite)
            dis.append(dis1, dis2, dis3, dis4)
            document.querySelector(".sSbox3").append(dis)
        });
    }
    
    //FUNCTION PART OF USER FLOW
    function addToCart(data) {
        
        if(isSignedIn) {
            for(let i = 0; i < userCart.length; i++) {
                if(userCart[i].img == data.img) {
                    return alert("Item already added to cart!");
                }
            }
            userCart.push(data);
            registeredUsers[indexOfUserSignedIn].userCart = userCart;
            localStorage.setItem("userDataBase", JSON.stringify(registeredUsers));
            document.querySelector(".cartCounter").textContent = userCart.length;

            alert("Item added to cart successfully!");
        } else {
            return alert("Please Sign in to access your Cart!")
        }
    }

    //FUNCTION PART OF USER FLOW

    function addToFav(data) {
      
        if(isSignedIn) {
            for(let i = 0; i < userFavorites.length; i++) {
                if(userFavorites[i].img == data.img) {
                    return alert("The Item is already in your Wishlist!");
                }
            }
            userFavorites.push(data);
            registeredUsers[indexOfUserSignedIn].userFavorites = userFavorites;
            localStorage.setItem("userDataBase", JSON.stringify(registeredUsers));
            document.querySelector(".favCounter").textContent = userFavorites.length;

            alert("Item added to Wishlist successfully!");
        } else {
            return alert("Please Sign in to access your Wishlist!")
        }
    }



    //   filtering

    var filtered_product = [];
    function brandFilter(event, elem) {
        console.log(elem.brand)
        for (var i = 0; i < appliancesdata.length; i++) {
            let flag = true;
            // if (filtered_product.forEach(function (elem) {
            //     elem.name == appliancesdata[i].name ? flag = false : console.log(1);
            // }))
            for (let j = 0; j < filtered_product.length; j++) {
                if (filtered_product[j].name == appliancesdata[i].name) {
                    flag = false;
                    break;
                }
            }

            if (flag == true) {
                if (appliancesdata[i].name.includes(elem.brand)) {
                    filtered_product.push(appliancesdata[i]);
                }
            }
        }
        console.log(appliancesdata.length)
        displayData(filtered_product);
    }
    var filtered_product1 = [];
    function priceFilter1(min = 01, max = 20) {
        for (var i = 0; i < appliancesdata.length; i++) {
            let flag = true;
            for (let j = 0; j < filtered_product1.length; j++) {
                if (filtered_product1[j].name == appliancesdata[i].name) {
                    flag = false;
                    break;
                }
            }
            if (flag == true) {
                if (appliancesdata[i].price >= min && appliancesdata[i].price <= max) {
                    filtered_product1.push(appliancesdata[i])
                }
            }
        }
        displayData(filtered_product1)
    }


    var filtered_product2 = [];
    function priceFilter2(min = 20, max = 40) {
        for (var i = 0; i < appliancesdata.length; i++) {
            let flag = true;
            for (let j = 0; j < filtered_product2.length; j++) {
                if (filtered_product2[j].name == appliancesdata[i].name) {
                    flag = false;
                    break;
                }
            }
            if (flag == true) {
                if (appliancesdata[i].price > min && appliancesdata[i].price <= max) {
                    filtered_product2.push(appliancesdata[i])
                }
            }
        }
        displayData(filtered_product2)
    }


    var filtered_product3 = [];
    function priceFilter3(min = 40, max = 60) {
        for (var i = 0; i < appliancesdata.length; i++) {
            let flag = true;
            for (let j = 0; j < filtered_product3.length; j++) {
                if (filtered_product3[j].name == appliancesdata[i].name) {
                    flag = false;
                    break;
                }
            }
            if (flag == true) {
                if (appliancesdata[i].price > min && appliancesdata[i].price <= max) {
                    filtered_product3.push(appliancesdata[i])
                }
            }
        }
        displayData(filtered_product3)
    }

    var filtered_product4 = [];
    function priceFilter4(min = 60, max = 100) {
        for (var i = 0; i < appliancesdata.length; i++) {
            let flag = true;
            for (let j = 0; j < filtered_product4.length; j++) {
                if (filtered_product4[j].name == appliancesdata[i].name) {
                    flag = false;
                    break;
                }
            }
            if (flag == true) {
                if (appliancesdata[i].price > min && appliancesdata[i].price <= max) {
                    filtered_product4.push(appliancesdata[i])
                }
            }
        }
        displayData(filtered_product4)
    }


    var filtered_product5 = [];
    function priceFilter5(min = 100, max = 300) {
        for (var i = 0; i < appliancesdata.length; i++) {
            let flag = true;
            for (let j = 0; j < filtered_product5.length; j++) {
                if (filtered_product5[j].name == appliancesdata[i].name) {
                    flag = false;
                    break;
                }
            }
            if (flag == true) {
                if (appliancesdata[i].price > min && appliancesdata[i].price <= max) {
                    filtered_product5.push(appliancesdata[i])
                }
            }
        }
        displayData(filtered_product5)
    }

    var filtered_product6 = [];
    function priceFilter6(min = 300, max = 500) {
        for (var i = 0; i < appliancesdata.length; i++) {
            let flag = true;
            for (let j = 0; j < filtered_product6.length; j++) {
                if (filtered_product6[j].name == appliancesdata[i].name) {
                    flag = false;
                    break;
                }
            }
            if (flag == true) {
                if (appliancesdata[i].price > min && appliancesdata[i].price <= max) {
                    filtered_product6.push(appliancesdata[i])
                }
            }
        }
        displayData(filtered_product6)
    }
    var filtered_product7 = []
    document.querySelector("form").addEventListener("submit", priceFilter7)
    function priceFilter7(event) {
        event.preventDefault();
        var minprice = document.querySelector("#min").value;
        var maxprice = document.querySelector("#max").value;
        for (var i = 0; i < appliancesdata.length; i++) {
            let flag = true;
            for (let j = 0; j < filtered_product7.length; j++) {
                if (filtered_product7[j].name == appliancesdata[i].name) {
                    flag = false;
                    break;
                }
            }
            if (flag == true) {
                if (appliancesdata[i].price >= minprice && appliancesdata[i].price <= maxprice) {
                    filtered_product7.push(appliancesdata[i])
                }
            }
        }
        displayData(filtered_product7)
    }

    //SORTING

    function sortRecommended() {
        let sortedArray = appliancesdata.sort(function(a, b) {
                if(a.name < b.name) {
                    return -1;
                } else {
                    return 1;
                }
            })
            displayData(sortedArray)
    }

    function sortTrending() {
        let sortedArray = appliancesdata.sort(function(a, b) {
                if(a.img < b.img) {
                    return -1;
                } else {
                    return 1;
                }
            })
            displayData(sortedArray)
    }

    function sortHottest() {
        let sortedArray = appliancesdata.sort(function(a, b) {
                if(a.name > b.name) {
                    return -1;
                } else {
                    return 1;
                }
            })
            displayData(sortedArray)
    }

    document.querySelector("#gold").addEventListener('change', function() {
        if(event.target.value == "") {
            return;
        }
        if(event.target.value == "lth") {
            let sortedArray = appliancesdata.sort(function(a, b) {
                if(a.price < b.price) {
                    return -1;
                } else {
                    return 1;
                }
            })
            displayData(sortedArray)
        } else {
            let sortedArray = appliancesdata.sort(function(a, b) {
                if(a.price < b.price) {
                    return 1;
                } else {
                    return -1;
                }
            })
            displayData(sortedArray)
        }
     })