import Link from "next/link";
import React from "react";
import UiImage from "~/lib/Image";
import NavBar from "../NavBar";

const Header = () => {
  return (
    <header>
      <div className="header w-full border-2 border-primary flex justify-between">
        <div>
          <Link href="/home" className="cursor-pointer">
            <UiImage
              src={"/images/logo.png"}
              width={90}
              height={90}
              className="cursor-pointer"
            />
          </Link>
        </div>
        <NavBar ItemsClassNames="w-full whitespace-nowrap px-4 hover:text-primary transition-all" />
      </div>
    </header>
  );
};

export default Header;
