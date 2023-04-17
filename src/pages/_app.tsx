import "@/components/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
const satoshi = localFont({
  src: [
    {
      path: "../assets/fonts/Satoshi-Light.otf",
      weight: "300",
    },
    {
      path: "../assets/fonts/Satoshi-Regular.otf",
      weight: "400",
    },
    {
      path: "../assets/fonts/Satoshi-Medium.otf",
      weight: "500",
    },
    {
      path: "../assets/fonts/Satoshi-Bold.otf",
      weight: "700",
    },
    {
      path: "../assets/fonts/Satoshi-Black.otf",
      weight: "900",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={satoshi.className}>
      <Component {...pageProps} />;
    </main>
  );
}
