import Head from "next/head";
import Link from "next/link";
import { Layout, siteTitle, Date } from "../components";
import utilStyles from "../styles/utils.module.css";

import { getStoredPostsData } from "../lib/posts";

// const url = "https://mocki.io/v1/0baa8273-6038-4e3d-9097-9065dfa0de42";

export function getStaticProps() {
    const allPostsData = getStoredPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}
const Home = ({ allPostsData }) => {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>[your self Introduction]</p>
                <p>
                    (This is a sample website - you’ll be building a site like
                    this on{" "}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>
                    .)
                </p>
            </section>

            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, title, date }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
};

export default Home;
