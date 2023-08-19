 let clickCount = 0;
 const originalPrices = {}; // Store original prices

 function getDiscountValue(priceId1, parcentage) {
   const priceText = document.getElementById(priceId1);
   const priceAmount = parseFloat(priceText.innerText);

   // Store the original price when it's not already stored
   if (!(priceId1 in originalPrices)) {
     originalPrices[priceId1] = priceAmount;
   }

   const discountPrice = priceAmount - (parcentage / 100) * priceAmount;

   if (clickCount % 2 === 0) {
     priceText.innerText = discountPrice.toFixed(2);
   } else {
     // Reset the price to its original value on double-click
     priceText.innerText = originalPrices[priceId1].toFixed(2);
   }

   clickCount++;
 }

 document
   .getElementById("discount-btn1")
   .addEventListener("click", function () {
     getDiscountValue("shoePrice1", 30);
   });

 // Handle double-click on the discountPrice element
 document
   .getElementById("shoePrice1")
   .addEventListener("dblclick", function () {
     // Reset the price to its original value
     this.innerText = originalPrices["shoePrice1"].toFixed(2);
   });


  //  second product
  
 document
   .getElementById("discount-btn2")
   .addEventListener("click", function () {
     getDiscountValue("shoePrice2", 47);
   });

 // Handle double-click on the discountPrice element
 document
   .getElementById("shoePrice2")
   .addEventListener("dblclick", function () {
     // Reset the price to its original value
     this.innerText = originalPrices["shoePrice2"].toFixed(2);
   });

  //  third Product
    
 document
 .getElementById("discount-btn3")
 .addEventListener("click", function () {
   getDiscountValue("shoePrice3", 36);
 });

// Handle double-click on the discountPrice element
document
 .getElementById("shoePrice3")
 .addEventListener("dblclick", function () {
   // Reset the price to its original value
   this.innerText = originalPrices["shoePrice3"].toFixed(2);
 });