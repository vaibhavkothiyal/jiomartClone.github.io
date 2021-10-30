
    function goTOsignIn() {
        window.location.href = "signIn.html";
    }
    function goTocart() {
        window.location.href = "cart.html";
    }



    // ---------------------"Navbar Catagory JS" starts here----------------------- (VK)
    function navCatagry() {
        let navCatagryContainer = document.getElementById("catagNavbar");
        navCatagryContainer.style.textAlign = "center";
        // navCatagryContainer.style.backgroundColor = "#f3f3f3"
        let navUl = document.createElement("ul");
        navUl.style.display = "grid";
        navUl.style.gridTemplateColumns = " 2% 11% 15% 13% 8% 8% 8% 8% 8% 18%";
        navUl.style.listStyle = "none";
        navUl.style.textAlign = "center";
        let navicon1 = document.createElement("li");
        navicon1.innerHTML = '<span class="material-icons location"> place </span>';

        let userClick;
        let navli1 = document.createElement("li");
        navli1.innerText = "Deliver To";
        let chkdisplay = 0;
        navli1.onclick = function () {
            navli1Hover();
            function navli1Hover() {
                li1div.style.display = "block";
                li1div.style.position = "absolute";
                li1div.style.left = "10px";
                chkdisplay = 1;
            }
        }
        let body = document.getElementById("htmlBody");
        body.ondblclick = function () {
            hikeDeliveryDiv();
            function hikeDeliveryDiv() {
                if (chkdisplay == 1) {
                    li1div.style.display = "none";
                }
            }
        }
        navli1.className = "navli";
        let li1div = document.createElement("div");
        li1div.style.display = "none";
        li1div.style.marginTop = "5px";

        let li1div_ul = document.createElement("ul");
        li1div_ul.style.listStyle = "none";
        li1div_ul.style.width = "100px";
        li1div_ul.style.textAlign = "left";
        li1div_ul.style.width = "320px";
        li1div_ul.style.backgroundColor = "white";
        li1div_ul.style.borderRadius = "10px";
        li1div_ul.style.border = "2px solid #c4c4c4";
        let li1div_ul_li1 = document.createElement("div");
        li1div_ul_li1.innerText = "Where do you want to deliver ?";
        li1div_ul_li1.style.fontWeight = "999";
        li1div_ul_li1.style.fontSize = "20px";
        li1div_ul_li1.style.marginTop = "3px";
        li1div_ul_li1.style.padding = "10px 0px 0px 10px";
        let li1div_ul_li2 = document.createElement("div");
        li1div_ul_li2.innerText = "Get access to your Addresses, Order, and Wishlist";
        li1div_ul_li2.style.color = "#3b3b3b";
        li1div_ul_li2.style.paddingLeft = "10px";
        li1div_ul_li2.style.fontSize = "12px";
        li1div_ul_li2.style.marginTop = "3px";
        let DeliverBtn = document.createElement("button");
        DeliverBtn.innerText = "Sign in to see your address";
        DeliverBtn.style.cursor = "pointer";
        DeliverBtn.onclick = function () {
            window.location.href = "signIn.html";
        }
        DeliverBtn.style.margin = "10px 10px";
        DeliverBtn.style.padding = "8px 20px";
        DeliverBtn.style.width = "90%";
        DeliverBtn.style.backgroundColor = "#008ecc";
        DeliverBtn.style.color = "white";
        DeliverBtn.style.border = "none";
        DeliverBtn.style.borderRadius = "3px";
        DeliverBtn.style.fontSize = "18px";
        let gap = document.createElement("div");
        gap.style.padding = "4px";
        gap.style.backgroundColor = "#d7d7d7";
        let textforDel1 = document.createElement("p");
        textforDel1.innerText = "Or Enter Pincode";
        textforDel1.style.paddingLeft = "10px";
        textforDel1.style.marginTop = "10px";
        textforDel1.style.fontWeight = "999";
        textforDel1.style.fontSize = "20px";
        let textforDel2 = document.createElement("p");
        textforDel2.innerText = "Select pincode to see product availability.";
        textforDel2.style.color = "#3b3b3b";
        textforDel2.style.paddingLeft = "10px";
        textforDel2.style.marginTop = "3px";
        textforDel2.style.fontSize = "12px";
        let pincodediv = document.createElement("div");
        let delIcon = document.createElement("span");
        delIcon.innerHTML = '<span class="material-icons"> place </span>';
        let delInpu = document.createElement("input");
        delInpu.type = "number";
        delInpu.placeholder = "Enter your Pincode";
        delInpu.style.width = "90%";
        delInpu.style.border = "none";
        delInpu.style.verticalAlign = "top";
        delInpu.style.marginTop = "8px";
        delInpu.style.marginBottom = "20px";
        delInpu.style.borderBottom = "2px solid #9d9d9d";
        delInpu.style.outlineStyle = "none";
        let pincodediv2 = document.createElement("div");
        let locationicon = document.createElement("span");
        locationicon.innerHTML = '<span class="material-icons">gps_fixed</span>';
        let locationicontxt = document.createElement("span");
        locationicontxt.innerText = "DETECT MY LOCATION";
        locationicontxt.style.color = "red";
        locationicontxt.style.fontSize = "12px";
        locationicontxt.style.verticalAlign = "top";
        locationicontxt.style.marginLeft = "10px";
        // locationicontxt.style.paddingTop="10px";
        pincodediv2.append(locationicon, locationicontxt);

        delInpu.onkeyup = function (e) {
            if (e.keyCode === 13) {
                console.log(e.target.value);
                if (e.target.value == 249202 || e.target.value == 12345 || e.target.value == 23456 || e.target.value == 54321) {
                    navli1.innerText = e.target.value;
                    navli1.style.color = "green";
                    console.log(navli1.innerText);
                    alert("Available to your location");
                } else {
                    alert("currently not deliver at your location");
                    li1div.style.display = "none";
                }
            }
        }
        pincodediv.append(delIcon, delInpu);

        li1div_ul.append(li1div_ul_li1, li1div_ul_li2, DeliverBtn, gap, textforDel1, textforDel2, pincodediv, pincodediv2);
        li1div.append(li1div_ul);
        navli1.append(li1div);



        let navli2 = document.createElement("li");
        navli2.innerText = "Fruits & vegetable";
        navli2.onclick = function () {
            userClick = "fruits";
            showProduct(userClick);
        }
        navli2.onmouseover = function () {
            navli2Hover();
            function navli2Hover() {
                li2div.style.display = "block";
                li2div.style.position = "absolute";
                // li2div.style.backgroundColor = "#f3f3f3";
            }
        }
        navli2.onmouseleave = function () {
            navli2Hover();
            function navli2Hover() {
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
        navli3.onclick = function () {
            userClick = "dairt";
            showProduct(userClick);
        }
        navli3.onmouseover = function () {
            navli3Hover();
            function navli3Hover() {
                li3div.style.display = "block";
                li3div.style.position = "absolute";
                // li3div.style.backgroundColor = "#f3f3f3";
            }
        }
        navli3.onmouseleave = function () {
            navli3Hover();
            function navli3Hover() {
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
        navli4.onclick = function () {
            userClick = "staples";
            showProduct(userClick);
        }
        navli4.onmouseover = function () {
            navli4Hover();
            function navli4Hover() {
                li4div.style.display = "block";
                li4div.style.position = "absolute";
                // li4div.style.backgroundColor = "#f3f3f3";
            }
        }
        navli4.onmouseleave = function () {
            navli4Hover();
            function navli4Hover() {
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
        navli5.onclick = function () {
            userClick = "male";
            showProduct(userClick);
        }
        navli5.onmouseover = function () {
            navli5Hover();
            function navli5Hover() {
                li5div.style.display = "block";
                li5div.style.position = "absolute";
                // li5div.style.backgroundColor = "#f3f3f3";
            }
        }
        navli5.onmouseleave = function () {
            navli5Hover();
            function navli5Hover() {
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
        navli6.onclick = function () {
            userClick = "female";
            showProduct(userClick);
        }
        navli6.onmouseover = function () {
            navli6Hover();
            function navli6Hover() {
                li6div.style.display = "block";
                li6div.style.position = "absolute";
                // li6div.style.backgroundColor = "#f3f3f3";
            }
        }
        navli6.onmouseleave = function () {
            navli6Hover();
            function navli6Hover() {
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
        navli7.innerText = "boys";
        navli7.onclick = function () {
            userClick = "boys";
            showProduct(userClick);
        }
        navli7.onmouseover = function () {
            navli7Hover();
            function navli7Hover() {
                li7div.style.display = "block";
                li7div.style.position = "absolute";
                // li7div.style.backgroundColor = "#f3f3f3";
            }
        }
        navli7.onmouseleave = function () {
            navli7Hover();
            function navli7Hover() {
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
        navli8.onclick = function () {
            userClick = "girls";
            showProduct(userClick);
        }
        navli8.onmouseover = function () {
            navli8Hover();
            function navli8Hover() {
                li8div.style.display = "block";
                li8div.style.position = "absolute";
                // li8div.style.backgroundColor = "#f3f3f3";
            }
        }
        navli8.onmouseleave = function () {
            navli8Hover();
            function navli8Hover() {
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
        navli9.onclick = function () {
            userClick = "snacks";
            showProduct(userClick);
        }
        navli9.onmouseover = function () {
            navli9Hover();
            function navli9Hover() {
                li9div.style.display = "block";
                li9div.style.position = "absolute";
                // li9div.style.backgroundColor = "#f3f3f3";
            }
        }
        navli9.onmouseleave = function () {
            navli9Hover();
            function navli9Hover() {
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


        navUl.append(navicon1, navli1, navli2, navli3, navli4, navli5, navli6, navli7, navli8, navli9);
        navCatagryContainer.append(navUl);
    }
    navCatagry();



    // ---------------------"Top Image Slider JS" starts here----------------------- (VK)

    let images = [
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1632570155_MUMBAI.jpg",
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1632591867_web_main_home_kitchen.jpg",
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1631039793_5.jpg",
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1629988760_web.jpg",
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1631805771_1680x320px.jpg",
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1623423157_w.jpg",
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1631124717_web.jpg",
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1630416105_healthweb.jpg",
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1628272681_web.jpg",
        "https://www.jiomart.com/images/cms/aw_rbslider/slides/1631723783_w.jpg",

    ];

    let container = document.getElementById("slideContainer");
    container.style.cursor = "pointer"
    let img = document.createElement("img");
    img.style.width = "100%";
    img.style.height = "350px";
    img.src = images[0];
    container.append(img);
    let count;

    function startSldshw() {

        count = 1;
        setInterval(function () {
            container.innerHTML = null;
            let img = document.createElement("img");
            img.style.width = "100%";
            img.style.height = "350px";
            if (count == images.length) {
                count = 0;
            }

            let buttonL = document.createElement("button");
            buttonL.innerText = "<";
            buttonL.style.fontSize = "35px";
            buttonL.style.color = "#9a9b9a";
            buttonL.className = "slideDL";
            buttonL.style.position = "absolute";
            buttonL.style.top = "38%";
            buttonL.style.height = "95px";
            buttonL.style.width = "50px";
            buttonL.style.backgroundColor = "transparent";
            buttonL.style.border = "none";
            buttonL.style.boxShadow = "6px 6px 6px 6px rgba(0, 0, 0, 0.3)";
            container.append(buttonL);
            buttonL.onclick = function () {
                slideLeft();
                function slideLeft() {
                    img.src = images[--count];
                    if (count > 0) {
                        console.log(count);
                        container.append(img);
                    }
                }
            }

            let buttonR = document.createElement("button");
            buttonR.innerText = ">";
            buttonR.className = "slideDR";
            buttonR.style.fontSize = "35px";
            buttonR.style.right = "0px";
            buttonR.style.color = "#9a9b9a"
            buttonR.className = "slideDL";
            buttonR.style.position = "absolute";
            buttonR.style.top = "38%";
            buttonR.style.height = "95px";
            buttonR.style.width = "50px";
            buttonR.style.backgroundColor = "transparent";
            buttonR.style.border = "none";
            buttonR.style.boxShadow = "6px 6px 6px 6px rgba(0, 0, 0, 0.3)";
            container.append(buttonR);
            buttonR.onclick = function () {
                slideright();
                function slideright() {
                    img.src = images[++count];
                    if (count + 1 < images.lenght) {
                        console.log(count);
                        container.append(img);
                    }
                }
            }

            if (count > -1) {
                img.src = images[count];
                container.append(img);
                count++;
            }
        },
            3500);


    }
    startSldshw();


    // ---------------------"Poster Below JS" starts here----------------------- (VK)

    function poster1() {
        let div = document.getElementById("poster1");
        div.style.width = "100%";
        div.style.marginTop = "5px";
        div.style.textAlign = "center";
        let image = document.createElement("img");
        image.style.height = "120px";
        image.style.width = "97.5%";
        image.src = "https://www.jiomart.com/images/cms/aw_rbslider/slides/1630687962_1619794516_fhd.jpg";
        div.append(image);
    }

    poster1();

    // -----------------------catagr product show  JS-----------------------------(VK)

    let PData = JSON.parse(localStorage.getItem("jioProductData"));
    let prodContainer = document.createElement("div");
    prodContainer.className = "products";
    prodContainer.setAttribute("id", "productByCatg");
    document.body.appendChild(prodContainer);

    function showProduct(userClick) {
        document.getElementById("productByCatg").innerHTML = null;
        ProdContainerIs = document.getElementById("productSpace");
        ProdContainerIs.innerHTML = null;
        let topposter = document.createElement("div");
        let posterimage = document.createElement("img");
        if (userClick == "fruits") { var i = 0; } else if (userClick == "dairt") { var i = 1; } else if (userClick == "staples") { var i = 2; } else if (userClick == "male") { var i = 3; } else if (userClick == "female") { var i = 4; } else if (userClick == "boys") { var i = 5; } else if (userClick == "girls") { var i = 6; } else if (userClick == "snacks") { var i = 7; }

        let posterimagearray = ["https://www.jiomart.com/images/category/219/fruits-vegetables-20200619.jpg",
            "https://www.jiomart.com/images/category/61/dairy-bakery-20200619.jpg",
            "https://www.jiomart.com/images/category/13/staples-20200629.jpg",
            "https://www.jiomart.com/images/category/496/men-20200831.jpg",
            "https://www.jiomart.com/images/category/493/women-20200831.jpg",
            "https://www.jiomart.com/images/category/499/boys-20200831.jpg",
            "https://www.jiomart.com/images/category/563/girls-20200831.jpg",
            "https://www.jiomart.com/images/category/10/snacks-branded-foods-20200629.jpg"
        ];

        posterimage.src = posterimagearray[i];
        posterimage.style.width = "100%";
        posterimage.style.height = "200px";
        topposter.append(posterimage);
        let prodContainer = document.createElement("div");
        prodContainer.innerHTML = null;
        prodContainer.className = "products";
        // prodContainer.style.backgroundColor="#f3f3f3";
        ProdContainerIs.appendChild(topposter);
        let filterdiv = document.createElement("div");
        // filterdiv.style.backgroundColor="red";
        let filterdiv_1 = document.createElement("div");
        filterdiv_1.style.display = "inline-block";
        filterdiv_1.innerText = "Showing Top Result";
        filterdiv_1.style.color = "#555555";
        filterdiv_1.style.fontSize = "18px";
        filterdiv_1.style.fontWeight = "500";
        filterdiv_1.style.position = "absolute";
        filterdiv_1.style.left = "20px";
        filterdiv_1.style.marginTop = "15px";

        let filterdiv_2 = document.createElement("div");
        filterdiv_2.style.display = "inline-block";
        filterdiv_2.style.position = "absolute";
        filterdiv_2.style.right = "5px";
        let text = document.createElement("p");
        text.style.display = "inline-block";
        text.innerText = "Sort By :"
        text.style.color = "#008ecc";
        let CtButton1 = document.createElement("button");
        CtButton1.style.border = "1px solid blue";
        CtButton1.onclick = function () {
            prodContainer.innerHTML = null;
            prodContainer.style.margin = "1px";
            prodContainer.style.padding = "1px"
            CtButton1.style.border = "1px solid blue";
            CtButton2.style.border = "none";
            CtButton3.style.border = "none";
            CtButton4.style.border = "none";
            sortPopu(userClick);
        }
        CtButton1.innerText = "Popularity";
        CtButton1.className = "filterButtons"
        let CtButton2 = document.createElement("button");
        CtButton2.onclick = function () {
            prodContainer.innerHTML = null;
            prodContainer.style.margin = "1px";
            prodContainer.style.padding = "1px"
            CtButton1.style.border = "none";
            CtButton2.style.border = "1px solid blue";
            CtButton3.style.border = "none";
            CtButton4.style.border = "none";
            sortHigh(userClick);
        }
        CtButton2.innerText = "High To Low";
        CtButton2.className = "filterButtons"
        let CtButton3 = document.createElement("button");
        CtButton3.onclick = function () {
            prodContainer.innerHTML = null;
            prodContainer.style.margin = "1px";
            prodContainer.style.padding = "1px"
            CtButton1.style.border = "none";
            CtButton2.style.border = "none";
            CtButton3.style.border = "1px solid blue";
            CtButton4.style.border = "none";
            sortlow(userClick);
        }
        CtButton3.innerText = "Low To High";
        CtButton3.className = "filterButtons"
        let CtButton4 = document.createElement("button");
        CtButton4.onclick = function () {
            prodContainer.innerHTML = null;
            prodContainer.style.margin = "1px";
            prodContainer.style.padding = "1px"
            CtButton1.style.border = "none";
            CtButton2.style.border = "none";
            CtButton3.style.border = "none";
            CtButton4.style.border = "1px solid blue";
            sortDis(userClick);
        }
        CtButton4.innerText = "Discount";
        CtButton4.className = "filterButtons"


        filterdiv_2.append(text, CtButton1, CtButton2, CtButton3, CtButton4)
        filterdiv.append(filterdiv_1, filterdiv_2);
        ProdContainerIs.appendChild(filterdiv);
        ProdContainerIs.appendChild(prodContainer);
        PData.forEach(function (el) {
            if (el.catagory == userClick) {
                let div = document.createElement("div");
                div.style.marginBottom = "20px";
                div.className = "difonts";
                let image = document.createElement("img");
                image.style.width = "100%";
                image.style.height = "290px";
                image.style.cursor = "pointer";
                image.className = "hover";
                image.src = el.image;
                let name = document.createElement("p");
                name.innerText = el.name;
                name.style.marginTop = "29px";
                let price = document.createElement("p");
                price.innerText = el.price;
                price.style.color = "green";
                let discount = document.createElement("span");
                discount.style.backgroundColor = "red";
                discount.style.padding = "10px";
                discount.style.borderRadius = "50%";
                discount.style.position = "relative";
                discount.style.bottom = "270px";
                discount.style.right = "70px";
                discount.style.color = "white";
                let discounttext1 = document.createElement("span");
                discounttext1.innerText = el.discount;
                let discounttext2 = document.createElement("span");
                discounttext2.innerText = "%";
                let discounttext3 = document.createElement("span");
                discounttext3.innerText = " OFF";
                discount.append(discounttext1, discounttext2, discounttext3);
                let addtocartt = document.createElement("button");
                addtocartt.style.cursor = "pointer";
                addtocartt.style.width = "80%";
                addtocartt.style.height = "10%";
                addtocartt.style.color = "white"
                addtocartt.style.border = "none";
                addtocartt.style.borderRadius = "3px";
                addtocartt.style.backgroundColor = "#008ecc";
                addtocartt.innerText = "Add To Cart";
                addtocartt.style.margin = "8px 0px";
                addtocartt.onclick = function () {
                    addtocart(el);
                }
                div.append(image, discount, name, price, addtocartt);
                prodContainer.append(div);
                console.log(el.name);
            }
        });
        console.log(userClick);
    }


    // -------------------------------catag. product filter JS-----------------------(VK)
    function sortlow(userClick) {
        let catgFilter = PData.filter(function (a) {
            if (a.catagory == userClick) {
                return a;
            }
        });
        let sortedData = catgFilter.sort(function (a, b) {
            return a.price - b.price;
        });
        filteredProduct(sortedData);
    }

    function sortHigh(userClick) {
        let catgFilter = PData.filter(function (a) {
            if (a.catagory == userClick) {
                return a;
            }
        });
        sortedData = catgFilter.sort(function (a, b) {
            return b.price - a.price;
        });
        filteredProduct(sortedData);
    }

    function sortDis(userClick) {
        let catgFilter = PData.filter(function (a) {
            if (a.catagory == userClick) {
                return a;
            }
        });
        sortedData = catgFilter.sort(function (a, b) {
            return b.discount - a.discount;
        });
        filteredProduct(sortedData);
    }

    function sortPopu(userClick) {
        let catgFilter = PData.filter(function (a) {
            if (a.catagory == userClick) {
                return a;
            }
        });
        sortedData = catgFilter.sort(function (a, b) {
            return b.popularity - a.popularity;
        });
        filteredProduct(sortedData);
    }




    function filteredProduct(sortedData) {
        prodContainer.innerHTML = null;
        console.log("on sorted function")
        sortedData.forEach(function (el) {
            let div = document.createElement("div");
            div.style.marginBottom = "20px";
            div.className = "difonts";
            let image = document.createElement("img");
            image.style.width = "100%";
            image.style.height = "290px";
            image.style.cursor = "pointer";
            image.className = "hover";
            image.src = el.image;
            let name = document.createElement("p");
            name.innerText = el.name;
            name.style.marginTop = "29px";
            let price = document.createElement("p");
            price.innerText = el.price;
            price.style.color = "green";
            let discount = document.createElement("span");
            discount.style.backgroundColor = "red";
            discount.style.padding = "10px";
            discount.style.borderRadius = "50%";
            discount.style.position = "relative";
            discount.style.bottom = "270px";
            discount.style.right = "70px";
            discount.style.color = "white";
            let discounttext1 = document.createElement("span");
            discounttext1.innerText = el.discount;
            let discounttext2 = document.createElement("span");
            discounttext2.innerText = "%";
            let discounttext3 = document.createElement("span");
            discounttext3.innerText = " OFF";
            discount.append(discounttext1, discounttext2, discounttext3);
            let addtocartt = document.createElement("button");
            addtocartt.style.cursor = "pointer";
            addtocartt.style.width = "80%";
            addtocartt.style.height = "10%";
            addtocartt.style.color = "white"
            addtocartt.style.border = "none";
            addtocartt.style.borderRadius = "3px";
            addtocartt.style.backgroundColor = "#008ecc";
            addtocartt.innerText = "Add To Cart";
            addtocartt.style.margin = "8px 0px";
            addtocartt.onclick = function () {
                addtocart(el);
            }
            div.append(image, discount, name, price, addtocartt);
            prodContainer.append(div);
            console.log(el.name);
        });
    }





    // ---------------on logo click refresh JS---------------(VK)
    function refresh() {
        console.log("he refreshed");
        window.location.href = "Index.html";

    }


    // ----------------add product to cart  JS----------------(VK)

    function addtocart(product) {
        if (localStorage.getItem("jioUserCart") === null) {
            localStorage.setItem("jioUserCart", JSON.stringify([]));
        }
        let array = JSON.parse(localStorage.getItem("jioUserCart"));
        let present  = false;

          array.forEach((pro)=>{
            if(pro.name == product.name)
            {  
                pro["quantity"]++;
                present = true;
            }
         })
       if(present)
       {
        localStorage.setItem("jioUserCart", JSON.stringify(array));
       }else{
          product["quantity"] = 1;
          array.push(product);
          localStorage.setItem("jioUserCart", JSON.stringify(array));
       }
    }

    // ----------to find searched item JS--------------------(VK)

    let Psearch = document.getElementById("searchItem");
    Psearch.onkeyup = function (e) {
        console.log("hi");
        if (e.keyCode === 13) {
            console.log(e.target.value);
            showSearchedProduct(e.target.value);

        }
    }


    // ---------------show searched product JS------------------(VK)

    function showSearchedProduct(tosearch) {
        document.getElementById("productByCatg").innerHTML = null;
        let ProdContainerIs = document.getElementById("productSpace");
        ProdContainerIs.innerHTML = null;
        let prodContainer = document.createElement("div");
        prodContainer.className = "products2";

        let filterdiv = document.createElement("div");
        // filterdiv.style.backgroundColor="red";
        let filterdiv_1 = document.createElement("div");
        filterdiv.style.marginTop = "10px";
        filterdiv_1.style.display = "inline-block";
        filterdiv_1.style.marginLeft = "10px";
        filterdiv_1.innerText = "Showing Top Result";
        filterdiv_1.style.color = "#555555";
        filterdiv_1.style.fontSize = "18px";
        filterdiv_1.style.fontWeight = "500";
        // filterdiv_1.style.position = "absolute";
        // filterdiv_1.style.left = "20px";
        filterdiv_1.style.marginTop = "15px";

        let filterdiv_2 = document.createElement("div");
        filterdiv_2.style.display = "inline-block";
        filterdiv_2.style.marginLeft = "35px";
        // filterdiv_2.style.position = "absolute";
        // filterdiv_2.style.right = "5px";
        let text = document.createElement("p");
        text.style.display = "inline-block";
        text.innerText = "Sort By :"
        text.style.color = "#008ecc";
        let CtButton1 = document.createElement("button");
        CtButton1.style.border = "1px solid blue";
        CtButton1.onclick = function () {
            prodContainer.innerHTML = null;
            prodContainer.style.margin = "1px";
            prodContainer.style.padding = "1px"
            CtButton1.style.border = "1px solid blue";
            CtButton2.style.border = "none";
            CtButton3.style.border = "none";
            CtButton4.style.border = "none";
            SearchsortPopu(tosearch);
        }
        CtButton1.innerText = "Popularity";
        CtButton1.className = "filterButtons"
        let CtButton2 = document.createElement("button");
        CtButton2.onclick = function () {
            prodContainer.innerHTML = null;
            prodContainer.style.margin = "1px";
            prodContainer.style.padding = "1px"
            CtButton1.style.border = "none";
            CtButton2.style.border = "1px solid blue";
            CtButton3.style.border = "none";
            CtButton4.style.border = "none";
            SearchsortHigh(tosearch);
        }
        CtButton2.innerText = "High To Low";
        CtButton2.className = "filterButtons"
        let CtButton3 = document.createElement("button");
        CtButton3.onclick = function () {
            prodContainer.innerHTML = null;
            prodContainer.style.margin = "1px";
            prodContainer.style.padding = "1px"
            CtButton1.style.border = "none";
            CtButton2.style.border = "none";
            CtButton3.style.border = "1px solid blue";
            CtButton4.style.border = "none";
            Searchsortlow(tosearch);
        }
        CtButton3.innerText = "Low To High";
        CtButton3.className = "filterButtons"
        let CtButton4 = document.createElement("button");
        CtButton4.onclick = function () {
            prodContainer.innerHTML = null;
            prodContainer.style.margin = "1px";
            prodContainer.style.padding = "1px"
            CtButton1.style.border = "none";
            CtButton2.style.border = "none";
            CtButton3.style.border = "none";
            CtButton4.style.border = "1px solid blue";
            SearchsortDis(tosearch);
        }
        CtButton4.innerText = "Discount";
        CtButton4.className = "filterButtons"


        filterdiv_2.append(text, CtButton1, CtButton2, CtButton3, CtButton4)
        filterdiv.append(filterdiv_1, filterdiv_2);
        ProdContainerIs.appendChild(filterdiv);
        ProdContainerIs.appendChild(prodContainer);

        // ProdContainerIs.append(prodContainer);
        let checkproduCount = 0;
        PData.forEach(function (el) {
            console.log(el.keysrch, tosearch);
            if (el.keysrch == tosearch) {
                checkproduCount = 1;
                console.log("inside");
                let div = document.createElement("div");
                div.style.marginBottom = "20px";
                div.className = "difonts";
                let image = document.createElement("img");
                image.style.width = "100%";
                image.style.height = "290px";
                image.style.cursor = "pointer";
                image.className = "hover";
                image.src = el.image;
                let name = document.createElement("p");
                name.innerText = el.name;
                name.style.marginTop = "29px";
                let price = document.createElement("p");
                price.innerText = el.price;
                price.style.color = "green";
                let discount = document.createElement("span");
                discount.style.backgroundColor = "red";
                discount.style.padding = "10px";
                discount.style.borderRadius = "50%";
                discount.style.position = "relative";
                discount.style.bottom = "270px";
                discount.style.right = "70px";
                discount.style.color = "white";
                let discounttext1 = document.createElement("span");
                discounttext1.innerText = el.discount;
                let discounttext2 = document.createElement("span");
                discounttext2.innerText = "%";
                let discounttext3 = document.createElement("span");
                discounttext3.innerText = " OFF";
                discount.append(discounttext1, discounttext2, discounttext3);
                let addtocartt = document.createElement("button");
                addtocartt.style.cursor = "pointer";
                addtocartt.style.width = "80%";
                addtocartt.style.height = "10%";
                addtocartt.style.color = "white"
                addtocartt.style.border = "none";
                addtocartt.style.borderRadius = "3px";
                addtocartt.style.backgroundColor = "#008ecc";
                addtocartt.innerText = "Add To Cart";
                addtocartt.style.margin = "8px 0px";
                addtocartt.onclick = function () {
                    addtocart(el);
                }
                div.append(image, discount, name, price, addtocartt);
                prodContainer.append(div);
                console.log(el.name);
            }
        });
        if (checkproduCount == 0) {
            console.log("not found");
            prodContainer.style.color = "red";
            prodContainer.style.fontSize = "25px";
            prodContainer.innerHTML = "0 Product found";
        }
        // console.log(userClick);
    }


    function SearchsortPopu(tosearch) {
        let catgFilter = PData.filter(function (a) {
            if (a.keysrch == tosearch) {
                return a;
            }
        });
        sortedData = catgFilter.sort(function (a, b) {
            return b.popularity - a.popularity;
        });
        filteredProduct(sortedData);
    }

    function Searchsortlow(tosearch) {
        let catgFilter = PData.filter(function (a) {
            if (a.keysrch == tosearch) {
                return a;
            }
        });
        let sortedData = catgFilter.sort(function (a, b) {
            return a.price - b.price;
        });
        filteredProduct(sortedData);
    }

    function SearchsortHigh(tosearch) {
        let catgFilter = PData.filter(function (a) {
            if (a.keysrch == tosearch) {
                return a;
            }
        });
        sortedData = catgFilter.sort(function (a, b) {
            return b.price - a.price;
        });
        filteredProduct(sortedData);
    }

    function SearchsortDis(tosearch) {
        let catgFilter = PData.filter(function (a) {
            if (a.keysrch == tosearch) {
                return a;
            }
        });
        sortedData = catgFilter.sort(function (a, b) {
            return b.discount - a.discount;
        });
        filteredProduct(sortedData);
    }


    //    ------------------------------ Top Categories start here ---------------------------------   


    let images1 = [

        {
            img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1602257194_Atta_Web.jpg",
            name: "atta",
        },
        {
            img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1598825980_1598704463_Biscuits-Cookies.jpg",
            name: "biscuits",
        },
        {
            img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1612274538_paneer.jpg",
            name: "dairy",
        },
        {
            img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1612272383_kidswear.jpg",
            name: "kids",
        },
        {
            img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1612272459_womenwear.jpg",
            name: "women",
        },
        {
            img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1606400616_Top-Categories-03.jpg",
            name: "men",
        },
        {
            img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1598824690_1598720641_Shampoos_Conditioners.jpg",
            name: "shampoos",
        },
        {
            img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1598824614_1598720607_tea.jpg",
            name: "tea",
        },
        {
            img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1604594445_womenetinic_web.jpg",
            name: "women2",
        },
        {
            img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1604594554_infant_web.jpg",
            name: "infant wear",
        },

    ];

    let parent = document.getElementById("topCategories1");
    function Categories(img) {
        img.forEach(function (categie) {
            let div1 = document.createElement("div");
            div1.setAttribute("class", "div1")
            let img1 = document.createElement("img");
            img1.src = categie.img
            img1.setAttribute("class", "img1")

            img1.onclick = function () {
                if (categie.name === "kids") {
                    window.location.href = "product.html"
                    localStorage.setItem("catog", JSON.stringify(categie.name))
                }
                if (categie.name === "atta") {
                    window.location.href = "product.html"
                    localStorage.setItem("catog", JSON.stringify(categie.name))
                }
                if (categie.name === "biscuits") {
                    window.location.href = "product.html"
                    localStorage.setItem("catog", JSON.stringify(categie.name))
                }
                if (categie.name === "dairy") {
                    window.location.href = "product.html"
                    localStorage.setItem("catog", JSON.stringify(categie.name))
                }
                if (categie.name === "women") {
                    window.location.href = "product.html"
                    localStorage.setItem("catog", JSON.stringify(categie.name))
                }
                if (categie.name === "women2") {
                    window.location.href = "product.html"
                    localStorage.setItem("catog", JSON.stringify(categie.name))
                }
                if (categie.name === "men") {
                    window.location.href = "product.html"
                    localStorage.setItem("catog", JSON.stringify(categie.name))
                }
                if (categie.name === "shampoos") {
                    window.location.href = "product.html"
                    localStorage.setItem("catog", JSON.stringify(categie.name))
                }
                if (categie.name === "tea") {
                    window.location.href = "product.html"
                    localStorage.setItem("catog", JSON.stringify(categie.name))
                }
                if (categie.name === "infant wear") {
                    window.location.href = "product.html"
                    localStorage.setItem("catog", JSON.stringify(categie.name))
                }
            }
            div1.append(img1);
            parent.append(div1)

        });
    }
    Categories(images1);

    //    ------------------------------ TOP DEALS start here ---------------------------------  
    let data2 = [
        {
            img: "https://www.jiomart.com/images/product/150x150/490008739/parle-g-original-glucose-biscuits-800-g-0-20210115.jpg",
            name: "Parle-G Biscuits 800 g ",
            price: "67.50",
            mrp: "M.R.P: 75.00",
            save: "You Save: 7.50",
        },
        {
            img: "https://www.jiomart.com/images/product/150x150/490003834/maggi-2-minute-masala-instant-noodles-560-g-0-20210811.jpg",
            name: "Maggi Noodles 560g ",
            price: "79.00",
            mrp: "M.R.P: 96.00",
            save: "You Save: 17.00",
        },
        {
            img: "https://www.jiomart.com/images/product/150x150/590108360/sugar-m-2-kg-0-20210316.jpg",
            name: "Sugar clear (M) 2 kg",
            price: " 81.00",
            mrp: "M.R.P:  95.00",
            save: "You Save:  14.00",
        },
        {
            img: "https://www.jiomart.com/images/product/150x150/491349660/chakki-atta-10-kg-0-20210301.jpg",
            name: "Chakki  gold Atta 10 kg",
            price: "285.00",
            mrp: "M.R.P: 375.00",
            save: "You Save: 90.00",
        },
        {
            img: "https://www.jiomart.com/images/product/420x420/490915877/lux-rose-vitamin-e-soft-glowing-skin-soap-bar-150-g-pack-of-3-0-20210818.jpg",
            name: "Lux Rose 150g (Pack of 3)",
            price: "96.00",
            mrp: " M.R.P: 149.00",
            save: "You Save:  53.00",
        },
        {
            img: "https://www.jiomart.com/images/product/420x420/491215527/whisper-ultra-wings-sanitary-napkin-with-wings-xl-44-pads-0-20210112.jpg",
            name: "Whisper Ultra  (XL+) 44 pads",
            price: " 339.00",
            mrp: " M.R.P: 449.00",
            save: "You Save: 110.00",
        },
        {
            img: "https://www.jiomart.com/images/product/150x150/490672482/dabur-red-toothpaste-200-100-g-with-free-toothbrush-0-20210514.jpg",
            name: "Dabur Red Toothpaste 300 g ",
            price: "103.34",
            mrp: "M.R.P:  155.00",
            save: "You Save:  51.66",
        },
        {
            img: "https://www.jiomart.com/images/product/420x420/491441280/surf-excel-matic-top-load-detergent-powder-4-kg-get-extra-2-kg-free-0-20210125.jpg",
            name: "Surf Excel  4 kg ( Extra 2 kg Free)",
            price: " 869.00",
            mrp: "M.R.P: 1100.00",
            save: "You Save:  231.00",
        },
        {
            img: "https://www.jiomart.com/images/product/150x150/491215021/gala-no-dust-broom-xl-0-20210825.jpg",
            name: "Gala No Dust Broom (XL)",
            price: " 159.00",
            mrp: " M.R.P: 200.00",
            save: "You Save: 41.00",
        },
        {
            img: "https://www.jiomart.com/images/product/150x150/490010199/amul-cheese-block-1-kg-carton-0-20210324.jpg",
            name: "Amul Cheese Block 1 kg (Carton)",
            price: " 437.00",
            mrp: " M.R.P: 470.00",
            save: "You Save: 33.00",
        },

    ];

    let contain = document.getElementById("topdeals2");

    function showProductt(d) {
        d.forEach(function (product) {

            let div2 = document.createElement("div");
            div2.setAttribute("class", "div2")

            let div2_img = document.createElement("div")
            div2_img.setAttribute("class", "div2_img")

            let div2_text = document.createElement("div")
            div2_text.setAttribute("class", "div2_text")

            let div2_btn = document.createElement("div")
            div2_btn.setAttribute("class", "div2_btn")

            let img2 = document.createElement("img");
            img2.src = product.img
            img2.setAttribute("class", "img2")

            let price2 = document.createElement("p");
            price2.textContent = product.price;
            price2.style.fontSize = "16px"
            price2.style.fontWeight = "560"



            let name2 = document.createElement("p");
            name2.textContent = product.name;
            name2.style.fontSize = "16px"
            name2.style.fontWeight = "560"

            let mrp2 = document.createElement("p")
            mrp2.textContent = product.mrp

            let save2 = document.createElement("p")
            save2.textContent = product.save
            save2.style.color = "green"

            let btn2 = document.createElement("button");
            btn2.innerText = "Add to Cart +";
            btn2.setAttribute("class", "btn2")

            btn2.onclick = function () {
                addtocart(product)
            }
            div2_img.append(img2)
            div2_text.append(name2, price2, mrp2, save2)
            div2_btn.append(btn2)
            div2.append(div2_img, div2_text, div2_btn)
            contain.append(div2)
        });
    }
    showProductt(data2);

    //    ------------------------------ Offers on daily essentials start here ---------------------------------  


    let Essentials = [
        {
            img: "https://www.jiomart.com/images/category/17/thumb/dals-pulses-20200714.png",
            name: "Dals & Pulses",
        },
        {
            img: "https://www.jiomart.com/images/category/14/thumb/0-14.png",
            name: "Atta, Flours & Sooji",
        },
        {
            img: "https://www.jiomart.com/images/category/18/thumb/0-18.png",
            name: "Edible Oils",
        },
        {
            img: "https://www.jiomart.com/images/category/20/thumb/0-20.png",
            name: "Salt, Sugar & Jaggery",
        },
        {
            img: "https://www.jiomart.com/images/category/119/thumb/bath-hand-wash-20200714.png",
            name: "Bath & Hand Wash",
        },
        {
            img: "https://www.jiomart.com/images/category/7/thumb/toothpaste-20200520.png",
            name: "Toothpaste",
        },
        {
            img: "https://www.jiomart.com/images/category/191/thumb/noodle-pasta-vermicelli-20200603.png",
            name: "Noodle, Pasta, Vermicelli",
        },
        {
            img: "https://www.jiomart.com/images/category/44/thumb/0-44.png",
            name: "Biscuits & Cookies",
        },
    ];
    let essential = document.getElementById("dailyEssentials3")

    function DailyEssentials(ess) {
        ess.forEach(function (Essentialfun) {
            let div3 = document.createElement("div");
            div3.setAttribute("class", "div3")

            let div3_img = document.createElement("div");
            div3_img.setAttribute("class", "div3_img")

            let img3 = document.createElement("img");
            img3.src = Essentialfun.img
            img3.setAttribute("class", "img3")

            let name3 = document.createElement("p")
            name3.textContent = Essentialfun.name
            div3_img.append(img3, name3);
            div3.append(div3_img)
            essential.append(div3)
        });
    }
    DailyEssentials(Essentials);

    //    ------------------------------ Normal Poster start here ---------------------------------  


    let posterimg = [
        {
            img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1632332387_Kelloggs-Range_Jio_Mart_600x350.jpg",
        },
        {
            img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1632404550_colwm.jpg",
        },
        {
            img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1632404398_fwm.jpg",
        },
        {
            img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1629988766_webmini.jpg",
        },
        {
            img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1623423184_wm.jpg",
        },
        {
            img: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1607437940_buybig_webmini.jpg",
        },

    ];
    let martposter = document.getElementById("poster5")
    function posterShow(d) {
        d.forEach(function (poster) {
            let div5 = document.createElement("div");
            div5.setAttribute("class", "div5")

            let img5 = document.createElement("img");
            img5.src = poster.img
            img5.setAttribute("class", "img5")


            div5.append(img5)
            martposter.append(div5)
        });
    };
    posterShow(posterimg)

    function addtoCart(product) {

        if (localStorage.getItem("jioUserCart") === null) {
            localStorage.setItem("jioUserCart", JSON.stringify([]));
        }
        let array = JSON.parse(localStorage.getItem("jioUserCart"));
        array.push(product);
        localStorage.setItem("jioUserCart", JSON.stringify(array));
    }

    if ((localStorage.getItem("signedIUser") != null) && (JSON.parse(localStorage.getItem("signedIUser")) != {})) {
        
        
        let inUser = document.getElementById("in");
        let Name = (JSON.parse(localStorage.getItem("signedIUser")))["Name"];


        let s = document.getElementById('signU')
        s.innerHTML = "";

        inUser.onclick = ()=>{
            let arr=[];
             let ddl2 = document.getElementById('ddl2')
            if(ddl2.textContent == '')
            {
                ddl2.textContent = 'SIGN OUT'
               ddl2.style.padding = '5px'
               ddl2.style.backgroundColor = 'indigo'
               ddl2.onclick = ()=>{
                 localStorage.setItem('signedIUser',null);
                 localStorage.setItem("jioUserCart", JSON.stringify(arr));
                 window.location.href = 'Index.html'
               }
            }else{
                ddl2.textContent = ''
                ddl2.style.padding = '0'
               ddl2.style.backgroundColor = 'none'
            }
        }

        inUser.setAttribute("id", "loggedIn");
        inUser.textContent = "Hello! " + Name;
    }

    function sOut() {
        let outDiv = document.getElementById("in");
        let ldiv = document.getElementById("outDiv");
        let obtn = document.createElement("button");

        // let ele = ldiv.children[0];
        // ldiv.removeChild(ele);
        ldiv.innerHTML = "";

        localStorage.setItem("signedIUser", {})
        window.location.href = "Index.html";
    }


    let productData=[
        {
            name:"Slim Fit Flat-Front Chinos",
            price:"689",
            catagory:"male",
            image:"https://www.jiomart.com/images/product/240x300/441102019_green/slim-fit-flat-front-chinos-model-441102019_green-0-202010240021.jpg",
            rating:"4.3",
            keysrch:"pant",
            popularity:"10",
            discount:"10",
        },
        {
            name:"Slim Fit Flat-Front Chinos",
            price:"689",
            catagory:"male",
            image:"https://www.jiomart.com/images/product/240x300/441102019_medgrey/slim-fit-flat-front-chinos-model-441102019_medgrey-0-202010222105.jpg",
            rating:"4.2",
            keysrch:"pant",
            popularity:"9",
            discount:"20",
        },
        {
            name:"Slim Fit Shirt with Brand Collar",
            price:"1200",
            catagory:"male",
            image:"https://www.jiomart.com/images/product/240x300/441120043_rust/slim-fit-shirt-with-band-collar-model-441120043_rust-0-202106241239.jpg",
            rating:"4.1",
            keysrch:"shirt",
            popularity:"8",
            discount:"20",
        },
        {
            name:"Slim Fit Shirt with Brand Collar",
            price:"1100",
            catagory:"male",
            image:"https://www.jiomart.com/images/product/240x300/441107266_white/typographic-print-crew-neck-t-shirt-model-441107266_white-0-202104150835.jpg",
            rating:"4.1",
            keysrch:"shirt",
            popularity:"8",
            discount:"30",
        },
        {
            name:"Pack of 2 Mid-Rise Cotton Briefs",
            price:"300",
            catagory:"male",
            image:"https://www.jiomart.com/images/product/600x750/440974608_greymelange/pack-of-2-mid-rise-cotton-briefs-model-440974608_greymelange-0-202104081214.jpg",
            rating:"4.1",
            keysrch:"Briefs",
            popularity:"7",
            discount:"30",
        },
        {
            name:"Pack of 2 Logo Ankle-Length Socks",
            price:"200",
            catagory:"male",
            image:"https://www.jiomart.com/images/product/600x750/441150138_multi/pack-of-2-logo-ankle-length-socks-model-441150138_multi-0-202102070235.jpg",
            rating:"4.0",
            keysrch:"socks",
            popularity:"7",
            discount:"30",
        },
        {
            name:"Panelled Track Pants",
            price:"478",
            catagory:"male",
            image:"https://www.jiomart.com/images/product/600x750/440971924_jetblack/panelled-track-pants-with-elasticated-drawstring-waist-model-440971924_jetblack-0-202104072114.jpg",
            rating:"4.2",
            keysrch:"Pants",
            keysrch:"pant",
            popularity:"7",
            discount:"20",
        },
        {
            name:"Polo T-shirt with Signature",
            price:"450",
            catagory:"male",
            image:"https://www.jiomart.com/images/product/600x750/440762638_green/polo-t-shirt-with-signature-branding-model-440762638_green-0-202104090220.jpg",
            rating:"4.1",
            keysrch:"tshirt",
            popularity:"8",
            discount:"20",
        },
        {
            name:"Polo T-shirt with Signature",
            price:"399",
            catagory:"male",
            image:"https://www.jiomart.com/images/product/600x750/441118347_mustard/striped-polo-t-shirt-with-cutaway-collar-model-441118347_mustard-0-202104151137.jpg",
            rating:"3.9",
            keysrch:"tshirt",
            popularity:"8",
            discount:"20",
        },
        {
            name:"Colourblock Baseball Cap",
            price:"340",
            catagory:"male",
            image:"https://www.jiomart.com/images/product/600x750/441117487_maroon/striped-polo-t-shirt-with-vented-hemline-model-441117487_maroon-0-202104151415.jpg",
            rating:"4.3",
            keysrch:"cap",
            popularity:"8",
            discount:"30",
        },
        {
            name:"Genuine Leather Belt",
            price:"499",
            catagory:"male",
            image:"https://www.jiomart.com/images/product/600x750/441028040_brown/genuine-leather-belt-with-buckle-closure-model-441028040_brown-0-202010232150.jpg",
            rating:"4.2",
            keysrch:"belt",
            popularity:"8",
            discount:"30",
        },
        {
            name:"Checked Cotton Boxers",
            price:"440",
            catagory:"male",
            image:"https://www.jiomart.com/images/product/600x750/441025505_navy/checked-cotton-boxers-model-441025505_navy-0-202104081824.jpg",
            rating:"4.3",
            keysrch:"boxers",
            popularity:"8",
            discount:"30",
        },



        {
            name:"Ankle-Length Leggings",
            price:"599",
            catagory:"female",
            image:"https://www.jiomart.com/images/product/600x750/441020957_white/ankle-length-leggings-with-elasticated-waist-model-441020957_white-0-202104071237.jpg",
            rating:"4.3",
            keysrch:"laggings",
            popularity:"8",
            discount:"30",
        },
        {
            name:"Printed Straight Kurta",
            price:"699",
            catagory:"female",
            image:"https://www.jiomart.com/images/product/600x750/441128063_aqua/printed-straight-kurta-with-mandarin-collar-model-441128063_aqua-0-202107061919.jpg",
            rating:"4.4",
            keysrch:"kurta",
            popularity:"9",
            discount:"40",
        },
        {
            name:"Printed Sleeveless Kurta",
            price:"799",
            catagory:"female",
            image:"https://www.jiomart.com/images/product/600x750/441120973_jetblack/printed-sleeveless-straight-kurta-model-441120973_jetblack-0-202104272004.jpg",
            rating:"4.3",
            keysrch:"kurta",
            popularity:"10",
            discount:"40",
        },
        {
            name:"Geometric Print Straight Kurta",
            price:"699",
            catagory:"female",
            image:"https://www.jiomart.com/images/product/600x750/441125629_peach/geometric-print-straight-kurta-model-441125629_peach-0-202106031418.jpg",
            rating:"4.2",
            keysrch:"kurta",
            popularity:"9",
            discount:"30",
        },
        {
            name:"Ikat Print Sleeveless",
            price:"899",
            catagory:"female",
            image:"https://www.jiomart.com/images/product/600x750/441125617_navy/ikat-print-sleeveless-straight-kurta-model-441125617_navy-0-202106141755.jpg",
            rating:"4.1",
            keysrch:"kurta",
            popularity:"9",
            discount:"30",
        },
        {
            name:"Printed Straight Kurta",
            price:"899",
            catagory:"female",
            image:"https://www.jiomart.com/images/product/600x750/441119595_magntafusha/printed-straight-kurta-model-441119595_magntafusha-0-202103041113.jpg",
            rating:"4.1",
            keysrch:"kurta",
            popularity:"9",
            discount:"30",
        },
        {
            name:"Track Pants with Contrast",
            price:"899",
            catagory:"female",
            image:"https://www.jiomart.com/images/product/600x750/441001504_olive/track-pants-with-contrast-side-taping-model-441001504_olive-0-202105171644.jpg",
            rating:"4.0",
            keysrch:"pant",
            popularity:"9",
            discount:"30",
        },
        {
            name:"Cami Bra with Adjustable",
            price:"499",
            catagory:"female",
            image:"https://www.jiomart.com/images/product/600x750/441112612_greymelange/cami-bra-with-adjustable-straps-model-441112612_greymelange-0-202012161246.jpg",
            rating:"4.3",
            keysrch:"bra",
            popularity:"9",
            discount:"30",
        },
        {
            name:"Cami Bra with Adjustable",
            price:"549",
            catagory:"female",
            image:"https://www.jiomart.com/images/product/600x750/441112612_ltpink/cami-bra-with-adjustable-straps-model-441112612_ltpink-0-202012160134.jpg",
            rating:"4.5",
            keysrch:"bra",
            popularity:"9",
            discount:"20",
        },
        {
            name:"Pooh Print Face Mask",
            price:"59",
            catagory:"female",
            image:"https://www.jiomart.com/images/product/600x750/441078203_yellow/pooh-print-face-mask-model-441078203_yellow-0-202010222052.jpg",
            rating:"4.5",
            keysrch:"mask",
            popularity:"9",
            discount:"20",
        },
        {
            name:"Women Parijata Art Silk ",
            price:"989",
            catagory:"female",
            image:"https://www.jiomart.com/images/product/600x750/460752790_purple/printed-straight-kurta-with-crushed-dupatta-model-460752790_purple-0-202104061218.jpg",
            rating:"4.8",
            keysrch:"kurta",
            popularity:"10",
            discount:"20",
        },
        {
            name:"Printed Pyjamas with Insert",
            price:"559",
            catagory:"female",
            image:"https://www.jiomart.com/images/product/600x750/441120602_blackcharcoal/printed-pyjamas-with-insert-pockets-model-441120602_blackcharcoal-0-202107061237.jpg",
            rating:"4.5",
            keysrch:"pant",
            popularity:"9",
            discount:"20",
        },



        {
            name:"Sweet Potato 500 g",
            price:"32",
            catagory:"fruits",
            image:"https://www.jiomart.com/images/product/420x420/590000138/sweet-potato-500-g-0-20201118.jpg",
            rating:"4.5",
            keysrch:"Potato",
            popularity:"9",
            discount:"10",
        },
        {
            name:"Apple Shimla 4 pcs",
            price:"102",
            catagory:"fruits",
            image:"https://www.jiomart.com/images/product/420x420/590428272/apple-shimla-4-pcs-approx-550-g-650-g-0-20210812.jpg",
            rating:"4.5",
            keysrch:"Apple",
            popularity:"9",
            discount:"10",
        },

        {
            name:"Amulya Dairy Whitener 500 g",
            price:"195",
            catagory:"dairt",
            image:"https://www.jiomart.com/images/product/420x420/490011303/amulya-dairy-whitener-500-g-pouch-0-20210325.jpg",
            rating:"4.3",
            keysrch:"Dairy",
            popularity:"8",
            discount:"20",
        },
        {
            name:"Britannia Pizza Cheese",
            price:"205",
            catagory:"dairt",
            image:"https://www.jiomart.com/images/product/420x420/590335038/britannia-blend-and-diced-pizza-cheese-500-g-pouch-0-20210708.jpg",
            rating:"4.4",
            keysrch:"Pizza",
            popularity:"9",
            discount:"15",
        },


        {
            name:"Lion DeSeeded Dates 200 g",
            price:"35",
            catagory:"staples",
            image:"https://www.jiomart.com/images/product/420x420/490000029/lion-seedless-dates-200-g-0-20200805.jpg",
            rating:"4.7",
            keysrch:"Dates",
            popularity:"8",
            discount:"20",
        },
        {
            name:"Good Life Sugar (M) 1 kg",
            price:"47",
            catagory:"staples",
            image:"https://www.jiomart.com/images/product/420x420/491551493/loose-sugar-m-1-kg-0-20210304.jpg",
            rating:"4.5",
            keysrch:"Sugar",
            popularity:"9",
            discount:"10",
        },


        {
            name:"Textured Jogger Pants",
            price:"374",
            catagory:"boys",
            image:"https://www.jiomart.com/images/product/600x750/440995277_olive/textured-jogger-pants-with-elasticated-drawstring-waistband-model-440995277_olive-0-202104062228.jpg",
            rating:"4.7",
            keysrch:"pant",
            popularity:"9",
            discount:"15",
        },
        {
            name:"Mid-Rise Relaxed Fit Jeans",
            price:"399",
            catagory:"boys",
            image:"https://www.jiomart.com/images/product/600x750/440948175_mediumblue/mid-rise-relaxed-fit-jeans-model-440948175_mediumblue-0-202104061709.jpg",
            rating:"4.4",
            keysrch:"jeans",
            popularity:"10",
            discount:"10",
        },


        {
            name:"Tulle Fit & Flare Dress",
            price:"499",
            catagory:"girls",
            image:"https://www.jiomart.com/images/product/600x750/441119634_ltblue/tulle-fit-flare-dress-with-sequined-panel-model-441119634_ltblue-0-202104021355.jpg",
            rating:"4.4",
            keysrch:"frock",
            popularity:"10",
            discount:"20",
        },
        {
            name:"Graphic Print Twofer Dungaree",
            price:"599",
            catagory:"girls",
            image:"https://www.jiomart.com/images/product/600x750/441116858_navyblue/graphic-print-twofer-dungaree-dress-with-ruffled-panels-model-441116858_navyblue-0-202103242139.jpg",
            rating:"4.2",
            keysrch:"frock",
            popularity:"9",
            discount:"30",
        },


        {
            name:"Maggi 2-Minute Masala",
            price:"77",
            catagory:"snacks",
            image:"https://www.jiomart.com/images/product/420x420/490003834/maggi-2-minute-masala-instant-noodles-560-g-0-20210811.jpg",
            rating:"4.6",
            keysrch:"maggi",
            popularity:"10",
            discount:"10",
        },
        {
            name:"Britannia Good Day",
            price:"16",
            catagory:"snacks",
            image:"https://www.jiomart.com/images/product/420x420/491161296/britannia-good-day-cashew-cookies-100-g-0-20210819.jpg",
            rating:"4.7",
            keysrch:"biscuit",
            popularity:"10",
            discount:"12",
        },
    ]

    // -------------adding data to local server------------------

    if (localStorage.getItem("jioProductData") === null) {
        localStorage.setItem("jioProductData", JSON.stringify([]));
    }

    let myProduct = JSON.parse(localStorage.getItem("jioProductData"));
    if (myProduct.length == productData.length) {
        // console.log("data already added");
    } else {
        productData.forEach(function (el) {
            myProduct.push(el);
            localStorage.setItem("jioProductData", JSON.stringify(myProduct));
        })
    }