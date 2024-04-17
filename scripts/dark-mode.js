let button;

document.addEventListener('FooterContentLoaded', () => {
    button = document.querySelector('.footer__button');
    button.addEventListener('click', toggleDarkMode);

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toggleDarkMode();
    }
});

function toggleDarkMode() {
    const isDarkMode =  document.querySelector('body').classList.toggle('dark-mode');

    // Change icon in footer.
    button.src = isDarkMode ? '/img/footer/dark-mode.svg' : '/img/footer/light-mode.svg'

    // Change code block styling.
    const hljsStyle = document.getElementById('hljs-style')
    if (hljsStyle) {
        hljs = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0'
        hljsDark = hljs + '/styles/github-dark.css'
        hljsLight = hljs + '/styles/github.css'
        hljsStyle.href = isDarkMode ? hljsDark : hljsLight
    }
}
