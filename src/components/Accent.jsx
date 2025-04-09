import Aether from "@aether/Aether.js";


export default function Accent() {
    return new Aether.Component(
        <div
            style="height: 4px; width: 80px; background: linear-gradient(90deg, #3a7bd5, #845ec2); margin: 2rem 0; border-radius: 2px;"></div>
    );
}