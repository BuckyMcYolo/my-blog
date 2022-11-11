import classes from "./all-posts.module.css";
import PostsGrid from "./posts-grid";

const AllPosts = (props) => {
  return (
    <section className={classes.posts}>
      <h1>
        <span>All Posts</span>
        <PostsGrid posts={props.posts} />
      </h1>
    </section>
  );
};

export default AllPosts;
