import PostContent from "../../components/posts-page/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-utils";

function SinglePost({ post }) {
  return (
    <div>
      <PostContent post={post} />
    </div>
  );
}

export default SinglePost;

//GetStaticProps & GetStaticPaths

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
