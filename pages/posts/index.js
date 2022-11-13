import Head from "next/head";
import AllPosts from "../../components/posts-page/all-posts";
import { getAllPosts } from "../../lib/posts-utils";

function AllPostsPage({ posts }) {
  return (
    <div>
      <Head>
        <title> All Posts </title>
        <meta name="description" content="A list of all programming posts" />
      </Head>
      <AllPosts posts={posts} />
    </div>
  );
}

export default AllPostsPage;

//GetStaticProps

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}
