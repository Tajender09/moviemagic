import { useRouter } from "next/router";
import Image from "next/image";

export default function MovieTitle({ title, image, id, year, imdbid }) {
  const router = useRouter();
  const selectMovie = (id) => {
    router.push(`/movie/${id}/${imdbid}`);
  };
  return (
    <div
      onClick={() => selectMovie(id)}
      className="cursor-pointer sm:w-1/3 md:w-1/4 lg:w-1/5 my-5"
    >
      <Image
        width={500}
        height={500}
        loader={() => image} 
        src={image}
        alt="Movie Poster"
        className="rounded-tl-xl rounded-tr-xl"
      />
      <div className="bg-[#0d0d0d] p-5 rounded-bl-xl rounded-br-xl">
        <h1 className="text-yellow-500">{title}</h1>
        <h4 className="text-[#2c6462] mt-2">{year}</h4>
      </div>
    </div>
  );
}
