import './index.css'
import Router from "@router/router.js";
import Aether from "@/core/aether/Aether.js";

import not_found_page from "@/pages/404/404.jsx";

import home_page from "@/pages/home/home.jsx";
import about_page from "@/pages/about/about.js";
import blog_page from "@/pages/blog/blog.jsx";


const router = new Router("", {
    linkTag: "rl"
});

router
    .on('/', () => Aether.render(home_page))
    .on('/blog', () => Aether.render(blog_page))
    .on('/about', () => Aether.render(about_page))
    .notFound(() => Aether.render(not_found_page));