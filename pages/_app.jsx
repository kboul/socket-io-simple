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
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  } 
`;
