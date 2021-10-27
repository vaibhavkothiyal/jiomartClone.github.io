
    // ---------------------"Navbar JS" starts here----------------------- 

    function goTOsignIn(){
        window.location.href = "signIn.html";
    }
    function goTocart(){
        window.location.href ="cart.html";
    }
    function refresh(){
        window.location.href="home.html";
    }



    // ---------------------"Navbar Catagory JS" starts here----------------------- 
    function navCatagry() {
        let navCatagryContainer = document.getElementById("catagNavbar");
        navCatagryContainer.style.textAlign = "center";
        // navCatagryContainer.style.backgroundColor = "#f3f3f3"
        let navUl = document.createElement("ul");
        navUl.style.display = "grid";
        navUl.style.gridTemplateColumns=" 2% 11% 15% 13% 8% 8% 8% 8% 8% 18%";
        navUl.style.listStyle = "none";
        navUl.style.textAlign = "center";
        let navicon1=document.createElement("li");
        navicon1.innerHTML='<span class="material-icons location"> place </span>';


        let navli1 = document.createElement("li");
        navli1.innerText ="Deliver To";
        let chkdisplay=0;
        navli1.onclick = function () {
            console.log("hee");
            navli1Hover();
            function navli1Hover() {
                console.log("hi1", li1div);
                li1div.style.display = "block";
                li1div.style.position = "absolute";
                chkdisplay=1;
            }
        }
        let body=document.getElementById("htmlBody");
        body.onclick=function(){
            hikeDeliveryDiv();
            function hikeDeliveryDiv(){
                if(chkdisplay==1){
                    li1div.style.display = "none";
                    console.log("welcome");
                }
            }
        }
        navli1.className = "navli";
        let li1div = document.createElement("div");
        li1div.style.display = "none";

        let li1div_ul = document.createElement("ul");
        li1div_ul.style.listStyle = "none";
        li1div_ul.style.width = "100px";
        li1div_ul.style.textAlign = "left";
        li1div_ul.style.paddingLeft = "10px";
        let li1div_ul_li1 = document.createElement("li");
        li1div_ul_li1.innerText = "here";
        let li1div_ul_li2 = document.createElement("li");
        li1div_ul_li2.innerText = "here";
        let li1div_ul_li3 = document.createElement("li");
        li1div_ul_li3.innerText = "here";
        li1div_ul.append(li1div_ul_li1, li1div_ul_li2, li1div_ul_li3);
        li1div.append(li1div_ul);
        navli1.append(li1div);



        let navli2 = document.createElement("li");
        navli2.innerText = "Fruits & vegetable";
        navli2.onmouseover = function () {
            console.log("hee")
            navli2Hover();
            function navli2Hover() {
                console.log("hi1", li2div);
                li2div.style.display = "block";
                li2div.style.position = "absolute";
                // li2div.style.backgroundColor = "#f3f3f3";
            }
        }
        navli2.onmouseleave = function () {
            console.log("hee")
            navli2Hover();
            function navli2Hover() {
                console.log("hi1", li2div);
                li2div.style.display = "none";
            }
        }
        navli2.className = "navli";
        let li2div = document.createElement("div");
        li2div.style.display = "none";
        let li2div_ul = document.createElement("ul");
        li2div_ul.style.listStyle = "none";
        li2div_ul.style.width = "220px";
        li2div_ul.style.textAlign = "left";
        let li2div_ul_li1 = document.createElement("li");
        li2div_ul_li1.style.padding = "10px";
        li2div_ul_li1.innerText = "Fresh Fruits";
        let li2div_ul_li2 = document.createElement("li");
        li2div_ul_li2.style.padding = "10px";
        li2div_ul_li2.innerText = "Fresh Vegetables";
        let li2div_ul_li3 = document.createElement("li");
        li2div_ul_li3.style.padding = "10px";
        li2div_ul_li3.innerText = "Herbs & Seasonings";
        let li2div_ul_li4 = document.createElement("li");
        li2div_ul_li4.style.padding = "10px";
        li2div_ul_li4.innerText = "Exotic Fruits & vegetables";
        li2div_ul.append(li2div_ul_li1, li2div_ul_li2, li2div_ul_li3, li2div_ul_li4);
        li2div.append(li2div_ul);
        navli2.append(li2div);



        let navli3 = document.createElement("li");
        navli3.innerText = "Dairy & Bakery";
        navli3.onmouseover = function () {
            console.log("hee")
            navli3Hover();
            function navli3Hover() {
                console.log("hi1", li3div);
                li3div.style.display = "block";
                li3div.style.position = "absolute";
                // li3div.style.backgroundColor = "#f3f3f3";
            }
        }
        navli3.onmouseleave = function () {
            console.log("hee")
            navli3Hover();
            function navli3Hover() {
                console.log("hi1", li3div);
                li3div.style.display = "none";
            }
        }
        navli3.className = "navli";
        let li3div = document.createElement("div");
        li3div.style.display = "none";
        let li3div_ul = document.createElement("ul");
        li3div_ul.style.listStyle = "none";
        li3div_ul.style.width = "220px";
        li3div_ul.style.textAlign = "left";
        let li3div_ul_li1 = document.createElement("li");
        li3div_ul_li1.style.padding = "10px";
        li3div_ul_li1.innerText = "Dairy";
        let li3div_ul_li2 = document.createElement("li");
        li3div_ul_li2.style.padding = "10px";
        li3div_ul_li2.innerText = "Toast & Khari";
        let li3div_ul_li3 = document.createElement("li");
        li3div_ul_li3.style.padding = "10px";
        li3div_ul_li3.innerText = "Cakes & Muffins";
        let li3div_ul_li4 = document.createElement("li");
        li3div_ul_li4.style.padding = "10px";
        li3div_ul_li4.innerText = "Breads & Buns";
        let li3div_ul_li5 = document.createElement("li");
        li3div_ul_li5.style.padding = "10px";
        li3div_ul_li5.innerText = "Baked Cookies";
        li3div_ul.append(li3div_ul_li1, li3div_ul_li2, li3div_ul_li3, li3div_ul_li4, li3div_ul_li5);
        li3div.append(li3div_ul);
        navli3.append(li3div);



        let navli4 = document.createElement("li");
        navli4.innerText = "Staples";
        navli4.onmouseover = function () {
            console.log("hee")
            navli4Hover();
            function navli4Hover() {
                console.log("hi1", li4div);
                li4div.style.display = "block";
                li4div.style.position = "absolute";
                // li4div.style.backgroundColor = "#f3f3f3";
            }
        }
        navli4.onmouseleave = function () {
            console.log("hee")
            navli4Hover();
            function navli4Hover() {
                console.log("hi1", li4div);
                li4div.style.display = "none";
            }
        }
        navli4.className = "navli";
        let li4div = document.createElement("div");
        li4div.style.display = "none";
        let li4div_ul = document.createElement("ul");
        li4div_ul.style.listStyle = "none";
        li4div_ul.style.width = "220px";
        li4div_ul.style.textAlign = "left";
        let li4div_ul_li1 = document.createElement("li");
        li4div_ul_li1.style.padding = "10px";
        li4div_ul_li1.innerText = "Atta, Flours & Sooji";
        let li4div_ul_li2 = document.createElement("li");
        li4div_ul_li2.style.padding = "10px";
        li4div_ul_li2.innerText = "Dals & Pulses";
        let li4div_ul_li3 = document.createElement("li");
        li4div_ul_li3.style.padding = "10px";
        li4div_ul_li3.innerText = "Rice & Rice Products";
        let li4div_ul_li4 = document.createElement("li");
        li4div_ul_li4.style.padding = "10px";
        li4div_ul_li4.innerText = "Edible oils";
        let li4div_ul_li5 = document.createElement("li");
        li4div_ul_li5.style.padding = "10px";
        li4div_ul_li5.innerText = "Masalas & Spices";
        li4div_ul.append(li4div_ul_li1, li4div_ul_li2, li4div_ul_li3, li4div_ul_li4, li4div_ul_li5);
        li4div.append(li4div_ul);
        navli4.append(li4div);



        let navli5 = document.createElement("li");
        navli5.innerText = "Men";
        navli5.onmouseover = function () {
            console.log("hee")
            navli5Hover();
            function navli5Hover() {
                console.log("hi1", li5div);
                li5div.style.display = "block";
                li5div.style.position = "absolute";
                // li5div.style.backgroundColor = "#f3f3f3";
            }
        }
        navli5.onmouseleave = function () {
            console.log("hee")
            navli5Hover();
            function navli5Hover() {
                console.log("hi1", li5div);
                li5div.style.display = "none";
            }
        }
        navli5.className = "navli";
        let li5div = document.createElement("div");
        li5div.style.display = "none";
        let li5div_ul = document.createElement("ul");
        li5div_ul.style.listStyle = "none";
        li5div_ul.style.width = "220px";
        li5div_ul.style.textAlign = "left";
        let li5div_ul_li1 = document.createElement("li");
        li5div_ul_li1.style.padding = "10px";
        li5div_ul_li1.innerText = "Clothing Accessories";
        let li5div_ul_li2 = document.createElement("li");
        li5div_ul_li2.style.padding = "10px";
        li5div_ul_li2.innerText = "Western Wear";
        let li5div_ul_li3 = document.createElement("li");
        li5div_ul_li3.style.padding = "10px";
        li5div_ul_li3.innerText = "Inner Wear";
        let li5div_ul_li4 = document.createElement("li");
        li5div_ul_li4.style.padding = "10px";
        li5div_ul_li4.innerText = "Bags, Belts & Wallets";
        let li5div_ul_li5 = document.createElement("li");
        li5div_ul_li5.style.padding = "10px";
        li5div_ul_li5.innerText = "Ethnic Wear";
        li5div_ul.append(li5div_ul_li1, li5div_ul_li2, li5div_ul_li3, li5div_ul_li4, li5div_ul_li5);
        li5div.append(li5div_ul);
        navli5.append(li5div);


        let navli6 = document.createElement("li");
        navli6.innerText = "Woman";
        navli6.onmouseover = function () {
            console.log("hee")
            navli6Hover();
            function navli6Hover() {
                console.log("hi1", li6div);
                li6div.style.display = "block";
                li6div.style.position = "absolute";
                // li6div.style.backgroundColor = "#f3f3f3";
            }
        }
        navli6.onmouseleave = function () {
            console.log("hee")
            navli6Hover();
            function navli6Hover() {
                console.log("hi1", li6div);
                li6div.style.display = "none";
            }
        }
        navli6.className = "navli";
        let li6div = document.createElement("div");
        li6div.style.display = "none";
        let li6div_ul = document.createElement("ul");
        li6div_ul.style.listStyle = "none";
        li6div_ul.style.width = "220px";
        li6div_ul.style.textAlign = "left";
        let li6div_ul_li1 = document.createElement("li");
        li6div_ul_li1.style.padding = "10px";
        li6div_ul_li1.innerText = "Ethnic Wear";
        let li6div_ul_li2 = document.createElement("li");
        li6div_ul_li2.style.padding = "10px";
        li6div_ul_li2.innerText = "Western Wear";
        let li6div_ul_li3 = document.createElement("li");
        li6div_ul_li3.style.padding = "10px";
        li6div_ul_li3.innerText = "Clothing Accessories";
        let li6div_ul_li4 = document.createElement("li");
        li6div_ul_li4.style.padding = "10px";
        li6div_ul_li4.innerText = "Lingerie & Innerwear";
        let li6div_ul_li5 = document.createElement("li");
        li6div_ul_li5.style.padding = "10px";
        li6div_ul_li5.innerText = "Bags, Belts & Wallets";
        li6div_ul.append(li6div_ul_li1, li6div_ul_li2, li6div_ul_li3, li6div_ul_li4, li6div_ul_li5);
        li6div.append(li6div_ul);
        navli6.append(li6div);


        let navli7 = document.createElement("li");
        navli7.innerText = "Boys";
        navli7.onmouseover = function () {
            console.log("hee")
            navli7Hover();
            function navli7Hover() {
                console.log("hi1", li7div);
                li7div.style.display = "block";
                li7div.style.position = "absolute";
                // li7div.style.backgroundColor = "#f3f3f3";
            }
        }
        navli7.onmouseleave = function () {
            console.log("hee")
            navli7Hover();
            function navli7Hover() {
                console.log("hi1", li7div);
                li7div.style.display = "none";
            }
        }
        navli7.className = "navli";
        let li7div = document.createElement("div");
        li7div.style.display = "none";
        let li7div_ul = document.createElement("ul");
        li7div_ul.style.listStyle = "none";
        li7div_ul.style.width = "220px";
        li7div_ul.style.textAlign = "left";
        let li7div_ul_li1 = document.createElement("li");
        li7div_ul_li1.style.padding = "10px";
        li7div_ul_li1.innerText = "Western Wear";
        let li7div_ul_li2 = document.createElement("li");
        li7div_ul_li2.style.padding = "10px";
        li7div_ul_li2.innerText = "Ethnic Wear";
        let li7div_ul_li3 = document.createElement("li");
        li7div_ul_li3.style.padding = "10px";
        li7div_ul_li3.innerText = "Clothing Accessories";
        let li7div_ul_li4 = document.createElement("li");
        li7div_ul_li4.style.padding = "10px";
        li7div_ul_li4.innerText = "Footwear";
        let li7div_ul_li5 = document.createElement("li");
        li7div_ul_li5.style.padding = "10px";
        li7div_ul_li5.innerText = "Inner & Nightwear";
        li7div_ul.append(li7div_ul_li1, li7div_ul_li2, li7div_ul_li3, li7div_ul_li4, li7div_ul_li5);
        li7div.append(li7div_ul);
        navli7.append(li7div);


        let navli8 = document.createElement("li");
        navli8.innerText = "Girls";
        navli8.onmouseover = function () {
            console.log("hee")
            navli8Hover();
            function navli8Hover() {
                console.log("hi1", li8div);
                li8div.style.display = "block";
                li8div.style.position = "absolute";
                // li8div.style.backgroundColor = "#f3f3f3";
            }
        }
        navli8.onmouseleave = function () {
            console.log("hee")
            navli8Hover();
            function navli8Hover() {
                console.log("hi1", li8div);
                li8div.style.display = "none";
            }
        }
        navli8.className = "navli";
        let li8div = document.createElement("div");
        li8div.style.display = "none";
        let li8div_ul = document.createElement("ul");
        li8div_ul.style.listStyle = "none";
        li8div_ul.style.width = "220px";
        li8div_ul.style.textAlign = "left";
        let li8div_ul_li1 = document.createElement("li");
        li8div_ul_li1.style.padding = "10px";
        li8div_ul_li1.innerText = "Western Wear";
        let li8div_ul_li2 = document.createElement("li");
        li8div_ul_li2.style.padding = "10px";
        li8div_ul_li2.innerText = "Clothing Accessories";
        let li8div_ul_li3 = document.createElement("li");
        li8div_ul_li3.style.padding = "10px";
        li8div_ul_li3.innerText = "Ethnic Wear";
        let li8div_ul_li4 = document.createElement("li");
        li8div_ul_li4.style.padding = "10px";
        li8div_ul_li4.innerText = "Bags Belts & Wallets";
        li8div_ul.append(li8div_ul_li1, li8div_ul_li2, li8div_ul_li3, li8div_ul_li4);
        li8div.append(li8div_ul);
        navli8.append(li8div);



        let navli9 = document.createElement("li");
        navli9.innerText = "Snacks & Branded Food";
        navli9.onmouseover = function () {
            console.log("hee")
            navli9Hover();
            function navli9Hover() {
                console.log("hi1", li9div);
                li9div.style.display = "block";
                li9div.style.position = "absolute";
                // li9div.style.backgroundColor = "#f3f3f3";
            }
        }
        navli9.onmouseleave = function () {
            console.log("hee")
            navli9Hover();
            function navli9Hover() {
                console.log("hi1", li9div);
                li9div.style.display = "none";
            }
        }
        navli9.className = "navli";
        let li9div = document.createElement("div");
        li9div.style.display = "none";
        let li9div_ul = document.createElement("ul");
        li9div_ul.style.listStyle = "none";
        li9div_ul.style.width = "220px";
        li9div_ul.style.textAlign = "left";
        let li9div_ul_li1 = document.createElement("li");
        li9div_ul_li1.style.padding = "10px";
        li9div_ul_li1.innerText = "Biscuits & Cookies";
        let li9div_ul_li2 = document.createElement("li");
        li9div_ul_li2.style.padding = "10px";
        li9div_ul_li2.innerText = "Noodle, Pasta, Vermicelli";
        let li9div_ul_li3 = document.createElement("li");
        li9div_ul_li3.style.padding = "10px";
        li9div_ul_li3.innerText = "BreakFast Cereals";
        let li9div_ul_li4 = document.createElement("li");
        li9div_ul_li4.style.padding = "10px";
        li9div_ul_li4.innerText = "Snacks & Namkeen";
        let li9div_ul_li5 = document.createElement("li");
        li9div_ul_li5.style.padding = "10px";
        li9div_ul_li5.innerText = "Chocolates & Candies";
        li9div_ul.append(li9div_ul_li1, li9div_ul_li2, li9div_ul_li3, li9div_ul_li4, li9div_ul_li5);
        li9div.append(li9div_ul);
        navli9.append(li9div);


        navUl.append(navicon1,navli1, navli2, navli3, navli4, navli5, navli6, navli7, navli8, navli9);
        navCatagryContainer.append(navUl);
    }
    navCatagry();
  
    
let images = [
    "https://www.jiomart.com/images/category/26/atta-flours-sooji-20200704.jpg",
    "https://tse3.mm.bing.net/th?id=OIP.6ygsdMEznChIcWQ6kJOjVgHaEK&pid=Api",
    "https://tse4.mm.bing.net/th?id=OIP.9CFyD2EQdQF3M1pEv5WW8gHaD4&pid=Api",
    "https://tse3.mm.bing.net/th?id=OIP.eHC-C4YoG1fJG0NSvYzd2gHaD5&pid=Api",
  ];


let productContainer = document.getElementById("productSlide");
let interval;

function  productSlideshow(){

    let counter = 0 ;

     interval = setInterval(function(){
        productContainer.innerHTML = null;

        if(counter === images.length){
            counter = 0;   
        }   
        let divpro = document.createElement("div")
        divpro.setAttribute("class","divpro")
        let imgpro = document.createElement("img"); 
        imgpro.src = images[counter];
        imgpro.setAttribute("class","imgpro")

        divpro.append(imgpro)
        productContainer.append(divpro);

        counter = counter + 1; 
    }, 2000);
}
productSlideshow();

 let proarr = [
     {
         img:"https://www.jiomart.com/images/product/150x150/491349660/chakki-atta-10-kg-0-20210301.jpg",
         price:"285.00",
         name:"Chakki Atta 10 kg",
         cate: "atta"
     },
     {
         img:"https://www.jiomart.com/images/product/150x150/490010459/bhagirathi-modak-peeth-500-g-0-20210301.jpg",
         price:"36.00",
         name:"Bhagirathi Modak Peeth 500 g",
         cate: "atta"
     },
     {
         img:"https://www.jiomart.com/images/product/150x150/590514179/nutrapoorna-sugandhi-modak-atta-500-g-0-20210831.jpg",
         price:"25.00",
         name:"Nutrapoorna Sugandhi Modak Atta 500 g",
         cate: "atta"
     },
     {
         img:"https://www.jiomart.com/images/product/150x150/491458273/good-life-mp-wheat-chakki-atta-10-kg-0-20201117.jpg",
         price:"325.00",
         name:"Good Life MP Wheat Chakki Atta 10 kg",
         cate: "atta"
     },
     {
         img:"https://www.jiomart.com/images/product/150x150/590048963/gajanann-foods-rice-flour-500-g-0-20201030.jpg",
         price:"27.00",
         name:"Gajanann Foods Rice Flour 500 g",
         cate: "atta"
     },
     {
         img:"https://www.jiomart.com/images/product/150x150/590108357/nutrapoorna-kuti-kuttu-atta-200-g-0-20201215.jpg",
         price:"43.00",
         name:"Nutrapoorna Kuti / Kuttu Atta 200 g",
         cate: "atta"
         },  
         {
         img:"https://www.jiomart.com/images/product/150x150/491458272/good-life-mp-wheat-chakki-atta-5-kg-0-20201117.jpg",
         price:"159.00",
         name:"Good Life MP Wheat Chakki Atta 5 kg",
         cate: "atta"
         },  
       
       {
         img:"https://www.jiomart.com/images/product/150x150/491208934/rajdhani-chana-sattu-500-g-0-20210304.jpg",
         price:"59.00",
         name:"Rajdhani Chana Sattu 500 g",
         cate: "atta"
     },  
     {
         img:"https://www.jiomart.com/images/product/150x150/491349660/chakki-atta-10-kg-0-20210301.jpg",
         price:"285.00",
         name:"Chakki Atta 10 kg",
         cate: "atta"
     },
     {
         img:"https://www.jiomart.com/images/product/150x150/490010459/bhagirathi-modak-peeth-500-g-0-20210301.jpg",
         price:"36.00",
         name:"Bhagirathi Modak Peeth 500 g",
         cate: "atta"
     },
     {
         img:"https://www.jiomart.com/images/product/150x150/590514179/nutrapoorna-sugandhi-modak-atta-500-g-0-20210831.jpg",
         price:"25.00",
         name:"Nutrapoorna Sugandhi Modak Atta 500 g",
         cate: "atta"
     },
     {
         img:"https://www.jiomart.com/images/product/150x150/491458273/good-life-mp-wheat-chakki-atta-10-kg-0-20201117.jpg",
         price:"325.00",
         name:"Good Life MP Wheat Chakki Atta 10 kg",
         cate: "atta"
     },
     {
         img:"https://www.jiomart.com/images/product/150x150/590048963/gajanann-foods-rice-flour-500-g-0-20201030.jpg",
         price:"27.00",
         name:"Gajanann Foods Rice Flour 500 g",
         cate: "atta"
     },    


     {
            img: "https://www.jiomart.com/images/product/150x150/491161296/britannia-good-day-cashew-cookies-100-g-0-20210819.jpg",
            price: "16.00",
            name: "Britannia Good Day  100 g",
            cate:"biscuits"
        },
        {
            img: " https://www.jiomart.com/images/product/150x150/490007701/britannia-nutrichoice-hi-fibre-digestive-biscuits-100-g-0-20210831.jpg",
            price: "21.00",
            name: "Britannia NutriChoice   100 g",
            cate:"biscuits"
        },
        {
            img: "https://www.jiomart.com/images/product/150x150/490005349/britannia-bourbon-the-original-cream-biscuits-150-g-0-20210902.jpg ",
            price: "22",
            name: "Britannia Bourbon  150 g",
            cate:"biscuits"
        },
        {
            img: "https://www.jiomart.com/images/product/150x150/590126857/sunfeast-dark-fantasy-choco-chip-biscuits-350-g-0-20210217.jpg ",
            price: "75.00",
            name: "Sunfeast Dark   350 g",
            cate:"biscuits"
        },
        {
            img: " https://www.jiomart.com/images/product/150x150/490008739/parle-g-original-glucose-biscuits-800-g-0-20210115.jpg",
            price: "67.00",
            name: "Parle-G   Glucose  800 g",
            cate:"biscuits"
        },
        {
            img: " https://www.jiomart.com/images/product/150x150/491439006/parle-monaco-classic-regular-salted-biscuits-400-g-0-20201118.jpg",
            price: "53.00",
            name: "Parle Monaco Classic   400 g",
            cate:"biscuits"
        },
        {
            img: "https://www.jiomart.com/images/product/150x150/590320934/open-secret-assorted-nutty-cookies-75-g-0-20210602.jpg ",
            price: "70.00",
            name: "  Assorted Nutty Cookies 75 g",
            cate:"biscuits"
        },
        {
            img: "https://www.jiomart.com/images/product/150x150/590320932/open-secret-choco-almond-nutty-cookies-75-g-0-20210604.jpg ",
            price: "70.00",
            name: " Choco Almond Nutty Cookies 75 g",
            cate:"biscuits"
        },
        {
            img: "https://www.jiomart.com/images/product/150x150/590320933/open-secret-white-choco-cashew-nutty-cookies-75-g-0-20210604.jpg ",
            price: "70.00",
            name: " Choco Cashew Nutty Cookies 75 g",
            cate:"biscuits"
        },
        {
            img: "https://www.jiomart.com/images/product/150x150/491439007/parle-krack-jack-crackers-400-g-0-20210915.jpg ",
            price: "53.00",
            name: "Parle Krack Jack Crackers 400 g",
            cate:"biscuits"
        },
        {
            img: " https://www.jiomart.com/images/product/150x150/491264336/britannia-classic-little-hearts-biscuits-75-g-0-20210804.jpg",
            price: "16.00",
            name: "Britannia Classic Little Hearts Biscuits 75 g",
            cate:"biscuits"
        },
        {
            img: "https://www.jiomart.com/images/product/150x150/490762566/sunfeast-dark-fantasy-choco-fills-cookies-75-g-0-20210831.jpg ",
            price: "30.00",
            name: "Sunfeast Dark Fantasy Choco Fills Cookies 75 g",
            cate:"biscuits"
        },

        {
         img:"https://www.jiomart.com/images/product/150x150/490011303/amulya-dairy-whitener-500-g-pouch-0-20210325.jpg",
         price:"195.00",
         name:"Amulya Dairy Whitner500 g  ",
         cate:"dairy"
       },
       {
         img:"https://www.jiomart.com/images/product/150x150/490001530/amulya-dairy-whitener-1-kg-pouch-0-20210831.jpg",
         price:"375.00",
         name:"Amulya Dairy Whitener 1 kg (Pouch)",
         cate:"dairy"
       },
       {
         img:"https://www.jiomart.com/images/product/150x150/590034287/yakult-probiotic-drink-325-ml-bottle-0-20210701.jpg ",
         price:"70.00",
         name:"Yakult Probiotic Drink 325 ml  ",
         cate:"dairy"
       },
       {
         img:"https://www.jiomart.com/images/product/150x150/490983577/amul-mithai-mate-sweetened-condensed-milk-200-g-tin-0-20210702.jpg ",
         price:"56.00",
         name:"Amul Mithai Mate  Milk 200 g  ",
         cate:"dairy"
       },
       {
         img:" https://www.jiomart.com/images/product/150x150/490001537/nestle-milkmaid-sweetened-condensed-milk-400-g-tin-0-20210316.jpg",
         price:"115.00",
         name:"Nestle Milkmaid   Milk 400 g  ",
         cate:"dairy"
       },
       {
         img:"https://www.jiomart.com/images/product/150x150/490001538/amul-mithai-mate-sweetened-condensed-milk-400-g-tin-0-20210701.jpg ",
         price:"105.00",
         name:"Amul Mithai   Milk 400 g  ",
         cate:"dairy"
       },
       {
         img:"https://www.jiomart.com/images/product/150x150/590124556/mother-dairy-masala-chach-200-ml-tetra-pak-0-20210108.jpg ",
         price:"11.00",
         name:"  Dairy Masala Chach 200 ml",
         cate:"dairy"
       },
       {
         img:" https://www.jiomart.com/images/product/150x150/491184305/mother-dairy-cream-200-ml-tetra-pak-0-20210316.jpg",
         price:"49.00",
         name:"  Dairy Cream 200 ml ",
         cate:"dairy"
       },
       {
         img:"https://www.jiomart.com/images/product/150x150/590034288/yakult-light-probiotic-drink-325-ml-bottle-0-20210705.jpg ",
         price:"85",
         name:"Yakult Light  Drink 325 ml (Bottle)",
         cate:"dairy"
       },
       {
         img:"https://www.jiomart.com/images/product/150x150/490351208/sofit-chocolate-flavoured-soya-milk-1-l-tetra-pak-0-20210312.jpg ",
         price:"123.00",
         name:"Sofit Chocolate  Milk 1 L",
         cate:"dairy"
       },
       {
         img:" https://www.jiomart.com/images/product/150x150/590041375/mother-dairy-sweetened-lassi-200-ml-bottle-0-20210223.jpg",
         price:"19.00",
         name:"Mother Dairy Lassi 200 ml (Bottle)",
         cate:"dairy"
       },
       {
         img:" https://www.jiomart.com/images/product/150x150/491584166/epigamia-alphonso-mango-greek-yogurt-smoothie-200-ml-bottle-0-20210326.jpg",
         price:"40.00",
         name:"Epigamia Alphonso Mango 200 ml (Bottle)",
         cate:"dairy"
       },

       {
         img:"https://www.jiomart.com/images/product/330x410/441023881_navy/printed-straight-kurta-with-mandarin-collar-model-441023881_navy-0-202104072114.jpg",
         price:"240.00",
         name:"printed kurta",
         cate:"women"
       },
       {
         img:"https://www.jiomart.com/images/product/330x410/441070560_magntafusha/printed-straight-kurta-with-mandarin-collar-model-441070560_magntafusha-0-202104070930.jpg ",
         price:"314.00",
         name:"printed kurta",
         cate:"women2"
       },
       {
         img:"https://www.jiomart.com/images/product/330x410/441020957_black/ankle-length-leggings-with-elasticated-waist-model-441020957_black-0-202104071852.jpg ",
         price:"319.00",
         name:"ankle-length leggings",
         cate:"women2"
       },
       {
         img:"https://www.jiomart.com/images/product/330x410/441052822_aqua/floral-print-straight-kurta-with-band-collar-model-441052822_aqua-0-202104090257.jpg ",
         price:"240.00",
         name:"printed kurta",
         cate:"women2"
       },
       {
         img:"https://www.jiomart.com/images/product/330x410/441055193_green/graphic-print-crew-neck-t-shirt-model-441055193_green-0-202104080814.jpg ",
         price:"188.00",
         name:"print t-shirt",
         cate:"women2"
       },
       {
         img:"https://www.jiomart.com/images/product/330x410/441020957_white/ankle-length-leggings-with-elasticated-waist-model-441020957_white-0-202104071237.jpg ",
         price:"319.00",
         name:"ankle-length leggings",
         cate:"women"
       },
       {
         img:" https://www.jiomart.com/images/product/330x410/440535772_black/stretch-churidar-leggings-model-440535772_black-0-202104080101.jpg",
         price:"319.00",
         name:"ankle-length leggings",
         cate:"women"
       },
       {
         img:"https://www.jiomart.com/images/product/240x300/441114102_ltblue/striped-dungaree-dress-with-slip-pockets-model-441114102_ltblue-0-202102061423.jpg ",
         price:"499.00",
         name:"Striped Dungaree Dress ",
         cate:"women"
       },
       {
         img:" https://www.jiomart.com/images/product/240x300/441101871_darkred/cotton-pinafore-dress-model-441101871_darkred-0-202102061652.jpg",
         price:"441.00",
         name:"Cotton Pinafore Dress",
         cate:"women2"
       },
       {
         img:"https://www.jiomart.com/images/product/330x410/441020957_white/ankle-length-leggings-with-elasticated-waist-model-441020957_white-0-202104071237.jpg ",
         price:"319.00",
         name:"ankle-length leggings",
         cate:"women"
       },
       {
         img:" https://www.jiomart.com/images/product/330x410/440535772_black/stretch-churidar-leggings-model-440535772_black-0-202104080101.jpg",
         price:"319.00",
         name:"ankle-length leggings",
         cate:"women"
       },


       {
         img:"https://www.jiomart.com/images/product/150x150/490729028/dove-nutritive-solutions-intense-repair-shampoo-for-damaged-hair-650-ml-0-20210624.jpg",
         price:"370.00",
         name:"Dove Shampoo",
         cate:"shampoos"
       },
       {
         img:"https://www.jiomart.com/images/product/150x150/490729027/dove-nutritive-solutions-daily-shine-shampoo-650-ml-0-20210506.jpg ",
         price:"370.00",
         name:"Dove Shampoo",
         cate:"shampoos"
       },
       {
         img:" https://www.jiomart.com/images/product/150x150/490915866/dove-nutritive-solutions-hair-fall-rescue-shampoo-650-ml-0-20210624.jpg",
         price:"370.00",
         name:"Dove Shampoo",
         cate:"shampoos"
       },
       {
         img:"https://www.jiomart.com/images/product/150x150/490985893/l-oreal-paris-total-repair-5-advanced-repairing-shampoo-640-ml-with-extra-10-0-20210412.jpg ",
         price:"290.00",
         name:"L'Oreal shampoo",
         cate:"shampoos"
       },
       {
         img:" https://www.jiomart.com/images/product/150x150/490729044/head-shoulders-anti-hairfall-anti-dandruff-shampoo-650-ml-0-20201015.jpg",
         price:"435.00",
         name:"Head & Shoulder shampoo",
         cate:"shampoos"
       },
       {
         img:" https://www.jiomart.com/images/product/150x150/490729029/sunsilk-co-creations-lusciously-thick-long-shampoo-650-ml-0-20201020.jpg",
         price:"265.00",
         name:"Sunsilk Shampoo",
         cate:"shampoos"
       },
       {
         img:" https://www.jiomart.com/images/product/150x150/490886392/sunsilk-co-creations-stunning-black-shine-shampoo-650-ml-0-20210104.jpg",
         price:"265.00",
         name:"Sunsilk Shampoo",
         cate:"shampoos"
       },

       {
         img:"https://www.jiomart.com/images/product/150x150/490740298/pantene-pro-v-advanced-hair-fall-control-shampoo-650-ml-0-20210111.jpg ",
         price:"400.00",
         name:"Pantene Shampoo",
         cate:"shampoos"
       },
       {
         img:" https://www.jiomart.com/images/product/150x150/490915866/dove-nutritive-solutions-hair-fall-rescue-shampoo-650-ml-0-20210624.jpg",
         price:"370.00",
         name:"Dove Shampoo",
         cate:"shampoos"
       },
       {
         img:"https://www.jiomart.com/images/product/150x150/490985893/l-oreal-paris-total-repair-5-advanced-repairing-shampoo-640-ml-with-extra-10-0-20210412.jpg ",
         price:"290.00",
         name:"L'Oreal shampoo",
         cate:"shampoos"
       },
       {
         img:" https://www.jiomart.com/images/product/150x150/490729044/head-shoulders-anti-hairfall-anti-dandruff-shampoo-650-ml-0-20201015.jpg",
         price:"435.00",
         name:"Head & Shoulder shampoo",
         cate:"shampoos"
       },
       {
         img:" https://www.jiomart.com/images/product/150x150/490729029/sunsilk-co-creations-lusciously-thick-long-shampoo-650-ml-0-20201020.jpg",
         price:"265.00",
         name:"Sunsilk Shampoo",
         cate:"shampoos"
       },

       {
         img:"https://www.jiomart.com/images/product/240x300/441121945_denim/washed-panelled-jogger-jeans-with-insert-pockets-model-441121945_denim-0-202109110325.jpg",
         price:"449.00",
         name:"Jogger",
         cate:"infant wear"

       },
       {
         img:"https://www.jiomart.com/images/product/240x300/441079859_assorted/pack-of-3-round-neck-t-shirts-model-441079859_assorted-0-202107021640.jpg ",
         price:"559.00",
         name:"T-shirt",
         cate:"infant wear"

       },
       {
         img:"https://www.jiomart.com/images/product/240x300/441116671_blue/printed-twofer-a-line-dress-model-441116671_blue-0-202106060032.jpg",
         price:"399.00",
         name:"Dress",
       },
       {
         img:"https://www.jiomart.com/images/product/240x300/441110361_coral/textured-trackpants-with-drawstring-waistband-model-441110361_coral-0-202102061336.jpg ",
         price:"225.00",
         name:"Track Pant",
         cate:"infant wear"
       },
       {
         img:" https://www.jiomart.com/images/product/240x300/441074729_lavender/quilted-onesie-with-t-shirt-model-441074729_lavender-0-202012221508.jpg",
         price:"448.00",
         name:"Onesie with tshirt",
         cate:"infant wear"
       },
       {
         img:"https://www.jiomart.com/images/product/240x300/441069218_assorted/pack-of-2-colourblock-sleepsuits-model-441069218_assorted-0-202012161207.jpg ",
         price:"551.00",
         name:"Sleepsuits",
         cate:"infant wear"
       },
       {
         img:"https://www.jiomart.com/images/product/240x300/441117772_darkred/pack-of-superhero-print-boxers-model-441117772_darkred-0-202104150705.jpg ",
         price:"299.00",
         name:"Boxers",
         cate:"infant wear"
       },
       {
         img:"https://www.jiomart.com/images/product/240x300/441110467_grey/printed-cotton-pants-set-model-441110467_grey-0-202105211408.jpg ",
         price:"343.00",
         name:"Pant Shirt",
         cate:"infant wear"
       },
       {
         img:"https://www.jiomart.com/images/product/240x300/441116671_blue/printed-twofer-a-line-dress-model-441116671_blue-0-202106060032.jpg",
         price:"399.00",
         name:"Dress",
         cate:"infant wear"
       },
       {
         img:"https://www.jiomart.com/images/product/240x300/441110361_coral/textured-trackpants-with-drawstring-waistband-model-441110361_coral-0-202102061336.jpg ",
         price:"225.00",
         name:"Track Pant",
         cate:"infant wear"
       },
       {
         img:" https://www.jiomart.com/images/product/240x300/441074729_lavender/quilted-onesie-with-t-shirt-model-441074729_lavender-0-202012221508.jpg",
         price:"448.00",
         name:"Onesie with tshirt",
         cate:"infant wear"
       },
       {
         img:"https://www.jiomart.com/images/product/240x300/441069218_assorted/pack-of-2-colourblock-sleepsuits-model-441069218_assorted-0-202012161207.jpg ",
         price:"551.00",
         name:"Sleepsuits",
         cate:"infant wear"
       },

       {
         img:"https://www.jiomart.com/images/product/150x150/490001269/red-label-leaf-tea-500-g-carton-0-20210511.jpg",
         price:"263.00",
         name:"Red Label Leaf Tea 500 g ",
         cate:"tea"
       },
       {
         img:"https://www.jiomart.com/images/product/150x150/490001268/red-label-leaf-tea-250-g-carton-0-20210831.jpg ",
         price:"130.00",
         name:"Red Label Leaf Tea 250 g",
         cate:"tea"
       },
       {
         img:"https://www.jiomart.com/images/product/150x150/490004178/tata-agni-leaf-tea-1-kg-0-20210909.jpg ",
         price:"250.00",
         name:"Tata Agni Leaf Tea 1 kg",
         cate:"tea"
       },
       {
         img:"https://www.jiomart.com/images/product/150x150/490073715/wagh-bakri-premium-leaf-tea-500-g-0-20201118.jpg ",
         price:"255.00",
         name:"Wagh Bakri Premium  Tea 500 g",
         cate:"tea"
       },
       {
         img:" https://www.jiomart.com/images/product/150x150/490001298/society-tea-500-g-0-20201126.jpg",
         price:"234.00",
         name:"Society Tea 500 g",
         cate:"tea"
       },
       {
         img:"https://www.jiomart.com/images/product/150x150/490001323/taj-mahal-tea-250-g-carton-0-20210322.jpg",
         price:"184.00",
         name:"Taj Mahal Tea 250 g (Carton)",
         cate:"tea"
       },
       {
         img:" https://www.jiomart.com/images/product/150x150/490001296/society-tea-250-g-0-20200718.jpg",
         price:"120.00",
         name:"Society Tea 250 g",
         cate:"tea"
       },
       {
         img:"https://www.jiomart.com/images/product/150x150/490004178/tata-agni-leaf-tea-1-kg-0-20210909.jpg ",
         price:"250.00",
         name:"Tata Agni Leaf Tea 1 kg",
         cate:"tea"
       },
       {
         img:"https://www.jiomart.com/images/product/150x150/490073715/wagh-bakri-premium-leaf-tea-500-g-0-20201118.jpg ",
         price:"255.00",
         name:"Wagh Bakri Premium  Tea 500 g",
         cate:"tea"
       },
       {
         img:" https://www.jiomart.com/images/product/150x150/490001298/society-tea-500-g-0-20201126.jpg",
         price:"234.00",
         name:"Society Tea 500 g",
         cate:"tea"
       },
       {
         img:"https://www.jiomart.com/images/product/150x150/490001323/taj-mahal-tea-250-g-carton-0-20210322.jpg",
         price:"184.00",
         name:"Taj Mahal Tea 250 g (Carton)",
         cate:"tea"
       },
       {
         img:" https://www.jiomart.com/images/product/150x150/490001296/society-tea-250-g-0-20200718.jpg",
         price:"120.00",
         name:"Society Tea 250 g",
         cate:"tea"
       },

       {
         img:"https://www.jiomart.com/images/product/330x410/441000455_charcoal/shorts-with-elasticated-waist-model-441000455_charcoal-0-202104090950.jpg",
         price:"594.00",
         name:"Shorts",
         cate:"men"

       },
       {
         img:" https://www.jiomart.com/images/product/330x410/441039308_black/typographic-print-crew-neck-t-shirt-model-441039308_black-0-202104082223.jpg",
         price:"196.00",
         name:"T-shirt",
         cate:"men"

       },
       {
         img:" https://www.jiomart.com/images/product/330x410/441000455_olive/shorts-with-elasticated-waist-model-441000455_olive-0-202104081618.jpg",
         price:"594.00",
         name:"Shorts",
         cate:"men"

       },
       {
         img:" https://www.jiomart.com/images/product/330x410/441031716_charcoal/heathered-track-pants-with-contrast-taping-model-441031716_charcoal-0-202104081541.jpg",
         price:"399.00",
         name:"Track pant",
         cate:"men"

       },
       {
         img:"https://www.jiomart.com/images/product/330x410/441039298_white/tropical-print-pocket-crew-neck-t-shirt-model-441039298_white-0-202104090954.jpg ",
         price:"196.00",
         name:"T-shirt",
         cate:"men"
       },
       {
         img:"https://www.jiomart.com/images/product/330x410/441025077_olive/ankle-length-joggers-with-insert-pockets-model-441025077_olive-0-202104081816.jpg ",
         price:"480.00",
         name:"Joggers",
         cate:"men"
       },
       {
         img:"https://www.jiomart.com/images/product/330x410/441031714_petrol/heathered-joggers-with-insert-pockets-model-441031714_petrol-0-202104082319.jpg",
         price:"419.00",
         name:"Joggers",
         cate:"men"

       },
       {
         img:"https://www.jiomart.com/images/product/240x300/441120043_rust/slim-fit-shirt-with-band-collar-model-441120043_rust-0-202106241239.jpg ",
         price:"1079.00",
         name:"Shirt",
         cate:"men"
       },
       {
         img:"https://www.jiomart.com/images/product/240x300/441119274_khaki/checked-shirt-with-patch-pocket-model-441119274_khaki-0-202103161629.jpg ",
         price:"799.00",
         name:"Shirt",
         cate:"men"
       },
       {
         img:"https://www.jiomart.com/images/product/240x300/441104920_navy/slim-fit-striped-shirt-model-441104920_navy-0-202104080743.jpg ",
         price:"689.00",
         name:"Shirt",
         cate:"men"
       },
       {
         img:"https://www.jiomart.com/images/product/330x410/441039298_white/tropical-print-pocket-crew-neck-t-shirt-model-441039298_white-0-202104090954.jpg ",
         price:"196.00",
         name:"T-shirt",
         cate:"men"
       },
       {
         img:"https://www.jiomart.com/images/product/330x410/441025077_olive/ankle-length-joggers-with-insert-pockets-model-441025077_olive-0-202104081816.jpg ",
         price:"480.00",
         name:"Joggers",
         cate:"men"
       },

       {
         img:"https://www.jiomart.com/images/product/330x410/440952536_charcoal/mid-rise-track-pants-with-contrast-taping-model-440952536_charcoal-0-202104070120.jpg",
         price:"196.00",
         name:"Track Pant",
         cate:"kids"
     },
     {
         img:"https://www.jiomart.com/images/product/330x410/441054885_orange/graphic-print-round-neck-top-with-pom-pom-model-441054885_orange-0-202104071553.jpg",
         price:"160.00",
         name:"Tshirts",
         cate:"kids"
     },
     {
         img:"https://www.jiomart.com/images/product/330x410/441054862_navy/printed-leggings-with-elasticated-waistband-model-441054862_navy-0-202104062331.jpg",
         price:"99.00",
         name:"Leggings",
         cate:"kids"
     },
     {
         img:"https://www.jiomart.com/images/product/330x410/441056254_ltblue/graphic-print-t-shirt-with-ruffled-sleeves-model-441056254_ltblue-0-202104061659.jpg",
         price:"120.00",
         name:"Tshirts",
         cate:"kids"
     },
     {
         img:"https://www.jiomart.com/images/product/330x410/441050803_neongreen/typographic-print-round-neck-t-shirt-model-441050803_neongreen-0-202104061733.jpg",
         price:"100.00",
         name:"Tshirts",
         cate:"kids"
     },
     {
         img:"https://www.jiomart.com/images/product/330x410/441054887_yellow/printed-round-neck-t-shirt-model-441054887_yellow-0-202104070805.jpg",
         price:"96.00",
         name:"Tshirts",
         cate:"kids"
     },   {
         img:"https://www.jiomart.com/images/product/330x410/441054868_navy/round-neck-t-shirt-with-embellishments-model-441054868_navy-0-202104071336.jpg",
         price:"96.00",
         name:"Tshirts",
         cate:"kids"
     },   {
         img:"https://www.jiomart.com/images/product/330x410/440952535_black/typographic-print-joggers-with-insert-pockets-model-440952535_black-0-202104070138.jpg",
         price:"294.00",
         name:"Joggers",
         cate:"kids"
     },   {
         img:"https://www.jiomart.com/images/product/330x410/440952536_navy/mid-rise-track-pants-with-contrast-taping-model-440952536_navy-0-202104071041.jpg",
         price:"196.00",
         name:"Track Pant",
         cate:"kids"
     },   {
         img:"https://www.jiomart.com/images/product/330x410/441055740_yellow/printed-leggings-with-elasticated-waist-model-441055740_yellow-0-202104071441.jpg",
         price:"96.00",
         name:"leggings",
         cate:"kids"
     },   {
         img:"https://www.jiomart.com/images/product/330x410/441055735_yellow/printed-capris-with-elasticated-waist-model-441055735_yellow-0-202104072222.jpg",
         price:"96.00",
         name:"leggings",
         cate:"kids"
     },   {
         img:"https://www.jiomart.com/images/product/330x410/440995278_anthramelange/numeric-print-shorts-with-contrast-elasticated-drawstring-waist-model-440995278_anthramelange-0-202104061744.jpg",
         price:"187.00",
         name:"Shorts",
         cate:"kids"
     },   {
         img:"https://www.jiomart.com/images/cms/section/category/219/506.png?v=1601122470",
         price:"220.00",
         name:"Shorts",
         cate:"kids"
     },  
     {
         img:"https://www.jiomart.com/images/product/330x410/440952536_charcoal/mid-rise-track-pants-with-contrast-taping-model-440952536_charcoal-0-202104070120.jpg",
         price:"196.00",
         name:"Track Pant",
         cate:"kids"
     },
     {
         img:"https://www.jiomart.com/images/product/330x410/441054885_orange/graphic-print-round-neck-top-with-pom-pom-model-441054885_orange-0-202104071553.jpg",
         price:"160.00",
         name:"Tshirts",
         cate:"kids"
     },
     {
         img:"https://www.jiomart.com/images/product/330x410/441054862_navy/printed-leggings-with-elasticated-waistband-model-441054862_navy-0-202104062331.jpg",
         price:"99.00",
         name:"Leggings",
         cate:"kids"
     },  
 ];
  
let pro = document.getElementById("ExploreBestsellers"); 
 
 function showProduct (d) {  
    pro.innerHTML = null

d.forEach(function(product){
    let cato = JSON.parse(localStorage.getItem("catog"))
    if(product.cate == cato)
    {

    let div1 = document.createElement("div"); 
    div1.setAttribute("class","div1")

    let div_img  = document.createElement("div")
    div_img.setAttribute("class","div_img") 

    let div_text  = document.createElement("div")
    div_text.setAttribute("class","div_text")

    let div_btn  = document.createElement("div")
    div_btn.setAttribute("class","div_btn")

    let img1 = document.createElement("img");
    img1.src = product.img
    img1.setAttribute("class","img1")

    let price1 = document.createElement("p");
    price1.textContent = product.price

    let  name1 = document.createElement("p");
     name1.textContent = product.name; 

    let btn1 = document.createElement("button");
    btn1.innerText = "Add to Cart";
    btn1.setAttribute("class","btn1")

    btn1.onclick = function(){
        addtocart(product) 
    }
    div_img.append(img1) 
    div_text.append(name1,price1)
    div_btn.append(btn1)
    div1.append(div_img,div_text,div_btn)
    pro.append(div1)
}
});
 };
 showProduct(proarr)

 function sortLH(){
  let arr = proarr.sort(function (a,b){
    return a.price - b.price
  })
  showProduct(arr);
}

function sortHL(){
  let arr = proarr.sort(function (a,b){
    return b.price - a.price
  })
  showProduct(arr);
}
function addtocart(product) {
        if (localStorage.getItem("jioUserCart") === null) {
            localStorage.setItem("jioUserCart", JSON.stringify([]));
        }
        let array = JSON.parse(localStorage.getItem("jioUserCart"));
        let present  = false;

          array.forEach((pro)=>{
            if(pro.name == product.name)
            {  
                pro.quantity++;
                present = true;
            }
         })
       if(present)
       {
        localStorage.setItem("jioUserCart", JSON.stringify(array));
       }else{
          product.quantity = 1;
          array.push(product);
          localStorage.setItem("jioUserCart", JSON.stringify(array));
       }
    }
