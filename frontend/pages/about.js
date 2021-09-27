import styled from "@emotion/styled";
import axios from "axios";
import marked from "marked";
import { useState } from "react";

const About = ({ post, e }) => {
  const [error, setError] = useState(e);

  if (!post) {
    return <div style={{ height: "calc(100vh - 200px)" }}>Sorry, this page is not available at the moment</div>;
  }
  const { banner, content, title } = post;

  return (
    <>
      <div>{error}</div>

      <SContainer>
        <STitle>{title}</STitle>
        <SImage src={banner.url}></SImage>
        <STextBox dangerouslySetInnerHTML={{ __html: marked(content) }}></STextBox>
      </SContainer>
    </>
  );
};

const SContainer = styled.article`
  padding: 2rem;
  max-width: 70%;
  margin: auto;
`;

const STitle = styled.div`
  font-size: 4rem;
  color: ${props => props.theme.colors.third};
  font-weight: bold;
  line-height: 1.8;
  text-align: center;
`;

const SImage = styled.img`
  max-width: 100%;
  object-fit: cover;
`;

const STextBox = styled.div`
  max-width: 100%;
  height: 50%;
  font-size: 1.4rem;
  line-height: 1.7;
  color: ${props => props.theme.colors.third};
`;

export const getServerSideProps = async ctx => {
  try {
    const posts = await axios.get(process.env.API_URL + "/pages?name=about");
    return { props: { post: posts.data.length ? posts.data[0] : null } };
  } catch (error) {
    return { props: { error } };
  }
};

export default About;
