import { delay } from '@utils/delay.utils';
import { displayError } from '@utils/display-error.utils';

const getAllProducts = async (option) => {
  const { url = '' } = option;

  try {
    const response = await fetch(url);

    if (response.status !== 200) {
      throw new Error('request failed');
    }

    const result = await delay(() => response.json(), 0);

    return result;
  } catch (err) {
    displayError(err);
    return err;
  }
};

const addPurchases = async (option) => {
  const { url = '', body = {} } = option;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();

    return result;
  } catch (err) {
    displayError(err);
    return err;
  }
};

export { getAllProducts, addPurchases };
