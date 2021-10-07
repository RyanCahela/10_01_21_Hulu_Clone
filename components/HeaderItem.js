import router from "next/router";

function HeaderItem({ Icon, title, route }) {
  return (
    <div
      onClick={() => router.push(route || "/")}
      className={`
        flex flex-col 
        items-center 
        cursor-pointer 
        hover:text-white 
        group 
        w-12 
        sm:w-20 
      `}>
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <span className="uppercase tracking-widest opacity-0 group-hover:opacity-100">
        {title}
      </span>
    </div>
  );
}

export default HeaderItem;
