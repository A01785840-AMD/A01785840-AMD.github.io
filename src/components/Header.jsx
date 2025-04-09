import Aether from "@aether/Aether.js";


export default function Header(props) {
    return new Aether.Component(
        <header style="padding: 2rem 0 2rem;">
            <h1 class="color-gradient">{props.title}</h1>
            <p class="color-gray70">{props.description}</p>
            <br/>
            <hr style="border: none; height: 2px; background: linear-gradient(45deg, var(--color-primary), var(--color-secondary));"/>
        </header>
    );
}