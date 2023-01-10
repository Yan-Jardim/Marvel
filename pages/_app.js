import '../styles/globals.css'
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return <Component key={router.asPath} {...pageProps} /> 
}
