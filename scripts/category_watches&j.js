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
     //Quartz M & F
     {
        name : "CURREN 8225 Casual Men Quartz Watch",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/06/29/goods_thumb_220-v4/20180629100638_50703.jpg",
        price : 25.88,

    },
    {
        name : "CURREN 8250 Casual Men Quartz Watch",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/01/28/goods_thumb_220-v1/20190128181926_89260.jpg",
        price : 26.88,

    },
    {
        name : "Casual Quartz Analog Silicone Stainless Steel Dial Sports WristWatch",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20171228/T011809/T0118090177/goods_thumb_220-v1/171136-7432.jpg",
        price : 6.50,

    },
    {
        name : "Female Cute Kitten Wrist Watch Quartz Watch",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20181018/T030482/T0304820099/goods_thumb_220-v1/150511-9476.jpg",
        price : 10.83,

    },
    {
        name : "CURREN 8291 Men Quartz Watch Waterproof",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/07/16/goods_thumb_220-v1/20190716181737_92988.jpg",
        price : 34.99,

    },
    //MEGIR Watches
    {
        name : "MEGIR Men's Quartz Watch Leather Multi-function Chronograph Calendar Watch",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/2020/12/11/goods_thumb_220-v2/20201211174201_51397.jpg",
        price : 107.99,

    },
    {
        name : "MEGIR Roller Watch Men Fashion Sports Business Leather Quartz Watch",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/2020/12/11/goods_thumb_220-v2/20201211115315_75321.jpg",
        price : 107.99,

    },
    {
        name : "MEGIR 2084 Men's Multi-function Luminous Watch Leather Waterproof Chronograph Sports Quartz Watch",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/2020/12/14/goods_thumb_220-v3/20201214103803_53343.jpg",
        price : 96.99,

    },
    {
        name : "MEGIR 2011G Quartz Watch Multi-function Men Watch Leather Waterproof Sports",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/2020/12/11/goods_thumb_220-v1/20201211115311_98539.jpg",
        price : 83.99,

    },
    {
        name : "MEGIR 2080 Men Watch Quartz Watch Sports Fashion Multi-function Calendar Leather Waterproof",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/2020/12/11/goods_thumb_220-v2/20201211174220_63111.jpg",
        price : 102.99,

    },
    //SKMEI
    {
        name : "SKMEI 1509 Men's Gentleman Ultra-thin Quartz Watch Concise PU Band",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/07/20/goods_thumb_220-v1/20190720175216_61074.jpg",
        price : 22.99,

    },
    {
        name : "SKMEI Quartz Women Simple Fashion Top Brand Luxury Waterproof Wrist Watches",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20181220/T027485/T0274850315/goods_thumb_220-v1/171744-5320.jpg",
        price : 42.65,

    },
    {
        name : "SKMEI 1302 Leisure Multifunctional Sports Electronic Watch",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20180927/goods_thumb_220-v2/2018092718200787321.jpg",
        price : 24.23,

    },
    {
        name : "SKMEI Men's Digital Sports Watch Waterproof Military Stopwatch",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20180808/T019715/T0197150591/goods_thumb_220-v1/195146-1220.jpg",
        price : 15.77,

    },
    {
        name : "SKMEI 1181 Mens Quartz Stainless Steel Strap Waterproof Wrist Watches",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20180717/T027485/T0274850044/goods_thumb_220-v1/204030-3329.jpg",
        price : 55.86,

    },
    //Jewelry

    //MEN
    {
        name : "Titanium Steel Double Herringbone Bracelet",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2017/11/22/goods_thumb_220-v1/20171122090633_28624.jpg",
        price : 12.64,

    },
    {
        name : "Stainless Steel Unique Stylish Men Ring",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2017/12/13/goods_thumb_220-v1/20171213084822_70954.jpg",
        price : 8.99,

    },
    {
        name : "Jewelry Hand Chain Valentine's Day Gift Couple Hand-made Bracelets",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/2020/12/01/goods_thumb_220-v1/20201201115803_88111.jpg",
        price : 3.99,

    },
    {
        name : "Accessories Personality Crown Lion Domineering Rough Male Ring",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/2020/12/01/goods_thumb_220-v1/20201201160241_61569.jpg",
        price : 3.99,

    },
    {
        name : "Skull Retro Punk Style Men's Ring",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/2020/12/01/goods_thumb_220-v1/20201201160244_31493.jpg",
        price : 4.99,

    },
    // WOMEN
    {
        name : "Fashion Diamond Crystal Luxury Ladies Bracelet",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20180908/T010979/T0109790806/goods_thumb_220-v1/095913-2821.jpg",
        price : 332.39,

    },
    {
        name : "European Style Fashion Vintage Black Lace Drop Gem Choker Necklace",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20181107/T034256/T0342560061/goods_thumb_220-v1/153020-9302.jpg",
        price : 412.84,

    },
    {
        name : "Women Girls Diamond Wings Lace Necklace Trendy Jewelry Collar Short Choker",
        img : "https://gloimg.gbtcdn.com/gb/pdm-provider-img/straight-product-img/20180112/T012727/T0127270174/goods-goods_thumb_220/1516209774488816044.jpg",
        price : 359.87,

    },
    {
        name : "Bohemian National Wind Earrings",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20181126/T020198/T0201980097/goods_thumb_220-v1/110159-4820.jpg",
        price : 8.62,

    },
    {
        name : "Europe and The United States New Diamond Geometric Acrylic Long Earrings",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20180504/T014044/T0140440199/goods_thumb_220-v1/215025-4508.jpg",
        price : 7.38,

    },
     //Quartz M & F
     {
        name : "CURREN 8225 Casual Men Quartz Watch",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/06/29/goods_thumb_220-v4/20180629100638_50703.jpg",
        price : 25.88,

    },
    {
        name : "CURREN 8250 Casual Men Quartz Watch",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/01/28/goods_thumb_220-v1/20190128181926_89260.jpg",
        price : 26.88,

    },
    {
        name : "Casual Quartz Analog Silicone Stainless Steel Dial Sports WristWatch",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20171228/T011809/T0118090177/goods_thumb_220-v1/171136-7432.jpg",
        price : 6.50,

    },
    {
        name : "Female Cute Kitten Wrist Watch Quartz Watch",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20181018/T030482/T0304820099/goods_thumb_220-v1/150511-9476.jpg",
        price : 10.83,

    },
    {
        name : "CURREN 8291 Men Quartz Watch Waterproof",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/07/16/goods_thumb_220-v1/20190716181737_92988.jpg",
        price : 34.99,

    },
    //MEGIR Watches
    {
        name : "MEGIR Men's Quartz Watch Leather Multi-function Chronograph Calendar Watch",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/2020/12/11/goods_thumb_220-v2/20201211174201_51397.jpg",
        price : 107.99,

    },
    {
        name : "MEGIR Roller Watch Men Fashion Sports Business Leather Quartz Watch",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/2020/12/11/goods_thumb_220-v2/20201211115315_75321.jpg",
        price : 107.99,

    },
    {
        name : "MEGIR 2084 Men's Multi-function Luminous Watch Leather Waterproof Chronograph Sports Quartz Watch",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/2020/12/14/goods_thumb_220-v3/20201214103803_53343.jpg",
        price : 96.99,

    },
    {
        name : "MEGIR 2011G Quartz Watch Multi-function Men Watch Leather Waterproof Sports",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/2020/12/11/goods_thumb_220-v1/20201211115311_98539.jpg",
        price : 83.99,

    },
    {
        name : "MEGIR 2080 Men Watch Quartz Watch Sports Fashion Multi-function Calendar Leather Waterproof",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/2020/12/11/goods_thumb_220-v2/20201211174220_63111.jpg",
        price : 102.99,

    },
    //SKMEI
    {
        name : "SKMEI 1509 Men's Gentleman Ultra-thin Quartz Watch Concise PU Band",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/07/20/goods_thumb_220-v1/20190720175216_61074.jpg",
        price : 22.99,

    },
    {
        name : "SKMEI Quartz Women Simple Fashion Top Brand Luxury Waterproof Wrist Watches",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20181220/T027485/T0274850315/goods_thumb_220-v1/171744-5320.jpg",
        price : 42.65,

    },
    {
        name : "SKMEI 1302 Leisure Multifunctional Sports Electronic Watch",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20180927/goods_thumb_220-v2/2018092718200787321.jpg",
        price : 24.23,

    },
    {
        name : "SKMEI Men's Digital Sports Watch Waterproof Military Stopwatch",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20180808/T019715/T0197150591/goods_thumb_220-v1/195146-1220.jpg",
        price : 15.77,

    },
    {
        name : "SKMEI 1181 Mens Quartz Stainless Steel Strap Waterproof Wrist Watches",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20180717/T027485/T0274850044/goods_thumb_220-v1/204030-3329.jpg",
        price : 55.86,

    },
    //Jewelry

    //MEN
    {
        name : "Titanium Steel Double Herringbone Bracelet",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2017/11/22/goods_thumb_220-v1/20171122090633_28624.jpg",
        price : 12.64,

    },
    {
        name : "Stainless Steel Unique Stylish Men Ring",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2017/12/13/goods_thumb_220-v1/20171213084822_70954.jpg",
        price : 8.99,

    },
    {
        name : "Jewelry Hand Chain Valentine's Day Gift Couple Hand-made Bracelets",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/2020/12/01/goods_thumb_220-v1/20201201115803_88111.jpg",
        price : 3.99,

    },
    {
        name : "Accessories Personality Crown Lion Domineering Rough Male Ring",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/2020/12/01/goods_thumb_220-v1/20201201160241_61569.jpg",
        price : 3.99,

    },
    {
        name : "Skull Retro Punk Style Men's Ring",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/2020/12/01/goods_thumb_220-v1/20201201160244_31493.jpg",
        price : 4.99,

    },
    // WOMEN
    {
        name : "Fashion Diamond Crystal Luxury Ladies Bracelet",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20180908/T010979/T0109790806/goods_thumb_220-v1/095913-2821.jpg",
        price : 332.39,

    },
    {
        name : "European Style Fashion Vintage Black Lace Drop Gem Choker Necklace",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20181107/T034256/T0342560061/goods_thumb_220-v1/153020-9302.jpg",
        price : 412.84,

    },
    {
        name : "Women Girls Diamond Wings Lace Necklace Trendy Jewelry Collar Short Choker",
        img : "https://gloimg.gbtcdn.com/gb/pdm-provider-img/straight-product-img/20180112/T012727/T0127270174/goods-goods_thumb_220/1516209774488816044.jpg",
        price : 359.87,

    },
    {
        name : "Bohemian National Wind Earrings",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20181126/T020198/T0201980097/goods_thumb_220-v1/110159-4820.jpg",
        price : 8.62,

    },
    {
        name : "Europe and The United States New Diamond Geometric Acrylic Long Earrings",
        img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20180504/T014044/T0140440199/goods_thumb_220-v1/215025-4508.jpg",
        price : 7.38,

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