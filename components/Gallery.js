import Thumbnail from "./Thumbnail";

function Gallery({ movieData }) {
  const layoutStyles = `
  ${/* Mobile */ ""}
  px-4
  gap-6

  ${/* Tablet */ ""} 
  sm:grid

  ${/* Desktop */ ""}
  md:grid-cols-2
  md:px-12
  lg:grid-cols-3
  xl:grid-cols-4
  `;

  return (
    <div className={`${layoutStyles}`}>
      {movieData.map((movie) => {
        return <Thumbnail movie={movie} key={movie.id} />;
      })}
    </div>
  );
}

export default Gallery;
