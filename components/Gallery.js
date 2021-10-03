import Thumbnail from "./Thumbnail";

function Gallery({ movieData }) {
  const layoutStyles = `
  ${/* Mobile */ ""}
  grid
  grid-cols-1
  px-4
  gap-6

  ${/* Tablet */ ""} 
  sm:grid-cols-2

  ${/* Desktop */ ""}
  md:grid-cols-3
  md:px-12
  lg:grid-cols-4
  xl:grid-cols-5
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
