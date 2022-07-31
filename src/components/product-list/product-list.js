import { Card } from '@components/card/card';
import { getAllProducts } from '@utils/request.utils';
import { createUrl } from '@utils/create-url.utils';

const ProductList = async (option = {}) => {
  const { limit, page, check } = option;
  const url = `${process.env.BASE_PATH}${process.env.PATH_PRODUCTS}`;
  const data = await getAllProducts({ url: createUrl({ url, limit, page }) });

  if (data instanceof Error) return;
  if (check) return data;
  const parentCard = document.getElementById('productList');

  parentCard.innerHTML = '';
  data.forEach((item) => Card({ ...item, parent: parentCard }));
};

export { ProductList };
