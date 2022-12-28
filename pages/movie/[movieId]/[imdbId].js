import { useRouter } from "next/router";
import Image from "next/image";

export default function Movie({ movieData }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="w-10 h-10 border-4 border-r-black rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center md:justify-between lg:justify-evenly justify-center py-10">
      <Image
        loader={() => movieData.image}
        src={movieData.image}
        alt="Movie Poster"
        width={500}
        height={500}
        className="rounded-xl sm:w-2/3 md:w-1/2 lg:w-1/3"
      />
      <div className="text-white mt-5 md:mt-0 md:w-1/3 text-sm">
        <h1 className="text-2xl pb-3">{movieData.title}</h1>

        <hr className="pb-3" />

        <p className="pb-3">
          <span className="font-bold">Description: </span>
          <br />
          {movieData.description}
        </p>

        <hr className="pb-3" />

        <div>
          <span className="font-bold">Director:</span> {movieData.director[0]}
        </div>
        <div className="my-1">
          <span className="font-bold">Generes: </span>
          {movieData.genre.map((genre) => (
            <span key={genre} className="bg-yellow-500 px-2 py-1 mx-1 rounded">
              {genre}
            </span>
          ))}
        </div>
        <div className="pb-3">
          <span className="font-bold">Rating: </span>
          {movieData.rating}
        </div>

        <hr className="pb-3" />

        <div className="font-bold">
          Trailer:
          <iframe
            className="w-full h-96"
            src={`${movieData.trailer}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const response = await fetch(
    "https://63ab1b16fdc006ba6056234f.mockapi.io/movies/movies/"
  );
  const data = await response.json();
  const paths = data
    .filter((item) => item.rank <= 20)
    .map((data) => ({
      params: {
        movieId: `${data.id}`,
        imdbId: `${data.imdbId}`,
      },
    }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const response = await fetch(
    `https://63ab1b16fdc006ba6056234f.mockapi.io/movies/movies/${params.movieId}`
  );
  const data = await response.json();

  return {
    props: {
      movieData: data,
    },
  };
}
