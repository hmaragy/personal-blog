import styled from "@emotion/styled";
import Link from "next/link";

const Categories = props => {
  return (
    <SBadgeContainer className={props.className}>
      {props.categories?.length > 0 && <span>Categories: </span>}
      {props.categories &&
        props.categories.map(c => (
          <Link key={c.id} href={"/categories/" + c.slug}>
            <SBadge>{c.name}</SBadge>
          </Link>
        ))}
    </SBadgeContainer>
  );
};

const SBadgeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 1rem 0;

  @media screen and (max-width: ${props => props.theme.breakPoints.SM}) {
    flex-direction: column;
    align-items: center;
  }
`;

const SBadge = styled.span`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
  border-radius: 18px;
  line-height: 1.7;
  padding: 0 0.5rem;
  margin-left: 0.4rem;
  cursor: pointer;
  @media screen and (max-width: ${props => props.theme.breakPoints.SM}) {
    margin-top: 0.5rem;
  }
`;

export default Categories;
