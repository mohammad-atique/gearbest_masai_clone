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
            brand: "SYMA",
            img_url: "https://css.gbtcdn.com/imagecache/GB/images/logolist/syma.png"
        },
        {
            brand: "JJRC",
            img_url: "https://uidesign.gbtcdn.com/GB/image/brand/20181102_5779/JJRC.jpg?impolicy=hight"
        },
        {
            brand: "FIMI",
            img_url: "http://pdm.gw-ec.com/uploads/pdm-brand-logo/2018/12/20/20190214195313_5c6556a971bdf.jpg"
            
        },
        {
            brand: "HGLRC",
            img_url: "https://uidesign.gbtcdn.com/GB/images/others/top_brands/hglrclogo.jpg"
        },
        {
            brand: "CaDA",
            img_url: "https://uidesign.gbtcdn.com/GB/images/others/top_brands/CADA.jpg"
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
    
//SYMA

{name: "SYMA 4pcs Motor Gear for X5 X5C X5SC X5SW X5HC X5HW",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Distribution/2017/03/07/goods_thumb_220-v1/20170307143506_87640.jpg",
price: 2.99  
},

{name: "4Pcs Blades / Propellers for SYMA X5C / X5SC / X5SW RC Qaudcopters",
img: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/09/12/goods-goods_thumb_220/1505154782639091008.jpg",
price: 2.57
},

{name: "Professional SYMA X8C X8G X8W X8HC X8HW Spare Accessary Fluorescent Green Propeller - 4Pcs",
img: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/03/08/goods-goods_thumb_220/20170308150305_86737.jpg",
price: 3.55
},

{name: "Spare Landing Skid + Protection Ring / Propeller Set Fitting for SYMA X8C X8HC X8HW X8HG Quadcopter",
img: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2016/02/17/goods-goods_thumb_220/20160217191310_44946.JPG",
price: 12.97  
},

{name: "4Pcs Propeller for SYMA X8C X8W X8HC X8HW RC Qaudcopters",
img: "https://gloimg.gbtcdn.com/gb/2015/201508/goods-goods_thumb_220/1439509439869-P-2826378.jpg",
price: 7.35  
},

//JJRC

{name: "JJRC H36 Mini RC Drone",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/12/19/goods_thumb_220-v1/20181219164807_92936.jpg",
price: 37.99 
},

{name: "Original JJRC Protection Ring",
img: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/02/27/goods-goods_thumb_220/20170227111813_74244.jpg",
price: 3.57 	  
},

{name: "JJRC X11 5G WiFi GPS RC Drone - RTF",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/05/10/goods_thumb_220-v1/20190510172515_16303.jpg",
price: 403.99 
},

{name: "JJRC X5P EPIK+ 5G WiFi FPV RC Camera Drone Quadcopter",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/01/13/goods_thumb_220-v2/20200113165058_5e1c2f7220619.jpg",
price: 217.30  
},

{name: "JJRC R11 Cady Wike Robot Song Dance Light Gliding Toy for Children",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/10/23/goods_thumb_220-v6/20181023173052_87860.jpg",
price: 26.56 
},

//FIMI

{name: "FIMI YTXJ06FM Gimbal Camera 3-Axis Stabilizer 128° Wide Angle Smart Following WiFi Wireless Connection Noise Cancellation",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/11/20/goods_thumb_220-v2/20201120113914_5fb73a62da8bc.jpg",
price: 338.18	  
},

{name: "FIMI X8 SE FPV 4K 3-Axis Gimbal WiFi RC Camera Drone Quadcopter",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/09/20/goods_thumb_220-v1/20190920151533_48715.jpg",
price: 873.82 
},

{name: "FIMI A3 5.8G 1KM FPV 3-axis Gimbal 1080P GPS RC Camera Drone Quadcopter RTF",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/10/26/goods_thumb_220-v1/20181026180253_47658.jpg",
price: 377.21 
},

{name: "FIMI X8 SE FPV 3-Axis Gimbal WiFi RC Camera Drone Quadcopter",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/10/18/goods_thumb_220-v2/20191018104032_32626.jpg",
price:  757.24
},

{name: "FIMI Collapsible Propeller 4PCS",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/05/14/goods_thumb_220-v1/20190514084810_70815.jpg",
price: 19.45 
},

//HGLRC

{name: "HGLRC Forward F722 3-6S F7 Flight Controller",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/04/16/goods_thumb_220-v1/20200416132901_5e97ed1d74c70.jpg",
price: 68.27 
},

{name: "HGLRC Zeus F735-VTX STACK 20 x 20 2-6S / F722 Flight Controller / 35A BL32 4-in-1 ESC / MT VTX Mini 600mW",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/04/23/goods_thumb_220-v1/20200423115004_5ea1106c169ff.jpg",
price:97.85 
},

{name: "HGLRC LED Light Board ARM C232B for ESC Motors 4pcs",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/06/08/goods_thumb_220-v1/20200608114827_5eddb50b67ecd.jpg",
price: 11.37 
},

{name: "HGLRC XJB - 145MM FPV Racing Drone BNF",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/01/16/goods_thumb_220-v2/20190116090041_27006.jpg",
price: 266.05 
},

{name: "HGLRC Toothpick Parrot120 Micro 2-3S FPV Racing Drone",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/09/03/goods_thumb_220-v1/20190903085817_17614.jpg",
price: 166.63  
},

//CaDa

{name: "CaDA DIY Assembled Simulation Military Truck Building Block Toy",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/08/29/goods_thumb_220-v2/20180829113843_55859.jpg",
price: 50.87  
},

{name: "CaDA C81005W Assembling Gun Building Block Toy Set",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/04/27/goods_thumb_220-v3/20190427100354_88643.jpg",
price: 50.44 
},

{name: "CaDA Kids Assembling Building Blocks Toy",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/08/03/goods_thumb_220-v1/20180803102820_31325.jpg",
price: 46.36 
},

{name: "CaDA C81008W Puzzle Building Block Assembling Toy",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/04/22/goods_thumb_220-v3/20190422190413_79776.jpg",
price: 24.45 
},

{name: "CaDA C81006W Submachine Gun Model Building Blocks Set",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/04/29/goods_thumb_220-v3/20190429100626_50361.jpg",
price: 50.44 
},
//SYMA

{name: "SYMA 4pcs Motor Gear for X5 X5C X5SC X5SW X5HC X5HW",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Distribution/2017/03/07/goods_thumb_220-v1/20170307143506_87640.jpg",
price: 2.99  
},

{name: "4Pcs Blades / Propellers for SYMA X5C / X5SC / X5SW RC Qaudcopters",
img: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/09/12/goods-goods_thumb_220/1505154782639091008.jpg",
price: 2.57
},

{name: "Professional SYMA X8C X8G X8W X8HC X8HW Spare Accessary Fluorescent Green Propeller - 4Pcs",
img: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/03/08/goods-goods_thumb_220/20170308150305_86737.jpg",
price: 3.55
},

{name: "Spare Landing Skid + Protection Ring / Propeller Set Fitting for SYMA X8C X8HC X8HW X8HG Quadcopter",
img: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2016/02/17/goods-goods_thumb_220/20160217191310_44946.JPG",
price: 12.97  
},

{name: "4Pcs Propeller for SYMA X8C X8W X8HC X8HW RC Qaudcopters",
img: "https://gloimg.gbtcdn.com/gb/2015/201508/goods-goods_thumb_220/1439509439869-P-2826378.jpg",
price: 7.35  
},

//JJRC

{name: "JJRC H36 Mini RC Drone",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/12/19/goods_thumb_220-v1/20181219164807_92936.jpg",
price: 37.99 
},

{name: "Original JJRC Protection Ring",
img: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/02/27/goods-goods_thumb_220/20170227111813_74244.jpg",
price: 3.57 	  
},

{name: "JJRC X11 5G WiFi GPS RC Drone - RTF",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/05/10/goods_thumb_220-v1/20190510172515_16303.jpg",
price: 403.99 
},

{name: "JJRC X5P EPIK+ 5G WiFi FPV RC Camera Drone Quadcopter",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/01/13/goods_thumb_220-v2/20200113165058_5e1c2f7220619.jpg",
price: 217.30  
},

{name: "JJRC R11 Cady Wike Robot Song Dance Light Gliding Toy for Children",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/10/23/goods_thumb_220-v6/20181023173052_87860.jpg",
price: 26.56 
},

//FIMI

{name: "FIMI YTXJ06FM Gimbal Camera 3-Axis Stabilizer 128° Wide Angle Smart Following WiFi Wireless Connection Noise Cancellation",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/11/20/goods_thumb_220-v2/20201120113914_5fb73a62da8bc.jpg",
price: 338.18	  
},

{name: "FIMI X8 SE FPV 4K 3-Axis Gimbal WiFi RC Camera Drone Quadcopter",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/09/20/goods_thumb_220-v1/20190920151533_48715.jpg",
price: 873.82 
},

{name: "FIMI A3 5.8G 1KM FPV 3-axis Gimbal 1080P GPS RC Camera Drone Quadcopter RTF",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/10/26/goods_thumb_220-v1/20181026180253_47658.jpg",
price: 377.21 
},

{name: "FIMI X8 SE FPV 3-Axis Gimbal WiFi RC Camera Drone Quadcopter",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/10/18/goods_thumb_220-v2/20191018104032_32626.jpg",
price:  757.24
},

{name: "FIMI Collapsible Propeller 4PCS",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/05/14/goods_thumb_220-v1/20190514084810_70815.jpg",
price: 19.45 
},

//HGLRC

{name: "HGLRC Forward F722 3-6S F7 Flight Controller",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/04/16/goods_thumb_220-v1/20200416132901_5e97ed1d74c70.jpg",
price: 68.27 
},

{name: "HGLRC Zeus F735-VTX STACK 20 x 20 2-6S / F722 Flight Controller / 35A BL32 4-in-1 ESC / MT VTX Mini 600mW",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/04/23/goods_thumb_220-v1/20200423115004_5ea1106c169ff.jpg",
price:97.85 
},

{name: "HGLRC LED Light Board ARM C232B for ESC Motors 4pcs",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/06/08/goods_thumb_220-v1/20200608114827_5eddb50b67ecd.jpg",
price: 11.37 
},

{name: "HGLRC XJB - 145MM FPV Racing Drone BNF",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/01/16/goods_thumb_220-v2/20190116090041_27006.jpg",
price: 266.05 
},

{name: "HGLRC Toothpick Parrot120 Micro 2-3S FPV Racing Drone",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/09/03/goods_thumb_220-v1/20190903085817_17614.jpg",
price: 166.63  
},

//CaDa

{name: "CaDA DIY Assembled Simulation Military Truck Building Block Toy",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/08/29/goods_thumb_220-v2/20180829113843_55859.jpg",
price: 50.87  
},

{name: "CaDA C81005W Assembling Gun Building Block Toy Set",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/04/27/goods_thumb_220-v3/20190427100354_88643.jpg",
price: 50.44 
},

{name: "CaDA Kids Assembling Building Blocks Toy",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/08/03/goods_thumb_220-v1/20180803102820_31325.jpg",
price: 46.36 
},

{name: "CaDA C81008W Puzzle Building Block Assembling Toy",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/04/22/goods_thumb_220-v3/20190422190413_79776.jpg",
price: 24.45 
},

{name: "CaDA C81006W Submachine Gun Model Building Blocks Set",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/04/29/goods_thumb_220-v3/20190429100626_50361.jpg",
price: 50.44 
}
    ]
    localStorage.setItem("appliancesdata", JSON.stringify(appliancesdata));
    console.log(appliancesdata)
    var outdoordata = [
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
            name: "Global Version Xiaomi MIJIA M365 Mi Smart Electric Scooter Skateboard Mini Foldable Adult 30km Battery MI HOME App Control - Black China",
            price: 429,
            img: "https://gloimg.gbtcdn.com/soa/gb/item/6771730315905003520/16391/goods_thumb_220-v1/f1b1d0aa1438.jpg"
        },
        {
            name: "Original Mi Small Backpack 7L 10L Colorful Leisure Sports Chest Pack Bags Unisex For Men Women Traveling Camping - Dark blue 10L",
            price: 17,
            img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15897/goods_thumb_220-v9/eea37668d53b.jpg"
        },
        {
            name: "Xiaomi Mi Electric Scooter 3 Smart E-Scooter 30km Distance 7650mAh Battery MIJIA Adulte Bicycle Fold Skateboard - Onyx Black",
            price: 521,
            img: "https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16414/goods_thumb_220-v1/8247042bf375.jpg"
        },
        {
            name: "iscooter Electric Scooter i9 Original Foldable Lightweight Skateboard Adult 30km/h Mi E-Scooter Skateboard Scooter with app - black United Kingdom",
            price: 386,
            img: "https://gloimg.gbtcdn.com/soa/gb/item/6701436345185419264/16388/goods_thumb_220-v2/bfb91d426e72.jpg"
        },
        {
            name: "Xiaomi Mi Electric Scooter Essential and 1S Electric Scooter quick folding two wheels dual brake headlight multifunction panel - My Electric Scooter Essential SPAIN",
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
            name: "Floureon USB C Portable Charger 26800mAh PD60W Power Bank with Type-C Input/Output for MacBook",
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
    localStorage.setItem("outdoordata", JSON.stringify(outdoordata));
    var computersdata = [
        {
            name: "Xiaomi Mipad 5 Magnetic Keyboard Case Original Mi Tablet Keyboard 5Pro Pogo Pin Connect Xiaomi Mi Pad 5 pro Keyboard - black China",
            price: 128,
            img: "https://gloimg.gbtcdn.com/soa/gb/item/6771730315905003520/16393/goods_thumb_220-v1/c9c1cc9f598f.jpg"
        },
        {
            name: "Xiaomi Mi AX6000 AIoT Router 6000Mbs WiFi6 VPN 512MB Qualcomm CPU Mesh Repeater External Signal Network Amplifier Mi Home ",
            price: 149,
            img: "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16417/goods_thumb_220-v1/2083551214b3.jpg"
        },
        {
            name: "Xiaomi Router AC2100 1733Mbps WiFi Repeater Gigabit Ethernet Port 2.4G 5G WiFi 128Mb Mi WiFi Router APP Control For Mi home - Black US Plug",
            price: 52,
            img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16069/goods_thumb_220-v3/e6a7958e3f35.jpg"
        },
        {
            name: "Global Xiaomi Mi TV Box S 4K HDR Android TV 8.1 Ultra HD 2G 8G WIFI Google Cast Netflix Set top Mi Box 4 Media Player - With UK plug",
            price: 86,
            img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15947/goods_thumb_220-v3/7dae9d3edc99.jpg"
        },
        {
            name: "Xiaomi Mi Pad 5 - Snapdragon 860 11 WQHD 120Hz Display 256GB 8720mAh Cosmic Gray Pearl White - White 6GB-256GB",
            price: 596,
            img: "https://gloimg.gbtcdn.com/soa/gb/item/6866331803104505856/16406/goods_thumb_220-v1/0d7d160e2adf.jpg"
        },
        {
            name: "Alfawise A9 New Touch 2.4GHz Wireless Keyboard Flying Mouse - Multi colorful backlight",
            price: 12,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/05/31/goods_thumb_220-v1/20190531094427_74287.jpg"
        },
        {
            name: "Alfawise A8 Wireless Keyboard Fly Air Mouse",
            price: 11,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/02/18/goods_thumb_220-v8/20190218102958_97639.jpg"
        },
        {
            name: "T-wolf X1 Wireless Bluetooth Mouse Silent Dual Mode Rechargeable Ergonomic 2.4Ghz USB Optical for Mobile Computer Tablet Notebook - Black 2.4G Charging Light Version",
            price: 7,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/11/19/goods_thumb_220-v1/20201119182340_5fb647ac45ee2.jpg"
        },
        {
            name: "Alfawise WM02 Vertical Wireless 2.4GHz Mouse - Black",
            price: 11,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/09/07/goods_thumb_220-v2/20200907155457_47351.jpg"
        },
        {
            name: "Alfawise A128U3 128GB UHS - 3 XC High Speed High Capacity Micro SD Card - Multi Greenish Blue 128GB",
            price: 24,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/11/12/goods_thumb_220-v1/20181112180312_36310.jpg"
        },
        {
            name: "Alfawise Christmas Fun Edition Micro SD TF Card 3 In 1 32GB High Speed Memory Card Pack - Multi 32GB U1HC",
            price: 7,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/10/09/goods_thumb_220-v1/20191009162520_22933.jpg"
        },
        {
            name: "Samsung TF Card 64G 128G 256G Mobile Phone Driving Recorder Sports Camera Memory Card - Red 64GB",
            price: 17,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/11/24/goods_thumb_220-v1/20201124152015_5fbcb42fad9b3.jpg"
        },
        {
            name: "samsung USB3.1 Type-C OTG Flash Drive DUO Upgrade Version - Gray 32GB	",
            price: 36,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/06/19/goods_thumb_220-v3/20190619165118_84674.jpg"
        },
        {
            name: "Samsung USB 3.1 Flash Drive BAR Plus - Carbon Gray 32GB	",
            price: 25,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/09/27/goods_thumb_220-v1/20180927144608_86393.jpg"
        },
        {
            name: "Samsung MUF - 32BE3 / AM USB 3.1 Flash Drive U Disk Bar Plus 200MB/s Read 32GB - Silver 32GB",
            price: 25,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/09/05/goods_thumb_220-v2/20180905135644_21750.jpg"
        },
        {
            name: "Samsung Converter Type C Earphone Cable USB C to 3.5mm Aux Jack Headphones Adapter - Black",
            price: 3,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2021/01/13/goods_thumb_220-v1/20210113182621_5ffecacdc7f9b.jpg"
        },
        {
            name: "HXSJ S2 Computer PC Camera 5MP Auto Focus Webcam Support 720P 1080P Video - Black",
            price: 31,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/12/18/goods_thumb_220-v1/20201218112726_5fdc219e99cc0.jpg"
        },
        {
            name: "HXSJ Webcam 1080P Manual Focus Computer Camera Head 360 Degree Rotatable Video Conferencing Camera Network Class Live Broadcast - Black 1080p+Privacy Cover",
            price: 43,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/11/27/goods_thumb_220-v1/20201127203828_5fc0f344d4e14.jpg"
        },
        {
            name: "HXSJ A870 USB Webcam HD Video Recording Camera with Microphone - Orange",
            price: 26,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/04/16/goods_thumb_220-v1/20200416184032_5e983620f3bcf.jpg"
        },
        {
            name: "HXSJ Webcam 1080P Manual Focus Computer Camera Head 360 Degree Rotatable Video Conferencing Camera Network Class Live Broadcast - Black 1080p+Privacy Cover",
            price: 43,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/11/27/goods_thumb_220-v1/20201127203828_5fc0f344d4e14.jpg"
        },
        {
            name: "New Huawei 5G CPE PRO Router Balong 5000 CPE Wireless Router huawei 5G Version Router - huawei 5G CPE Pro Standard",
            price: 359,
            img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16061/goods_thumb_220-v3/9386aa9ea96a.jpg"
        },
        {
            name: "Huawei Ax3 Pro Wireless Router Wifi 6 3000mbps 2.4G 5G Dual Core WiFi 802.11ac 1.2ghz 1.4ghz - AX3 White without box",
            price: 78,
            img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16388/goods_thumb_220-v5/19afcd161cda.jpg"
        },
        {
            name: "Huawei E5577Bs - 937 Wireless WiFi Network Card LTE 4G - Black	",
            price: 130,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/05/16/goods_thumb_220-v3/20190516144414_56736.jpg"
        },
        {
            name: "Huawei E5577Bs - 937 Wireless WiFi Network Card LTE 4G - Black",
            price: 493,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/07/13/goods_thumb_220-v2/20200713145737_5f0c05e1897b8.jpg"
        },
        {
            name: "Huawei WiFi AX3 /AX3 Pro Quad-core Dual-core Router WiFi 6+ 3000Mbps 2.4GHz 5GHz Dual-Band Gigabit Rate WIFI Wireless Router - ax3 n 0.5m gift Standard",
            price: 68,
            img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16135/goods_thumb_220-v1/1a32eb560ba0.jpg"
        },
        {
            name: "ORICO HR01-U3-BK USB3.0 Gigabit Network Hub",
            price: 29,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/09/14/goods_thumb_220-v1/20200914141827_5f5f0b33229d9.jpg"
        },
        {
            name: "ORICO PUG C6B 05 BK CAT6 Flat Gigabit Ethernet Cable Copper Wire Core Network Cable - Black",
            price: 2,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/09/07/goods_thumb_220-v1/20200907164255_5f55f28fdcc5b.jpg"
        },
        {
            name: "ORICO UTJ-U2-BK USB2.0 to 100M Wired Network Card Adapter Wired Network Card Plug and Play Multi-system Compatible - Black",
            price: 14,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/09/16/goods_thumb_220-v1/20200916094603_5f616e5b4664a.jpg"
        },
        {
            name: "Gocomma 3600 Miles 4K Digital Antenna TV Indoor Amplifier Signal Booster DVB-T2 HDTV Antenna CBS Freeview TV HD Digital Antenna Channel Broadcast - Black",
            price: 9,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2021/03/02/goods_thumb_220-v1/20210302134647_603dd1472b8d3.jpg"
        },
        {
            name: "Gocomma W1 Smart Ceiling Wireless WiFi AP",
            price: 40,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/08/06/goods_thumb_220-v4/20190806151621_10142.jpg"
        },
        {
            name: "Gocomma 990 Miles HD Digital HDTV TV Antenna with Amplifier DVB-T2 Mini 4K Indoor Satellite Antenna - Black",
            price: 9,
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2021/03/17/goods_thumb_220-v1/20210317121546_6051827230125.jpg"
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