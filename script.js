const themeButton = document.querySelector('#themeButton');

function updateThemeButton() {
  const isLight = document.body.classList.contains('light');
  themeButton.innerHTML = isLight ? '🌙 <span>Tema</span>' : '☀️ <span>Tema</span>';
  themeButton.setAttribute('aria-pressed', String(isLight));
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle('light');
  updateThemeButton();
});

updateThemeButton();
