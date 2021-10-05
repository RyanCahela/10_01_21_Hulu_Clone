import { useState, forwardRef } from "react";
import Image from "next/image";
import { ThumbUpIcon as ThumbUpIconOutline } from "@heroicons/react/outline";
import { ThumbUpIcon as ThumbUpIconSolid } from "@heroicons/react/solid";

const Thumbnail = ({ movie }) => {
  const baseURL = "https://image.tmdb.org/t/p/original/";
  const [isLiked, setIsLiked] = useState(false);
  const [voteCount, setVoteCount] = useState(movie.vote_count);

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

  const thumbIconStyles = ` 
    mr-3
    ml-auto
    w-6
    scale-150

    sm:scale-125

    md:scale-100
  `;

  //click handlers
  function handleThumbUpClick() {
    if (isLiked) return;
    setIsLiked(true);
    setVoteCount(voteCount + 1);
  }

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
      </figure>
      <h2 className={`${movieNameStyles}`}>{nameOfContent}</h2>
      <p className="truncate max-w-md">{overview}</p>
      <div className={`${movieDetailsLayout} ${movieDetailsStyles}`}>
        <p className={`${movieDetailsTextStyles}`}>{releaseDate}</p>
        <div className={thumbIconStyles}>
          {isLiked ? (
            <ThumbUpIconSolid />
          ) : (
            <ThumbUpIconOutline onClick={() => handleThumbUpClick()} />
          )}
        </div>
        <p className={`${movieDetailsTextStyles}`}>{voteCount}</p>
      </div>
    </div>
  );
};

Thumbnail.displayName = "Thumbnail";

export default Thumbnail;
