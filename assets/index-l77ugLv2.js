var h=n=>{throw TypeError(n)};var y=(n,e,r)=>e.has(n)||h("Cannot "+r);var d=(n,e,r)=>e.has(n)?h("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,r);var l=(n,e,r)=>(y(n,e,"access private method"),r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();var i,p,u,m;class g{constructor(e="",{event:r="DOMContentLoaded",linkTag:o="router-link",delegateClick:t=!0,scrollToTop:s=!0}={}){d(this,i);const a=()=>{document.body.innerHTML=`
            <div style="margin 0; padding: 0; box-sizing: border-box; display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 100dvh; min-width: 100dvw; background-color: #242424;">
                <h1 style="color: white;  font: 700 5rem/0.8em system-ui, Avenir, Helvetica, Arial, sans-serif;">
                    404 | Page not Found
                </h1>
                <p style="color: white;  font: 400 1rem/0.5em system-ui, Avenir, Helvetica, Arial, sans-serif;">
                    Fallback Safe Route
                </p>
            </div>`};this.void_func=()=>{},this.safeRoute={before:()=>!0,handler:a,after:this.void_func},this.routes={},this.beforeGuards=[],this.afterGuards=[],this.base_path=e.replace(/\/+$/,""),this.link_tag=`data-${o}`,this.delegateClick=t,this.currentRoute=null,this.scrollToTop=s,document.addEventListener(r,l(this,i,m).bind(this)),window.addEventListener("popstate",()=>this.resolve(location.pathname,!1))}use(e,r="before"){r==="before"?this.beforeGuards.push(e):r==="after"&&this.afterGuards.push(e)}on(e,r){const o=l(this,i,u).call(this,e);return this.routes[o]=typeof r=="object"?{before:r.before||this.void_func,handler:r.handler,after:r.after||this.void_func}:{handler:r},this}notFound(e){return this.routes[404]=typeof e=="object"?{before:e.before||this.void_func,handler:e.handler,after:e.after||this.void_func}:{handler:e},this}reload(){return this.resolve(location.pathname,!1),this}group(e,r){r({on:(t,s)=>this.on(`${e}${t}`,s)})}resolve(e,r=!0){const o=l(this,i,u).call(this,e);for(const t of this.afterGuards)t==null||t(o);for(const t of this.beforeGuards)if((t==null?void 0:t(o))===!1)return;l(this,i,p).call(this,o,r)}}i=new WeakSet,p=function(e,r){var t,s;const o=this.routes[e]||this.routes[404]||this.safeRoute;(t=this.currentRoute)!=null&&t.after&&this.currentRoute.after(),!(o.before&&o.before(e)===!1)&&(r&&window.history.pushState({},"",this.base_path+e),(s=o.handler)==null||s.call(o),this.scrollToTop&&window.scrollTo(0,0),this.currentRoute=o)},u=function(e){try{let o=new URL(e,location.origin).pathname.replace(this.base_path,"");return o.startsWith("/")||(o="/"+o),o.replace(/\/+$/,"")||"/"}catch{return"/"}},m=function(){const e=`[${this.link_tag}]`;this.delegateClick?document.body.addEventListener("click",r=>{const o=r.target.closest(e);if(o){r.preventDefault();const t=o.getAttribute("href");t&&this.resolve(t)}}):document.querySelectorAll(e).forEach(r=>{r.addEventListener("click",o=>{o.preventDefault();const t=r.getAttribute("href");t&&this.resolve(t)})}),this.resolve(location.pathname,!1)};const b=n=>[`
    <div>
        <h1>HELLO WORLD!!</h1>
        <p>By Angel MD</p>
        <a href="/about" data-rl class="page-link">Click Me</a>
        <a href="/game" data-rl class="page-link">Start Game</a>
    </div>
    `,()=>{}],v=n=>[`
    <div>
        <h1>About Me!</h1>
        <p>By Angel MD</p>
        <a href="/" data-rl class="page-link">Click Me</a>
    </div>
    `,()=>{}],L=n=>[`
    <div>
        <h1>Page not found 404.</h1>
        <p>By Angel MD</p>
        <a href="/" data-rl class="page-link">Click Me</a>
    </div>
    `,()=>{}],f=async(n,e={},r="app")=>{if(typeof n!="function"){console.error("Render error: Provided component is not a function.",n);return}let o;try{o=await n(e)}catch(c){console.error(`Render error in component '${n.name||"anonymous"}':`,c);return}if(!Array.isArray(o)||o.length!==2){console.error(`Render error: Component '${n.name||"anonymous"}' should return [htmlString, afterMountFn]. Got:`,o);return}const[t,s]=o;if(typeof t!="string"){console.error(`Render error: First element returned by '${n.name||"anonymous"}' must be an HTML string.`);return}const a=document.getElementById(r);if(!a){console.error(`Render error: No DOM element with id "${r}".`);return}a.innerHTML=t;try{typeof s=="function"&&s()}catch(c){console.error(`afterMount error in component '${n.name||"anonymous"}':`,c)}},R=new g("",{linkTag:"rl"});R.on("/",()=>f(b)).on("/about",()=>f(v)).notFound(()=>f(L));
