import { Global, css } from "@emotion/react";

const UtillStyles = () => {
  return (
    <>
      <Global
        styles={props => css`
          .active {
            border-bottom: 2px solid currentColor;
          }
          .container {
            max-width: 90%;
            margin: 2rem auto 0 auto;
          }

          .scrollable-div {
            display: flex;
            justify-content: start;
            flex-wrap: wrap;
            @media screen and (max-width: ${props.breakPoints.MD}) {
              align-items: center;
              flex-direction: column;
            }
          }
        `}
      />
    </>
  );
};

export default UtillStyles;
