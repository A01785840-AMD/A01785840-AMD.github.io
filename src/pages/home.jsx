import Aether from "@/core/aether/Aether.js";
import NavCard from "@/components/NavCard.jsx";
import Accent from "@/components/Accent.jsx";


export default function home_page() {
    return new Aether.Component(
        <div class="padding-xxl">
            <br/>
            <div>
                <h1 class="color-gradient">HELLO WORLD</h1>
                <p class="color-gray70">Welcome to Angel MD's Web Page for TC2005B</p>
                <Accent/>
            </div>

            <br/>

            <div class="flex-row flex-wrap gap-xl">
                <NavCard href="/about" title="About Me" description="Learn more about my skills and experience"/>
                <NavCard href="/blog" title="Blog" description="Check out my latest articles and thoughts"/>
                <NavCard href="/projects" title="Projects" description="View my portfolio of recent work"/>
                <NavCard href="/contact" title="Contact" description="Get in touch with me"/>
            </div>
        </div>
    );
}
