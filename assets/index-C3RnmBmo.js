var h=i=>{throw TypeError(i)};var b=(i,e,r)=>e.has(i)||h("Cannot "+r);var f=(i,e,r)=>e.has(i)?h("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,r);var l=(i,e,r)=>(b(i,e,"access private method"),r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();var s,p,u,m;class g{constructor(e="",{event:r="DOMContentLoaded",linkTag:o="router-link",delegateClick:t=!0,scrollToTop:n=!0}={}){f(this,s);const a=()=>{document.body.innerHTML=`
            <div style="margin 0; padding: 0; box-sizing: border-box; display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 100dvh; min-width: 100dvw; background-color: #242424;">
                <h1 style="color: white;  font: 700 5rem/0.8em system-ui, Avenir, Helvetica, Arial, sans-serif;">
                    404 | Page not Found
                </h1>
                <p style="color: white;  font: 400 1rem/0.5em system-ui, Avenir, Helvetica, Arial, sans-serif;">
                    Fallback Safe Route
                </p>
            </div>`};this.void_func=()=>{},this.safeRoute={before:()=>!0,handler:a,after:this.void_func},this.routes={},this.beforeGuards=[],this.afterGuards=[],this.base_path=e.replace(/\/+$/,""),this.link_tag=`data-${o}`,this.delegateClick=t,this.currentRoute=null,this.scrollToTop=n,document.addEventListener(r,l(this,s,m).bind(this)),window.addEventListener("popstate",()=>this.resolve(location.pathname,!1))}use(e,r="before"){r==="before"?this.beforeGuards.push(e):r==="after"&&this.afterGuards.push(e)}on(e,r){const o=l(this,s,u).call(this,e);return this.routes[o]=typeof r=="object"?{before:r.before||this.void_func,handler:r.handler,after:r.after||this.void_func}:{handler:r},this}notFound(e){return this.routes[404]=typeof e=="object"?{before:e.before||this.void_func,handler:e.handler,after:e.after||this.void_func}:{handler:e},this}reload(){return this.resolve(location.pathname,!1),this}group(e,r){r({on:(t,n)=>this.on(`${e}${t}`,n)})}resolve(e,r=!0){const o=l(this,s,u).call(this,e);for(const t of this.afterGuards)t==null||t(o);for(const t of this.beforeGuards)if((t==null?void 0:t(o))===!1)return;l(this,s,p).call(this,o,r)}}s=new WeakSet,p=function(e,r){var t,n;const o=this.routes[e]||this.routes[404]||this.safeRoute;(t=this.currentRoute)!=null&&t.after&&this.currentRoute.after(),!(o.before&&o.before(e)===!1)&&(r&&window.history.pushState({},"",this.base_path+e),(n=o.handler)==null||n.call(o),this.scrollToTop&&window.scrollTo(0,0),this.currentRoute=o)},u=function(e){try{let o=new URL(e,location.origin).pathname.replace(this.base_path,"");return o.startsWith("/")||(o="/"+o),o.replace(/\/+$/,"")||"/"}catch{return"/"}},m=function(){const e=`[${this.link_tag}]`;this.delegateClick?document.body.addEventListener("click",r=>{const o=r.target.closest(e);if(o){r.preventDefault();const t=o.getAttribute("href");t&&this.resolve(t)}}):document.querySelectorAll(e).forEach(r=>{r.addEventListener("click",o=>{o.preventDefault();const t=r.getAttribute("href");t&&this.resolve(t)})}),this.resolve(location.pathname,!1)};async function c(i,e={},r="app"){if(typeof i!="function"){console.error("Render error: Provided component is not a function.",i);return}let o;try{o=await i(e)}catch(d){console.error(`Render error in component '${i.name||"anonymous"}':`,d);return}if(!Array.isArray(o)||o.length!==2){console.error(`Render error: Component '${i.name||"anonymous"}' should return [htmlString, afterMountFn]. Got:`,o);return}const[t,n]=o;if(typeof t!="string"){console.error(`Render error: First element returned by '${i.name||"anonymous"}' must be an HTML string.`);return}const a=document.getElementById(r);if(!a){console.error(`Render error: No DOM element with id "${r}".`);return}a.innerHTML=t;try{typeof n=="function"&&n()}catch(d){console.error(`afterMount error in component '${i.name||"anonymous"}':`,d)}}function v(i){return[`
    <div>
        <h1>HELLO WORLD!!</h1>
        <p>By Angel MD</p>
        <a href="/about" data-rl class="page-link">Click Me</a>
        <a href="/blog" data-rl class="page-link">Go to Blog</a>
    </div>
    `,()=>{}]}function y(i){return[`
    <div>
        <h1>About Me!</h1>
        <p>By Angel MD</p>
        <a href="/" data-rl class="page-link">Click Me</a>
    </div>
    `,()=>{}]}function G(i){return[`
    <div>
        <h1>Page not found 404.</h1>
        <p>By Angel MD</p>
        <a href="/" data-rl class="page-link">Click Me</a>
    </div>
    `,()=>{}]}function L(i){return[`
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
    `,()=>{}]}const k=new g("",{linkTag:"rl"});k.on("/",()=>c(v)).on("/blog",()=>c(L)).on("/about",()=>c(y)).notFound(()=>c(G));
