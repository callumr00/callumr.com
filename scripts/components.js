// Insert component elements.
components = ['header', 'footer'];

Promise.all(components.map(component => 
    fetch(`/components/${component}.html`).then(response => response.text())
)).then(data => {
    data.forEach((html, index) => {
        document.querySelector(`.${components[index]}`).innerHTML = html;
    });
    // Dispatch a custom event to signal when footer content has loaded.
    document.dispatchEvent(new CustomEvent('FooterContentLoaded'))
});
