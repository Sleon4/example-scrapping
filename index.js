(function() {
    const list = document.querySelectorAll('ul#list-computer > li.list-group-item');
    const products = [];

    for (let child of list) {
        if (typeof child === 'function' || typeof child === 'number') continue;

        products.push({
            title: child.querySelector('h4').textContent.trim(),
            description: child.querySelector('p').textContent.trim()
        });
    }

    return { jobs: products };
})();