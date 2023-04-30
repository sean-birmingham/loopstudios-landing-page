const btn = document.getElementById('menu-btn');

btn.addEventListener('click', navToggle);

function navToggle() {
  const menu = document.getElementById('menu');
  btn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
}
