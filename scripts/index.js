document.querySelector(".gearBestLogo").addEventListener('mouseover', function() {
    event.target.style.cursor = "pointer";
})

document.querySelector(".gearBestLogo").addEventListener('click', function() {
  window.location.href = "index.html"
})

document.querySelector(".nav_cart").addEventListener("click", function() {
      window.location.href = "cart.html";
  })

  // document.querySelector(".nav_sign_in").addEventListener("click", function() {
  //     window.location.href = "login.html";
  // })

  document.querySelector(".nav_favorites").addEventListener("click", function() {
      window.location.href = "favorite.html";
  })


  var registeredUsers = JSON.parse(localStorage.getItem("userDataBase")) || [];
let [isSignedIn, indexOfUserSignedIn] = JSON.parse(localStorage.getItem("loggedInUser")) || [false, -1];
let signedInUserEmail = null;
let userCart = null;
let userFavorites = null;

//If user is signed in we allocate user data to cart, favorites and email.
if(isSignedIn) {
signedInUserEmail = JSON.parse(localStorage.getItem("userDataBase"))[indexOfUserSignedIn].useremail;
userCart = JSON.parse(localStorage.getItem("userDataBase"))[indexOfUserSignedIn].userCart;
userFavorites = JSON.parse(localStorage.getItem("userDataBase"))[indexOfUserSignedIn].userFavorites;
}

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
  } else {
    document.querySelector(".nav_sign_in").addEventListener("mouseover", function() {
          let sign_in_popup = document.createElement('div');
          sign_in_popup.setAttribute('class', "sign_in_popup");

          let welcome_text = document.createElement("p");
          welcome_text.textContent = "Welcome to Gearbest"

          let sign_in_button = document.createElement('div');
          sign_in_button.setAttribute('class', "sign_in_popup_main_button");
          sign_in_button.textContent = "Sign In";
          sign_in_button.addEventListener('click', function() {
            window.location.href = "login.html";
          })

          if(document.querySelectorAll(".sign_in_popup").length > 0) {
              return;
          }

          let text_register = document.createElement("p");
          text_register.textContent = "Register on Gearbest: Earn 10 points";

          let sign_up_button = document.createElement('div');
          sign_up_button.setAttribute('class', "popup_register");
          sign_up_button.textContent = "Register";
          sign_up_button.addEventListener('click', function() {
            window.location.href = "register.html";
          })

          sign_in_popup.append(welcome_text, sign_in_button, text_register, sign_up_button);
          document.querySelector(".nav_sign_in").append(sign_in_popup);
  }
    )}





let sub_category_photos = [
  "https://uidesign.gbtcdn.com/GB/image/7128/en-230x420.jpg?imbypass=true", "https://uidesign.gbtcdn.com/GB/image/6074/230x420.jpg?imbypass=true", "https://uidesign.gbtcdn.com/GB/image/6699/230x420_en.jpg", "https://uidesign.gbtcdn.com/GB/image/6592/en-230x420.jpg", "https://uidesign.gbtcdn.com/GB/image/6507/en-230x420.jpg", "https://uidesign.gbtcdn.com/GB/image/7049/en-230x420.jpg", "https://uidesign.gbtcdn.com/GB/image/3772/en_230x420.jpg?imbypass=true", "https://uidesign.gbtcdn.com/GB/image/5569/230x420.jpg?imbypass=true", "https://uidesign.gbtcdn.com/GB/image/5805/230x420.jpg", "https://uidesign.gbtcdn.com/GB/image/5831/en_230x420.jpg", "https://uidesign.gbtcdn.com/GB/image/5779/en.jpg?imbypass=true", "https://uidesign.gbtcdn.com/GB/image/5189/en_230x420.jpg?imbypass=true", "https://uidesign.gbtcdn.com/GB/image/5788/230x420.jpg", "https://uidesign.gbtcdn.com/GB/image/4048/en_230x420-2.jpg?imbypass=true"
]

let sub_category_array = [
[
[
"Smart Electronics",
"Smart Watches",
"Smart Watch Phone",
"Smart Wristband",
"Smart Watch Accessories",
"Sport Watch",
"Smart Health Watch"],

["Security & Protection",
"Access Control",
"Alarm Systems",
"Door Intercom",
"IP Cameras",
"Smart Doorbells",
"Surveillance Camera System"],

["Headphones & Earphones",
"Bluetooth Headphones",
"Earbud Headphones",
"Gaming Headphones",
"On-Ear & Over-Ear Headphones",
"Sports & Fitness Headphones",
"Headphone Accessories"],

["Xiaomi Ecosystem Products",
"Xiaomi",
"Amazfit",
"Aqara",
"Haylou",
"QCY"],

["Hot Brands",
"Kospet",
"Lenovo",
"CORN",
"KZ",
"Ticwatch",
"Gocomma"],

["Other Consumer Electronics",
"Smart Home",
"Action Cameras & DV Accessories",
"Gimbal",
"Video Game",
"Speakers",
"Microphone"]
],

[

[
"3D Printer & Supplies",
"3D Printers, 3D Printer Kits",
"3D Printer Filament",
"3D Scanners",
"3D Printer Parts",
"3D Printing Pen",
"3D Printer Module Board"],

["Power Tools",
"Measurement & Analysis",
"Arduino & SCM Supplies",
"Electric Screwdriver",
"Power Drill",
"Glue Gun"],

["Laser Engraver & CNC",
"Laser Engraving Machine",
"Laser Module",
"Laser Accessories",
"Professional Tools",
"Laser Rangefinder"],

["Electrical Equipments & Supplies",
"Drill",
"Magnifiers",
"Telescope",
"Cutting Tools"],

["Testers & Detectors",
"Microscopes & Endoscope",
"Electronic Distance Meter",
"Multimeters & Fitting",
"Soldering Supplies",
"Ultrasonic Cleaner",
"Measuring ruler"],

["Hot Brands",
"Creality",
"Alfawise",
"Artillery",
"Ortur",
"Anycubic",
"QIDI"
]
],
[
["TOP Brands",
"Xiaomi",
"Oneplus",
"Samsung",
"Huawei",
"Asus",
"Oppo"],

["HOT Brands",
"Lenovo",
"DOOGEE",
"Cubot",
"Ulefone",
"Oukitel",
"Elephone"],

["Cell Phone Accessories",
"Cases & Covers",
"Screen Protectors",
"Chargers & Power Adapters",
"Cables",
"Stands & Holders",
"Airpods Accessories"],

["Smartphones",
"Waterproof phones",
"Dual sim phones",
"5G phones",
"Featured phones",
"Refurbished phones"],

["Main Features",
"6GB RAM Mobile",
"8GB RAM Mobile",
"NFC Phones",
"Full screen Phones",
"Snapdragon 855"],

["Hot Cases & Covers",
"Cases For Xiaomi",
"Cases For OnePlus",
"Cases For Apple",
"Cases For Samsung",
"Cases For Huawei",
"Cases For ASUS"]
],

[
["Vacuums & Floor Care",
"Vacuum Cleaners",
"Upright Vacuums",
"Steam Cleaners",
"Robotic Window Cleaner",
"Robotic Vacuum Accessories"],

["Air Conditioning Appliances",
"Air Purifiers",
"Humidifiers",
"Dehumidifiers",
"Air Cooler Fan",
"Electric Heaters"],

[
"Kitchen Appliances",
"Electric Kettles",
"Cooker & Steamer",
"Blender & Mixer",
"Vacuum Food Sealers",
"Cooking Appliances",
"Coffee Makers"],

["Hot Brands",
"Alfawise",
"360",
"Roborock",
"VIOMI",
"Mijia"],

["Smart Home System",
"Power Strips",
"Smart Plug",
"Doorbells",
"Smart Remote Control"],

["Household Appliances",
"Mosquito Killer Lamps",
"Soap Dispensers",
"Laundry Appliances",
"Home Appliances Accessories"]
],

[
["Scooters and Wheels",
"Electric scooters",
"Kick Scooter",
"Skiing & Snowboarding",
"Scooters Accessories",
"Roller skating",
"Balancing Scooter"],

["Cycling",
"Electric Bikes",
"Bike Lights",
"Bike Tools",
"Bike Computers",
"Bike Helmets",
"Bike Accessories"],

["Hot Brands",
"WalkingPad",
"GUB",
"ROCKBROS",
"ENGWE",
"HIMO",
"SAMEBIKE"],

["Exercise",
"Featured Sports Products",
"Large Fitness Equipment",
"Fitness & Body Building",
"Yoga Accessories",
"Sports Protective Gear",
"Boxing"],

["Fishing & Hunting",
"Fishing Baits and Hooks",
"Fishing Lines",
"Fishing Reels and Rods",
"Fishing Tools and Accessories",
"Gun Scopes and Sights",
"Other Accessories"],

["Camping / Hiking",
"Binoculars and Telescopes",
"Survival",
"Carabiner",
"Camp Kitchen",
"Outdoor Lanterns",
"Compass"]
],
[
["Computers & Tablets",
"Laptops",
"Tablet PCs",
"MINI PC",
"All-In-One Computers",
"Tablet Accessories",
"Laptop Accessories"],

["Computer Peripherals",
"Memory Cards",
"Mouse",
"Air Mouse",
"Keyboards",
"Graphics Tablets",
"Network Devices"],

["Computer Components",
"HDD & SSD",
"HDD Enclosure",
"CPU Cooler",
"Motherboards",
"Graphics & Video Cards",
"Monitors"],

["TV Box",
"Beelink",
"Mecool",
"Magicsee",
"Tanix",
"A95X",
"Alfawise"],

["Office Supply",
"Projectors",
"Projector Accessories",
"Pen & Pencils",
"Printers",
"Desk Organizers",
"Notebooks & Pads"],

["Hot Brands",
"Teclast",
"Chuwi",
"Motospeed",
"KUU",
"Fengmi",
"MIJIA"]
],

[["RC Drones & Vehicles",
"RC Quadcopters",
"Brushless FPV Racer",
"RC Cars",
"RC Airplanes",
"RC Helicopters",
"RC Boats"],

["RC Parts",
"Multi Rotor Parts",
"FPV System",
"RC Quadcopters Parts",
"RC Cars Parts",
"RC Airplanes Parts",
"RC Helicopters Parts"],

["Puzzle & Educational",
"Block Toys",
"Science & Discovery Toys",
"Model & Building Toys",
"Doll House",
"Logic & Puzzle Toys",
"Other Educational Toys"],

["Novelty & Gag Toys",
"Novelty Toys",
"Classic Toys",
"Magic Tricks",
"Movies & TV Action Figures",
"Key Chains",
"Stuffed Cartoon Toys"],

["Brands",
"FIMI",
"Hubsan",
"JJRC",
"Emax",
"Populele",
"CADA"],

["More to love",
"Guitar",
"Guitar Parts",
"Keyboard Instruments",
"Baby Stroller",
"Other Daily Care",
"Baby Safety"]
],

[
[
"Smart Electronics",
"Smart Watches",
"Smart Watch Phone",
"Smart Wristband",
"Smart Watch Accessories",
"Sport Watch",
"Smart Health Watch"],

["Security & Protection",
"Access Control",
"Alarm Systems",
"Door Intercom",
"IP Cameras",
"Smart Doorbells",
"Surveillance Camera System"],

["Headphones & Earphones",
"Bluetooth Headphones",
"Earbud Headphones",
"Gaming Headphones",
"On-Ear & Over-Ear Headphones",
"Sports & Fitness Headphones",
"Headphone Accessories"],

["Xiaomi Ecosystem Products",
"Xiaomi",
"Amazfit",
"Aqara",
"Haylou",
"QCY"],

["Hot Brands",
"Kospet",
"Lenovo",
"CORN",
"KZ",
"Ticwatch",
"Gocomma"],

["Other Consumer Electronics",
"Smart Home",
"Action Cameras & DV Accessories",
"Gimbal",
"Video Game",
"Speakers",
"Microphone"]
],

[

[
"3D Printer & Supplies",
"3D Printers, 3D Printer Kits",
"3D Printer Filament",
"3D Scanners",
"3D Printer Parts",
"3D Printing Pen",
"3D Printer Module Board"],

["Power Tools",
"Measurement & Analysis",
"Arduino & SCM Supplies",
"Electric Screwdriver",
"Power Drill",
"Glue Gun"],

["Laser Engraver & CNC",
"Laser Engraving Machine",
"Laser Module",
"Laser Accessories",
"Professional Tools",
"Laser Rangefinder"],

["Electrical Equipments & Supplies",
"Drill",
"Magnifiers",
"Telescope",
"Cutting Tools"],

["Testers & Detectors",
"Microscopes & Endoscope",
"Electronic Distance Meter",
"Multimeters & Fitting",
"Soldering Supplies",
"Ultrasonic Cleaner",
"Measuring ruler"],

["Hot Brands",
"Creality",
"Alfawise",
"Artillery",
"Ortur",
"Anycubic",
"QIDI"
]
],
[
["TOP Brands",
"Xiaomi",
"Oneplus",
"Samsung",
"Huawei",
"Asus",
"Oppo"],

["HOT Brands",
"Lenovo",
"DOOGEE",
"Cubot",
"Ulefone",
"Oukitel",
"Elephone"],

["Cell Phone Accessories",
"Cases & Covers",
"Screen Protectors",
"Chargers & Power Adapters",
"Cables",
"Stands & Holders",
"Airpods Accessories"],

["Smartphones",
"Waterproof phones",
"Dual sim phones",
"5G phones",
"Featured phones",
"Refurbished phones"],

["Main Features",
"6GB RAM Mobile",
"8GB RAM Mobile",
"NFC Phones",
"Full screen Phones",
"Snapdragon 855"],

["Hot Cases & Covers",
"Cases For Xiaomi",
"Cases For OnePlus",
"Cases For Apple",
"Cases For Samsung",
"Cases For Huawei",
"Cases For ASUS"]
],

[
["Vacuums & Floor Care",
"Vacuum Cleaners",
"Upright Vacuums",
"Steam Cleaners",
"Robotic Window Cleaner",
"Robotic Vacuum Accessories"],

["Air Conditioning Appliances",
"Air Purifiers",
"Humidifiers",
"Dehumidifiers",
"Air Cooler Fan",
"Electric Heaters"],

[
"Kitchen Appliances",
"Electric Kettles",
"Cooker & Steamer",
"Blender & Mixer",
"Vacuum Food Sealers",
"Cooking Appliances",
"Coffee Makers"],

["Hot Brands",
"Alfawise",
"360",
"Roborock",
"VIOMI",
"Mijia"],

["Smart Home System",
"Power Strips",
"Smart Plug",
"Doorbells",
"Smart Remote Control"],

["Household Appliances",
"Mosquito Killer Lamps",
"Soap Dispensers",
"Laundry Appliances",
"Home Appliances Accessories"]
],

[
["Scooters and Wheels",
"Electric scooters",
"Kick Scooter",
"Skiing & Snowboarding",
"Scooters Accessories",
"Roller skating",
"Balancing Scooter"],

["Cycling",
"Electric Bikes",
"Bike Lights",
"Bike Tools",
"Bike Computers",
"Bike Helmets",
"Bike Accessories"],

["Hot Brands",
"WalkingPad",
"GUB",
"ROCKBROS",
"ENGWE",
"HIMO",
"SAMEBIKE"],

["Exercise",
"Featured Sports Products",
"Large Fitness Equipment",
"Fitness & Body Building",
"Yoga Accessories",
"Sports Protective Gear",
"Boxing"],

["Fishing & Hunting",
"Fishing Baits and Hooks",
"Fishing Lines",
"Fishing Reels and Rods",
"Fishing Tools and Accessories",
"Gun Scopes and Sights",
"Other Accessories"],

["Camping / Hiking",
"Binoculars and Telescopes",
"Survival",
"Carabiner",
"Camp Kitchen",
"Outdoor Lanterns",
"Compass"]
],
[
["Computers & Tablets",
"Laptops",
"Tablet PCs",
"MINI PC",
"All-In-One Computers",
"Tablet Accessories",
"Laptop Accessories"],

["Computer Peripherals",
"Memory Cards",
"Mouse",
"Air Mouse",
"Keyboards",
"Graphics Tablets",
"Network Devices"],

["Computer Components",
"HDD & SSD",
"HDD Enclosure",
"CPU Cooler",
"Motherboards",
"Graphics & Video Cards",
"Monitors"],

["TV Box",
"Beelink",
"Mecool",
"Magicsee",
"Tanix",
"A95X",
"Alfawise"],

["Office Supply",
"Projectors",
"Projector Accessories",
"Pen & Pencils",
"Printers",
"Desk Organizers",
"Notebooks & Pads"],

["Hot Brands",
"Teclast",
"Chuwi",
"Motospeed",
"KUU",
"Fengmi",
"MIJIA"]
],

[["RC Drones & Vehicles",
"RC Quadcopters",
"Brushless FPV Racer",
"RC Cars",
"RC Airplanes",
"RC Helicopters",
"RC Boats"],

["RC Parts",
"Multi Rotor Parts",
"FPV System",
"RC Quadcopters Parts",
"RC Cars Parts",
"RC Airplanes Parts",
"RC Helicopters Parts"],

["Puzzle & Educational",
"Block Toys",
"Science & Discovery Toys",
"Model & Building Toys",
"Doll House",
"Logic & Puzzle Toys",
"Other Educational Toys"],

["Novelty & Gag Toys",
"Novelty Toys",
"Classic Toys",
"Magic Tricks",
"Movies & TV Action Figures",
"Key Chains",
"Stuffed Cartoon Toys"],

["Brands",
"FIMI",
"Hubsan",
"JJRC",
"Emax",
"Populele",
"CADA"],

["More to love",
"Guitar",
"Guitar Parts",
"Keyboard Instruments",
"Baby Stroller",
"Other Daily Care",
"Baby Safety"]
]
]



$('.new_items').slick({
infinite: true,
slidesToShow: 5,
slidesToScroll: 5,
variableWidth: true,
arrows: true,
autoplay: true
});

$('.animated_part_big').slick({
infinite: true,
speed: 500,
fade: true,
cssEase: 'linear',
dots: true,
autoplay: true,
});

//ARRAY AND PHOTO FOR SUB_CATEGORY_POPUP
//THIS IS A WORKAROUND > I am saving the content i.e. UL and the image on the sub category page on every instance of hover on a category. On each hover the content stored is changed and printed on the hidden box.

let sub_category_temp_array = [];
let sub_category_temp_image = "";

for(let i = 0; i < document.querySelectorAll(".category_selector ul li").length; i++) {
//appending the photo
document.querySelectorAll(".category_selector ul li")[i].addEventListener('mouseover', function() {
  let img = document.createElement("img");
img.setAttribute("src", sub_category_photos[i]);
document.querySelector('.sub_category_image').append(img);
document.querySelector('.category_hover_pop_up').classList.remove("hidden")
sub_category_temp_array = sub_category_array[i];
sub_category_temp_image = sub_category_photos[i];
  
  for(let m = 0; m < 6; m++) {
    let currentBox = document.createElement("div");
    currentBox.setAttribute("class", "sub_category_individual_list");

    let ul = document.createElement("ul");

    for(let j = 0; j < sub_category_array[i][m].length; j++) {
      let li = document.createElement("li");
      li.textContent = sub_category_array[i][m][j];
      ul.append(li);
    }
    currentBox.append(ul);
    document.querySelector(".sub_category_list_items").append(currentBox);
    
  }
})

//EMPTIER FUNCTION
document.querySelectorAll(".category_selector ul li")[i].addEventListener('mouseleave', function() {
  document.querySelector('.sub_category_image').innerHTML = "";
  document.querySelector(".sub_category_list_items").innerHTML = "";
document.querySelector('.category_hover_pop_up').classList.add("hidden");
})
}

//PART 2

document.querySelector(".category_hover_pop_up").addEventListener('mouseover', function() {
if(document.querySelectorAll(".sub_category_individual_list").length) {
  return console.log("ADD NO MORE");
}
// console.log(document.querySelectorAll(".sub_category_image").length)
let img = document.createElement("img");
img.setAttribute("src", sub_category_temp_image);
document.querySelector('.sub_category_image').append(img);



for(let m = 0; m < 6; m++) {
    let currentBox = document.createElement("div");
    currentBox.setAttribute("class", "sub_category_individual_list");

    let ul = document.createElement("ul");

    for(let j = 0; j < sub_category_temp_array[m].length; j++) {
      let li = document.createElement("li");
      li.textContent = sub_category_temp_array[m][j];
      ul.append(li);
    }
    currentBox.append(ul);
    document.querySelector(".sub_category_list_items").append(currentBox);
  }
document.querySelector('.category_hover_pop_up').classList.remove("hidden");
})

document.querySelector(".category_hover_pop_up").addEventListener('mouseleave', function() {
document.querySelector(".sub_category_list_items").innerHTML = "";
document.querySelector('.sub_category_image').innerHTML = "";
document.querySelector('.category_hover_pop_up').classList.add("hidden");
})


//for NAV

document.querySelector(".gearBestLogo").addEventListener("click", function() {
window.location.href = "index.html";
})

//MAPPING DATA ON HOME PAGE
var merged_data_home=[
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
          price : 35.66,
      },
      {
          name : "AILADUN Men's Sport Shoes Breathable Large Size",
          img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/07/24/goods_thumb_220-v2/20190724145430_58592.jpg",
          price : 30.90,
      },
      {
          name : "AILADUN Fly Woven Sneakers Low-top Color-matching Running Shoes",
          img : "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/12/19/goods_thumb_220-v1/20191219091109_88952.jpg",
          price : 30.66,
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
      }, {
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
      price : 19.65,

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
      price : 16.86,

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
      price : 6.39,

  },
  {
      name : "European Style Fashion Vintage Black Lace Drop Gem Choker Necklace",
      img : "https://gloimg.gbtcdn.com/soa/gb/pdm-provider-img/straight-product-img/20181107/T034256/T0342560061/goods_thumb_220-v1/153020-9302.jpg",
      price : 3.84,

  },
  {
      name : "Women Girls Diamond Wings Lace Necklace Trendy Jewelry Collar Short Choker",
      img : "https://gloimg.gbtcdn.com/gb/pdm-provider-img/straight-product-img/20180112/T012727/T0127270174/goods-goods_thumb_220/1516209774488816044.jpg",
      price : 6.87,

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

  }
  ];

displayData(merged_data_home);
  function displayData(merged_data_home) {
      document.querySelector(".mapping_card").innerHTML = "";
      merged_data_home.map(function (data) {
          var dis = document.createElement("div");
          var dis1 = document.createElement("div")
          dis1.setAttribute("id", "picdiv")
          var image = document.createElement("img")
          image.setAttribute("src", data.img);
          image.setAttribute("id", "ip")
          dis1.append(image);
          var dis2 = document.createElement("div")
          dis2.setAttribute("id", "whish")
          var name = document.createElement("p")
          name.textContent = data.name;
          dis2.append(name)
          var dis3 = document.createElement("div")
          dis3.setAttribute("id", "cartdiv")
          var pri = document.createElement("p")
          pri.textContent = "$"+data.price;
          pri.setAttribute("id", "pri")
          var btn = document.createElement("button");
          btn.textContent = "Add To Cart";
          btn.setAttribute("id", "addcart")
          btn.addEventListener("click", function () {
              addToCart(data);
          });
          dis3.append(pri,btn)
          var dis4=document.createElement("div")
          dis4.setAttribute("id","Rating")
          //Ratings
          var Ratings = Math.random()*(5-3.5)+3.5;
          Ratings=parseFloat(Ratings).toFixed(1);
          //Reviews
          var reviews = Math.random()*500;
          reviews = Math.ceil(reviews);
          var Ratings_review=document.createElement("p")
          Ratings_review.setAttribute("class","Ratings_review")
          Ratings_review.textContent=Ratings +" "+ "("+reviews+")";
          
          //Favourite
          var favourite=document.createElement("p")
          favourite.addEventListener("click", function () {
              addToFav(data);
          });
          favourite.setAttribute("class","favourite_btn")
          favourite.textContent="";
          dis4.append(Ratings_review,favourite)
          dis.append(dis1,dis2,dis3,dis4)
          document.querySelector(".mapping_card").append(dis)
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


document.querySelector(".category_selector > ul > li:nth-child(1)").addEventListener("click", function() {
window.location.href = "category_consumer.html";
})

document.querySelector(".category_selector > ul > li:nth-child(2)").addEventListener("click", function() {
window.location.href = "category_industrial.html";
})

document.querySelector(".category_selector > ul > li:nth-child(3)").addEventListener("click", function() {
window.location.href = "category_cellphone.html";
//UPDATE IT
})

document.querySelector(".category_selector > ul > li:nth-child(4)").addEventListener("click", function() {
window.location.href = "category_appliances.html";
})

document.querySelector(".category_selector > ul > li:nth-child(5)").addEventListener("click", function() {
window.location.href = "category_outdoors.html";
})

document.querySelector(".category_selector > ul > li:nth-child(6)").addEventListener("click", function() {
window.location.href = "category_computers.html";
})

document.querySelector(".category_selector > ul > li:nth-child(7)").addEventListener("click", function() {
window.location.href = "category_health.html";
})

document.querySelector(".category_selector > ul > li:nth-child(8)").addEventListener("click", function() {
window.location.href = "category_homeimprovement.html";
})

document.querySelector(".category_selector > ul > li:nth-child(9)").addEventListener("click", function() {
window.location.href = "category_drones.html";
})

document.querySelector(".category_selector > ul > li:nth-child(10)").addEventListener("click", function() {
window.location.href = "category_homegarden.html";
})

document.querySelector(".category_selector > ul > li:nth-child(11)").addEventListener("click", function() {
window.location.href = "category_motor&cars.html";
})

document.querySelector(".category_selector > ul > li:nth-child(12)").addEventListener("click", function() {
window.location.href = "category_mensfashion.html";
})

document.querySelector(".category_selector > ul > li:nth-child(13)").addEventListener("click", function() {
window.location.href = "category_watches&j.html";
})