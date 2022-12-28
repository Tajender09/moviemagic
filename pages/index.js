import MovieTitle from "../components/movietile";

export default function Home({ movies, genre }) {
  const filterData =
    genre !== "" ? movies.filter((data) => data.genre.includes(genre)) : movies;

  return (
    <div className="flex py-5 items-center flex-wrap justify-center sm:justify-between gap-x-1.5">
      {filterData.map((data) => {
        return (
          <MovieTitle
            key={data.id}
            title={data.title}
            image={data.image}
            id={data.id}
            year={data.year}
            imdbid={data.imdbid}
          />
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://63ab1b16fdc006ba6056234f.mockapi.io/movies/movies",
  );
  const data = await response.json();

  return {
    props: {
      movies: data,
    },
  };
}
