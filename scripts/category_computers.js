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
            brand: "Samsung",
            img_url: "https://uidesign.gbtcdn.com/GB/image/2019/20190621_10902/logo.png?imbypass=true"
        },
        {
            brand: "Huawei",
            img_url: "https://css.gbtcdn.com/imagecache/GB/images/logolist/huawei.png"
        },
        {
            brand: "Alfawise",
            img_url: "https://uidesign.gbtcdn.com/GB/images/index/2018/brand_banner/Alfawise/Alfawise_2.jpg?impolicy=hight"
        },
        {
            brand: "ORICO",
            img_url: "https://uidesign.gbtcdn.com/GB/image/others/20190719_11420/Orico.jpg"
        },
        {
            brand: "Gocomma",
            img_url: "https://uidesign.gbtcdn.com/GB/images/banner/others/gocomme.png"
        },
        {
            brand: "HXSJ",
            img_url: "https://uidesign.gbtcdn.com/GB/images/others/top_brands/HXSJ.jpg"
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
            name: "Samsung USB3.1 Type-C OTG Flash Drive DUO Upgrade Version - Gray 32GB	",
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