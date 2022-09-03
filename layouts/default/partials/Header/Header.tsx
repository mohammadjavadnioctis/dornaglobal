import React, { memo } from "react";
import Link from "next/link";
import NavBar from "../NavBar";
import TopBar from "./TopBar";
import { Button } from "@mantine/core";
import { FaRegHandshake } from "react-icons/fa";
import ListyourPropertyButton from "~/components/ListYourPropertyButton/ListyourPropertyButton";

const Header = memo(() => {
  return (
    <header className="absolute z-10 w-full">
      <TopBar />
      <div className="container header w-full flex justify-between py-5">
        <div>
          <ListyourPropertyButton />
        </div>
        <NavBar ItemsClassNames="w-full whitespace-nowrap px-4 text-white hover:text-primary transition-all" />
      </div>
    </header>
  );
});

export default Header;
