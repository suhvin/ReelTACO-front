import { extendedTheme, theme } from "@/style/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "@emotion/react";
import type { AppProps } from "next/app";

// font 관련 import
import "../style/font/Pretendard/web/static/pretendard.css";
import "../style/font/Pretendard/web/static/pretendard-subset.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider theme={extendedTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ThemeProvider>
  );
}
