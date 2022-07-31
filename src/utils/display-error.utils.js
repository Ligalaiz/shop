import { message } from '@components/message/message';

const displayError = (val) => {
  if (val instanceof Error) {
    message({ type: 'error', message: val.message });
  }
};

export { displayError };
