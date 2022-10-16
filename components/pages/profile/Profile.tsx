import { FC, memo, useEffect } from "react";
import {
  useUserDashboardContext,
} from "~/contexts/UserDashboardContext";
import { userDashboardMenu } from "~/utils/data/menus";
import { isDev } from "~/utils/helpers";
import DashboardLeftSideBar from "./partials/DashboardLeftSideBar/DashboardLeftSideBar";
import ProfileHero from "./partials/ProfileHero";
import MessagesTab from "./partials/Tabs/MessagesTab/MessagesTab";
import MyListingsTab from "./partials/Tabs/MyListingsTab/MyListingsTab";
import ProfileTab from "./partials/Tabs/Profile/ProfileTab";

const Profile: FC = memo(() => {
  const { activeTab } = useUserDashboardContext();

  const RenderActiveTab = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileTab />;
      case "myListings":
        return <MyListingsTab />;
      case "messages":
        return <MessagesTab />
    }
  };

  return (
    <div>
      <ProfileHero />
      <div className="tabs_container container relative min-h-[80vh] flex justify-between !mt-8">
        <div className="left_sideBar w-1/4 bg-white rounded-xl h-[50vh] sticky top-0 right-0 ">
          <DashboardLeftSideBar menu={userDashboardMenu} />
        </div>
        <div className="tabs w-[74%] rounded-xl bg-white ">
          {RenderActiveTab()}
        </div>
      </div>
    </div>
  );
});

if (isDev) {
  Profile.displayName = "profile";
}

export default Profile;
