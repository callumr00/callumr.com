// ROOT DIR

// Header component
class Header extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `

        <nav class="nav">
            <div class="nav__icons">
                <a class="nav__icon" href="https://en.wikipedia.org/wiki/Ankh" target="_blank"><img src="./img/svg/ankh.svg" alt="Ankh"></a>
                <a class="nav__icon" href="https://en.wikipedia.org/wiki/Memento_mori" target="_blank">
                    <img src="./img/svg/hourglass.svg" alt="Hourglass">
                    <img src="./img/svg/skull.svg" alt="Skull">
                </a>
            </div>
        <header>
            <a href="index" class="nav__home"><h1>CR</h1></a>
        </header>
            <div class="nav__icons">
                <a class="nav__icon" href="https://github.com/callumr00" target="_blank"><img src="./img/svg/github.svg" alt="Github Logo"></a>
                <a class="nav__icon" href="https://www.kaggle.com/callumrafter" target="_blank"><img src="./img/svg/kaggle.svg" alt="Kaggle Logo"></a>
                <a class="nav__icon" href="https://www.linkedin.com/in/callum-rafter" target="_blank"><img src="./img/svg/linkedin.svg" alt="LinkedIn Logo"></a>
            </div>
        </nav>
        `;
    }
}

window.customElements.define('header-container', Header);


// SUB DIR

// Header component
class HeaderSub extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `

        <nav class="nav">
            <div class="nav__icons">
                <a class="nav__icon" href="https://en.wikipedia.org/wiki/Ankh" target="_blank"><img src="../img/svg/ankh.svg" alt="Ankh"></a>
                <a class="nav__icon" href="https://en.wikipedia.org/wiki/Memento_mori" target="_blank">
                    <img src="../img/svg/hourglass.svg" alt="Hourglass">
                    <img src="../img/svg/skull.svg" alt="Skull">
                </a>
            </div>
        <header>
            <a href="../index" class="nav__home"><h1>CR</h1></a>
        </header>
            <div class="nav__icons">
                <a class="nav__icon" href="https://github.com/callumr00" target="_blank"><img src="../img/svg/github.svg" alt="Github Logo"></a>
                <a class="nav__icon" href="https://www.kaggle.com/callumrafter" target="_blank"><img src="../img/svg/kaggle.svg" alt="Kaggle Logo"></a>
                <a class="nav__icon" href="https://www.linkedin.com/in/callum-rafter" target="_blank"><img src="../img/svg/linkedin.svg" alt="LinkedIn Logo"></a>
            </div>
        </nav>
        `;
    }
}

window.customElements.define('header-container-sub', HeaderSub);