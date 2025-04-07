import './index.css'
import Router from "@/core/router.js";
import render from "@/core/render.js";

import home_page from "@/pages/home.js";
import about_page from "@/pages/about.js";
import not_found_page from "@/pages/404.js";
import blog_page from "@/pages/blog/blog.js";


const router = new Router("", {
    linkTag: "rl"
});

router
    .on('/', () => render(home_page))
    .on('/blog', ()=> render(blog_page))
    .on('/about', () => render(about_page))
    .notFound(() => render(not_found_page));