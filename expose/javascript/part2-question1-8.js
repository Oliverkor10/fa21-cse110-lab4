function discountPrices(prices, discount) {
  const discounted = [];
  const finalPrice = [];

  for (let i = 0; i < prices.length; i++) {
    const discountPrice = prices[i] * (1 - discount);
    discounted.push(discountPrice);
  }

  //console.log(i);
  //console.log(discountPrice);
  //console.log(finalPrice);

  return discounted;
}

console.log(discountPrices([100, 200, 300], 0.5));
