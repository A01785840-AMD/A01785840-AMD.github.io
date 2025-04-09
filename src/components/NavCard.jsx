import Aether from "@aether/Aether.js";


export default function NavCard(props) {
    return new Aether.Component(
        <a href={props.href} data-rl
           class="flex-grow-equal hover-transition-box-shadow
                  radius-m border-gray70 padding-xl color-white">
            <h2>{props.title}</h2>
            <p class="color-gray70">{props.description}</p>
            <span class="hover-parent-appear" style="font-size: 1.5rem;position: absolute;bottom: 1rem;right: 1.5rem;">
                →
            </span>
        </a>
    );
}
