import { createElement } from '@utils/create-element.utils';

const Purchases = (option) => {
  const { cart, data } = option;
  const cartList = document.getElementById('cartList');
  cartList.innerHTML = '';

  Object.keys(cart).forEach((purchase) => {
    const product = data.find((item) => item.id === +purchase);

    createElement(
      'li',
      'cart__item',
      [
        createElement(
          'div',
          'cart__desc desc-cart',
          [
            createElement('p', 'desc-cart__text', `${product.title}`, null),
            createElement('p', null, `${cart[purchase].count}`, null, ['id', `product-${purchase}`]),
          ],
          null,
        ),
        createElement(
          'div',
          'cart__counter counter-cart',
          [
            createElement('button', 'counter-cart__dec', null, null, ['dec', `${purchase}`]),
            createElement('button', 'counter-cart__inc', null, null, ['inc', `${purchase}`]),
            createElement('button', 'counter-cart__delete-btn', 'Delete', null, ['del', `${purchase}`]),
          ],
          null,
        ),
      ],
      cartList,
    );
  });
};

export { Purchases };
