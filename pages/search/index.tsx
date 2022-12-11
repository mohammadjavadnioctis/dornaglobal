import { GetServerSideProps } from "next";
import { FC, memo, useEffect, useState } from "react";
import { isDev } from "~/utils/helpers";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "~/utils/config/firebase";
import SearchPage from "~/components/pages/Search/SearchPage";
import {
  SearchPropertiesContext,
  SearchPropertiesProvider,
} from "~/contexts/SearchPropertiesContext";

export const getServerSideProps: GetServerSideProps = async (context) => {
  // let pageCount = false
  // const q = query(collection(db, "properties"), where("agentId", "==", 'Zd58oroNdd7pC5kuKT4C'),

  //  where('pageViewCount','==', 140)

  //  );

  // const querySnapshot = await getDocs(q);
  //  const data =  querySnapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));

  // snapshot.forEach(doc => {
  //   console.log(doc.id, '=>', doc.data());
  // });

  // if (docSnap.exists()) {
  //   return { ...docSnap.data(), id: docSnap.id };
  // } else {
  //   console.log("No such agent document!");
  // }
  let data = {};
  return { props: { data } };
};

const Search: FC = memo((props: any) => {

  return (
    <div>
      <SearchPropertiesProvider>
        <SearchPage />
      </SearchPropertiesProvider>
    </div>
  );
});

if (isDev) {
  Search.displayName = "Search";
}

export default Search;
