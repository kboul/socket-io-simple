import { createGlobalStyle } from "styled-components";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  } 
`;
