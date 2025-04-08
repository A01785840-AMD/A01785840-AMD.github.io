import Component from "@/core/component.js";

export default function not_found_page(props) {
    const html = `
    <div>
        <h1>Page not found 404.</h1>
        <p>By Angel MD</p>
        <a href="/" data-rl class="page-link">Click Me</a>
    </div>
    `;

    return new Component(html);
}