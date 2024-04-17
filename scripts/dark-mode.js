let button;
document.addEventListener('FooterContentLoaded', () => {
    button = document.querySelector('.footer__button');
    button.addEventListener('click', toggleDarkMode);

    // Set theme based on preference.
    if (!localStorage.getItem('prefers-color-scheme')) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            localStorage.setItem('prefers-color-scheme', 'dark-mode');
            toggleDarkMode()
        } else {
            localStorage.setItem('prefers-color-scheme', 'light-mode');
        }
    } else if (localStorage.getItem('prefers-color-scheme') == 'dark-mode') {
        toggleDarkMode()
    }
});


function toggleDarkMode() {
    const isDarkMode =  document.querySelector('body').classList.toggle('dark-mode');

    // Update preference and toggle icon.
    if (isDarkMode) {
        localStorage.setItem('prefers-color-scheme', 'dark-mode')
        button.src = '/img/footer/dark-mode.svg'
    } else {
        localStorage.setItem('prefers-color-scheme', 'light-mode')
        button.src = '/img/footer/light-mode.svg'
    }

    // Update code block styling.
    const hljsStyle = document.getElementById('hljs-style')
    if (hljsStyle) {
        hljs = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0'
        hljsDark = hljs + '/styles/github-dark.css'
        hljsLight = hljs + '/styles/github.css'
        hljsStyle.href = isDarkMode ? hljsDark : hljsLight
    }
}
