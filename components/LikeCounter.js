import { useState } from "react";
import { ThumbUpIcon as ThumbUpIconOutline } from "@heroicons/react/outline";
import { ThumbUpIcon as ThumbUpIconSolid } from "@heroicons/react/solid";

function LikeCounter({ initialVoteCount }) {
  const [isLiked, setIsLiked] = useState(false);
  const [voteCount, setVoteCount] = useState(initialVoteCount);

  const thumbIconStyles = ` 
    mr-3
    ml-auto
    w-6
    scale-150
    sm:scale-125
    md:scale-100
  `;

  const movieDetailsTextStyles = `
  text-lg
  md:text-base 
`;

  function handleThumbUpClick() {
    if (isLiked) {
      setIsLiked(false);
      setVoteCount((voteCount) => voteCount - 1);
      return;
    }
    setIsLiked(true);
    setVoteCount((voteCount) => voteCount + 1);
  }

  return (
    <div className="flex ml-auto" onClick={() => handleThumbUpClick()}>
      <div className={thumbIconStyles}>
        {isLiked ? <ThumbUpIconSolid /> : <ThumbUpIconOutline />}
      </div>
      <p className={`${movieDetailsTextStyles}`}>{voteCount}</p>
    </div>
  );
}

export default LikeCounter;
