import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

function Thumbnail({ movie }) {
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
    vote_count,
  } = movie;

  //Tailwind Styles
  const containerLayout = `
  `;

  const containerStyles = `
    group
    hover:cursor-pointer
    sm:hover:scale-110
    transition-all
    duration-200
  `;

  const movieNameStyles = `
    text-white
    group-hover:font-bold
    text-2xl
  `;

  const movieDetailsStyles = `
  opacity-0
  group-hover:opacity-100
  `;

  const movieDetailsLayout = `
    flex
  `;

  //Handle API Inconsitencies
  const nameOfContent = name || title;
  const releaseDate = first_air_date || release_date;
  const imagePath =
    `${baseURL}${backdrop_path || poster_path}` || `${baseURL}${poster_path}`;

  return (
    <div className={`${containerLayout} ${containerStyles}`}>
      <figure>
        <Image
          src={imagePath}
          layout="responsive"
          width={1920}
          height={1080}
          alt={`poster for ${nameOfContent}`}
        />
        <figcaption className="truncate max-w-md">{overview}</figcaption>
      </figure>
      <h2 className={`${movieNameStyles}`}>{nameOfContent}</h2>
      <div className={`${movieDetailsLayout} ${movieDetailsStyles}`}>
        <p className="mr-4">{releaseDate}</p>
        <ThumbUpIcon className="inline-block w-4 mr-1" />
        <p>{vote_count}</p>
      </div>
    </div>
  );
}

export default Thumbnail;
