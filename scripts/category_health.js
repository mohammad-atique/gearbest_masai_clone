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
            brand: "Oclean",
            img_url: "https://uidesign.gbtcdn.com/GB/images/others/top_brands/oclean-logo.jpg"
        },
        {
            brand: "SOOCAS",
            img_url: "https://uidesign.gbtcdn.com/GB/images/others/top_brands/SOOCAS.jpg"
        },
        {
            brand: "Elite99",
            img_url: "https://uidesign.gbtcdn.com/GB/images/others/top_brands/Elite99-logo.jpg"
        },
        {
            brand: "FOCALLURE",
            img_url: "https://uidesign.gbtcdn.com/GB/images/others/top_brands/FOCALLURE-logo.jpg"
        },
        {
            brand: "Mijia",
            img_url: "https://pdm.gw-ec.com/uploads/pdm-brand-logo/2019/03/05/20190307102445_5c8080ed0ecb3.jpg"
        }
    
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
//OCLEAN
{name: "Oclean SE Electrical Toothbrush",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2017/12/08/goods_thumb_220-v1/20171208184306_19435.jpg",
price: 57.70  
}, 

{name: "Oclean One Rechargeable Sonic Electrical Toothbrush",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2017/10/26/goods_thumb_220-v1/20171026151645_53946.jpg",
price: 85.61  
},

{name: "Oclean Electric Toothbrush Wall-mounted Holder for Oclean One / SE",
img: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/11/21/goods-goods_thumb_220/1511239809426549626.jpg",
price: 85.61  
},

{name: "Oclean W1 Smart Aerodynamics Water Flosser Portable Dental Oral Irrigator 1200mAh Battery APP Scheme 3 Cleaning Modes",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/08/10/goods_thumb_220-v2/20200810101602_42210.jpg",
price: 96.26 
},

{name: "Oclean X Pro Smart Sonic Electric Toothbrush Touch Screen",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Distribution/2020/04/22/goods_thumb_220-v4/20200422105655_25501.jpg",
price: 76.23 
},

//SOOCAS

{name: "SOOCAS H3 Professional Electric Hair Dryer",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Distribution/2018/09/27/goods_thumb_220-v16/20180927142940_34187.jpg",
price: 75.66
},

{name: "SOOCAS H3 Negative Ions Professional Electric Hair Dryer",
img: "https://gloimg.gbtcdn.com/soa/gb/thumb-extend/pdm-product-pic/Electronic/2018/05/22/source-img/20180522111211_94556.jpg",
price: 93.72  
},

{name: "SOOCAS H3S Negative Ion Quick Dry Hair Dryer",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/09/01/goods_thumb_220-v1/20180901175358_96310.jpg",
price: 114.17 
},

{name: "SOOCAS H3S Massive Negative Ions Hair Dryer Vincent Van Gogh Ver",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/12/19/goods_thumb_220-v2/20191219171531_5dfb3fb399510.jpg",
price: 102.73  
},

{name: "SOOCAS X3U Adult Rechargeable Sonic Electric Toothbrush Van Gogh Ver",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/12/27/goods_thumb_220-v2/20191227144354_5e05a82a15c65.jpg",
price: 84.26  
},

//Elite99

{name: "Elite99 6Colors Polishing UV LED Soak-off Gel Nail Set",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Other/2019/02/16/goods_thumb_220-v1/20190216101042_42228.jpg",
price: 14.30 
},

{name: "Elite99 6Pcs UV LED Soak Off Gel Nail Polish Kit",
img: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Clothing/2017/08/22/goods-goods_thumb_220/20170822175525_92477.jpg",
price:  14.30
},

{name: "Elite99 LED UV 7ml Base Coat Nail Polish Primer Varnish",
img: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Distribution/2017/08/10/goods-goods_thumb_220/20170810163446_67739.jpg",
price: 6.49 
},

{name: "Elite99 One Step Gel Polish 3 In 1 UV LED No Need Base Top Coat 10ml",
img: "https://gloimg.gbtcdn.com/gb/2015/201508/goods-goods_thumb_220/1439746190262-P-2959428.jpg",
price: 6.25  
},

{name: "Elite99 6Pcs Polish UV LED Soak Off Gel Nail Gift Set",
img: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Clothing/2017/08/22/goods-goods_thumb_220/20170822175525_49597.jpg",
price: 13.48
},

//FOCALLURE

{name: "FOCALLURE Professional Loose Gliter Eyeshadow Powder",
img: "https://gloimg.gbtcdn.com/soa/gb/thumb-extend/pdm-product-pic/Clothing/2017/11/24/source-img/20171124160200_92935.jpg",
price:  7.06
},

{name: "FOCALLURE Duo Bronzer Highlighter 2 Colors",
img: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2016/01/28/goods-goods_thumb_220/20160128155538_93788.jpg",
price: 9.39 
},

{name: "6ml FOCALLURE Fashionable Charming Color Long Lasting Manicure Soak-off Nail Glue",
img: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Distribution/2016/04/11/goods-goods_thumb_220/20160411181022_93638.jpg",
price: 6.98 
},

{name: "FOCALLURE Professional Perfect Coverage Smooth Liquid Concealer",
img: "https://gloimg.gbtcdn.com/soa/gb/thumb-extend/pdm-product-pic/Clothing/2017/12/15/source-img/20171215101638_89313.jpg",
price: 6.47 
},

{name: "FOCALLURE Professional Long Lasting Full Coverage Concealer",
img: "https://gloimg.gbtcdn.com/soa/gb/thumb-extend/pdm-product-pic/Clothing/2017/12/23/source-img/20171223093245_89466.jpg",
price:  5.87
},

//MIJIA

{name: "Mijia MES603 USB Rechargeable Sonic Electric Toothbrush T100",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/09/19/goods_thumb_220-v1/20190919104808_69798.jpg",
price:  13.48
},

{name: "Mijia MJZJD002QW Nail Clippers 5pcs High Quality Stainless Steel Portable Set",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/07/27/goods_thumb_220-v2/20200727114758_5f1e4e6e75f1e.jpg",
price:19.05  
},

{name: "Mijia MBS302 Universal Replacement Toothbrush Head 3PCS for Mijia Electric Toothbrush T100",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/11/07/goods_thumb_220-v1/20191107183011_5dc3f2333c37d.jpg",
price:  7.22
},

{name: "Mijia Sonic Electric Toothbrush",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/07/04/goods_thumb_220-v1/20180704103219_63529.jpg",
price:  61.18
},

{name: "Mijia Toothbrush General Brush Head 3pcs",
img: "https://gloimg.gbtcdn.com/soa/gb/thumb-extend/pdm-product-pic/Electronic/2018/03/30/source-img/20180330091638_18545.jpg",
price:  63.35
},
//OCLEAN
{name: "Oclean SE Electrical Toothbrush",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2017/12/08/goods_thumb_220-v1/20171208184306_19435.jpg",
price: 57.70  
}, 

{name: "Oclean One Rechargeable Sonic Electrical Toothbrush",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2017/10/26/goods_thumb_220-v1/20171026151645_53946.jpg",
price: 85.61  
},

{name: "Oclean Electric Toothbrush Wall-mounted Holder for Oclean One / SE",
img: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2017/11/21/goods-goods_thumb_220/1511239809426549626.jpg",
price: 85.61  
},

{name: "Oclean W1 Smart Aerodynamics Water Flosser Portable Dental Oral Irrigator 1200mAh Battery APP Scheme 3 Cleaning Modes",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/08/10/goods_thumb_220-v2/20200810101602_42210.jpg",
price: 96.26 
},

{name: "Oclean X Pro Smart Sonic Electric Toothbrush Touch Screen",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Distribution/2020/04/22/goods_thumb_220-v4/20200422105655_25501.jpg",
price: 76.23 
},

//SOOCAS

{name: "SOOCAS H3 Professional Electric Hair Dryer",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Distribution/2018/09/27/goods_thumb_220-v16/20180927142940_34187.jpg",
price: 75.66
},

{name: "SOOCAS H3 Negative Ions Professional Electric Hair Dryer",
img: "https://gloimg.gbtcdn.com/soa/gb/thumb-extend/pdm-product-pic/Electronic/2018/05/22/source-img/20180522111211_94556.jpg",
price: 93.72  
},

{name: "SOOCAS H3S Negative Ion Quick Dry Hair Dryer",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/09/01/goods_thumb_220-v1/20180901175358_96310.jpg",
price: 114.17 
},

{name: "SOOCAS H3S Massive Negative Ions Hair Dryer Vincent Van Gogh Ver",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/12/19/goods_thumb_220-v2/20191219171531_5dfb3fb399510.jpg",
price: 102.73  
},

{name: "SOOCAS X3U Adult Rechargeable Sonic Electric Toothbrush Van Gogh Ver",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/12/27/goods_thumb_220-v2/20191227144354_5e05a82a15c65.jpg",
price: 84.26  
},

//Elite99

{name: "Elite99 6Colors Polishing UV LED Soak-off Gel Nail Set",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Other/2019/02/16/goods_thumb_220-v1/20190216101042_42228.jpg",
price: 14.30 
},

{name: "Elite99 6Pcs UV LED Soak Off Gel Nail Polish Kit",
img: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Clothing/2017/08/22/goods-goods_thumb_220/20170822175525_92477.jpg",
price:  14.30
},

{name: "Elite99 LED UV 7ml Base Coat Nail Polish Primer Varnish",
img: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Distribution/2017/08/10/goods-goods_thumb_220/20170810163446_67739.jpg",
price: 6.49 
},

{name: "Elite99 One Step Gel Polish 3 In 1 UV LED No Need Base Top Coat 10ml",
img: "https://gloimg.gbtcdn.com/gb/2015/201508/goods-goods_thumb_220/1439746190262-P-2959428.jpg",
price: 6.25  
},

{name: "Elite99 6Pcs Polish UV LED Soak Off Gel Nail Gift Set",
img: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Clothing/2017/08/22/goods-goods_thumb_220/20170822175525_49597.jpg",
price: 13.48
},

//FOCALLURE

{name: "Professional Loose Gliter Eyeshadow Powder",
img: "https://gloimg.gbtcdn.com/soa/gb/thumb-extend/pdm-product-pic/Clothing/2017/11/24/source-img/20171124160200_92935.jpg",
price:  7.06
},

{name: "FOCALLURE Duo Bronzer Highlighter 2 Colors",
img: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Electronic/2016/01/28/goods-goods_thumb_220/20160128155538_93788.jpg",
price: 9.39 
},

{name: "6ml FOCALLURE Fashionable Charming Color Long Lasting Manicure Soak-off Nail Glue",
img: "https://gloimg.gbtcdn.com/gb/pdm-product-pic/Distribution/2016/04/11/goods-goods_thumb_220/20160411181022_93638.jpg",
price: 6.98 
},

{name: "Professional Perfect Coverage Smooth Liquid Concealer",
img: "https://gloimg.gbtcdn.com/soa/gb/thumb-extend/pdm-product-pic/Clothing/2017/12/15/source-img/20171215101638_89313.jpg",
price: 6.47 
},

{name: "Professional Long Lasting Full Coverage Concealer",
img: "https://gloimg.gbtcdn.com/soa/gb/thumb-extend/pdm-product-pic/Clothing/2017/12/23/source-img/20171223093245_89466.jpg",
price:  5.87
},

//MIJIA

{name: "MIJIA MES603 USB Rechargeable Sonic Electric Toothbrush T100",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/09/19/goods_thumb_220-v1/20190919104808_69798.jpg",
price:  13.48
},

{name: "Mijia MJZJD002QW Nail Clippers 5pcs High Quality Stainless Steel Portable Set",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/07/27/goods_thumb_220-v2/20200727114758_5f1e4e6e75f1e.jpg",
price:19.05  
},

{name: "Mijia MBS302 Universal Replacement Toothbrush Head 3PCS for Mijia Electric Toothbrush T100",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/11/07/goods_thumb_220-v1/20191107183011_5dc3f2333c37d.jpg",
price:  7.22
},

{name: "Mijia Sonic Electric Toothbrush",
img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/07/04/goods_thumb_220-v1/20180704103219_63529.jpg",
price:  61.18
},

{name: "Mijia Toothbrush General Brush Head 3pcs",
img: "https://gloimg.gbtcdn.com/soa/gb/thumb-extend/pdm-product-pic/Electronic/2018/03/30/source-img/20180330091638_18545.jpg",
price:  63.35
}
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