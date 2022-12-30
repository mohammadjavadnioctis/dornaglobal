import React, { FC, memo } from 'react'
import { useUserDashboardContext } from '~/contexts/UserDashboardContext'
import { UiNativeSelect } from '~/lib'
import { userDashboardMenu } from '~/utils/data/menus'
import { isDev } from '~/utils/helpers'

const UserProfileNavigationMenu: FC = memo(
    () => {
        const { activeTab, setActiveTab } = useUserDashboardContext();

        const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
             const value = e?.currentTarget?.value
             setActiveTab(value)
        }
        const menuOptions = userDashboardMenu.map(menuItem => ({
            value: menuItem.href,
            label: menuItem.name
        }))
        return (
            <div>
                <UiNativeSelect
                  
                    value={menuOptions[0]?.value}
                    onChange={handleChange}
                    // data={[
                    //     { value: '', label: '' },
                    //     { value: 'mulkiyet', label: 'Kat Mülkiyet' },
                    //     { value: 'irtifak', label: 'Kat İrtifaklı' },
                    //     { value: 'hisseli', label: 'Hisseli' },
                    //     { value: 'arsa', label: 'Arsa Tapulu' },
                    // ]}
                    data={menuOptions}
                />
            </div>
        )
    }

)


if (isDev) {
    UserProfileNavigationMenu.displayName = 'UserProfileNavigationMenu'
}

export default UserProfileNavigationMenu