import requests from "../utils/requests";

function Nav(props) {
  const navClassNames = `
  flex 
  flex-nowrap 
  px-10 
  space-x-10
  overflow-x-scroll
  scrollbar-hide
  text-2xl
  sm:px-20 
  sm:space-x-20
  `;

  const genreClassNames = `
  flex-shrink-0 
  hover:scale-125 
  hover:text-white 
  active:text-red-500 
  last:pr-24
  `;

  const fadeOutRightStyles = `
  absolute
  top-0
  right-0
  h-10
  w-1/12
  bg-gradient-to-l
  from-[#06202A]
  `;

  return (
    <nav className="relative">
      <div className={navClassNames}>
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2 className={genreClassNames} key={key}>
            {title}
          </h2>
        ))}
      </div>
      <div className={fadeOutRightStyles} />
    </nav>
  );
}

export default Nav;
