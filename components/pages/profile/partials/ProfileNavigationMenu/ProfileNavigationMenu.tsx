import { createStyles } from '@mantine/core'
import React, { FC, memo } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { useUserDashboardContext } from '~/contexts/UserDashboardContext'
import { UiNativeSelect } from '~/lib'
import { userDashboardMenu } from '~/utils/data/menus'
import { isDev } from '~/utils/helpers'




const useStyles = createStyles((theme) => ({
   
    input: {
      backgroundColor: "white",
      borderColor: '#E9C46A',
      '&:focus': {
        borderColor: '#E9C46A',
    },
    },
  }));
  


const UserProfileNavigationMenu: FC = memo(
    () => {
        const { activeTab, setActiveTab } = useUserDashboardContext();
        const {classes} = useStyles()
        const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
            const value = e?.currentTarget?.value
            setActiveTab(value)
        }
        const menuOptions = userDashboardMenu.map(menuItem => ({
            value: menuItem.href,
            label: menuItem.name
        }))
        return (
            <div className='my-4 px-3'>
                <UiNativeSelect

                    value={activeTab ?? menuOptions[0]?.value}
                    onChange={handleChange}
                    data={menuOptions}
                    classNames={{input: classes.input}}
                    rightSection={<BiChevronDown />}
                />
            </div>
        )
    }

)


if (isDev) {
    UserProfileNavigationMenu.displayName = 'UserProfileNavigationMenu'
}

export default UserProfileNavigationMenu