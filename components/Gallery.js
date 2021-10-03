import Thumbnail from "./Thumbnail";

function Gallery({ movieData }) {
  return (
    <div className="flex flex-wrap">
      {movieData.map((movie) => {
        return <Thumbnail movie={movie} key={movie.id} />;
      })}
    </div>
  );
}

export default Gallery;
