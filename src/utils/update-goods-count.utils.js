import { get, set } from '@utils/storage.utils';
import { render } from '@utils/render.utils';
import { toggleBuyBtn } from '@utils/toggle-buy-btn.utils';
import { addPurchases } from '@utils/request.utils';

const updateGoodsCount = () => {
  const cart = document.getElementById('cart');

  const handleClick = (e) => {
    const url = `${process.env.BASE_PATH}${process.env.PATH_CART}`;
    let localCart = get('cart');
    const { dataset } = e.target;

    if (dataset.inc) {
      localCart[dataset.inc].count += 1;
      document.getElementById(`product-${dataset.inc}`).textContent = localCart[dataset.inc].count;
    }

    if (dataset.dec) {
      const currentCount = localCart[dataset.dec].count;

      if (currentCount > 1) {
        localCart[dataset.dec].count -= 1;
        document.getElementById(`product-${dataset.dec}`).textContent = localCart[dataset.dec].count;
      }
    }

    if (dataset.del) delete localCart[dataset.del];
    if (dataset.btn === 'buy') {
      const data = addPurchases({ url, body: localCart });

      if (data instanceof Error) return;

      localCart = {};
      toggleBuyBtn();
    }

    set('cart', localCart);
    render();
  };

  cart.addEventListener('click', handleClick);
};

updateGoodsCount();
