export default function home_page(props) {
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
