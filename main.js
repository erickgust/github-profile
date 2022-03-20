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
  getGithubUserInfos(json);
}

function getGithubUserInfos(user) {
  $avatar.src = user.avatar_url;
  $name.textContent = user.name;
  $username.textContent = user.login;
  $followers.textContent = user.followers;
  $reposCount.textContent = user.public_repos;
}

async function getGithubUser(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  return response.json();
}

$form.addEventListener('submit', handleSubmitButton);
