import styled from "@emotion/styled";

const Footer = props => {
  return (
    <SFooter>
      <SFooterText>
        copyright &copy;{" "}
        <SLink target="_blank" href="https://github.com/hmaragy">
          Hazem El-maraghy
        </SLink>
      </SFooterText>
    </SFooter>
  );
};

const SFooter = styled.footer`
  background-color: ${props => props.theme.colors.primary};
  margin: 0;
  padding: 2rem;
  text-align: center;
`;

const SFooterText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
  color: ${props => props.theme.colors.secondary};

  @media screen and (max-width: ${props => props.theme.breakPoints.SM}) {
    font-size: 0.9rem;
  }
`;

const SLink = styled.a`
  color: inherit;
  &:hover {
    color: ${props => props.theme.colors.third};
  }
`;
export default Footer;
