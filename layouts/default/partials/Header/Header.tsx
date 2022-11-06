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
    <>
      <header
        className={` ${
          isHomePage ? "relative" : "relative bg-white"
        }  z-10 w-full `}
      >
        <TopBar />
      </header>
      <div className="sticky px-8 top-0 left-0 z-50 header w-full flex justify-between py-5 backdrop-saturate-[180%] backdrop-blur-[5px] bg-[hsla(0,0%,100%,.8)]">
        <div>
          <ListyourPropertyButton />
        </div>
        <NavBar
          ItemsClassNames={`${
            isHomePage ? "text-white" : "text-black"
          } w-full whitespace-nowrap px-4 hover:text-accent transition-all `}
        />
      </div>
    </>
  );
});

export default Header;
