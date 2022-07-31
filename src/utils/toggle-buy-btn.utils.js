import { get } from '@utils/storage.utils';

const toggleBuyBtn = () => {
  const cart = get('cart');

  if (Object.keys(cart).length === 0) {
    document.getElementById('buyBtn').disabled = true;
  } else {
    document.getElementById('buyBtn').disabled = false;
  }
};

export { toggleBuyBtn };
