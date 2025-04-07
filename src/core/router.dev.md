# 📚 Router Class – Developer Documentation

A lightweight, flexible, and dependency-free SPA router for Vanilla JS apps.

---

## 🚀 Getting Started

### Installation

Just import the file and instantiate:

```js
import Router from './Router.js';

const router = new Router({
    basePath: "/app", // optional
    event: "DOMContentLoaded", // when to attach listeners
    linkTag: "router-link", // attribute used in <a> tags
    delegateClick: true, // whether to use event delegation
    scrollToTop: true // scroll to top on navigation
});
```

---

## 🧠 Constructor Options

| Option          | Type       | Default              | Description                             |
|-----------------|------------|----------------------|-----------------------------------------|
| `basePath`      | `string`   | `""`                 | A subdirectory where your SPA is hosted |
| `event`         | `string`   | `"DOMContentLoaded"` | When to attach routing listeners        |
| `linkTag`       | `string`   | `"router-link"`      | Used as `data-router-link` selector     |
| `fallback`      | `function` | Simple 404 template  | Custom fallback for undefined routes    |
| `delegateClick` | `boolean`  | `true`               | Use global listener instead of per-link |
| `scrollToTop`   | `boolean`  | `true`               | Scrolls to top after navigation         |

---

## 📦 API

### `on(path, config)`

Registers a route.

```js
router.on("/home", {
    before: () => {
        console.log("before /home");
    },
    handler: () => {
        document.body.innerHTML = "<h1>Home</h1>";
    },
    after: () => {
        console.log("after /home");
    }
});
```

You can also pass a simple function:

```js
router.on("/about", () => { ...
});
```

---

### `notFound(config)`

Sets a fallback route for 404s. Supports the same structure as `on()`:

```js
router.notFound({
    handler: () => {
        document.body.innerHTML = "<h1>404 Not Found</h1>";
    }
});
```

---

### `use(guardFn, when = "before" | "after")`

Adds a global route guard.

```js
router.use((path) => {
    if (path === "/admin" && !isLoggedIn()) {
        router.resolve("/login");
        return false;
    }
});
```

- Guards returning `false` block the navigation.
- `when` can be `"before"` or `"after"` navigation.

---

### `reload()`

Force reloads the current route.

```js
router.reload();
```

---

### `group(prefix, callback)`

Groups routes under a shared prefix.

```js
router.group("/dashboard", (group) => {
    group.on("/overview", () => { ...
    });
    group.on("/settings", () => { ...
    });
});
```

Registers:

- `/dashboard/overview`
- `/dashboard/settings`

---

### `resolve(path, pushState = true)`

Manually trigger navigation to a route.

```js
router.resolve("/about");
```

---

## 🏷 Usage in HTML

Use the `data-router-link` attribute to make links SPA-friendly:

```html
<a href="/home" data-router-link>Home</a>
<a href="/about" data-router-link>About</a>
```

The attribute is configurable via `linkTag`.

---

## 🔄 Lifecycle Hook Flow

Order of execution during navigation:

1. Global `beforeGuards`
2. Previous route’s `after()`
3. New route’s `before()`
4. `handler()`
5. Scroll to top (if enabled)
6. Global `afterGuards`

---

## ✅ Example Setup

```js
router
    .on("/", {
        handler: () => {
            document.body.innerHTML = "<h1>Welcome</h1>";
        }
    })
    .on("/profile", {
        before: () => {
            if (!isLoggedIn()) {
                router.resolve("/login");
                return false;
            }
        },
        handler: () => {
            document.body.innerHTML = "<h1>Profile</h1>";
        }
    })
    .notFound({
        handler: () => {
            document.body.innerHTML = "<h1>404</h1>";
        }
    });
```
