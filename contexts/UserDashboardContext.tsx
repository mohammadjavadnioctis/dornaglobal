import React, {
  FC,
  ReactNode,
  useState,
  useEffect,
  useContext,
  useMemo,
} from "react";
// import { useMemo } from "react";
import { userDashboardMenu } from "~/utils/data/menus";

interface userDashboardContextType {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export const DashboardContext = React.createContext<userDashboardContextType>({
  activeTab: userDashboardMenu[0].href,
  setActiveTab: () => {},
});

type UserDashboardProviderType = {
  children: ReactNode;
};

export const useUserDashboardContext = () => {
  return useContext(DashboardContext);
};

export const UserDashboardProvider: FC<UserDashboardProviderType> = ({
  children,
}) => {
  const [activeTab, setActiveTab] = useState(userDashboardMenu[0].href);

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
