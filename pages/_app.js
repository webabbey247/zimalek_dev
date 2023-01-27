import Script from 'next/script'
import "../styles/globals.css";
import "../styles/responsive.css";
import {GlobalStyle} from "../styles/GlobalCss";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";

function MyApp({Component, pageProps}) {
  return (
    <>
     {/* <Script
     crossOrigin="true"
      strategy="lazyOnload"
      src="https://embed.tawk.to/629c68a67b967b117992f4c3/1g4pfhis3"
    /> */}
      <GlobalStyle />
      <Component {...pageProps} />
      <ToastContainer autoClose={2500} />
    </>
  );
}

export default MyApp;
