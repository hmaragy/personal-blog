import { useRouter } from "next/router";
import axios from "axios";
import Post from "../../components/Post/Post";
import { useState } from "react";

const Page = ({ post, e }) => {
  const [error, setError] = useState(e);

  return (
    <>
      <div>{error}</div>
      <Post post={post}></Post>
    </>
  );
};

export const getServerSideProps = async ctx => {
  try {
    const { slug } = ctx.query;
    const post = await axios.get(process.env.API_URL + "/posts?slug=" + slug);
    return { props: { post: post.data[0] } };
  } catch (error) {
    return { props: { error } };
  }
};

export default Page;
