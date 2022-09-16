import React, { FC, ReactNode, useState, useEffect } from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import fetchProperties from "~/utils/helpers/firebase/fetchProperties";
import { PropertyType } from "~/utils/types";

export const PropertiesDataContext = React.createContext({});

type PropertiesDataProviderType = {
  children: ReactNode;
};

const fetchContextProperties = async () => {
  const properties = await fetchProperties();
  // console.log("this is properties from context", properties);
  return properties;
};

export const PropertiesDataProvider: FC<PropertiesDataProviderType> = ({
  children,
}) => {
  const [properties, setProperties] = useState();
  useEffect(() => {}, []);
  const value: any = useMemo(
    () => ({
      properties,
    }),
    []
  );
  return (
    <PropertiesDataContext.Provider value={value}>
      {children}
    </PropertiesDataContext.Provider>
  );
};
