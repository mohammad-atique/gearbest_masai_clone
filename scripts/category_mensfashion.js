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

    // obj = [
    //     {
    //         brand: "Xiaomi",
    //         img_url: "https://uidesign.gbtcdn.com/GB/image/6874/150x73.jpg"
    //     },
    //     {
    //         brand: "Mijia",
    //         img_url: "https://pdm.gw-ec.com/uploads/pdm-brand-logo/2019/03/05/20190307102445_5c8080ed0ecb3.jpg"
    //     },
    //     {
    //         brand: "Huawei",
    //         img_url: "https://css.gbtcdn.com/imagecache/GB/images/logolist/huawei.png"
    //     },
    //     {
    //         brand: "Alfawise",
    //         img_url: "https://uidesign.gbtcdn.com/GB/images/index/2018/brand_banner/Alfawise/Alfawise_2.jpg?impolicy=hight"
    //     },
    //     {
    //         brand: "Excelvan",
    //         img_url: "https://uidesign.gbtcdn.com/GB/images/others/top_brands/Excelvan-326.jpg"
    //     },
    //     {
    //         brand: "Gocomma",
    //         img_url: "https://uidesign.gbtcdn.com/GB/images/banner/others/gocomme.png"
    //     },
    // ]
    // obj.map(function (elem) {
    //     var lilbox = document.createElement("button");
    //     lilbox.setAttribute("id", "lilbox");

    //     lilbox.addEventListener("click", function () {
    //         brandFilter(event, elem)
    //     });
    //     var image = document.createElement("img");
    //     image.setAttribute("src", elem.img_url);
    //     image.setAttribute("id", "pic");
    //     lilbox.append(image);
    //     document.querySelector("#brand").append(lilbox);
    // });
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
         //SHOES
        // AILADUN
        {
            name : "AILADUN Men's Shoes Hand Stitching Casual Large Size",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/08/05/goods_thumb_220-v2/20190805174256_51935.jpg",
            price : 65.08,
        },
        {
            name : "AILADUN Men's Fashion Striped Outdoor Lace-up Sneakers Thick Bottom",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/07/05/goods_thumb_220-v1/20190705185625_52652.jpg",
            price : 453.66,
        },
        {
            name : "AILADUN Men's Sport Shoes Breathable Large Size",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/07/24/goods_thumb_220-v2/20190724145430_58592.jpg",
            price : 350.90,
        },
        {
            name : "AILADUN Fly Woven Sneakers Low-top Color-matching Running Shoes",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/12/19/goods_thumb_220-v1/20191219091109_88952.jpg",
            price : 476.66,
        },
        {
            name : "AILADUN Men Sneaker Personality Mixed Color Breathable Casual Sports Shoes",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/04/20/goods_thumb_220-v1/20200420175349_5e9d712df0554.jpg",
            price : 30.17,
        },
        //SENBAO
        {
            name : "SENBAO Men Shoes Breathable Mesh Outdoor Casual Leather Sandals",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/06/19/goods_thumb_220-v1/20200619111431_5eec2d9753ea8.jpg",
            price : 32.30,
        },
        {
            name : "SENBAO Men Full Grain Leather Lace Up Mid-high Shoes Durable Outdoor Footwear",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/09/26/goods_thumb_220-v1/20190926141047_28930.jpg",
            price : 60.62,
        },
        {
            name : "SENBAO Men Shoes Matte Leather Mesh Cloth Round Toe Casual Footwear",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/05/12/goods_thumb_220-v1/20200512174753_5eba70c94cebf.jpg",
            price : 47.99,
        },
        {
            name : "SENBAO Men Shoes Matte Leather Mesh Cloth Round Toe Casual Footwear",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/05/12/goods_thumb_220-v1/20200512174754_5eba70caadda2.jpg",
            price : 47.99,
        },
        {
            name : "SENBAO Men Shoes Matte Leather Mesh Cloth Round Toe Casual Footwear",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/05/12/goods_thumb_220-v1/20200512174754_5eba70ca5b3b4.jpg",
            price : 47.99,
        },
        //BAGS
        //HIKING BAGS
        {
            name : "Mountaineering Bags Large Capacity Outdoor Sports Camouflage Backpack",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/2020/09/27/goods_thumb_220-v2/20200927155033_46232.jpg",
            price : 40.99,
        },
        {
            name : "Mountaineering Backpack Travel Sports Bag",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/2020/09/27/goods_thumb_220-v2/20200927155015_50233.jpg",
            price : 51.99,
        },
        //LAPTOP BAGS
        {
            name : "Men Anti Thief Backpacks Fashion Male Laptop USB Backbag Travel Bag",
            img : "https://gloimg.gbtcdn.com/soa/gb/thumb-extend/pdm-provider-img/straight-product-img/20180320/T021362/T0213620013/source-img/165804-7362.jpg",
            price : 35.00,
        },
        {
            name : "Korean Shoulder Bag Female College Students Wind Bags Outdoor Leisure Travel Backpack Computer Bag Man Contracted",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/2020/09/27/goods_thumb_220-v3/20200927155100_16952.jpg",
            price : 30.99,
        },
        //CASUAL BAGS
        {
            name : "Canvas Backpack Retro Crazy Horse Leather Casual Computer Bag",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/2020/09/27/goods_thumb_220-v2/20200927174715_15679.jpg",
            price : 67.40,
        },
        //CLOTHING
        {
            name : "Mountainskin New Men&39s Leather Jackets Autumn Casual Motorcycle PU Jacket Biker Leather Coats Brand Clothing EU Size SA722",
            img : "https://gloimg.gbtcdn.com/soa/gb/store/6866331803104505856/16421/gb_clothing_img-v1/d6e1acb6230c.jpg",
            price : 50.16,
        },
        {
            name : "2021 KB Summer New Men&39s Short-Sleeved T-shirt Cotton and Linen Led Casual Men&39s T-shirt Shirt Male Breathable S-3XL",
            img : "https://gloimg.gbtcdn.com/soa/gb/store/6866331803104505856/16423/gb_clothing_img-v4/063d93b7f8f7.jpg",
            price : 14.24,
        },
        {
            name : "Men Real Leather Jacket Men Motorcycle Removable Hood winter coat Men Warm Genuine Leather Jackets",
            img : "https://gloimg.gbtcdn.com/soa/gb/item/6866331803104505856/16400/gb_clothing_img-v1/a1ba4998839e.jpg",
            price : 285.31,
        },
        {
            name : "Men Thickened Down Jacket -30 Winter Warm Down Coat 2021 New Men Fashion Long White Duck Hooded Down Parkas Plus Size 5XL",
            img : "https://gloimg.gbtcdn.com/soa/gb/item/6866331803104505856/16399/gb_clothing_img-v1/cd8a98497308.jpg",
            price : 129.32,
        },
        {
            name : "Cotton Harem Pants Men Solid Elastic Waist Streetwear Joggers 2020 New Baggy Drop-crotch Pants Casual Trousers Men Dropshipping",
            img : "https://gloimg.gbtcdn.com/soa/gb/item/6866331803104505856/16391/gb_clothing_img-v1/3f61ec72a0ec.jpg",
            price : 36.36,
        },
        //ACTIVE WEAR
        {
            name : "Fast Dry Fitness Suits Men's T-shirt Basketball Running Fitness Suits",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20181206/T033390/T0333900103/gb_clothing_img-v1/183847-9476.jpg",
            price : 19.39,
        },
        {
            name : "Men's Sports Fitness Running Training Loose Casual Quick-drying Shorts",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20180922/T025361/T0253610112/gb_clothing_img-v1/164012-6633.jpg",
            price : 20.45,
        },
        {
            name : "Men's Fitness Printing Sports Running Training Quick-drying Tight T-Shirt",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20180920/T025361/T0253610099/gb_clothing_img-v1/161711-5430.jpg",
            price : 21.71,
        },
        {
            name : "A011838 Summer Men Running Fitness Shorts Solid Color Three-point Pants Active Bottoms",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2021/03/22/gb_clothing_img-v1/20210322181551_60586e577e27c.jpg",
            price : 26.27,
        },
        {
            name : "Men's Sports Set Camouflage Stitching Hood Fitness Clothes Outdoor Sweating Running Jacket Two-piece Set",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/2021/01/27/gb_clothing_img-v1/20210127120335_10583.jpg",
            price : 59.99,
        },
        //SHOES
        // AILADUN
        {
            name : "AILADUN Men's Shoes Hand Stitching Casual Large Size",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/08/05/goods_thumb_220-v2/20190805174256_51935.jpg",
            price : 65.08,
        },
        {
            name : "AILADUN Men's Fashion Striped Outdoor Lace-up Sneakers Thick Bottom",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/07/05/goods_thumb_220-v1/20190705185625_52652.jpg",
            price : 453.66,
        },
        {
            name : "AILADUN Men's Sport Shoes Breathable Large Size",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/07/24/goods_thumb_220-v2/20190724145430_58592.jpg",
            price : 350.90,
        },
        {
            name : "AILADUN Fly Woven Sneakers Low-top Color-matching Running Shoes",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/12/19/goods_thumb_220-v1/20191219091109_88952.jpg",
            price : 476.66,
        },
        {
            name : "AILADUN Men Sneaker Personality Mixed Color Breathable Casual Sports Shoes",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/04/20/goods_thumb_220-v1/20200420175349_5e9d712df0554.jpg",
            price : 30.17,
        },
        //SENBAO
        {
            name : "SENBAO Men Shoes Breathable Mesh Outdoor Casual Leather Sandals",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/06/19/goods_thumb_220-v1/20200619111431_5eec2d9753ea8.jpg",
            price : 32.30,
        },
        {
            name : "SENBAO Men Full Grain Leather Lace Up Mid-high Shoes Durable Outdoor Footwear",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/09/26/goods_thumb_220-v1/20190926141047_28930.jpg",
            price : 60.62,
        },
        {
            name : "SENBAO Men Shoes Matte Leather Mesh Cloth Round Toe Casual Footwear",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/05/12/goods_thumb_220-v1/20200512174753_5eba70c94cebf.jpg",
            price : 47.99,
        },
        {
            name : "SENBAO Men Shoes Matte Leather Mesh Cloth Round Toe Casual Footwear",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/05/12/goods_thumb_220-v1/20200512174754_5eba70caadda2.jpg",
            price : 47.99,
        },
        {
            name : "SENBAO Men Shoes Matte Leather Mesh Cloth Round Toe Casual Footwear",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/05/12/goods_thumb_220-v1/20200512174754_5eba70ca5b3b4.jpg",
            price : 47.99,
        },
        //BAGS
        //HIKING BAGS
        {
            name : "Mountaineering Bags Large Capacity Outdoor Sports Camouflage Backpack",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/2020/09/27/goods_thumb_220-v2/20200927155033_46232.jpg",
            price : 40.99,
        },
        {
            name : "Mountaineering Backpack Travel Sports Bag",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/2020/09/27/goods_thumb_220-v2/20200927155015_50233.jpg",
            price : 51.99,
        },
        //LAPTOP BAGS
        {
            name : "Men Anti Thief Backpacks Fashion Male Laptop USB Backbag Travel Bag",
            img : "https://gloimg.gbtcdn.com/soa/gb/thumb-extend/pdm-provider-img/straight-product-img/20180320/T021362/T0213620013/source-img/165804-7362.jpg",
            price : 35.00,
        },
        {
            name : "Korean Shoulder Bag Female College Students Wind Bags Outdoor Leisure Travel Backpack Computer Bag Man Contracted",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/2020/09/27/goods_thumb_220-v3/20200927155100_16952.jpg",
            price : 30.99,
        },
        //CASUAL BAGS
        {
            name : "Canvas Backpack Retro Crazy Horse Leather Casual Computer Bag",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/2020/09/27/goods_thumb_220-v2/20200927174715_15679.jpg",
            price : 67.40,
        },
        //CLOTHING
        {
            name : "Mountainskin New Men&39s Leather Jackets Autumn Casual Motorcycle PU Jacket Biker Leather Coats Brand Clothing EU Size SA722",
            img : "https://gloimg.gbtcdn.com/soa/gb/store/6866331803104505856/16421/gb_clothing_img-v1/d6e1acb6230c.jpg",
            price : 50.16,
        },
        {
            name : "2021 KB Summer New Men&39s Short-Sleeved T-shirt Cotton and Linen Led Casual Men&39s T-shirt Shirt Male Breathable S-3XL",
            img : "https://gloimg.gbtcdn.com/soa/gb/store/6866331803104505856/16423/gb_clothing_img-v4/063d93b7f8f7.jpg",
            price : 14.24,
        },
        {
            name : "Men Real Leather Jacket Men Motorcycle Removable Hood winter coat Men Warm Genuine Leather Jackets",
            img : "https://gloimg.gbtcdn.com/soa/gb/item/6866331803104505856/16400/gb_clothing_img-v1/a1ba4998839e.jpg",
            price : 285.31,
        },
        {
            name : "Men Thickened Down Jacket -30 Winter Warm Down Coat 2021 New Men Fashion Long White Duck Hooded Down Parkas Plus Size 5XL",
            img : "https://gloimg.gbtcdn.com/soa/gb/item/6866331803104505856/16399/gb_clothing_img-v1/cd8a98497308.jpg",
            price : 129.32,
        },
        {
            name : "Cotton Harem Pants Men Solid Elastic Waist Streetwear Joggers 2020 New Baggy Drop-crotch Pants Casual Trousers Men Dropshipping",
            img : "https://gloimg.gbtcdn.com/soa/gb/item/6866331803104505856/16391/gb_clothing_img-v1/3f61ec72a0ec.jpg",
            price : 36.36,
        },
        //ACTIVE WEAR
        {
            name : "Fast Dry Fitness Suits Men's T-shirt Basketball Running Fitness Suits",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20181206/T033390/T0333900103/gb_clothing_img-v1/183847-9476.jpg",
            price : 19.39,
        },
        {
            name : "Men's Sports Fitness Running Training Loose Casual Quick-drying Shorts",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20180922/T025361/T0253610112/gb_clothing_img-v1/164012-6633.jpg",
            price : 20.45,
        },
        {
            name : "Men's Fitness Printing Sports Running Training Quick-drying Tight T-Shirt",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20180920/T025361/T0253610099/gb_clothing_img-v1/161711-5430.jpg",
            price : 21.71,
        },
        {
            name : "A011838 Summer Men Running Fitness Shorts Solid Color Three-point Pants Active Bottoms",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2021/03/22/gb_clothing_img-v1/20210322181551_60586e577e27c.jpg",
            price : 26.27,
        },
        {
            name : "Men's Sports Set Camouflage Stitching Hood Fitness Clothes Outdoor Sweating Running Jacket Two-piece Set",
            img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/2021/01/27/gb_clothing_img-v1/20210127120335_10583.jpg",
            price : 59.99,
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