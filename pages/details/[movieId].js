import requests from "../../utils/requests";
import Image from "next/image";

export async function getServerSideProps(context) {
  const movieId = context.query.movieId;
  const { movieDatabaseURL, apiKeyQueryString } = requests.apiValues;
  const requestURL = requests["fetchMovieDetails"]?.url;
  console.log(`${movieDatabaseURL}${requestURL}${movieId}${apiKeyQueryString}`);
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
  const {
    backdrop_path,
    homepage,
    original_title,
    overview,
    poster_path,
    release_date,
    revenue,
    title,
    vote_average,
    voteCount,
    runtime,
    production_companies,
    status,
    tagline,
  } = movieDetails;

  //handle Api inconcistencies
  const posterURL = `${imageBaseURL}${poster_path || backdrop_path}`;
  const movieTitle = title || original_title;

  return (
    <div className="grid">
      <h2>{movieTitle}</h2>
      <Image src={posterURL} height={1080} width={1920} layout="responsive" />
    </div>
  );
}

export default Details;
