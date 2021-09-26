import ResetStyles from "./reset";
import UtilStyles from "./utils";
import { Global, css } from "@emotion/react";

const GlobalStyles = () => {
  return (
    <>
      <ResetStyles />
      <UtilStyles />
      <Global
        styles={css`
          * {
            font-family: "Roboto", sans-serif;
          }

          html {
            scroll-behavior: smooth;
          }
        `}
      />
    </>
  );
};

export default GlobalStyles;
