import React, { memo } from "react";
import Link from "next/link";
import NavBar from "../NavBar";
import TopBar from "./TopBar";
import { Button } from "@mantine/core";
import { FaRegHandshake } from "react-icons/fa";
import ListyourPropertyButton from "~/components/ListYourPropertyButton/ListyourPropertyButton";
import { useRouter } from "next/router";
import UiImage from "~/lib/Image";
import MobileMenu from "~/components/MobileMenu/MobileMenu";

const Header = memo(() => {
  const router = useRouter();
  let isHomePage = router.asPath == "/";
  return (
    <>
      <header
        className={` ${
          isHomePage ? "relative" : "relative bg-white"
        }  z-[51] w-full `}
      >
        <TopBar />
      </header>
      <div className={`sticky px-4 h-[76px] flex justify-between items-center top-0 left-0 z-50 header w-full backdrop-saturate-[180%] backdrop-blur-[5px] ${isHomePage ? 'bg-[hsla(0,0%,28%,.3)]' : 'bg-[hsla(0,0%,100%,.8)]'}`}>
       <div className="inline-block lg:hidden">
        <MobileMenu />
       </div>
        <div className="w-full  hidden lg:flex container justify-between">
      <UiImage 
          src='/images/logo.png'
          width="60"
          height="60"
          onClick={() => router.push('/')}
          className="cursor-pointer"
        />
        <div className="flex flex-row items-center"> 
          
       
          <NavBar
            ItemsClassNames={`${
              isHomePage ? "text-white" : "text-black"
            } w-full whitespace-nowrap px-4 hover:text-accent transition-all `}
          />
           <div>
            <ListyourPropertyButton />
          </div>
          </div>
        </div>
        <div className="lg:hidden">

        <UiImage 
          src='/images/logo.png'
          width="50"
          height="50"
          onClick={() => router.push('/')}
          className="cursor-pointer lg:hidden"
        />
        </div>
      </div>
    </>
  );
});

export default Header;
