import { updateCartCount } from '@utils/update-cart-count.utils';
import { updateTotalSum } from '@utils/update-total-sum.utils';
import { Purchases } from '@components/cart/cart';
import { getAllProducts } from '@utils/request.utils';
import { createUrl } from '@utils/create-url.utils';
import { get, set } from '@utils/storage.utils';
import { toggleBuyBtn } from '@utils/toggle-buy-btn.utils';

const addToCart = async () => {
  const url = `${process.env.BASE_PATH}${process.env.PATH_PRODUCTS}`;
  const parentCard = document.getElementById('productList');
  const data = await getAllProducts({ url: createUrl({ url, all: true }) });

  if (data instanceof Error) return;

  const handleAddClick = (e) => {
    const { dataset } = e.target;

    if (dataset.product) {
      toggleBuyBtn();
      const cart = get('cart');

      if (cart[dataset.product]) {
        cart[dataset.product].count += 1;
      } else {
        cart[dataset.product] = { count: 1 };
      }

      document.getElementById('buyBtn').disabled = false;

      set('cart', cart);
      updateCartCount({ cart });
      Purchases({ cart, data });
      updateTotalSum({ cart, data });
    }
  };

  parentCard.addEventListener('click', handleAddClick);
};

addToCart();
