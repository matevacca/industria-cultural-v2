// Sin JavaScript el menú sigue visible. Este archivo solo permite plegarlo en móvil.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navegacion-principal');

if (menuButton && navigation) {
  document.documentElement.classList.add('js');

  function setMenu(open) {
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.textContent = open ? 'Cerrar' : 'Menú';
    navigation.classList.toggle('is-open', open);
  }

  menuButton.addEventListener('click', () => {
    setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      menuButton.focus();
    }
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
  });

  window.matchMedia('(max-width: 600px)').addEventListener('change', () => setMenu(false));
}
