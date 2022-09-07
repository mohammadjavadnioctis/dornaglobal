import { GetServerSideProps } from "next";
import { db } from "~/utils/config/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore/lite";
import SampleProperties2 from "~/utils/data/SampleProperties2.json";
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  //  const [snapshot, loading, error] = useCollection(
  const propertiesCol = collection(db, "properties");
  const propertiesSnapshot = await getDocs(propertiesCol);
  const propertiesList = propertiesSnapshot.docs.map((doc) => doc.data());
  // );

  console.log("here is the snapshot", propertiesList);
  console.log("here is the contxt", query);

  // try {
  //   const docRef = await addDoc(collection(db, "properties"), {
  //     ...SampleProperties2,
  //   });

  //   console.log("Document written with ID: ", docRef.id);
  // } catch (e) {
  //   console.error("Error adding document: ", e);
  // }

  return { props: {} };
};

import React from "react";

const Property = () => {
  return <div> Property</div>;
};

export default Property;
