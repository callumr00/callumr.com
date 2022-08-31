// ROOT DIR

// Header component
class Header extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <header>
            <a href="index" class="nav__home"><h1>CR</h1></a>
        </header>

        <div class="burger">
            <span class="burger__menu"></span>
        </div>

        <nav class="nav">
            <div class="nav__icons">
                <a class="nav__icon" href="https://en.wikipedia.org/wiki/Ankh" target="_blank"><img src="./img/svg/ankh.svg" alt="Ankh"></a>
                <a class="nav__icon" href="https://en.wikipedia.org/wiki/Memento_mori" target="_blank">
                    <img src="./img/svg/hourglass.svg" alt="Hourglass">
                    <img src="./img/svg/skull.svg" alt="Skull">
                </a>
            </div>
            <ul class="nav__menu">
                <li class="nav__item">
                    <a href="work" class="nav__link link--colour">Work</a>
                </li>
                <li class="nav__item">
                    <a href="books" class="nav__link link--colour">Books</a>
                </li>
                <li class="nav__item">
                    <a href="photos" class="nav__link link--colour">Photos</a>
                </li>
            </ul>
            <div class="nav__icons">
                <a class="nav__icon" href="https://github.com/callumr00" target="_blank"><img src="./img/svg/github.svg" alt="Github Logo"></a>
                <a class="nav__icon" href="https://www.linkedin.com/in/callum-rafter" target="_blank"><img src="./img/svg/linkedin.svg" alt="LinkedIn Logo"></a>
            </div>
        </nav>
        `;
    }
}

window.customElements.define('header-container', Header);


// Footer component
class Footer extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <footer>
            <div class="footer__icons">        
                <a class="footer__icon" href="https://github.com/callumr00" target="_blank"><img src="./img/svg/github.svg" alt="Github Logo"></a>
                <a class="footer__icon" href="https://www.linkedin.com/in/callum-rafter" target="_blank"><img src="./img/svg/linkedin.svg" alt="LinkedIn Logo"></a>
            </div>
        </footer>
        `;
    }
}

window.customElements.define('footer-container', Footer);


// SUB DIR

// Header component
class HeaderSub extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <header>
            <a href="../index" class="nav__home"><h1>CR</h1></a>
        </header>

        <div class="burger">
            <span class="burger__menu"></span>
        </div>

        <nav class="nav">
            <div class="nav__icons">
                <a class="nav__icon" href="https://en.wikipedia.org/wiki/Ankh" target="_blank"><img src="../img/svg/ankh.svg" alt="Ankh"></a>
                <a class="nav__icon" href="https://en.wikipedia.org/wiki/Memento_mori" target="_blank">
                    <img src="../img/svg/hourglass.svg" alt="Hourglass">
                    <img src="../img/svg/skull.svg" alt="Skull">
                </a>
            </div>
            <ul class="nav__menu">
                <li class="nav__item">
                    <a href="../work" class="nav__link link--colour">Work</a>
                </li>
                <li class="nav__item">
                    <a href="../books" class="nav__link link--colour">Books</a>
                </li>
                <li class="nav__item">
                    <a href="../photos" class="nav__link link--colour">Photos</a>
                </li>
            </ul>
            <div class="nav__icons">
                <a class="nav__icon" href="https://github.com/callumr00" target="_blank"><img src="../img/svg/github.svg" alt="Github Logo"></a>
                <a class="nav__icon" href="https://www.linkedin.com/in/callum-rafter" target="_blank"><img src="../img/svg/linkedin.svg" alt="LinkedIn Logo"></a>
            </div>
        </nav>
        `;
    }
}

window.customElements.define('header-container-sub', HeaderSub);


// Footer component
class FooterSub extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <footer>
            <div class="footer__icons">        
                <a class="footer__icon" href="https://github.com/callumr00" target="_blank"><img src="../img/svg/github.svg" alt="Github Logo"></a>
                <a class="footer__icon" href="https://www.linkedin.com/in/callum-rafter" target="_blank"><img src="../img/svg/linkedin.svg" alt="LinkedIn Logo"></a>
            </div>
        </footer>
        `;
    }
}

window.customElements.define('footer-container-sub', FooterSub);