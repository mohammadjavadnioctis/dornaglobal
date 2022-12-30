import { FC, memo, useEffect } from "react";
import {
  useUserDashboardContext,
} from "~/contexts/UserDashboardContext";
import { ProfilePageType } from "~/pages/profile";
import { userDashboardMenu } from "~/utils/data/menus";
import { isDev } from "~/utils/helpers";
import useIsMobile from "~/utils/hooks/isMobile";
import DashboardLeftSideBar from "./partials/DashboardLeftSideBar/DashboardLeftSideBar";
import ProfileHero from "./partials/ProfileHero";
import UserProfileNavigationMenu from "./partials/ProfileNavigationMenu/ProfileNavigationMenu";
import MessagesTab from "./partials/Tabs/MessagesTab/MessagesTab";
import MyListingsTab from "./partials/Tabs/MyListingsTab/MyListingsTab";
import ProfileTab from "./partials/Tabs/Profile/ProfileTab";




const Profile: FC<ProfilePageType> = memo((props) => {
  
  const { listedProperties } = props
  const { activeTab } = useUserDashboardContext();
  let isMobile = useIsMobile()
  const RenderActiveTab = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileTab />;
      case "myListings":
        return <MyListingsTab listedProperties={listedProperties} />;
      case "messages":
        return <MessagesTab />
    }
  };

  return (
    <div className="bg-white">
      <ProfileHero />
      {
        isMobile && <UserProfileNavigationMenu />
      }
      <div className="tabs_container container relative min-h-[80vh] flex justify-between !mt-8">
        {!isMobile && 
          <div className="left_sideBar w-1/4 bg-white rounded-xl h-[50vh] sticky top-0 right-0 ">
            <DashboardLeftSideBar menu={userDashboardMenu} />
          </div>
        }
        <div className="tabs w-full md:w-[74%] rounded-xl bg-white  border-2 border-accent-300 bg-accent-100">
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
