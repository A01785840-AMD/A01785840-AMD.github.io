import Aether from "@aether/Aether.js";


export default function NavBar({ links = [] }) {
    const navLinks = links.length > 0 ? links : [
        { href: "/", text: "Inicio" }
    ];

    return new Aether.Component(
        <nav class="bg-black-light radius-l padding-m">
            <ul class="flex-row flex-center gap-l" style="list-style: none;">
                {navLinks.map(link => (
                    <li>
                        <a class="hover-transition hover-shadow-l radius-m hover-bg-black color-white"
                           style="padding: 0.5rem 1rem;"
                           href={link.href} data-rl>
                            {link.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}