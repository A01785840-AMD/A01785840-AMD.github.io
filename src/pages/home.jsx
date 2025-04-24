import Aether from "@/core/aether/Aether.js";
import NavCard from "@/components/NavCard.jsx";
import Accent from "@/components/Accent.js";


export default function home_page() {
    return new Aether.Component(
        <div class="padding-xxl">
            <br/>
            <div>
                <h1 class="color-gradient animate-typing">HELLO WORLD</h1>
                <p class="color-gray70">Welcome to Angel MD's Web Page for TC2005B</p>
                <Accent/>
            </div>

            <br/>

            <div class="flex-row flex-wrap gap-xl">
                <NavCard href="/about" title="About Me" description="Learn more about my skills and experience"/>
                <NavCard href="/blog" title="Blog" description="Check out my latest articles and thoughts"/>
                <NavCard href="/simpleweb" title="Simple WebPage" description="View my simple web page"/>
                <NavCard href="/cssgrid" title="CSS Grid Examples" description="Explore interactive CSS Grid layouts"/>
                <NavCard href="/contact" title="Contact" description="Get in touch with me"/>
                <NavCard href="/game" title="Game" description=""/>
            </div>
        </div>
    );
}
