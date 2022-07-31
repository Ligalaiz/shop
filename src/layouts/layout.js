const cart = document.getElementById('cart');
const wrapper = document.getElementById('wrapper');
const body = document.getElementsByTagName('body')[0];

const handleBtnClick = (e) => {
  e.stopPropagation();
  const { dataset } = e.target;

  if (dataset?.btn === 'cartCount') {
    cart.classList.toggle('active');
    body.classList.toggle('active');
  }

  if (dataset?.btn === 'closeBtn') {
    cart.classList.remove('active');
    body.classList.remove('active');
  }
};

wrapper.addEventListener('click', handleBtnClick);
