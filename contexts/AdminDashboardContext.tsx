import React, {
    FC,
    ReactNode,
    useState,
    useEffect,
    useContext,
    useMemo,
  } from "react";
  // import { useMemo } from "react";
  import { adminDashboardMenu } from "~/utils/data/menus";
  
  interface AdminDashboardContextType {
    activeTab: string;
    setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  }
  
  export const DashboardContext = React.createContext<AdminDashboardContextType>({
    activeTab: adminDashboardMenu[0].href,
    setActiveTab: () => {},
  });
  
  type AdminDashboardProviderType = {
    children: ReactNode;
  };
  
  export const useAdminDashboardContext = () => {
    return useContext(DashboardContext);
  };
  
  export const AdminDashboardProvider: FC<AdminDashboardProviderType> = ({
    children,
  }) => {
    const [activeTab, setActiveTab] = useState(adminDashboardMenu[0].href);
  
    const value: any = useMemo(
      () => ({
        activeTab,
        setActiveTab,
      }),
      [activeTab, setActiveTab]
    );
    return (
      <DashboardContext.Provider value={value}>
        {children}
      </DashboardContext.Provider>
    );
  };
  