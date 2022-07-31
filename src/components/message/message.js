import { delay } from '@utils/delay.utils';

const message = (option) => {
  const { type, message } = option;
  const body = document.getElementsByTagName('body')[0];
  const msgBody = document.createElement('div');
  const msgText = document.createElement('p');

  if (type === 'error') {
    msgBody.classList.add('msg', 'msg--error', 'active');
  } else {
    msgBody.classList.add('msg');
  }

  msgText.classList.add('msg__text');
  msgText.textContent = message;

  msgBody.appendChild(msgText);
  setTimeout(() => {
    body.appendChild(msgBody);
  });

  delay(() => msgBody.remove(), 3000);
};

export { message };
