import React, { memo } from "react";
import Link from "next/link";
import NavBar from "../NavBar";
import TopBar from "./TopBar";
import { Button } from "@mantine/core";
import { FaRegHandshake } from "react-icons/fa";
import ListyourPropertyButton from "~/components/ListYourPropertyButton/ListyourPropertyButton";
import { useRouter } from "next/router";

const Header = memo(() => {
  const router = useRouter();
  let isHomePage = router.asPath == "/";
  return (
    <header
      className={` ${isHomePage ? "absolute" : "relative"}  z-10 w-full `}
    >
      <TopBar />
      <div className="container header w-full flex justify-between py-5 ">
        <div>
          <ListyourPropertyButton />
        </div>
        <NavBar
          ItemsClassNames={`${
            isHomePage ? "text-white" : "text-black"
          } w-full whitespace-nowrap px-4 hover:text-accent transition-all `}
        />
      </div>
    </header>
  );
});

export default Header;
