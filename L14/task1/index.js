let message = 'Just learn it';

export const sendMessage = name => {
  console.log(`${name}, ${message}! Your Gromcode`);
};

export function setMessage(text) {
  message = text;
}
