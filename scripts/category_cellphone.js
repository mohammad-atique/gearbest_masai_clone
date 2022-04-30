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
            brand: "CUBOT",
            img_url: "https://css.gbtcdn.com/imagecache/GB/images/logolist/cubot.png"
        },
        {
            brand: "HUAWEI",
            img_url: "https://css.gbtcdn.com/imagecache/GB/images/logolist/huawei.png"
        },
        {
            brand: "Ulefone",
            img_url: "https://uidesign.gbtcdn.com/GB/images/others/top_brands/ulefone001.jpg"
        },
        {
            brand: "Naxtop",
            img_url: "https://uidesign.gbtcdn.com/GB/images/others/top_brands/Naxtop.jpg"
        },
        {
            brand: "Samsung",
            img_url: "https://uidesign.gbtcdn.com/GB/image/2019/20190621_10902/logo.png?imbypass=true"
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
    {
        name: "Realme X50 5G Mobile Phone 256GB 128GB ROM 12GB 8GB RAM 6.57 inch Snapdragon 765G Quad Main Camera 64MP 4200mAh NFC 5G Smartphone",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15972/goods_thumb_220-v3/7bd3e47e3a78.jpg",
        price:319.99
        },
        {
        name: "Xiaomi Redmi Note 9 Pro 5G 6GB RAM 128GB ROM Cellphone Snapdragon 750G Octa Core 108MP Camera 6.67 inch 120Hz Full Screen CN Version",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16089/goods_thumb_220-v5/cf12af936537.jpg",
        price:365.99
        },
        {
        name: "Ulefone Note 11P Android 11 Smartphone 8GB +128GB 4G-LTE Unlocked Phone Global Vision 4400mAh 48MP Camera 6.55 Mobile Phone",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16152/goods_thumb_220-v1/c5d182f5a710.jpg",
        price:229.99
        },
        {
        name: "40000mAh Power Bank 18W PD QC 3.0 Two-way Fast Charging Powerbank Type-C External Battery Charger For iPhone Xiaomi",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15933/goods_thumb_220-v1/61b1ca740a2d.jpg",
        price:74.99
        },
        {
        name: "Mini Flexible Tripod for iphone Samsung Xiaomi Huawei with Phone Clip Tripod Stand for Mobile Phone",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6507287161137004544/15790/goods_thumb_220-v1/a6e7998b50e6.jpg",
        price:35.63
       },
        {
        name: "OUKITEL WP5 Pro IP68 Waterproof Smartphone 8000mAh Android 10 Triple Camera Face/Fingerprint ID 5.5 Inches 4GB 64GB Mobile Phone",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16074/goods_thumb_220-v1/0e600a1f82a7.jpg",
        price:143.99
        },
        {
        name: "Black Shark Eco-System 10000mAh 18W Quick Charge Power Bank With Three USB Output for iPhone",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16008/goods_thumb_220-v3/b14d64fe3868.jpg",
        price:45.89       
        },
        {
        name: "Cubot King Kong 3 IP68 Waterproof RuggedPhone NFC 6000mAh Big Battery Android 8.1 4GB+64GB Type-C FastCharge OctaCore KingKong 3",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16089/goods_thumb_220-v1/b7fb26a83ec5.jpg",
        price:191.87
        },
        {
        name: "Blackview A80 Quad Rear Camera Android 10.0 Go Mobile Phone 6.21 inch Waterdrop HD Screen 2GB+16GB Cellphone 4200mAh 4G Smartphone",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15966/goods_thumb_220-v1/4e581c443a53.jpg",
        price:89.99
        },
        {
        name: "TEZER Charger For Xiaomi Mi Band 2 3 4 Cord Replacement USB Charging Cable Adapter for Xiaomi Mi Band 3 Smart Bracelet Charger",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16081/goods_thumb_220-v3/85536ee2bab6.jpg",
        price:29.72
       },
        {
        name: "KEYSION Shockproof Case for Realme X2 Pro XT 5 6 Pro 3 X50 C2 Phone Back Cover for OPPO F11 Pro A9 A5 2020 A52 Reno 3 2 Z K1 A1K",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16008/goods_thumb_220-v1/58db3935c8d0.jpg",
        price:10.27
        },
        {
        name: "360-Degree Rotation Car Phone Holder",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/02/01/goods_thumb_220-v2/20190201111025_89630.jpg",
        price:35.99
       },
        {
        name: "CUBOT X20 Pro 6.3 inch 4G Smartphone with 6GB RAM 128GB ROM AI Triple Camera Android 9.0 4000mAh Battery",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/09/04/goods_thumb_220-v1/20190904134126_29277.jpg",
        price:383.75
        },
        {
        name: "CUBOT P30 4G Smartphone 4GB RAM 64GB ROM",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/09/17/goods_thumb_220-v1/20190917171057_43492.jpg",
        price:289.00
        },
        {
        name: "Cubot Nova 4G Smartphone",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Other/2019/07/04/goods_thumb_220-v2/20190704083945_51104.jpg",
        price:151.19
        },
        {
        name: "Samsung Tempered Glass Screen Protector for Redmi Note 3 /3 Pro",
        img: "https://gloimg.gbtcdn.com/soa/gb/thumb-extend/pdm-product-pic/Electronic/2018/06/08/source-img/20180608173956_91244.jpg",
        price:55.01
       },
        {
        name: "Samsung Note 4 4G Phablet",
        img: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/08/10/goods-goods_thumb_220/20170810153712_31399.jpg",
        price:265.49
        },
        {
        name: "CHUMDIY 3-in-1 Keychain Data Sync Charge Cable",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/05/11/goods_thumb_220-v2/20190511181213_28773.jpg",
        price:5.54
       },
        {
        name: "HUAWEI Type-C Male to 3.5mm Audio Female Interface Switch Line",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Distribution/2016/10/06/goods_thumb_220-v2/20161006091342_31511.JPG",
        price:2.99
       },
        {
        name: "HUAWEI Type-C To Micro USB Data Sync Charging Adapter Converter 4pcs",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/11/22/goods_thumb_220-v4/20181122173805_96324.jpg",
        price:2.99
       },
        {
        name: "Xiaomi 2PCS 4A Fast Charging Data USB Type-C Cable for OnePlus 8 / 7 Pro / 7/ 6/ 5T /7T",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20190321/goods_thumb_220-v1/2019032109210114966.jpg",
        price:5.99
       },
        {
        name: "HUAWEI Pro+ Smartphone MT6580 7.3 inch 4GB RAM 32GB ROM",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/11/23/goods_thumb_220-v1/20201123101152_5fbb1a689e648.jpg",
        price:144.50
        },
        {
        name: "HUAWEI nova 4 4G Smartphone 6.4 inch Global Version",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/03/07/goods_thumb_220-v1/20190307102828_56706.jpg",
        price:809.75
        },
        {
        name: "Naxtop 30W 4 Ports USB Quick Charger QC 3.0 Travel USB Fast Charger",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20190726/T009002/T0090020800/goods_thumb_220-v1/012749-7149.jpg",
        price:4.99
       },
        {
        name: "HUAWEI Honor 7X 4G Smartphone Global Version",
        img: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/12/21/goods-goods_thumb_220/1513812974424179314.jpg",
        price:420.31
        },
        {
        name: "Slim Soft TPU Case for Xiaomi Redmi Note 7 / Note 7 Pro",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20190319/T012136/T0121361877/goods_thumb_220-v1/184016-7327.jpg",
        price:4.99
       },
        {
        name: "Original HUAWEI Micro USB to Type-C Data Sync Adapter",
        img: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/06/06/goods-goods_thumb_220/20170606113323_60704.jpg",
        price:7.58
       },
        {
        name: "Global Version Xiaomi Redmi Note 10 Pro Smartphone 108MP Camera Snapdragon 732G 120Hz AMOLED Display",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16149/goods_thumb_220-v4/c0844e2f0960.jpg",
        price:317.07
        },
        {
        name: "HUAWEI Nova 5T 4G Smartphone 6.26 inches Android 9 Kirin 980 8GB RAM 128GB ROM 48MP 16MP 2MP 2MP Rear Camera 3750mAh Battery International Version",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/02/24/goods_thumb_220-v1/20200224094816_5e532b60b3a4d.jpg",
        price:804.85
        },
        {
        name: "Naxtop Soft Phone Cover Case for Xiaomi Redmi Note 4",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Maiyang/2017/09/14/goods_thumb_220-v1/20170914180603_24374.jpg",
        price:3.99
       },
        {
        name: "Naxtop Practical Transparent TPU Case for iPhone 8 / iPhone 7",
        img: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Maiyang/2017/10/10/goods-goods_thumb_220/1508173916183157178.jpg",
        price:3.99
       },
        {
        name: "Ulefone Armor 7 4G Smartphone 6.3 Inch Android 9.0 Helio P90 Octa Core 2.2GHz 8GB RAM 128GB ROM 3 Rear Camera 5500mAh Battery IP68 / IP69K Waterproof Heart Rate Sensor Global Version",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/07/07/goods_thumb_220-v1/20200707174616_5f044468a5786.jpg",
        price:638.01
        },
        {
        name: "Ulefone Armor 8 Rugged 4G 6.1 inch Smartphone Global Version",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/08/14/goods_thumb_220-v2/20200814190430_5f366fbe3ce03.jpg",
        price:355.39
        },
        {
        name: "Global Version POCO F3 5G Smartphone Snapdragon 870 Octa Core 128GB/256GB 6.67 120Hz E4 AMOLED Display",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16164/goods_thumb_220-v3/f1c7d0f5685e.jpg",
        price:389.80
        },
        {
        name: "Naxtop Wear-resisting Fashionable Phone Case for Asus Zenfone 5z ZS620KL / Zenfone 5 ZE620KL",
        img:"https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/09/18/goods_thumb_220-v1/20180918162333_58134.jpg" ,
        price:3.99
       },
        {
        name:"Ulefone Armor 11 5G Rugged Smartphone IP68 IP69K Waterproof 6.1 inch MTK Dimensity 800 Octa Core 8GB 256GB 48MP Penta AI Camera NFC 5200mAh Battery" ,
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2021/02/22/goods_thumb_220-v1/20210222201423_6033a01ff08c5.jpg",
        price:931.57
        },
        {
        name: "Ulefone Armor X3 Rugged Smartphone Android 9.0 IP68 Android 5.5 INCH 2GB 32GB 5000mAh 3G Rugged Cell Phone Mobile Phone Android",
        img:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15937/goods_thumb_220-v1/3250998b2929.jpg" ,
        price:119.99
        },
        {
        name: "Naxtop Transparent Soft Phone Cover for HUAWEI P10 Lite",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Maiyang/2017/10/04/goods_thumb_220-v1/20171004142306_98510.jpg",
        price:3.47
       },
        {
        name: "Global Version POCO M3 Smartphone Snapdragon 662 Octa Core 4GB RAM 64GB ROM 6000mAh Battery Mobile Phone 48MP Camera",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16064/goods_thumb_220-v1/d11030cc3210.jpg",
        price:269.99
        },
        {
        name: "OPPO Reno 2 Z SmartPhone 6.5 inch MTK P90 in-screen NFC VOOC Flash Charge 3.0 Google Play",
        img:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15973/goods_thumb_220-v1/ef97cd4da628.jpg" ,
        price:359.99
        },
        {
        name: "HUAWEI Honor V20 4G Smartphone Fingerprint Sensor",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/12/27/goods_thumb_220-v1/20181227184244_88012.jpg",
        price:1153.1
        },
        {
        name: "Samsung Galaxy S9 G960U G960F Original Unlocked LTE Android Cell Phone Octa Core 5.8inch 12MP 4G RAM 64G ROM Snapdragon 845 Mobile",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16093/goods_thumb_220-v1/64764ba02575.jpg",
        price:295.49
        },
        {
        name: "Chinese Version OnePlus 8T 8 T 8GB 128GB OnePlus Official Store Snapdragon 865 5G Smartphone 120Hz AMOLED Fluid Screen 48MP 65W",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16137/goods_thumb_220-v7/34fb6027922b.jpg",
        price:699.99
        },
        {
        name: "Original OnePlus 7T Pro Global ROM Snapdragon 855 Plus 6.67 inch Fluid AMOLED 90Hz Refresh Rate Screen 48MP Triple Cam 4085mA",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16051/goods_thumb_220-v3/869806234801.jpg",
        price:619.99
        },
        {
        name: "Global Version OnePlus Nord N10 5G Smartphone 6GB 128GB Snapdragon 690 NFC 6.49 90Hz Display 64MP Quad Camera Warp Charge 30T",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16118/goods_thumb_220-v3/1d94556c6d7e.jpg",
        price:269.99
        },
        {
        name: "OnePlus 8T 8 T 8GB 128GB Snapdragon 865 5G Smartphone 120Hz AMOLED Fluid Screen 48MP Quad Cams 4500mAh 65W Warp",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16031/goods_thumb_220-v4/5de9bbee1875.jpg",
        price:675.99
        },
        {
        name: "HUAWEI Honor 9X 4GB 128GB Smartphone Global Version 48MP dual caemra Mobile Phone 4000mAh Battery 6.59inch",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16003/goods_thumb_220-v1/2f9ce21c3871.jpg",
        price:197.99
        },
        {
        name: "Realme X50 5G Mobile Phone 256GB 128GB ROM 12GB 8GB RAM 6.57 inch Snapdragon 765G Quad Main Camera 64MP 4200mAh NFC 5G Smartphone",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15972/goods_thumb_220-v3/7bd3e47e3a78.jpg",
        price:319.99
        },
        {
        name: "Xiaomi Redmi Note 9 Pro 5G 6GB RAM 128GB ROM Cellphone Snapdragon 750G Octa Core 108MP Camera 6.67 inch 120Hz Full Screen CN Version",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16089/goods_thumb_220-v5/cf12af936537.jpg",
        price:365.99
        },
        {
        name: "Ulefone Note 11P Android 11 Smartphone 8GB +128GB 4G-LTE Unlocked Phone Global Vision 4400mAh 48MP Camera 6.55 Mobile Phone",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16152/goods_thumb_220-v1/c5d182f5a710.jpg",
        price:229.99
        },
        {
        name: "40000mAh Power Bank 18W PD QC 3.0 Two-way Fast Charging Powerbank Type-C External Battery Charger For iPhone Xiaomi",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15933/goods_thumb_220-v1/61b1ca740a2d.jpg",
        price:74.99
        },
        {
        name: "Mini Flexible Tripod for iphone Samsung Xiaomi Huawei with Phone Clip Tripod Stand for Mobile Phone",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6507287161137004544/15790/goods_thumb_220-v1/a6e7998b50e6.jpg",
        price:35.63
       },
        {
        name: "OUKITEL WP5 Pro IP68 Waterproof Smartphone 8000mAh Android 10 Triple Camera Face/Fingerprint ID 5.5 Inches 4GB 64GB Mobile Phone",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16074/goods_thumb_220-v1/0e600a1f82a7.jpg",
        price:143.99
        },
        {
        name: "Black Shark Eco-System 10000mAh 18W Quick Charge Power Bank With Three USB Output for iPhone",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16008/goods_thumb_220-v3/b14d64fe3868.jpg",
        price:45.89       
        },
        {
        name: "Cubot King Kong 3 IP68 Waterproof RuggedPhone NFC 6000mAh Big Battery Android 8.1 4GB+64GB Type-C FastCharge OctaCore KingKong 3",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16089/goods_thumb_220-v1/b7fb26a83ec5.jpg",
        price:191.87
        },
        {
        name: "Blackview A80 Quad Rear Camera Android 10.0 Go Mobile Phone 6.21 inch Waterdrop HD Screen 2GB+16GB Cellphone 4200mAh 4G Smartphone",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15966/goods_thumb_220-v1/4e581c443a53.jpg",
        price:89.99
        },
        {
        name: "TEZER Charger For Xiaomi Mi Band 2 3 4 Cord Replacement USB Charging Cable Adapter for Xiaomi Mi Band 3 Smart Bracelet Charger",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16081/goods_thumb_220-v3/85536ee2bab6.jpg",
        price:6.72
       },
        {
        name: "KEYSION Shockproof Case for Realme X2 Pro XT 5 6 Pro 3 X50 C2 Phone Back Cover for OPPO F11 Pro A9 A5 2020 A52 Reno 3 2 Z K1 A1K",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16008/goods_thumb_220-v1/58db3935c8d0.jpg",
        price:10.27
        },
        {
        name: "360-Degree Rotation Car Phone Holder",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/02/01/goods_thumb_220-v2/20190201111025_89630.jpg",
        price:26.99
       },
        {
        name: "CUBOT X20 Pro 6.3 inch 4G Smartphone with 6GB RAM 128GB ROM AI Triple Camera Android 9.0 4000mAh Battery",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/09/04/goods_thumb_220-v1/20190904134126_29277.jpg",
        price:383.75
        },
        {
        name: "CUBOT P30 4G Smartphone 4GB RAM 64GB ROM",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/09/17/goods_thumb_220-v1/20190917171057_43492.jpg",
        price:289.00
        },
        {
        name: "Cubot Nova 4G Smartphone",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Other/2019/07/04/goods_thumb_220-v2/20190704083945_51104.jpg",
        price:151.19
        },
        {
        name: "Samsung Tempered Glass Screen Protector for Redmi Note 3 /3 Pro",
        img: "https://gloimg.gbtcdn.com/soa/gb/thumb-extend/pdm-product-pic/Electronic/2018/06/08/source-img/20180608173956_91244.jpg",
        price:35.01
       },
        {
        name: "Samsung Note 4 4G Phablet",
        img: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/08/10/goods-goods_thumb_220/20170810153712_31399.jpg",
        price:265.49
        },
        {
        name: "CHUMDIY 3-in-1 Keychain Data Sync Charge Cable",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/05/11/goods_thumb_220-v2/20190511181213_28773.jpg",
        price:5.54
       },
        {
        name: "HUAWEI Type-C Male to 3.5mm Audio Female Interface Switch Line",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Distribution/2016/10/06/goods_thumb_220-v2/20161006091342_31511.JPG",
        price:2.99
       },
        {
        name: "HUAWEI Type-C To Micro USB Data Sync Charging Adapter Converter 4pcs",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/11/22/goods_thumb_220-v4/20181122173805_96324.jpg",
        price:2.99
       },
        {
        name: "Xiaomi 2PCS 4A Fast Charging Data USB Type-C Cable for OnePlus 8 / 7 Pro / 7/ 6/ 5T /7T",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20190321/goods_thumb_220-v1/2019032109210114966.jpg",
        price:5.99
       },
        {
        name: "HUAWEI Pro+ Smartphone MT6580 7.3 inch 4GB RAM 32GB ROM",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/11/23/goods_thumb_220-v1/20201123101152_5fbb1a689e648.jpg",
        price:144.50
        },
        {
        name: "HUAWEI nova 4 4G Smartphone 6.4 inch Global Version",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/03/07/goods_thumb_220-v1/20190307102828_56706.jpg",
        price:809.75
        },
        {
        name: "Naxtop 30W 4 Ports USB Quick Charger QC 3.0 Travel USB Fast Charger",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20190726/T009002/T0090020800/goods_thumb_220-v1/012749-7149.jpg",
        price:4.99
       },
        {
        name: "HUAWEI Honor 7X 4G Smartphone Global Version",
        img: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/12/21/goods-goods_thumb_220/1513812974424179314.jpg",
        price:420.31
        },
        {
        name: "Slim Soft TPU Case for Xiaomi Redmi Note 7 / Note 7 Pro",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20190319/T012136/T0121361877/goods_thumb_220-v1/184016-7327.jpg",
        price:4.99
       },
        {
        name: "Original HUAWEI Micro USB to Type-C Data Sync Adapter",
        img: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/06/06/goods-goods_thumb_220/20170606113323_60704.jpg",
        price:7.58
       },
        {
        name: "Global Version Xiaomi Redmi Note 10 Pro Smartphone 108MP Camera Snapdragon 732G 120Hz AMOLED Display",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16149/goods_thumb_220-v4/c0844e2f0960.jpg",
        price:317.07
        },
        {
        name: "HUAWEI Nova 5T 4G Smartphone 6.26 inches Android 9 Kirin 980 8GB RAM 128GB ROM 48MP 16MP 2MP 2MP Rear Camera 3750mAh Battery International Version",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/02/24/goods_thumb_220-v1/20200224094816_5e532b60b3a4d.jpg",
        price:804.85
        },
        {
        name: "Naxtop Soft Phone Cover Case for Xiaomi Redmi Note 4",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Maiyang/2017/09/14/goods_thumb_220-v1/20170914180603_24374.jpg",
        price:3.99
       },
        {
        name: "Naxtop Practical Transparent TPU Case for iPhone 8 / iPhone 7",
        img: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Maiyang/2017/10/10/goods-goods_thumb_220/1508173916183157178.jpg",
        price:3.99
       },
        {
        name: "Ulefone Armor 7 4G Smartphone 6.3 Inch Android 9.0 Helio P90 Octa Core 2.2GHz 8GB RAM 128GB ROM 3 Rear Camera 5500mAh Battery IP68 / IP69K Waterproof Heart Rate Sensor Global Version",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/07/07/goods_thumb_220-v1/20200707174616_5f044468a5786.jpg",
        price:638.01
        },
        {
        name: "Ulefone Armor 8 Rugged 4G 6.1 inch Smartphone Global Version",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/08/14/goods_thumb_220-v2/20200814190430_5f366fbe3ce03.jpg",
        price:355.39
        },
        {
        name: "Global Version POCO F3 5G Smartphone Snapdragon 870 Octa Core 128GB/256GB 6.67 120Hz E4 AMOLED Display",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16164/goods_thumb_220-v3/f1c7d0f5685e.jpg",
        price:389.80
        },
        {
        name: "Naxtop Wear-resisting Fashionable Phone Case for Asus Zenfone 5z ZS620KL / Zenfone 5 ZE620KL",
        img:"https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/09/18/goods_thumb_220-v1/20180918162333_58134.jpg" ,
        price:3.99
       },
        {
        name:"Ulefone Armor 11 5G Rugged Smartphone IP68 IP69K Waterproof 6.1 inch MTK Dimensity 800 Octa Core 8GB 256GB 48MP Penta AI Camera NFC 5200mAh Battery" ,
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2021/02/22/goods_thumb_220-v1/20210222201423_6033a01ff08c5.jpg",
        price:931.57
        },
        {
        name: "Ulefone Armor X3 Rugged Smartphone Android 9.0 IP68 Android 5.5 INCH 2GB 32GB 5000mAh 3G Rugged Cell Phone Mobile Phone Android",
        img:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15937/goods_thumb_220-v1/3250998b2929.jpg" ,
        price:119.99
        },
        {
        name: "Naxtop Transparent Soft Phone Cover for HUAWEI P10 Lite",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Maiyang/2017/10/04/goods_thumb_220-v1/20171004142306_98510.jpg",
        price:3.47
       },
        {
        name: "Global Version POCO M3 Smartphone Snapdragon 662 Octa Core 4GB RAM 64GB ROM 6000mAh Battery Mobile Phone 48MP Camera",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16064/goods_thumb_220-v1/d11030cc3210.jpg",
        price:269.99
        },
        {
        name: "OPPO Reno 2 Z SmartPhone 6.5 inch MTK P90 in-screen NFC VOOC Flash Charge 3.0 Google Play",
        img:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15973/goods_thumb_220-v1/ef97cd4da628.jpg" ,
        price:359.99
        },
        {
        name: "HUAWEI Honor V20 4G Smartphone Fingerprint Sensor",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/12/27/goods_thumb_220-v1/20181227184244_88012.jpg",
        price:1153.1
        },
        {
        name: "Samsung Galaxy S9 G960U G960F Original Unlocked LTE Android Cell Phone Octa Core 5.8inch 12MP 4G RAM 64G ROM Snapdragon 845 Mobile",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16093/goods_thumb_220-v1/64764ba02575.jpg",
        price:295.49
        },
        {
        name: "Chinese Version OnePlus 8T 8 T 8GB 128GB OnePlus Official Store Snapdragon 865 5G Smartphone 120Hz AMOLED Fluid Screen 48MP 65W",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16137/goods_thumb_220-v7/34fb6027922b.jpg",
        price:699.99
        },
        {
        name: "Original OnePlus 7T Pro Global ROM Snapdragon 855 Plus 6.67 inch Fluid AMOLED 90Hz Refresh Rate Screen 48MP Triple Cam 4085mA",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16051/goods_thumb_220-v3/869806234801.jpg",
        price:619.99
        },
        {
        name: "Global Version OnePlus Nord N10 5G Smartphone 6GB 128GB Snapdragon 690 NFC 6.49 90Hz Display 64MP Quad Camera Warp Charge 30T",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16118/goods_thumb_220-v3/1d94556c6d7e.jpg",
        price:269.99
        },
        {
        name: "OnePlus 8T 8 T 8GB 128GB Snapdragon 865 5G Smartphone 120Hz AMOLED Fluid Screen 48MP Quad Cams 4500mAh 65W Warp",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16031/goods_thumb_220-v4/5de9bbee1875.jpg",
        price:675.99
        },
        {
        name: "HUAWEI Honor 9X 4GB 128GB Smartphone Global Version 48MP dual caemra Mobile Phone 4000mAh Battery 6.59inch",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16003/goods_thumb_220-v1/2f9ce21c3871.jpg",
        price:197.99
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