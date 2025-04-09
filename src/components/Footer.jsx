import Aether from "@aether/Aether.js";


export default function Footer(props) {
    return new Aether.Component(
        <footer class="color-gray70 text-center">
            <hr/>
            <p>{props.description}</p>
        </footer>
    );
}