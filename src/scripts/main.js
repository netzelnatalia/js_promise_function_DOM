'use strict';

function waitFor(element, eventName) {
  return new Promise((resolve) => {
    element.addEventListener(eventName, () => {
      resolve(`It was ${eventName} on the element: ${element.nodeName},
        id: ${element.id}.`);
    });
  });
}

const printMessage = (message) => {
  const notification = document.createElement('div');

  notification.classList = 'message';

  notification.textContent = `${message}`;

  return document.body.appendChild(notification);
};

module.exports = {
  waitFor,
  printMessage,
};
