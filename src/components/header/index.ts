import './style.css';
import searchBox from '../search';

function createHeader() {
  const header = document.createElement('header');
  const search = searchBox();

  header.className = 'main-header';
  header.appendChild(search);

  return header;
}

export default createHeader;
