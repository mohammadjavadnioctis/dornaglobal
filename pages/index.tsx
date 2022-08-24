import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import logo from "/images/logo png.png";
import istanbul from "/images/istanbul view.jpg";
import React from "react";
import TestComppnent from "components/Test/Test";
import { Tabs } from "@mantine/core";
import { IconPhoto, IconMessageCircle, IconSettings } from "@tabler/icons";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dorna Global</title>
        <meta name="description" content="Real Estate Istanbul" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Dorna global</h1>
        <TestComppnent />
      </main>
    </div>
  );
};

export default Home;
