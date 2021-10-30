
// ---------------------"Navbar JS" starts here----------------------- 

function goTOsignIn() {
  window.location.href = "signIn.html";
}
function goTocart() {
  window.location.href = "cart.html";
}
function refresh() {
  window.location.href = "Index.html";
}


let PData = JSON.parse(localStorage.getItem("jioProductData"));
// ---------------------"Navbar Catagory JS" starts here----------------------- 



let images = [
  "https://www.jiomart.com/images/category/26/atta-flours-sooji-20200704.jpg",
  "https://tse3.mm.bing.net/th?id=OIP.6ygsdMEznChIcWQ6kJOjVgHaEK&pid=Api",
  "https://tse4.mm.bing.net/th?id=OIP.9CFyD2EQdQF3M1pEv5WW8gHaD4&pid=Api",
  "https://tse3.mm.bing.net/th?id=OIP.eHC-C4YoG1fJG0NSvYzd2gHaD5&pid=Api",
];


let productContainer = document.getElementById("productSlide");
let interval;

function productSlideshow() {

  let counter = 0;

  interval = setInterval(function () {
    productContainer.innerHTML = null;

    if (counter === images.length) {
      counter = 0;
    }
    let divpro = document.createElement("div")
    divpro.setAttribute("class", "divpro")
    let imgpro = document.createElement("img");
    imgpro.src = images[counter];
    imgpro.setAttribute("class", "imgpro")

    divpro.append(imgpro)
    productContainer.append(divpro);

    counter = counter + 1;
  }, 2000);
}
productSlideshow();

let proarr = [
  {
    img: "https://www.jiomart.com/images/product/150x150/491349660/chakki-atta-10-kg-0-20210301.jpg",
    price: "285.00",
    name: "Chakki Atta 10 kg",
    cate: "atta"
  },
  {
    img: "https://www.jiomart.com/images/product/150x150/490010459/bhagirathi-modak-peeth-500-g-0-20210301.jpg",
    price: "36.00",
    name: "Bhagirathi Modak Peeth 500 g",
    cate: "atta"
  },
  {
    img: "https://www.jiomart.com/images/product/150x150/590514179/nutrapoorna-sugandhi-modak-atta-500-g-0-20210831.jpg",
    price: "25.00",
    name: "Nutrapoorna Sugandhi Modak Atta 500 g",
    cate: "atta"
  },
  {
    img: "https://www.jiomart.com/images/product/150x150/491458273/good-life-mp-wheat-chakki-atta-10-kg-0-20201117.jpg",
    price: "325.00",
    name: "Good Life MP Wheat Chakki Atta 10 kg",
    cate: "atta"
  },
  {
    img: "https://www.jiomart.com/images/product/150x150/590048963/gajanann-foods-rice-flour-500-g-0-20201030.jpg",
    price: "27.00",
    name: "Gajanann Foods Rice Flour 500 g",
    cate: "atta"
  },
  {
    img: "https://www.jiomart.com/images/product/150x150/590108357/nutrapoorna-kuti-kuttu-atta-200-g-0-20201215.jpg",
    price: "43.00",
    name: "Nutrapoorna Kuti / Kuttu Atta 200 g",
    cate: "atta"
  },
  {
    img: "https://www.jiomart.com/images/product/150x150/491458272/good-life-mp-wheat-chakki-atta-5-kg-0-20201117.jpg",
    price: "159.00",
    name: "Good Life MP Wheat Chakki Atta 5 kg",
    cate: "atta"
  },

  {
    img: "https://www.jiomart.com/images/product/150x150/491208934/rajdhani-chana-sattu-500-g-0-20210304.jpg",
    price: "59.00",
    name: "Rajdhani Chana Sattu 500 g",
    cate: "atta"
  },
  {
    img: "https://www.jiomart.com/images/product/150x150/491349660/chakki-atta-10-kg-0-20210301.jpg",
    price: "285.00",
    name: "Chakki Atta 10 kg",
    cate: "atta"
  },
  {
    img: "https://www.jiomart.com/images/product/150x150/490010459/bhagirathi-modak-peeth-500-g-0-20210301.jpg",
    price: "36.00",
    name: "Bhagirathi Modak Peeth 500 g",
    cate: "atta"
  },
  {
    img: "https://www.jiomart.com/images/product/150x150/590514179/nutrapoorna-sugandhi-modak-atta-500-g-0-20210831.jpg",
    price: "25.00",
    name: "Nutrapoorna Sugandhi Modak Atta 500 g",
    cate: "atta"
  },
  {
    img: "https://www.jiomart.com/images/product/150x150/491458273/good-life-mp-wheat-chakki-atta-10-kg-0-20201117.jpg",
    price: "325.00",
    name: "Good Life MP Wheat Chakki Atta 10 kg",
    cate: "atta"
  },
  {
    img: "https://www.jiomart.com/images/product/150x150/590048963/gajanann-foods-rice-flour-500-g-0-20201030.jpg",
    price: "27.00",
    name: "Gajanann Foods Rice Flour 500 g",
    cate: "atta"
  },


  {
    img: "https://www.jiomart.com/images/product/150x150/491161296/britannia-good-day-cashew-cookies-100-g-0-20210819.jpg",
    price: "16.00",
    name: "Britannia Good Day  100 g",
    cate: "biscuits"
  },
  {
    img: " https://www.jiomart.com/images/product/150x150/490007701/britannia-nutrichoice-hi-fibre-digestive-biscuits-100-g-0-20210831.jpg",
    price: "21.00",
    name: "Britannia NutriChoice   100 g",
    cate: "biscuits"
  },
  {
    img: "https://www.jiomart.com/images/product/150x150/490005349/britannia-bourbon-the-original-cream-biscuits-150-g-0-20210902.jpg ",
    price: "22",
    name: "Britannia Bourbon  150 g",
    cate: "biscuits"
  },
  {
    img: "https://www.jiomart.com/images/product/150x150/590126857/sunfeast-dark-fantasy-choco-chip-biscuits-350-g-0-20210217.jpg ",
    price: "75.00",
    name: "Sunfeast Dark   350 g",
    cate: "biscuits"
  },
  {
    img: " https://www.jiomart.com/images/product/150x150/490008739/parle-g-original-glucose-biscuits-800-g-0-20210115.jpg",
    price: "67.00",
    name: "Parle-G   Glucose  800 g",
    cate: "biscuits"
  },
  {
    img: " https://www.jiomart.com/images/product/150x150/491439006/parle-monaco-classic-regular-salted-biscuits-400-g-0-20201118.jpg",
    price: "53.00",
    name: "Parle Monaco Classic   400 g",
    cate: "biscuits"
  },
  {
    img: "https://www.jiomart.com/images/product/150x150/590320934/open-secret-assorted-nutty-cookies-75-g-0-20210602.jpg ",
    price: "70.00",
    name: "  Assorted Nutty Cookies 75 g",
    cate: "biscuits"
  },
  {
    img: "https://www.jiomart.com/images/product/150x150/590320932/open-secret-choco-almond-nutty-cookies-75-g-0-20210604.jpg ",
    price: "70.00",
    name: " Choco Almond Nutty Cookies 75 g",
    cate: "biscuits"
  },
  {
    img: "https://www.jiomart.com/images/product/150x150/590320933/open-secret-white-choco-cashew-nutty-cookies-75-g-0-20210604.jpg ",
    price: "70.00",
    name: " Choco Cashew Nutty Cookies 75 g",
    cate: "biscuits"
  },
  {
    img: "https://www.jiomart.com/images/product/150x150/491439007/parle-krack-jack-crackers-400-g-0-20210915.jpg ",
    price: "53.00",
    name: "Parle Krack Jack Crackers 400 g",
    cate: "biscuits"
  },
  {
    img: " https://www.jiomart.com/images/product/150x150/491264336/britannia-classic-little-hearts-biscuits-75-g-0-20210804.jpg",
    price: "16.00",
    name: "Britannia Classic Little Hearts Biscuits 75 g",
    cate: "biscuits"
  },
  {
    img: "https://www.jiomart.com/images/product/150x150/490762566/sunfeast-dark-fantasy-choco-fills-cookies-75-g-0-20210831.jpg ",
    price: "30.00",
    name: "Sunfeast Dark Fantasy Choco Fills Cookies 75 g",
    cate: "biscuits"
  },

  {
    img: "https://www.jiomart.com/images/product/150x150/490011303/amulya-dairy-whitener-500-g-pouch-0-20210325.jpg",
    price: "195.00",
    name: "Amulya Dairy Whitner500 g  ",
    cate: "dairy"
  },
  {
    img: "https://www.jiomart.com/images/product/150x150/490001530/amulya-dairy-whitener-1-kg-pouch-0-20210831.jpg",
    price: "375.00",
    name: "Amulya Dairy Whitener 1 kg (Pouch)",
    cate: "dairy"
  },
  {
    img: "https://www.jiomart.com/images/product/150x150/590034287/yakult-probiotic-drink-325-ml-bottle-0-20210701.jpg ",
    price: "70.00",
    name: "Yakult Probiotic Drink 325 ml  ",
    cate: "dairy"
  },
  {
    img: "https://www.jiomart.com/images/product/150x150/490983577/amul-mithai-mate-sweetened-condensed-milk-200-g-tin-0-20210702.jpg ",
    price: "56.00",
    name: "Amul Mithai Mate  Milk 200 g  ",
    cate: "dairy"
  },
  {
    img: " https://www.jiomart.com/images/product/150x150/490001537/nestle-milkmaid-sweetened-condensed-milk-400-g-tin-0-20210316.jpg",
    price: "115.00",
    name: "Nestle Milkmaid   Milk 400 g  ",
    cate: "dairy"
  },
  {
    img: "https://www.jiomart.com/images/product/150x150/490001538/amul-mithai-mate-sweetened-condensed-milk-400-g-tin-0-20210701.jpg ",
    price: "105.00",
    name: "Amul Mithai   Milk 400 g  ",
    cate: "dairy"
  },
  {
    img: "https://www.jiomart.com/images/product/150x150/590124556/mother-dairy-masala-chach-200-ml-tetra-pak-0-20210108.jpg ",
    price: "11.00",
    name: "  Dairy Masala Chach 200 ml",
    cate: "dairy"
  },
  {
    img: " https://www.jiomart.com/images/product/150x150/491184305/mother-dairy-cream-200-ml-tetra-pak-0-20210316.jpg",
    price: "49.00",
    name: "  Dairy Cream 200 ml ",
    cate: "dairy"
  },
  {
    img: "https://www.jiomart.com/images/product/150x150/590034288/yakult-light-probiotic-drink-325-ml-bottle-0-20210705.jpg ",
    price: "85",
    name: "Yakult Light  Drink 325 ml (Bottle)",
    cate: "dairy"
  },
  {
    img: "https://www.jiomart.com/images/product/150x150/490351208/sofit-chocolate-flavoured-soya-milk-1-l-tetra-pak-0-20210312.jpg ",
    price: "123.00",
    name: "Sofit Chocolate  Milk 1 L",
    cate: "dairy"
  },
  {
    img: " https://www.jiomart.com/images/product/150x150/590041375/mother-dairy-sweetened-lassi-200-ml-bottle-0-20210223.jpg",
    price: "19.00",
    name: "Mother Dairy Lassi 200 ml (Bottle)",
    cate: "dairy"
  },
  {
    img: " https://www.jiomart.com/images/product/150x150/491584166/epigamia-alphonso-mango-greek-yogurt-smoothie-200-ml-bottle-0-20210326.jpg",
    price: "40.00",
    name: "Epigamia Alphonso Mango 200 ml (Bottle)",
    cate: "dairy"
  },

  {
    img: "https://www.jiomart.com/images/product/330x410/441023881_navy/printed-straight-kurta-with-mandarin-collar-model-441023881_navy-0-202104072114.jpg",
    price: "240.00",
    name: "printed kurta",
    cate: "women"
  },
  {
    img: "https://www.jiomart.com/images/product/330x410/441070560_magntafusha/printed-straight-kurta-with-mandarin-collar-model-441070560_magntafusha-0-202104070930.jpg ",
    price: "314.00",
    name: "printed kurta",
    cate: "women2"
  },
  {
    img: "https://www.jiomart.com/images/product/330x410/441020957_black/ankle-length-leggings-with-elasticated-waist-model-441020957_black-0-202104071852.jpg ",
    price: "319.00",
    name: "ankle-length leggings",
    cate: "women2"
  },
  {
    img: "https://www.jiomart.com/images/product/330x410/441052822_aqua/floral-print-straight-kurta-with-band-collar-model-441052822_aqua-0-202104090257.jpg ",
    price: "240.00",
    name: "printed kurta",
    cate: "women2"
  },
  {
    img: "https://www.jiomart.com/images/product/330x410/441055193_green/graphic-print-crew-neck-t-shirt-model-441055193_green-0-202104080814.jpg ",
    price: "188.00",
    name: "print t-shirt",
    cate: "women2"
  },
  {
    img: "https://www.jiomart.com/images/product/330x410/441020957_white/ankle-length-leggings-with-elasticated-waist-model-441020957_white-0-202104071237.jpg ",
    price: "319.00",
    name: "ankle-length leggings",
    cate: "women"
  },
  {
    img: " https://www.jiomart.com/images/product/330x410/440535772_black/stretch-churidar-leggings-model-440535772_black-0-202104080101.jpg",
    price: "319.00",
    name: "ankle-length leggings",
    cate: "women"
  },
  {
    img: "https://www.jiomart.com/images/product/240x300/441114102_ltblue/striped-dungaree-dress-with-slip-pockets-model-441114102_ltblue-0-202102061423.jpg ",
    price: "499.00",
    name: "Striped Dungaree Dress ",
    cate: "women"
  },
  {
    img: " https://www.jiomart.com/images/product/240x300/441101871_darkred/cotton-pinafore-dress-model-441101871_darkred-0-202102061652.jpg",
    price: "441.00",
    name: "Cotton Pinafore Dress",
    cate: "women2"
  },
  {
    img: "https://www.jiomart.com/images/product/330x410/441020957_white/ankle-length-leggings-with-elasticated-waist-model-441020957_white-0-202104071237.jpg ",
    price: "319.00",
    name: "ankle-length leggings",
    cate: "women"
  },
  {
    img: " https://www.jiomart.com/images/product/330x410/440535772_black/stretch-churidar-leggings-model-440535772_black-0-202104080101.jpg",
    price: "319.00",
    name: "ankle-length leggings",
    cate: "women"
  },


  {
    img: "https://www.jiomart.com/images/product/150x150/490729028/dove-nutritive-solutions-intense-repair-shampoo-for-damaged-hair-650-ml-0-20210624.jpg",
    price: "370.00",
    name: "Dove Shampoo",
    cate: "shampoos"
  },
  {
    img: "https://www.jiomart.com/images/product/150x150/490729027/dove-nutritive-solutions-daily-shine-shampoo-650-ml-0-20210506.jpg ",
    price: "370.00",
    name: "Dove Shampoo",
    cate: "shampoos"
  },
  {
    img: " https://www.jiomart.com/images/product/150x150/490915866/dove-nutritive-solutions-hair-fall-rescue-shampoo-650-ml-0-20210624.jpg",
    price: "370.00",
    name: "Dove Shampoo",
    cate: "shampoos"
  },
  {
    img: "https://www.jiomart.com/images/product/150x150/490985893/l-oreal-paris-total-repair-5-advanced-repairing-shampoo-640-ml-with-extra-10-0-20210412.jpg ",
    price: "290.00",
    name: "L'Oreal shampoo",
    cate: "shampoos"
  },
  {
    img: " https://www.jiomart.com/images/product/150x150/490729044/head-shoulders-anti-hairfall-anti-dandruff-shampoo-650-ml-0-20201015.jpg",
    price: "435.00",
    name: "Head & Shoulder shampoo",
    cate: "shampoos"
  },
  {
    img: " https://www.jiomart.com/images/product/150x150/490729029/sunsilk-co-creations-lusciously-thick-long-shampoo-650-ml-0-20201020.jpg",
    price: "265.00",
    name: "Sunsilk Shampoo",
    cate: "shampoos"
  },
  {
    img: " https://www.jiomart.com/images/product/150x150/490886392/sunsilk-co-creations-stunning-black-shine-shampoo-650-ml-0-20210104.jpg",
    price: "265.00",
    name: "Sunsilk Shampoo",
    cate: "shampoos"
  },

  {
    img: "https://www.jiomart.com/images/product/150x150/490740298/pantene-pro-v-advanced-hair-fall-control-shampoo-650-ml-0-20210111.jpg ",
    price: "400.00",
    name: "Pantene Shampoo",
    cate: "shampoos"
  },
  {
    img: " https://www.jiomart.com/images/product/150x150/490915866/dove-nutritive-solutions-hair-fall-rescue-shampoo-650-ml-0-20210624.jpg",
    price: "370.00",
    name: "Dove Shampoo",
    cate: "shampoos"
  },
  {
    img: "https://www.jiomart.com/images/product/150x150/490985893/l-oreal-paris-total-repair-5-advanced-repairing-shampoo-640-ml-with-extra-10-0-20210412.jpg ",
    price: "290.00",
    name: "L'Oreal shampoo",
    cate: "shampoos"
  },
  {
    img: " https://www.jiomart.com/images/product/150x150/490729044/head-shoulders-anti-hairfall-anti-dandruff-shampoo-650-ml-0-20201015.jpg",
    price: "435.00",
    name: "Head & Shoulder shampoo",
    cate: "shampoos"
  },
  {
    img: " https://www.jiomart.com/images/product/150x150/490729029/sunsilk-co-creations-lusciously-thick-long-shampoo-650-ml-0-20201020.jpg",
    price: "265.00",
    name: "Sunsilk Shampoo",
    cate: "shampoos"
  },

  {
    img: "https://www.jiomart.com/images/product/240x300/441121945_denim/washed-panelled-jogger-jeans-with-insert-pockets-model-441121945_denim-0-202109110325.jpg",
    price: "449.00",
    name: "Jogger",
    cate: "infant wear"

  },
  {
    img: "https://www.jiomart.com/images/product/240x300/441079859_assorted/pack-of-3-round-neck-t-shirts-model-441079859_assorted-0-202107021640.jpg ",
    price: "559.00",
    name: "T-shirt",
    cate: "infant wear"

  },
  {
    img: "https://www.jiomart.com/images/product/240x300/441116671_blue/printed-twofer-a-line-dress-model-441116671_blue-0-202106060032.jpg",
    price: "399.00",
    name: "Dress",
  },
  {
    img: "https://www.jiomart.com/images/product/240x300/441110361_coral/textured-trackpants-with-drawstring-waistband-model-441110361_coral-0-202102061336.jpg ",
    price: "225.00",
    name: "Track Pant",
    cate: "infant wear"
  },
  {
    img: " https://www.jiomart.com/images/product/240x300/441074729_lavender/quilted-onesie-with-t-shirt-model-441074729_lavender-0-202012221508.jpg",
    price: "448.00",
    name: "Onesie with tshirt",
    cate: "infant wear"
  },
  {
    img: "https://www.jiomart.com/images/product/240x300/441069218_assorted/pack-of-2-colourblock-sleepsuits-model-441069218_assorted-0-202012161207.jpg ",
    price: "551.00",
    name: "Sleepsuits",
    cate: "infant wear"
  },
  {
    img: "https://www.jiomart.com/images/product/240x300/441117772_darkred/pack-of-superhero-print-boxers-model-441117772_darkred-0-202104150705.jpg ",
    price: "299.00",
    name: "Boxers",
    cate: "infant wear"
  },
  {
    img: "https://www.jiomart.com/images/product/240x300/441110467_grey/printed-cotton-pants-set-model-441110467_grey-0-202105211408.jpg ",
    price: "343.00",
    name: "Pant Shirt",
    cate: "infant wear"
  },
  {
    img: "https://www.jiomart.com/images/product/240x300/441116671_blue/printed-twofer-a-line-dress-model-441116671_blue-0-202106060032.jpg",
    price: "399.00",
    name: "Dress",
    cate: "infant wear"
  },
  {
    img: "https://www.jiomart.com/images/product/240x300/441110361_coral/textured-trackpants-with-drawstring-waistband-model-441110361_coral-0-202102061336.jpg ",
    price: "225.00",
    name: "Track Pant",
    cate: "infant wear"
  },
  {
    img: " https://www.jiomart.com/images/product/240x300/441074729_lavender/quilted-onesie-with-t-shirt-model-441074729_lavender-0-202012221508.jpg",
    price: "448.00",
    name: "Onesie with tshirt",
    cate: "infant wear"
  },
  {
    img: "https://www.jiomart.com/images/product/240x300/441069218_assorted/pack-of-2-colourblock-sleepsuits-model-441069218_assorted-0-202012161207.jpg ",
    price: "551.00",
    name: "Sleepsuits",
    cate: "infant wear"
  },

  {
    img: "https://www.jiomart.com/images/product/150x150/490001269/red-label-leaf-tea-500-g-carton-0-20210511.jpg",
    price: "263.00",
    name: "Red Label Leaf Tea 500 g ",
    cate: "tea"
  },
  {
    img: "https://www.jiomart.com/images/product/150x150/490001268/red-label-leaf-tea-250-g-carton-0-20210831.jpg ",
    price: "130.00",
    name: "Red Label Leaf Tea 250 g",
    cate: "tea"
  },
  {
    img: "https://www.jiomart.com/images/product/150x150/490004178/tata-agni-leaf-tea-1-kg-0-20210909.jpg ",
    price: "250.00",
    name: "Tata Agni Leaf Tea 1 kg",
    cate: "tea"
  },
  {
    img: "https://www.jiomart.com/images/product/150x150/490073715/wagh-bakri-premium-leaf-tea-500-g-0-20201118.jpg ",
    price: "255.00",
    name: "Wagh Bakri Premium  Tea 500 g",
    cate: "tea"
  },
  {
    img: " https://www.jiomart.com/images/product/150x150/490001298/society-tea-500-g-0-20201126.jpg",
    price: "234.00",
    name: "Society Tea 500 g",
    cate: "tea"
  },
  {
    img: "https://www.jiomart.com/images/product/150x150/490001323/taj-mahal-tea-250-g-carton-0-20210322.jpg",
    price: "184.00",
    name: "Taj Mahal Tea 250 g (Carton)",
    cate: "tea"
  },
  {
    img: " https://www.jiomart.com/images/product/150x150/490001296/society-tea-250-g-0-20200718.jpg",
    price: "120.00",
    name: "Society Tea 250 g",
    cate: "tea"
  },
  {
    img: "https://www.jiomart.com/images/product/150x150/490004178/tata-agni-leaf-tea-1-kg-0-20210909.jpg ",
    price: "250.00",
    name: "Tata Agni Leaf Tea 1 kg",
    cate: "tea"
  },
  {
    img: "https://www.jiomart.com/images/product/150x150/490073715/wagh-bakri-premium-leaf-tea-500-g-0-20201118.jpg ",
    price: "255.00",
    name: "Wagh Bakri Premium  Tea 500 g",
    cate: "tea"
  },
  {
    img: " https://www.jiomart.com/images/product/150x150/490001298/society-tea-500-g-0-20201126.jpg",
    price: "234.00",
    name: "Society Tea 500 g",
    cate: "tea"
  },
  {
    img: "https://www.jiomart.com/images/product/150x150/490001323/taj-mahal-tea-250-g-carton-0-20210322.jpg",
    price: "184.00",
    name: "Taj Mahal Tea 250 g (Carton)",
    cate: "tea"
  },
  {
    img: " https://www.jiomart.com/images/product/150x150/490001296/society-tea-250-g-0-20200718.jpg",
    price: "120.00",
    name: "Society Tea 250 g",
    cate: "tea"
  },

  {
    img: "https://www.jiomart.com/images/product/330x410/441000455_charcoal/shorts-with-elasticated-waist-model-441000455_charcoal-0-202104090950.jpg",
    price: "594.00",
    name: "Shorts",
    cate: "men"

  },
  {
    img: " https://www.jiomart.com/images/product/330x410/441039308_black/typographic-print-crew-neck-t-shirt-model-441039308_black-0-202104082223.jpg",
    price: "196.00",
    name: "T-shirt",
    cate: "men"

  },
  {
    img: " https://www.jiomart.com/images/product/330x410/441000455_olive/shorts-with-elasticated-waist-model-441000455_olive-0-202104081618.jpg",
    price: "594.00",
    name: "Shorts",
    cate: "men"

  },
  {
    img: " https://www.jiomart.com/images/product/330x410/441031716_charcoal/heathered-track-pants-with-contrast-taping-model-441031716_charcoal-0-202104081541.jpg",
    price: "399.00",
    name: "Track pant",
    cate: "men"

  },
  {
    img: "https://www.jiomart.com/images/product/330x410/441039298_white/tropical-print-pocket-crew-neck-t-shirt-model-441039298_white-0-202104090954.jpg ",
    price: "196.00",
    name: "T-shirt",
    cate: "men"
  },
  {
    img: "https://www.jiomart.com/images/product/330x410/441025077_olive/ankle-length-joggers-with-insert-pockets-model-441025077_olive-0-202104081816.jpg ",
    price: "480.00",
    name: "Joggers",
    cate: "men"
  },
  {
    img: "https://www.jiomart.com/images/product/330x410/441031714_petrol/heathered-joggers-with-insert-pockets-model-441031714_petrol-0-202104082319.jpg",
    price: "419.00",
    name: "Joggers",
    cate: "men"

  },
  {
    img: "https://www.jiomart.com/images/product/240x300/441120043_rust/slim-fit-shirt-with-band-collar-model-441120043_rust-0-202106241239.jpg ",
    price: "1079.00",
    name: "Shirt",
    cate: "men"
  },
  {
    img: "https://www.jiomart.com/images/product/240x300/441119274_khaki/checked-shirt-with-patch-pocket-model-441119274_khaki-0-202103161629.jpg ",
    price: "799.00",
    name: "Shirt",
    cate: "men"
  },
  {
    img: "https://www.jiomart.com/images/product/240x300/441104920_navy/slim-fit-striped-shirt-model-441104920_navy-0-202104080743.jpg ",
    price: "689.00",
    name: "Shirt",
    cate: "men"
  },
  {
    img: "https://www.jiomart.com/images/product/330x410/441039298_white/tropical-print-pocket-crew-neck-t-shirt-model-441039298_white-0-202104090954.jpg ",
    price: "196.00",
    name: "T-shirt",
    cate: "men"
  },
  {
    img: "https://www.jiomart.com/images/product/330x410/441025077_olive/ankle-length-joggers-with-insert-pockets-model-441025077_olive-0-202104081816.jpg ",
    price: "480.00",
    name: "Joggers",
    cate: "men"
  },

  {
    img: "https://www.jiomart.com/images/product/330x410/440952536_charcoal/mid-rise-track-pants-with-contrast-taping-model-440952536_charcoal-0-202104070120.jpg",
    price: "196.00",
    name: "Track Pant",
    cate: "kids"
  },
  {
    img: "https://www.jiomart.com/images/product/330x410/441054885_orange/graphic-print-round-neck-top-with-pom-pom-model-441054885_orange-0-202104071553.jpg",
    price: "160.00",
    name: "Tshirts",
    cate: "kids"
  },
  {
    img: "https://www.jiomart.com/images/product/330x410/441054862_navy/printed-leggings-with-elasticated-waistband-model-441054862_navy-0-202104062331.jpg",
    price: "99.00",
    name: "Leggings",
    cate: "kids"
  },
  {
    img: "https://www.jiomart.com/images/product/330x410/441056254_ltblue/graphic-print-t-shirt-with-ruffled-sleeves-model-441056254_ltblue-0-202104061659.jpg",
    price: "120.00",
    name: "Tshirts",
    cate: "kids"
  },
  {
    img: "https://www.jiomart.com/images/product/330x410/441050803_neongreen/typographic-print-round-neck-t-shirt-model-441050803_neongreen-0-202104061733.jpg",
    price: "100.00",
    name: "Tshirts",
    cate: "kids"
  },
  {
    img: "https://www.jiomart.com/images/product/330x410/441054887_yellow/printed-round-neck-t-shirt-model-441054887_yellow-0-202104070805.jpg",
    price: "96.00",
    name: "Tshirts",
    cate: "kids"
  }, {
    img: "https://www.jiomart.com/images/product/330x410/441054868_navy/round-neck-t-shirt-with-embellishments-model-441054868_navy-0-202104071336.jpg",
    price: "96.00",
    name: "Tshirts",
    cate: "kids"
  }, {
    img: "https://www.jiomart.com/images/product/330x410/440952535_black/typographic-print-joggers-with-insert-pockets-model-440952535_black-0-202104070138.jpg",
    price: "294.00",
    name: "Joggers",
    cate: "kids"
  }, {
    img: "https://www.jiomart.com/images/product/330x410/440952536_navy/mid-rise-track-pants-with-contrast-taping-model-440952536_navy-0-202104071041.jpg",
    price: "196.00",
    name: "Track Pant",
    cate: "kids"
  }, {
    img: "https://www.jiomart.com/images/product/330x410/441055740_yellow/printed-leggings-with-elasticated-waist-model-441055740_yellow-0-202104071441.jpg",
    price: "96.00",
    name: "leggings",
    cate: "kids"
  }, {
    img: "https://www.jiomart.com/images/product/330x410/441055735_yellow/printed-capris-with-elasticated-waist-model-441055735_yellow-0-202104072222.jpg",
    price: "96.00",
    name: "leggings",
    cate: "kids"
  }, {
    img: "https://www.jiomart.com/images/product/330x410/440995278_anthramelange/numeric-print-shorts-with-contrast-elasticated-drawstring-waist-model-440995278_anthramelange-0-202104061744.jpg",
    price: "187.00",
    name: "Shorts",
    cate: "kids"
  }, {
    img: "https://www.jiomart.com/images/cms/section/category/219/506.png?v=1601122470",
    price: "220.00",
    name: "Shorts",
    cate: "kids"
  },
  {
    img: "https://www.jiomart.com/images/product/330x410/440952536_charcoal/mid-rise-track-pants-with-contrast-taping-model-440952536_charcoal-0-202104070120.jpg",
    price: "196.00",
    name: "Track Pant",
    cate: "kids"
  },
  {
    img: "https://www.jiomart.com/images/product/330x410/441054885_orange/graphic-print-round-neck-top-with-pom-pom-model-441054885_orange-0-202104071553.jpg",
    price: "160.00",
    name: "Tshirts",
    cate: "kids"
  },
  {
    img: "https://www.jiomart.com/images/product/330x410/441054862_navy/printed-leggings-with-elasticated-waistband-model-441054862_navy-0-202104062331.jpg",
    price: "99.00",
    name: "Leggings",
    cate: "kids"
  },
];

let pro = document.getElementById("ExploreBestsellers");

function showProduct(d) {
  pro.innerHTML = null

  d.forEach(function (product) {
    let cato = JSON.parse(localStorage.getItem("catog"))
    if (product.cate == cato) {

      let div1 = document.createElement("div");
      div1.setAttribute("class", "div1")

      let div_img = document.createElement("div")
      div_img.setAttribute("class", "div_img")

      let div_text = document.createElement("div")
      div_text.setAttribute("class", "div_text")

      let div_btn = document.createElement("div")
      div_btn.setAttribute("class", "div_btn")

      let img1 = document.createElement("img");
      img1.src = product.img
      img1.setAttribute("class", "img1")

      let price1 = document.createElement("p");
      price1.textContent = product.price

      let name1 = document.createElement("p");
      name1.textContent = product.name;

      let btn1 = document.createElement("button");
      btn1.innerText = "Add to Cart";
      btn1.setAttribute("class", "btn1")

      btn1.onclick = function () {
        addtocart(product)
      }
      div_img.append(img1)
      div_text.append(name1, price1)
      div_btn.append(btn1)
      div1.append(div_img, div_text, div_btn)
      pro.append(div1)
    }
  });
};
showProduct(proarr)

function sortLH() {
  let arr = proarr.sort(function (a, b) {
    return a.price - b.price
  })
  showProduct(arr);
}

function sortHL() {
  let arr = proarr.sort(function (a, b) {
    return b.price - a.price
  })
  showProduct(arr);
}
function addtocart(product) {
  if (localStorage.getItem("jioUserCart") === null) {
    localStorage.setItem("jioUserCart", JSON.stringify([]));
  }
  let array = JSON.parse(localStorage.getItem("jioUserCart"));
  let present = false;

  array.forEach((pro) => {
    if (pro.name == product.name) {
      pro.quantity++;
      present = true;
    }
  })
  if (present) {
    localStorage.setItem("jioUserCart", JSON.stringify(array));
  } else {
    product.quantity = 1;
    array.push(product);
    localStorage.setItem("jioUserCart", JSON.stringify(array));
  }
}


let Psearch = document.getElementById("searchItem");
Psearch.onkeyup = function (e) {
  console.log("hi");
  if (e.keyCode === 13) {
    console.log(e.target.value);
    showSearchedProduct(e.target.value);

  }
}

let prodContainer = document.createElement("div");
  prodContainer.className = "products2";
function showSearchedProduct(tosearch) {
  // document.getElementById("productByCatg").innerHTML = null;
  let ProdContainerIs = document.getElementById("productSpace");
  ProdContainerIs.innerHTML = null;

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
      if (el.keysrch == tosearch) {
          checkproduCount = 1;
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
      }
  });
  if (checkproduCount == 0) {
      prodContainer.style.color = "red";
      prodContainer.style.fontSize = "25px";
      prodContainer.innerHTML = "0 Product found";
  }
  console.log(userClick);
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
  
  
  
  
  function filteredProduct(sortedData) {
    // prodContainer.innerHTML = null;
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
}


