import React, { FC, memo } from "react";
import { useAdminDashboardContext } from "~/contexts/AdminDashboardContext";
import { useUserDashboardContext } from "~/contexts/UserDashboardContext";
import { isDev } from "~/utils/helpers";
import { DashboardMenuItemsType } from "~/utils/types";

interface DashBoardLeftSidebarPropsType {
  menu: DashboardMenuItemsType[];
  isAdminDashboard?: boolean
}

const DashboardLeftSideBar: FC<DashBoardLeftSidebarPropsType> = memo(
  (props) => {
    const { menu, isAdminDashboard = false } = props;
    const { activeTab, setActiveTab } =  useAdminDashboardContext();
    const handleChangeTab = (clickedItemHref: string) => {
      setActiveTab(clickedItemHref);
    };
    return (
      <div>
        <ul>
          {menu.map((menuItem) => {
            const {name, Icon, href,id } = menuItem
            let isActive = menuItem.href === activeTab;
            return (
              <li
                onClick={() => handleChangeTab(menuItem.href)}
                key={href}
                className={`flex flex-start flex-grow items-center p-2 false rounded-lg text-base cursor-pointer font-normal hover:bg-[#EEEFFF] dark:hover:bg-[#EEEFFF] space-x-3 mb-2 ${
                  isActive && "bg-[#EEEFFF]"
                }`}
              >
                {Icon && <Icon className='w-7 h-7 text-accent'/>}
                <span className="ml-2 text-sm">

                {name}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
);

if (isDev) {
  DashboardLeftSideBar.displayName = "DashboardLeftSideBar";
}

export default DashboardLeftSideBar;
