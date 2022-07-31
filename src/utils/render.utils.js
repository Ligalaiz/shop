import { toggleBuyBtn } from '@utils/toggle-buy-btn.utils';
import { Purchases } from '@components/cart/cart';
import { getAllProducts } from '@utils/request.utils';
import { createUrl } from '@utils/create-url.utils';
import { updateCartCount } from '@utils/update-cart-count.utils';
import { updateTotalSum } from '@utils/update-total-sum.utils';
import { get, set } from '@utils/storage.utils';

const render = async () => {
  let cart = get('cart');
  if (!cart) {
    cart = {};
    set('cart', cart);
  }

  toggleBuyBtn();

  const url = `${process.env.BASE_PATH}${process.env.PATH_PRODUCTS}`;
  const data = await getAllProducts({ url: createUrl({ url, all: true }) });

  if (data instanceof Error) return;

  updateTotalSum({ cart, data });
  updateCartCount({ cart });
  Purchases({ cart, data });
};

export { render };
