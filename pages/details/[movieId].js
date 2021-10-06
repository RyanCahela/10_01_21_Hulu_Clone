import Head from "next/head";
import Header from "../../components/Header";
import requests from "../../utils/requests";
import Image from "next/image";

export async function getServerSideProps(context) {
  const movieId = context.query.movieId;
  const baseURL = requests["baseURL"]?.url;
  const requestURL = requests["fetchMovieDetails"]?.url;
  const API_KEY = requests["API_KEY"];
  console.log(`${baseURL}${requestURL}${movieId}${API_KEY}`);
  const data = await fetch(`${baseURL}${requestURL}${movieId}${API_KEY}`).then(
    (res) => res.json()
  );

  return {
    props: {
      movieDetails: data,
    },
  };
}

function Details({ movieDetails }) {
  const baseURL = "https://image.tmdb.org/t/p/original/";
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
  const posterURL = `${baseURL}${poster_path || backdrop_path}`;
  const movieTitle = title || original_title;

  console.log("movieDetails", movieDetails);
  return (
    <div className="grid">
      <h2>{movieTitle}</h2>
      <Image src={posterURL} height={1080} width={1920} layout="responsive" />
    </div>
  );
}

export default Details;
