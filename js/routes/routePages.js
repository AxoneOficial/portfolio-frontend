document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', event => {
            const href = link.getAttribute('href');

            if (href && href.startsWith('#')) {
                event.preventDefault();

                switch (href) {
                    case '#main':
                        window.location.href = './../index.html';
                        break;
                    case '#projects':
                        window.location.href = './../pages/projects.html';
                        break;
                    case '#about':
                        window.location.href = './../pages/about.html';
                        break;
                    case '#contact':
                        window.location.href = './../pages/contacto.html';
                        break;
                    default:
                        console.warn(`Ruta no reconocida: ${href}`);
                }
            }
        });
    });
});
