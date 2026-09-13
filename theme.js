const root = document.documentElement;
const toggle = document.querySelector('.mode-toggle');
toggle.addEventListener('click', () => {
	const dark = root.dataset.mode !== 'dark';
	root.dataset.mode = dark ? 'dark' : 'light';
	const label = `Switch to ${dark ? 'light' : 'dark'} mode`;
	toggle.setAttribute('aria-label', label);
	toggle.title = label;
});
