import Aether from "@/core/aether/Aether.js";
import LinkButton from "@/components/LinkButton.jsx";


export default function not_found_page() {
    return new Aether.Component(
        <div class="flex-column flex-center padding-xl" style="min-height: 80vh;">
            <h1 class="color-white-light" style="font-size: 8rem; line-height: 0.75em;">
                404
            </h1>
            <h2 class="color-gradient" style="font-size: 2.5rem;">
                Page Not Found
            </h2>
            <p class="color-gray70">
                Oops! The page you're looking for doesn't seem to exist.
            </p>
            <br/>
            <LinkButton href="/">Take Me Home</LinkButton>
        </div>
    );
}