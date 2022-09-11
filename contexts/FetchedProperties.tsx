import React, { FC, ReactNode, useState, useEffect } from "react";
import { useCallback } from "react";
import { useMemo } from "react";


export const PropertiesDataContext = React.createContext({})

type PropertiesDataProviderType = {
    children: ReactNode;
}


export const PropertiesDataProvider: FC<PropertiesDataProviderType> = ({children}) => {
    const value: any = useMemo(
        () => ({ 

         }),[

         ])
    return (
        <PropertiesDataContext.Provider value={value} >
            {children}
        </PropertiesDataContext.Provider>
    )
}