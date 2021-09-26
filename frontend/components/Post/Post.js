import styled from "@emotion/styled";
import marked from "marked";
import dayjs from "dayjs";

import Categories from "../Categories/Categories";

const Post = ({ post }) => {
  const { author, banner, categories, content, title, updated_at } = post;

  const formatedUpdatedAt = dayjs(updated_at).format("DD/MM/YYYY HH:MM A");
  return (
    <>
      <SContainer>
        <Categories categories={categories}></Categories>
        <STitle>{title}</STitle>
        <SInfo>
          <div>Author: {author.username}</div>
          <div>Date Modified: {formatedUpdatedAt}</div>
        </SInfo>
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

  @media screen and (max-width: ${props => props.theme.breakPoints.SM}) {
    max-width: 95%;
  }
`;

const STitle = styled.div`
  font-size: 4rem;
  color: ${props => props.theme.colors.third};
  font-weight: bold;
  line-height: 1.2;

  @media screen and (max-width: ${props => props.theme.breakPoints.MD}) {
    font-size: 3rem;
  }
  @media screen and (max-width: ${props => props.theme.breakPoints.SM}) {
    font-size: 1.8rem;
  }
`;

const SInfo = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: ${props => props.theme.colors.third};
  line-height: 1.7;
  display: flex;
  justify-content: space-between;
  padding: 0 0 0.5rem 0;
  @media screen and (max-width: ${props => props.theme.breakPoints.MD}) {
    flex-direction: column;
  }
`;

const SBadgeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 1rem 0;
`;

const SBadge = styled.span`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
  border-radius: 18px;
  line-height: 1.7;
  padding: 0 0.5rem;
  margin-left: 0.4rem;
  cursor: pointer;
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

export default Post;
