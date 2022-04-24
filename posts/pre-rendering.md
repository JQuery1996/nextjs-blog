---
title: "Two Forms of Pre-rendering"
date: "2020-01-01"
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-Side Rendering** The difference is in **when** it generates the HTML for a page.

-   **Static Generation**: is the pre-redering method that generates the HTML at **build time**. the pre-rendered HTML is then _reused_ on each request.
-   **Server-Side Rendering**: is the pre-rendering mehtod that generates the HTML on **each request**

Importantly, Next.js allows you to **choose** which pre-rendering form to use for each page. you can create a "hybrid" Next.js app by using static generation for most pages and using server-side rendering for others.
