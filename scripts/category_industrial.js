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
            brand: "Creality",
            img_url: "https://uidesign.gbtcdn.com/GB/image/brand/20190712_11282/Creality.jpg?imbypass=true"
        },
        {
            brand: "Ortur",
            img_url: "https://uidesign.gbtcdn.com/GB/image/1477/ortur%2Blogo.jpg"
        },
        {
            brand: "JGAURORA",
            img_url: "https://uidesign.gbtcdn.com/GB/images/others/top_brands/jgaurora.png"
        },
        {
            brand: "Alfawise",
            img_url: "https://uidesign.gbtcdn.com/GB/images/index/2018/brand_banner/Alfawise/Alfawise_2.jpg?impolicy=hight"
        },
        {
            brand: "LaserPecker",
            img_url: "https://uidesign.gbtcdn.com/GB/image/brand/20191015_13210/laser.jpg"
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
        name: "Creality 3D Printer LD-002R UV Resin 3D Printer LCD Photocuring Ball Linear Rails Air Filtration System",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15960/goods_thumb_220-v1/d231f4568c2f.jpg",
        price:225.99
        },
        {
        name: "KKMOON 20W Portable Mini DIY Laser Engraving Machine High Speed Desktop Laser Engraver Cutter Printer for Wood Plastic Leather",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16179/goods_thumb_220-v1/063974a873a0.jpg",
        price:206.99
        },
        {
        name: "ANYCUBIC Photon Mono 4K New Upgrade High-Speed SLA LCD UV Resin 3D Printer Equiped With 6.23&quot 4K Monochrome Screen",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6507287161137004544/16396/goods_thumb_220-v3/c18e2a3147a0.jpg",
        price:328.49
        },
        {
        name: "Creality Ender-3 V-slot Prusa I3 DIY 3D Printer Kit 220 x 220 x 250mm Printing Size",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/05/14/goods_thumb_220-v1/20180514173913_73036.jpg",
        price:317.88
        },
        {
        name: "Wowstick TRY 21 in 1 Mini Precise Handheld Cordless Electric Screwdriver Set 20 Bits",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Distribution/2019/10/19/goods_thumb_220-v2/20191019132109_29657.jpg" ,
        price:19.97       
        },
        {
        name: "Creality3D CR - 10 Accurate Large Size Desktop DIY 3D Printer",
        img: "https://gloimg.gbtcdn.com/soa/gb/thumb-extend/pdm-product-pic/Electronic/2017/09/16/source-img/20170916142959_48176.jpg",
        price:619.77
        },
        {
        name: "Creality Ender - 3 pro High Precision FDM 3D Printer",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/09/03/goods_thumb_220-v1/20180903105257_61939.jpg",
        price:367.83
        },
        {
        name: "Ortur Laser Master 7W Desktop Laser Engraver Laser Engraving Machine 32-bit Motherboard LaserGRBL Control Software Easy to Install",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/12/05/goods_thumb_220-v1/20191205110627_69391.jpg",
        price:255.08
        },
        {
        name: "Ortur Laser Master 2 32-bit Motherboard Laser Engraving Machine 400 x 430mm Large Engraving Area Fast Speed High Precision Laser Engraver",
        img:"https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/03/05/goods_thumb_220-v7/20200305143042_66169.jpg",
        price:278.98
        },
        {
        name: "KEYES DHT11 Digital Temperature Humidity Sensor Module for Arduino",
        img: "https://gloimg.gbtcdn.com/soa/gb/2015/201507/goods_thumb_220-v2/1437943205859-P-2860011.jpg",
        price:3.02
       },
        {
        name: "Alfawise U50 DIY FDM 3D Printer 3.5 inch Touch Screen",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Other/2019/08/15/goods_thumb_220-v1/20190815112312_85456.jpg",
        price:436.89
        },
        {
        name: "Creality CR - 10S Pro 300 x 300 x 400mm 3D Printer",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/06/14/goods_thumb_220-v1/20190614132913_91254.jpg",
        price:886.24
        },
        {
        name: "WeiHeng HF - 8008 Electronic Kitchen Scale",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/02/16/goods_thumb_220-v2/20190216164303_26243.jpg",
        price:15.54       
        },
        {
        name: "Tevo Tarantula FDM 3D Printer Kit",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2017/05/06/goods_thumb_220-v1/20170506115644_72781.jpg",
        price:344.30
        },
        {
        name: "Heating Block for 3D Printer Extruder",
        img: "https://gloimg.gbtcdn.com/soa/gb/2015/201507/goods_thumb_220-v2/1438306180030-P-2877563.jpg",
        price:2.99
       },
        {
        name:"Alfawise C30 Pro 3000mw Laser Engraving Machine 460 x 360mm Large Area High Accuracy Simple Frame Laser Engraver",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/01/02/goods_thumb_220-v2/20200102092717_63767.jpg",
        price:305.91
        },
        {
        name: "JGAURORA JGMAKER Magic High Presicion FDM 3D Printer",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/03/12/goods_thumb_220-v2/20190312155536_69237.jpg",
        price:339.17
        },
        {
        name: "B25 Voltage Sensor Module",
        img: "https://gloimg.gbtcdn.com/gb/2015/201507/goods-goods_thumb_220/1437953002762-P-2834493.jpg",
        price:1.99
       },
        {
        name: "JGAURORA Z - 603S High Precision Desktop 3D Printer",
        img: "https://gloimg.gbtcdn.com/gb/pdm-provider-img/straight-product-img/20171028/T010917/T0109170002/goods-goods_thumb_220/1510267083909555979.jpg",
        price:1107.0
        },
        {
        name: "Ortur Obsidian 3D Printer Fast Response Automatic Leveling Filament Run-out Detection Power Outage Resume Quick Assembly Slient Running",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/09/22/goods_thumb_220-v6/20200922090808_60436.jpg",
        price:474.51
        },
        {
        name: "Alfawise C10 Pro CNC Laser GRBL Control DIY Engraving Machine Professional Modular High Integration 3 Axis Wood Router Engraver",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/09/10/goods_thumb_220-v1/20190910120819_36200.jpg",
        price:269.23
        },
        {
        name: "Ortur Aufero CNC Engraver STM32 24V 10000 RPM Industrial Grade WiFi Control 3.2 inch Touch Screen Cutter Engraving Machine Modular Installation GRBL1.1 3018",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2021/04/12/goods_thumb_220-v5/20210412150737_6073f1b99c7cd.jpg",
        price:490.95
        },
        {
        name: "DIKAVS PAM8403 Amplifier Board",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20171130/T012005/T0120050081/goods_thumb_220-v3/153434-5654.jpg",
        price:10.93        },
        {
        name:"Creality LD-002R HD LCD Resin 3D Printer" ,
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/12/02/goods_thumb_220-v1/20191202145646_5de4b5ae71a47.jpg",
        price:398.10
        },
        {
        name: "Alfawise ACS01 TL Smoother Add-on Module for 3D Printer",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/01/07/goods_thumb_220-v5/20190107183939_43392.jpg",
        price:5.65
       },
        {
        name: "Alfawise Pulley 3D Printer Accessories 6PCS",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/04/12/goods_thumb_220-v1/20190412172638_31839.jpg",
        price:9.98
       },
        {
        name: "Creality CR - 10 V2 Updated Version 3D Printer DIY Kit 300 x 300 x 400mm Print Size with 24V 350W Meanwell Power Supply All-metal Extruding Unit",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/09/11/goods_thumb_220-v1/20190911142003_53761.jpg",
        price:726.60
        },
        {
        name: "3D Printer Accessory TL-Smoother Addon Module For 3D Printer Stepper Motor",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/11/12/goods_thumb_220-v1/20181112173514_52001.jpg",
        price:7.43
       },
        {
        name: "Alfawise U20 Mix 4.3 inch Full Color Touch Screen Control Power-on Self-Test Troubleshooting with WiFi APP Control Function Two-in and One-out FDM 3D Printer",
        img:"https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/09/09/goods_thumb_220-v3/20200909101554_37774.jpg" ,
        price:662.78
        },
        {
        name: "Alfawise 4010 DC U20 And U30 / U30 Pro 3D Printer Cooling Fan 40 x 40 x 10mm",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/12/07/goods_thumb_220-v1/20181207152903_71241.jpg",
        price:6.95
       },
        {
        name: "Portable Precision Electronic Scale",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/08/06/goods_thumb_220-v2/20180806150328_36493.jpg",
        price:9.44
       },
        {
        name: "LaserPecker Pro Handheld Mini 1600mW Laser Engraver APP Control Cutter Portable Laser Engraving Machine",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Other/2020/04/16/goods_thumb_220-v1/20200416150438_39339.jpg",
        price:556.60
        },
        {
        name: "Creality CP - 01 3 in 1 DIY Intelligent Module Machine FDM 3D Printer & CNC Cutting & Laser Engraving with Outage Resume Print",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/08/28/goods_thumb_220-v1/20190828110610_61826.jpg",
        price:933.76
        },
        {
        name: "Electronic Digital Jewelry Kitchen Scale 500g / 1kg / 3kg",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/08/04/goods_thumb_220-v2/20180804154754_17035.jpg",
        price:14.26        },
        {
        name: "Alfawise 3D Printer Teflon Tube for U20 / U30 / U30 Pro",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/12/07/goods_thumb_220-v1/20181207162944_30509.jpg",
        price:6.43
       },
        {
        name: "3.5 inch TFT LCD Touch Screen + Protective Case Support Cooling Fan + Touch Pen Kit",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/03/14/goods_thumb_220-v1/20190314110407_95272.jpg",
        price:42.96        },
        {
        name: "CNC Z-axis Sliding Table 50 - 60mm DIY Milling Linear Motion for 3-axis Engraving Machine",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/09/11/goods_thumb_220-v2/20190911092409_18441.jpg",
        price:78.17        },
        {
        name:"DS18B20 Temperature Sensor Waterproof Digital Probe Sensor For Arduino ( 3pcs)" ,
        img:"https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20181126/T015156/T0151560134/goods_thumb_220-v1/174348-5186.jpg" ,
        price:10.06        },
        {
        name:"Alfawise U20 / U30 / U30 Pro Original Flexible Couplings 5mm To 8mm Coupler" ,
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/12/06/goods_thumb_220-v2/20181206150345_20965.jpg",
        price:5.05
       },
        {
        name: "ORTUR LU1-2 Adjustable Focus Laser Module PWM Mode for Desktop Laser Engraver Machine",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/07/24/goods_thumb_220-v1/20200724161608_78705.jpg",
        price:103.55
        },
        {
        name: "10Pcs Aluminum Heatsink Cooler Cooling Panel for Raspberry Pi 3/ 2 / Pi Model B+",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20190306/T010212/T0102120710/goods_thumb_220-v1/125323-2079.jpg",
        price:3.99
       },
        {
        name: "Gocomma 5m 2GT - 6mm Rubber Opening Timing 3D Printer Belt",
        img:"https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/03/01/goods_thumb_220-v1/20190301121428_79526.jpg" ,
        price:6.10
       },
        {
        name: "Gocomma POM Pulley Rubber Roller 10pcs",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/03/19/goods_thumb_220-v2/20190319165321_80708.jpg",
        price:12.50       },
        {
        name: "TWO TREES Printer Accessories Kit for Creality CR-10 Ender-3 3D Printer",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/07/24/goods_thumb_220-v1/20190724160854_45237.jpg",
        price:16.71      },
        {
        name: "Eazmaker Adjustable Length Laser Protective Goggles 4pcs",
        img:"https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/07/26/goods_thumb_220-v2/20190726103259_70478.jpg" ,
        price:6.62
       },
        {
        name: "Gocomma Damper Blocker with Radiator for 42 Stepper Motor",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/03/06/goods_thumb_220-v1/20190306113109_41151.jpg",
        price:3.99
       },
        {
        name: "ABS Stainless Steel Luggage Scale 50kg / 10g",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/07/04/goods_thumb_220-v2/20180704100514_43742.jpg",
        price:8.70
       },
        {
        name: "FLSUN 5PCS Aluminum Heater Block M6 Specialized for 3D Printer Extruder 3 D Printer Accessory",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20171218/T014524/T0145240026/goods_thumb_220-v1/155724-8543.jpg",
        price:10.76        },
        {
        name: "ORTUR LU1-4 20W Fixed Focus Laser Module for Laser Master / Laser Master 2 / Alfawise C40 Engraving Machine",
        img:"https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/12/31/goods_thumb_220-v1/20201231113333_5fed468db5086.jpg" ,
        price:229.49
        },
        {
        name: "Alfawise 3D Printer PLA Filament Silk 1.75MM 1kg Spool Dimensional Accuracy +/- 0.02mm",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/03/30/goods_thumb_220-v1/20200330085005_5e81423ddc4ae.jpg",
        price:44.14       },
        {
        name: "PLA 3D Printing Filament 1.75mm 1kg for FDM Printer",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/01/16/goods_thumb_220-v1/20200116101333_5e1fc6cda2623.jpg",
        price:42.96        },
        {
        name: "Gocomma V6 Extrusion Head Kit 1.75mm ABS / PLA",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/03/01/goods_thumb_220-v1/20190301114108_12544.jpg",
        price:15.35        },
        {
        name: "Creality Heating Block Silicone Sleeve 3pcs",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/06/17/goods_thumb_220-v1/20190617093431_95681.jpg",
        price:3.99
       },
        {
        name: "Gocomma V5 V6 Brass Nozzle 3D Printer Nozzle 1.75 Mm 0.2 - 1.2mm 9PCS",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/03/03/goods_thumb_220-v1/20190303114814_91699.jpg",
        price:3.99
        },
        {
        name: "OT4-MD-24B-Y 42 Stepper Motor for Alfawise / Anet / Tevo / Anycubic / Creality Series Printers",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/11/07/goods_thumb_220-v1/20191107143247_5dc3ba8fe711a.jpg",
        price:15.66
        },
        {
        name:"IDrawing ID - 163 3D Print Pen with OLED Screen for Artist Kids" ,
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/04/20/goods_thumb_220-v1/20190420093536_64101.jpg",
        price:25.28
        },
        {
        name: "Protective Wavelength 200-590NM Laser Protective Goggles Glasses",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/07/27/goods_thumb_220-v1/20200727145316_5f1e79dc9293c.jpg",
        price:43.58
        },
        {
        name: "NEJE Master 2 20W desktop Laser Engraver and Cutter - Laser Engraving and Cutting Machine - Laser Printer - Laser CNC Router",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15973/goods_thumb_220-v1/26e45723deb8.jpg",
        price:289.99
        },
        {
        name: "CREALITY 3D Printer LD-002R UV Resin 3D Printer LCD Photocuring Ball Linear Rails Air Filtration System",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15960/goods_thumb_220-v1/d231f4568c2f.jpg",
        price:225.99
        },
        {
        name: "KKMOON 20W Portable Mini DIY Laser Engraving Machine High Speed Desktop Laser Engraver Cutter Printer for Wood Plastic Leather",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16179/goods_thumb_220-v1/063974a873a0.jpg",
        price:206.99
        },
        {
        name: "ANYCUBIC Photon Mono 4K New Upgrade High-Speed SLA LCD UV Resin 3D Printer Equiped With 6.23&quot 4K Monochrome Screen",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6507287161137004544/16396/goods_thumb_220-v3/c18e2a3147a0.jpg",
        price:328.49
        },
        {
        name: "Creality Ender-3 V-slot Prusa I3 DIY 3D Printer Kit 220 x 220 x 250mm Printing Size",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/05/14/goods_thumb_220-v1/20180514173913_73036.jpg",
        price:317.88
        },
        {
        name: "Wowstick TRY 21 in 1 Mini Precise Handheld Cordless Electric Screwdriver Set 20 Bits",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Distribution/2019/10/19/goods_thumb_220-v2/20191019132109_29657.jpg" ,
        price:19.97       
        },
        {
        name: "Creality3D CR - 10 Accurate Large Size Desktop DIY 3D Printer",
        img: "https://gloimg.gbtcdn.com/soa/gb/thumb-extend/pdm-product-pic/Electronic/2017/09/16/source-img/20170916142959_48176.jpg",
        price:619.77
        },
        {
        name: "Creality Ender - 3 pro High Precision FDM 3D Printer",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/09/03/goods_thumb_220-v1/20180903105257_61939.jpg",
        price:367.83
        },
        {
        name: "Ortur Laser Master 7W Desktop Laser Engraver Laser Engraving Machine 32-bit Motherboard LaserGRBL Control Software Easy to Install",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/12/05/goods_thumb_220-v1/20191205110627_69391.jpg",
        price:255.08
        },
        {
        name: "ORTUR Laser Master 2 32-bit Motherboard Laser Engraving Machine 400 x 430mm Large Engraving Area Fast Speed High Precision Laser Engraver",
        img:"https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/03/05/goods_thumb_220-v7/20200305143042_66169.jpg",
        price:278.98
        },
        {
        name: "KEYES DHT11 Digital Temperature Humidity Sensor Module for Arduino",
        img: "https://gloimg.gbtcdn.com/soa/gb/2015/201507/goods_thumb_220-v2/1437943205859-P-2860011.jpg",
        price:3.02
       },
        {
        name: "Alfawise U50 DIY FDM 3D Printer 3.5 inch Touch Screen",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Other/2019/08/15/goods_thumb_220-v1/20190815112312_85456.jpg",
        price:436.89
        },
        {
        name: "Creality CR - 10S Pro 300 x 300 x 400mm 3D Printer",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/06/14/goods_thumb_220-v1/20190614132913_91254.jpg",
        price:886.24
        },
        {
        name: "WeiHeng HF - 8008 Electronic Kitchen Scale",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/02/16/goods_thumb_220-v2/20190216164303_26243.jpg",
        price:15.54       
        },
        {
        name: "Tevo Tarantula FDM 3D Printer Kit",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2017/05/06/goods_thumb_220-v1/20170506115644_72781.jpg",
        price:344.30
        },
        {
        name: "Heating Block for 3D Printer Extruder",
        img: "https://gloimg.gbtcdn.com/soa/gb/2015/201507/goods_thumb_220-v2/1438306180030-P-2877563.jpg",
        price:2.99
       },
        {
        name:"Alfawise C30 Pro 3000mw Laser Engraving Machine 460 x 360mm Large Area High Accuracy Simple Frame Laser Engraver",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/01/02/goods_thumb_220-v2/20200102092717_63767.jpg",
        price:305.91
        },
        {
        name: "JGAURORA JGMAKER Magic High Presicion FDM 3D Printer",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/03/12/goods_thumb_220-v2/20190312155536_69237.jpg",
        price:339.17
        },
        {
        name: "B25 Voltage Sensor Module",
        img: "https://gloimg.gbtcdn.com/gb/2015/201507/goods-goods_thumb_220/1437953002762-P-2834493.jpg",
        price:1.99
       },
        {
        name: "JGAURORA - 603S High Precision Desktop 3D Printer",
        img: "https://gloimg.gbtcdn.com/gb/pdm-provider-img/straight-product-img/20171028/T010917/T0109170002/goods-goods_thumb_220/1510267083909555979.jpg",
        price:1107.0
        },
        {
        name: "Ortur Obsidian 3D Printer Fast Response Automatic Leveling Filament Run-out Detection Power Outage Resume Quick Assembly Slient Running",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/09/22/goods_thumb_220-v6/20200922090808_60436.jpg",
        price:474.51
        },
        {
        name: "Alfawise C10 Pro CNC Laser GRBL Control DIY Engraving Machine Professional Modular High Integration 3 Axis Wood Router Engraver",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/09/10/goods_thumb_220-v1/20190910120819_36200.jpg",
        price:269.23
        },
        {
        name: "Ortur Aufero CNC Engraver STM32 24V 10000 RPM Industrial Grade WiFi Control 3.2 inch Touch Screen Cutter Engraving Machine Modular Installation GRBL1.1 3018",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2021/04/12/goods_thumb_220-v5/20210412150737_6073f1b99c7cd.jpg",
        price:490.95
        },
        {
        name: "DIKAVS PAM8403 Amplifier Board",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20171130/T012005/T0120050081/goods_thumb_220-v3/153434-5654.jpg",
        price:10.93        },
        {
        name:"Creality LD-002R HD LCD Resin 3D Printer" ,
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/12/02/goods_thumb_220-v1/20191202145646_5de4b5ae71a47.jpg",
        price:398.10
        },
        {
        name: "Alfawise ACS01 TL Smoother Add-on Module for 3D Printer",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/01/07/goods_thumb_220-v5/20190107183939_43392.jpg",
        price:5.65
       },
        {
        name: "Alfawise Pulley 3D Printer Accessories 6PCS",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/04/12/goods_thumb_220-v1/20190412172638_31839.jpg",
        price:9.98
       },
        {
        name: "Creality CR - 10 V2 Updated Version 3D Printer DIY Kit 300 x 300 x 400mm Print Size with 24V 350W Meanwell Power Supply All-metal Extruding Unit",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/09/11/goods_thumb_220-v1/20190911142003_53761.jpg",
        price:726.60
        },
        {
        name: "3D Printer Accessory TL-Smoother Addon Module For 3D Printer Stepper Motor",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/11/12/goods_thumb_220-v1/20181112173514_52001.jpg",
        price:7.43
       },
        {
        name: "Alfawise U20 Mix 4.3 inch Full Color Touch Screen Control Power-on Self-Test Troubleshooting with WiFi APP Control Function Two-in and One-out FDM 3D Printer",
        img:"https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/09/09/goods_thumb_220-v3/20200909101554_37774.jpg" ,
        price:662.78
        },
        {
        name: "Alfawise 4010 DC U20 And U30 / U30 Pro 3D Printer Cooling Fan 40 x 40 x 10mm",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/12/07/goods_thumb_220-v1/20181207152903_71241.jpg",
        price:6.95
       },
        {
        name: "Portable Precision Electronic Scale",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/08/06/goods_thumb_220-v2/20180806150328_36493.jpg",
        price:9.44
       },
        {
        name: "LaserPecker Pro Handheld Mini 1600mW Laser Engraver APP Control Cutter Portable Laser Engraving Machine",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Other/2020/04/16/goods_thumb_220-v1/20200416150438_39339.jpg",
        price:556.60
        },
        {
        name: "Creality CP - 01 3 in 1 DIY Intelligent Module Machine FDM 3D Printer & CNC Cutting & Laser Engraving with Outage Resume Print",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/08/28/goods_thumb_220-v1/20190828110610_61826.jpg",
        price:933.76
        },
        {
        name: "Electronic Digital Jewelry Kitchen Scale 500g / 1kg / 3kg",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/08/04/goods_thumb_220-v2/20180804154754_17035.jpg",
        price:14.26        },
        {
        name: "Alfawise 3D Printer Teflon Tube for U20 / U30 / U30 Pro",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/12/07/goods_thumb_220-v1/20181207162944_30509.jpg",
        price:6.43
       },
        {
        name: "3.5 inch TFT LCD Touch Screen + Protective Case Support Cooling Fan + Touch Pen Kit",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/03/14/goods_thumb_220-v1/20190314110407_95272.jpg",
        price:42.96        },
        {
        name: "CNC Z-axis Sliding Table 50 - 60mm DIY Milling Linear Motion for 3-axis Engraving Machine",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/09/11/goods_thumb_220-v2/20190911092409_18441.jpg",
        price:78.17        },
        {
        name:"DS18B20 Temperature Sensor Waterproof Digital Probe Sensor For Arduino ( 3pcs)" ,
        img:"https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20181126/T015156/T0151560134/goods_thumb_220-v1/174348-5186.jpg" ,
        price:10.06        },
        {
        name:"Alfawise U20 / U30 / U30 Pro Original Flexible Couplings 5mm To 8mm Coupler" ,
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/12/06/goods_thumb_220-v2/20181206150345_20965.jpg",
        price:5.05
       },
        {
        name: "ORTUR LU1-2 Adjustable Focus Laser Module PWM Mode for Desktop Laser Engraver Machine",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/07/24/goods_thumb_220-v1/20200724161608_78705.jpg",
        price:103.55
        },
        {
        name: "10Pcs Aluminum Heatsink Cooler Cooling Panel for Raspberry Pi 3/ 2 / Pi Model B+",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20190306/T010212/T0102120710/goods_thumb_220-v1/125323-2079.jpg",
        price:3.99
       },
        {
        name: "Gocomma 5m 2GT - 6mm Rubber Opening Timing 3D Printer Belt",
        img:"https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/03/01/goods_thumb_220-v1/20190301121428_79526.jpg" ,
        price:6.10
       },
        {
        name: "Gocomma POM Pulley Rubber Roller 10pcs",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/03/19/goods_thumb_220-v2/20190319165321_80708.jpg",
        price:12.50       },
        {
        name: "TWO TREES Printer Accessories Kit for Creality CR-10 Ender-3 3D Printer",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/07/24/goods_thumb_220-v1/20190724160854_45237.jpg",
        price:16.71      },
        {
        name: "Eazmaker Adjustable Length Laser Protective Goggles 4pcs",
        img:"https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/07/26/goods_thumb_220-v2/20190726103259_70478.jpg" ,
        price:6.62
       },
        {
        name: "Gocomma Damper Blocker with Radiator for 42 Stepper Motor",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/03/06/goods_thumb_220-v1/20190306113109_41151.jpg",
        price:3.99
       },
        {
        name: "ABS Stainless Steel Luggage Scale 50kg / 10g",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/07/04/goods_thumb_220-v2/20180704100514_43742.jpg",
        price:8.70
       },
        {
        name: "FLSUN 5PCS Aluminum Heater Block M6 Specialized for 3D Printer Extruder 3 D Printer Accessory",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20171218/T014524/T0145240026/goods_thumb_220-v1/155724-8543.jpg",
        price:10.76        },
        {
        name: "ORTUR LU1-4 20W Fixed Focus Laser Module for Laser Master / Laser Master 2 / Alfawise C40 Engraving Machine",
        img:"https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/12/31/goods_thumb_220-v1/20201231113333_5fed468db5086.jpg" ,
        price:229.49
        },
        {
        name: "Alfawise 3D Printer PLA Filament Silk 1.75MM 1kg Spool Dimensional Accuracy +/- 0.02mm",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/03/30/goods_thumb_220-v1/20200330085005_5e81423ddc4ae.jpg",
        price:44.14       },
        {
        name: "PLA 3D Printing Filament 1.75mm 1kg for FDM Printer",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/01/16/goods_thumb_220-v1/20200116101333_5e1fc6cda2623.jpg",
        price:42.96        },
        {
        name: "Gocomma V6 Extrusion Head Kit 1.75mm ABS / PLA",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/03/01/goods_thumb_220-v1/20190301114108_12544.jpg",
        price:15.35        },
        {
        name: "Creality Heating Block Silicone Sleeve 3pcs",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/06/17/goods_thumb_220-v1/20190617093431_95681.jpg",
        price:3.99
       },
        {
        name: "Gocomma V5 V6 Brass Nozzle 3D Printer Nozzle 1.75 Mm 0.2 - 1.2mm 9PCS",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/03/03/goods_thumb_220-v1/20190303114814_91699.jpg",
        price:3.99
        },
        {
        name: "OT4-MD-24B-Y 42 Stepper Motor for Alfawise / Anet / Tevo / Anycubic / Creality Series Printers",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/11/07/goods_thumb_220-v1/20191107143247_5dc3ba8fe711a.jpg",
        price:15.66
        },
        {
        name:"IDrawing ID - 163 3D Print Pen with OLED Screen for Artist Kids" ,
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/04/20/goods_thumb_220-v1/20190420093536_64101.jpg",
        price:25.28
        },
        {
        name: "Protective Wavelength 200-590NM Laser Protective Goggles Glasses",
        img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/07/27/goods_thumb_220-v1/20200727145316_5f1e79dc9293c.jpg",
        price:43.58
        },
        {
        name: "NEJE Master 2 20W desktop Laser Engraver and Cutter - Laser Engraving and Cutting Machine - Laser Printer - Laser CNC Router",
        img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15973/goods_thumb_220-v1/26e45723deb8.jpg",
        price:289.99
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