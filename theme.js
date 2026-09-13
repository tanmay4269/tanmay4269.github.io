const root = document.documentElement;
const toggle = document.querySelector('.mode-toggle');

const email = [116, 97, 110, 109, 97, 121, 46, 116, 46, 118, 46, 103, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109]
	.map(character => String.fromCharCode(character))
	.join('');

document.querySelectorAll('.email-link').forEach(link => {
	link.href = `mailto:${email}`;
});

toggle.addEventListener('click', () => {
	const dark = root.dataset.mode !== 'dark';
	root.dataset.mode = dark ? 'dark' : 'light';
	const label = `Switch to ${dark ? 'light' : 'dark'} mode`;
	toggle.setAttribute('aria-label', label);
	toggle.title = label;
});
