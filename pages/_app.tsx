import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Chakra_Petch, Kalam } from "@next/font/google";

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-chakraPetch",
});
const kalam = Kalam({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-kalam",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${chakraPetch.variable} font-chakraPetch ${kalam.variable} font-kalam`}
    >
      <Component {...pageProps} />
    </main>
  );
}
