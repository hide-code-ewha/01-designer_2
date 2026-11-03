const themeButton = document.querySelector('#theme-button');
function setTheme(isDark) {
  document.body.classList.toggle('dark', isDark);
  document.body.classList.toggle('light', !isDark);
  themeButton.setAttribute('aria-pressed', String(isDark));
  themeButton.innerHTML = `${isDark ? 'LIGHT MODE' : 'DARK MODE'} <span aria-hidden="true">↗</span>`;
}
// 원본 디자인의 기본 테마
setTheme(false);
themeButton.addEventListener('click', () => {
  setTheme(!document.body.classList.contains('dark'));
});
