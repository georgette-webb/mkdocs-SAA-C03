document.addEventListener('DOMContentLoaded', () => {
    const h1Elements = document.querySelectorAll('h1');
    h1Elements.forEach(el => {
        if (el.textContent === 'Index') {
            el.style.display = 'none';
        }
    });
});
