let totalPrice = 195; 

if (totalPrice >= 100) {
  let discountedPrice = totalPrice * 0.7; 
  console.log(discountedPrice);
} else {
  let amountNeeded = 100 - totalPrice;
  console.log(`Ještě vysyp z kapsy $${amountNeeded} a získáš 30% slevu!`);
}