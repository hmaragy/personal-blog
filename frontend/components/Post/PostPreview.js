import styled from "@emotion/styled";
import Link from "next/link";

const PostPreview = ({ post }) => {
  const { description, author, banner, categories, content, published_at, slug, title, updated_at } = post;
  return (
    <>
      <SBoxContainer>
        <SBox>
          <SImage src={banner.url}></SImage>
          <STextBox>
            <h2>{title}</h2>
            <p>{description}</p>
            <Link passHref href={"/posts/" + slug}>
              <SLink>Read More</SLink>
            </Link>
          </STextBox>
        </SBox>
      </SBoxContainer>
    </>
  );
};

const SBoxContainer = styled.article`
  width: 50%;
  @media screen and (max-width: ${props => props.theme.breakPoints.MD}) {
    min-width: 300px;
    width: 100%;
  }
  @media screen and (max-width: ${props => props.theme.breakPoints.SM}) {
    width: 100%;
    min-width: auto;
  }
`;

const SBox = styled.article`
  padding: 3rem 4rem;
  max-width: 100%;
`;

const SImage = styled.img`
  max-width: 100%;
  max-height: 380px;
  object-fit: cover;
`;

const STextBox = styled.div`
  max-width: 100%;
  height: 50%;
  font-size: 1.3rem;
  color: ${props => props.theme.colors.third};
`;

const SLink = styled.a`
  font-size: 1.3rem;
  color: ${props => props.theme.colors.primary};
  border-bottom: 2px solid currentColor;
  text-decoration: none;
  cursor: pointer;
`;

export default PostPreview;
