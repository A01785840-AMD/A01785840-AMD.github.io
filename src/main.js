import Router from "@router/router.js";
import Aether from "@/core/aether/Aether.js";

import not_found_page from "@/pages/404.jsx";

import home_page from "@/pages/home.jsx";
import about_page from "@/pages/about.jsx";

import '@styles/index.css';

// Blog pages
import blog_page from "@/pages/blog/blog.jsx";
import git_github_page from "@pages/blog/git_github_page.jsx";
import terminal_guide_page from "@pages/blog/terminal_guide_page.jsx";


const router = new Router("", {
    linkTag: "rl"
});

router
    .on('/', () => Aether.render(home_page))
    .on('/about', () => Aether.render(about_page))
    .notFound(() => Aether.render(not_found_page));


router.group('/blog', (group) => {
    group
        .on('/', () => Aether.render(blog_page))
        .on('/git', () => Aether.render(git_github_page))
        .on('/terminal', () => Aether.render(terminal_guide_page))
});

// TODO: figure out style tag in component to make them local
// TODO: Add the css writing animation to the Hello world title