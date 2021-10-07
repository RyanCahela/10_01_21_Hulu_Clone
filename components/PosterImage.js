import { useState } from "react";
import Image from "next/image";

function PosterImage({ posterURL, movieTitle }) {
  const [isPosterLoaded, setIsPosterLoaded] = useState(false);

  console.log("isPosterLoaded", isPosterLoaded);

  const loaderStyles = `
    loader
    top-1/2
    left-1/2 
    relative
    z-10 
    -translate-y-1/2
    -translate-x-1/2
  `;

  return (
    <div className="relative">
      <Image
        src={posterURL}
        alt={`poster for ${movieTitle}`}
        height={400}
        width={300}
        layout="responsive"
        priority={true}
        onLoadingComplete={() => setIsPosterLoaded(true)}
      />
      {isPosterLoaded ? (
        ""
      ) : (
        <div className="z-10 top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
}

export default PosterImage;
