import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";
import HomePage from "~/components/pages/Home/Home";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dorna Global</title>
        <meta name="description" content="Real Estate Istanbul" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen">
        <HomePage />
      </div>
    </div>
  );
};

export default Home;
