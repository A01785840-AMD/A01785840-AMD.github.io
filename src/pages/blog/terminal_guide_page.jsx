import Aether from "@/core/aether/Aether.js";

import Section from "@/components/Section.js";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import NavBar from "@/components/NavBar.jsx";
import Table from "@/components/Table.jsx";


export default function terminal_guide_page() {
    return new Aether.Component(
        <div style="padding: 0 2rem;">
            <Header
                title="Guía de Comandos de Terminal (Linux)"
                description="Aprende a usar la terminal como un pro"
            />

            <NavBar links={[
                { href: "/blog", text: "Blog" },
                { href: "/blog/git", text: "Git | GitHub" },
                { href: "/blog/terminal", text: "Terminal" }
            ]}/>

            <br/>

            <Section title="¿Qué es la terminal?">
                <p>
                    La terminal es una interfaz de línea de comandos que te permite interactuar directamente con el
                    sistema operativo mediante comandos de texto.
                </p>
            </Section>

            <Section title="Comandos básicos">
                <Table
                    headers={["Comando", "Descripción"]}
                    rows={[
                        ["pwd", "Muestra el directorio actual"],
                        ["ls", "Lista los archivos y carpetas del directorio"],
                        ["cd [dir]", "Cambia al directorio indicado"],
                        ["mkdir [nombre]", "Crea un nuevo directorio"],
                        ["touch [archivo]", "Crea un nuevo archivo vacío"],
                        ["rm [archivo]", "Elimina un archivo"],
                        ["rm -r [dir]", "Elimina un directorio"],
                        ["rmdir [dir]", "Elimina un directorio vacío"]
                    ]}
                />
            </Section>

            <Section title="Gestión de archivos y directorios">
                <ol>
                    <li>Navega usando <code>cd</code> y <code>ls</code></li>
                    <li>Crea archivos con <code>touch</code></li>
                    <li>Organiza carpetas con <code>mkdir</code></li>
                    <li>Elimina archivos con <code>rm</code></li>
                    <li>Visualiza el contenido con <code>cat</code>, <code>less</code> o <code>nano</code></li>
                </ol>
            </Section>

            <Section title="Comandos útiles adicionales">
                <Table
                    headers={["Comando", "Uso"]}
                    rows={[
                        ["clear", "Limpia la pantalla de la terminal"],
                        ["history", "Muestra el historial de comandos"],
                        ["man <comando>", "Muestra el manual del comando"],
                        ["echo <texto>", "Imprime texto en la terminal"],
                        ["sudo", "Ejecuta comandos como administrador"],
                        ["exit", "Cierra la terminal"]
                    ]}
                />
            </Section>

            <Section title="Recomendaciones">
                <ul>
                    <li>Practica diariamente para memorizar comandos</li>
                    <li>Explora combinaciones como <code>ls -la</code></li>
                    <li>Lee el manual de cada comando usando <code>man</code></li>
                </ul>
            </Section>

            <Section title="Recursos útiles">
                <p>
                    Documentación oficial de Bash: <a href="https://www.gnu.org/software/bash/manual/"
                                                      target="_blank">gnu.org/bash/manual</a><br/>
                    Tutorial de la terminal (en español): <a href="https://linuxcommand.org"
                                                             target="_blank">linuxcommand.org</a>
                </p>
            </Section>

            <Footer description={`Desarrollado por Angel MD © ${new Date().getFullYear()}`}/>
        </div>
    );
}
