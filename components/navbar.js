import { FaFilter } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Navbar({ setGenre }) {
  const [category, setCategory] = useState("");
  const router = useRouter();
  const { imdbId } = router.query;

  const clickHandler = () => {
    setGenre(category);
  };
  return (
    <div className="text-white flex items-center font-bold justify-between py-5">
      <Link href={`/`} className="text-2xl">
        Movie Magic
      </Link>
      {router.pathname === "/" ? (
        <div className="flex">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="outline-none rounded-tl-xl text-black sm:px-5 text-xs sm:text-base rounded-bl-xl"
          >
            <option value="">No Preference</option>
            <option value="Action">Action</option>
            <option value="Drama">Drama</option>
            <option value="Comedy">Comedy</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
          </select>
          <button
            onClick={clickHandler}
            className="rounded-tr-xl rounded-br-xl bg-yellow-500 p-4"
          >
            <FaFilter />
          </button>
        </div>
      ) : (
        <a href={`https://www.imdb.com/title/${imdbId}`} target="_blank" rel="noreferrer">
          <Image
            width={70}
            height={10}
            alt="imdb"
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
          />
        </a>
      )}
    </div>
  );
}
