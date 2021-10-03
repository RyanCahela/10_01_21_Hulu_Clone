import Image from "next/image";

function Thumbnail({ movie }) {
  const baseURL = "https://image.tmdb.org/t/p/w500/";
  const { poster_path, overview, name, first_air_date, vote_count } = movie;
  return (
    <div>
      <figure>
        <Image
          src={`${baseURL}${poster_path}`}
          width={300}
          height={200}
          alt={`poster for ${name}`}
        />
        <figcaption>{overview}</figcaption>
      </figure>
      <p>{name}</p>
      <div className="space-x-4">
        <span>{first_air_date}</span>
        <span>{vote_count}</span>
      </div>
    </div>
  );
}

export default Thumbnail;
