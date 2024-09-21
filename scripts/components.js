components = ['nav', 'footer'];

// Insert component elements.
Promise.all(components.map(component => 
    fetch(`/components/${component}.html`).then(response => response.text())
)).then(data => {
    data.forEach((html, index) => {
        document.querySelector(components[index]).innerHTML = html;
    });
    document.dispatchEvent(new CustomEvent('NavContentLoaded'))
});
