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
import SimpleWebPage from "@pages/SimpleWebPage.js";

import cssgridpage1 from "@pages/cssgrid/cssgrid1.js";
import cssgridpage2 from "@pages/cssgrid/cssgrid2.js";
import cssgridpage3 from "@pages/cssgrid/cssgrid3.js";
import cssgridpage4 from "@pages/cssgrid/cssgrid4.js";
import cssgridpage from "@pages/cssgrid/cssgridpage.js";


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

router.on(`/simpleweb`, () => Aether.render(SimpleWebPage));

router.group(`/cssgrid`, (group) => {
    group
        .on(`/`, () => Aether.render(cssgridpage))
        .on('/1', () => Aether.render(cssgridpage1))
        .on('/2', () => Aether.render(cssgridpage2))
        .on('/3', () => Aether.render(cssgridpage3))
        .on('/4', () => Aether.render(cssgridpage4))
})

// TODO: Add the css writing animation to the Hello world title