import "../styles/globals.css";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Component {...pageProps} key={router.asPath} />
      <Toaster position="top-right" />
    </>
  );
}

export default MyApp;
