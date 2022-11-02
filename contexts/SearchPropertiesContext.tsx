import React, { FC, ReactNode, useState, useEffect, useContext } from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import fetchProperties from "~/utils/helpers/firebase/fetchProperties";
import { PropertyType } from "~/utils/types";

interface SearchPropertiesContextType {
    fetchedProperties?: PropertyType
  }


export const SearchPropertiesContext = React.createContext<SearchPropertiesContextType>({});

export const useSearchProperties = () => {
    return useContext(SearchPropertiesContext);
  };



  
type SearchPropertiesProviderContextType = {
  children: ReactNode;
};


export const SearchPropertiesProvider: FC<SearchPropertiesProviderContextType> = ({
  children,
}) => {
  const [properties, setProperties] = useState<PropertyType[]>();

    
const fetchContextProperties = async () => {
    const fetchedProperties = await fetchProperties();
    // @ts-ignore
    setProperties(fetchedProperties)
    return fetchedProperties;
  };

  useEffect(() => {
    fetchContextProperties()
}, []);
  const value: any = useMemo(
    () => ({
      fetchedProperties: properties,
    }),
    []
  );
  return (
    <SearchPropertiesContext.Provider value={value}>
      {children}
    </SearchPropertiesContext.Provider>
  );
};
