export default function blog_page(props) {
    const html = `
    <div id="blog">
        <header>
            <h1>Blog sobre desarrollo web</h1>
            <p>Bienvenidos a mi blog sobre Git, GitHub y comandos de terminal</p>
        </header>
        
        <nav>
            <ul>
                <li><a href="/" data-rl class="page-link">Inicio</a></li>
                <li><a href="/blog/git" data-rl class="page-link">Git/GitHub</a></li>
                <li><a href="/blog/terminal" data-rl class="page-link">Terminal</a></li>
            </ul>
        </nav>
        
        <main>
            <section>
                <h2>Propósito de esta página</h2>
                <p>Este blog tiene como objetivo <strong>documentar</strong> y <em>compartir</em> conocimientos sobre:</p>
                <ul>
                    <li>El flujo de trabajo con <u>Git y GitHub</u></li>
                    <li>Comandos útiles de terminal</li>
                </ul>
                <hr>
            </section>
            
            <section>
                <h3>Lo que aprenderás</h3>
                <ol>
                    <li>Comandos básicos de Git</li>
                    <li>Flujo de trabajo colaborativo</li>
                    <li>Comandos esenciales de terminal</li>
                </ol>
                <br>
                <p>Todo el contenido refleja lo visto en <strong>clase</strong>.</p>
            </section>
            
            <section>
                <h3>Herramientas utilizadas</h3>
                <table>
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
            
            <section>
                <h3>Recursos adicionales</h3>
                <p>Visita la <a href="https://docs.github.com/es" target="_blank">documentación oficial de GitHub</a></p>
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Logo de GitHub" width="100">
            </section>
        </main>
        
        <footer>
            <p>Desarrollado por Angel MD</p>
        </footer>
    </div>
    `;

    return [html, (() => {})];
}