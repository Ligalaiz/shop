const getSum = (a, b) => a + b;

describe('getSum function', () => {
  it('getSum function check summator', () => {
    const result = getSum(2, 3);

    expect(result).toEqual(5);
  });
});
