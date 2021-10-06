import Image from "next/image";
import link from "next/link";
import Link from "next/link";
import LikeCounter from "../components/LikeCounter";
import requests from "../utils/requests";

const Thumbnail = ({ movie }) => {
  const { imageBaseURL } = requests.apiValues;

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
  const linkHref = `details/${movie.id}?media-type=${movie.media_type}`;

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
