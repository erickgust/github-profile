const $form = getElement('form');
const $avatar = getElement('avatar');
const $name = getElement('name');
const $username = getElement('username');
const $followers = getElement('followers');
const $reposCount = getElement('repos');

function getElement(elementName) {
  return document.querySelector(`[data-js="${elementName}"]`);
}
