let clickCount = 0;
function getDiscountValue(priceId1, parcentage) {
  const priceText = document.getElementById(priceId1);
  const priceAmount = parseFloat(priceText.textContent);
  if (clickCount % 2 === 0) {
    priceText.textContent =
      priceAmount - (parcentage / 100) * priceAmount;
    console.log("even click");
  } else {
    // const originalPrice = priceAmount / (1 - percentage / 100);
    // priceText.textContent = originalPrice.toFixed(2);
    priceText.textContent =
      priceAmount + (parcentage / 100) * priceAmount;
    console.log("odd click");
  }
  clickCount++;
}
function mainBlance(getMinId) {
  const setBalance = document.getElementById(getMinId);
  const priceAmount = parseFloat(setBalance.innerText);
  return priceAmount;
}
document
  .getElementById("discount-btn1")
  .addEventListener("click", function () {
    getDiscountValue("shoePrice1", 30);
  });