import './index.css'
import Router from "@/core/router.js";


const home_page = (props) => {
    const html = `
    <div>
        <h1>HELLO WORLD!!</h1>
        <p>By Angel MD</p>
        <a href="/about" data-rl class="page-link">Click Me</a>
        <a href="/game" data-rl class="page-link">Start Game</a>
    </div>
    `;

    return [html, (() => {})];
}

const about_page = (props) => {
    const html = `
    <div>
        <h1>About Me!</h1>
        <p>By Angel MD</p>
        <a href="/" data-rl class="page-link">Click Me</a>
    </div>
    `;

    return [html, (() => {})];
}

const not_found_page = (props) => {
    const html = `
    <div>
        <h1>Page not found 404.</h1>
        <p>By Angel MD</p>
        <a href="/" data-rl class="page-link">Click Me</a>
    </div>
    `;

    return [html, (() => {})];
}

const render = async (component, props = {}, targetId = 'app') => {
    if (typeof component !== 'function') {
        console.error('Render error: Provided component is not a function.', component);
        return;
    }

    let result;

    try {
        result = await component(props);
    } catch (err) {
        console.error(`Render error in component '${component.name || 'anonymous'}':`, err);
        return;
    }

    if (!Array.isArray(result) || result.length !== 2) {
        console.error(`Render error: Component '${component.name || 'anonymous'}' should return [htmlString, afterMountFn]. Got:`, result);
        return;
    }

    const [html, afterMount] = result;

    if (typeof html !== 'string') {
        console.error(`Render error: First element returned by '${component.name || 'anonymous'}' must be an HTML string.`);
        return;
    }

    const container = document.getElementById(targetId);
    if (!container) {
        console.error(`Render error: No DOM element with id "${targetId}".`);
        return;
    }

    container.innerHTML = html;

    try {
        if (typeof afterMount === 'function') {
            afterMount();
        }
    } catch (err) {
        console.error(`afterMount error in component '${component.name || 'anonymous'}':`, err);
    }
};


const router = new Router("", {
    linkTag: "rl"
});

router
    .on('/', () => render(home_page))
    .on('/about', () => render(about_page))
    .notFound(() => render(not_found_page));