const $form = getElement('form');
const $avatar = getElement('avatar');
const $name = getElement('name');
const $username = getElement('username');
const $followers = getElement('followers');
const $reposCount = getElement('repos');

function getElement(elementName) {
  return document.querySelector(`[data-js="${elementName}"]`);
}

async function handleSubmitButton(event) {
  event.preventDefault();
  const $search = event.target.elements.search;
  const json = await getGithubUser($search.value);
  console.log(json);
}

async function getGithubUser(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  return response.json();
}

$form.addEventListener('submit', handleSubmitButton);
