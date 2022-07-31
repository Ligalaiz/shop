import { searchNormalize, sortNormalize, orderNormalize, categoryNormalize } from '@utils/normalize-req.utils';

const createUrl = (option) => {
  const { url, all = false, limit = 6, page = 1 } = option;
  const paramMap = {
    search: process.env.SEARCH_PARAM,
    sort: process.env.SORT_PARAM,
    order: process.env.ORDER_PARAM,
    category: process.env.FILTER_PARAM,
    limit: process.env.LIMIT_PARAM,
    page: process.env.PAGE_PARAM,
  };

  const filterDropdown = document.getElementById('filterDropdown');
  const categoryDropdown = document.getElementById('categoryDropdown');
  const searcField = document.getElementById('searcField');

  const requestObj = all
    ? {}
    : {
        search: searchNormalize(searcField.value),
        sort: sortNormalize(filterDropdown.textContent),
        order: orderNormalize(filterDropdown.textContent),
        category: categoryNormalize(categoryDropdown.textContent),
        limit,
        page,
      };

  const optionKeys = Object.keys(requestObj);

  return optionKeys.reduce((acc, cur, i) => {
    if (!requestObj[cur]) return acc;

    const sign = i + 1 === optionKeys.length ? '' : '&';
    acc += `${paramMap[cur]}${requestObj[cur]}${sign}`;
    return acc;
  }, `${url}?`);
};

export { createUrl };
