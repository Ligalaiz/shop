import { debounce } from '@utils/debounce.utils';
import { ProductList } from '@components/product-list/product-list';

const searchBar = document.getElementById('searchBar');
const filterList = document.getElementById('filterList');
const categoryList = document.getElementById('categoryList');
const filterDropdown = document.getElementById('filterDropdown');
const categoryDropdown = document.getElementById('categoryDropdown');

let handleSearchBarChange = (e) => {
  const { classList } = e.target;
  if (classList.contains('bar-search__input')) ProductList();
};

handleSearchBarChange = debounce(handleSearchBarChange, 1000);

const handleSearchBarClick = (e) => {
  const { dataset } = e.target;

  if (dataset?.name === 'filter') filterList.classList.toggle('active');
  if (dataset?.name === 'category') categoryList.classList.toggle('active');
  if (dataset?.option) {
    if (dataset?.option.match(/filter/g)) filterDropdown.textContent = e.target.textContent;
    if (dataset?.option.match(/category/g)) categoryDropdown.textContent = e.target.textContent;
    ProductList();
  }
};

searchBar.addEventListener('keyup', handleSearchBarChange);
searchBar.addEventListener('click', handleSearchBarClick);
