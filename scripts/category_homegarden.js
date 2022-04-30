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
            name : "360 Degree Rotation Kitchen Water Faucet Bubbler Nozzle Filter Adapter - Silver",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20180910/T012429/T0124290368/goods_thumb_220-v1/165525-7474.jpg",
            price: 2.99        
        },
        {
            name : "Mijia LYWSD03MMC Bluetooth 4.2 Household Thermometer Hygrometer Second Generation Wireless Smart Electric Digital Display Intelligent Linkage Baby Mode Work with Mijia APP - White 4pcs",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/12/24/goods_thumb_220-v2/20191224115424_89103.jpg",
            price : 41.57
        },
        {
            name: "Xiaomi Mijia ClearGrass Air Monitor Retina Touch IPS Screen Mobile Touch Operation Indoor Outdoor Clear Grass Air Detector - White",
            img: "https://gloimg.gbtcdn.com/soa/gb/item/6701436345185419264/16414/goods_thumb_220-v1/7a80cf6a4866.jpg",
            price: 254.9
        },
        {
            name: "MIJIA Bluetooth Thermometer Hygrometer - White",
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/03/26/goods_thumb_220-v3/20190326142031_54598.jpg",
            price: 27.91
        },
        {
            name: "Rechargeable Table Lamp - White",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/06/12/goods_thumb_220-v2/20190612084209_48810.jpg",
            price : 55.53
        },
        {
            name: "Santa Mijia Tableware Protective Sleeve - Multi-A",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/09/21/goods_thumb_220-v1/20180921155855_69634.jpg",
            price : 5.43       
        },
        {
            name : "YISHIYUAN 4 in 1 Beer Mugs Creative Beer Cups for Party Bar Home Use - Transparent",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/12/09/goods_thumb_220-v2/20201209150515_5fd0772bebdfc.jpg",
            price : 13.43
        },
        {
            name : "Colorful YISHIYUAN LED Flash Big Beer Glass (2 PCS)",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20180720/T006445/T0064450140/goods_thumb_220-v1/145942-8310.jpg",
            price : 10.52
        },
        {
            name : "Kitchen YISHIYUAN Utensil Set Heat Resistant Silicone Heads Cooking Tools 23pcs",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20190701/T020157/T0201570253/goods_thumb_220-v3/162145-8565.jpg",
            price : 356.79
        },
        {
            name : "YISHIYUAN Christmas Snowscape Printed Waterproof Fabric Table Cloth",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Clothing/2017/11/24/goods_thumb_220-v1/20171124110523_81512.jpg",
            price : 424.26
        },
        {
            name : "BRELONG YJ200 Smart UV Toothbrush Sterilizer Holder Multifunctional Bathroom Wall-mounted Tooth Rack Sterilization",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/02/18/goods_thumb_220-v1/20200218121031_5e4b63b7c4b8a.jpg",
            price : 31.74
        },
        {
            name : "MLFALLS Baseus M1136CW Benchtop Basin Faucet",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/10/30/goods_thumb_220-v1/20181030163820_63165.jpg",
            price : 221.2
        },
        {
            name : "Baseus SDS - A5 LED Color Shower Head Hotel Temperature Control Three Color",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/11/14/goods_thumb_220-v1/20181114162957_58252.jpg",
            price : 21.27
        },
        {
            name : "Retro Style Beach Baseus Starfish Seaweed Big Turtle Printed Shower Curtain",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/07/24/goods_thumb_220-v1/20190724164525_18244.jpg",
            price : 21.95
        },
        {
            name : "LANGRIA LED Fashionable Dreamlike Shower Head",
            img : "https://gloimg.gbtcdn.com/gb/pdm-provider-img/straight-product-img/20171121/HQBWC2351/HQBWC23510002/goods-goods_thumb_220/1511207554887741347.jpg",
            price : 24.16
        },
        {
            name : "LANGRIA European Creative Hardware Table Lamp",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20181217/T032617/T0326170183/goods_thumb_220-v1/123444-4688.jpg",
            price : 25.36
        },
        {
            name : "LANGRIA Chrysanthemum Artificial Flower Home Decorations",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20180927/T027872/T0278720041/goods_thumb_220-v1/215606-3486.jpg",
            price : 4.53       
        },
        {
            name : "LANGRIA Home Wall Decor Flower 5D Diamond Painting Full DIY Embroidery Cross Craft",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20180817/T015601/T0156010428/goods_thumb_220-v1/141908-7351.jpg",
            price : 8.69       
        },
        {
            name : "YSDAFEN Handmade LED Light String Beaded Feather Dream Catcher",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Clothing/2019/05/06/goods_thumb_220-v1/20190506191408_80879.jpg",
            price : 11.25
        },
        {
            name : "Silver YSDAFEN Orbital Desk Decoration Perpetual Motion Model",
            img : "https://gloimg.gbtcdn.com/soa/gb/thumb-extend/pdm-provider-img/straight-product-img/20180511/T023129/T0231290069/source-img/154256-9609.jpg",
            price : 13.07
        },
        {
            name : "BRELONG Living Room Floor Carpet Nordic Brief Style Circle Printed Soft Non-Slip Mat",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20181103/T013692/T0136920335/goods_thumb_220-v1/132216-1646.jpg", 
            price : 91.31
        },
        {
            name : "Heart Shaped Romantic Love Tea YSDAFEN lights Candle Bulk 9pcs",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Clothing/2017/12/13/goods_thumb_220-v1/20171213115601_85471.jpg", 
            price : 11.16
        },
        {
            name : "BRELONG Multi-layer Iron Slippers Storage Rack",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/10/16/goods_thumb_220-v2/20181016164954_94461.jpg", 
            price : 46.66
        },
        {
            name : "YSDAFEN Business Golf Dual-use Straight Shank Long Umbrella",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/09/25/goods_thumb_220-v1/20180925120126_99914.jpg", 
            price : 36.79
        },
        {
            name : "BRELONG Slow Masticating Juicer 100mm Wide Mouth BPA-Free Juicer Cold Press Juice Quiet Motor Electric Fruit Vegetable Juicer Machine",
            img : "https://gloimg.gbtcdn.com/soa/gb/item/6868971002878160896/16393/goods_thumb_220-v1/e72a0ab241ca.jpg", 
            price : 85.49
        },
        {
            name : "360 Degree Rotation Kitchen Water Faucet Bubbler Nozzle Filter Adapter - Silver",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20180910/T012429/T0124290368/goods_thumb_220-v1/165525-7474.jpg",
            price: 2.99        
        },
        {
            name : "Mijia LYWSD03MMC Bluetooth 4.2 Household Thermometer Hygrometer Second Generation Wireless Smart Electric Digital Display Intelligent Linkage Baby Mode Work with Mijia APP - White 4pcs",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/12/24/goods_thumb_220-v2/20191224115424_89103.jpg",
            price : 41.57
        },
        {
            name: "Xiaomi Mijia ClearGrass Air Monitor Retina Touch IPS Screen Mobile Touch Operation Indoor Outdoor Clear Grass Air Detector - White",
            img: "https://gloimg.gbtcdn.com/soa/gb/item/6701436345185419264/16414/goods_thumb_220-v1/7a80cf6a4866.jpg",
            price: 254.9
        },
        {
            name: "MIJIA Bluetooth Thermometer Hygrometer - White",
            img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/03/26/goods_thumb_220-v3/20190326142031_54598.jpg",
            price: 27.91
        },
        {
            name: "Rechargeable Table Lamp - White",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/06/12/goods_thumb_220-v2/20190612084209_48810.jpg",
            price : 55.53
        },
        {
            name: "Santa Mijia Tableware Protective Sleeve - Multi-A",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/09/21/goods_thumb_220-v1/20180921155855_69634.jpg",
            price : 5.43       
        },
        {
            name : "YISHIYUAN 4 in 1 Beer Mugs Creative Beer Cups for Party Bar Home Use - Transparent",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/12/09/goods_thumb_220-v2/20201209150515_5fd0772bebdfc.jpg",
            price : 13.43
        },
        {
            name : "Colorful YISHIYUAN LED Flash Big Beer Glass (2 PCS)",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20180720/T006445/T0064450140/goods_thumb_220-v1/145942-8310.jpg",
            price : 10.52
        },
        {
            name : "Kitchen YISHIYUAN Utensil Set Heat Resistant Silicone Heads Cooking Tools 23pcs",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20190701/T020157/T0201570253/goods_thumb_220-v3/162145-8565.jpg",
            price : 356.79
        },
        {
            name : "YISHIYUAN Christmas Snowscape Printed Waterproof Fabric Table Cloth",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Clothing/2017/11/24/goods_thumb_220-v1/20171124110523_81512.jpg",
            price : 424.26
        },
        {
            name : "BRELONG YJ200 Smart UV Toothbrush Sterilizer Holder Multifunctional Bathroom Wall-mounted Tooth Rack Sterilization",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/02/18/goods_thumb_220-v1/20200218121031_5e4b63b7c4b8a.jpg",
            price : 31.74
        },
        {
            name : "MLFALLS Baseus M1136CW Benchtop Basin Faucet",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/10/30/goods_thumb_220-v1/20181030163820_63165.jpg",
            price : 221.2
        },
        {
            name : "Baseus SDS - A5 LED Color Shower Head Hotel Temperature Control Three Color",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/11/14/goods_thumb_220-v1/20181114162957_58252.jpg",
            price : 21.27
        },
        {
            name : "Retro Style Beach Baseus Starfish Seaweed Big Turtle Printed Shower Curtain",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/07/24/goods_thumb_220-v1/20190724164525_18244.jpg",
            price : 21.95
        },
        {
            name : "LANGRIA LED Fashionable Dreamlike Shower Head",
            img : "https://gloimg.gbtcdn.com/gb/pdm-provider-img/straight-product-img/20171121/HQBWC2351/HQBWC23510002/goods-goods_thumb_220/1511207554887741347.jpg",
            price : 24.16
        },
        {
            name : "LANGRIA European Creative Hardware Table Lamp",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20181217/T032617/T0326170183/goods_thumb_220-v1/123444-4688.jpg",
            price : 25.36
        },
        {
            name : "LANGRIA Chrysanthemum Artificial Flower Home Decorations",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20180927/T027872/T0278720041/goods_thumb_220-v1/215606-3486.jpg",
            price : 4.53       
        },
        {
            name : "LANGRIA Home Wall Decor Flower 5D Diamond Painting Full DIY Embroidery Cross Craft",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20180817/T015601/T0156010428/goods_thumb_220-v1/141908-7351.jpg",
            price : 8.69       
        },
        {
            name : "YSDAFEN Handmade LED Light String Beaded Feather Dream Catcher",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Clothing/2019/05/06/goods_thumb_220-v1/20190506191408_80879.jpg",
            price : 11.25
        },
        {
            name : "Silver YSDAFEN Orbital Desk Decoration Perpetual Motion Model",
            img : "https://gloimg.gbtcdn.com/soa/gb/thumb-extend/pdm-provider-img/straight-product-img/20180511/T023129/T0231290069/source-img/154256-9609.jpg",
            price : 13.07
        },
        {
            name : "BRELONG Living Room Floor Carpet Nordic Brief Style Circle Printed Soft Non-Slip Mat",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20181103/T013692/T0136920335/goods_thumb_220-v1/132216-1646.jpg", 
            price : 91.31
        },
        {
            name : "Heart Shaped Romantic Love Tea YSDAFEN lights Candle Bulk 9pcs",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Clothing/2017/12/13/goods_thumb_220-v1/20171213115601_85471.jpg", 
            price : 11.16
        },
        {
            name : "BRELONG Multi-layer Iron Slippers Storage Rack",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/10/16/goods_thumb_220-v2/20181016164954_94461.jpg", 
            price : 46.66
        },
        {
            name : "YSDAFEN Business Golf Dual-use Straight Shank Long Umbrella",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/09/25/goods_thumb_220-v1/20180925120126_99914.jpg", 
            price : 36.79
        },
        {
            name : "BRELONG Slow Masticating Juicer 100mm Wide Mouth BPA-Free Juicer Cold Press Juice Quiet Motor Electric Fruit Vegetable Juicer Machine",
            img : "https://gloimg.gbtcdn.com/soa/gb/item/6868971002878160896/16393/goods_thumb_220-v1/e72a0ab241ca.jpg", 
            price : 85.49
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