import axios from "axios";
import PostList from "../../components/Post/PostList";
import PostPreview from "../../components/Post/PostPreview";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Page = ({ posts, e }) => {
  const [postElements, setPostElements] = useState([]);
  const [startPagination, setStartPagination] = useState(2);
  const [hasMorePosts, setHasMorePosts] = useState(true);
  const [error, setError] = useState(e);

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    setPostElements(
      posts.map(post => {
        return <PostPreview key={post.id} post={post}></PostPreview>;
      })
    );
  }, []);

  async function fetchData() {
    try {
      const postsCount = await axios.get(process.env.API_URL + "/posts/count?categories.slug=" + slug);
      let end = postsCount.data;

      if (startPagination >= end) {
        setHasMorePosts(false);
        return null;
      }
      const posts = await axios.get(
        process.env.API_URL + `/posts?categories.slug=${slug}&_start=${startPagination}&_limit=2`
      );

      setPostElements(oldPosts => {
        return [
          ...oldPosts,
          posts.data.map(post => {
            return <PostPreview key={post.id} post={post}></PostPreview>;
          }),
        ];
      });

      setStartPagination(old => old + 2);
    } catch (error) {
      setError("Something went wrong, reload the page and try again...");
    }
  }

  return (
    <>
      <div>{error}</div>

      <PostList length={postElements.length || 2} hasMorePosts={hasMorePosts} fetchData={fetchData}>
        {postElements}
      </PostList>
    </>
  );
};

export const getServerSideProps = async ctx => {
  try {
    const { slug } = ctx.query;
    const posts = await axios.get(process.env.API_URL + "/posts?_start=0&_limit=2&categories.slug=" + slug);
    return { props: { posts: posts.data } };
  } catch (error) {
    return { props: { error } };
  }
};

export default Page;
