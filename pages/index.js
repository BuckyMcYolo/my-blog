import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-utils";
import Head from "next/head";

function Home({ posts }) {
  return (
    <div>
      <Head>
        <title> Bucky's Blog </title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>

      <Hero />
      <FeaturedPosts posts={posts} />
    </div>
  );
}

export default Home;

//GetStaticProps

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}
