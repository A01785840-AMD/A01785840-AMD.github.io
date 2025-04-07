export default function home_page(props) {
    const html = `
    <div>
        <h1>HELLO WORLD!!</h1>
        <p>By Angel MD</p>
        <a href="/about" data-rl class="page-link">Click Me</a>
        <a href="/blog" data-rl class="page-link">Go to Blog</a>
    </div>
    `;

    return [html, (() => {})];
}
