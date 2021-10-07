import requests from "../../utils/requests";
import Image from "next/image";
import ImageNotFound from "../../components/ImageNotFound";
import ProductionCompanies from "../../components/ProductionCompanies";
import { useRouter } from "next/router";

function Details({ movieDetails }) {
  const { imageBaseURL } = requests.apiValues;
  const router = useRouter();
  const {
    backdrop_path,
    homepage,
    original_name,
    overview,
    poster_path,
    release_date,
    first_air_date,
    revenue,
    name,
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
    lg:grid-row-3
  `;

  const posterLayout = `
    row-start-1 
    row-end-2
    mb-6

    sm:mb-0

    lg:row-end-3
  `;

  const backButtonStyles = `
    text-2xl
    mb-4
    sm:p-4 
    hover:font-bold
    hover:underline
    cursor-pointer
  `;

  //handle Api inconcistencies
  const posterURL = `${imageBaseURL}${poster_path || backdrop_path}`;
  const movieTitle = name || title || original_name;
  const releaseDate = release_date || first_air_date;
  const releaseYear = releaseDate?.slice(0, 4);

  return (
    <>
      <div className={backButtonStyles} onClick={() => router.back()}>
        &lt; Go Back
      </div>
      <div className={containerLayout}>
        <div className={posterLayout}>
          {!posterURL.includes("null") ? (
            <Image
              src={posterURL}
              alt={`poster for ${movieTitle}`}
              height={400}
              width={300}
              layout="responsive"
            />
          ) : (
            <ImageNotFound />
          )}
        </div>
        <div>
          <h2 className="text-white text-2xl">
            {movieTitle}
            <span className="font-thin ml-2">
              {releaseYear ? `(${releaseYear})` : ""}
            </span>
          </h2>
          <p className="italic mb-3">{tagline}</p>
          <p className="mb-3">{overview}</p>
          <p>Original Air Date: {releaseDate}</p>
          <p>User Rating: {vote_average}</p>
        </div>
        <ProductionCompanies productionCompanies={production_companies} />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const movieId = context.query.movieId;
  const mediaType = context.query["media-type"];
  const { movieDatabaseURL, apiKeyQueryString } = requests.apiValues;
  //there are different api enpoints for movies and tv shows
  const requestURL =
    mediaType === "movie"
      ? requests["fetchMovieDetails"]?.url
      : requests["fetchTVDetails"]?.url;

  console.log(
    "request",
    `${movieDatabaseURL}${requestURL}/${movieId}${apiKeyQueryString}`
  );

  const data = await fetch(
    `${movieDatabaseURL}${requestURL}/${movieId}${apiKeyQueryString}`
  ).then((res) => res.json());

  return {
    props: {
      movieDetails: data,
    },
  };
}

export default Details;
