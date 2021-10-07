import {
  HomeIcon,
  CollectionIcon,
  BadgeCheckIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";
import Image from "next/image";
import Link from "next/link";

function Header(props) {
  return (
    <div onClick={() => console.log("insideClick")}>
      <header className="flex flex-col sm:flex-row items-center p-5">
        <div className="flex justify-evenly max-w-2xl">
          <HeaderItem
            title="home"
            Icon={HomeIcon}
            route="/?genre=fetchTrending"
          />
          <HeaderItem
            title="trending"
            Icon={LightningBoltIcon}
            route="/?genre=fetchTrending"
          />
          <HeaderItem title="verified" Icon={BadgeCheckIcon} />
          <HeaderItem title="collections" Icon={CollectionIcon} />
          <HeaderItem title="search" Icon={SearchIcon} />
          <HeaderItem title="account" Icon={UserIcon} />
        </div>
        <div className="sm:ml-auto">
          <Image
            className="object-contain"
            src="https://links.papareact.com/ua6"
            alt="Hulu logo"
            width={200}
            height={100}
          />
        </div>
      </header>
    </div>
  );
}

export default Header;
