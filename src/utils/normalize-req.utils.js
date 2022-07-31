const searchNormalize = (value) => encodeURIComponent(value);
const sortNormalize = (value) => (value === 'rating' ? 'rating.rate' : 'price');
const orderNormalize = (value) => (value === 'expensive' ? 'desc' : 'asc');
const categoryNormalize = (value) => {
  return value === 'Choice category' ? '' : encodeURIComponent(value);
};

export { searchNormalize, sortNormalize, orderNormalize, categoryNormalize };
