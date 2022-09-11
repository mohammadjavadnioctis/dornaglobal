import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { memo } from "react";
import HomePage from "~/components/pages/Home/Home";
import fetchProperties from "~/utils/helpers/firebase/fetchProperties";
import { PropertyType } from "~/utils/types";
import { isDev } from "~/utils/helpers";

export const getServerSideProps: GetServerSideProps = async (context) => {
  // fetch a list of properties from the database
  const properties = await fetchProperties();

  return {
    props: { properties },
  };
};

interface HomepageType {
  properties: PropertyType[];
}

const Home: NextPage<HomepageType> = memo((props) => {
  const { properties } = props;
  // console.log('here is the properties', properties)
  return (
    <div className={styles.container}>
      <Head>
        <title>Dorna Global</title>
        <meta name="description" content="Real Estate Istanbul" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen">
        <HomePage properties={properties} />
        {/* <div className="h-screen"></div> */}
      </div>
    </div>
  );
});

if (isDev) {
  Home.displayName = "Home";
}

export default Home;
