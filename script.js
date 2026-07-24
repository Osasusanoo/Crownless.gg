const themeToggle = document.querySelector('[data-theme-toggle]');
const menuToggle = document.getElementById('menu-toggle');
const menuDropdown = document.getElementById('menu-dropdown');
const storedTheme = localStorage.getItem('theme');

function applyTheme(theme) {
  const resolvedTheme = theme || 'dark';
  document.documentElement.classList.toggle('light', resolvedTheme === 'light');
  document.documentElement.classList.toggle('dark', resolvedTheme === 'dark');
  localStorage.setItem('theme', resolvedTheme);

  if (themeToggle) {
    themeToggle.setAttribute('aria-pressed', resolvedTheme === 'light' ? 'true' : 'false');
    themeToggle.textContent = resolvedTheme === 'light' ? '☀️ Light mode' : '🌙 Dark mode';
  }
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = document.documentElement.classList.contains('light') ? 'dark' : 'light';
    applyTheme(nextTheme);
  });
}

if (menuToggle && menuDropdown) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuDropdown.classList.contains('hidden');
    menuDropdown.classList.toggle('hidden', !isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (event) => {
    if (!menuDropdown.contains(event.target) && !menuToggle.contains(event.target)) {
      menuDropdown.classList.add('hidden');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

applyTheme(storedTheme || 'dark');
