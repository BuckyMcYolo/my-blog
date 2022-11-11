import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-utils";

function Home({ posts }) {
  return (
    <div>
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
