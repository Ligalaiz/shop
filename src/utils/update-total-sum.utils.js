const updateTotalSum = (option) => {
  const { cart, data } = option;

  const totalSumNode = document.getElementById('totalSum');

  const totalSum = Object.keys(cart).reduce((acc, cur) => {
    const { count } = cart[cur];
    const product = data.find((item) => {
      return item.id === +cur;
    });

    acc += product.price * count;
    return acc;
  }, 0);

  totalSumNode.textContent = `${Number.parseFloat(totalSum).toFixed(2)} $`;
};

export { updateTotalSum };
