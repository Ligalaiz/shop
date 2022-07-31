const updateCartCount = (option) => {
  const { cart } = option;
  const cartCount = document.getElementById('cartCount');

  cartCount.textContent = Object.keys(cart).reduce((totalCount, currentCount) => {
    totalCount += cart[currentCount].count;
    return totalCount;
  }, 0);
};

export { updateCartCount };
