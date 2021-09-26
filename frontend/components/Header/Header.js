import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = props => {
  const router = useRouter();

  return (
    <SHeader>
      <SNav>
        <SLogoContainer>
          <SImage src="/images/logo.svg" alt="" />
        </SLogoContainer>
        <SNavList>
          <SListItem>
            <Link href="/">
              <SLink className={router.pathname == "/" ? "active" : ""}>Home</SLink>
            </Link>
          </SListItem>
          <SListItem>
            <Link href="/about">
              <SLink className={router.pathname == "/about" ? "active" : ""}>About</SLink>
            </Link>
          </SListItem>
          <SListItem>
            <SLink
              href={process.env.API_URL + "/admin/plugins/content-manager/collectionType/application::post.post/create"}
            >
              Create
            </SLink>
          </SListItem>
        </SNavList>
      </SNav>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: ${props => props.theme.colors.primary};
`;

const SNav = styled.nav`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: ${props => props.theme.breakPoints.SM}) {
    flex-direction: column;
    align-items: center;
  }
`;

const SLogoContainer = styled.div``;

const SImage = styled.img`
  max-width: 100%;
`;

const SNavList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0;
  @media screen and (max-width: ${props => props.theme.breakPoints.SM}) {
    justify-content: center;
  }
`;

const SListItem = styled.li`
  margin-left: 2.5rem;
  font-size: 1.4rem;
  list-style: none;

  &:first-child {
    margin-left: 0;
  }
  @media screen and (max-width: ${props => props.theme.breakPoints.SM}) {
    margin-left: 0.5rem;
  }
`;

const SLink = styled.a`
  padding: 0.4rem 0.5rem;
  text-decoration: none;
  color: ${props => props.theme.colors.secondary};
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid currentColor;
  }
`;

export default Header;
