(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const s=document.getElementById("app"),c={home:()=>{s.innerHTML=`
    <div>
        <h1>HELLO WORLD!!</h1>
        <p>By Angel MD</p>
        <a href="/about" class="page-link">Click Me</a>
        <a href="/game" class="page-link">Start Game</a>
    </div>`},about:()=>{s.innerHTML=`
    <div>
        <h1>About Me!</h1>
        <p>By Angel MD</p>
        <a href="/" class="page-link">Click Me</a>
    </div>`},not_found:()=>{s.innerHTML=`
        <div>
            <h1>Page not found 404.</h1>
            <p>By Angel MD</p>
            <a href="/" class="page-link">Click Me</a>
        </div>`}},l={404:c.not_found,"/":c.home,"/about":c.about},d=n=>{window.history.pushState({},"",n),(l[n]||l[404])(),document.querySelectorAll(".page-link").forEach(i=>{i.addEventListener("click",o=>{o.preventDefault();const e=o.target.getAttribute("href");d(e)})})};document.addEventListener("DOMContentLoaded",()=>{d(window.location.pathname)});window.addEventListener("popstate",()=>{d(window.location.pathname)});
