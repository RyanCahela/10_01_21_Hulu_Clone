import Thumbnail from "./Thumbnail";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

function Gallery({ movieData }) {
  console.log("movieData", movieData);
  const router = useRouter();
  const layoutStyles = `
  ${/* Mobile */ ""}
  space-y-10
  
  ${/* Tablet */ ""} 
  sm:grid
  sm:gap-6
  sm:space-y-0

  ${/* Desktop */ ""}
  md:grid-cols-2
  md:px-12
  lg:grid-cols-3
  xl:grid-cols-4
  `;

  //Page load animation values
  const listAnimation = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
    },
    exit: {
      opacity: 0,
    },
  };

  const thumbnailAnimation = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        key={router.query.genre}
        initial="hidden"
        animate="visible"
        variants={listAnimation}
        className={`${layoutStyles}`}>
        {movieData.map((movie) => {
          return (
            <motion.div
              key={movie.id}
              variants={thumbnailAnimation}
              exit={{ opacity: 0 }}>
              <Thumbnail movie={movie} />
            </motion.div>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
}

export default Gallery;
