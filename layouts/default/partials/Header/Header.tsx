import React, { memo } from "react";
import Link from "next/link";
import UiImage from "~/lib/Image";
import NavBar from "../NavBar";
import TopBar from "./TopBar";

const Header = memo(() => {
  return (
    <header className="absolute z-10 w-full">
      <TopBar />
      <div className="container header w-full border-2 border-primary flex justify-between">
        <div>
          <Link href="/home" className="cursor-pointer">
            <div>
              <UiImage
                src={"/images/logo.png"}
                width={90}
                height={90}
                className="cursor-pointer"
              />
            </div>
          </Link>
        </div>
        <NavBar ItemsClassNames="w-full whitespace-nowrap px-4 text-white hover:text-primary transition-all" />
      </div>
    </header>
  );
});

export default Header;
