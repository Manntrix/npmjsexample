import type { AppProps } from "next/app";
import { wrapper } from "store/index";
import { Inter } from "next/font/google";
import "styles/global.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { selectDarkModeState } from "store/slices/mode";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const mode = useSelector(selectDarkModeState);
  useEffect(() => {
    //changing color of body with darkmode in useEffect

    document.body.className = `theme-${mode}`;
  }, [mode]);
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
