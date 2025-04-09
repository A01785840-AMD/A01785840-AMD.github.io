import Aether from "@aether/Aether.js";


export default function LinkButton(props, ...children) {
    return new Aether.Component(
        <a href={props.href} data-rl
           class="hover-transition color-white bg-black-light radius-xxl hover-shadow-l"
           style="padding: 1rem 2rem;"
        >
            {...children}
        </a>
    )
}