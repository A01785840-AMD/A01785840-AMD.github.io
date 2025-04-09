import Aether from "@aether/Aether.js";


export default function about_page() {
    return new Aether.Component(<div>
        <h1>About Me!</h1>
        <p>By Angel MD</p>
        <a href="/" data-rl class="page-link">Click Me</a>
    </div>);
}
