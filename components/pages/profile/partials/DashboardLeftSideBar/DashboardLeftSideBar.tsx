import React, {FC, memo} from 'react'
import { isDev } from "~/utils/helpers";
import { DashboardMenuItemsType } from '~/utils/types';


interface DashBoardLeftSidebarPropsType {
  menu: DashboardMenuItemsType[],
}


const DashboardLeftSideBar: FC<DashBoardLeftSidebarPropsType> = memo (

  (props) => {

    const {menu} = props

    return (
      <div>
        <ul>

          {
            menu.map((menuItem)=>{
              return(
                <li className='flex flex-start flex-grow items-center p-2 false rounded-lg text-base cursor-pointer font-normal hover:bg-[#EEEFFF] dark:hover:bg-[#EEEFFF] space-x-3'>{menuItem.name}</li>
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