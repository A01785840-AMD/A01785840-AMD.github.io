/*
 * By Angel Montemayor Davila, A01785840
 * 7-APR-2025
 */

export default class Router {
    constructor(basePath = "", {
        event = "DOMContentLoaded",
        linkTag = "router-link",
        delegateClick = true,
        scrollToTop = true
    } = {}) {

        const defaultFallback = () => {
            document.body.innerHTML = `
            <div style="margin 0; padding: 0; box-sizing: border-box; display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 100dvh; min-width: 100dvw; background-color: #242424;">
                <h1 style="color: white;  font: 700 5rem/0.8em system-ui, Avenir, Helvetica, Arial, sans-serif;">
                    404 | Page not Found
                </h1>
                <p style="color: white;  font: 400 1rem/0.5em system-ui, Avenir, Helvetica, Arial, sans-serif;">
                    Fallback Safe Route
                </p>
            </div>`;
        };

        this.void_func = (() => {
        });

        this.safeRoute = {
            before: () => true,
            handler: defaultFallback,
            after: this.void_func
        };

        this.routes = {};
        this.beforeGuards = [];
        this.afterGuards = [];

        this.base_path = basePath.replace(/\/+$/, "");
        this.link_tag = `data-${linkTag}`;
        this.delegateClick = delegateClick;
        this.currentRoute = null;
        this.scrollToTop = scrollToTop;

        document.addEventListener(event, this.#init.bind(this));
        window.addEventListener("popstate", () => this.resolve(location.pathname, false));
    }

    use(guard, when = "before") {
        if (when === "before") this.beforeGuards.push(guard);
        else if (when === "after") this.afterGuards.push(guard);
    }

    on(path, route) {
        const cleanPath = this.#normalizePath(path);

        this.routes[cleanPath] = typeof route === "object"
            ? {
                before: route.before || this.void_func,
                handler: route.handler,
                after: route.after || this.void_func
            }
            : { handler: route };

        return this;
    }

    notFound(route) {
        this.routes[404] = typeof route === "object"
            ? {
                before: route.before || this.void_func,
                handler: route.handler,
                after: route.after || this.void_func
            }
            : { handler: route };

        return this;
    }

    reload() {
        this.resolve(location.pathname, false);
        return this;
    }

    group(prefix, callback) {
        const scopedRouter = {
            on: (subPath, handler) => this.on(`${prefix}${subPath}`, handler)
        };

        callback(scopedRouter);
    }

    resolve(href, pushState = true) {
        const path = this.#normalizePath(href);

        for (const guard of this.afterGuards) {
            guard?.(path);
        }

        for (const guard of this.beforeGuards) {
            if (guard?.(path) === false) return;
        }

        this.#navigateTo(path, pushState);
    }

    #navigateTo(path, pushState) {
        const route = this.routes[path] || this.routes[404] || this.safeRoute;

        if (this.currentRoute?.after) {
            this.currentRoute.after();
        }

        if (route.before && route.before(path) === false) return;

        if (pushState) {
            window.history.pushState({}, "", this.base_path + path);
        }

        route.handler?.();
        if (this.scrollToTop) window.scrollTo(0, 0);

        this.currentRoute = route;
    }

    #normalizePath(path) {
        try {
            const url = new URL(path, location.origin);
            let normalized = url.pathname.replace(this.base_path, "");
            if (!normalized.startsWith("/")) normalized = "/" + normalized;
            return normalized.replace(/\/+$/, "") || "/";
        } catch {
            return "/";
        }
    }

    #init() {
        const selector = `[${this.link_tag}]`;

        if (this.delegateClick) {
            document.body.addEventListener("click", (event) => {
                const link = event.target.closest(selector);
                if (link) {
                    event.preventDefault();
                    const href = link.getAttribute("href");
                    if (href) this.resolve(href);
                }
            });
        } else {
            document.querySelectorAll(selector).forEach(link => {
                link.addEventListener("click", (event) => {
                    event.preventDefault();
                    const href = link.getAttribute("href");
                    if (href) this.resolve(href);
                });
            });
        }

        this.resolve(location.pathname, false);
    }
}
