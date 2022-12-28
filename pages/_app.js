import "../styles/globals.css";
import Navbar from "../components/navbar";
import { useState } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const [genre, setGenre] = useState("");
  
  return (
    <>
    <Head>
      <title>Movie Magic</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="bg-black h-full pb-20">
    <div className="container w-11/12 h-full mx-auto">
      <Navbar setGenre={setGenre} />
      <Component genre={genre} {...pageProps} />
      </div>
    </div>
    </>
  );
}
