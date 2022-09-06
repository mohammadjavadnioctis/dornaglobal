import { GetServerSideProps } from "next";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "~/utils/config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  //  const [snapshot, loading, error] = useCollection(
  const propertiesCol = collection(db, "properties");
  const propertiesSnapshot = await getDocs(propertiesCol);
  const propertiesList = propertiesSnapshot.docs.map((doc) => doc.data());
  // );

  console.log("here is the snapshot", propertiesList);
  console.log("here is the contxt", query);

  return { props: {} };
};

import React from "react";

const Property = () => {
  return <div> Property</div>;
};

export default Property;
