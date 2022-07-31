import { createElement } from '@utils/create-element.utils';

const Card = (option) => {
  const { title, image, name, rating, price, category, parent, id } = option;

  createElement(
    'div',
    'card',
    [
      createElement(
        'div',
        'card__img',
        [createElement('img', null, null, null, ['src', `${image}`], ['alt', `${name}`])],
        null,
      ),
      createElement('div', 'card__desc', [createElement('p', null, `${title}`, null)], null),
      createElement(
        'div',
        'card__wrap',
        [
          createElement(
            'div',
            'card__rating rating',
            [createElement('p', 'rating__text', `${rating.rate}`, null)],
            null,
          ),
          createElement('div', 'card__price price', [createElement('p', 'price__text', `${price} $`, null)], null),
        ],
        null,
      ),
      createElement('div', 'card__category', [createElement('p', null, `${category}`, null)], null),
      createElement('button', 'card__btn', 'add', null, ['product', `${id}`]),
    ],
    parent,
  );
};

export { Card };
