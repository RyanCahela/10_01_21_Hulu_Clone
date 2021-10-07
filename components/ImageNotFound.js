function ImageNotFound({ color = "light" }) {
  const outlineClass = color === "dark" ? "outline-black" : "outline-white";
  const textColorClass = color === "dark" ? "text-black" : "text-white";

  return (
    <div
      className={`text-center text-sm ${textColorClass} ${outlineClass} w-full`}>
      No Image
    </div>
  );
}

export default ImageNotFound;
