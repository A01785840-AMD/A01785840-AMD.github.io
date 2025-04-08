import Component from "@/core/component.js";
import styles from "./blog.module.css";


export default function blog_page() {
    return new Component(`
    <div class="${styles.blogContainer}">
        <header class="${styles.blogHeader}">
            <h1>Blog Desarrollo Web</h1>
            <p>Bienvenidos a mi blog sobre Git, GitHub y Comandos de Terminal</p>
        </header>
        
        <nav class="${styles.blogNav}">
            <ul>
                <li><a href="/" data-rl>Inicio</a></li>
                <li><a href="/blog/git" data-rl>Git | GitHub</a></li>
                <li><a href="/blog/terminal" data-rl>Terminal</a></li>
            </ul>
        </nav>
        
        <main>
            <section class="${styles.blogSection}">
                <h2>Propósito de esta página</h2>
                <p>Este blog tiene como objetivo <strong>documentar</strong> y <em>compartir</em> conocimientos sobre:</p>
                <ul>
                    <li>El flujo de trabajo con <u>Git y GitHub</u></li>
                    <li>Comandos útiles de terminal</li>
                </ul>
            </section>
            
            <section class="${styles.blogSection}">
                <h3>Lo que aprenderás</h3>
                <ol>
                    <li>Comandos básicos de Git</li>
                    <li>Flujo de trabajo colaborativo</li>
                    <li>Comandos esenciales de terminal</li>
                </ol>
                <p>Todo el contenido refleja lo visto en <strong>clase</strong>.</p>
            </section>
            
            <section class="${styles.blogSection}">
                <h3>Herramientas utilizadas</h3>
                <table class="${styles.blogTable}">
                    <tr>
                        <th>Herramienta</th>
                        <th>Descripción</th>
                    </tr>
                    <tr>
                        <td>Git</td>
                        <td>Control de versiones</td>
                    </tr>
                    <tr>
                        <td>GitHub</td>
                        <td>Plataforma de colaboración</td>
                    </tr>
                    <tr>
                        <td>Terminal</td>
                        <td>Interfaz de línea de comandos</td>
                    </tr>
                </table>
            </section>
            
            <section class="${styles.blogSection}">
                <h3>Recursos adicionales</h3>
                <p>Visita la <a href="https://docs.github.com/es" target="_blank">documentación oficial de GitHub</a></p>
                <div class="${styles.blogResource}">
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Logo de GitHub" width="100">
                    <p>GitHub ofrece una documentación completa para ayudarte a dominar sus herramientas</p>
                </div>
            </section>
        </main>
        
        <footer class="${styles.blogFooter}">
            <p>Desarrollado por Angel MD © ${new Date().getFullYear()}</p>
        </footer>
    </div>
    `);
}