import requests from "../../utils/requests";
import Image from "next/image";

export async function getServerSideProps(context) {
  const movieId = context.query.movieId;
  const mediaType = context.query["media-type"];
  const { movieDatabaseURL, apiKeyQueryString } = requests.apiValues;
  //there are different api enpoints for movies and tv shows
  const requestURL =
    mediaType === "movie"
      ? requests["fetchMovieDetails"]?.url
      : requests["fetchTVDetails"]?.url;

  const data = await fetch(
    `${movieDatabaseURL}${requestURL}/${movieId}${apiKeyQueryString}`
  ).then((res) => res.json());

  return {
    props: {
      movieDetails: data,
    },
  };
}

function Details({ movieDetails }) {
  const { imageBaseURL } = requests.apiValues;
  console.log("movieDetails", movieDetails);
  const {
    backdrop_path,
    homepage,
    original_name,
    overview,
    poster_path,
    release_date,
    first_air_date,
    revenue,
    title,
    vote_average,
    voteCount,
    runtime,
    production_companies,
    status,
    tagline,
  } = movieDetails;

  const containerLayout = `
    flex
    flex-col

    sm:grid
    sm:grid-cols-2
    sm:gap-4
    sm:p-4
  `;

  //handle Api inconcistencies
  const posterURL = `${imageBaseURL}${poster_path || backdrop_path}`;
  const movieTitle = title || original_name;
  const releaseDate = release_date || first_air_date;

  const releaseYear = releaseDate.slice(0, 4);

  return (
    <div className={containerLayout}>
      <div className="">
        <Image src={posterURL} height={400} width={300} layout="responsive" />
      </div>
      <div>
        <h2 className="text-white text-2xl">
          {movieTitle}
          <span className="font-thin ml-2">{`(${releaseYear})`}</span>
        </h2>
        <p className="italic mb-3">{tagline}</p>
        <p className="mb-3">{overview}</p>
        <p>Original Air Date: {releaseDate}</p>
        <p>User Rating: {vote_average}</p>
      </div>
    </div>
  );
}

export default Details;
