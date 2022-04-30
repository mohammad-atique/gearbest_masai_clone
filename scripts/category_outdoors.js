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
            brand: "Xiaomi",
            img_url: "https://uidesign.gbtcdn.com/GB/image/6874/150x73.jpg"
        },
        {
            brand: "Mijia",
            img_url: "https://pdm.gw-ec.com/uploads/pdm-brand-logo/2019/03/05/20190307102445_5c8080ed0ecb3.jpg"
        },
        {
            brand: "Enkeeo",
            img_url: "https://uidesign.gbtcdn.com/GB/images/others/top_brands/enkeeo.png"
        },
        {
            brand: "FLOUREON",
            img_url: "https://uidesign.gbtcdn.com/GB/images/others/top_brands/floureon-329.jpg"
        },
        {
            brand: "GUB",
            img_url: "https://uidesign.gbtcdn.com/GB/image/brand/20190712_11282/gub.jpg?imbypass=true"
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
        priceFilter4(min = 60, max = 100)
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
        {
            name: "Mijia Electric Scooter M365 Pro Switch Panel Circuit Board - Black",
            price: 31,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/07/31/goods_thumb_220-v2/20190731170133_27892.jpg"
        },
        {
            name: "Mijia 150PSI Tire Inflator Air Pump Compressor Portable Digital Electric Inflatable Tool for Car Bike Ball Toy - Black",
            price: 63,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/08/07/goods_thumb_220-v1/20190807181506_33798.jpg"
        },
        {
            name: "Mijia 1S Walkie Talkie Thin Body Position Share Mobile Phone Writing-frequency FM Radio - Dark Slate Blue",
            price: 63,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/10/25/goods_thumb_220-v1/20181025162856_31510.jpg"
        },
        {
            name: "Mijia 1S Walkie Talkie - Deep Blue	3",
            price: 63,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/10/26/goods_thumb_220-v1/20181026161258_64742.jpg"
        },
        {
            name: "Global Version Xiaomi  M365  Smart Electric Scooter Skateboard Mini Foldable Adult 30km Battery MI HOME App Control - Black China",
            price: 429,
            img: "https://gloimg.gbtcdn.com/soa/gb/item/6771730315905003520/16391/goods_thumb_220-v1/f1b1d0aa1438.jpg"
        },
        {
            name: "Original Xiaomi Small Backpack 7L 10L Colorful Leisure Sports Chest Pack Bags Unisex For Men Women Traveling Camping - Dark blue 10L",
            price: 17,
            img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15897/goods_thumb_220-v9/eea37668d53b.jpg"
        },
        {
            name: " Xiaomi Electric Scooter 3 Smart E-Scooter 30km Distance 7650mAh Battery MIJIA Adulte Bicycle Fold Skateboard - Onyx Black",
            price: 521,
            img: "https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16414/goods_thumb_220-v1/8247042bf375.jpg"
        },
        {
            name: "iscooter Electric Scooter i9 Original Foldable Lightweight Skateboard Adult 30km/h Mi E-Scooter Skateboard Scooter with app - black United Kingdom",
            price: 386,
            img: "https://gloimg.gbtcdn.com/soa/gb/item/6701436345185419264/16388/goods_thumb_220-v2/bfb91d426e72.jpg"
        },
        {
            name: " Xiaomi Electric Scooter Essential and 1S Electric Scooter quick folding two wheels dual brake headlight multifunction panel - My Electric Scooter Essential SPAIN",
            price: 386,
            img: "https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16414/goods_thumb_220-v1/4fe5ba8b33b9.jpg"
        },
        {
            name: "Enkeeo Mini Bike Pump - Black 1pc	",
            price: 8,
            img: "https://gloimg.gbtcdn.com/gb/ebay/2016/201607/20160721/goods-goods_thumb_220/1469039931641-P-183513.jpg"
        },
        {
            name: "Enkeeo Sports Exercise Fitness puller",
            price: 28,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Ebay/2018/11/02/goods_thumb_220-v1/20181102151713_95602.jpg"
        },
        {
            name: "Enkeeo Caster Board Red",
            price: 40,
            img: "https://gloimg.gbtcdn.com/soa/gb/ebay/2016/201610/20161013/goods_thumb_220-v31/1476312159913-P-229882.jpg"
        },
        {
            name: "Enkeeo Bike U Lock",
            price: 25,
            img: "https://gloimg.gbtcdn.com/gb/ebay/2016/201608/20160810/goods-goods_thumb_220/1470772894767-P-173336.jpg"
        },
        {
            name: "Enkeeo Camping Tent-2 Person",
            price: 51,
            img: "https://gloimg.gbtcdn.com/gb/ebay/2016/201608/20160804/goods-goods_thumb_220/1470264628310-P-187639.jpg"
        },
        {
            name: "FLOUREON Portable AC 230V Power Bank",
            price: 131,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Ebay/2017/09/05/goods_thumb_220-v9/20170905164642_27437.jpg"
        },
        {
            name: "FLOUREON 8 Channel 4 Pack Twin Walkie Talkies PMR 446MHZ 2-Way Radio 3KM Range Interphone Red/Black - Red",
            price: 37,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Ebay/2019/11/01/goods_thumb_220-v2/20191101175003_58234.jpg"
        },
        {
            name: "FLOUREON USB C Portable Charger 26800mAh PD60W Power Bank with Type-C Input/Output for MacBook",
            price: 64,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Ebay/2018/12/11/goods_thumb_220-v4/20181211190702_76528.jpg"
        },
        {
            name: "FLOUREON Multi-Tool Pliers 14 in 1 Pocket Tool Set for Outdoor Fishing Survival Hunting - Black",
            price: 19,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Ebay/2018/11/30/goods_img_big-v2/20181130164624_41743.jpg"
        },
        {
            name: "FLOUREON HP300S Energy Storage Power Supply AC -3 00W Power - Silver	",
            price: 209,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/11/13/goods_thumb_220-v1/20181113191138_78781.jpg"
        },
        {
            name: "GUB G - 85 Aluminum Alloy Bicycle Handlebar Phone Holder - Black",
            price: 11,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Distribution/2018/06/27/goods_thumb_220-v1/20180627160720_52936.jpg"
        },
        {
            name: "GUB V13 Aluminum Alloy Rear Guide Wheel",
            price: 6,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/12/28/goods_thumb_220-v1/20181228095428_94134.jpg"
        },
        {
            name: "GUB F88 Children Riding Helmet with Warning Light",
            price: 85,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/05/10/goods_thumb_220-v1/20190510095318_22908.jpg"
        },
        {
            name: "GUB G - 81 Aluminium Alloy Phone Bracket Bicycle Motorcycle Smartphone Holder for Delivery Man - Black",
            price: 6,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/01/31/goods_thumb_220-v1/20190131113829_32392.jpg"
        },
        {
            name: "GUB Adjustable Stable Motorcycle Rearview Mirror",
            price: 7,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/05/10/goods_thumb_220-v3/20190510093516_82039.jpg"
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