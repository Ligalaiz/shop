import '@src/layouts/layout';
import '@components/dropdown/dropdown';
import '@components/pagination/pagination';
import '@utils/update-goods-count.utils';
import '@utils/add-to-cart.utils';
import '@assets/styles/global/index.scss';
import { render } from '@utils/render.utils';
import { ProductList } from '@components/product-list/product-list';

render();
ProductList();
