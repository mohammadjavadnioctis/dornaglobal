import { FC, memo, useEffect } from "react";
import {
  useUserDashboardContext,
} from "~/contexts/UserDashboardContext";
import { adminDashboardMenu } from "~/utils/data/menus";
import { isDev } from "~/utils/helpers";
import DashboardLeftSideBar from "./partials/DashboardLeftSideBar/DashboardLeftSideBar";
import ProfileHero from "./partials/ProfileHero";
import MessagesTab from "./partials/Tabs/MessagesTab/MessagesTab";
import MyListingsTab from "./partials/Tabs/MyListingsTab/MyListingsTab";
import UsersListTab from "./partials/Tabs/Profile/UsersListTab";

const AdProfile: FC = memo(() => {
  const { activeTab } = useUserDashboardContext();

  const RenderActiveTab = () => {
    switch (activeTab) {
      case "profile":
        return <UsersListTab />;
      case "myListings":
        return <MyListingsTab />;
      case "messages":
        return <MessagesTab />
    }
  };

  return (
    <div className="bg-white">
      <ProfileHero />
      <div className="tabs_container container relative min-h-[80vh] flex justify-between !mt-8">
        <div className="left_sideBar w-1/4 bg-white rounded-xl h-[50vh] sticky top-0 right-0 ">
          <DashboardLeftSideBar menu={adminDashboardMenu} />
        </div>
        <div className="tabs w-[74%] rounded-xl bg-white  border-2 border-accent-300 bg-accent-100">
          {RenderActiveTab()}
        </div>
      </div>
    </div>
  );
});

if (isDev) {
  AdProfile.displayName = "Adprofile";
}

export default AdProfile;
