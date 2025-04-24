var k=r=>{throw TypeError(r)};var I=(r,t,o)=>t.has(r)||k("Cannot "+o);var T=(r,t,o)=>t.has(r)?k("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(r):t.set(r,o);var b=(r,t,o)=>(I(r,t,"access private method"),o);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=o(s);fetch(s.href,i)}})();var f,L,G,S;class B{constructor(t="",{event:o="DOMContentLoaded",linkTag:n="router-link",delegateClick:s=!0,scrollToTop:i=!0}={}){T(this,f);const a=()=>{document.body.innerHTML=`
            <div style="margin 0; padding: 0; box-sizing: border-box; display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 100dvh; min-width: 100dvw; background-color: #242424;">
                <h1 style="color: white;  font: 700 5rem/0.8em system-ui, Avenir, Helvetica, Arial, sans-serif;">
                    404 | Page not Found
                </h1>
                <p style="color: white;  font: 400 1rem/0.5em system-ui, Avenir, Helvetica, Arial, sans-serif;">
                    Fallback Safe Route
                </p>
            </div>`};this.void_func=()=>{},this.safeRoute={before:()=>!0,handler:a,after:this.void_func},this.routes={},this.beforeGuards=[],this.afterGuards=[],this.base_path=t.replace(/\/+$/,""),this.link_tag=`data-${n}`,this.delegateClick=s,this.currentRoute=null,this.scrollToTop=i,document.addEventListener(o,b(this,f,S).bind(this)),window.addEventListener("popstate",()=>this.resolve(location.pathname,!1))}use(t,o="before"){o==="before"?this.beforeGuards.push(t):o==="after"&&this.afterGuards.push(t)}on(t,o){const n=b(this,f,G).call(this,t);return this.routes[n]=typeof o=="object"?{before:o.before||this.void_func,handler:o.handler,after:o.after||this.void_func}:{handler:o},this}notFound(t){return this.routes[404]=typeof t=="object"?{before:t.before||this.void_func,handler:t.handler,after:t.after||this.void_func}:{handler:t},this}reload(){return this.resolve(location.pathname,!1),this}group(t,o){const n={on:(s,i)=>(this.on(`${t}${s}`,i),n)};o(n)}resolve(t,o=!0){const n=b(this,f,G).call(this,t);for(const s of this.afterGuards)s==null||s(n);for(const s of this.beforeGuards)if((s==null?void 0:s(n))===!1)return;b(this,f,L).call(this,n,o)}}f=new WeakSet,L=function(t,o){var s,i;const n=this.routes[t]||this.routes[404]||this.safeRoute;(s=this.currentRoute)!=null&&s.after&&this.currentRoute.after(),!(n.before&&n.before(t)===!1)&&(o&&window.history.pushState({},"",this.base_path+t),(i=n.handler)==null||i.call(n),this.scrollToTop&&window.scrollTo(0,0),this.currentRoute=n)},G=function(t){try{let n=new URL(t,location.origin).pathname;return this.base_path&&n.startsWith(this.base_path)&&(n=n.slice(this.base_path.length)),n.startsWith("/")||(n="/"+n),n.replace(/\/+$/,"")||"/"}catch{return"/"}},S=function(){const t=`[${this.link_tag}]`;this.delegateClick?document.body.addEventListener("click",o=>{const n=o.target.closest(t);if(n){o.preventDefault();const s=n.getAttribute("href");s&&this.resolve(s)}}):document.querySelectorAll(t).forEach(o=>{o.addEventListener("click",n=>{n.preventDefault();const s=o.getAttribute("href");s&&this.resolve(s)})}),this.resolve(location.pathname,!1)};let j=0;const v=new Map,w=new Map;function P(){return`component_${j++}`}function $(){w.clear();for(const[r,t]of v.entries())w.set(r,t);v.clear()}function F(){w.clear(),v.clear()}class M{constructor(t,o=()=>{},n=()=>{}){this.id=P(),this.html=t,this.afterRender=o,this.cleanupFunction=n,v.set(this.id,this)}}function z(r,t,...o){const n=r(t,...o);if(!(n instanceof M))throw new Error(`Component '${r.name}' must return an instance of Component.`);return n.html}function Y(r,t,...o){if(!r)return console.error("Error: Missing tag in handleHtmlElement"),"";t=t||{};const n=Object.entries(t).filter(([a])=>a!=="children"&&a!==void 0&&t[a]!==void 0).map(([a,l])=>{try{return`${a}="${l}"`}catch(c){return console.error(`Error processing attribute ${a}:`,c),""}}).filter(Boolean).join(" "),s=(o||[]).filter(a=>a!=null).map(a=>{try{return typeof a=="string"?a:a&&a.html?a.html:(console.warn(`Non-renderable child found in ${r}:`,a),String(a))}catch(l){return console.error(`Error rendering child in ${r}:`,l),""}}).join(""),i=n?` ${n}`:"";return`<${r}${i}>${s}</${r}>`}function q(r,t={},...o){return t=t||{},o=(t.children||[]).concat(o).flat(),t.children=null,typeof r=="function"?z(r,t,...o):Y(r,t,...o)}async function O(r,t={},o="app"){var i,a;const n=document.getElementById(o);if(!n)throw new Error(`No element with id "${o}"`);for(const l of w.values())try{await((i=l.cleanupFunction)==null?void 0:i.call(l))}catch(c){console.warn(`Cleanup failed for ${l.id}`,c)}let s;try{s=await r(t)}catch(l){console.error(`Render failed in component '${r.name||"anonymous"}':`,l);return}n.innerHTML=s.html;for(const l of v.values())try{await((a=l.afterRender)==null?void 0:a.call(l))}catch(c){console.warn(`afterRender failed for ${l.id}`,c)}$()}function W(r,t={}){let o;try{o=r(t)}catch(n){console.error(`Render failed in component '${r.name||"anonymous"}':`,n);return}return F(),o.html}async function U(r,t="app"){var n,s;const o=document.getElementById(t);if(!o)throw new Error(`No element with id "${t}"`);for(const i of w.values())try{await((n=i.cleanupFunction)==null?void 0:n.call(i))}catch(a){console.warn(`Cleanup failed for ${i.id}`,a)}o.innerHTML=r;for(const i of v.values())try{await((s=i.afterRender)==null?void 0:s.call(i))}catch(a){console.warn(`afterRender failed for ${i.id}`,a)}}var R=function(r,t,o,n){var s;t[0]=0;for(var i=1;i<t.length;i++){var a=t[i++],l=t[i]?(t[0]|=a?1:2,o[t[i++]]):t[++i];a===3?n[0]=l:a===4?n[1]=Object.assign(n[1]||{},l):a===5?(n[1]=n[1]||{})[t[++i]]=l:a===6?n[1][t[++i]]+=l+"":a?(s=r.apply(l,R(r,l,o,["",null])),n.push(s),l[0]?t[0]|=2:(t[i-2]=0,t[i]=s)):n.push(l)}return n},D=new Map;function N(r){var t=D.get(this);return t||(t=new Map,D.set(this,t)),(t=R(this,t.get(r)||(t.set(r,t=function(o){for(var n,s,i=1,a="",l="",c=[0],u=function(h){i===1&&(h||(a=a.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?c.push(0,h,a):i===3&&(h||a)?(c.push(3,h,a),i=2):i===2&&a==="..."&&h?c.push(4,h,0):i===2&&a&&!h?c.push(5,0,!0,a):i>=5&&((a||!h&&i===5)&&(c.push(i,0,a,s),i=6),h&&(c.push(i,h,0,s),i=6)),a=""},g=0;g<o.length;g++){g&&(i===1&&u(),u(g));for(var y=0;y<o[g].length;y++)n=o[g][y],i===1?n==="<"?(u(),c=[c],i=3):a+=n:i===4?a==="--"&&n===">"?(i=1,a=""):a=n+a[0]:l?n===l?l="":a+=n:n==='"'||n==="'"?l=n:n===">"?(u(),i=1):i&&(n==="="?(i=5,s=a,a=""):n==="/"&&(i<5||o[g][y+1]===">")?(u(),i===3&&(c=c[0]),i=c,(c=c[0]).push(2,0,i),i=0):n===" "||n==="	"||n===`
`||n==="\r"?(u(),i=2):a+=n),i===3&&a==="!--"&&(i=4,c=c[0])}return u(),c}(r)),t),arguments,[])).length>1?t:t[0]}const e={forgeComponent:q,Component:M,render:O,build:W,mount:U},m=N.bind(e.forgeComponent);function _(r,...t){return new e.Component(e.forgeComponent("a",{href:r.href,"data-rl":!0,class:"hover-transition color-white bg-black-light radius-xxl hover-shadow-l",style:"padding: 1rem 2rem;"},...t))}function K(){return new e.Component(e.forgeComponent("div",{class:"flex-column flex-center padding-xl",style:"min-height: 80vh;"},e.forgeComponent("h1",{class:"color-white-light",style:"font-size: 8rem; line-height: 0.75em;"},"404"),e.forgeComponent("h2",{class:"color-gradient",style:"font-size: 2.5rem;"},"Page Not Found"),e.forgeComponent("p",{class:"color-gray70"},"Oops! The page you're looking for doesn't seem to exist."),e.forgeComponent("br",null),e.forgeComponent(_,{href:"/"},"Take Me Home")))}function C(r){return new e.Component(e.forgeComponent("a",{href:r.href,"data-rl":!0,class:`flex-grow-equal hover-transition-box-shadow
                  radius-m border-gray70 padding-xl color-white`},e.forgeComponent("h2",null,r.title),e.forgeComponent("p",{class:"color-gray70"},r.description),e.forgeComponent("span",{class:"hover-parent-appear",style:"font-size: 1.5rem;position: absolute;bottom: 1rem;right: 1.5rem;"},"→")))}function X(){return new e.Component(m`
        
        <div data-aether="1g9ouwl"></div>
    `)}function Q(){return new e.Component(e.forgeComponent("div",{class:"padding-xxl"},e.forgeComponent("br",null),e.forgeComponent("div",null,e.forgeComponent("h1",{class:"color-gradient animate-typing"},"HELLO WORLD"),e.forgeComponent("p",{class:"color-gray70"},"Welcome to Angel MD's Web Page for TC2005B"),e.forgeComponent(X,null)),e.forgeComponent("br",null),e.forgeComponent("div",{class:"flex-row flex-wrap gap-xl"},e.forgeComponent(C,{href:"/about",title:"About Me",description:"Learn more about my skills and experience"}),e.forgeComponent(C,{href:"/blog",title:"Blog",description:"Check out my latest articles and thoughts"}),e.forgeComponent(C,{href:"/simpleweb",title:"Simple WebPage",description:"View my simple web page"}),e.forgeComponent(C,{href:"/cssgrid",title:"CSS Grid Examples",description:"Explore interactive CSS Grid layouts"}),e.forgeComponent(C,{href:"/contact",title:"Contact",description:"Get in touch with me"}),e.forgeComponent(C,{href:"/game",title:"Game",description:""}))))}function V(){return new e.Component(e.forgeComponent("div",null,e.forgeComponent("h1",null,"About Me!"),e.forgeComponent("p",null,"By Angel MD"),e.forgeComponent("a",{href:"/","data-rl":!0,class:"page-link"},"Click Me")))}function d(r,...t){return new e.Component(m`
        
        <section data-aether="z6ux5j">
            <h2>${r.title}</h2>
            <p class="color-gray70">${r.description}</p>
            ${t}
        </section>
    `)}function H(r){return new e.Component(e.forgeComponent("header",{style:"padding: 2rem 0 2rem;"},e.forgeComponent("h1",{class:"color-gradient"},r.title),e.forgeComponent("p",{class:"color-gray70"},r.description),e.forgeComponent("br",null),e.forgeComponent("hr",{style:"border: none; height: 2px; background: linear-gradient(45deg, var(--color-primary), var(--color-secondary));"})))}function E(r){return new e.Component(e.forgeComponent("footer",{class:"color-gray70 text-center"},e.forgeComponent("hr",null),e.forgeComponent("p",null,r.description)))}function p({links:r=[]}){const t=r.length>0?r:[{href:"/",text:"Inicio"}];return new e.Component(e.forgeComponent("nav",{class:"bg-black-light radius-l padding-m"},e.forgeComponent("ul",{class:"flex-row flex-center gap-l",style:"list-style: none;"},t.map(o=>e.forgeComponent("li",null,e.forgeComponent("a",{class:"hover-transition hover-shadow-l radius-m hover-bg-black color-white",style:"padding: 0.5rem 1rem;",href:o.href,"data-rl":!0},o.text))))))}function x({headers:r=[],rows:t=[]}){return new e.Component(m`
        
        <table data-aether="qrbe57">
            <thead>
            <tr>
                ${r.map(o=>`<th>${o}</th>`)}
            </tr>
            </thead>
            <tbody>
            ${t.map(o=>m`<tr>
                ${o.map(n=>`<td>${n}</td>`)}
            </tr>`)}
            </tbody>
        </table>
    `)}function J(){return new e.Component(e.forgeComponent("div",{style:"padding: 0 2rem;"},e.forgeComponent(H,{title:"Blog Desarrollo Web",description:"Bienvenidos a mi blog sobre Git, GitHub y Comandos de Terminal"}),e.forgeComponent(p,{links:[{href:"/",text:"Inicio"},{href:"/blog/git",text:"Git | GitHub"},{href:"/blog/terminal",text:"Terminal"}]}),e.forgeComponent("br",null),e.forgeComponent(d,{title:"Propósito de esta página",description:`Este blog tiene como objetivo <strong>documentar</strong> y
                     <em>compartir</em> conocimientos sobre:`},e.forgeComponent("ul",null,e.forgeComponent("li",null,"El flujo de trabajo con ",e.forgeComponent("u",null,"Git y GitHub")),e.forgeComponent("li",null,"Comandos útiles de terminal"))),e.forgeComponent(d,{title:"Lo que aprenderás"},e.forgeComponent("ol",null,e.forgeComponent("li",null,"Comandos básicos de Git"),e.forgeComponent("li",null,"Flujo de trabajo colaborativo"),e.forgeComponent("li",null,"Comandos esenciales de terminal")),e.forgeComponent("p",null,"Todo el contenido refleja lo visto en ",e.forgeComponent("strong",null,"clase"),".")),e.forgeComponent(d,{title:"Herramientas Utilizadas",description:""},e.forgeComponent(x,{headers:["Herramienta","Descripción"],rows:[["Git","Control de versiones"],["GitHub","Plataforma de colaboración"],["Terminal","Interfaz de línea de comandos"]]}),e.forgeComponent("br",null),e.forgeComponent("h2",null,"Recursos adicionales"),e.forgeComponent("p",null,"Visita la ",e.forgeComponent("a",{href:"https://docs.github.com/es",target:"_blank"}," documentación oficial de GitHub")),e.forgeComponent("br",null),e.forgeComponent("div",{class:"flex-row gap-m"},e.forgeComponent("img",{class:"radius-m hover-scale",src:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",alt:"Logo de GitHub",width:"100"}),e.forgeComponent("p",null,"GitHub ofrece una documentación completa para ayudarte a dominar sus herramientas"))),e.forgeComponent(E,{description:`Desarrollado por Angel MD © ${new Date().getFullYear()}`})))}function Z(){return new e.Component(e.forgeComponent("div",{style:"padding: 0 2rem;"},e.forgeComponent(H,{title:"Guía Completa de Git y GitHub",description:"Domina el flujo de trabajo con Git y GitHub desde la terminal"}),e.forgeComponent(p,{links:[{href:"/blog",text:"Blog"},{href:"/blog/git",text:"Git | GitHub"},{href:"/blog/terminal",text:"Terminal"}]}),e.forgeComponent("br",null),e.forgeComponent(d,{title:"¿Qué es Git?"},e.forgeComponent("p",null,"Git es un sistema de control de versiones distribuido que te permite gestionar el historial de tus proyectos."),e.forgeComponent("br",null),e.forgeComponent("h2",null,"¿Qué es GitHub?"),e.forgeComponent("p",null,"GitHub es una plataforma en línea para alojar tus repositorios Git, colaborar con otros y gestionar el desarrollo de software.")),e.forgeComponent(d,{title:"Comandos Básicos de Git"},e.forgeComponent(x,{headers:["Comando","Descripción"],rows:[["git init","Inicializa un nuevo repositorio Git"],["git clone <url>","Clona un repositorio remoto"],["git status","Muestra el estado del repositorio"],["git add .","Agrega cambios al staging area"],["git commit -m 'mensaje'","Confirma los cambios"],["git push","Envía cambios al repositorio remoto"]]})),e.forgeComponent(d,{title:"Flujo de trabajo colaborativo"},e.forgeComponent("ol",null,e.forgeComponent("li",null,"Clona el repositorio: ",e.forgeComponent("code",null,"git clone <url>")),e.forgeComponent("li",null,"Crea una rama: ",e.forgeComponent("code",null,"git checkout -b feature/rama")),e.forgeComponent("li",null,"Haz cambios y guarda con ",e.forgeComponent("code",null,"git commit")),e.forgeComponent("li",null,"Sube tu rama: ",e.forgeComponent("code",null,"git push origin feature/rama")),e.forgeComponent("li",null,"Haz un Pull Request desde GitHub"),e.forgeComponent("li",null,"Solicita revisión y mergea"))),e.forgeComponent(d,{title:"Consejos adicionales"},e.forgeComponent("ul",null,e.forgeComponent("li",null,"Usa commits descriptivos"),e.forgeComponent("li",null,"Actualiza tu rama con ",e.forgeComponent("code",null,"git pull origin main")," regularmente"),e.forgeComponent("li",null,"Evita conflictos trabajando en ramas separadas"))),e.forgeComponent(d,{title:"Enlaces útiles"},e.forgeComponent("p",null,"Documentación oficial de Git: ",e.forgeComponent("a",{href:"https://git-scm.com/doc",target:"_blank"},"git-scm.com/doc"),e.forgeComponent("br",null),"Documentación oficial de GitHub: ",e.forgeComponent("a",{href:"https://docs.github.com/es",target:"_blank"},"docs.github.com/es"))),e.forgeComponent(E,{description:`Escrito por Angel MD © ${new Date().getFullYear()}`})))}function ee(){return new e.Component(e.forgeComponent("div",{style:"padding: 0 2rem;"},e.forgeComponent(H,{title:"Guía de Comandos de Terminal (Linux)",description:"Aprende a usar la terminal como un pro"}),e.forgeComponent(p,{links:[{href:"/blog",text:"Blog"},{href:"/blog/git",text:"Git | GitHub"},{href:"/blog/terminal",text:"Terminal"}]}),e.forgeComponent("br",null),e.forgeComponent(d,{title:"¿Qué es la terminal?"},e.forgeComponent("p",null,"La terminal es una interfaz de línea de comandos que te permite interactuar directamente con el sistema operativo mediante comandos de texto.")),e.forgeComponent(d,{title:"Comandos básicos"},e.forgeComponent(x,{headers:["Comando","Descripción"],rows:[["pwd","Muestra el directorio actual"],["ls","Lista los archivos y carpetas del directorio"],["cd [dir]","Cambia al directorio indicado"],["mkdir [nombre]","Crea un nuevo directorio"],["touch [archivo]","Crea un nuevo archivo vacío"],["rm [archivo]","Elimina un archivo"],["rm -r [dir]","Elimina un directorio"],["rmdir [dir]","Elimina un directorio vacío"]]})),e.forgeComponent(d,{title:"Gestión de archivos y directorios"},e.forgeComponent("ol",null,e.forgeComponent("li",null,"Navega usando ",e.forgeComponent("code",null,"cd")," y ",e.forgeComponent("code",null,"ls")),e.forgeComponent("li",null,"Crea archivos con ",e.forgeComponent("code",null,"touch")),e.forgeComponent("li",null,"Organiza carpetas con ",e.forgeComponent("code",null,"mkdir")),e.forgeComponent("li",null,"Elimina archivos con ",e.forgeComponent("code",null,"rm")),e.forgeComponent("li",null,"Visualiza el contenido con ",e.forgeComponent("code",null,"cat"),", ",e.forgeComponent("code",null,"less")," o ",e.forgeComponent("code",null,"nano")))),e.forgeComponent(d,{title:"Comandos útiles adicionales"},e.forgeComponent(x,{headers:["Comando","Uso"],rows:[["clear","Limpia la pantalla de la terminal"],["history","Muestra el historial de comandos"],["man <comando>","Muestra el manual del comando"],["echo <texto>","Imprime texto en la terminal"],["sudo","Ejecuta comandos como administrador"],["exit","Cierra la terminal"]]})),e.forgeComponent(d,{title:"Recomendaciones"},e.forgeComponent("ul",null,e.forgeComponent("li",null,"Practica diariamente para memorizar comandos"),e.forgeComponent("li",null,"Explora combinaciones como ",e.forgeComponent("code",null,"ls -la")),e.forgeComponent("li",null,"Lee el manual de cada comando usando ",e.forgeComponent("code",null,"man")))),e.forgeComponent(d,{title:"Recursos útiles"},e.forgeComponent("p",null,"Documentación oficial de Bash: ",e.forgeComponent("a",{href:"https://www.gnu.org/software/bash/manual/",target:"_blank"},"gnu.org/bash/manual"),e.forgeComponent("br",null),"Tutorial de la terminal (en español): ",e.forgeComponent("a",{href:"https://linuxcommand.org",target:"_blank"},"linuxcommand.org"))),e.forgeComponent(E,{description:`Desarrollado por Angel MD © ${new Date().getFullYear()}`})))}function te(){return new e.Component(m`
        
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
    `)}function oe(){return new e.Component(m`
        

        <div data-aether="txyd9n">
            <div class="grid-item-1"></div>
            <div class="grid-item-2"></div>
            <div class="grid-item-3"></div>
            <div class="grid-item-4"></div>
        </div>

        <${p} links="${[{href:"/",text:"Home"},{href:"/cssgrid",text:"CSS Grid"},{href:"/cssgrid/1",text:"1"},{href:"/cssgrid/2",text:"2"},{href:"/cssgrid/3",text:"3"},{href:"/cssgrid/4",text:"4"}]}"/>
    `)}function ne(){return new e.Component(m`
        
        
        <div data-aether="hw8ayh">
            <div class="header"></div>
            <div class="sidebar"></div>
            <div class="content-top"></div>
            <div class="content-bottom-left"></div>
            <div class="content-bottom-right"></div>
        </div>
        
        <${p} links="${[{href:"/",text:"Home"},{href:"/cssgrid",text:"CSS Grid"},{href:"/cssgrid/1",text:"1"},{href:"/cssgrid/2",text:"2"},{href:"/cssgrid/3",text:"3"},{href:"/cssgrid/4",text:"4"}]}"/>
    `)}function ie(){return new e.Component(m`
        
        <div data-aether="3ghxp0">
            <div class="top-left"></div>
            <div class="top-right"></div>
            <div class="middle-left"></div>
            <div class="middle-right"></div>
            <div class="bottom"></div>
        </div>
        <div>
            <${p} links="${[{href:"/",text:"Home"},{href:"/cssgrid",text:"CSS Grid"},{href:"/cssgrid/1",text:"1"},{href:"/cssgrid/2",text:"2"},{href:"/cssgrid/3",text:"3"},{href:"/cssgrid/4",text:"4"}]}"/>
        </div>
    `)}function re(){return new e.Component(m`
        
        
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
        
        <${p} links="${[{href:"/",text:"Home"},{href:"/cssgrid",text:"CSS Grid"},{href:"/cssgrid/1",text:"1"},{href:"/cssgrid/2",text:"2"},{href:"/cssgrid/3",text:"3"},{href:"/cssgrid/4",text:"4"}]}"/>
    `)}function ae(){return new e.Component(m`
        

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
    `)}const se="/assets/goldCoin-D8pr-wCC.jpg",le="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAAgCAYAAAD9qabkAAAABmJLR0QALwCBADaVn+eEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3AYDAAYoVzIjxgAABFdJREFUeNrtXL1q40AQXpkUeYyoMKQKxHmA1NfarxA4CIakyGO4iEEEDvwKdps6D2AHXAVcyI/hzlckY8ablbWW50ey5gNxd8bkG83O983sSpfEGRqJm+7dFv97uZonWtzS/AY62KI1TITA+fY63Pv88TkTieGme7f1uSX5Q7k382mhAWh1QMwbEiFXHEXClxRikfilclCUB2nz0Z7AamEA2iNoUQfkjEVLADG8GIv80k3GI9I4jomBKwdlBshtPmUTWBMNKKEUoNQI/P6RufzzK1j4zjny4i8TAPACKPl93kV+6Qb9q73vTGfr3d976YY8D2XiT2+vf60HZT3cdO+2D08vvz7vpRtRE4Dac84F609SA1T661AF9fD0Ejwc4lqA9PZ6dy3yy18ilBB/ES9XLsrEHzIjCfHjPyEGiXoI3evb65CFF9eef/9wNRGdqonAN163m6csvpAAYgyHWgAx4pcAvm9/3cGMqYWHu/9kPGI1vFiE6v79I2M3vZDxnKI/sgnAXxgpBwYRTMYj9hjKCs7nP9UE4J6rip+C399+wNhdVHR4LKc2wcl45EJbAX9NuKYA55z7cz9054ROk4PHIggVBqXbxk4eHCZUh84fk4/QvlhjQmnqOG4GUDP4Zw4a46Yvdm2RxYg/dDgnIXw8KUmO4603AO6OBKNoWfEf86isKcDdfzpbq+15D23zYF00YwtNShLIP7/2Ls7tR60nACnxQaJDpsM5+lUxuVMfwy1X8wT2nFr88H4F5PbQROJ3forHkMvVPAHjObTFkhJ/0RkEvlq5BeDedx2TXKrn31iAsbwcRohFJ3HQWbS27x+Z66WbXTxY/FKFHxJgSPzUUynUgs/V9POGzqkFKYVeutl1mFCxSY5/IRGC+KlfwsEdEHfBMiPgMsH09toN+lcu//za63oc3b8oB9LiryOms/XeVRUXdd33l5kBNoHJeOQG/Ywlph8BbHH38UfRt9ehe3h6cYtc5v45n3gcyoH/FlzRYZ/UG3HfRvg9mfh1yfE26DnioqoA/fFcyxCg83Iu/HI1T/yDHSxCX/jUMfx0wG2M+MGYOHLw536o9p+BIAdw/4P+lRv0M9GmhI1wOlurHDoWaVB8ApDuQI/PWbD4cOfldH2/ACXFh39mkRFwcvvrgCcfLHwJ/sl4VPpCGHcc0lvO2k0AmiYgPf7GdGKpogsZgf+5FP+P6Lca/LAlAyOYztZia+Bvh/ypo2lbDzIDkLhxLEAsQm0Baix4HYpMKwbgBSPQzgc+D2raucNFleSD82t0Y5xgEGFbBdh2aBqQtvlQPXY9KXD7tUwGgw7O5TcSGQwGg8FgMBgMBoPBYDAYDAZmVDo57KXdf6HPF/nqr0TQ2vyhGCS5jV+X/5zqP6EglkpE2/ljYuAuQk1+qz96/g41+bHfNdAWAGfutflt7em/G20Ax7iK9DjYFsTklTP32vy29vTftTMA2wMbv9W/wWBoI/4D9pHmVOfwUTsAAAAASUVORK5CYII=",ce="/assets/sprites-CAsoAwRY.png";class de{constructor(t,o,n,s=32,i=8,a=1/8){this.x=t,this.y=o,this.img=n,this.frameWidth=s,this.frameHeight=s,this.frameCount=i,this.frameDuration=a,this.frameIndex=0,this.frameTimer=0}update(t){this.frameTimer+=t,this.frameTimer>=this.frameDuration&&(this.frameTimer=0,this.frameIndex=(this.frameIndex+1)%this.frameCount)}draw(t){t.drawImage(this.img,this.frameIndex*this.frameWidth,0,this.frameWidth,this.frameHeight,this.x,this.y,this.frameWidth,this.frameHeight)}}class me{constructor(t,o,n){this.img=n,this.x=t,this.y=o,this.width=47,this.height=64.5,this.speed=100,this.direction=0,this.frame=0,this.frameCount=3,this.frameTimer=0,this.frameDuration=1/6}update(t,o,n,s){let i=0,a=0;(o.arrowup||o.w)&&(a-=1,this.direction=0),(o.arrowright||o.d)&&(i+=1,this.direction=1),(o.arrowdown||o.s)&&(a+=1,this.direction=2),(o.arrowleft||o.a)&&(i-=1,this.direction=3);const l=Math.hypot(i,a);l>0?(i/=l,a/=l,this.x+=i*this.speed*t,this.y+=a*this.speed*t,this.x=Math.max(0,Math.min(this.x,n-this.width)),this.y=Math.max(0,Math.min(this.y,s-this.height)),this.frameTimer+=t,this.frameTimer>=this.frameDuration&&(this.frameTimer=0,this.frame=(this.frame+1)%this.frameCount)):this.frame=1}draw(t){t.drawImage(this.img,this.frame*this.width,this.direction*this.height,this.width,this.height,this.x,this.y,this.width,this.height)}}class he{constructor(){this.coinImage=new Image,this.imgCoinSilver=new Image,this.characterImage=new Image,this.coinImage.src=se,this.imgCoinSilver.src=le,this.characterImage.src=ce,this.timestamp=0,this.stopGame=!1,this.win=!1,this.coins=[];for(let t=0;t<10;t++)this.coins.push(new de(Math.random()*(window.innerWidth-32),Math.random()*(window.innerHeight-32),Math.floor(Math.random()*3)===0?this.coinImage:this.imgCoinSilver));this.player=new me(100,100,this.characterImage),this.keys={},window.addEventListener("keydown",t=>this.keys[t.key.toLowerCase()]=!0),window.addEventListener("keyup",t=>this.keys[t.key.toLowerCase()]=!1),window.addEventListener("resize",()=>this.resize())}resize(){this.dimension={width:window.innerWidth,height:window.innerHeight},this.canvas.width=this.dimension.width,this.canvas.height=this.dimension.height}init(){this.canvas=document.getElementById("game"),this.ctx=this.canvas.getContext("2d"),this.resize()}run(t){const o=(t-this.timestamp)/1e3;this.timestamp=t,this.update(o||0),this.draw(),this.stopGame||requestAnimationFrame(this.run.bind(this))}update(t){this.coins=this.coins.filter(o=>(o.update(t),!this.checkCollision(this.player,o))),this.player.update(t,this.keys,this.canvas.width,this.canvas.height),this.coins.length===0&&!this.win&&(this.win=!0)}draw(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="#F6F8F7",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);for(const t of this.coins)t.draw(this.ctx);this.player.draw(this.ctx),this.win&&(this.ctx.fillStyle="#000",this.ctx.font="bold 48px sans-serif",this.ctx.textAlign="center",this.ctx.fillText("YOU WIN!!",this.canvas.width/2,this.canvas.height/2))}checkCollision(t,o){return t.x<o.x+o.frameWidth&&t.x+t.width>o.x&&t.y<o.y+o.frameHeight&&t.y+t.height>o.y}resume(){this.stopGame=!1}stop(){this.stopGame=!0}}function fe(){const r=new he,t=()=>{r.init(),r.run()},o=()=>{r.stop()};return new e.Component(m`
        
        <canvas id="game" data-aether="68chdw"></canvas>
    `,t,o)}const A=new B("",{linkTag:"rl"});A.on("/",()=>e.render(Q)).on("/about",()=>e.render(V)).on("/game",()=>e.render(fe)).notFound(()=>e.render(K));A.group("/blog",r=>{r.on("/",()=>e.render(J)).on("/git",()=>e.render(Z)).on("/terminal",()=>e.render(ee))});A.on("/simpleweb",()=>e.render(te));A.group("/cssgrid",r=>{r.on("/",()=>e.render(ae)).on("/1",()=>e.render(oe)).on("/2",()=>e.render(ne)).on("/3",()=>e.render(ie)).on("/4",()=>e.render(re))});
