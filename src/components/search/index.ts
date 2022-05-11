import './style.css';

function createSearch() {
  const input = searchInput();
  const button = searchButton();
  const form = document.createElement('form');

  form.action = '/';
  form.className = 'search-form';
  form.appendChild(input);
  form.appendChild(button);

  return form;
}

function searchInput() {
  const input = document.createElement('input');

  input.type = 'search';
  input.name = 'search';
  input.className = 'search';
  input.placeholder = 'Github user';

  return input;
}

function searchButton() {
  const button = document.createElement('button');

  button.type = 'submit';
  button.className = 'submit';
  button.textContent = 'Search';

  return button;
}

export default createSearch;
