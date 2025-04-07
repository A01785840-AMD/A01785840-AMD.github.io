var d=s=>{throw TypeError(s)};var b=(s,e,r)=>e.has(s)||d("Cannot "+r);var u=(s,e,r)=>e.has(s)?d("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,r);var l=(s,e,r)=>(b(s,e,"access private method"),r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=r(t);fetch(t.href,i)}})();var n,p,h,m;class v{constructor(e="",{event:r="DOMContentLoaded",linkTag:o="router-link",delegateClick:t=!0,scrollToTop:i=!0}={}){u(this,n);const a=()=>{document.body.innerHTML=`
            <div style="margin 0; padding: 0; box-sizing: border-box; display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 100dvh; min-width: 100dvw; background-color: #242424;">
                <h1 style="color: white;  font: 700 5rem/0.8em system-ui, Avenir, Helvetica, Arial, sans-serif;">
                    404 | Page not Found
                </h1>
                <p style="color: white;  font: 400 1rem/0.5em system-ui, Avenir, Helvetica, Arial, sans-serif;">
                    Fallback Safe Route
                </p>
            </div>`};this.void_func=()=>{},this.safeRoute={before:()=>!0,handler:a,after:this.void_func},this.routes={},this.beforeGuards=[],this.afterGuards=[],this.base_path=e.replace(/\/+$/,""),this.link_tag=`data-${o}`,this.delegateClick=t,this.currentRoute=null,this.scrollToTop=i,document.addEventListener(r,l(this,n,m).bind(this)),window.addEventListener("popstate",()=>this.resolve(location.pathname,!1))}use(e,r="before"){r==="before"?this.beforeGuards.push(e):r==="after"&&this.afterGuards.push(e)}on(e,r){const o=l(this,n,h).call(this,e);return this.routes[o]=typeof r=="object"?{before:r.before||this.void_func,handler:r.handler,after:r.after||this.void_func}:{handler:r},this}notFound(e){return this.routes[404]=typeof e=="object"?{before:e.before||this.void_func,handler:e.handler,after:e.after||this.void_func}:{handler:e},this}reload(){return this.resolve(location.pathname,!1),this}group(e,r){r({on:(t,i)=>this.on(`${e}${t}`,i)})}resolve(e,r=!0){const o=l(this,n,h).call(this,e);for(const t of this.afterGuards)t==null||t(o);for(const t of this.beforeGuards)if((t==null?void 0:t(o))===!1)return;l(this,n,p).call(this,o,r)}}n=new WeakSet,p=function(e,r){var t,i;const o=this.routes[e]||this.routes[404]||this.safeRoute;(t=this.currentRoute)!=null&&t.after&&this.currentRoute.after(),!(o.before&&o.before(e)===!1)&&(r&&window.history.pushState({},"",this.base_path+e),(i=o.handler)==null||i.call(o),this.scrollToTop&&window.scrollTo(0,0),this.currentRoute=o)},h=function(e){try{let o=new URL(e,location.origin).pathname.replace(this.base_path,"");return o.startsWith("/")||(o="/"+o),o.replace(/\/+$/,"")||"/"}catch{return"/"}},m=function(){const e=`[${this.link_tag}]`;this.delegateClick?document.body.addEventListener("click",r=>{const o=r.target.closest(e);if(o){r.preventDefault();const t=o.getAttribute("href");t&&this.resolve(t)}}):document.querySelectorAll(e).forEach(r=>{r.addEventListener("click",o=>{o.preventDefault();const t=r.getAttribute("href");t&&this.resolve(t)})}),this.resolve(location.pathname,!1)};const c=document.getElementById("app"),f={home:()=>{c.innerHTML=`
    <div>
        <h1>HELLO WORLD!!</h1>
        <p>By Angel MD</p>
        <a href="/about" data-rl class="page-link">Click Me</a>
        <a href="/game" data-rl class="page-link">Start Game</a>
    </div>`},about:()=>{c.innerHTML=`
    <div>
        <h1>About Me!</h1>
        <p>By Angel MD</p>
        <a href="/" data-rl class="page-link">Click Me</a>
    </div>`},not_found:()=>{c.innerHTML=`
        <div>
            <h1>Page not found 404.</h1>
            <p>By Angel MD</p>
            <a href="/" data-rl class="page-link">Click Me</a>
        </div>`}},g=new v("",{linkTag:"rl"});g.on("/",f.home).on("/about",f.about).notFound(f.not_found);
