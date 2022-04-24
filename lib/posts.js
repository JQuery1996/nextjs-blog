import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postDirectory = path.join(process.cwd(), "posts");
console.log(postDirectory);

export function getStoredPostsData() {
    /** get file names under /posts */
    const fileNames = fs.readdirSync(postDirectory);
    const allPostsData = fileNames.map((fileName) => {
        /** Remove .md from file name to get id  */
        const id = fileName.replace(/\.md$/, "");

        /** Read markdown file as string */
        const fullPath = path.join(postDirectory, fileName);
        const fileContent = fs.readFileSync(fullPath, "utf-8");

        /** use gary-matter to parse the post metadata section */
        const matterResult = matter(fileContent);

        /** combine the data with the id  */
        return {
            id,
            ...matterResult.data,
        };
    });

    /** sort posts by date */
    return allPostsData.sort(({ date: a }, { data: b }) => {
        return a - b;
    });
}

// export async function getStoredPostsData() {
//     const url = "https://mocki.io/v1/0baa8273-6038-4e3d-9097-9065dfa0de42";
//     const result = await fetch(url);
//     return result.json();
// }

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postDirectory);
    /**
     * returnsan array that looks like this
     *  [
     *      {
     *          params: {
     *              id: 'ssg-ssr'
     *          }
     *      },
     *      {
     *          params: {
     *              id: 'pre-rendering'
     *          }
     *      },
     *  ]
     */

    return fileNames.map((fileName) => ({
        params: {
            id: fileName.replace(/\.md$/, ""),
        },
    }));
}

/**
 *
 * @param {string} id
 */
export async function getPostData(id) {
    const fullPath = path.join(postDirectory, `${id}.md`);
    const fileContent = fs.readFileSync(fullPath, "utf8");

    // use gray-matter to parse the post metadata section
    const matterResult = matter(fileContent);

    // use remark to convert markdown into HTML string

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    // combine the data with the id
    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}
