import Component from "@/core/component.js";

export default function about_page(props) {
    const html = `
    <div>
        <h1>About Me!</h1>
        <p>By Angel MD</p>
        <a href="/" data-rl class="page-link">Click Me</a>
    </div>
    `;

    return new Component(html);
}
