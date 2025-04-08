import Aether from "@/core/aether/Aether.js";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import Section from "@/components/Section.jsx";
import NavBar from "@/components/NavBar.jsx";
import Table from "@/components/Table.jsx";
import styles from "./blog.module.css";


export default function blog_page() {
    return new Aether.Component(
        <div class={styles.blogContainer}>
            <Header title="Blog Desarrollo Web"
                    description="Bienvenidos a mi blog sobre Git, GitHub y Comandos de Terminal"/>

            <NavBar links={[
                { href: "/", text: "Inicio" },
                { href: "/blog/git", text: "Git | GitHub" },
                { href: "/blog/terminal", text: "Terminal" }
            ]}/>

            <Section title="Propósito de esta página"
                     description="Este blog tiene como objetivo <strong>documentar</strong> y
                   <em>compartir</em> conocimientos sobre:">
                <ul>
                    <li>El flujo de trabajo con <u>Git y GitHub</u></li>
                    <li>Comandos útiles de terminal</li>
                </ul>
            </Section>

            <Section title="Lo que aprenderás">
                <ol>
                    <li>Comandos básicos de Git</li>
                    <li>Flujo de trabajo colaborativo</li>
                    <li>Comandos esenciales de terminal</li>
                </ol>
                <p>Todo el contenido refleja lo visto en <strong>clase</strong>.</p>
            </Section>

            <Section title="Herramientas Utilizadas">
                <Table
                    className={styles.blogTable}
                    headers={["Herramienta", "Descripción"]}
                    rows={[
                        ["Git", "Control de versiones"],
                        ["GitHub", "Plataforma de colaboración"],
                        ["Terminal", "Interfaz de línea de comandos"]
                    ]}
                />
            </Section>

            <Section title="Recursos adicionales">
                <p>
                    Visita la
                    <a href="https://docs.github.com/es" target="_blank">
                        documentación oficial de GitHub
                    </a>
                </p>
                <div class={styles.blogResource}>
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                         alt="Logo de GitHub" width="100"/>
                    <p>GitHub ofrece una documentación completa para ayudarte a dominar sus herramientas</p>
                </div>
            </Section>

            <Footer description={`Desarrollado por Angel MD © ${new Date().getFullYear()}`}/>
        </div>
    );
}