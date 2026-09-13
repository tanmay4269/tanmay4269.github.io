const frame = document.querySelector('iframe');
const theme = document.querySelector('#theme');
const font = document.querySelector('#font');
function apply() {
	const root = frame.contentDocument.documentElement;
	root.dataset.theme = theme.value;
	root.dataset.font = font.value;
}
frame.addEventListener('load', apply);
theme.addEventListener('change', apply);
font.addEventListener('change', apply);
document.querySelector('#reset').addEventListener('click', () => {
	theme.value = 'parchment';
	font.value = 'classic';
	apply();
	const doc = frame.contentDocument;
	if (doc.documentElement.dataset.mode === 'dark') doc.querySelector('.mode-toggle').click();
});
