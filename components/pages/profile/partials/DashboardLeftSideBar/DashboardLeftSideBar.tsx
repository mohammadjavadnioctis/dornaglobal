import React, {FC, memo} from 'react'
import { useUserDashboardContext } from '~/contexts/UserDashboardContext';
import { isDev } from "~/utils/helpers";
import { DashboardMenuItemsType } from '~/utils/types';


interface DashBoardLeftSidebarPropsType {
  menu: DashboardMenuItemsType[],
}



const DashboardLeftSideBar: FC<DashBoardLeftSidebarPropsType> = memo (
  (props) => {
    const {activeTab ,setActiveTab} = useUserDashboardContext()
    console.log('this is set active tab from leftSidebar', setActiveTab)
    const {menu} = props
    const handleChangeTab = (clickedItemHref: string) =>{
      console.log('this is clickedItemHref: ', clickedItemHref)
      setActiveTab(clickedItemHref)
    } 
    return (
      <div>
        <ul>

          {
            menu.map((menuItem)=>{
              let isActive = menuItem.href === activeTab
              return(
                <li onClick={() => handleChangeTab(menuItem.href)} key={menuItem.href} className={`flex flex-start flex-grow items-center p-2 false rounded-lg text-base cursor-pointer font-normal hover:bg-[#EEEFFF] dark:hover:bg-[#EEEFFF] space-x-3 ${isActive && 'bg-[#EEEFFF]'}`}>{menuItem.name}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
)

if(isDev){
  DashboardLeftSideBar.displayName = 'DashboardLeftSideBar'   
}

export default DashboardLeftSideBar