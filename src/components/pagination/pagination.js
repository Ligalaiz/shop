import { ProductList } from '@components/product-list/product-list';

const pagination = () => {
  const paginationNode = document.getElementById('pagination');
  let page = 1;

  const handleClick = async (e) => {
    const { dataset } = e.target;

    if (dataset.page === 'prevPage' && page > 1) {
      page -= 1;
      ProductList({ page });
    }

    if (dataset.page === 'nextPage') {
      const products = await ProductList({ page: page + 1, check: true });

      if (products.length !== 0) {
        page += 1;
        ProductList({ page });
      }
    }
  };

  paginationNode.addEventListener('click', handleClick);
};

pagination();
