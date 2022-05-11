import './css/reset.css';
import './css/colors.css';
import Search from './components/search';
import Header from './components/header';
import Main from './components/main';
import createCard, { User } from './components/card';

const app = document.querySelector('div#app') as HTMLDivElement;

async function handleSubmit(event: SubmitEvent) {
  event.preventDefault();
  const form = event.target as HTMLFormElement;
  const search = form.search as HTMLInputElement;
  const user = await getRequestedUser(search.value);

  const card = document.querySelector('[data-js="user-card"]');
  if (card) { Main.removeChild(card); }
  Main.appendChild(createCard(user));
  search.value = '';
}

async function getRequestedUser(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();

  if (data.message) { throw new Error(data.message); }

  return {
    name: data.name,
    user: data.login,
    url: data.html_url,
    followers: data.followers,
    repos: data.public_repos,
    avatar: data.avatar_url,
  } as User;
}

Search.addEventListener('submit', handleSubmit, false);
Header.appendChild(Search);
app.appendChild(Header);
app.appendChild(Main);
