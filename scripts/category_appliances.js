document.querySelector(".gearBestLogo").addEventListener('mouseover', function() {
    event.target.style.cursor = "pointer";
})

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
          brand: "Huawei",
          img_url: "https://css.gbtcdn.com/imagecache/GB/images/logolist/huawei.png"
      },
      {
          brand: "Alfawise",
          img_url: "https://uidesign.gbtcdn.com/GB/images/index/2018/brand_banner/Alfawise/Alfawise_2.jpg?impolicy=hight"
      },
      {
          brand: "Excelvan",
          img_url: "https://uidesign.gbtcdn.com/GB/images/others/top_brands/Excelvan-326.jpg"
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
          name: "ILIFE NEW A80 Plus Robot Vacuum Cleaner",
          price: 389,
          img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16062/goods_thumb_220-v1/dd15e164d19c.jpg"
      },
      {
          name: "EASINE by ILIFE  Wireless Handheld Vacuum Cleaner",
          price: 152,
          img: "https://gloimg.gbtcdn.com/soa/gb/item/6507287161137004544/16390/goods_thumb_220-v1/b16d56b31f5b.jpg"
      },
      {
          name: "Sweeper Accessories Set for ILIFE",
          price: 8,
          img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/11/23/goods_thumb_220-v1/20201123102753_5fbb1e29d4df9.jpg"
      },
      {
          name: "ILIFE New W400 Floor Washing Robot",
          price: 292,
          img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16062/goods_thumb_220-v1/e9098b6bc791.jpg"
      },
      {
          name: "Sweeper Universal Accessories ",
          price: 20,
          img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/04/16/goods_thumb_220-v1/20190416172320_59578.jpg"
      },
      {
          name: "Portable Air Purifier Xiaomi",
          price: 22,
          img: "https://gloimg.gbtcdn.com/soa/gb/item/6701436345185419264/16393/goods_thumb_220-v1/dc60577cc572.jpg"
      },
      {
          name: "Portable Air Purifier Xiaomi",
          price: 22,
          img: "https://gloimg.gbtcdn.com/soa/gb/item/6701436345185419264/16393/goods_thumb_220-v1/85c3f286b956.jpg"
      },
      {
          name: "Portable Air Purifier Xiaomi",
          price: 22,
          img: "https://gloimg.gbtcdn.com/soa/gb/item/6701436345185419264/16393/goods_thumb_220-v1/c9e345bd5abb.jpg"
      },
      {
          name: "Portable Air Purifier Xiaomi",
          price: 22,
          img: "https://gloimg.gbtcdn.com/soa/gb/item/6701436345185419264/16393/goods_thumb_220-v1/5b0da739f4e8.jpg"
      },
      {
          name: "Xiaomi Mi Electric Water Kettle",
          price: 68,
          img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/06/21/goods_img_big-v1/20180621161648_32741.jpg"
      },
      {
          name: "Xiaomi Mi Mijia Handheld Vacuum Cleaner",
          price: 278,
          img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16146/goods_thumb_220-v3/19f5bd4d1c2a.jpg"
      },
      {
          name: "Mijia USB Rechargeable Sonic Electric Toothbrush",
          price: 13,
          img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/09/19/goods_thumb_220-v1/20190919104808_69798.jpg"
      },
      {
          name: "Mijia Mosquito Repellent Smart Device",
          price: 30,
          img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/06/03/goods_thumb_220-v2/20190603102939_63326.jpg"
      },
      {
          name: "Mijia  Bluetooth 4.2 Household Thermometer",
          price: 9,
          img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/12/12/goods_thumb_220-v14/20191212162917_81231.jpg"
      },
      {
          name: "Mijia Nail Clippers 5pcs Stainless Steel",
          price: 19,
          img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/07/27/goods_thumb_220-v2/20200727114758_5f1e4e6e75f1e.jpg"
      },
      {
          name: "TS Anti-blue-ray Glasses from Mijia",
          price: 28,
          img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2017/11/07/goods_thumb_220-v1/20171107170824_66872.jpg"
      },
      {
          name: "Alfawise Window Cleaner Cleaning Pad",
          price: 10,
          img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Other/2018/03/21/goods_thumb_220-v1/20180321103555_68992.jpg"
      },
      {
          name: "Alfawise Magnetic Stripe for Robot Vvacuum Cleaner",
          price: 13,
          img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/04/08/goods_thumb_220-v1/20200408094053_5e8d2ba50bd68.jpg"
      },
      {
          name: "Alfawise Automatic Smart Robot Vacuum Cleaner",
          price: 289,
          img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/03/13/goods_thumb_220-v2/20190313105120_40681.jpg"
      },
      {
          name: "Alfawise Window Cleaning Robot Vacuum Cleaner",
          price: 198,
          img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Other/2018/07/27/goods_thumb_220-v1/20180727153445_29723.jpg"
      },
      {
          name: "Excelvan Air Dehumidifier",
          price: 47,
          img: "https://gloimg.gbtcdn.com/gb/ebay/2016/201608/20160822/goods-goods_thumb_220/1511491683751600398.jpg"
      },
      {
          name: "Excelvan Electric Food Fruit Dehydrator",
          price: 61,
          img: "https://gloimg.gbtcdn.com/soa/gb/ebay/2016/201609/20160921/goods_thumb_220-v1/1474431690588-P-167494.jpg"
      },
      {
          name: "Excelvan Air Dehumidifier",
          price: 99,
          img: "https://gloimg.gbtcdn.com/soa/gb/ebay/2016/201609/20160921/goods_thumb_220-v1/1474431690588-P-167494.jpg"
      },
      {
          name: "Excelvan 500ml Mini Air Dehumidifier",
          price: 56,
          img: "https://gloimg.gbtcdn.com/soa/gb/ebay/2015/201512/20151204/goods_thumb_220-v1/1449161328222-P-88653.jpg"
      },
      {
          name: "Excelvan Air Dehumidifier UK",
          price: 251,
          img: "https://gloimg.gbtcdn.com/gb/ebay/2016/201610/20161027/goods-goods_thumb_220/1511491454169922943.jpg"
      },
      {
          name: "ILIFE NEW A80 Plus Robot Vacuum Cleaner",
          price: 389,
          img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16062/goods_thumb_220-v1/dd15e164d19c.jpg"
      },
      {
          name: "EASINE by ILIFE  Wireless Handheld Vacuum Cleaner",
          price: 152,
          img: "https://gloimg.gbtcdn.com/soa/gb/item/6507287161137004544/16390/goods_thumb_220-v1/b16d56b31f5b.jpg"
      },
      {
          name: "Sweeper Accessories Set for ILIFE",
          price: 8,
          img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/11/23/goods_thumb_220-v1/20201123102753_5fbb1e29d4df9.jpg"
      },
      {
          name: "ILIFE New W400 Floor Washing Robot",
          price: 292,
          img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16062/goods_thumb_220-v1/e9098b6bc791.jpg"
      },
      {
          name: "Sweeper Universal Accessories ",
          price: 20,
          img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/04/16/goods_thumb_220-v1/20190416172320_59578.jpg"
      },
      {
          name: "Portable Air Purifier Xiaomi",
          price: 22,
          img: "https://gloimg.gbtcdn.com/soa/gb/item/6701436345185419264/16393/goods_thumb_220-v1/dc60577cc572.jpg"
      },
      {
          name: "Portable Air Purifier Xiaomi",
          price: 22,
          img: "https://gloimg.gbtcdn.com/soa/gb/item/6701436345185419264/16393/goods_thumb_220-v1/85c3f286b956.jpg"
      },
      {
          name: "Portable Air Purifier Xiaomi",
          price: 22,
          img: "https://gloimg.gbtcdn.com/soa/gb/item/6701436345185419264/16393/goods_thumb_220-v1/c9e345bd5abb.jpg"
      },
      {
          name: "Portable Air Purifier Xiaomi",
          price: 22,
          img: "https://gloimg.gbtcdn.com/soa/gb/item/6701436345185419264/16393/goods_thumb_220-v1/5b0da739f4e8.jpg"
      },
      {
          name: "Xiaomi Mi Electric Water Kettle",
          price: 68,
          img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2018/06/21/goods_img_big-v1/20180621161648_32741.jpg"
      },
      {
          name: "Xiaomi Mi Mijia Handheld Vacuum Cleaner",
          price: 278,
          img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16146/goods_thumb_220-v3/19f5bd4d1c2a.jpg"
      },
      {
          name: "Mijia USB Rechargeable Sonic Electric Toothbrush",
          price: 13,
          img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/09/19/goods_thumb_220-v1/20190919104808_69798.jpg"
      },
      {
          name: "Mijia Mosquito Repellent Smart Device",
          price: 30,
          img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/06/03/goods_thumb_220-v2/20190603102939_63326.jpg"
      },
      {
          name: "Mijia  Bluetooth 4.2 Household Thermometer",
          price: 9,
          img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/12/12/goods_thumb_220-v14/20191212162917_81231.jpg"
      },
      {
          name: "Mijia Nail Clippers 5pcs Stainless Steel",
          price: 19,
          img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/07/27/goods_thumb_220-v2/20200727114758_5f1e4e6e75f1e.jpg"
      },
      {
          name: "TS Anti-blue-ray Glasses from Mijia",
          price: 28,
          img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2017/11/07/goods_thumb_220-v1/20171107170824_66872.jpg"
      },
      {
          name: "Alfawise Window Cleaner Cleaning Pad",
          price: 10,
          img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Other/2018/03/21/goods_thumb_220-v1/20180321103555_68992.jpg"
      },
      {
          name: "Alfawise Magnetic Stripe for Robot Vvacuum Cleaner",
          price: 13,
          img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/04/08/goods_thumb_220-v1/20200408094053_5e8d2ba50bd68.jpg"
      },
      {
          name: "Alfawise Automatic Smart Robot Vacuum Cleaner",
          price: 289,
          img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/03/13/goods_thumb_220-v2/20190313105120_40681.jpg"
      },
      {
          name: "Alfawise Window Cleaning Robot Vacuum Cleaner",
          price: 198,
          img: "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Other/2018/07/27/goods_thumb_220-v1/20180727153445_29723.jpg"
      },
      {
          name: "Excelvan Air Dehumidifier",
          price: 47,
          img: "https://gloimg.gbtcdn.com/gb/ebay/2016/201608/20160822/goods-goods_thumb_220/1511491683751600398.jpg"
      },
      {
          name: "Excelvan Electric Food Fruit Dehydrator",
          price: 61,
          img: "https://gloimg.gbtcdn.com/soa/gb/ebay/2016/201609/20160921/goods_thumb_220-v1/1474431690588-P-167494.jpg"
      },
      {
          name: "Excelvan Air Dehumidifier",
          price: 99,
          img: "https://gloimg.gbtcdn.com/soa/gb/ebay/2016/201609/20160921/goods_thumb_220-v1/1474431690588-P-167494.jpg"
      },
      {
          name: "Excelvan 500ml Mini Air Dehumidifier",
          price: 56,
          img: "https://gloimg.gbtcdn.com/soa/gb/ebay/2015/201512/20151204/goods_thumb_220-v1/1449161328222-P-88653.jpg"
      },
      {
          name: "Excelvan Air Dehumidifier UK",
          price: 251,
          img: "https://gloimg.gbtcdn.com/gb/ebay/2016/201610/20161027/goods-goods_thumb_220/1511491454169922943.jpg"
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