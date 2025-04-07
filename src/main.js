import './index.css'
import Router from "@/core/router.js";

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

const router = new Router();

router
    .on('/', renders.home)
    .on('/about', renders.about)
    .notFound(renders.not_found);