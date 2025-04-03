import './index.css'

const app = document.getElementById("app");

const renders = {
    home: () => {
        app.innerHTML = `
    <div>
        <h1>HELLO WORLD!!</h1>
        <p>By Angel MD</p>
        <a href="/about" class="page-link">Click Me</a>
        <a href="/game" class="page-link">Start Game</a>
    </div>`
    },
    about: () => {
        app.innerHTML = `
    <div>
        <h1>About Me!</h1>
        <p>By Angel MD</p>
        <a href="/" class="page-link">Click Me</a>
    </div>`
    },
    not_found: () => {
        app.innerHTML = `
        <div>
            <h1>Page not found 404.</h1>
            <p>By Angel MD</p>
            <a href="/" class="page-link">Click Me</a>
        </div>`
    },
}

const routes = {
    404: renders.not_found,
    '/': renders.home,
    '/about': renders.about
}

const router = (path) => {
    window.history.pushState({}, "", path);
    const route = routes[path] || routes[404];

    route();

    document.querySelectorAll(".page-link").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            const path = event.target.getAttribute("href");
            router(path);
        })
    });
}

document.addEventListener("DOMContentLoaded", () => {
    router(window.location.pathname);
});

window.addEventListener("popstate", () => {
    router(window.location.pathname);
})