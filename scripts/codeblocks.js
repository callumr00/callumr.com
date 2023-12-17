// Wait until elements are present and styled, then remove indentation.
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('pre code').forEach((block) => {
        let text = block.innerHTML;
        // Match the smallest number of leading spaces in any line.
        let matches = text.match(/^[ \t]*(?=\S)/gm);
        if (matches) {
            let min = Math.min(...matches.map(el => el.length));
            let regex = new RegExp('^[ \\t]{' + min + '}', 'gm');
            block.innerHTML = text.replace(regex, '');
        }
    });
    hljs.highlightAll();
});