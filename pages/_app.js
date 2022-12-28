import "../styles/globals.css";
import Navbar from "../components/navbar";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [genre, setGenre] = useState("");
  
  return (
    <div className="bg-black h-full pb-20">
    <div className="container w-11/12 h-full mx-auto">
      <Navbar setGenre={setGenre} />
      <Component genre={genre} {...pageProps} />
      </div>
    </div>
  );
}
