import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
const inter = Inter({ subsets: ["latin"] });
import { Toaster } from 'react-hot-toast';
export default function App({ Component, pageProps }: AppProps) {
  
  return <div className = {inter.className}>
    <GoogleOAuthProvider clientId="622133670179-2unp7424hmo90rg1s48bvb26quhia7om.apps.googleusercontent.com">
      <Component {...pageProps}/>
      <Toaster/>
    </GoogleOAuthProvider></div>;
}
