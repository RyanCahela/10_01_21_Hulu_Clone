import Thumbnail from "./Thumbnail";
import { AnimatePresence, motion } from "framer-motion";

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

  //Page load animation values
  const listAnimation = {
    visible: {
      transition: {
        staggerChildren: 1,
      },
    },
    hidden: {},
  };

  const thumbnailAnimation = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
    exit: {
      opacity: 0,
    },
  };

  const AnimatedThumbnail = motion(Thumbnail);
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={listAnimation}
      className={`${layoutStyles}`}>
      <AnimatePresence>
        {movieData.map((movie) => {
          return (
            <AnimatedThumbnail
              movie={movie}
              key={movie.id}
              variants={thumbnailAnimation}
            />
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
}

export default Gallery;
