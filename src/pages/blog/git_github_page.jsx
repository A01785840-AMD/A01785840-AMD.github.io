import Aether from "@/core/aether/Aether.js";

import Section from "@/components/Section.js";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import NavBar from "@/components/NavBar.jsx";
import Table from "@/components/Table.js";

export default function git_github_page() {
    return new Aether.Component(
        <div style="padding: 0 2rem;">
            <Header
                title="Guía Completa de Git y GitHub"
                description="Domina el flujo de trabajo con Git y GitHub desde la terminal"
            />

            <NavBar links={[
                { href: "/blog", text: "Blog" },
                { href: "/blog/git", text: "Git | GitHub" },
                { href: "/blog/terminal", text: "Terminal" }
            ]}/>
            <br/>

            <Section title="¿Qué es Git?">
                <p>Git es un sistema de control de versiones distribuido que te permite gestionar el historial de tus
                   proyectos.</p>
                <br/>
                <h2>¿Qué es GitHub?</h2>
                <p>GitHub es una plataforma en línea para alojar tus repositorios Git, colaborar con otros y gestionar
                   el desarrollo de software.</p>
            </Section>

            <Section title="Comandos Básicos de Git">
                <Table
                    headers={["Comando", "Descripción"]}
                    rows={[
                        ["git init", "Inicializa un nuevo repositorio Git"],
                        ["git clone <url>", "Clona un repositorio remoto"],
                        ["git status", "Muestra el estado del repositorio"],
                        ["git add .", "Agrega cambios al staging area"],
                        ["git commit -m 'mensaje'", "Confirma los cambios"],
                        ["git push", "Envía cambios al repositorio remoto"]
                    ]}
                />
            </Section>

            <Section title="Flujo de trabajo colaborativo">
                <ol>
                    <li>Clona el repositorio: <code>git clone &lt;url&gt;</code></li>
                    <li>Crea una rama: <code>git checkout -b feature/rama</code></li>
                    <li>Haz cambios y guarda con <code>git commit</code></li>
                    <li>Sube tu rama: <code>git push origin feature/rama</code></li>
                    <li>Haz un Pull Request desde GitHub</li>
                    <li>Solicita revisión y mergea</li>
                </ol>
            </Section>

            <Section title="Consejos adicionales">
                <ul>
                    <li>Usa commits descriptivos</li>
                    <li>Actualiza tu rama con <code>git pull origin main</code> regularmente</li>
                    <li>Evita conflictos trabajando en ramas separadas</li>
                </ul>
            </Section>

            <Section title="Enlaces útiles">
                <p>
                    Documentación oficial de Git: <a href="https://git-scm.com/doc"
                                                     target="_blank">git-scm.com/doc</a><br/>
                    Documentación oficial de GitHub: <a href="https://docs.github.com/es"
                                                        target="_blank">docs.github.com/es</a>
                </p>
            </Section>

            <Footer description={`Escrito por Angel MD © ${new Date().getFullYear()}`}/>
        </div>
    );
}
