type User = {
  name: string
  user: string
  followers: number
  repos: number
  avatar: string
};

function createCard(user: User) {
  const $article = document.createElement('article');
  const $avatar = createAvatar(user.avatar);
  const $userInfo = createUserInfo(user);

  $article.appendChild($avatar);
  $article.appendChild($userInfo);

  return $article;
}

function createAvatar(src: string) {
  const $div = document.createElement('div');
  const $img = document.createElement('img');

  $div.className = 'avatar';
  $img.className = 'image';
  $img.src = src;
  $img.alt = 'Imagem de perfil do usuário';

  $div.appendChild($img);
  return $div;
}

function createUserName(name: string) {
  const $title = document.createElement('h1');
  $title.textContent = name;
  $title.className = 'name';
  return $title;
}

function createUserInfo({
  name, user, followers, repos,
}: Omit<User, 'avatar'>) {
  const $userInfo = document.createElement('div');
  const $div = document.createElement('div');
  const $user = document.createElement('p');
  const $followers = document.createElement('p');
  const $repos = document.createElement('p');
  const $name = createUserName(name);

  $user.textContent = `Username: ${user}`;
  $followers.textContent = `Followers: ${followers}`;
  $repos.textContent = `Repositories: ${repos}`;
  $userInfo.className = 'user-card';

  $div.append($user, $followers, $repos);
  $userInfo.append($name, $div);

  return $userInfo;
}

export default createCard;
