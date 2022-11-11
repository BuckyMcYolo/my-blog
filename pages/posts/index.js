import AllPosts from "../../components/posts-page/all-posts";
import { getAllPosts } from "../../lib/posts-utils";

function AllPostsPage({ posts }) {
  return (
    <div>
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
