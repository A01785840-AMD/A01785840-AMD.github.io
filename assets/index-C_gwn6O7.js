var H=i=>{throw TypeError(i)};var R=(i,o,r)=>o.has(i)||H("Cannot "+r);var S=(i,o,r)=>o.has(i)?H("Cannot add the same private member more than once"):o instanceof WeakSet?o.add(i):o.set(i,r);var v=(i,o,r)=>(R(i,o,"access private method"),r);(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))t(l);new MutationObserver(l=>{for(const n of l)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function r(l){const n={};return l.integrity&&(n.integrity=l.integrity),l.referrerPolicy&&(n.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?n.credentials="include":l.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(l){if(l.ep)return;l.ep=!0;const n=r(l);fetch(l.href,n)}})();var f,j,$,_;class T{constructor(o="",{event:r="DOMContentLoaded",linkTag:t="router-link",delegateClick:l=!0,scrollToTop:n=!0}={}){S(this,f);const a=()=>{document.body.innerHTML=`
            <div style="margin 0; padding: 0; box-sizing: border-box; display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 100dvh; min-width: 100dvw; background-color: #242424;">
                <h1 style="color: white;  font: 700 5rem/0.8em system-ui, Avenir, Helvetica, Arial, sans-serif;">
                    404 | Page not Found
                </h1>
                <p style="color: white;  font: 400 1rem/0.5em system-ui, Avenir, Helvetica, Arial, sans-serif;">
                    Fallback Safe Route
                </p>
            </div>`};this.void_func=()=>{},this.safeRoute={before:()=>!0,handler:a,after:this.void_func},this.routes={},this.beforeGuards=[],this.afterGuards=[],this.base_path=o.replace(/\/+$/,""),this.link_tag=`data-${t}`,this.delegateClick=l,this.currentRoute=null,this.scrollToTop=n,document.addEventListener(r,v(this,f,_).bind(this)),window.addEventListener("popstate",()=>this.resolve(location.pathname,!1))}use(o,r="before"){r==="before"?this.beforeGuards.push(o):r==="after"&&this.afterGuards.push(o)}on(o,r){const t=v(this,f,$).call(this,o);return this.routes[t]=typeof r=="object"?{before:r.before||this.void_func,handler:r.handler,after:r.after||this.void_func}:{handler:r},this}notFound(o){return this.routes[404]=typeof o=="object"?{before:o.before||this.void_func,handler:o.handler,after:o.after||this.void_func}:{handler:o},this}reload(){return this.resolve(location.pathname,!1),this}group(o,r){const t={on:(l,n)=>(this.on(`${o}${l}`,n),t)};r(t)}resolve(o,r=!0){const t=v(this,f,$).call(this,o);for(const l of this.afterGuards)l==null||l(t);for(const l of this.beforeGuards)if((l==null?void 0:l(t))===!1)return;v(this,f,j).call(this,t,r)}}f=new WeakSet,j=function(o,r){var l,n;const t=this.routes[o]||this.routes[404]||this.safeRoute;(l=this.currentRoute)!=null&&l.after&&this.currentRoute.after(),!(t.before&&t.before(o)===!1)&&(r&&window.history.pushState({},"",this.base_path+o),(n=t.handler)==null||n.call(t),this.scrollToTop&&window.scrollTo(0,0),this.currentRoute=t)},$=function(o){try{let t=new URL(o,location.origin).pathname;return this.base_path&&t.startsWith(this.base_path)&&(t=t.slice(this.base_path.length)),t.startsWith("/")||(t="/"+t),t.replace(/\/+$/,"")||"/"}catch{return"/"}},_=function(){const o=`[${this.link_tag}]`;this.delegateClick?document.body.addEventListener("click",r=>{const t=r.target.closest(o);if(t){r.preventDefault();const l=t.getAttribute("href");l&&this.resolve(l)}}):document.querySelectorAll(o).forEach(r=>{r.addEventListener("click",t=>{t.preventDefault();const l=r.getAttribute("href");l&&this.resolve(l)})}),this.resolve(location.pathname,!1)};let D=0;const C=new Map,w=new Map;function q(){return`component_${D++}`}function B(){w.clear();for(const[i,o]of C.entries())w.set(i,o);C.clear()}function z(){w.clear(),C.clear()}class A{constructor(o,r=()=>{},t=()=>{}){this.id=q(),this.html=o,this.afterRender=r,this.cleanupFunction=t,C.set(this.id,this)}}function P(i,o,...r){const t=i(o,...r);if(!(t instanceof A))throw new Error(`Component '${i.name}' must return an instance of Component.`);return t.html}function F(i,o,...r){if(!i)return console.error("Error: Missing tag in handleHtmlElement"),"";o=o||{};const t=Object.entries(o).filter(([a])=>a!=="children"&&a!==void 0&&o[a]!==void 0).map(([a,s])=>{try{return`${a}="${s}"`}catch(c){return console.error(`Error processing attribute ${a}:`,c),""}}).filter(Boolean).join(" "),l=(r||[]).filter(a=>a!=null).map(a=>{try{return typeof a=="string"?a:a&&a.html?a.html:(console.warn(`Non-renderable child found in ${i}:`,a),String(a))}catch(s){return console.error(`Error rendering child in ${i}:`,s),""}}).join(""),n=t?` ${t}`:"";return`<${i}${n}>${l}</${i}>`}function O(i,o={},...r){return o=o||{},r=(o.children||[]).concat(r).flat(),o.children=null,typeof i=="function"?P(i,o,...r):F(i,o,...r)}async function N(i,o={},r="app"){var n,a;const t=document.getElementById(r);if(!t)throw new Error(`No element with id "${r}"`);for(const s of w.values())try{await((n=s.cleanupFunction)==null?void 0:n.call(s))}catch(c){console.warn(`Cleanup failed for ${s.id}`,c)}let l;try{l=await i(o)}catch(s){console.error(`Render failed in component '${i.name||"anonymous"}':`,s);return}t.innerHTML=l.html;for(const s of C.values())try{await((a=s.afterRender)==null?void 0:a.call(s))}catch(c){console.warn(`afterRender failed for ${s.id}`,c)}B()}function I(i,o={}){let r;try{r=i(o)}catch(t){console.error(`Render failed in component '${i.name||"anonymous"}':`,t);return}return z(),r.html}async function W(i,o="app"){var t,l;const r=document.getElementById(o);if(!r)throw new Error(`No element with id "${o}"`);for(const n of w.values())try{await((t=n.cleanupFunction)==null?void 0:t.call(n))}catch(a){console.warn(`Cleanup failed for ${n.id}`,a)}r.innerHTML=i;for(const n of C.values())try{await((l=n.afterRender)==null?void 0:l.call(n))}catch(a){console.warn(`afterRender failed for ${n.id}`,a)}}var M=function(i,o,r,t){var l;o[0]=0;for(var n=1;n<o.length;n++){var a=o[n++],s=o[n]?(o[0]|=a?1:2,r[o[n++]]):o[++n];a===3?t[0]=s:a===4?t[1]=Object.assign(t[1]||{},s):a===5?(t[1]=t[1]||{})[o[++n]]=s:a===6?t[1][o[++n]]+=s+"":a?(l=i.apply(s,M(i,s,r,["",null])),t.push(l),s[0]?o[0]|=2:(o[n-2]=0,o[n]=l)):t.push(s)}return t},k=new Map;function U(i){var o=k.get(this);return o||(o=new Map,k.set(this,o)),(o=M(this,o.get(i)||(o.set(i,o=function(r){for(var t,l,n=1,a="",s="",c=[0],g=function(m){n===1&&(m||(a=a.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?c.push(0,m,a):n===3&&(m||a)?(c.push(3,m,a),n=2):n===2&&a==="..."&&m?c.push(4,m,0):n===2&&a&&!m?c.push(5,0,!0,a):n>=5&&((a||!m&&n===5)&&(c.push(n,0,a,l),n=6),m&&(c.push(n,m,0,l),n=6)),a=""},p=0;p<r.length;p++){p&&(n===1&&g(),g(p));for(var y=0;y<r[p].length;y++)t=r[p][y],n===1?t==="<"?(g(),c=[c],n=3):a+=t:n===4?a==="--"&&t===">"?(n=1,a=""):a=t+a[0]:s?t===s?s="":a+=t:t==='"'||t==="'"?s=t:t===">"?(g(),n=1):n&&(t==="="?(n=5,l=a,a=""):t==="/"&&(n<5||r[p][y+1]===">")?(g(),n===3&&(c=c[0]),n=c,(c=c[0]).push(2,0,n),n=0):t===" "||t==="	"||t===`
`||t==="\r"?(g(),n=2):a+=t),n===3&&a==="!--"&&(n=4,c=c[0])}return g(),c}(i)),o),arguments,[])).length>1?o:o[0]}const e={forgeComponent:O,Component:A,render:N,build:I,mount:W},u=U.bind(e.forgeComponent);function Q(i,...o){return new e.Component(e.forgeComponent("a",{href:i.href,"data-rl":!0,class:"hover-transition color-white bg-black-light radius-xxl hover-shadow-l",style:"padding: 1rem 2rem;"},...o))}function V(){return new e.Component(e.forgeComponent("div",{class:"flex-column flex-center padding-xl",style:"min-height: 80vh;"},e.forgeComponent("h1",{class:"color-white-light",style:"font-size: 8rem; line-height: 0.75em;"},"404"),e.forgeComponent("h2",{class:"color-gradient",style:"font-size: 2.5rem;"},"Page Not Found"),e.forgeComponent("p",{class:"color-gray70"},"Oops! The page you're looking for doesn't seem to exist."),e.forgeComponent("br",null),e.forgeComponent(Q,{href:"/"},"Take Me Home")))}function b(i){return new e.Component(e.forgeComponent("a",{href:i.href,"data-rl":!0,class:`flex-grow-equal hover-transition-box-shadow
                  radius-m border-gray70 padding-xl color-white`},e.forgeComponent("h2",null,i.title),e.forgeComponent("p",{class:"color-gray70"},i.description),e.forgeComponent("span",{class:"hover-parent-appear",style:"font-size: 1.5rem;position: absolute;bottom: 1rem;right: 1.5rem;"},"→")))}function Y(){return new e.Component(u`
        
        <div data-aether="1g9ouwl"></div>
    `)}function J(){return new e.Component(e.forgeComponent("div",{class:"padding-xxl"},e.forgeComponent("br",null),e.forgeComponent("div",null,e.forgeComponent("h1",{class:"color-gradient animate-typing"},"HELLO WORLD"),e.forgeComponent("p",{class:"color-gray70"},"Welcome to Angel MD's Web Page for TC2005B"),e.forgeComponent(Y,null)),e.forgeComponent("br",null),e.forgeComponent("div",{class:"flex-row flex-wrap gap-xl"},e.forgeComponent(b,{href:"/about",title:"About Me",description:"Learn more about my skills and experience"}),e.forgeComponent(b,{href:"/blog",title:"Blog",description:"Check out my latest articles and thoughts"}),e.forgeComponent(b,{href:"/simpleweb",title:"Simple WebPage",description:"View my simple web page"}),e.forgeComponent(b,{href:"/cssgrid",title:"CSS Grid Examples",description:"Explore interactive CSS Grid layouts"}),e.forgeComponent(b,{href:"/contact",title:"Contact",description:"Get in touch with me"}))))}function K(){return new e.Component(e.forgeComponent("div",null,e.forgeComponent("h1",null,"About Me!"),e.forgeComponent("p",null,"By Angel MD"),e.forgeComponent("a",{href:"/","data-rl":!0,class:"page-link"},"Click Me")))}function d(i,...o){return new e.Component(u`
        
        <section data-aether="z6ux5j">
            <h2>${i.title}</h2>
            <p class="color-gray70">${i.description}</p>
            ${o}
        </section>
    `)}function E(i){return new e.Component(e.forgeComponent("header",{style:"padding: 2rem 0 2rem;"},e.forgeComponent("h1",{class:"color-gradient"},i.title),e.forgeComponent("p",{class:"color-gray70"},i.description),e.forgeComponent("br",null),e.forgeComponent("hr",{style:"border: none; height: 2px; background: linear-gradient(45deg, var(--color-primary), var(--color-secondary));"})))}function L(i){return new e.Component(e.forgeComponent("footer",{class:"color-gray70 text-center"},e.forgeComponent("hr",null),e.forgeComponent("p",null,i.description)))}function h({links:i=[]}){const o=i.length>0?i:[{href:"/",text:"Inicio"}];return new e.Component(e.forgeComponent("nav",{class:"bg-black-light radius-l padding-m"},e.forgeComponent("ul",{class:"flex-row flex-center gap-l",style:"list-style: none;"},o.map(r=>e.forgeComponent("li",null,e.forgeComponent("a",{class:"hover-transition hover-shadow-l radius-m hover-bg-black color-white",style:"padding: 0.5rem 1rem;",href:r.href,"data-rl":!0},r.text))))))}function x({headers:i=[],rows:o=[]}){return new e.Component(u`
        
        <table data-aether="qrbe57">
            <thead>
            <tr>
                ${i.map(r=>`<th>${r}</th>`)}
            </tr>
            </thead>
            <tbody>
            ${o.map(r=>u`<tr>
                ${r.map(t=>`<td>${t}</td>`)}
            </tr>`)}
            </tbody>
        </table>
    `)}function X(){return new e.Component(e.forgeComponent("div",{style:"padding: 0 2rem;"},e.forgeComponent(E,{title:"Blog Desarrollo Web",description:"Bienvenidos a mi blog sobre Git, GitHub y Comandos de Terminal"}),e.forgeComponent(h,{links:[{href:"/",text:"Inicio"},{href:"/blog/git",text:"Git | GitHub"},{href:"/blog/terminal",text:"Terminal"}]}),e.forgeComponent("br",null),e.forgeComponent(d,{title:"Propósito de esta página",description:`Este blog tiene como objetivo <strong>documentar</strong> y
                     <em>compartir</em> conocimientos sobre:`},e.forgeComponent("ul",null,e.forgeComponent("li",null,"El flujo de trabajo con ",e.forgeComponent("u",null,"Git y GitHub")),e.forgeComponent("li",null,"Comandos útiles de terminal"))),e.forgeComponent(d,{title:"Lo que aprenderás"},e.forgeComponent("ol",null,e.forgeComponent("li",null,"Comandos básicos de Git"),e.forgeComponent("li",null,"Flujo de trabajo colaborativo"),e.forgeComponent("li",null,"Comandos esenciales de terminal")),e.forgeComponent("p",null,"Todo el contenido refleja lo visto en ",e.forgeComponent("strong",null,"clase"),".")),e.forgeComponent(d,{title:"Herramientas Utilizadas",description:""},e.forgeComponent(x,{headers:["Herramienta","Descripción"],rows:[["Git","Control de versiones"],["GitHub","Plataforma de colaboración"],["Terminal","Interfaz de línea de comandos"]]}),e.forgeComponent("br",null),e.forgeComponent("h2",null,"Recursos adicionales"),e.forgeComponent("p",null,"Visita la ",e.forgeComponent("a",{href:"https://docs.github.com/es",target:"_blank"}," documentación oficial de GitHub")),e.forgeComponent("br",null),e.forgeComponent("div",{class:"flex-row gap-m"},e.forgeComponent("img",{class:"radius-m hover-scale",src:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",alt:"Logo de GitHub",width:"100"}),e.forgeComponent("p",null,"GitHub ofrece una documentación completa para ayudarte a dominar sus herramientas"))),e.forgeComponent(L,{description:`Desarrollado por Angel MD © ${new Date().getFullYear()}`})))}function Z(){return new e.Component(e.forgeComponent("div",{style:"padding: 0 2rem;"},e.forgeComponent(E,{title:"Guía Completa de Git y GitHub",description:"Domina el flujo de trabajo con Git y GitHub desde la terminal"}),e.forgeComponent(h,{links:[{href:"/blog",text:"Blog"},{href:"/blog/git",text:"Git | GitHub"},{href:"/blog/terminal",text:"Terminal"}]}),e.forgeComponent("br",null),e.forgeComponent(d,{title:"¿Qué es Git?"},e.forgeComponent("p",null,"Git es un sistema de control de versiones distribuido que te permite gestionar el historial de tus proyectos."),e.forgeComponent("br",null),e.forgeComponent("h2",null,"¿Qué es GitHub?"),e.forgeComponent("p",null,"GitHub es una plataforma en línea para alojar tus repositorios Git, colaborar con otros y gestionar el desarrollo de software.")),e.forgeComponent(d,{title:"Comandos Básicos de Git"},e.forgeComponent(x,{headers:["Comando","Descripción"],rows:[["git init","Inicializa un nuevo repositorio Git"],["git clone <url>","Clona un repositorio remoto"],["git status","Muestra el estado del repositorio"],["git add .","Agrega cambios al staging area"],["git commit -m 'mensaje'","Confirma los cambios"],["git push","Envía cambios al repositorio remoto"]]})),e.forgeComponent(d,{title:"Flujo de trabajo colaborativo"},e.forgeComponent("ol",null,e.forgeComponent("li",null,"Clona el repositorio: ",e.forgeComponent("code",null,"git clone <url>")),e.forgeComponent("li",null,"Crea una rama: ",e.forgeComponent("code",null,"git checkout -b feature/rama")),e.forgeComponent("li",null,"Haz cambios y guarda con ",e.forgeComponent("code",null,"git commit")),e.forgeComponent("li",null,"Sube tu rama: ",e.forgeComponent("code",null,"git push origin feature/rama")),e.forgeComponent("li",null,"Haz un Pull Request desde GitHub"),e.forgeComponent("li",null,"Solicita revisión y mergea"))),e.forgeComponent(d,{title:"Consejos adicionales"},e.forgeComponent("ul",null,e.forgeComponent("li",null,"Usa commits descriptivos"),e.forgeComponent("li",null,"Actualiza tu rama con ",e.forgeComponent("code",null,"git pull origin main")," regularmente"),e.forgeComponent("li",null,"Evita conflictos trabajando en ramas separadas"))),e.forgeComponent(d,{title:"Enlaces útiles"},e.forgeComponent("p",null,"Documentación oficial de Git: ",e.forgeComponent("a",{href:"https://git-scm.com/doc",target:"_blank"},"git-scm.com/doc"),e.forgeComponent("br",null),"Documentación oficial de GitHub: ",e.forgeComponent("a",{href:"https://docs.github.com/es",target:"_blank"},"docs.github.com/es"))),e.forgeComponent(L,{description:`Escrito por Angel MD © ${new Date().getFullYear()}`})))}function ee(){return new e.Component(e.forgeComponent("div",{style:"padding: 0 2rem;"},e.forgeComponent(E,{title:"Guía de Comandos de Terminal (Linux)",description:"Aprende a usar la terminal como un pro"}),e.forgeComponent(h,{links:[{href:"/blog",text:"Blog"},{href:"/blog/git",text:"Git | GitHub"},{href:"/blog/terminal",text:"Terminal"}]}),e.forgeComponent("br",null),e.forgeComponent(d,{title:"¿Qué es la terminal?"},e.forgeComponent("p",null,"La terminal es una interfaz de línea de comandos que te permite interactuar directamente con el sistema operativo mediante comandos de texto.")),e.forgeComponent(d,{title:"Comandos básicos"},e.forgeComponent(x,{headers:["Comando","Descripción"],rows:[["pwd","Muestra el directorio actual"],["ls","Lista los archivos y carpetas del directorio"],["cd [dir]","Cambia al directorio indicado"],["mkdir [nombre]","Crea un nuevo directorio"],["touch [archivo]","Crea un nuevo archivo vacío"],["rm [archivo]","Elimina un archivo"],["rm -r [dir]","Elimina un directorio"],["rmdir [dir]","Elimina un directorio vacío"]]})),e.forgeComponent(d,{title:"Gestión de archivos y directorios"},e.forgeComponent("ol",null,e.forgeComponent("li",null,"Navega usando ",e.forgeComponent("code",null,"cd")," y ",e.forgeComponent("code",null,"ls")),e.forgeComponent("li",null,"Crea archivos con ",e.forgeComponent("code",null,"touch")),e.forgeComponent("li",null,"Organiza carpetas con ",e.forgeComponent("code",null,"mkdir")),e.forgeComponent("li",null,"Elimina archivos con ",e.forgeComponent("code",null,"rm")),e.forgeComponent("li",null,"Visualiza el contenido con ",e.forgeComponent("code",null,"cat"),", ",e.forgeComponent("code",null,"less")," o ",e.forgeComponent("code",null,"nano")))),e.forgeComponent(d,{title:"Comandos útiles adicionales"},e.forgeComponent(x,{headers:["Comando","Uso"],rows:[["clear","Limpia la pantalla de la terminal"],["history","Muestra el historial de comandos"],["man <comando>","Muestra el manual del comando"],["echo <texto>","Imprime texto en la terminal"],["sudo","Ejecuta comandos como administrador"],["exit","Cierra la terminal"]]})),e.forgeComponent(d,{title:"Recomendaciones"},e.forgeComponent("ul",null,e.forgeComponent("li",null,"Practica diariamente para memorizar comandos"),e.forgeComponent("li",null,"Explora combinaciones como ",e.forgeComponent("code",null,"ls -la")),e.forgeComponent("li",null,"Lee el manual de cada comando usando ",e.forgeComponent("code",null,"man")))),e.forgeComponent(d,{title:"Recursos útiles"},e.forgeComponent("p",null,"Documentación oficial de Bash: ",e.forgeComponent("a",{href:"https://www.gnu.org/software/bash/manual/",target:"_blank"},"gnu.org/bash/manual"),e.forgeComponent("br",null),"Tutorial de la terminal (en español): ",e.forgeComponent("a",{href:"https://linuxcommand.org",target:"_blank"},"linuxcommand.org"))),e.forgeComponent(L,{description:`Desarrollado por Angel MD © ${new Date().getFullYear()}`})))}function oe(){return new e.Component(u`
        
        <div data-aether="12sacvl">
            <nav>
                <h2>Simple web page</h2>
                <ul>
                    <li>
                        <a>Content</a>
                    </li>
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Contact Us</a>
                    </li>
                </ul>
            </nav>
            <header>
                <h1>Web development course!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci dolor eos est fuga
                   laboriosam minus necessitatibus, perspiciatis qui quia quibusdam quisquam quod rem tempora totam
                   ullam voluptatibus. Reiciendis, soluta?</p>
            </header>
            <main>
                <section class="callToAction">
                    <h3>Suscribe to the newsletter</h3>
                    <form>
                        <label>
                            <input type="email" placeholder="Enter your email"/>
                        </label>
                        <input type="submit" value="SUBSCRIBE"/>
                    </form>
                </section>
                <section class="cards">
                    <div class="card">
                        <h3>HTML</h3>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                             alt="HTML Logo" width="80" height="80"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam at, commodi consequuntur
                           dicta dolore dolorum fugiat in laborum magnam obcaecati</p>
                    </div>
                    <div class="card">
                        <h3>CSS</h3>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                             alt="CSS Logo" width="80" height="80"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam at, commodi consequuntur
                           dicta dolore dolorum fugiat in laborum magnam obcaecati</p>
                    </div>
                    <div class="card">
                        <h3>JS</h3>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                             alt="JS Logo" width="80" height="80"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam at, commodi consequuntur
                           dicta dolore dolorum fugiat in laborum magnam obcaecati</p>
                    </div>
                </section>
            </main>
            <footer>
                <p>TC2005B Copyright &copy; 2021</p>
            </footer>
        </div>
    `)}function te(){return new e.Component(u`
        

        <div data-aether="txyd9n">
            <div class="grid-item-1"></div>
            <div class="grid-item-2"></div>
            <div class="grid-item-3"></div>
            <div class="grid-item-4"></div>
        </div>

        <${h} links="${[{href:"/",text:"Home"},{href:"/cssgrid",text:"CSS Grid"},{href:"/cssgrid/1",text:"1"},{href:"/cssgrid/2",text:"2"},{href:"/cssgrid/3",text:"3"},{href:"/cssgrid/4",text:"4"}]}"/>
    `)}function ne(){return new e.Component(u`
        
        
        <div data-aether="hw8ayh">
            <div class="header"></div>
            <div class="sidebar"></div>
            <div class="content-top"></div>
            <div class="content-bottom-left"></div>
            <div class="content-bottom-right"></div>
        </div>
        
        <${h} links="${[{href:"/",text:"Home"},{href:"/cssgrid",text:"CSS Grid"},{href:"/cssgrid/1",text:"1"},{href:"/cssgrid/2",text:"2"},{href:"/cssgrid/3",text:"3"},{href:"/cssgrid/4",text:"4"}]}"/>
    `)}function re(){return new e.Component(u`
        
        <div data-aether="3ghxp0">
            <div class="top-left"></div>
            <div class="top-right"></div>
            <div class="middle-left"></div>
            <div class="middle-right"></div>
            <div class="bottom"></div>
        </div>
        <div>
            <${h} links="${[{href:"/",text:"Home"},{href:"/cssgrid",text:"CSS Grid"},{href:"/cssgrid/1",text:"1"},{href:"/cssgrid/2",text:"2"},{href:"/cssgrid/3",text:"3"},{href:"/cssgrid/4",text:"4"}]}"/>
        </div>
    `)}function ie(){return new e.Component(u`
        
        
        <div data-aether="jmgywh">
            <div class="top-left-4"></div>
            <div class="top-right-4"></div>
            <div class="bottom-left-4"></div>
            <div class="bottom-right-4">
                <div class="nested-top"></div>
                <div class="nested-bottom-left"></div>
                <div class="nested-bottom-right"></div>
            </div>
        </div>
        
        <${h} links="${[{href:"/",text:"Home"},{href:"/cssgrid",text:"CSS Grid"},{href:"/cssgrid/1",text:"1"},{href:"/cssgrid/2",text:"2"},{href:"/cssgrid/3",text:"3"},{href:"/cssgrid/4",text:"4"}]}"/>
    `)}function ae(){return new e.Component(u`
        

        <div data-aether="1y39ojw">
            <div class="header">
                <h1 class="color-gradient">CSS GRID EXAMPLES</h1>
                <p class="color-gray70">Explore different CSS Grid layouts and techniques</p>
            </div>

            <div class="grid-nav">
                <a href="/cssgrid/1" class="grid-item grid1">
                    <h2>Grid Example 1</h2>
                    <p>Basic grid with color blocks</p>
                </a>
                <a href="/cssgrid/2" class="grid-item grid2">
                    <h2>Grid Example 2</h2>
                    <p>Layout with header, sidebar and content areas</p>
                </a>
                <a href="/cssgrid/3" class="grid-item grid3">
                    <h2>Grid Example 3</h2>
                    <p>Complex grid with spanning cells</p>
                </a>
                <a href="/cssgrid/4" class="grid-item grid4">
                    <h2>Grid Example 4</h2>
                    <p>Advanced grid layout techniques</p>
                </a>
                <a href="/" class="grid-item home">
                    <h2>Back to Home</h2>
                    <p>Return to the main page</p>
                </a>
            </div>
        </div>
    `)}const G=new T("",{linkTag:"rl"});G.on("/",()=>e.render(J)).on("/about",()=>e.render(K)).notFound(()=>e.render(V));G.group("/blog",i=>{i.on("/",()=>e.render(X)).on("/git",()=>e.render(Z)).on("/terminal",()=>e.render(ee))});G.on("/simpleweb",()=>e.render(oe));G.group("/cssgrid",i=>{i.on("/",()=>e.render(ae)).on("/1",()=>e.render(te)).on("/2",()=>e.render(ne)).on("/3",()=>e.render(re)).on("/4",()=>e.render(ie))});
