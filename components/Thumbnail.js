import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import LikeCounter from "../components/LikeCounter";

const Thumbnail = ({ movie }) => {
  const baseURL = "https://image.tmdb.org/t/p/original/";

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
  const imagePath =
    `${baseURL}${backdrop_path || poster_path}` || `${baseURL}${poster_path}`;

  return (
    <div className={`${containerLayout} ${containerStyles}`}>
      <Link href={`details/${movie.id}`}>
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
      <Link href={`details/${movie.id}`}>
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
