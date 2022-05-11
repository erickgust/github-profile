import './style.css';
import imgUrl from '../../img/github.svg';

function createHeader() {
  const header = document.createElement('header');
  const link = document.createElement('a');
  const img = document.createElement('img');

  img.src = imgUrl;
  img.alt = 'Perfil do autor';
  img.style.maxWidth = '3.125rem';
  img.style.maxHeight = '3.125rem';
  link.href = 'https://github.com/erickgust';
  link.appendChild(img);
  header.appendChild(link);
  header.className = 'main-header';

  return header;
}

const Header = createHeader();

export default Header;
