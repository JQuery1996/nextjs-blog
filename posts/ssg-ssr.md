---
title: "When to use Statis Generation v.s. Server-Side Rendering"
date: "2020-01-02"
---

we recommend using **static generation** (with and without data) whenever possible because your page can be built once and served by CDN. which makes it mush faster than having a server render the page on every request.

you can use statis generation for many types for pages, including:

-   Marketign Pages.
-   Blog posts.
-   E-commerece product listining.
-   Help and documentation.

you should ask yourself: "Can i pre-render this page **ahead** of a user's request" If the answer is yes. you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In the case. you can use **Server-Side Rendering**. It will be slower. but the pre-rendered page will be update-to-date. or you can skip pre-rendering and use client-side javascript to populate data.
