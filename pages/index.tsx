import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import logo from "/images/logo png.png";
import istanbul from "/images/istanbul view.jpg";
import React from "react";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dorna Global</title>
        <meta name="description" content="Real Estate Istanbul" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className=" absolute top-0 left-0 w-screen overflow-hidden max-h-screen">
          <div className="relative w-full h-screen xl:hidden">
            <Image
              src={"/images/istanbul view.jpg"}
              layout="fill"
              className=""
            />
          </div>
          <div className="absolute overlay z-10 w-full h-full bg-black opacity-50"></div>
          <video
            autoPlay
            loop
            muted
            className="hidden xl:inline-block top-0 left-0 w-full min-h-screen h-auto translate-y-[-153px]"
            // style={{ width: "500px", height: "500px" }}
          >
            <source src="/viewvideo.mp4" />
          </video>{" "}
        </div>
        <div className="w-[100%] relative z-20 md:w-[40%] h-full min-h-[50vh] -translate-y-12 max-h-screen ">
          <Image
            src={"/images/logo png.png"}
            layout="fill"
            objectFit="cover"
            className={"max-h[300px]"}
          />
        </div>
        <h1 className="!text-[#83773e] text-[40px] font-bold relative z-20 text-center">
          Under Development
        </h1>
      </main>
    </div>
  );
};

export default Home;
