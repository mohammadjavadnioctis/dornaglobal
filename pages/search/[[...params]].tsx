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
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {locale} = context
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
  return { props: { data, ...(await serverSideTranslations(locale as string, ['common'])) } };
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
