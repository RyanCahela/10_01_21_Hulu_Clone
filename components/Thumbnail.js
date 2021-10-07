import Image from "next/image";
import Link from "next/link";
import LikeCounter from "../components/LikeCounter";
import requests from "../utils/requests";
import { useRouter } from "next/router";

const Thumbnail = ({ movie }) => {
  const { imageBaseURL } = requests.apiValues;
  const router = useRouter();

  //api values
  const {
    poster_path,
    backdrop_path,
    overview,
    name,
    title,
    first_air_date,
    release_date,
  } = movie;

  //Tailwind Styles
  const containerLayout = `
  `;

  const containerStyles = `
    group
    hover:cursor-pointer
    sm:hover:scale-105
    transition-all
    duration-200
  `;

  const movieNameStyles = `
    text-white
    group-hover:font-bold
    text-2xl
    truncate
    mt-2
  `;

  const movieDetailsStyles = `
    md:opacity-0
    md:group-hover:opacity-100
  `;

  const movieDetailsLayout = `
    flex
    mt-5
    md:mt-0
  `;

  const movieDetailsTextStyles = `
    text-lg
    md:text-base 
  `;

  //Handle API Inconsitencies
  const nameOfContent = name || title;
  const releaseDate = first_air_date || release_date;
  const imagePath = `${imageBaseURL}${backdrop_path || poster_path}`;
  const mediaType =
    router.query.genre === "fetchTopRated" ? "movie" : movie.media_type;
  const linkHref = `details/${movie.id}?media-type=${mediaType}`;

  return (
    <div className={`${containerLayout} ${containerStyles}`}>
      <Link href={linkHref}>
        <figure>
          <Image
            src={imagePath}
            layout="responsive"
            width={1920}
            height={1080}
            alt={`poster for ${nameOfContent}`}
          />
        </figure>
      </Link>
      <Link href={linkHref}>
        <h2 className={`${movieNameStyles}`}>{nameOfContent}</h2>
      </Link>
      <p className="truncate max-w-md">{overview}</p>
      <div className={`${movieDetailsLayout} ${movieDetailsStyles}`}>
        <p className={`${movieDetailsTextStyles}`}>{releaseDate}</p>
        <LikeCounter initialVoteCount={movie.vote_count} />
      </div>
    </div>
  );
};

Thumbnail.displayName = "Thumbnail";

export default Thumbnail;
