import styled from "@emotion/styled";

const Button = props => {
  return <ButtonStyle className={props.className}>{props.children}</ButtonStyle>;
};

const ButtonStyle = styled.button`
  background: orange;
`;

export default Button;
