import { ThemeProvider } from "@emotion/react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import GlobalStyles from "../styles/globals";
import NextNprogress from "nextjs-progressbar";

const theme = {
  breakPoints: {
    SM: "575.98px",
    MD: "767.98px",
    LG: "991.98px",
    XL: "1199.98px",
  },
  colors: {
    primary: "#F48C7C",
    secondary: "#FFFFFF",
    third: "#493679",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NextNprogress color="#FEF8F7" startPosition={0.3} stopDelayMs={200} height={5} showOnShallow={true} />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
