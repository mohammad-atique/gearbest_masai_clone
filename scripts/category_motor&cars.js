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
            brand: "Minismile",
            img_url: "https://uidesign.gbtcdn.com/GB/images/others/top_brands/minismile%20150%2073.png"
        },
        {
            brand: "Baseus",
            img_url: "https://uidesign.gbtcdn.com/GB/images/banner/brand_logo/Baseue_150x73.jpg"
        },
        {
            brand: "KELIMA",
            img_url: "https://uidesign.gbtcdn.com/GB/images/others/top_brands/kelima.jpg"
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
        priceFilter6(min = 300, max = 500)
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
            name : "Mini USB 4.2 Bluetooth Audio Receiver Mijia",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/11/28/goods_thumb_220-v1/20181128092233_82070.jpg",
            price : 5.11
        },
        {
            name : "Mijia 3.0 inch Car DVR Camera Wifi Voice Control Smart Dash Cam 1S 1080P HD Night Vision 140FOV Auto Video Recorder",
            img : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16014/goods_thumb_220-v9/5d4ca252a453.jpg",
            price : 81.99
        },
        {
            name : "Mijia Car Aux Bluetooth 5.0 Adapter Wireless 3.5mm Audio Receiver For Auto Bluetooth Handsfree Car Kit Speaker Headphone",
            img : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15897/goods_thumb_220-v1/09720f5c7047.jpg",
            price : 15.60
        },
        {
            name : "KELIMA Motorcycle Helmet Light Strip",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/04/01/goods_thumb_220-v1/20190401171921_69919.jpg",
            price : 11.51
        },
        {
            name : "KELIMA Riding Tribe JK - 21 Reflect Racing Winter Motorcycle Waterproof Jackets",
            img : "https://gloimg.gbtcdn.com/gb/pdm-provider-img/straight-product-img/20171206/T013642/T0136420023/goods-goods_thumb_220/1512613476263952288.jpg",
            price : 66.03
        },
        {
            name : "KELIMA Outdoor Sports Motorcycle Goggles",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/03/26/goods_thumb_220-v1/20190326144229_77904.jpg",
            price : 6.80
        },
        {
            name : "KELIMA Paired Half-finger Motorcycle Gloves",
            img : "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Distribution/2016/05/11/goods-goods_thumb_220/20160511151125_22965.jpg",
            price : 458.77
        },
        {
            name : "Summer Off-road Helmet Men's Personality Locomotive Pull Helmet Full-cover Full-face Helmet Four-way Road Helmet Gocomma",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/2018/10/22/goods_thumb_220-v1/20181022030648_60290.jpg",
            price : 59.17
        },
        {
            name : "Original Xiaomi Dash Cam 2 2K DVR 3 inch Display WIFI Voice Control Car Driving Digital Video Recorder 140 Wide Angle Night Vision",
            img : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15941/goods_thumb_220-v5/675551664df8.jpg",
            price : 77.99
        },
        {
            name : "Xiaomi Recorder 2 Standard Edition 1080P HD Car DVR",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/11/02/goods_thumb_220-v2/20201102122544_5f9f8a480fa85.jpg",
            price : 151.9
        },
        {
            name : "Xiaomi Smart Sensor 3-in-1 Bluetooth 5.0 Phone Holder Wireless Charging Navigation Bracket",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/08/16/goods_thumb_220-v1/20190816165128_84377.jpg",
            price : 24.87
        },
        {
            name : "Minismile Universal Car Dashboard Mount Holder Stand",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/07/18/goods_thumb_220-v4/20180718153036_22336.jpg",
            price : 6.49
        },
        {
            name : "Xiaomi WCJ02ZM Infrared Sensor Wireless Car Charger",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/03/27/goods_thumb_220-v2/20190327174835_52653.jpg",
            price : 74.20
        },
        {
            name : "KELIMA Q1 Car Mobile Phone Wireless Charger Bracket Automatic Sensing Opening and Closing",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2021/01/06/goods_thumb_220-v1/20210106143608_5ff55a58c1b1b.jpg",
            price : 21.48
        },
        {
            name : "KELIMA Summer Ice Silk Car Seat Cushion",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/11/20/goods_thumb_220-v1/20181120142505_71273.jpg",
            price : 110.8
        },
        {
            name : "Baseus Sports Punching EVA Car Steering Wheel Cover Economical Personality Cartoon Car Interior Supplies",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2021/03/30/goods_thumb_220-v1/20210330151614_6062d03e7a876.jpg",
            price : 13.82
        },
        {
            name : "Baseus Automatic Car Windshield Sunshade Front Window Suction Cup Retractable Style",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2021/04/15/goods_thumb_220-v1/20210415152107_6077e9634aba6.jpg",
            price : 35.29
        },
        {
            name : "Baseus Mini Cordless Handheld Vacuum Cleaner Rechargeable 4000Pa Strong Suction for Home and Car",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/10/10/goods_thumb_220-v3/20191010111645_87223.jpg",
            price : 53.85
        },
        {
            name : "New Xiaomi Air Humidifier For Home Mini Magic Shadow 200ml USB Projection Night Lights Ultrasonic Car Mist Maker Air Purifier",
            img : "https://gloimg.gbtcdn.com/soa/gb/item/6701436345185419264/16391/goods_thumb_220-v1/c1f82b697c82.jpg",
            price : 35.99
        },
        {
            name : "Baseus Angle Grinder Bracket Holder Support for 100-125 Angle Grinder DIY Cutting Stand Power Tools Accessories Stander",
            img : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15937/goods_thumb_220-v1/228471e66d22.jpg",
            price : 51.99
        },
        {
            name : "Gocomma Funnel Snow Scraper Ice Scraper Car Windshield Snow Cover Ice Scrapers",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20191108/goods_thumb_220-v2/2019110818092185412.jpg",
            price : 5.47
        },
        {
            name : "Minismile Car High Pressure Deep Cleaning Machine Tool",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/06/18/goods_thumb_220-v1/20190618110752_63829.jpg",
            price : 346.73
        },
        {
            name : "Minismile Spray Type Brushes Cleaning Multifunctional Cleaner Helper Car Window Wizard Washing Tool",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/2018/10/26/goods_thumb_220-v1/20181026183559_26565.jpg",
            price : 10.97
        },
        {
            name : "Minismile 7010B TFT Screen Car Audio Stereo MP5 Player",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/04/03/goods_thumb_220-v2/20190403095131_20128.jpg",
            price : 64.13
        },
        {
            name : "Minismile B733 Z Motorcycle Speedometer Odometer Tachometer",
            img : "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Distribution/2016/05/23/goods-goods_thumb_220/20160523095634_26357.jpg",
            price : 26.60
        },
        {
            name : "Mini USB 4.2 Bluetooth Audio Receiver Mijia",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/11/28/goods_thumb_220-v1/20181128092233_82070.jpg",
            price : 5.11
        },
        {
            name : "Mijia 3.0 inch Car DVR Camera Wifi Voice Control Smart Dash Cam 1S 1080P HD Night Vision 140FOV Auto Video Recorder",
            img : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16014/goods_thumb_220-v9/5d4ca252a453.jpg",
            price : 81.99
        },
        {
            name : "Mijia Car Aux Bluetooth 5.0 Adapter Wireless 3.5mm Audio Receiver For Auto Bluetooth Handsfree Car Kit Speaker Headphone",
            img : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15897/goods_thumb_220-v1/09720f5c7047.jpg",
            price : 15.60
        },
        {
            name : "KELIMA Motorcycle Helmet Light Strip",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/04/01/goods_thumb_220-v1/20190401171921_69919.jpg",
            price : 11.51
        },
        {
            name : "KELIMA Riding Tribe JK - 21 Reflect Racing Winter Motorcycle Waterproof Jackets",
            img : "https://gloimg.gbtcdn.com/gb/pdm-provider-img/straight-product-img/20171206/T013642/T0136420023/goods-goods_thumb_220/1512613476263952288.jpg",
            price : 66.03
        },
        {
            name : "KELIMA Outdoor Sports Motorcycle Goggles",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/03/26/goods_thumb_220-v1/20190326144229_77904.jpg",
            price : 6.80
        },
        {
            name : "KELIMA Paired Half-finger Motorcycle Gloves",
            img : "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Distribution/2016/05/11/goods-goods_thumb_220/20160511151125_22965.jpg",
            price : 458.77
        },
        {
            name : "Summer Off-road Helmet Men's Personality Locomotive Pull Helmet Full-cover Full-face Helmet Four-way Road Helmet Gocomma",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/2018/10/22/goods_thumb_220-v1/20181022030648_60290.jpg",
            price : 59.17
        },
        {
            name : "Original Xiaomi Dash Cam 2 2K DVR 3 inch Display WIFI Voice Control Car Driving Digital Video Recorder 140 Wide Angle Night Vision",
            img : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15941/goods_thumb_220-v5/675551664df8.jpg",
            price : 77.99
        },
        {
            name : "Xiaomi Recorder 2 Standard Edition 1080P HD Car DVR",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/11/02/goods_thumb_220-v2/20201102122544_5f9f8a480fa85.jpg",
            price : 151.9
        },
        {
            name : "Xiaomi Smart Sensor 3-in-1 Bluetooth 5.0 Phone Holder Wireless Charging Navigation Bracket",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/08/16/goods_thumb_220-v1/20190816165128_84377.jpg",
            price : 24.87
        },
        {
            name : "Minismile Universal Car Dashboard Mount Holder Stand",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/07/18/goods_thumb_220-v4/20180718153036_22336.jpg",
            price : 6.49
        },
        {
            name : "Xiaomi WCJ02ZM Infrared Sensor Wireless Car Charger",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/03/27/goods_thumb_220-v2/20190327174835_52653.jpg",
            price : 74.20
        },
        {
            name : "KELIMA Q1 Car Mobile Phone Wireless Charger Bracket Automatic Sensing Opening and Closing",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2021/01/06/goods_thumb_220-v1/20210106143608_5ff55a58c1b1b.jpg",
            price : 21.48
        },
        {
            name : "KELIMA Summer Ice Silk Car Seat Cushion",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/11/20/goods_thumb_220-v1/20181120142505_71273.jpg",
            price : 110.8
        },
        {
            name : "Baseus Sports Punching EVA Car Steering Wheel Cover Economical Personality Cartoon Car Interior Supplies",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2021/03/30/goods_thumb_220-v1/20210330151614_6062d03e7a876.jpg",
            price : 13.82
        },
        {
            name : "Baseus Automatic Car Windshield Sunshade Front Window Suction Cup Retractable Style",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2021/04/15/goods_thumb_220-v1/20210415152107_6077e9634aba6.jpg",
            price : 35.29
        },
        {
            name : "Baseus Mini Cordless Handheld Vacuum Cleaner Rechargeable 4000Pa Strong Suction for Home and Car",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/10/10/goods_thumb_220-v3/20191010111645_87223.jpg",
            price : 53.85
        },
        {
            name : "New Xiaomi Air Humidifier For Home Mini Magic Shadow 200ml USB Projection Night Lights Ultrasonic Car Mist Maker Air Purifier",
            img : "https://gloimg.gbtcdn.com/soa/gb/item/6701436345185419264/16391/goods_thumb_220-v1/c1f82b697c82.jpg",
            price : 35.99
        },
        {
            name : "Baseus Angle Grinder Bracket Holder Support for 100-125 Angle Grinder DIY Cutting Stand Power Tools Accessories Stander",
            img : "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15937/goods_thumb_220-v1/228471e66d22.jpg",
            price : 51.99
        },
        {
            name : "Gocomma Funnel Snow Scraper Ice Scraper Car Windshield Snow Cover Ice Scrapers",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20191108/goods_thumb_220-v2/2019110818092185412.jpg",
            price : 5.47
        },
        {
            name : "Minismile Car High Pressure Deep Cleaning Machine Tool",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/06/18/goods_thumb_220-v1/20190618110752_63829.jpg",
            price : 346.73
        },
        {
            name : "Minismile Spray Type Brushes Cleaning Multifunctional Cleaner Helper Car Window Wizard Washing Tool",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/2018/10/26/goods_thumb_220-v1/20181026183559_26565.jpg",
            price : 10.97
        },
        {
            name : "Minismile 7010B TFT Screen Car Audio Stereo MP5 Player",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/04/03/goods_thumb_220-v2/20190403095131_20128.jpg",
            price : 64.13
        },
        {
            name : "Minismile B733 Z Motorcycle Speedometer Odometer Tachometer",
            img : "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Distribution/2016/05/23/goods-goods_thumb_220/20160523095634_26357.jpg",
            price : 26.60
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