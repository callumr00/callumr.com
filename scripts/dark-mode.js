let toggleButton;
document.addEventListener('FooterContentLoaded', () => {
    toggleButton = document.querySelector('.footer__button');
    toggleButton.addEventListener('click', toggleColorScheme);

    // Update icon on load.
    if (document.querySelector('body').classList.contains('dark-mode')) {
        toggleButton.src = '/img/footer/dark-mode.svg'
    }
})

let storedPreference = localStorage.getItem('prefers-color-scheme');
let browserPrefersDark = (window.matchMedia('(prefers-color-scheme: dark)')
                         .matches);

if ((!storedPreference && browserPrefersDark) || storedPreference == 'dark') {
    toggleColorScheme();
}

function toggleColorScheme() {
    isDarkMode = document.querySelector('body').classList.toggle('dark-mode');

    localStorage.setItem('prefers-color-scheme', isDarkMode ? 'dark' : 'light')

    if (toggleButton) {
        toggleButton.src = isDarkMode ?
            '/img/footer/dark-mode.svg' :
            '/img/footer/light-mode.svg'
    }

    // Toggle code block styling.
    hljsStyle = document.getElementById('hljs-style')
    if (hljsStyle) {
        hljsStyle.href = isDarkMode ?
            'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/' +
            'styles/github-dark.css' :
            'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/' +
            'styles/github.css'
    }
}
